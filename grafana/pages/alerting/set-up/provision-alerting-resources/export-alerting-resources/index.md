> Release-pinned source for Grafana v13.2.1: [docs/sources/alerting/set-up/provision-alerting-resources/export-alerting-resources/index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/alerting/set-up/provision-alerting-resources/export-alerting-resources/index.md)

# Export alerting resources

Export your alerting resources, such as alert rules, contact points, and notification policies for provisioning, automatically importing single folders and single groups.

There are distinct methods to export your alerting resources:

- [Grafana UI](#export-from-the-grafana-ui) exports in Terraform format and YAML or JSON formats for file provisioning.
- [HTTP Alerting API](#http-alerting-api) exports in JSON API format used by the HTTP Alerting API.
- [HTTP Alerting API - Export endpoints](#export-api-endpoints) exports in YAML or JSON formats for file provisioning.

> **Note**
>
> Alerting resources imported through [file provisioning](https://grafana.com/docs/grafana/v13.2/alerting/set-up/provision-alerting-resources/file-provisioning) cannot be edited in the Grafana UI. This prevents changes made in the UI from being overridden by file provisioning during Grafana restarts.
>
> If you need to modify provisioned alerting resources in Grafana, refer to [edit HTTP API alerting resources in the Grafana UI](https://grafana.com/docs/grafana/v13.2/alerting/set-up/provision-alerting-resources/http-api-provisioning#edit-resources-in-the-grafana-ui) or to [edit Terraform alerting resources in the Grafana UI](https://grafana.com/docs/grafana/v13.2/alerting/set-up/provision-alerting-resources/terraform-provisioning#enable-editing-resources-in-the-grafana-ui).

## Export from the Grafana UI

The export options listed below enable you to download resources in YAML, JSON, or Terraform format, facilitating their provisioning through [configuration files](https://grafana.com/docs/grafana/v13.2/alerting/set-up/provision-alerting-resources/file-provisioning/) or [Terraform](https://grafana.com/docs/grafana/v13.2/alerting/set-up/provision-alerting-resources/terraform-provisioning/).

### Export alert rules

To export alert rules from the Grafana UI, complete the following steps.

1. Click **Alerts & IRM** -> **Alert rules**.

2. To export all Grafana-managed rules, click **Export rules**.

3. To export a folder, change the **View as** to **List**.

4. Select the folder you want to export and click the **Export rules folder** icon.

5. To export a group, change the **View as** to **Grouped**.

6. Find the group you want to export and click the **Export rule group** icon.

7. Choose the format to export in.

   The exported alert rule data appears in different formats - YAML, JSON, Terraform.

8. Click **Copy Code** or **Download**.

### Modify alert rule and export rule group without saving changes

> **Note**
>
> This feature is for Grafana-managed alert rules only. It is available to Admin, Viewer, and Editor roles.

Use the **Modify export** mode to edit and export an alert rule without updating it. The exported data includes all alert rules within the same alert group.

To export a modified alert rule without saving the modifications, complete the following steps from the Grafana UI.

1. Click **Alerts & IRM** -> **Alert rules**.

2. Locate the alert rule you want to edit and click **More** -> **Modify Export** to open the Alert Rule form.

3. From the Alert Rule form, edit the fields you want to change. Changes made are not applied to the alert rule.

4. Click **Export**.

5. Choose the format to export in.

   The exported alert rule group appears in different formats - YAML, JSON, Terraform.

6. Click **Copy Code** or **Download**.

### Export a new alert rule definition without saving changes

> **Note**
>
> You can only export in Terraform (HCL) format.

Add a new alert rule definition to an existing provisioned rule group rather than creating the code manually. You can then copy it to your Terraform pipeline, and quickly deploy and manage alert rules as part of your infrastructure as code.

An alert rule definition differs from an alert rule in the sense that you define your alert rule, but you do not save it. It only becomes a saved alert rule once you provision it using Terraform.

To export your alert rule definition into Terraform (HCL) format, complete the following steps.

1. Click **Alerts & IRM** -> **Alert rules**.
2. Click **Export rule definition**.
3. Fill out the alert rule details.
4. Choose a provisioned folder and group to add your alert rule definition to.
5. Click **Export**.
6. Copy and paste the code into your Terraform pipeline to create your new alert rule.

### Export contact points

To export contact points from the Grafana UI, complete the following steps.

1. Click **Alerts & IRM** -> **Contact points**.

2. Find the contact point you want to export and click **More** -> **Export**.

3. Choose the format to export in.

   The exported contact point appears in different formats - YAML, JSON, Terraform.

4. Click **Copy Code** or **Download**.

### Export notification template groups

Grafana currently doesn't offer an Export UI or [Export endpoint](#export-api-endpoints) for notification template groups, unlike other Alerting resources presented in this documentation.

However, you can export it by manually copying the content and name of the notification template group from the Grafana UI.

1. Click **Alerts & IRM** -> **Contact points** -> **Notification templates** tab.
2. Find the notification template group you want to export.
3. Copy the content and name.
4. Adjust it for the [file provisioning format](https://grafana.com/docs/grafana/v13.2/alerting/set-up/provision-alerting-resources/file-provisioning/#import-templates) or [Terraform resource](https://grafana.com/docs/grafana/v13.2/alerting/set-up/provision-alerting-resources/terraform-provisioning/#import-contact-points-and-templates).

### Export the notification policy tree

All notification policies are provisioned through a single resource: the root of the notification policy tree.

> **Warning**
>
> Since the policy tree is a single resource, provisioning it will overwrite all policies in the notification policy tree. However, it does not affect internal policies created when alert rules directly select a contact point.

To export the notification policy tree from the Grafana UI, complete the following steps.

1. Click **Alerts & IRM** -> **Notification policies**.

2. In the **Default notification policy** section, click **...** -> **Export**.

3. Choose the format to export in.

   The exported notification policy tree appears in different formats - YAML, JSON, Terraform.

4. Click **Copy Code** or **Download**.

You can also export individual [named routing trees](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/create-notification-policy/).

1. Click **Alerts & IRM** -> **Notification policies**.
2. Find the routing tree you want to export in the list.
3. Click the **More actions** menu item and select **Export**.
4. Choose the export format and click **Copy Code** or **Download**.

### Export mute timings

To export mute timings from the Grafana UI, complete the following steps.

1. Click **Alerts & IRM** -> **Notification policies**, and then the **Mute timings** tab.

2. Find the mute timing you want to export and click **Export**.

3. Choose the format to export in.

   The exported contact point appears in different formats - YAML, JSON, Terraform.

4. Click **Copy Code** or **Download**.

## HTTP Alerting API

You can use the [Alerting HTTP API](https://grafana.com/docs/grafana/v13.2/alerting/set-up/provision-alerting-resources/http-api-provisioning/) to return existing alerting resources in JSON and import them to another Grafana instance using the same endpoint.

| Resource                                                                                                                                                                | URI                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [Alert rules](https://grafana.com/docs/grafana/v13.2/alerting/set-up/provision-alerting-resources/http-api-provisioning/#alert-rules)                                   | /api/v1/provisioning/alert-rules    |
| [Contact points](https://grafana.com/docs/grafana/v13.2/alerting/set-up/provision-alerting-resources/http-api-provisioning/#contact-points)                             | /api/v1/provisioning/contact-points |
| [Notification policy tree](https://grafana.com/docs/grafana/v13.2/alerting/set-up/provision-alerting-resources/http-api-provisioning/#notification-policies)            | /api/v1/provisioning/policies       |
| [Notification template groups](https://grafana.com/docs/grafana/v13.2/alerting/set-up/provision-alerting-resources/http-api-provisioning/#notification-template-groups) | /api/v1/provisioning/templates      |
| [Mute timings](https://grafana.com/docs/grafana/v13.2/alerting/set-up/provision-alerting-resources/http-api-provisioning/#mute-timings)                                 | /api/v1/provisioning/mute-timings   |

However, note the standard endpoints return a JSON format that is not compatible for provisioning through configuration files or Terraform, except the `/export` endpoints listed below.

### Export API endpoints

The **Alerting HTTP API** provides specific endpoints for exporting alerting resources in YAML or JSON, facilitating [provisioning via configuration files](https://grafana.com/docs/grafana/v13.2/alerting/set-up/provision-alerting-resources/file-provisioning/), or Terraform (HCL).

| Resource                 | Method / URI                                                         | Summary                                                                                                                                                                                                                                                                                                           |
| ------------------------ | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Alert rules              | GET /api/v1/provisioning/alert-rules/export                          | [Export all alert rules in provisioning file format](https://grafana.com/docs/grafana/v13.2/alerting/set-up/provision-alerting-resources/http-api-provisioning/#span-idroute-get-alert-rules-exportspan-export-all-alert-rules-in-provisioning-file-format-_routegetalertrulesexport_).                           |
| Alert rules              | GET /api/v1/provisioning/folder/:folderUid/rule-groups/:group/export | [Export an alert rule group in provisioning file format](https://grafana.com/docs/grafana/v13.2/alerting/set-up/provision-alerting-resources/http-api-provisioning/#span-idroute-get-alert-rule-group-exportspan-export-an-alert-rule-group-in-provisioning-file-format-_routegetalertrulegroupexport_).          |
| Alert rules              | GET /api/v1/provisioning/alert-rules/:uid/export                     | [Export an alert rule in provisioning file format](https://grafana.com/docs/grafana/v13.2/alerting/set-up/provision-alerting-resources/http-api-provisioning/#span-idroute-get-alert-rule-exportspan-export-an-alert-rule-in-provisioning-file-format-_routegetalertruleexport_).                                 |
| Contact points           | GET /api/v1/provisioning/contact-points/export                       | [Export all contact points in provisioning file format](https://grafana.com/docs/grafana/v13.2/alerting/set-up/provision-alerting-resources/http-api-provisioning/#span-idroute-get-contactpoints-exportspan-export-all-contact-points-in-provisioning-file-format-_routegetcontactpointsexport_).                |
| Notification policy tree | GET /api/v1/provisioning/policies/export                             | [Export the notification policy tree in provisioning file format](https://grafana.com/docs/grafana/v13.2/alerting/set-up/provision-alerting-resources/http-api-provisioning/#span-idroute-get-policy-tree-exportspan-export-the-notification-policy-tree-in-provisioning-file-format-_routegetpolicytreeexport_). |
| Mute timings             | GET /api/v1/provisioning/mute-timings/export                         | [Export all mute timings in provisioning file format](https://grafana.com/docs/grafana/v13.2/alerting/set-up/provision-alerting-resources/http-api-provisioning/#span-idroute-get-mute-timings-exportspan-export-all-mute-timings-in-provisioning-file-format-_routegetmutetimingsexport_).                       |
| Mute timings             | GET /api/v1/provisioning/mute-timings/:name/export                   | [Export a mute timing in provisioning file format](https://grafana.com/docs/grafana/v13.2/alerting/set-up/provision-alerting-resources/http-api-provisioning/#span-idroute-get-mute-timing-exportspan-export-a-mute-timing-in-provisioning-file-format-_routegetmutetimingexport_).                               |

These endpoints accept a `download` parameter to download a file containing the exported resources.
