> Release-pinned source for VictoriaMetrics v1.151.0: [docs/victoriametrics/vmctl/opentsdb.md](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/83fc70c6aced8c99a0a445a872ee891191b98517/docs/victoriametrics/vmctl/opentsdb.md)

`vmctl` can migrate historical data from OpenTSDB to VictoriaMetrics.
See `./vmctl opentsdb --help` for details and full list of flags.

> **Important:** OpenTSDB migration is not possible without a functioning [meta](http://opentsdb.net/docs/build/html/user_guide/metadata.html)
> table to search for metrics/series. Check in OpenTSDB config that appropriate options are [activated](https://github.com/OpenTSDB/opentsdb/issues/681#issuecomment-177359563)
> and HBase meta tables are present. W/o them migration won't work.

OpenTSDB migration works like so:

1. Find metrics based on selected filters (or the default filter set `['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']`):

   `curl -Ss "http://opentsdb:4242/api/suggest?type=metrics&q=sys"`

2. Find series associated with each returned metric:

   `curl -Ss "http://opentsdb:4242/api/search/lookup?m=system.load5&limit=1000000"`

   Here `results` return field should not be empty. Otherwise, it means that meta tables are absent and needs to be turned on previously.

3. Download data for each series in chunks defined in the CLI switches:

   `-retention=sum-1m-avg:1h:90d` means:

   - `curl -Ss "http://opentsdb:4242/api/query?start=1h-ago&end=now&m=sum:1m-avg-none:system.load5\{host=host1\}"`
   - `curl -Ss "http://opentsdb:4242/api/query?start=2h-ago&end=1h-ago&m=sum:1m-avg-none:system.load5\{host=host1\}"`
   - `curl -Ss "http://opentsdb:4242/api/query?start=3h-ago&end=2h-ago&m=sum:1m-avg-none:system.load5\{host=host1\}"`
   - ...
   - `curl -Ss "http://opentsdb:4242/api/query?start=2160h-ago&end=2159h-ago&m=sum:1m-avg-none:system.load5\{host=host1\}"`

This means that we must stream data from OpenTSDB to VictoriaMetrics in chunks. This is where concurrency for OpenTSDB comes in.
We can query multiple chunks at once, but we shouldn't perform too many chunks at a time to avoid overloading the OpenTSDB cluster.

```sh
$ ./vmctl opentsdb --otsdb-addr http://opentsdb:4242/ --otsdb-retentions sum-1m-avg:1h:1d \
  --otsdb-filters system \
  --otsdb-normalize \
  --vm-addr <victoriametrics-addr>:8428 \
OpenTSDB import mode
2021/04/09 11:52:50 Will collect data starting at TS 1617990770
2021/04/09 11:52:50 Loading all metrics from OpenTSDB for filters:  [system]
Found 9 metrics to import. Continue? [Y/n]
2021/04/09 11:52:51 Starting work on system.load1
23 / 402200 [>____________________________________________________________________________________________] 0.01% 2 p/s
```

*See how to configure [--vm-addr](https://docs.victoriametrics.com/victoriametrics/vmctl/#configuring-victoriametrics).*

## Retention strings

Starting with a relatively simple retention string (`sum-1m-avg:1h:30d`), let's describe how this is converted into actual queries.

There are two essential parts of a retention string:

1. [aggregation](#aggregation)
2. [windows/time ranges](#windows)

## Aggregation

Retention strings essentially define the two levels of aggregation for our collected series.

`sum-1m-avg` would become:

- First order: `sum`
- Second order: `1m-avg-none`

### First Order Aggregations

First-order aggregation addresses how to aggregate any un-mentioned tags.

This is, conceptually, directly opposite to how PromQL deals with tags. In OpenTSDB, if a tag isn't explicitly mentioned,
all values associated with that tag will be aggregated.

It is recommended to use `sum` for the first aggregation because it is relatively quick and should not cause any changes
to the incoming data (because we collect each individual series).

### Second Order Aggregations

Second-order aggregation (`1m-avg` in our example) defines any windowing that should occur before returning the data.
It is recommended to match the stat collection interval, so we again avoid transforming incoming data.

We do not allow for defining the "null value" portion of the rollup window (e.g. in the aggregation, `1m-avg-none`,
the user cannot change `none`), as the goal of this tool is to avoid modifying incoming data.

## Windows

There are two important windows we define in a retention string:

1. the "chunk" range of each query
2. The time range we will be querying on with that "chunk"

From our example, our windows are `1h:30d`.

### Window "chunks"

The window `1h` means that each individual query to OpenTSDB should only span 1 hour of time (e.g. `start=2h-ago&end=1h-ago`).

It is important to ensure this window somewhat matches the row size in HBase to help improve query times.

For example, if the query is hitting a rollup table with a 4-hour row size, we should set a chunk size of a multiple of
4 hours (e.g. `4h`, `8h`, etc.) to avoid requesting data across row boundaries. Landing on row boundaries allows for more
consistent request times to HBase.

The default table created in HBase for OpenTSDB has a 1-hour row size, so if you aren't sure on a correct row size to use,
`1h` is a reasonable choice.

### Time range

The time range `30d` simply means we are asking for the last 30 days of data. This time range can be written using `h`, `d`, `w`, or `y`. (We can't use `m` for month because it already means `minute` in time parsing).

## Results of retention string

The resultant queries that will be created, based on our example retention string of `sum-1m-avg:1h:30d` look like this:

```sh
http://opentsdb:4242/api/query?start=1h-ago&end=now&m=sum:1m-avg-none:<series>
http://opentsdb:4242/api/query?start=2h-ago&end=1h-ago&m=sum:1m-avg-none:<series>
http://opentsdb:4242/api/query?start=3h-ago&end=2h-ago&m=sum:1m-avg-none:<series>
...
http://opentsdb:4242/api/query?start=721h-ago&end=720h-ago&m=sum:1m-avg-none:<series>
```

Chunking the data like this means each individual query returns faster, so we can start populating data into VictoriaMetrics quicker.

## Restarting OpenTSDB migrations

One important note for OpenTSDB migration: Queries/HBase scans can "get stuck" within OpenTSDB itself.
This can cause instability and performance issues within an OpenTSDB cluster, so stopping the migrator to deal with it may be necessary.
Because of this, we provide the timestamp we started collecting data from at the beginning of the run.
You can stop and restart the importer using this "hard timestamp" to ensure you collect data from the same time range over multiple runs.

## Configuration

In OpenTSDB mode, vmctl fetches data from the OpenTSDB by executing read queries. The speed of migration is mostly limited
by capabilities of OpenTSDB to respond to these queries fast enough. vmctl executes one read request at a time by default.
Increase `--otsdb-concurrency` to execute more read requests concurrently. But make sure to not overwhelm OpenTSDB
during migration.

See general [vmctl migration tips](https://docs.victoriametrics.com/victoriametrics/vmctl/#migration-tips).

See `./vmctl opentsdb --help` for details and full list of flags:

```shellhelp
NAME:
   vmctl opentsdb - Migrate time series from OpenTSDB

USAGE:
   vmctl opentsdb [command options]

OPTIONS:
   -s                                                                 Whether to run in silent mode. If set to true no confirmation prompts will appear. (default: false)
   --verbose                                                          Whether to enable verbosity in logs output. (default: false)
   --disable-progress-bar                                             Whether to disable progress bar during the import. (default: false)
   --pushmetrics.url value [ --pushmetrics.url value ]                Optional URL to push metrics. See https://docs.victoriametrics.com/victoriametrics/single-server-victoriametrics/#push-metrics
   --pushmetrics.interval value                                       Interval for pushing metrics to every -pushmetrics.url (default: 10s)
   --pushmetrics.extraLabel value [ --pushmetrics.extraLabel value ]  Extra labels to add to pushed metrics. In case of collision, label value defined by flag will have priority. Flag can be set multiple times, to add few additional labels. For example, -pushmetrics.extraLabel='instance="foo"' adds instance="foo" label to all the metrics pushed to every -pushmetrics.url
   --pushmetrics.header value [ --pushmetrics.header value ]          Optional HTTP headers to add to pushed metrics. Flag can be set multiple times, to add few additional headers.
   --pushmetrics.disableCompression                                   Whether to disable compression when pushing metrics. (default: false)
   --otsdb-addr value                                                 OpenTSDB server addr (default: "http://localhost:4242")
   --otsdb-concurrency value                                          Number of concurrently running fetch queries to OpenTSDB per metric (default: 1)
   --otsdb-retentions value [ --otsdb-retentions value ]              Retentions patterns to collect on. Each pattern should describe the aggregation performed for the query, the row size (in HBase) that will define how long each individual query is, and the time range to query for. e.g. sum-1m-avg:1h:3d. The first time range defined should be a multiple of the row size in HBase. e.g. if the row size is 2 hours, 4h is good, 5h less so. We want each query to land on unique rows.
   --otsdb-filters value [ --otsdb-filters value ]                    Filters to process for discovering metrics in OpenTSDB (default: "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
   --otsdb-offset-days value                                          Days to offset our 'starting' point for collecting data from OpenTSDB (default: 0)
   --otsdb-hard-ts-start value                                        A specific timestamp to start from, will override using an offset (default: 0)
   --otsdb-query-limit value                                          Result limit on meta queries to OpenTSDB (affects both metric name and tag value queries, recommended to use a value exceeding your largest series) (default: 100000000)
   --otsdb-msecstime                                                  Whether OpenTSDB is writing values in milliseconds or seconds (default: false)
   --otsdb-normalize                                                  Whether to normalize all data received to lower case before forwarding to VictoriaMetrics (default: false)
   --otsdb-cert-file value                                            Optional path to client-side TLS certificate file to use when connecting to -otsdb-addr
   --otsdb-key-file value                                             Optional path to client-side TLS key to use when connecting to -otsdb-addr
   --otsdb-CA-file value                                              Optional path to TLS CA file to use for verifying connections to -otsdb-addr. By default, system CA is used
   --otsdb-server-name value                                          Optional TLS server name to use for connections to -otsdb-addr. By default, the server name from -otsdb-addr is used
   --otsdb-insecure-skip-verify                                       Whether to skip tls verification when connecting to -otsdb-addr (default: false)
   --vm-addr value                                                    VictoriaMetrics address to perform import requests.
      Should be the same as --httpListenAddr value for single-node version or vminsert component.
      When importing into the clustered version do not forget to set additionally --vm-account-id flag.
      Please note, that vmctl performs initial readiness check for the given address by checking /health endpoint. (default: "http://localhost:8428")
   --vm-user value      VictoriaMetrics username for basic auth [$VM_USERNAME]
   --vm-password value  VictoriaMetrics password for basic auth [$VM_PASSWORD]
   --vm-headers value   Optional HTTP headers to send with each request to the corresponding destination address.
      For example, --vm-headers='My-Auth:foobar' would send 'My-Auth: foobar' HTTP header with every request to the corresponding destination address.
      Multiple headers must be delimited by '^^': --vm-headers='header1:value1^^header2:value2'
   --vm-bearer-token value  Optional bearer auth token to use for the corresponding --vm-addr
   --vm-account-id value    AccountID is an arbitrary 32-bit integer identifying namespace for data ingestion (aka tenant).
      AccountID is required when importing into the clustered version of VictoriaMetrics.
      It is possible to set it as accountID:projectID, where projectID is also arbitrary 32-bit integer.
      If projectID isn't set, then it equals to 0
   --vm-concurrency value                             Number of workers concurrently performing import requests to VM (default: 2)
   --vm-compress                                      Whether to apply gzip compression to import requests (default: true)
   --vm-batch-size value                              How many samples importer collects before sending the import request to VM (default: 200000)
   --vm-significant-figures value                     The number of significant figures to leave in metric values before importing. See https://en.wikipedia.org/wiki/Significant_figures. Zero value saves all the significant figures. This option may be used for increasing on-disk compression level for the stored metrics. See also --vm-round-digits option (default: 0)
   --vm-round-digits value                            Round metric values to the given number of decimal digits after the point. This option may be used for increasing on-disk compression level for the stored metrics. See also --vm-significant-figures option (default: 100)
   --vm-extra-label value [ --vm-extra-label value ]  Extra labels, that will be added to imported timeseries. In case of collision, label value defined by flag will have priority. Flag can be set multiple times, to add few additional labels.
   --vm-rate-limit value                              Optional data transfer rate limit in bytes per second.
      By default, the rate limit is disabled. It can be useful for limiting load on configured via '--vm-addr' destination. (default: 0)
   --vm-cert-file value             Optional path to client-side TLS certificate file to use when connecting to '--vm-addr'
   --vm-key-file value              Optional path to client-side TLS key to use when connecting to '--vm-addr'
   --vm-CA-file value               Optional path to TLS CA file to use for verifying connections to '--vm-addr'. By default, system CA is used
   --vm-server-name value           Optional TLS server name to use for connections to '--vm-addr'. By default, the server name from '--vm-addr' is used
   --vm-insecure-skip-verify        Whether to skip tls verification when connecting to '--vm-addr' (default: false)
   --vm-backoff-retries value       How many import retries to perform before giving up. (default: 10)
   --vm-backoff-factor value        Factor to multiply the base duration after each failed import retry. Must be greater than 1.0 (default: 1.8)
   --vm-backoff-min-duration value  Minimum duration to wait before the first import retry. Each subsequent import retry will be multiplied by the '--vm-backoff-factor'. (default: 2s)
   --help, -h                       show help
```
