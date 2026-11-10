> Pinned source for Grafana v13.3.1: [docs/sources/as-code/grafana-operator/_index.md](https://github.com/grafana/grafana/blob/5db6ba887630c7fa12e5bfd063f2fa854025468c/docs/sources/as-code/grafana-operator/_index.md)

# Grafana Operator and Grafana Crossplane provider

## Grafana Operator

> **Important**
>
> The Grafana Operator is a community project and it's not commercially supported by Grafana.
>
> This document may not contain the latest information about the Grafana Operator. For the most up-to-date information refer to [Grafana Operator](https://grafana.github.io/grafana-operator/) in GitHub.

The Grafana Operator is a Kubernetes operator built to help you manage your Grafana instances and its resources in a Kubernetes environment. The Grafana Operator automatically syncs Kubernetes custom resources and actual resources in your Grafana instance, and allows you to install and manage local Grafana instances, dashboards and data sources in Kubernetes or OpenShift.

While the Grafana Operator simplifies many aspects of operating Grafana and its resources on Kubernetes, its current support is mainly focused on managing dashboards, folders, alerts, and data sources. For a full list of the supported resources refer to [Operator Resources](https://grafana.github.io/grafana-operator/docs/examples/) in the canonical documentation.

### Install the Grafana Operator

To install the Grafana Operator in your Kubernetes cluster, run the following command in your terminal:

```
helm repo add grafana https://grafana.github.io/helm-charts
helm upgrade -i grafana-operator grafana/grafana-operator
```

For other installation methods, refer to the [Grafana Operator Installation](https://grafana.github.io/grafana-operator/docs/installation/) documentation.

### Use the Grafana Operator

Use the following guides to use the Grafana Operator to manage your Grafana instance:

- [Manage data sources, and dashboards with folders using the Grafana Operator](https://grafana.com/docs/grafana/v13.3/as-code/grafana-operator/operator-dashboards-folders-datasources/) describes how to add a folders, data sources, and dashboards using the Grafana Operator.
- [Manage Dashboards with GitOps Using ArgoCD](https://grafana.com/docs/grafana/v13.3/as-code/grafana-operator/manage-dashboards-argocd/) describes how to create and manage dashboards using ArgoCD and Grafana Operator.

## Grafana Crossplane provider

> **Note**
>
> This document may not contain the latest information about the Crossplane Provider. For the most up-to-date information refer to [Grafana Crossplane provider](https://github.com/grafana/crossplane-provider-grafana) in GitHub.
>
> Note that the Crossplane provider is an experimental stage. Refer to [Release life cycle for Grafana Labs](https://grafana.com/docs/release-life-cycle/)

The Grafana Crossplane provide is built using Terrajet and provides support for all resources supported by the Grafana Terraform provider. It enables you to define Grafana resources as Kubernetes manifests and it also help users who build their GitOps pipelines around Kubernetes manifests using tools like ArgoCD.

### Before you begin

The Grafana Crossplane provider is intended for existing Crossplane users looking to manage Grafana resources from within Kubernetes and as Kubernetes manifests for the GitOps pipelines. To use the Crossplane provider, you must have the Crossplane CLI and Crossplane installed in the Kubernetes cluster.

### Install the Grafana Crossplane provider

To get started with the Grafana Crossplane provider, install Crossplane in the Kubernetes cluster and use this command to install the provider:

```shell
kubectl crossplane install provider grafana/crossplane-provider-grafana:v2.18.0
```

During installation of the provider, CRDs for all the resources supported by the Terraform provider are added to the cluster so users can begin defining their Grafana resources as Kubernetes custom resources. The Crossplane provider ensures that whatever is defined in the custom resource definitions is what is visible in Grafana UI. If you make any changes directly in the UI, the changes will be discarded when the provider syncs again. This helps ensure that whatever is defined via code in the cluster will be the source of truth for Grafana resources.

For more information, refer to the examples folder in the [Grafana Crossplane provider](https://github.com/grafana/crossplane-provider-grafana) repository.
