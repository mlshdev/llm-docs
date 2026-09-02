> Release-pinned source for Grafana v13.2.1: [docs/sources/as-code/infrastructure-as-code/grafana-operator/_index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/as-code/infrastructure-as-code/grafana-operator/_index.md)

# Grafana Operator

The [Grafana Operator](https://grafana.github.io/grafana-operator/) is a Kubernetes operator built to help you manage your Grafana instances and its resources in a Kubernetes environment. The Grafana Operator automatically syncs Kubernetes custom resources and actual resources in your Grafana instance, and allows you to install and manage local Grafana instances, dashboards and data sources in Kubernetes or OpenShift.

## Install the Grafana Operator

To install the Grafana Operator in your Kubernetes cluster, run the following command in your terminal:

```
helm repo add grafana https://grafana.github.io/helm-charts
helm upgrade -i grafana-operator grafana/grafana-operator
```

For other installation methods, refer to the [Grafana Operator Installation](https://grafana.github.io/grafana-operator/docs/installation/) documentation.

## Use the Grafana Operator

Use the following guides to use the Grafana Operator to manage your Grafana instance:

- [Manage data sources, and dashboards with folders using the Grafana Operator](https://grafana.com/docs/grafana/v13.2/as-code/infrastructure-as-code/grafana-operator/operator-dashboards-folders-datasources/) describes how to add a folders, data sources, and dashboards, using the [Grafana Operator](https://grafana.github.io/grafana-operator/).
- [Manage Dashboards with GitOps Using ArgoCD](https://grafana.com/docs/grafana/v13.2/as-code/infrastructure-as-code/grafana-operator/manage-dashboards-argocd/) describes how to create and manage dashboards using ArgoCD and [Grafana Operator](https://grafana.github.io/grafana-operator/).
