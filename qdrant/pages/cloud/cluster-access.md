> Pinned source for Qdrant master: [qdrant-landing/content/documentation/cloud/cluster-access.md](https://github.com/qdrant/landing_page/blob/4d8a8ceb08486decdbf0f0016772c7f120ea7d56/qdrant-landing/content/documentation/cloud/cluster-access.md)
> Canonical documentation: https://qdrant.tech/documentation/cloud/cluster-access/

# Accessing Qdrant Cloud Clusters

Once you [created](https://qdrant.tech/documentation/cloud/create-cluster/) a cluster, and set up an [API key](https://qdrant.tech/documentation/cloud/authentication/), you can access your cluster through the integrated Cluster UI, the REST API and the GRPC API.

## Cluster UI

You can access your [Cluster UI](https://qdrant.tech/documentation/web-ui/) via the Cluster Details page in the Qdrant Cloud Console. Authentication to a cluster is automatic if your cloud user has the [`read:cluster_data` or `write:cluster_data` permission](https://qdrant.tech/documentation/cloud-rbac/permission-reference/). Without the correct permissions you will be prompted to enter an [API Key](https://qdrant.tech/documentation/cloud/authentication/) to access the cluster.

![Cluster Cluster UI](https://raw.githubusercontent.com/qdrant/landing_page/4d8a8ceb08486decdbf0f0016772c7f120ea7d56/qdrant-landing/static/documentation/cloud/cloud-db-dashboard.png)

The Overview tab also contains direct links to explore Qdrant tutorials and sample datasets.

![Cluster Cluster UI Tutorials](https://raw.githubusercontent.com/qdrant/landing_page/4d8a8ceb08486decdbf0f0016772c7f120ea7d56/qdrant-landing/static/documentation/cloud/cloud-db-deeplinks.png)

## API

The REST API is exposed on your cluster endpoint at port `6333`. The GRPC API is exposed on your cluster endpoint at port `6334`. When accessing the cluster endpoint, traffic is automatically load balanced across all healthy Qdrant nodes in the cluster. For all operations, but the few mentioned at [Node specific endpoints](#node-specific-endpoints), you should use the cluster endpoint. It does not matter which node in the cluster you land on. All nodes can handle all search and write requests.

![Cluster cluster endpoint](https://raw.githubusercontent.com/qdrant/landing_page/4d8a8ceb08486decdbf0f0016772c7f120ea7d56/qdrant-landing/static/documentation/cloud/cloud-endpoint.png)

Have a look at the [API reference](https://qdrant.tech/documentation/interfaces/#api-reference) and the official [client libraries](https://qdrant.tech/documentation/interfaces/#client-libraries)  for more information on how to interact with the Qdrant Cloud API.

## Node Specific Endpoints

Next to the cluster endpoint which loadbalances requests across all healthy Qdrant nodes, each node in the cluster has its own endpoint as well. This is mainly useful for monitoring or manual shard management purposes.

You can find the node specific endpoints on the cluster detail page in the Qdrant Cloud Console.

![Cluster node endpoints](https://raw.githubusercontent.com/qdrant/landing_page/4d8a8ceb08486decdbf0f0016772c7f120ea7d56/qdrant-landing/static/documentation/cloud/cloud-node-endpoints.png)

## Restricting Cluster Access by IP Range

You can restrict access to your cluster by specifying allowed IP ranges. This ensures that only clients connecting from the specified IP ranges can access the cluster. For more information, see [Client IP Restrictions](https://qdrant.tech/documentation/cloud/configure-cluster/#client-ip-restrictions).
