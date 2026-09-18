> Pinned source for Qdrant master: [qdrant-landing/content/documentation/hybrid-cloud/configure-scale-upgrade.md](https://github.com/qdrant/landing_page/blob/4d8a8ceb08486decdbf0f0016772c7f120ea7d56/qdrant-landing/content/documentation/hybrid-cloud/configure-scale-upgrade.md)
> Canonical documentation: https://qdrant.tech/documentation/hybrid-cloud/configure-scale-upgrade/

# Configure, Scale & Update Qdrant Hybrid Cloud Clusters

## Configure Clusters

Alongside Hybrid Cloud specific scheduling options, you can also adjust various other advanced configuration options for your clusters. See [Configure Clusters](https://qdrant.tech/documentation/cloud/configure-cluster/) for more details.

## Scale Clusters

Hybrid cloud clusters can be scaled up and down, horizontally and vertically, at any time. For more details see [Scale Clusters](https://qdrant.tech/documentation/cloud/cluster-scaling/).

### Automatic Shard Rebalancing

Qdrant Cloud supports automatic shard rebalancing, which runs continuously in the background to keep data evenly distributed across the nodes, optimizing performance and resource utilization, and also runs when scaling your cluster horizontally. For more details see [Shard Rebalancing](https://qdrant.tech/documentation/cloud/configure-cluster/#shard-rebalancing).

### Resharding

In Qdrant Cloud, you can change the number of shards in your existing collections without having to recreate the collection from scratch. This feature is called resharding and allows you to scale your collections up or down as needed. For more details see [Resharding](https://qdrant.tech/documentation/cloud/cluster-scaling/#resharding).

## Update Clusters

You can update the version of your cluster at any time. For more details see [Update Clusters](https://qdrant.tech/documentation/cloud/cluster-upgrades/).
