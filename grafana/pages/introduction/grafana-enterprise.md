> Release-pinned source for Grafana v13.2.1: [docs/sources/introduction/grafana-enterprise.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/introduction/grafana-enterprise.md)

# Grafana Enterprise

Grafana Enterprise is a commercial edition of Grafana that includes additional features not found in the open source version.

Building on everything you already know and love about Grafana open source, Grafana Enterprise includes [exclusive data source plugins](#enterprise-data-sources) and [additional features](#enterprise-features). You also get 24x7x365 support and training from the core Grafana team.

To learn more about Grafana Enterprise, refer to [our product page](https://grafana.com/enterprise).

## Enterprise features in Grafana Cloud

Many Grafana Enterprise features are also available in paid [Grafana Cloud](https://grafana.com/docs/grafana-cloud) accounts. For details, refer to [Grafana Cloud features](https://grafana.com/docs/grafana-cloud/introduction/understand-grafana-cloud-features/). For pricing and plans, refer to [Grafana Cloud pricing](https://grafana.com/pricing/).

To migrate to Grafana Cloud, refer to [Migrate from Grafana Enterprise to Grafana Cloud](https://grafana.com/docs/grafana/v13.2/administration/migration-guide/)

## Authentication

Grafana Enterprise includes integrations with more ways to authenticate your users and enhanced authentication capabilities.

### Team sync

[Team sync](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-access/configure-team-sync/) allows you to set up synchronization between teams in Grafana and teams in your auth provider so that your users automatically end up in the right team.

Supported auth providers:

- [Auth Proxy](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-access/configure-authentication/auth-proxy#team-sync-enterprise-only)
- [Entra ID OAuth](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-access/configure-authentication/azuread/#team-sync-enterprise-only)
- [GitHub OAuth](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-access/configure-authentication/github/#configure-team-synchronization)
- [Generic OAuth integration](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-access/configure-authentication/generic-oauth/#configure-team-synchronization)
- [GitLab OAuth](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-access/configure-authentication/gitlab/#configure-team-synchronization)
- [Google OAuth](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-access/configure-authentication/google/#configure-team-synchronization)
- [LDAP](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-access/configure-authentication/enhanced-ldap/#ldap-group-synchronization-for-teams)
- [Okta](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-access/configure-authentication/okta#configure-team-synchronization-enterprise-only)
- [SAML](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-access/configure-authentication/saml#configure-team-sync)

### Enhanced LDAP integration

With [enhanced LDAP integration](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-access/configure-authentication/enhanced-ldap/), you can set up active LDAP synchronization.

### SAML authentication

[SAML authentication](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-access/configure-authentication/saml/) enables users to authenticate with single sign-on services that use Security Assertion Markup Language (SAML).

### Protected roles

With [protected roles](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-access/configure-authentication/#protected-roles), you can define user roles that are exempt from being converted from one authentication type to another when changing auth providers.

## Enterprise features

Grafana Enterprise adds the following features:

- [Role-based access control](https://grafana.com/docs/grafana/v13.2/administration/roles-and-permissions/access-control/) to control access with role-based permissions.
- [Data source permissions](https://grafana.com/docs/grafana/v13.2/administration/data-source-management/#data-source-permissions) to restrict query access to specific teams and users.
- [Data source query and resource caching](https://grafana.com/docs/grafana/v13.2/administration/data-source-management/#query-and-resource-caching) to temporarily store query results in Grafana to reduce data source load and rate limiting.
- [Reporting](https://grafana.com/docs/grafana/v13.2/dashboards/create-reports/) to generate a PDF report from any dashboard and set up a schedule to have it emailed to whomever you choose.
- [Export dashboard as PDF](https://grafana.com/docs/grafana/v13.2/dashboards/share-dashboards-panels/#export-a-dashboard-as-pdf)
- [Custom branding](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-grafana/configure-custom-branding/) to customize Grafana from the brand and logo to the footer links.
- [Usage insights](https://grafana.com/docs/grafana/v13.2/dashboards/assess-dashboard-usage/) to understand how your Grafana instance is used.
- [Recorded queries](https://grafana.com/docs/grafana/v13.2/administration/recorded-queries/) to see trends over time for your data sources.
- [Vault integration](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-security/configure-database-encryption/#encrypting-your-database-with-a-key-from-a-key-management-service-kms) to manage your configuration or provisioning secrets with Vault.
- [Auditing](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-security/audit-grafana/) tracks important changes to your Grafana instance to help you manage and mitigate suspicious activity and meet compliance requirements.
- [Request security](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-security/configure-request-security/) makes it possible to restrict outgoing requests from the Grafana server.
- [Settings updates at runtime](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-grafana/settings-updates-at-runtime/) allows you to update Grafana settings at runtime without requiring a restart.

## Enterprise data sources

With a Grafana Enterprise license, you also get access to premium data sources, including:

- [Adobe Analytics](https://grafana.com/grafana/plugins/grafana-adobeanalytics-datasource)
- [Amazon Aurora](https://grafana.com/grafana/plugins/grafana-aurora-datasource)
- [AppDynamics](https://grafana.com/grafana/plugins/dlopes7-appdynamics-datasource)
- [Atlassian Statuspage](https://grafana.com/grafana/plugins/grafana-atlassianstatuspage-datasource)
- [Azure CosmosDB](https://grafana.com/grafana/plugins/grafana-azurecosmosdb-datasource)
- [Azure Devops](https://grafana.com/grafana/plugins/grafana-azuredevops-datasource)
- [Catchpoint](https://grafana.com/grafana/plugins/grafana-catchpoint-datasource)
- [Cloudflare](https://grafana.com/grafana/plugins/grafana-cloudflare-datasource)
- [CockroachDB](https://grafana.com/grafana/plugins/grafana-cockroachdb-datasource)
- [Databricks](https://grafana.com/grafana/plugins/grafana-databricks-datasource)
- [DataDog](https://grafana.com/grafana/plugins/grafana-datadog-datasource)
- [IBM Db2](https://grafana.com/grafana/plugins/grafana-ibmdb2-datasource)
- [Drone](https://grafana.com/grafana/plugins/grafana-drone-datasource)
- [DynamoDB](https://grafana.com/grafana/plugins/grafana-dynamodb-datasource/)
- [Dynatrace](https://grafana.com/grafana/plugins/grafana-dynatrace-datasource)
- [Gitlab](https://grafana.com/grafana/plugins/grafana-gitlab-datasource)
- [Grafana Enterprise Logs](https://grafana.com/grafana/plugins/grafana-enterprise-logs-app/)
- [Grafana Enterprise Metrics](https://grafana.com/grafana/plugins/grafana-metrics-enterprise-app/)
- [Grafana Enterprise Traces](https://grafana.com/grafana/plugins/grafana-enterprise-traces-app/)
- [Honeycomb](https://grafana.com/grafana/plugins/grafana-honeycomb-datasource)
- [Jira](https://grafana.com/grafana/plugins/grafana-jira-datasource)
- [LogicMonitor Devices](https://grafana.com/grafana/plugins/grafana-logicmonitor-datasource/)
- [Looker](https://grafana.com/grafana/plugins/grafana-looker-datasource/)
- [MongoDB](https://grafana.com/grafana/plugins/grafana-mongodb-datasource)
- [Netlify](https://grafana.com/grafana/plugins/grafana-netlify-datasource)
- [New Relic](https://grafana.com/grafana/plugins/grafana-newrelic-datasource)
- [Oracle Database](https://grafana.com/grafana/plugins/grafana-oracle-datasource)
- [PagerDuty](https://grafana.com/grafana/plugins/grafana-pagerduty-datasource)
- [Salesforce](https://grafana.com/grafana/plugins/grafana-salesforce-datasource)
- [SAP HANA®](https://grafana.com/grafana/plugins/grafana-saphana-datasource)
- [ServiceNow](https://grafana.com/grafana/plugins/grafana-servicenow-datasource)
- [Snowflake](https://grafana.com/grafana/plugins/grafana-snowflake-datasource)
- [SolarWinds](https://grafana.com/grafana/plugins/grafana-solarwinds-datasource)
- [Splunk](https://grafana.com/grafana/plugins/grafana-splunk-datasource)
- [Splunk Infrastructure monitoring (SignalFx)](https://grafana.com/grafana/plugins/grafana-splunk-monitoring-datasource)
- [Sqlyze Datasource](https://grafana.com/grafana/plugins/grafana-odbc-datasource)
- [SumoLogic](https://grafana.com/grafana/plugins/grafana-sumologic-datasource)
- [Wavefront](https://grafana.com/grafana/plugins/grafana-wavefront-datasource)
- [Zendesk](https://grafana.com/grafana/plugins/grafana-zendesk-datasource)

## Try Grafana Enterprise

To purchase or obtain a trial license, contact the Grafana Labs [Sales Team](https://grafana.com/contact?about=grafana-enterprise-stack).
