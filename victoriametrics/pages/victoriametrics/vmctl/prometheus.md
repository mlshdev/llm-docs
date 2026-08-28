> Release-pinned source for VictoriaMetrics v1.150.0: [docs/victoriametrics/vmctl/prometheus.md](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/413f95d65f08d2c3fb03e227b1f3ba42884ca796/docs/victoriametrics/vmctl/prometheus.md)

`vmctl` can migrate historical data from Prometheus to VictoriaMetrics by reading [Prometheus snapshot](https://prometheus.io/docs/prometheus/latest/querying/api/#snapshot).
See `./vmctl prometheus --help` for details and full list of flags. Also see Prometheus [related articles](https://docs.victoriametrics.com/victoriametrics/vmctl/#articles).

To start migration, take [a snapshot of Prometheus data](https://www.robustperception.io/taking-snapshots-of-prometheus-data)
and made it accessible for vmctl in the same filesystem:

```sh
./vmctl prometheus \
  --vm-addr=<victoriametrics-addr>:8428 \
  --prom-snapshot=/path/to/snapshot
```

*See how to configure [--vm-addr](https://docs.victoriametrics.com/victoriametrics/vmctl/#configuring-victoriametrics).*

As soon as required flags are provided and healthchecks are done, `vmctl` will start exploring Prometheus snapshot.
It fetches all available blocks from the snapshot, reads the metadata and prints stats for discovered data:

```sh
./vmctl prometheus --prom-snapshot=/path/to/snapshot \
  --vm-addr=http://localhost:8428
Prometheus import mode
Prometheus snapshot stats:
  blocks found: 14;
  blocks skipped: 0;
  min time: 1581288163058 (2020-02-09T22:42:43Z);
  max time: 1582409128139 (2020-02-22T22:05:28Z);
  samples: 32549106;
  series: 27289.
Found 14 blocks to import. Continue? [Y/n] y
14 / 14 [-------------------------------------------------------------------------------------------] 100.00% 0 p/s
2020/02/23 15:50:03 Import finished!
2020/02/23 15:50:03 VictoriaMetrics importer stats:
  idle duration: 6.152953029s;
  time spent while importing: 44.908522491s;
  total samples: 32549106;
  samples/s: 724786.84;
  total bytes: 669.1 MB;
  bytes/s: 14.9 MB;
  import requests: 323;
  import requests retries: 0;
2020/02/23 15:50:03 Total time: 51.077451066s
```

## Filtering

Filtering by time is configured via flags `--prom-filter-time-start` and `--prom-filter-time-end` in RFC3339 format.
The filter is applied twice: to drop blocks on exploration phase and to filter timeseries within the blocks:

```sh
./vmctl prometheus --prom-snapshot=/path/to/snapshot \
  --prom-filter-time-start=2020-02-07T00:07:01Z \
  --prom-filter-time-end=2020-02-11T00:07:01Z
Prometheus import mode
Prometheus snapshot stats:
  blocks found: 2;
  blocks skipped: 12;
  min time: 1581288163058 (2020-02-09T22:42:43Z);
  max time: 1581328800000 (2020-02-10T10:00:00Z);
  samples: 1657698;
  series: 3930.
Found 2 blocks to import. Continue? [Y/n] y
```

Filtering by labels is configured with following flags:

- `--prom-filter-label` - the label name, e.g. `__name__` or `instance`;
- `--prom-filter-label-value` - the regular expression to filter the label value. By default, matches all `.*`

For example:

```sh
./vmctl prometheus --prom-snapshot=/path/to/snapshot \
  --prom-filter-label="__name__" \
  --prom-filter-label-value="promhttp.*" \
  --prom-filter-time-start=2020-02-07T00:07:01Z \
  --prom-filter-time-end=2020-02-11T00:07:01Z
Prometheus import mode
Prometheus snapshot stats:
  blocks found: 2;
  blocks skipped: 12;
  min time: 1581288163058 (2020-02-09T22:42:43Z);
  max time: 1581328800000 (2020-02-10T10:00:00Z);
  samples: 1657698;
  series: 3930.
Found 2 blocks to import. Continue? [Y/n] y
14 / 14 [-----------------------------------------------------------------------------------------------] 100.00% ? p/s
2020/02/23 15:51:07 Import finished!
2020/02/23 15:51:07 VictoriaMetrics importer stats:
  idle duration: 0s;
  time spent while importing: 37.415461ms;
  total samples: 10128;
  samples/s: 270690.24;
  total bytes: 195.2 kB;
  bytes/s: 5.2 MB;
  import requests: 2;
  import requests retries: 0;
2020/02/23 15:51:07 Total time: 7.153158218s
```

## Configuration

In Prometheus mode, vmctl reads data from the given snapshot using Prometheus library. Its performance for is limited
by the library performance, by the disk IO, and by `--prom-concurrency` - the number of concurrent readers. Prefer
setting `--prom-concurrency` to the number of available to vmctl CPU cores.

See general [vmctl migration tips](https://docs.victoriametrics.com/victoriametrics/vmctl/#migration-tips).

See `./vmctl prometheus --help` for details and full list of flags:

```shellhelp
NAME:
   vmctl prometheus - Migrate time series from Prometheus

USAGE:
   vmctl prometheus [command options]

OPTIONS:
   -s                                                                 Whether to run in silent mode. If set to true no confirmation prompts will appear. (default: false)
   --verbose                                                          Whether to enable verbosity in logs output. (default: false)
   --disable-progress-bar                                             Whether to disable progress bar during the import. (default: false)
   --pushmetrics.url value [ --pushmetrics.url value ]                Optional URL to push metrics. See https://docs.victoriametrics.com/victoriametrics/single-server-victoriametrics/#push-metrics
   --pushmetrics.interval value                                       Interval for pushing metrics to every -pushmetrics.url (default: 10s)
   --pushmetrics.extraLabel value [ --pushmetrics.extraLabel value ]  Extra labels to add to pushed metrics. In case of collision, label value defined by flag will have priority. Flag can be set multiple times, to add few additional labels. For example, -pushmetrics.extraLabel='instance="foo"' adds instance="foo" label to all the metrics pushed to every -pushmetrics.url
   --pushmetrics.header value [ --pushmetrics.header value ]          Optional HTTP headers to add to pushed metrics. Flag can be set multiple times, to add few additional headers.
   --pushmetrics.disableCompression                                   Whether to disable compression when pushing metrics. (default: false)
   --prom-snapshot value                                              Path to Prometheus snapshot. Pls see for details https://www.robustperception.io/taking-snapshots-of-prometheus-data
   --prom-concurrency value                                           Number of concurrently running snapshot readers (default: 1)
   --prom-filter-time-start value                                     The time filter in RFC3339 format to select timeseries with timestamp equal or higher than provided value. E.g. '2020-01-01T20:07:00Z'
   --prom-filter-time-end value                                       The time filter in RFC3339 format to select timeseries with timestamp equal or lower than provided value. E.g. '2020-01-01T20:07:00Z'
   --prom-filter-label value                                          Prometheus label name to filter timeseries by. E.g. '__name__' will filter timeseries by name.
   --prom-filter-label-value value                                    Prometheus regular expression to filter label from "prom-filter-label" flag. (default: ".*")
   --prom-tmp-dir-path value                                          Path to directory to be used for temporary files. (default: os.TempDir())
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
