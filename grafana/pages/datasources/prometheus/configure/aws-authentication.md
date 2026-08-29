> Release-pinned source for Grafana v13.2.0: [docs/sources/datasources/prometheus/configure/aws-authentication.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/datasources/prometheus/configure/aws-authentication.md)

# Migrate from Prometheus SigV4 to Amazon Managed Service for Prometheus

> **Warning**
>
> Using SigV4 authentication with the core Prometheus data source for Amazon Managed Service for Prometheus is **deprecated**. In Grafana 13, the migration to the dedicated [Amazon Managed Service for Prometheus data source](https://grafana.com/grafana/plugins/grafana-amazonprometheus-datasource/) is automatic. Existing data sources using SigV4 are migrated on startup.

For background on this change, refer to [Prometheus data source update: Redefining our big tent philosophy](https://grafana.com/blog/2025/06/16/prometheus-data-source-update-redefining-our-big-tent-philosophy/).

## What changed in Grafana 13

In Grafana 13, the `prometheusTypeMigration` feature toggle is enabled by default and deprecated. This means:

- Prometheus data sources configured with SigV4 authentication are **automatically migrated** to the dedicated Amazon Managed Service for Prometheus plugin on Grafana startup.
- You no longer need to manually enable the feature toggle.
- Grafana Cloud users are migrated automatically with no action required.
- Dashboards, alerts, and queries continue to work after migration without changes.

## Check migration status

To determine if your Prometheus data sources have been migrated:

1. Navigate to **Connections** > **Data sources**.
2. Select your Prometheus data source.
3. Look for a migration banner at the top of the configuration page.

The banner displays one of the following messages:

- **"Migration Notice"** — The data source has been migrated to the Amazon Managed Service for Prometheus plugin.
- **"Deprecation Notice"** — The data source hasn't been migrated yet.
- **No banner** — No migration is needed (the data source doesn't use SigV4).

## Configure the Amazon Managed Service for Prometheus data source

After migration (or for new setups), configure the dedicated plugin:

1. Navigate to **Connections** > **Data sources**.
2. Select your Amazon Managed Service for Prometheus data source.
3. In the **Auth** section, configure SigV4 authentication:

| Setting                     | Description                                    | Example                                                         |
| --------------------------- | ---------------------------------------------- | --------------------------------------------------------------- |
| **Authentication Provider** | Choose your auth method                        | `AWS SDK Default`, `Access & secret key`, or `Credentials file` |
| **Default Region**          | AWS region for your workspace                  | `us-west-2`                                                     |
| **Access Key ID**           | Your AWS access key (if using access key auth) | `AKIA...`                                                       |
| **Secret Access Key**       | Your AWS secret key (if using access key auth) | `wJalrXUtn...`                                                  |
| **Assume Role ARN**         | IAM role ARN (optional)                        | `arn:aws:iam::123456789:role/GrafanaRole`                       |

4. Set the **HTTP URL** to your Amazon Managed Service for Prometheus workspace endpoint:
   `https://aps-workspaces.us-west-2.amazonaws.com/workspaces/ws-12345678-1234-1234-1234-123456789012/`

5. Click **Save & test** to verify the connection.

## Provision the data source

```yaml
apiVersion: 1
datasources:
  - name: Amazon Managed Prometheus
    type: grafana-amazonprometheus-datasource
    url: https://aps-workspaces.us-west-2.amazonaws.com/workspaces/ws-12345678-1234-1234-1234-123456789012/
    jsonData:
      httpMethod: POST
      sigV4Auth: true
      sigV4AuthType: keys
      sigV4Region: us-east-2
    secureJsonData:
      sigV4AccessKey: <ACCESS_KEY>
      sigV4SecretKey: <SECRET_KEY>
```

Replace `<ACCESS_KEY>` and `<SECRET_KEY>` with your AWS credentials.

## Troubleshoot migration issues

### Amazon Managed Service for Prometheus plugin not installed

**Symptom:** Migration doesn't occur or the data source type is missing.

**Solution:**

1. Navigate to **Connections** > **Add new connection** and search for "Amazon Managed Service for Prometheus".
2. Install the plugin if it isn't already installed.
3. For air-gapped environments, download the plugin from [the Grafana plugin catalog](https://grafana.com/grafana/plugins/grafana-amazonprometheus-datasource/) and install it manually.

### "401 Unauthorized" after migration

**Symptom:** The migrated data source returns authentication errors.

**Solution:**

1. **Self-hosted Grafana:** Verify that `grafana-amazonprometheus-datasource` is included in `forward_settings_to_plugins` under the `[aws]` heading in your `.ini` configuration file.
2. **Grafana Cloud:** Contact [Grafana Support](https://grafana.com/profile/org#support).

### Rollback the migration

If you need to revert migrated data sources back to the core Prometheus type:

1. Set `prometheusTypeMigration` to `false` in your Grafana configuration feature toggles. For more information, refer to [Manage feature toggles](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-grafana/feature-toggles/#manage-feature-toggles).
2. Restart Grafana.
3. Obtain a bearer token with `read` and `write` permissions for the data source API. For more information, refer to [Data source API](https://grafana.com/docs/grafana/v13.2/developers/http_api/data_source/).
4. Run the following rollback script, providing your Grafana URL and bearer token:

```sh
#!/bin/bash

GRAFANA_URL=""
BEARER_TOKEN=""
LOG_FILE="grafana_migration_rollback_$(date +%Y%m%d_%H%M%S).log"

log_message() {
    local message="$1"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$timestamp] $message" | tee -a "$LOG_FILE"
}

update_data_source() {
    local uid="$1"
    local data="$2"

    response=$(curl -s -w "\n%{http_code}" -X PUT \
        -H "Content-Type: application/json" \
        -H "Authorization: Bearer $BEARER_TOKEN" \
        -d "$data" \
        "$GRAFANA_URL/api/datasources/uid/$uid")

    http_code=$(echo "$response" | tail -n1)
    response_body=$(echo "$response" | sed '$d')

    if [[ "$http_code" -ge 200 && "$http_code" -lt 300 ]]; then
        log_message "$uid reverted successfully"
    else
        log_message "$uid error: HTTP $http_code - $response_body"
    fi
}

if ! command -v jq &> /dev/null; then
    echo "Error: jq is required but not installed."
    exit 1
fi

if [[ -z "$GRAFANA_URL" || -z "$BEARER_TOKEN" ]]; then
    echo "Error: Set GRAFANA_URL and BEARER_TOKEN variables at the top of the script."
    exit 1
fi

log_message "Starting AMP to Prometheus rollback"

response=$(curl -s -w "\n%{http_code}" -X GET \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $BEARER_TOKEN" \
    "$GRAFANA_URL/api/datasources/")

http_code=$(echo "$response" | tail -n1)
response_body=$(echo "$response" | sed '$d')

if [[ "$http_code" -lt 200 || "$http_code" -ge 300 ]]; then
    log_message "Error fetching data sources: HTTP $http_code"
    exit 1
fi

total=$(echo "$response_body" | jq '[.[] | select(.jsonData["prometheus-type-migration"] == true and .type == "grafana-amazonprometheus-datasource")] | length')
log_message "Found $total data sources to revert"

echo "$response_body" | jq -c '.[] | select(.jsonData["prometheus-type-migration"] == true and .type == "grafana-amazonprometheus-datasource")' | while read -r data; do
    uid=$(echo "$data" | jq -r '.uid')
    read_only=$(echo "$data" | jq -r '.readOnly // false')

    if [[ "$read_only" == "true" ]]; then
        log_message "$uid is readOnly — edit the type to 'prometheus' in the provisioning file instead."
        continue
    fi

    updated_data=$(echo "$data" | jq '.type = "prometheus" | .jsonData["prometheus-type-migration"] = false')
    update_data_source "$uid" "$updated_data"
done

log_message "Rollback complete. Log: $LOG_FILE"
```

> **Note**
>
> Provisioned data sources (`readOnly`) can't be reverted via the API. Update the `type` field to `prometheus` in your provisioning YAML file instead.

If you continue to experience issues, check the Grafana server logs for detailed error messages and contact [Grafana Support](https://grafana.com/help/).
