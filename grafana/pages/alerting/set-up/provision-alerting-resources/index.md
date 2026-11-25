> Pinned source for Grafana v13.3.2: [docs/sources/alerting/set-up/provision-alerting-resources/_index.md](https://github.com/grafana/grafana/blob/b8e90ef2a99c8629339e7233a7a813456d87c075/docs/sources/alerting/set-up/provision-alerting-resources/_index.md)

# Provision Alerting resources

Alerting infrastructure is often complex, with many pieces of the pipeline that often live in different places. Scaling this across multiple teams and organizations is an especially challenging task. Importing and exporting (or provisioning) your alerting resources in Grafana Alerting makes this process easier by enabling you to create, manage, and maintain your alerting data in a way that best suits your organization.

You can import alert rules, contact points, notification policies, mute timings, and templates.

You cannot edit imported alerting resources in the Grafana UI in the same way as alerting resources that were not imported. You can only edit imported contact points, notification policies, templates, and mute timings in the source where they were created. For example, if you manage your alerting resources using files from disk, you cannot edit the data in Terraform or from within Grafana.

## Import alerting resources

Choose from the options below to import (or provision) your Grafana Alerting resources.

1. [Use configuration files to provision your alerting resources](https://grafana.com/docs/grafana/v13.3/alerting/set-up/provision-alerting-resources/file-provisioning/), such as alert rules and contact points, through files on disk.

   > **Note**
   >
   > - You cannot edit provisioned resources from files in the Grafana UI.
   >   - Provisioning with configuration files is not available in Grafana Cloud.

2. Use [Terraform to provision alerting resources](https://grafana.com/docs/grafana/v13.3/alerting/set-up/provision-alerting-resources/terraform-provisioning/).

3. Use [`gcx`](https://grafana.com/docs/grafana/v13.3/alerting/set-up/provision-alerting-resources/gcx-provisioning/) to provision or to manage individual alerting resources from the command line.

   > **Note**
   >
   > - Resources provisioned with `gcx resources push` cannot be edited in the Grafana UI.
   >   - Resources that you write with `gcx alert` are editable in the Grafana UI by default.

4. Use the [new HTTP APIs](https://grafana.com/docs/grafana/v13.3/alerting/set-up/provision-alerting-resources/http-apis-provisioning/) (`/apis`) or the legacy [Alerting provisioning HTTP API](https://grafana.com/docs/grafana/v13.3/alerting/set-up/provision-alerting-resources/http-api-provisioning/) to manage alerting resources.

## Export alerting resources

You can export both manually created and provisioned alerting resources. You can also edit and export an alert rule without applying the changes.

You can also export resources from the command line with [`gcx`](https://grafana.com/docs/grafana/v13.3/alerting/set-up/provision-alerting-resources/gcx-provisioning/#export-resources-for-provisioning).

For detailed instructions on the various export options, refer to [Export alerting resources](https://grafana.com/docs/grafana/v13.3/alerting/set-up/provision-alerting-resources/export-alerting-resources/).

## View provisioned alerting resources

To view your provisioned resources in Grafana, complete the following steps.

1. Open your Grafana instance.
2. Navigate to Alerting.
3. Click an alerting resource folder, for example, Alert rules.

Provisioned resources are labeled **Provisioned**, so that it is clear that they were not created manually.
