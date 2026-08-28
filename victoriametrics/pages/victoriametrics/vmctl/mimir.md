> Release-pinned source for VictoriaMetrics v1.150.0: [docs/victoriametrics/vmctl/mimir.md](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/413f95d65f08d2c3fb03e227b1f3ba42884ca796/docs/victoriametrics/vmctl/mimir.md)

GrafanaLabs Mimir supports [Prometheus remote read API](https://prometheus.io/docs/prometheus/latest/querying/remote_read_api/).
`vmctl` in [remote-read mode](https://docs.victoriametrics.com/victoriametrics/vmctl/remoteread/) can be used
for historical data migration from Mimir.

By default, Mimir uses the `prometheus` path prefix so specifying the source
should be as simple as `--remote-read-src-addr=http://<mimir>:9009/prometheus`.
But if prefix was overridden via `prometheus_http_prefix`, then source address should be updated
to `--remote-read-src-addr=http://<mimir>:9009/{prometheus_http_prefix}`.

When you run Mimir, it exposes a port to serve HTTP on `8080 by default`.

Next example of the local installation was in multi-tenant mode (3 instances of Mimir) with nginx as load balancer.
Load balancer expose single port `:9090`. As you can see in the example we call `:9009` instead of `:8080` because of proxy.

The importing process example for the local installation of Mimir and single-node VictoriaMetrics(`http://localhost:8428`):

```
./vmctl remote-read
--remote-read-src-addr=http://<mimir>:9009/prometheus \
--remote-read-filter-time-start=2021-10-18T00:00:00Z \
--remote-read-step-interval=hour \
--remote-read-headers=X-Scope-OrgID:demo \
--remote-read-use-stream=true \
--vm-addr=http://<victoria-metrics>:8428 \
```

> Mimir supports [streamed remote read API](https://prometheus.io/blog/2019/10/10/remote-read-meets-streaming/),
> so it is recommended setting `--remote-read-use-stream=true` flag for better performance and resource usage.

> You may observe more samples being written to VictoriaMetrics with `--remote-read-use-stream=true`, particularly when using a small `--remote-read-step-interval`, such as minute.
> This is caused by the underlying chunk storage structure in Mimir, and enabling [deduplication](https://docs.victoriametrics.com/victoriametrics/single-server-victoriametrics/#deduplication)
> will eventually remove these duplicates for both querying and storage.

*See how to configure [--vm-addr](https://docs.victoriametrics.com/victoriametrics/vmctl/#configuring-victoriametrics).*

And when the process finishes, you will see the following:

```sh
Split defined times into 8847 ranges to import. Continue? [Y/n]
VM worker 0:→ 12176 samples/s
VM worker 1:→ 11918 samples/s
VM worker 2:→ 11261 samples/s
VM worker 3:→ 12861 samples/s
VM worker 4:→ 11096 samples/s
VM worker 5:→ 11575 samples/s
Processing ranges: 8847 / 8847 [█████████████████████████████████████████████████████████████████████████████] 100.00%
2022/10/21 17:22:23 Import finished!
2022/10/21 17:22:23 VictoriaMetrics importer stats:
  idle duration: 0s;
  time spent while importing: 15.379614356s;
  total samples: 81243;
  samples/s: 5282.51;
  total bytes: 6.1 MB;
  bytes/s: 397.8 kB;
  import requests: 6;
  import requests retries: 0;
2022/10/21 17:22:23 Total time: 16.287405248s
```

## Configuration

If you run Mimir installation in multi-tenant mode, remote read protocol requires an Authentication header like `X-Scope-OrgID`. Y
ou can define it via the flag `--remote-read-headers=X-Scope-OrgID:demo`.

See [remote-read mode](https://docs.victoriametrics.com/victoriametrics/vmctl/remoteread/) for more details.

See also general [vmctl migration tips](https://docs.victoriametrics.com/victoriametrics/vmctl/#migration-tips).

### Read data from the remote storage like S3, GCS, Azure etc.

If you have data stored in remote storage like S3, GCS, Azure etc. you can use `vmctl` in `mimir` mode to read data from
the remote storage and import it into VictoriaMetrics. In this mode `vmctl` reads data from the remote storage or file system
and checks index file, define needed blocks to be processed. After it downloads blocks by defined filters and
use Prometheus converter to read and sent data to VictoriaMetrics.

The following example shows how to read data from the file system and import it into VictoriaMetrics:

```sh
./vmctl mimir --mimir-path="fs:///mimir/test_data/mimir-tsdb" \                                               ? ? orbstack
  --mimir-tenant-id=anonymous \
  --mimir-filter-time-start=2024-12-01T00:00:00 \
  --mimir-filter-time-end=2024-12-18T23:59:59 \
  --mimir-creds-file-path=creads \
  --vm-concurrency=6 \
  --mimir-concurrency=6 \
  --vm-addr=http://localhost:8428/
```

This approach is useful when you have data stored on the local file system or you have a mounted volume,
download the data from the remote storage etc.

The following example shows how to read data from the remote storage and import it into VictoriaMetrics:

```sh
./vmctl mimir --mimir-path="s3:///mimir-tsdb/anonymous" \
  --mimir-filter-time-start=2024-12-01T00:00:00 \
  --mimir-filter-time-end=2024-12-17T23:59:59 \
  --mimir-creds-file-path=creads \
  --mimir-custom-s3-endpoint='http://localhost:9000' \
  --vm-concurrency=6 \
  --mimir-concurrency=6 \
  --vm-addr=http://localhost:8428/
```

In the example above we are used `--mimir-custom-s3-endpoint` flag to specify the custom S3 endpoint if it is needed.

When the process finishes, you will see the following:

```sh
2025/01/18 13:01:59 Fetching blocks from remote storage
Found 204 blocks to import. Continue? [Y/n] y
VM worker 0:? 1589405 samples/s
VM worker 1:? 1911834 samples/s
VM worker 2:? 1849187 samples/s
VM worker 3:? 1648820 samples/s
VM worker 4:? 1539212 samples/s
VM worker 5:? 1411485 samples/s
Processing blocks: 204 / 204 [?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????] 100.00%
2025/01/18 13:02:18 Import finished!
2025/01/18 13:02:18 VictoriaMetrics importer stats:
  idle duration: 18.485875611s;
  time spent while importing: 16.40543875s;
  total samples: 177961995;
  samples/s: 10847743.71;
  total bytes: 4.1 GB;
  bytes/s: 248.2 MB;
  import requests: 893;
  import requests retries: 0;
2025/01/18 13:02:18 Total time: 18.867547083s
```

See `./vmctl mimir --help` for details and full list of flags:

```shellhelp
NAME:
   vmctl mimir - Migrate time series from Mimir object storage or local filesystem

USAGE:
   vmctl mimir [command options]

OPTIONS:
   -s                                                                 Whether to run in silent mode. If set to true no confirmation prompts will appear. (default: false)
   --verbose                                                          Whether to enable verbosity in logs output. (default: false)
   --disable-progress-bar                                             Whether to disable progress bar during the import. (default: false)
   --pushmetrics.url value [ --pushmetrics.url value ]                Optional URL to push metrics. See https://docs.victoriametrics.com/victoriametrics/single-server-victoriametrics/#push-metrics
   --pushmetrics.interval value                                       Interval for pushing metrics to every -pushmetrics.url (default: 10s)
   --pushmetrics.extraLabel value [ --pushmetrics.extraLabel value ]  Extra labels to add to pushed metrics. In case of collision, label value defined by flag will have priority. Flag can be set multiple times, to add few additional labels. For example, -pushmetrics.extraLabel='instance="foo"' adds instance="foo" label to all the metrics pushed to every -pushmetrics.url
   --pushmetrics.header value [ --pushmetrics.header value ]          Optional HTTP headers to add to pushed metrics. Flag can be set multiple times, to add few additional headers.
   --pushmetrics.disableCompression                                   Whether to disable compression when pushing metrics. (default: false)
   --mimir-path value                                                 Path to Mimir storage bucket or local folder.
   --mimir-tenant-id value                                            Tenant ID for Mimir storage
   --mimir-concurrency value                                          Number of concurrently running block readers (default: 1)
   --mimir-filter-time-start value                                    The time filter in RFC3339 format to select timeseries with timestamp equal or higher than provided value. E.g. '2020-01-01T20:07:00Z'
   --mimir-filter-time-end value                                      The time filter in RFC3339 format to select timeseries with timestamp equal or lower than provided value. E.g. '2020-01-01T20:07:00Z'
   --mimir-filter-label value                                         Mimir label name to filter timeseries by. E.g. '__name__' will filter timeseries by name.
   --mimir-filter-label-value value                                   Regular expression to filter label from "mimir-filter-label" flag. (default: ".*")
   --mimir-creds-file-path value                                      Path to file with GCS or S3 credentials. Credentials are loaded from default locations if not set. See https://cloud.google.com/iam/docs/creating-managing-service-account-keys and https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html
   --mimir-config-file-path value                                     Path to file with S3 configs. Configs are loaded from default location if not set. See https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html
   --mimir-config-profile value                                       Profile name for S3 configs. If no set, the value of the environment variable will be loaded (AWS_PROFILE or AWS_DEFAULT_PROFILE), or if both not set, DefaultSharedConfigProfile is used
   --mimir-custom-s3-endpoint value                                   Custom S3 endpoint for use with S3-compatible storages (e.g. MinIO). S3 is used if not set
   --mimir-s3-force-path-style                                        Prefixing endpoint with bucket name when set false, true by default. (default: true)
   --mimir-s3-tls-insecure-skip-verify                                Whether to skip TLS verification when connecting to the S3 endpoint. (default: false)
   --mimir-s3-sse-kms-key-id value                                    SSE KMS Key ID for use with S3-compatible storages.
   --mimir-s3-sse-algorithm value                                     SSE algorithm for use with S3-compatible storages.
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
