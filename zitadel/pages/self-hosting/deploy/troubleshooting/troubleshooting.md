> Release-pinned source for ZITADEL v4.17.2: [apps/docs/content/self-hosting/deploy/troubleshooting/troubleshooting.mdx](https://zitadel.com/docs/self-hosting/deploy/troubleshooting/troubleshooting)

## Instance not found

`ID=QUERY-n0wng Message=Instance not found`

If you're self-hosting with a Custom Domain, you need to instruct ZITADEL to use the `ExternalDomain`.
You can find further instructions in our guide about [Custom Domains](https://zitadel.com/docs/self-hosting/manage/custom-domain).
We also provide a guide on how to [configure](https://zitadel.com/docs/self-hosting/manage/configure) ZITADEL with variables from files or environment variables.

## upstream sent too big header while reading response header from upstream

If you operate Zitadel behind a Reverse Proxy or Ingress inside a Kubernetes cluster,
you may encounter an Error like `upstream sent too big header while reading response header from upstream`
in your NGINX Logs and receive a 403 Error when accessing NGINX.

you can solve it by increasing the grpc buffer size in your nginx config:

### Ingress NGINX

```yaml
ingress:
enabled: true
annotations:
    nginx.ingress.kubernetes.io/modsecurity-snippet: |
        SecRuleRemoveById 949110
    nginx.ingress.kubernetes.io/backend-protocol: "GRPC"
    nginx.ingress.kubernetes.io/configuration-snippet: |
        grpc_set_header Host $host;
        more_clear_input_headers "Host" "X-Forwarded-Host";
        proxy_set_header Host $http_host;
        proxy_set_header X-Forwarded-Host $http_x_forwarded_host;
    # highlight-next-line
    nginx.ingress.kubernetes.io/server-snippet: "grpc_buffer_size 8k;"
```

### NGINX Config

```nginx
    http {
        server {
            listen 80;
            http2 on;
            location / {
                grpc_pass grpc://zitadel-disabled-tls:8080;
                grpc_set_header Host $host:$server_port;
                # highlight-next-line
                grpc_buffer_size 8k;
            }
        }
    }
```

## Container restarts after upgrading to a new version

When you upgrade ZITADEL to a newer version, the setup phase runs database migrations automatically.

**Which command to use for upgrades:**

- `start-from-init` (used in the quickstart) runs **init → setup → start** in sequence. The init phase is only needed once ever (for a fresh database), but it is safe to re-run because it skips resources that already exist. Use `start-from-init` only for the quickstart or when you're sure the database needs initialising from scratch.
- **For upgrades on existing installations**, prefer `start-from-setup` (runs setup → start) or run `zitadel setup` followed by `zitadel start` as separate steps. This avoids running the init phase unnecessarily and is the recommended production approach. See [Update and Scale ZITADEL](https://zitadel.com/docs/self-hosting/manage/updating_scaling) for details.

If the container exits with code 1 and the logs show a database migration error, check the following:

- Make sure the PostgreSQL version meets the [requirements](https://zitadel.com/docs/self-hosting/manage/database). PostgreSQL 18 support requires ZITADEL v4.11.0 or later.
- Log messages like `role "zitadel" already exists` or `database "zitadel" already exists` during `start-from-init` re-runs are **expected and harmless** — the init phase skips those steps.
- If the container still fails after a version upgrade, check whether the version you are upgrading to lists any known migration issues in the [release notes](https://github.com/zitadel/zitadel/releases).

## Instance settings (FIRSTINSTANCE / DEFAULTINSTANCE) not taking effect after restart

Environment variables prefixed with `ZITADEL_FIRSTINSTANCE_` and `ZITADEL_DEFAULTINSTANCE_` are only applied during the **initial creation** of a ZITADEL instance.
Changing these variables and restarting the container will not update an already-existing instance.

To change instance-level settings on a running installation:

- Use the [Admin Console](https://your-domain/ui/console/instance) to update settings interactively.
- Use the Admin API to automate changes.

**Login V2**: Starting with ZITADEL v4, the Login V2 UI is enabled by default for new installations.
Existing instances keep Login V1 until you opt in. To adopt Login V2 on an existing v4 installation, see [Adopt Login V2](https://zitadel.com/docs/self-hosting/manage/adopt-login-v2).

## ZITADEL service becomes unhealthy without visible error messages

If the `zitadel` container shows as `unhealthy` but the log output does not reveal an obvious error:

1. Increase log verbosity by setting `ZITADEL_LOG_LEVEL: debug` and `ZITADEL_LOGSTORE_ACCESS_STDOUT_ENABLED: true`.
2. Check that the healthcheck command can reach ZITADEL. The built-in `zitadel ready` command uses HTTP when `ZITADEL_TLS_ENABLED=false` and HTTPS otherwise. Ensure that this variable matches your TLS settings.
3. If ZITADEL is running behind a reverse proxy, make sure the proxy forwards traffic correctly before the first healthcheck succeeds. See [Run and configure a reverse proxy](https://zitadel.com/docs/self-hosting/manage/reverseproxy/reverse_proxy).
