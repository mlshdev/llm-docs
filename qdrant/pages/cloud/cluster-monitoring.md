> Pinned source for Qdrant master: [qdrant-landing/content/documentation/cloud/cluster-monitoring.md](https://github.com/qdrant/landing_page/blob/4d8a8ceb08486decdbf0f0016772c7f120ea7d56/qdrant-landing/content/documentation/cloud/cluster-monitoring.md)
> Canonical documentation: https://qdrant.tech/documentation/cloud/cluster-monitoring/

# Monitoring Qdrant Cloud Clusters

## Telemetry

![Cluster Metrics](https://raw.githubusercontent.com/qdrant/landing_page/4d8a8ceb08486decdbf0f0016772c7f120ea7d56/qdrant-landing/static/documentation/cloud/cluster-metrics.png)

Qdrant Cloud provides you with a set of metrics to monitor the health of your database cluster. You can access these metrics in the Qdrant Cloud Console in the **Metrics** and **Request** sections of the Cluster Details page.

## Logs

![Cluster Logs](https://raw.githubusercontent.com/qdrant/landing_page/4d8a8ceb08486decdbf0f0016772c7f120ea7d56/qdrant-landing/static/documentation/cloud/cluster-logs.png)

Logs of the database cluster are available in the Qdrant Cloud Console in the **Logs** section of the Cluster Details page.

## Alerts

The account owner will receive automatic alerts via email if your cluster has any of the following issues:

### Memory Overutilized

**Why am I getting this alert?**

Your cluster is using more than 80% of its memory allocation for over 5 minutes.

**What does this mean for me?**

If your usage continues to grow beyond the allocation then your cluster will fail due to resource pressure, and you will see disruption.

**What can I do to resolve this?**

You have the option to scale vertically to increase existing node capacity, or horizontally to spread the load more evenly, increase capacity, and reduce overall pressure.

Alternatively, you can delete data from your cluster to reduce the amount of resources required.

**Where can I learn more about this alert?**

You can learn about high-availability and production readiness [here](https://qdrant.tech/documentation/cloud/create-cluster/?q=high#creating-a-production-ready-cluster).

You can learn about vertical scaling [here](https://qdrant.tech/documentation/cloud/cluster-scaling/#vertical-scaling).

You can learn about horizontal scaling [here](https://qdrant.tech/documentation/cloud/cluster-scaling/#horizontal-scaling).

### Disk Space Overutilized

**Why am I getting this alert?**

Your cluster is using more than 80% of its disk space allocation for over 5 minutes.

**What does this mean for me?**

If your usage continues to grow beyond the allocation then your cluster will fail due to resource pressure, and you will see disruption.

**What can I do to resolve this?**

You have the option to scale vertically to increase existing node capacity, or horizontally to spread the load more evenly, increase capacity, and reduce overall pressure.

Alternatively, you can delete data from your cluster to reduce the amount of resources required.

**Where can I learn more about this alert?**

You can learn about high-availability and production readiness [here](https://qdrant.tech/documentation/cloud/create-cluster/?q=high#creating-a-production-ready-cluster).

You can learn about vertical scaling [here](https://qdrant.tech/documentation/cloud/cluster-scaling/#vertical-scaling).

You can learn about horizontal scaling [here](https://qdrant.tech/documentation/cloud/cluster-scaling/#horizontal-scaling).

### A Node Ran Out of Memory

**Why am I getting this alert?**

Nodes in your cluster ran out of RAM.

**What does this mean for me?**

One or more Qdrant nodes tried to allocate more RAM than available while storing data or serving requests, which resulted in the operating system stopping the Qdrant process.

If your cluster is highly available you may avoid total downtime but the situation is still unstable. Without high availability you should expect disruption until your cluster has been scaled up.

**What can I do to resolve this?**

Ensuring your cluster is highly available will mitigate the worst case scenario, but there is still significant operational risk if untreated.

You have the option to scale vertically to increase existing node capacity, or horizontally to spread the load more evenly and reduce overall pressure.

Alternatively, you can delete data from your cluster to reduce the amount of RAM required.

**Where can I learn more about this alert?**

You can learn about high-availability and production readiness [here](https://qdrant.tech/documentation/cloud/create-cluster/?q=high#creating-a-production-ready-cluster).

You can learn about vertical scaling [here](https://qdrant.tech/documentation/cloud/cluster-scaling/#vertical-scaling).

You can learn about horizontal scaling [here](https://qdrant.tech/documentation/cloud/cluster-scaling/#horizontal-scaling).

### A Node Ran Out of Disk Space

**Why am I getting this alert?**

One or more nodes in the cluster have run out of disk.

**What does this mean for me?**

Nodes that run out of disk will be unable to store new vectors.

This can lead to disruption if not resolved.

**What can I do to resolve this?**

Scaling vertically to increase disk space on existing nodes.

Scaling horizontally by adding new nodes so that shards are spread out more. Re-sharding  may be necessary if there are not enough shards to distribute to new nodes.

Alternatively, you can delete data from your cluster to reduce the amount of disk required.

**Where can I learn more about this alert?**

You can learn more about disk capacity [here](https://qdrant.tech/documentation/capacity-planning/#scaling-disk-space-in-qdrant-cloud).

You can learn about vertical scaling [here](https://qdrant.tech/documentation/cloud/cluster-scaling/#vertical-scaling).

You can learn about horizontal scaling [here](https://qdrant.tech/documentation/cloud/cluster-scaling/#horizontal-scaling).

You can learn about re-sharding [here](https://qdrant.tech/documentation/cloud/cluster-scaling/#resharding).

### Cluster Has Too Many Collections

**Why am I getting this alert?**

Your cluster has >500 collections, suggesting an anti-pattern for Qdrant.

**What does this mean for me?**

A large amount of collections brings significant resource overhead. If not addressed this will degrade resilience and even cause outages in the long term.

**What can I do to resolve this?**

A single collection with payload index partitioning is usually optimal compared to many small individual tenant collections.\*

It is also possible to split collections across clusters, the [Qdrant Migration CLI](https://qdrant.tech/documentation/tutorials-operations/migration/) can help you with this.

**Where can I learn more about this alert?**

You can learn more about how to set up multi-tenancy with a Qdrant collection [here](https://qdrant.tech/documentation/manage-data/multitenancy/).

### Cluster is Unhealthy

**Why am I getting this alert?**

Your cluster’s nodes have been marked as unhealthy for over 5 minutes.

**What does this mean for me?**

One or more nodes in your Qdrant Cluster has been unhealthy for longer than 5 mins indicating there is a serious issue that needs attention.

**What can I do to resolve this?**

There are many reasons for a cluster’s workloads to become unhealthy. We send proactive alerts for common scenarios and recommend checking for other alerts. It is also important to validate any available monitoring statistics for both Qdrant and your application.

We recommend checking any recent changes to client code, or configuration in your environment, looking for increases in search or write requests, to ensure no recent changes are the cause.

### Cluster Version is Not Covered by SLA

**Why am I getting this alert?**

Qdrant Cloud only supports the latest and previous 3 minor versions of Qdrant.

**What does this mean for me?**

Support requests against your cluster will not be covered by the SLA.

**What can I do to resolve this?**

You can upgrade your cluster version by visiting the cluster details page.

**Where can I learn more about this alert?**

Learn more about updating your cluster [here](https://qdrant.tech/documentation/cloud/cluster-upgrades/)

Learn more about the Qdrant SLA and version policy [here](https://cloud.qdrant.io/sla#3-supported-versions)

### Database API Key is About to Expire

**Why am I getting this alert?**

A Database Key is expiring soon.

**What does this mean for me?**

Requests using an expired key won’t be successful, which could lead to failed queries and application failures.

**What can I do to resolve this?**

If you are still using the key, you can create a new Database API Key and update your application to use the new one.

**Where can I learn more about this alert?**

Learn about the SDKs [here](https://qdrant.tech/documentation/interfaces/).

Learn more about JWT Keys and permissions [here](https://qdrant.tech/documentation/security/?q=jwt#granular-access-api-keys).

### A Node is CPU Throttled

**Why am I getting this alert?**

One or more cluster workloads have been CPU throttled for over 5 mins.

**What does this mean for me?**

CPU usage is constantly saturated which forces the operating system to throttle your Qdrant database nodes. This means that Qdrant will respond much slower to searches and writes.

The reason for this is usually a high write load which overloads the cluster when creating or updating indexes. A very high search load with inefficient or complex queries can contribute.

**What can I do to resolve this?**

You can reduce the amount of writes to your database. e.g. by performing the writes in batches during times when you have less search traffic, or performing less writes in parallel.

Indexing data properly will optimize query results and improve search performance reducing potential load.

While hybrid and multi-stage queries are CPU intensive techniques, they can be used to optimize and reduce the quantity of inefficient operations. On the other hand if you are using these techniques too much, you may consider simplifying some operations to be less intensive.

You can re-configure Qdrant Optimizers to reduce the load on the cluster.

It is also possible to scale your cluster horizontally or vertically for higher CPU capacity.

**Where can I learn more about this alert?**

Learn how to optimize Qdrant for performance and configure indexing [here](https://qdrant.tech/documentation/manage-data/indexing/) and [here](https://qdrant.tech/documentation/ops-optimization/optimize/).

Learn about optimizers [here](https://qdrant.tech/documentation/ops-optimization/optimizer/).

Learn more about hybrid search [here](https://qdrant.tech/documentation/search/hybrid-queries/).

### Node CPU Usage is Not Distributed Equally

**Why am I getting this alert?**

CPU usage is not consistent across nodes in your cluster.

**What does this mean for me?**

Hotspotting, where a subset of nodes handle more load than the rest, causes slow search performance and potentially node failures.\*

For uneven CPU usage it typically means data distribution  across nodes is uneven.

**What can I do to resolve this?**

Resharding and shard rebalancing are the primary techniques for ensuring data is evenly distributed and that requests are not concentrated on a single node. In Qdrant Cloud, rebalancing runs continuously in the background, but it balances total shard count and size per node across all of your collections combined, not per collection, so one collection can still look uneven even while the cluster as a whole is balanced.

**Where can I learn more about this alert?**

Learn more about cloud rebalancing [here](https://qdrant.tech/documentation/cloud/configure-cluster/#shard-rebalancing).

### Node RAM or Disk Space Usage is Not Distributed Equally

**Why am I getting this alert?**

RAM/Storage usage is not consistent across nodes in your cluster.

**What does this mean for me?**

Hotspotting, where a subset of nodes handle more load than the rest, causes slow search performance and potentially node failures.\*

For RAM/Storage usage it typically means data distribution across nodes is uneven.

**What can I do to resolve this?**

Resharding and rebalancing shards are both tactics to redistribute the load across your cluster evenly.

Resharding allows you to scale the number of shards in a collection up or down without recreating the collection.

This would help when your node count has been scaled up so you can reshard a collection to split it more evenly with a rebalance.

Rebalancing is the process of redistributing shards across nodes to keep the total shard count and size even per node across all collections. In Qdrant Cloud, rebalancing runs automatically and continuously in the background by default.

**Where can I learn more about this alert?**

Learn more about distributed deployments and resharding [here](https://qdrant.tech/documentation/scaling/distributed_deployment/#resharding).

Learn more about cloud rebalancing [here](https://qdrant.tech/documentation/cloud/configure-cluster/#shard-rebalancing).

## Qdrant Database Metrics and Telemetry

You can also directly access the metrics and telemetry that the Qdrant database nodes provide.

To scrape metrics from a Qdrant cluster running in Qdrant Cloud, an [API key](https://qdrant.tech/documentation/cloud/authentication/) is required to access `/metrics` and `/sys_metrics`. Qdrant Cloud also supports supplying the API key as a [Bearer token](https://www.rfc-editor.org/rfc/rfc6750.html), which may be required by some providers.

### Qdrant Node Metrics

Metrics in a Prometheus-compatible format are available at the `/metrics` endpoint of each Qdrant database node. When scraping, you should use the [node specific URLs](https://qdrant.tech/documentation/cloud/cluster-access/#node-specific-endpoints) to ensure that you are scraping metrics from all nodes in each cluster. For more information, see [Qdrant monitoring](https://qdrant.tech/documentation/ops-monitoring/monitoring/).

You can also access the `/telemetry` [endpoint](https://api.qdrant.tech/api-reference/service/telemetry) of your database. This endpoint is available on the cluster endpoint and provides information about the current state of the database, including the number of vectors, shards, and other useful information.

For more information, see [Qdrant monitoring](https://qdrant.tech/documentation/ops-monitoring/monitoring/).

### Cluster System Metrics

Cluster system metrics is a cloud-only endpoint that not only shares all the information about the database from `/metrics` but also provides additional operational data from our infrastructure about your cluster, including information from our load balancers, ingresses, and cluster workloads themselves.

Metrics in a Prometheus-compatible format are available at the `/sys_metrics` cluster endpoint. Database API Keys are used to authenticate access to cluster system metrics. `/sys_metrics` only needs to be queried once per cluster on the main load-balanced cluster endpoint. You don't need to scrape each cluster node individually, instead it will always provide metrics about all nodes.

## Grafana Dashboard

If you scrape your Qdrant cluster system metrics into your own monitoring system, and you are using Grafana, you can use our [Grafana dashboard](https://github.com/qdrant/qdrant-cloud-grafana-dashboard) to visualize these metrics.

![Grafana dashboard](https://raw.githubusercontent.com/qdrant/landing_page/4d8a8ceb08486decdbf0f0016772c7f120ea7d56/qdrant-landing/static/documentation/cloud/cloud-grafana-dashboard.png)

[Embedded content](https://www.youtube.com/embed/pKPP-tL5_6w?si=ASKiG1P61m2YYk9J)

### Cluster System Metrics `/sys_metrics`

In Qdrant Cloud, each Qdrant cluster will expose the following metrics. This endpoint is not available when running Qdrant open-source.

**List of metrics**

| Name                                                               | Type      | Meaning                                                                                                                             |
| ------------------------------------------------------------------ | --------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| app\_info                                                          | gauge     | Information about the Qdrant server                                                                                                 |
| app\_status\_recovery\_mode                                        | gauge     | If Qdrant is currently started in recovery mode                                                                                     |
| cluster\_commit                                                    |           |                                                                                                                                     |
| cluster\_enabled                                                   |           | Indicates whether multi-node clustering is enabled                                                                                  |
| cluster\_peers\_total                                              | counter   | Total number of cluster peers                                                                                                       |
| cluster\_pending\_operations\_total                                | counter   | Total number of pending operations in the cluster                                                                                   |
| cluster\_term                                                      |           |                                                                                                                                     |
| cluster\_voter                                                     |           |                                                                                                                                     |
| collection\_hardware\_metric\_cpu                                  |           |                                                                                                                                     |
| collection\_hardware\_metric\_io\_read                             |           |                                                                                                                                     |
| collection\_hardware\_metric\_io\_write                            |           |                                                                                                                                     |
| collections\_total                                                 | counter   | Number of collections                                                                                                               |
| collections\_vector\_total                                         | counter   | Total number of vectors in all collections                                                                                          |
| container\_cpu\_cfs\_periods\_total                                |           |                                                                                                                                     |
| container\_cpu\_cfs\_throttled\_periods\_total                     | counter   | Indicating that your CPU demand was higher than what your instance offers                                                           |
| container\_cpu\_usage\_seconds\_total                              | counter   | Total CPU usage in seconds                                                                                                          |
| container\_file\_descriptors                                       |           |                                                                                                                                     |
| container\_fs\_reads\_bytes\_total                                 | counter   | Total number of bytes read by the container file system (disk)                                                                      |
| container\_fs\_reads\_total                                        | counter   | Total number of read operations on the container file system (disk)                                                                 |
| container\_fs\_writes\_bytes\_total                                | counter   | Total number of bytes written by the container file system (disk)                                                                   |
| container\_fs\_writes\_total                                       | counter   | Total number of write operations on the container file system (disk)                                                                |
| container\_memory\_cache                                           | gauge     | Memory used for cache in the container                                                                                              |
| container\_memory\_mapped\_file                                    | gauge     | Memory used for memory-mapped files in the container                                                                                |
| container\_memory\_rss                                             | gauge     | Resident Set Size (RSS) - Memory used by the container excluding swap space used for caching                                        |
| container\_memory\_working\_set\_bytes                             | gauge     | Total memory used by the container, including both anonymous and file-backed memory                                                 |
| container\_network\_receive\_bytes\_total                          | counter   | Total bytes received over the container's network interface                                                                         |
| container\_network\_receive\_errors\_total                         |           |                                                                                                                                     |
| container\_network\_receive\_packets\_dropped\_total               |           |                                                                                                                                     |
| container\_network\_receive\_packets\_total                        |           |                                                                                                                                     |
| container\_network\_transmit\_bytes\_total                         | counter   | Total bytes transmitted over the container's network interface                                                                      |
| container\_network\_transmit\_errors\_total                        |           |                                                                                                                                     |
| container\_network\_transmit\_packets\_dropped\_total              |           |                                                                                                                                     |
| container\_network\_transmit\_packets\_total                       |           |                                                                                                                                     |
| envoy\_cluster\_upstream\_cx\_active                               | gauge     | Number of active upstream connections                                                                                               |
| envoy\_cluster\_upstream\_cx\_rx\_bytes\_total                     | counter   | Total bytes received by the proxy from the backend over upstream connections                                                        |
| envoy\_cluster\_upstream\_cx\_tx\_bytes\_total                     | counter   | Total bytes sent by the proxy to the backend over upstream connections                                                              |
| envoy\_cluster\_upstream\_rq\_time\_bucket                         | histogram | Histogram of upstream request duration, in milliseconds                                                                             |
| envoy\_cluster\_upstream\_rq\_time\_count                          | gauge     | Count of upstream requests recorded in the request duration histogram                                                               |
| envoy\_cluster\_upstream\_rq\_time\_sum                            | gauge     | Sum of upstream request duration, in milliseconds                                                                                   |
| envoy\_cluster\_upstream\_rq\_total                                | counter   | Total number of upstream requests. Use with `irate` to calculate requests per second                                                |
| kube\_persistentvolumeclaim\_info                                  |           |                                                                                                                                     |
| kube\_pod\_container\_info                                         |           |                                                                                                                                     |
| kube\_pod\_container\_resource\_limits                             | gauge     | Response contains limits for CPU and memory of DB.                                                                                  |
| kube\_pod\_container\_resource\_requests                           | gauge     | Response contains requests for CPU and memory of DB.                                                                                |
| kube\_pod\_container\_status\_last\_terminated\_exitcode           |           |                                                                                                                                     |
| kube\_pod\_container\_status\_last\_terminated\_reason             |           |                                                                                                                                     |
| kube\_pod\_container\_status\_last\_terminated\_timestamp          |           |                                                                                                                                     |
| kube\_pod\_container\_status\_ready                                |           |                                                                                                                                     |
| kube\_pod\_container\_status\_restarts\_total                      |           |                                                                                                                                     |
| kube\_pod\_container\_status\_running                              |           |                                                                                                                                     |
| kube\_pod\_container\_status\_terminated                           |           |                                                                                                                                     |
| kube\_pod\_container\_status\_terminated\_reason                   |           |                                                                                                                                     |
| kube\_pod\_created                                                 |           |                                                                                                                                     |
| kube\_pod\_info                                                    |           |                                                                                                                                     |
| kube\_pod\_start\_time                                             |           |                                                                                                                                     |
| kube\_pod\_status\_container\_ready\_time                          |           |                                                                                                                                     |
| kube\_pod\_status\_initialized\_time                               |           |                                                                                                                                     |
| kube\_pod\_status\_phase                                           | gauge     | Pod status in terms of different phases (Failed/Running/Succeeded/Unknown)                                                          |
| kube\_pod\_status\_ready                                           | gauge     | Pod readiness state (unknown/false/true)                                                                                            |
| kube\_pod\_status\_ready\_time                                     |           |                                                                                                                                     |
| kube\_pod\_status\_reason                                          |           |                                                                                                                                     |
| kubelet\_volume\_stats\_capacity\_bytes                            | gauge     | Amount of disk available                                                                                                            |
| kubelet\_volume\_stats\_inodes                                     | gauge     | Amount of inodes available                                                                                                          |
| kubelet\_volume\_stats\_inodes\_used                               | gauge     | Amount of inodes used                                                                                                               |
| kubelet\_volume\_stats\_used\_bytes                                | gauge     | Amount of disk used                                                                                                                 |
| memory\_active\_bytes                                              |           |                                                                                                                                     |
| memory\_allocated\_bytes                                           |           |                                                                                                                                     |
| memory\_metadata\_bytes                                            |           |                                                                                                                                     |
| memory\_resident\_bytes                                            |           |                                                                                                                                     |
| memory\_retained\_bytes                                            |           |                                                                                                                                     |
| qdrant\_cluster\_state                                             |           |                                                                                                                                     |
| qdrant\_collection\_commit                                         |           |                                                                                                                                     |
| qdrant\_collection\_config\_hnsw\_full\_ef\_construct              |           |                                                                                                                                     |
| qdrant\_collection\_config\_hnsw\_full\_scan\_threshold            |           |                                                                                                                                     |
| qdrant\_collection\_config\_hnsw\_m                                |           |                                                                                                                                     |
| qdrant\_collection\_config\_hnsw\_max\_indexing\_threads           |           |                                                                                                                                     |
| qdrant\_collection\_config\_hnsw\_on\_disk                         |           |                                                                                                                                     |
| qdrant\_collection\_config\_hnsw\_payload\_m                       |           |                                                                                                                                     |
| qdrant\_collection\_config\_optimizer\_default\_segment\_number    |           |                                                                                                                                     |
| qdrant\_collection\_config\_optimizer\_deleted\_threshold          |           |                                                                                                                                     |
| qdrant\_collection\_config\_optimizer\_flush\_interval\_sec        |           |                                                                                                                                     |
| qdrant\_collection\_config\_optimizer\_indexing\_threshold         |           |                                                                                                                                     |
| qdrant\_collection\_config\_optimizer\_max\_optimization\_threads  |           |                                                                                                                                     |
| qdrant\_collection\_config\_optimizer\_max\_segment\_size          |           |                                                                                                                                     |
| qdrant\_collection\_config\_optimizer\_memmap\_threshold           |           |                                                                                                                                     |
| qdrant\_collection\_config\_optimizer\_vacuum\_min\_vector\_number |           |                                                                                                                                     |
| qdrant\_collection\_config\_params\_always\_ram                    |           |                                                                                                                                     |
| qdrant\_collection\_config\_params\_on\_disk\_payload              |           |                                                                                                                                     |
| qdrant\_collection\_config\_params\_product\_compression           |           |                                                                                                                                     |
| qdrant\_collection\_config\_params\_read\_fanout\_factor           |           |                                                                                                                                     |
| qdrant\_collection\_config\_params\_replication\_factor            |           |                                                                                                                                     |
| qdrant\_collection\_config\_params\_scalar\_quantile               |           |                                                                                                                                     |
| qdrant\_collection\_config\_params\_scalar\_type                   |           |                                                                                                                                     |
| qdrant\_collection\_config\_params\_shard\_number                  |           |                                                                                                                                     |
| qdrant\_collection\_config\_params\_vector\_size                   |           |                                                                                                                                     |
| qdrant\_collection\_config\_params\_write\_consistency\_factor     |           |                                                                                                                                     |
| qdrant\_collection\_config\_quantization\_always\_ram              |           |                                                                                                                                     |
| qdrant\_collection\_config\_quantization\_product\_compression     |           |                                                                                                                                     |
| qdrant\_collection\_config\_quantization\_scalar\_quantile         |           |                                                                                                                                     |
| qdrant\_collection\_config\_quantization\_scalar\_type             |           |                                                                                                                                     |
| qdrant\_collection\_config\_wal\_capacity\_mb                      |           |                                                                                                                                     |
| qdrant\_collection\_config\_wal\_segments\_ahead                   |           |                                                                                                                                     |
| qdrant\_collection\_consensus\_thread\_status                      |           |                                                                                                                                     |
| qdrant\_collection\_is\_voter                                      |           |                                                                                                                                     |
| qdrant\_collection\_number\_of\_collections                        | counter   | Total number of collections in Qdrant                                                                                               |
| qdrant\_collection\_number\_of\_grpc\_requests                     | counter   | Total number of gRPC requests on a collection                                                                                       |
| qdrant\_collection\_number\_of\_rest\_requests                     | counter   | Total number of REST requests on a collection                                                                                       |
| qdrant\_collection\_pending\_operations                            | counter   | Total number of pending operations on a collection                                                                                  |
| qdrant\_collection\_role                                           |           |                                                                                                                                     |
| qdrant\_collection\_shard\_segment\_num\_indexed\_vectors          |           |                                                                                                                                     |
| qdrant\_collection\_shard\_segment\_num\_points                    |           |                                                                                                                                     |
| qdrant\_collection\_shard\_segment\_num\_vectors                   |           |                                                                                                                                     |
| qdrant\_collection\_shard\_segment\_type                           |           |                                                                                                                                     |
| qdrant\_collection\_term                                           |           |                                                                                                                                     |
| qdrant\_collection\_transfer                                       |           |                                                                                                                                     |
| qdrant\_operator\_cluster\_info\_total                             |           |                                                                                                                                     |
| qdrant\_operator\_cluster\_phase                                   | gauge     | Information about the status of Qdrant clusters                                                                                     |
| qdrant\_operator\_cluster\_pod\_up\_to\_date                       |           |                                                                                                                                     |
| qdrant\_operator\_cluster\_restore\_info\_total                    |           |                                                                                                                                     |
| qdrant\_operator\_cluster\_restore\_phase                          |           |                                                                                                                                     |
| qdrant\_operator\_cluster\_scheduled\_snapshot\_info\_total        |           |                                                                                                                                     |
| qdrant\_operator\_cluster\_scheduled\_snapshot\_phase              |           |                                                                                                                                     |
| qdrant\_operator\_cluster\_snapshot\_duration\_sconds              |           |                                                                                                                                     |
| qdrant\_operator\_cluster\_snapshot\_phase                         | gauge     | Information about the status of Qdrant cluster backups                                                                              |
| qdrant\_operator\_cluster\_status\_nodes                           |           |                                                                                                                                     |
| qdrant\_operator\_cluster\_status\_nodes\_ready                    |           |                                                                                                                                     |
| qdrant\_node\_rssanon\_bytes                                       | gauge     | Allocated memory without memory-mapped files. This is the hard metric on memory which will lead to an OOM if it goes over the limit |
| rest\_responses\_avg\_duration\_seconds                            |           |                                                                                                                                     |
| rest\_responses\_duration\_seconds\_bucket                         |           |                                                                                                                                     |
| rest\_responses\_duration\_seconds\_count                          |           |                                                                                                                                     |
| rest\_responses\_duration\_seconds\_sum                            |           |                                                                                                                                     |
| rest\_responses\_fail\_total                                       |           |                                                                                                                                     |
| rest\_responses\_max\_duration\_seconds                            |           |                                                                                                                                     |
| rest\_responses\_min\_duration\_seconds                            |           |                                                                                                                                     |
| rest\_responses\_total                                             |           |                                                                                                                                     |
