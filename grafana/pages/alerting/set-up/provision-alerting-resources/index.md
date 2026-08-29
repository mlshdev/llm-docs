> Release-pinned source for Grafana v13.2.0: [docs/sources/alerting/set-up/provision-alerting-resources/_index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/alerting/set-up/provision-alerting-resources/_index.md)

# Provision Alerting resources

Alerting infrastructure is often complex, with many pieces of the pipeline that often live in different places. Scaling this across multiple teams and organizations is an especially challenging task. Importing and exporting (or provisioning) your alerting resources in Grafana Alerting makes this process easier by enabling you to create, manage, and maintain your alerting data in a way that best suits your organization.

You can import alert rules, contact points, notification policies, mute timings, and templates.

You cannot edit imported alerting resources in the Grafana UI in the same way as alerting resources that were not imported. You can only edit imported contact points, notification policies, templates, and mute timings in the source where they were created. For example, if you manage your alerting resources using files from disk, you cannot edit the data in Terraform or from within Grafana.

## Import alerting resources

Choose from the options below to import (or provision) your Grafana Alerting resources.

1. [Use configuration files to provision your alerting resources](https://grafana.com/docs/grafana/v13.2/alerting/set-up/provision-alerting-resources/file-provisioning/), such as alert rules and contact points, through files on disk.

   > **Note**
   >
   > - You cannot edit provisioned resources from files in the Grafana UI.
   >   - Provisioning with configuration files is not available in Grafana Cloud.

2. Use [Terraform to provision alerting resources](https://grafana.com/docs/grafana/v13.2/alerting/set-up/provision-alerting-resources/terraform-provisioning/).

3. Use the [Alerting provisioning HTTP API](https://grafana.com/docs/grafana/v13.2/alerting/set-up/provision-alerting-resources/http-api-provisioning/) to manage alerting resources.

   > **Note**
   >
   > The Alerting provisioning HTTP API can be used to create, modify, and delete resources for Grafana-managed alerts.
   >
   > To manage resources related to data source-managed alerts, including recording rules, use the Mimir or Cortex tool.
   >
   > The JSON output from the majority of Alerting HTTP endpoints isn't compatible for provisioning via configuration files.
   >
   > If you need the alerting resources for file provisioning, use [Export Alerting endpoints](https://grafana.com/docs/grafana/v13.2/alerting/set-up/provision-alerting-resources/export-alerting-resources#export-api-endpoints) to return or download them in provisioning format.

## Export alerting resources

You can export both manually created and provisioned alerting resources. You can also edit and export an alert rule without applying the changes.

For detailed instructions on the various export options, refer to [Export alerting resources](https://grafana.com/docs/grafana/v13.2/alerting/set-up/provision-alerting-resources/export-alerting-resources/).

## View provisioned alerting resources

To view your provisioned resources in Grafana, complete the following steps.

1. Open your Grafana instance.
2. Navigate to Alerting.
3. Click an alerting resource folder, for example, Alert rules.

Provisioned resources are labeled **Provisioned**, so that it is clear that they were not created manually.
