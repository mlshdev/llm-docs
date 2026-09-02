> Release-pinned source for Grafana v13.2.1: [docs/sources/whatsnew/whats-new-in-v13-2.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/whatsnew/whats-new-in-v13-2.md)

# What's new in Grafana v13.2

Welcome to Grafana 13.2!

This release helps you share and reuse trusted queries to get answers faster and more easily onboard team members, dig into crowded panels without leaving the dashboard, and securely connect to your data with fewer long-lived secrets to manage.

Saved queries are now generally available in Grafana Enterprise and Grafana Cloud, helping individual's knowledge become a library everyone can draw on: find them from anywhere using the command palette (cmd/ctrl+K) then quickly jump into Explore, and reliably manage them as code with Terraform.

View panel mode gains a controls sidebar in public preview, so you can adjust visualization options without edit permissions and fan a busy time series out into one graph per series or label to see which one is actually moving. Query variables get a redesigned editor, OpenSearch adds an index picker to configuration and query editing, and BigQuery and Google Cloud Monitoring can now authenticate with Google Workload Identity Federation in Grafana Cloud instead of a service account key file.

For even more detail about all the changes in this release, refer to the [changelog](https://github.com/grafana/grafana/blob/main/CHANGELOG.md). For the specific steps we recommend when you upgrade to v13.2, check out our [Upgrade Guide](https://grafana.com/docs/grafana/v13.2/upgrade-guide/upgrade-v13.2/).
