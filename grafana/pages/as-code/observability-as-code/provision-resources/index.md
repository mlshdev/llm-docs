> Release-pinned source for Grafana v13.2.0: [docs/sources/as-code/observability-as-code/provision-resources/_index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/as-code/observability-as-code/provision-resources/_index.md)

# On-prem file provisioning

> **Note**
>
> On-prem file provisioning is available in Grafana v12 and later for open source and Enterprise editions. It's **not available in Grafana Cloud**. This new file provisioning feature is only available for dashboards and doesn't replace classic provisioning for the time being.
>
> For classic provisioning using configuration files refer to [Provision Grafana](https://grafana.com/docs/grafana/v13.2/administration/provisioning/).

On-prem local file provisioning allows you to add resources that are stored in your local file system to your Grafana instance. You can
configure how to save your dashboards' JSON and other files from your local file system into a single or multiple folders in a different repository, with up to 10 connections.

To set it up, refer to [Set up file provisioning](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/provision-resources/file-path-setup).

## How it works

On-prem file provisioning is only available for dashboards at the moment.

After setting up file provisioning:

- The dashboards saved in your GitHub repository or local folder appear in Grafana in the `provisioned` folder.
- The dashboards and folders saved to the local path are referred to as `provisioned` resources and are labeled as such in the Grafana UI.

You can only modify provisioned dashboards locally.

- Any changes made in the provisioned files are reflected in the Grafana database. The Grafana UI reads the database and updates the UI to reflect these changes.
- You can't use the Grafana UI to edit or delete provisioned resources.
