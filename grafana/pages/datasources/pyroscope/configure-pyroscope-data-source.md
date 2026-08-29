> Release-pinned source for Grafana v13.2.0: [docs/sources/datasources/pyroscope/configure-pyroscope-data-source.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/datasources/pyroscope/configure-pyroscope-data-source.md)

# Configure the Grafana Pyroscope data source

The Pyroscope data source sets how Grafana connects to your Pyroscope database.

You can configure the data source using either the data source interface in Grafana or using a configuration file.
This page explains how to set up and enable the data source capabilities using Grafana.

If you make any changes, select **Save & test** to preserve those changes.

If you're using your own installation of Grafana, you can provision the Pyroscope data source using a YAML configuration file.
For more information about provisioning and available configuration options, refer to [Provisioning Grafana](https://grafana.com/docs/grafana/v13.2/administration/provisioning/#datasources).

## Before you begin

To configure a Pyroscope data source, you need administrator rights to your Grafana instance and a Pyroscope instance configured to send data to Grafana.

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
- Under **Connection**, enter the **URL** of the Pyroscope instance. For example, `https://example.com:4100`. Refer to [Connection URL](#connection-url) for more information.
- Complete the [**Authentication** section](#authentication).

1. Optional: Use **Additional settings** to configure other options.
2. Select **Save & test**.

### Update an existing data source

To modify an existing Pyroscope data source:

1. Select **Connections** in the main menu.
2. Select **Data sources** to view a list of configured data sources.
3. Select the Pyroscope data source you wish to modify.
4. Optional: Use **Additional settings** to configure or modify other options.
5. After completing your updates, select **Save & test**.

#### Connection URL

The data source connection URL should point to a location of a running Pyroscope backend.

**Grafana Cloud Profiles**

Your Grafana Cloud instance automatically includes a fully provisioned data source.

If you are running a self-managed Grafana instance or need to configure an additional Pyroscope data source pointing to Grafana Cloud Profiles, you can find the Pyroscope URL under the **Manage your stack** section for your organization.

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

Use the down arrow to expand the **Additional settings** section to view these options.

### Advanced HTTP settings

The Grafana Proxy deletes forwarded cookies. Use the **Allowed cookies** field to specify cookies that should be forwarded to the data source by name.

The **Timeout** field sets the HTTP request timeout in seconds.

### Querying

**Minimum step** is used for queries returning time-series data. The default value is 15 seconds.

Adjusting this option can help prevent gaps when you zoom in to profiling data.

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
