> Release-pinned source for VictoriaMetrics v1.150.0: [docs/victoriametrics/vmctl/influxdb.md](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/413f95d65f08d2c3fb03e227b1f3ba42884ca796/docs/victoriametrics/vmctl/influxdb.md)

`vmctl` can migrate historical data from InfluxDB (v1) to VictoriaMetrics. See `./vmctl influx --help` for details and
full list of flags. Also see [migrating data from InfluxDB to VictoriaMetrics](https://docs.victoriametrics.com/guides/migrate-from-influx/) article.

To start migration, specify the InfluxDB address `--influx-addr`, database `--influx-database` and VictoriaMetrics address `--vm-addr`:

```sh
./vmctl influx --influx-addr=http://<influx-addr>:8086 \
  --influx-database=benchmark \
  --vm-addr=http://<victoriametrics-addr>:8428
InfluxDB import mode
2020/01/18 20:47:11 Exploring scheme for database "benchmark"
2020/01/18 20:47:11 fetching fields: command: "show field keys"; database: "benchmark"; retention: "autogen"
2020/01/18 20:47:11 found 10 fields
2020/01/18 20:47:11 fetching series: command: "show series "; database: "benchmark"; retention: "autogen"
Found 40000 timeseries to import. Continue? [Y/n] y
40000 / 40000 [----------------------------------------------------------------------------------------] 100.00% 21 p/s
2020/01/18 21:19:00 Import finished!
2020/01/18 21:19:00 VictoriaMetrics importer stats:
  idle duration: 13m51.461434876s;
  time spent while importing: 17m56.923899847s;
  total samples: 345600000;
  samples/s: 320914.04;
  total bytes: 5.9 GB;
  bytes/s: 5.4 MB;
  import requests: 40001;
2020/01/18 21:19:00 Total time: 31m48.467044016s
```

*See how to configure [--vm-addr](https://docs.victoriametrics.com/victoriametrics/vmctl/#configuring-victoriametrics).*

## Data mapping

vmctl modifies InfluxDB data by using the following rules:

- Field values are mapped to time series values.
- Tags are mapped to [labels](https://docs.victoriametrics.com/victoriametrics/keyconcepts/#labels) format as-is.
- `influx-database` is mapped into `db` label value, unless `db` tag already exists in the InfluxDB line.
  To skip this mapping, enable flag `influx-skip-database-label`.
- Field names are mapped to time series names prefixed with `{measurement}{separator}` value,
  where `{separator}` equals to `_` by default. It can be changed with `--influx-measurement-field-separator` cmd-line flag.

For example, the following InfluxDB line:

```text
foo,tag1=value1,tag2=value2 field1=12,field2=40
```

is converted into the following format in VictoriaMetrics:

```text
foo_field1{tag1="value1", tag2="value2"} 12
foo_field2{tag1="value1", tag2="value2"} 40
```

See more about [data model differences](https://docs.victoriametrics.com/guides/migrate-from-influx/#data-model-differences)
between VictoriaMetrics and InfluxDB.

## Filtering

Additional filtering for exported data from InfluxDB can be applied via `--influx-filter-series` flag. For example:

```sh
./vmctl influx --influx-database benchmark \
  --influx-filter-series "on benchmark from cpu where hostname='host_1703'"
InfluxDB import mode
2020/01/26 14:23:29 Exploring scheme for database "benchmark"
2020/01/26 14:23:29 fetching fields: command: "show field keys"; database: "benchmark"; retention: "autogen"
2020/01/26 14:23:29 found 12 fields
2020/01/26 14:23:29 fetching series: command: "show series on benchmark from cpu where hostname='host_1703'"; database: "benchmark"; retention: "autogen"
Found 10 timeseries to import. Continue? [Y/n]
```

The timeseries select query would be following:
`fetching series: command: "show series on benchmark from cpu where hostname='host_1703'"; database: "benchmark"; retention: "autogen"`

To filter by time specify the following flags:

- `--influx-filter-time-start`
- `--influx-filter-time-end`

Here's an example of importing timeseries for one day only:

```sh
./vmctl influx --influx-database benchmark \
  --influx-filter-time-start "2020-01-01T10:07:00Z" \
  --influx-filter-time-end "2020-01-01T15:07:00Z"
```

See more about [time filtering in InfluxDB](https://docs.influxdata.com/influxdb/v1/query_language/explore-schema/#filter-meta-queries-by-time).

## InfluxDB v2

Migrating data from InfluxDB v2.x is not supported yet ([#32](https://github.com/VictoriaMetrics/vmctl/issues/32)).
You may find useful a 3rd party solution for this - <https://github.com/jonppe/influx_to_victoriametrics>.

## Configuration

In Influx mode, vmctl fetches data from the InfluxDB by executing read queries. The speed of migration is mostly limited
by capabilities of InfluxDB to respond to these queries fast enough. vmctl executes one read request at a time by default.
Increase `--influx-concurrency` to execute more read requests concurrently. But make sure to not overwhelm InfluxDB
during migration.

The flag `--influx-chunk-size` controls the max amount of datapoints to return in single chunk from fetch requests.
Please see more details [here](https://archive.docs.influxdata.com/influxdb/v1.2/guides/querying_data/#chunking).
The chunk size is used to control InfluxDB memory usage, so it won't OOM on processing large timeseries with
billions of datapoints.

See general [vmctl migration tips](https://docs.victoriametrics.com/victoriametrics/vmctl/#migration-tips).

See `./vmctl influx --help` for details and full list of flags:

```shellhelp
NAME:
   vmctl influx - Migrate time series from InfluxDB

USAGE:
   vmctl influx [command options]

OPTIONS:
   -s                                                                 Whether to run in silent mode. If set to true no confirmation prompts will appear. (default: false)
   --verbose                                                          Whether to enable verbosity in logs output. (default: false)
   --disable-progress-bar                                             Whether to disable progress bar during the import. (default: false)
   --pushmetrics.url value [ --pushmetrics.url value ]                Optional URL to push metrics. See https://docs.victoriametrics.com/victoriametrics/single-server-victoriametrics/#push-metrics
   --pushmetrics.interval value                                       Interval for pushing metrics to every -pushmetrics.url (default: 10s)
   --pushmetrics.extraLabel value [ --pushmetrics.extraLabel value ]  Extra labels to add to pushed metrics. In case of collision, label value defined by flag will have priority. Flag can be set multiple times, to add few additional labels. For example, -pushmetrics.extraLabel='instance="foo"' adds instance="foo" label to all the metrics pushed to every -pushmetrics.url
   --pushmetrics.header value [ --pushmetrics.header value ]          Optional HTTP headers to add to pushed metrics. Flag can be set multiple times, to add few additional headers.
   --pushmetrics.disableCompression                                   Whether to disable compression when pushing metrics. (default: false)
   --influx-addr value                                                InfluxDB server addr (default: "http://localhost:8086")
   --influx-user value                                                InfluxDB user [$INFLUX_USERNAME]
   --influx-password value                                            InfluxDB user password [$INFLUX_PASSWORD]
   --influx-database value                                            InfluxDB database
   --influx-retention-policy value                                    InfluxDB retention policy (default: "autogen")
   --influx-chunk-size value                                          The chunkSize defines max amount of series to be returned in one chunk (default: 10000)
   --influx-concurrency value                                         Number of concurrently running fetch queries to InfluxDB (default: 1)
   --influx-filter-series value                                       InfluxDB filter expression to select series. E.g. "from cpu where arch='x86' AND hostname='host_2753'".
      See for details https://docs.influxdata.com/influxdb/v1.7/query_language/schema_exploration#show-series
   --influx-filter-time-start value            The time filter to select timeseries with timestamp equal or higher than provided value. E.g. '2020-01-01T20:07:00Z'
   --influx-filter-time-end value              The time filter to select timeseries with timestamp equal or lower than provided value. E.g. '2020-01-01T20:07:00Z'
   --influx-measurement-field-separator value  The {separator} symbol used to concatenate {measurement} and {field} names into series name {measurement}{separator}{field}. (default: "_")
   --influx-skip-database-label                Whether to skip adding the label 'db' to timeseries. (default: false)
   --influx-prometheus-mode                    Whether to restore the original timeseries name previously written from Prometheus to InfluxDB v1 via remote_write. (default: false)
   --influx-cert-file value                    Optional path to client-side TLS certificate file to use when connecting to -influx-addr
   --influx-key-file value                     Optional path to client-side TLS key to use when connecting to -influx-addr
   --influx-CA-file value                      Optional path to TLS CA file to use for verifying connections to -influx-addr. By default, system CA is used
   --influx-server-name value                  Optional TLS server name to use for connections to -influx-addr. By default, the server name from -influx-addr is used
   --influx-insecure-skip-verify               Whether to skip tls verification when connecting to -influx-addr (default: false)
   --vm-addr value                             VictoriaMetrics address to perform import requests.
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
