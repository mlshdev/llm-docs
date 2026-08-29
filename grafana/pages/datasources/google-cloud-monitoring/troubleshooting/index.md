> Release-pinned source for Grafana v13.2.0: [docs/sources/datasources/google-cloud-monitoring/troubleshooting/index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/datasources/google-cloud-monitoring/troubleshooting/index.md)

# Troubleshoot Google Cloud Monitoring data source issues

This document provides solutions to common issues you may encounter when configuring or using the Google Cloud Monitoring data source. For configuration instructions, refer to [Configure Google Cloud Monitoring](https://grafana.com/docs/grafana/v13.2/datasources/google-cloud-monitoring/configure/).

## Authentication errors

These errors occur when GCP credentials are invalid, missing, or don't have the required permissions.

### "Permission denied" or "Access denied"

**Symptoms:**

- Save & test fails with permission errors
- Queries return authorization errors
- Projects, metrics, or labels don't load

**Possible causes and solutions:**

| Cause                                        | Solution                                                                                                                                                                                                                                                          |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Service account missing required permissions | Assign the **Monitoring Viewer** role to the service account in the GCP Console under **IAM & Admin** > **IAM**. Refer to [Configure Google Cloud Monitoring](https://grafana.com/docs/grafana/v13.2/datasources/google-cloud-monitoring/configure/) for details. |
| Incorrect service account key file           | Verify the JSON key file was downloaded correctly and contains valid credentials. Generate a new key if necessary.                                                                                                                                                |
| Service account key has been deleted         | Check the service account in GCP Console under **IAM & Admin** > **Service Accounts**. If the key was deleted, create a new one.                                                                                                                                  |
| Wrong project selected                       | Verify the default project in the data source configuration matches a project the service account has access to.                                                                                                                                                  |
| APIs not enabled                             | Enable the Monitoring API and Cloud Resource Manager API in the GCP Console. Refer to [Configure Google Cloud Monitoring](https://grafana.com/docs/grafana/v13.2/datasources/google-cloud-monitoring/configure/) for links.                                       |

### "Invalid JWT" or "JWT token error"

**Symptoms:**

- Authentication fails when using Google JWT File
- Error message references invalid or malformed JWT

**Solutions:**

1. Verify you uploaded the complete JSON key file, not just the private key portion.
2. Check that the JSON file is properly formatted and not corrupted.
3. Ensure the key file contains all required fields: `type`, `project_id`, `private_key_id`, `private_key`, `client_email`, `client_id`, `auth_uri`, `token_uri`.
4. Generate a new service account key and re-upload it.

### GCE Default Service Account not working

**Symptoms:**

- Data source test fails when using GCE Default Service Account
- Works with JWT but fails with GCE authentication

**Solutions:**

1. Verify Grafana is running on a Google Compute Engine (GCE) virtual machine.
2. Check that the GCE instance has the **Cloud Monitoring API** scope enabled.
3. Verify the GCE default service account has the **Monitoring Viewer** role.
4. If the VM was created without the required scope, you may need to stop the instance, edit it to add the scope, and restart.

### Service account impersonation errors

**Symptoms:**

- Authentication fails when service account impersonation is enabled
- Error: "Unable to impersonate service account"

**Solutions:**

1. Verify the primary service account has the `roles/iam.serviceAccountTokenCreator` role on the target service account.
2. Check that the target service account email is entered correctly.
3. Ensure the target service account has the **Monitoring Viewer** role.
4. Verify both service accounts are in projects that have the required APIs enabled.

### Forward OAuth Identity returns 403

**Symptoms:**

- Save & Test fails with `403 Forbidden` when using Forward OAuth Identity.
- Queries succeed for some users but not others.

**Solutions:**

1. Confirm you're signed in to Grafana with Google, not as the local `admin` user. The Forward OAuth Identity method only forwards a token if the current session has one.
2. Verify the Grafana Google authentication includes the `https://www.googleapis.com/auth/monitoring.read` scope. Refer to [Configure the Google OAuth scope](https://grafana.com/docs/grafana/v13.2/datasources/google-cloud-monitoring/google-authentication/#configure-the-google-oauth-scope).
3. After you add the scope, sign out of Grafana, revoke the existing grant at <https://myaccount.google.com/permissions>, and sign back in. Google reuses the previous consent and doesn't reissue tokens with new scopes until the grant is revoked.
4. Verify the signed-in user has the **Monitoring Viewer** role (`roles/monitoring.viewer`) on the project set in **Default project**.
5. Check the **Default project** field is populated. The user's OAuth token doesn't carry a project context, so the data source can't fall back to a project from the credentials.

## Connection errors

These errors occur when Grafana cannot reach Google Cloud Monitoring endpoints.

### "Request timed out" or connection failures

**Symptoms:**

- Data source test times out
- Queries fail with timeout errors
- Intermittent connection issues

**Solutions:**

1. Verify network connectivity from the Grafana server to Google Cloud endpoints (`monitoring.googleapis.com`).
2. Check firewall rules allow outbound HTTPS (port 443) to Google Cloud services.
3. For Grafana Cloud connecting to private resources, configure [Private data source connect](https://grafana.com/docs/grafana-cloud/connect-externally-hosted/private-data-source-connect/).
4. Check if a corporate proxy is blocking connections to Google Cloud.

### "SSL certificate problem"

**Symptoms:**

- SSL/TLS handshake errors
- Certificate verification failures

**Solutions:**

1. Ensure the system time is correct on the Grafana server.
2. Verify the Grafana server has up-to-date CA certificates installed.
3. Check if a corporate proxy is intercepting HTTPS traffic.

## Metrics query errors

These errors occur when querying Google Cloud Monitoring metrics.

### "No data" or empty results

**Symptoms:**

- Query executes without error but returns no data
- Charts show "No data" message

**Possible causes and solutions:**

| Cause                           | Solution                                                                                                              |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Time range doesn't contain data | Expand the dashboard time range. GCP metrics have different retention periods based on the metric type.               |
| Wrong project selected          | Verify you've selected the correct project in the query editor.                                                       |
| Incorrect metric type           | Verify the service, metric type, and metric are correct. Check available metrics in the GCP Console Metrics Explorer. |
| Missing labels/filters          | Some metrics require specific label filters to return data. Try removing filters to see if data appears.              |
| Resource not emitting metrics   | Verify the resource exists and is actively emitting metrics. Some metrics only populate under certain conditions.     |

### Metrics don't appear in drop-down

**Symptoms:**

- Expected metrics don't appear in the query editor
- Metric drop-down is empty for a service

**Solutions:**

1. Verify the metric exists in the selected project and region.
2. Check that the service account has the **Monitoring Viewer** role.
3. Some metrics are only available for specific resource types. Check the [Google Cloud metrics list](https://cloud.google.com/monitoring/api/metrics_gcp).
4. Use the Query Inspector to verify the API request and response.

### Label values not loading

**Symptoms:**

- Label value drop-down doesn't populate
- Filters can't be applied

**Solutions:**

1. Verify the service account has the **Monitoring Viewer** role.
2. Ensure a project, service, and metric are selected before label values can load.
3. Label values are populated from existing metric data. If no metrics match the current selection, no values appear.

### MQL query errors

**Symptoms:**

- Monitoring Query Language (MQL) queries fail with syntax errors
- MQL query returns unexpected results

**Solutions:**

1. Validate your MQL syntax using the [MQL reference documentation](https://cloud.google.com/monitoring/mql/reference).
2. Check for typos in metric types, label names, or function names.
3. Ensure time range syntax is valid in your query.
4. Test the query in the GCP Console Metrics Explorer before using it in Grafana.

### "Too many data points" or API throttling

**Symptoms:**

- Queries fail with quota errors
- Performance degrades with multiple panels

**Solutions:**

1. Increase the alignment period to reduce the number of data points.
2. Reduce the time range of your queries.
3. Use fewer metric queries per panel.
4. Request a quota increase in the GCP Console under **APIs & Services** > **Quotas**.
5. Enable query caching in Grafana to reduce API calls.

## SLO query errors

These errors are specific to Service Level Objective (SLO) queries.

### SLO services don't appear

**Symptoms:**

- SLO service selector is empty
- Can't find expected SLO services

**Solutions:**

1. Verify SLOs are defined in Google Cloud Monitoring for the selected project.
2. Check that the service account has access to view SLOs.
3. Ensure the project has services configured in the Service Monitoring section of the GCP Console.

### SLO query returns no data

**Symptoms:**

- SLO query executes but returns no data
- SLO values show as empty

**Solutions:**

1. Verify the SLO exists and is active in the GCP Console.
2. Check that the time range includes periods when the SLO had data.
3. Ensure the selected SLO selector (SLI value, compliance, error budget, etc.) is appropriate for the SLO type.
4. Some SLOs may not have data if the underlying service hasn't received traffic.

## Template variable errors

These errors occur when using template variables with the Google Cloud Monitoring data source.

### Variables return no values

**Symptoms:**

- Variable drop-down is empty
- Dashboard fails to load with variable errors

**Solutions:**

1. Verify the data source connection is working.
2. Check that the service account has permissions to list the requested resources.
3. For dependent variables, ensure parent variables have valid selections.
4. Verify the project is selected correctly in the variable query.

### Variables are slow to load

**Symptoms:**

- Dashboard takes a long time to load
- Variable selectors are slow to populate

**Solutions:**

1. Set variable refresh to **On dashboard load** instead of **On time range change**.
2. Reduce the scope of variable queries (filter by specific project or service).
3. Limit the number of dependent variables in a chain.

For more information on template variables, refer to the [template variables documentation](https://grafana.com/docs/grafana/v13.2/datasources/google-cloud-monitoring/template-variables/).

## Pre-configured dashboard issues

These issues occur with the bundled pre-configured dashboards.

### Imported dashboards show no data

**Symptoms:**

- Imported dashboards show empty panels
- Template variables don't load

**Solutions:**

1. Verify the data source name in the dashboard matches your Google Cloud Monitoring data source.
2. Check that the service account has access to the projects shown in the project variable.
3. Ensure the resources (Compute Engine instances, Cloud SQL, etc.) exist and are emitting metrics.
4. Verify the required GCP services are enabled in your project.

## Enable debug logging

To capture detailed error information for troubleshooting:

1. Set the Grafana log level to `debug` in the configuration file:

   ```ini
   [log]
   level = debug
   ```

2. Review logs in `/var/log/grafana/grafana.log` (or your configured log location).

3. Look for Google Cloud Monitoring-specific entries that include request and response details.

4. Reset the log level to `info` after troubleshooting to avoid excessive log volume.

## Get additional help

If you've tried the solutions above and still encounter issues:

1. Check the [Grafana community forums](https://community.grafana.com/) for similar issues.
2. Review [Google Cloud Monitoring issues on GitHub](https://github.com/grafana/grafana/issues) for known bugs.
3. Consult the [Google Cloud Monitoring documentation](https://cloud.google.com/monitoring/docs) for service-specific guidance.
4. Contact Grafana Support if you're an Enterprise, Cloud Pro, or Cloud Contracted user.
5. When reporting issues, include:
   - Grafana version
   - GCP project (redact if sensitive)
   - Error messages (redact sensitive information)
   - Steps to reproduce
   - Query configuration (redact credentials)
