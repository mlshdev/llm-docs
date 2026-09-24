> Pinned source for Qdrant master: [qdrant-landing/content/documentation/deploy-tab.md](https://github.com/qdrant/landing_page/blob/78beef7e019cb0e5c3cdf851163a98df8c04c37f/qdrant-landing/content/documentation/deploy-tab.md)
> Canonical documentation: https://qdrant.tech/documentation/deploy-intro/

# Deploy Qdrant

## Self-Hosted

- [Installation](https://qdrant.tech/documentation/installation/index.md) — Install Qdrant via Docker, Kubernetes, or binary on Linux, macOS, or Windows.
- [Distributed Deployment](https://qdrant.tech/documentation/scaling/distributed_deployment/index.md) — Multi-node clusters with horizontal sharding and replication for scale and fault tolerance.
- [Capacity Planning](https://qdrant.tech/documentation/capacity-planning/index.md) — Estimate RAM and disk requirements for vectors, payloads, indexes, and replication factors.
- [Snapshots](https://qdrant.tech/documentation/snapshots/index.md) — Back up and restore collections for disaster recovery and cross-cluster replication.
- [Production Checklist](https://qdrant.tech/documentation/production-checklist/index.md) — Pre-launch review of sharding, replication, quantization, load balancing, and observability.
- [Upgrades](https://qdrant.tech/documentation/upgrades/index.md) — Upgrade Qdrant clusters across Cloud, Kubernetes, and Docker with zero-downtime planning.

## Managed Cloud

- [Managed Cloud](https://qdrant.tech/documentation/cloud/index.md) — Run Qdrant as a managed service on AWS, GCP, or Azure with automatic scaling, backups, and zero-downtime upgrades.
- [Create a Cluster](https://qdrant.tech/documentation/cloud/create-cluster/index.md) — Launch a free or standard cluster on your preferred cloud provider.
- [Authentication](https://qdrant.tech/documentation/cloud/authentication/index.md) — Create Database API keys with granular access control and expiration settings.
- [Cluster Access](https://qdrant.tech/documentation/cloud/cluster-access/index.md) — Connect via REST, gRPC, or the Cluster UI with load-balanced endpoints and IP allowlists.
- [Configure Clusters](https://qdrant.tech/documentation/cloud/configure-cluster/index.md) — Tune collection defaults, strict mode, replication factor, and optimizer settings.
- [Scale Clusters](https://qdrant.tech/documentation/cloud/cluster-scaling/index.md) — Scale vertically or horizontally with automatic shard rebalancing.
- [Monitor Clusters](https://qdrant.tech/documentation/cloud/cluster-monitoring/index.md) — Monitor cluster health with built-in metrics, logs, and email alerts.
- [Backup Clusters](https://qdrant.tech/documentation/cloud/backups/index.md) — Schedule snapshots and restore clusters for disaster recovery.
- [Update Clusters](https://qdrant.tech/documentation/cloud/cluster-upgrades/index.md) — Zero-downtime rolling upgrades on multi-node clusters.
- [Cloud Inference](https://qdrant.tech/documentation/cloud/inference/index.md) — Generate embeddings inside Qdrant Cloud or proxy to OpenAI, Cohere, and Jina.

## Hybrid Cloud

- [Hybrid Cloud](https://qdrant.tech/documentation/hybrid-cloud/index.md) — Deploy Qdrant in your own Kubernetes cluster while managing it through Qdrant Cloud.
- [Setup Hybrid Cloud](https://qdrant.tech/documentation/hybrid-cloud/hybrid-cloud-setup/index.md) — Install and connect the Qdrant Kubernetes Operator to Qdrant Cloud.
- [Create a Cluster](https://qdrant.tech/documentation/hybrid-cloud/hybrid-cloud-cluster-creation/index.md) — Create a Qdrant cluster in your Hybrid Cloud environment.
- [Configure, Scale & Upgrade](https://qdrant.tech/documentation/hybrid-cloud/configure-scale-upgrade/index.md) — Tune, resize, and upgrade Hybrid Cloud clusters.
- [Networking, Logging & Monitoring](https://qdrant.tech/documentation/hybrid-cloud/networking-logging-monitoring/index.md) — Configure networking, ingress, and observability for Hybrid Cloud.
- [Operator Configuration](https://qdrant.tech/documentation/hybrid-cloud/operator-configuration/index.md) — Advanced configuration of the Qdrant Kubernetes Operator.
- [Deployment Platforms](https://qdrant.tech/documentation/hybrid-cloud/platform-deployment-options/index.md) — Platform-specific deployment guides for AWS, GCP, Azure, and on-prem Kubernetes.

## Private Cloud

- [Private Cloud](https://qdrant.tech/documentation/private-cloud/index.md) — Fully air-gapped Qdrant deployment in your own Kubernetes cluster with no Qdrant Cloud connectivity.
- [Setup Private Cloud](https://qdrant.tech/documentation/private-cloud/private-cloud-setup/index.md) — Install and configure Qdrant Private Cloud in a Kubernetes cluster.
- [Cluster Management](https://qdrant.tech/documentation/private-cloud/qdrant-cluster-management/index.md) — Create, manage, and operate clusters in Private Cloud.
- [Configuration](https://qdrant.tech/documentation/private-cloud/configuration/index.md) — Advanced configuration options for Private Cloud deployments.
- [Backups](https://qdrant.tech/documentation/private-cloud/backups/index.md) — Configure backup and restore for Private Cloud clusters.
- [Logging & Monitoring](https://qdrant.tech/documentation/private-cloud/logging-monitoring/index.md) — Set up observability for Private Cloud environments.
- [API Reference](https://qdrant.tech/documentation/private-cloud/api-reference/index.md) — Private Cloud management API reference.

## Operations

- [Configuration](https://qdrant.tech/documentation/ops-configuration/index.md) — Customize Qdrant via config files and environment variables; runtime administration; GPU-accelerated indexing.
- [Monitoring & Telemetry](https://qdrant.tech/documentation/ops-monitoring/index.md) — Monitor Qdrant with Prometheus and Grafana via built-in OpenMetrics endpoints.
- [Optimization](https://qdrant.tech/documentation/ops-optimization/index.md) — Tune for high-speed search, high precision, or low memory; understand the background optimizer.

## Security & Troubleshooting

- [Security](https://qdrant.tech/documentation/security/index.md) — API keys, JWT-based collection-scoped access control, TLS encryption, and network binding.
- [Troubleshooting](https://qdrant.tech/documentation/common-errors/index.md) — Diagnose common runtime errors: open-file limits, filesystem incompatibilities, corrupted collection metadata.
