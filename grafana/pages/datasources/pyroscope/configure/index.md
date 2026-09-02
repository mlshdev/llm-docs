> Release-pinned source for Grafana v13.2.1: [docs/sources/datasources/pyroscope/configure/index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/datasources/pyroscope/configure/index.md)

# Configure the Pyroscope data source

The Pyroscope data source sets how Grafana connects to your Pyroscope backend.

You can configure the data source using either the data source interface in Grafana or using a configuration file.
This page explains how to set up and enable the data source capabilities using Grafana.

If you make any changes, select **Save & test** to preserve those changes.

If you're using your own installation of Grafana, you can provision the Pyroscope data source using a YAML configuration file.
For more information about provisioning and available configuration options, refer to [Provisioning Grafana](https://grafana.com/docs/grafana/v13.2/administration/provisioning/#data-sources).

## Before you begin

To configure a Pyroscope data source, you need administrator rights to your Grafana instance and a running Pyroscope backend that's receiving profiling data.

If you're provisioning a Pyroscope data source, then you also need administrative rights on the server hosting your Grafana instance.

## Add or modify a data source

You can use these procedures to configure a new Pyroscope data source or to edit an existing one.

### Create a new data source

To configure basic settings for the data source, complete the following steps:

1. Select **Connections** in the main menu.

2. Enter `Grafana Pyroscope` in the search bar.

3. Select **Grafana Pyroscope**.

4. Select **Add new data source** in the top-right corner of the page.

5. On the **Settings** tab, complete the **Name**, **Connection**, and **Authentication** sections.
   - Use the **Name** field to specify the name used for the data source in panels, queries, and Explore. Toggle the **Default** switch for the data source to be pre-selected for new panels.
   - Under **Connection**, enter the **URL** of the Pyroscope instance. For example, `https://example.com:4040`. Refer to [Connection URL](#connection-url) for more information.
   - Complete the [**Authentication** section](#authentication).

6. Optional: Use **Additional settings** to configure other options.

7. Select **Save & test**.

### Update an existing data source

To modify an existing Pyroscope data source:

1. Select **Connections** in the main menu.
2. Select **Data sources** to view a list of configured data sources.
3. Select the Pyroscope data source you want to modify.
4. Optional: Use **Additional settings** to configure or modify other options.
5. After completing your updates, select **Save & test**.

### Connection URL

The data source connection URL should point to a location of a running Pyroscope backend.

**Grafana Cloud Profiles**

Your Grafana Cloud instance automatically includes a fully provisioned data source.

If you are running a self-managed Grafana instance or need to configure an additional Pyroscope data source pointing to Grafana Cloud Profiles, you can find the Pyroscope URL under the **Manage your stack** section for your organization.

To authenticate against Grafana Cloud Profiles, enable **Basic auth** and enter your numeric instance ID as the username and an access policy token as the password. The token must belong to an access policy that includes the `profiles:read` scope and targets the correct stack. For more information, refer to [Grafana Cloud access policies](https://grafana.com/docs/grafana-cloud/security-and-account-management/authentication-and-permissions/access-policies/).

**Self-managed Pyroscope backend**

The connection URL for a self-managed Pyroscope backend depends on how Pyroscope is deployed.
Refer to the steps under [Query profiles in Grafana](https://grafana.com/docs/pyroscope/latest/deploy-kubernetes/helm/#query-profiles-in-grafana) for more information on how to configure the data source.

If you plan to use the [Profiles Drilldown](https://grafana.com/docs/grafana/v13.2/explore/simplified-exploration/profiles/) application and you are running a self-managed Pyroscope backend in microservices mode, the data source connection URL should point to a gateway or proxy that routes requests to the corresponding Pyroscope service.
Refer to the [Helm ingress configuration](https://github.com/grafana/pyroscope/blob/main/operations/pyroscope/helm/pyroscope/templates/ingress.yaml) for specific routing requirements.

## Authentication

Use this section to select an authentication method to access the data source.

> **Note**
>
> Use Transport Layer Security (TLS) for an additional layer of security when working with Pyroscope.
> For additional information on setting up TLS encryption with Pyroscope, refer to [Pyroscope configuration](https://grafana.com/docs/pyroscope/latest/configure-server/reference-configuration-parameters/).

[//]: # "Shared content for authentication section procedure in data sources"

[//]: # "This file documents the Authentication section for data sources."

[//]: # "This shared file is included in these locations:"

[//]: # "/grafana/docs/sources/datasources/pyroscope/configure-pyroscope-data-source.md"

[//]: # "/grafana/docs/sources/datasources/tempo/configure-tempo-data-source.md"

[//]: # "If you make changes to this file, verify that the meaning and content are not changed in any place where the file is included."

[//]: # "Any links should be fully qualified and not relative: /docs/grafana/ instead of ../grafana/."

To set up authentication:

1. Select an authentication method from the drop-down list:
   - **Basic authentication**: Authenticates your data source using a username and password
   - **Forward OAuth identity**: Forwards the OAuth access token and the OIDC ID token, if available, of the user querying to the data source
   - **No authentication**: No authentication is required to access the data source

2. For **Basic authentication** only: Enter the **User** and **Password**.

3. Optional: Complete the **TLS settings** for additional security methods.

   **TLS Client Authentication**
   : Toggle on to use client authentication. When enabled, it adds the **Server name**, **Client cert**, and **Client key** fields. The client provides a certificate that is validated by the server to establish the client's trusted identity. The client key encrypts the data between client and server. These details are encrypted and stored in the Grafana database.

   **Add self-signed certificate**
   : Activate this option to use a self-signed TLS certificate. You can add your own Certificate Authority (CA) certificate on top of one generated by the certificate authorities for additional security measure.

   **Skip TLS certification validation**
   : When activated, it bypasses TLS certificate verification. Not recommended, unless absolutely necessary for testing.
   ![Authentication section showing the TLS client certificate options](https://grafana.com/media/docs/grafana/data-sources/tempo/tempo-data-source-authentication.png)

4. Optional: Add **HTTP Headers**. You can pass along additional context and metadata data about the request and response. Select **Add header** to add **Header** and **Value** fields.

5. Select **Save & test** to preserve your changes.

## Additional settings

**Additional settings** are optional settings that give you more control over your data source. Select the **Additional settings** section to expand it and configure these options.

### Advanced HTTP settings

The Grafana Proxy deletes forwarded cookies. Use the **Allowed cookies** field to specify cookies that should be forwarded to the data source by name.

The **Timeout** field sets the HTTP request timeout in seconds.

### Private data source connect

[//]: # "Shared content for authentication section procedure in data sources"

[//]: # "This file documents the Private data source section for data sources."

[//]: # "This shared file is included in these locations:"

[//]: # "/grafana/docs/sources/datasources/pyroscope/configure-pyroscope-data-source.md"

[//]: # "/grafana/docs/sources/datasources/tempo/configure-tempo-data-source.md"

[//]: # "If you make changes to this file, verify that the meaning and content are not changed in any place where the file is included."

[//]: # "Any links should be fully qualified and not relative: /docs/grafana/ instead of ../grafana/."

> **Note**
>
> This feature is only available in Grafana Cloud.

Use private data source connect (PDC) to connect to and query data within a secure network without opening that network to inbound traffic from Grafana Cloud.

Refer to [Private data source connect](https://grafana.com/docs/grafana-cloud/connect-externally-hosted/private-data-source-connect/) for more information on how PDC works and [Configure Grafana private data source connect (PDC)](https://grafana.com/docs/grafana-cloud/connect-externally-hosted/private-data-source-connect/configure-pdc/#configure-grafana-private-data-source-connect-pdc) for steps on setting up a PDC connection.

Use the drop-down list to select a configured private data source. If you make changes, select **Test & save** to preserve your changes.

Use **Manage private data source connect** to configure and manage any private data sources you have configured.

### Querying

Use the **Minimal step** field to set the minimum step used for metric queries that return time-series data. The default value is 15 seconds.
Enter a value in Grafana duration format using a number and a time unit specifier, such as `15s`, `1m`, or `1h`. Set it to the same value as, or higher than, the scrape interval configured in your Pyroscope database.

Adjusting this option can help prevent gaps when you zoom in to profiling data.

## Verify the connection

After you configure the data source, select **Save & test** to verify the connection.
When the connection is successful, Grafana displays a **Data source is working** message.
If the test fails, Grafana displays the error returned by the Pyroscope backend. For help resolving connection errors, refer to [Troubleshoot the Pyroscope data source](https://grafana.com/docs/grafana/v13.2/datasources/pyroscope/troubleshooting/).

## Provision the data source

You can provision the Pyroscope data source using YAML configuration files or Terraform, as part of the Grafana provisioning system.
For more information about provisioning and available configuration options, refer to [Provisioning Grafana](https://grafana.com/docs/grafana/v13.2/administration/provisioning/#data-sources).

### YAML provisioning example

The following example provisions a Pyroscope data source:

```yaml
apiVersion: 1

datasources:
  - name: Grafana Pyroscope
    type: grafana-pyroscope-datasource
    url: http://localhost:4040
    jsonData:
      minStep: '15s'
```

To provision with basic authentication, for example when connecting to Grafana Cloud Profiles:

```yaml
apiVersion: 1

datasources:
  - name: Grafana Pyroscope
    type: grafana-pyroscope-datasource
    url: https://example.grafana.net
    basicAuth: true
    basicAuthUser: '<INSTANCE_ID>'
    jsonData:
      minStep: '15s'
    secureJsonData:
      basicAuthPassword: <ACCESS_POLICY_TOKEN>
```

Replace the following:

- `<INSTANCE_ID>`: Your numeric instance ID, found under **Manage your stack**.
- `<ACCESS_POLICY_TOKEN>`: An access policy token with the `profiles:read` scope.

### Terraform example

To provision the data source with Terraform, use the [`grafana_data_source` resource](https://registry.terraform.io/providers/grafana/grafana/latest/docs/resources/data_source):

```hcl
resource "grafana_data_source" "pyroscope" {
  type = "grafana-pyroscope-datasource"
  name = "Grafana Pyroscope"
  url  = "http://localhost:4040"

  json_data_encoded = jsonencode({
    minStep = "15s"
  })
}
```

To provision with basic authentication:

```hcl
resource "grafana_data_source" "pyroscope" {
  type                = "grafana-pyroscope-datasource"
  name                = "Grafana Pyroscope"
  url                 = "http://localhost:4040"
  basic_auth_enabled  = true
  basic_auth_username = "<USERNAME>"

  secure_json_data_encoded = jsonencode({
    basicAuthPassword = "<PASSWORD>"
  })
}
```

Replace the following:

- `<USERNAME>`: Your Pyroscope username.
- `<PASSWORD>`: Your Pyroscope password.
