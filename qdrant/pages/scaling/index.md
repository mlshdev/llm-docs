> Pinned source for Qdrant master: [qdrant-landing/content/documentation/scaling/_index.md](https://github.com/qdrant/landing_page/blob/4d8a8ceb08486decdbf0f0016772c7f120ea7d56/qdrant-landing/content/documentation/scaling/_index.md)
> Canonical documentation: https://qdrant.tech/documentation/scaling/

# Scaling & Resilience

When you get started with Qdrant, you typically deploy a single node: one server that stores your vectors and handles queries. That's enough for most early-stage workloads, but as your dataset and traffic grow, you'll need to scale. Qdrant gives you two options: give your node more resources (vertical scaling), or add more nodes to the cluster (horizontal scaling).

Horizontal scaling also provides resilience: deployments with multiple nodes and replicas remain available for reads and writes, even when individual nodes fail.

> **Note**
>
> Before adding capacity, consider whether your existing cluster can be optimized. Quantization, moving vector storage to disk, and other techniques can significantly reduce resource usage. See <a href="https://qdrant.tech/documentation/ops-optimization/optimize/">Optimization</a> for a full overview.

## Vertical vs. Horizontal Scaling

Vertical scaling means adding more CPU, RAM, or disk to an existing node. A single node can typically hold up to about 100 million vectors, depending on dimensionality and quantization. RAM usage approaching 80% is the main signal that it's time to resize. See [Vertical Scaling](https://qdrant.tech/documentation/scaling/vertical-scaling/) for RAM sizing guidelines and resize steps for Qdrant Cloud and self-hosted deployments.

Qdrant can run in a distributed mode, where multiple nodes operate together as a single entity called a cluster. Horizontal scaling means adding more nodes to a cluster instead of resizing existing ones. It's necessary when your data no longer fits on a single node even with quantization, or when you're bottlenecked on disk I/O. See [Horizontal Scaling](https://qdrant.tech/documentation/scaling/horizontal-scaling/) to understand how distributed mode works, and [Distributed Deployment](https://qdrant.tech/documentation/scaling/distributed_deployment/) for the configuration steps.

Scale vertically first: it's simpler than distributing data across a cluster, avoids network overhead, and is easy to reverse. Move to horizontal scaling once vertical scaling isn't enough. If you're running in Qdrant Cloud, [Scale Clusters](https://qdrant.tech/documentation/cloud/cluster-scaling/) covers the steps for both directions.

## Resilience

Resilience comes from replicating data across multiple nodes. A single node, or a single copy of your data, has no protection against failure: if you lose it, you lose both the data and the ability to serve it. A minimal fault-tolerant cluster needs three nodes and a replication factor of two or higher. Three nodes are the minimum to form a majority for Qdrant's Raft consensus, and two or more replicas ensure a single node failure won't take your data or availability down with it.

See [Resilience](https://qdrant.tech/documentation/scaling/resilience/) for how replication factor and node count determine fault tolerance and failover best practices.

When a node fails, the recovery path depends on whether the lost shards have replicas on surviving nodes. A node that restarts rejoins consensus and catches up automatically. A permanently lost node can be replaced by provisioning a new one and rebalancing shards. See [Node Failure Recovery](https://qdrant.tech/documentation/scaling/node-failure-recovery/) for step-by-step procedures.

## Where to Go Next

- [Vertical Scaling](https://qdrant.tech/documentation/scaling/vertical-scaling/): resize existing nodes.
- [Horizontal Scaling](https://qdrant.tech/documentation/scaling/horizontal-scaling/): how Qdrant's distributed model achieves scale.
- [Resilience](https://qdrant.tech/documentation/scaling/resilience/): fault tolerance, multiple availability zones, and failover best practices.
- [Consistency Guarantees](https://qdrant.tech/documentation/scaling/consistency-guarantees/): write consistency factor, read consistency, and write ordering.
- [Node Failure Recovery](https://qdrant.tech/documentation/scaling/node-failure-recovery/): step-by-step procedures for recovering from a failed node.
