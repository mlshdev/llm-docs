> Pinned source for Qdrant master: [qdrant-landing/content/documentation/production-checklist.md](https://github.com/qdrant/landing_page/blob/4d8a8ceb08486decdbf0f0016772c7f120ea7d56/qdrant-landing/content/documentation/production-checklist.md)
> Canonical documentation: https://qdrant.tech/documentation/production-checklist/

# Things to Check Before Taking Qdrant into Production

A practical checklist to ensure Qdrant is optimized, stable, and ready to handle real-world load.

***

## 1. Distributed Deployment & Sharding

Architect for scale from day one. Retrofitting these patterns onto an existing deployment is costly.

- **Ensure you have enough shards to scale.**
  Qdrant  [scales horizontally](https://qdrant.tech/documentation/scaling/distributed_deployment/) through [sharding](https://qdrant.tech/documentation/scaling/distributed_deployment/#sharding). Plan for enough shards to evenly distribute your data and load across the nodes in your cluster. At a minimum, you need one shard or replica per node.

- **Ensure you don't have too many shards.** While sharding is essential for scale, having too many shards can lead to performance degradation. Each collection has its own shards, so if you have many collections, you may end up with an excessive number of shards.

- **Partition by payload instead of creating separate collections per user.**
  A common cause of too many shards is creating a separate collection for each user. Consider [partitioning by payload](https://qdrant.tech/documentation/manage-data/multitenancy/) to logically isolate data for different users or groups within the same collection instead.

- **Set up load balancing across nodes.**
  Distribute incoming requests evenly across cluster nodes to ensure consistent performance. Without load balancing, a single overloaded node can cause timeouts across your entire application. Qdrant Cloud includes a load balancer, but self-managed deployments need to configure one separately.

***

## 2. Security

Lock down access before exposing your instance to any network. By default, self-hosted open source Qdrant instances are open to all interfaces without any authentication. On Qdrant Cloud, security features are enabled by default.

- **[Set Up an API Key](https://qdrant.tech/documentation/security/#authentication).**
  The minimum step required before any production deployment. Without it, an open source instance accepts requests from anyone who can reach it. On Qdrant Cloud, API key authentication is enabled by default.

- **Use a Read-Only API Key for Query-Only Consumers.**
  Issue a separate [read-only key](https://qdrant.tech/documentation/security/#read-only-api-key) for services or users that only need to query data. This limits the blast radius if a key is compromised. Both keys can be active simultaneously.

- **Use [Fine-Grained Access Control](https://qdrant.tech/documentation/security/#granular-access-api-keys).**
  Grant read or write permissions on individual collections, giving each client access only to what it needs.

- **Enable TLS.**
  [Encrypt traffic](https://qdrant.tech/documentation/security/#tls) between clients and your Qdrant instance (enabled by default on Qdrant Cloud).

- **Bind to a Private Network Interface.**
  When self-hosting, prevent external access by [binding Qdrant to a private IP or loopback address](https://qdrant.tech/documentation/security/#network-bind).

***

## 3. Quantization

Compress vectors to reduce memory footprint. [Quantization](https://qdrant.tech/documentation/manage-data/quantization/) is one of the most impactful changes you can make before going to production.

- **Quantization** reduces the memory footprint of vectors, by compressing them to fewer bits. This enables you to store more vectors in memory and on disk, which can improve query performance and reduce costs. Qdrant supports multiple quantization methods, each with different trade-offs between recall, speed, and compression. [Choose the right method](https://qdrant.tech/documentation/manage-data/quantization/#how-to-choose-the-right-quantization-method) based on your requirements for recall, compression, and distance metrics.

- **Benchmark retrieval quality after applying quantization.**
  Some models produce embeddings that can't be quantized efficiently. [Verify](https://qdrant.tech/documentation/manage-data/quantization/#accuracy-tuning) that error rates stay within your acceptable threshold for your specific dataset and query patterns. Rescoring adds latency. [Tune](https://qdrant.tech/documentation/manage-data/quantization/#memory-and-speed-tuning) quantization settings to ensure it meets your performance targets.

***

## 4. Storage and Hardware

Right-size your RAM, disk type, and storage mode. These decisions are difficult to change once you're in production.

- **Choose a [memory tier](https://qdrant.tech/documentation/ops-configuration/memory-tiers/) for your vectors.**
  `cached` gives maximum speed, but RAM becomes a bottleneck at scale. [`cold`](https://qdrant.tech/documentation/manage-data/storage/#configuring-memmap-storage) maps data to disk-backed virtual address space, which is slower but handles datasets larger than RAM.

- **Estimate your RAM requirements before provisioning.**
  [Calculate](https://qdrant.tech/documentation/capacity-planning/) your full dataset size and add headroom for vector and payload index overhead.

- **Use SSDs for disk-backed storage, not HDDs.**
  SSDs are strongly recommended for workloads involving random reads and writes. HDDs introduce significant latency that can degrade query response times at scale.

- **Keep frequently accessed data in memory.**
  [Keep hot collections in RAM](https://qdrant.tech/documentation/ops-optimization/optimize/#3-high-precision-with-high-speed-search) to minimize disk I/O and speed up query execution. Identify your most-queried collections and prioritize them for the `pinned` or `cached` memory tiers.

- **Enable inline storage.**
  When vectors and the HNSW index are in the `cold` memory tier, improve search performance by [enabling inline storage](https://qdrant.tech/documentation/ops-optimization/optimize/#inline-storage-in-hnsw-index). It makes searches faster by reducing the number of I/O operations, at the cost of increased storage usage.

***

## 5. Query Optimization

Ensure your search is fast, accurate, and efficient under production load.

- **Create [payload indexes](https://qdrant.tech/documentation/manage-data/indexing/#payload-index) on fields used for filtering.**
  Payload indexes speed up filtering and reduce load on the system. Identify which fields are commonly used in filters and create indexes on them. Create payload indexes before ingesting data. HNSW graphs are only [optimized for payload filtering](https://qdrant.tech/documentation/manage-data/indexing/#filterable-hnsw-index) when they are generated after payload index creation.

- **Apply payload filters to narrow the search space.**
  Searching every data point is inefficient at scale. [Filtering](https://qdrant.tech/documentation/search/filtering/) on specific payload fields can reduce computational load and focus queries on relevant data subsets.

- **[Query indexed data only](https://qdrant.tech/documentation/search/low-latency-search/#query-indexed-data-only).**
  Under heavy write loads, large amounts of data may not be indexed immediately, which can slow down searches. To maintain consistent performance, only query indexed data.

- **Evaluate whether [hybrid search](https://qdrant.tech/documentation/search/hybrid-queries/) fits your use case.**
  Hybrid search casts a wide retrieval net, maximizing recall by using multiple retrieval methods, such as combining dense vector search (semantic similarity) with sparse vector search (keyword matching). Evaluate its effectiveness for your specific dataset and queries.

- **Rerank for maximum search relevance.**
  After initial hybrid retrieval, [rerank](https://qdrant.tech/documentation/search/hybrid-queries/#multi-stage-queries) the results using late interaction embeddings. Reranking can be computationally expensive, so aim for a balance between relevance and speed. To save memory, disable the HNSW index for vectors used only for rescoring and factor the rescoring vector into your capacity planning (disk and RAM).

- **Implement batch processing for inserts and queries.**
  [Group vector inserts into larger batches](https://qdrant.tech/documentation/manage-data/points/?q=batch#upload-points) rather than individual transactions to reduce write overhead. [Batch multiple queries together](https://qdrant.tech/documentation/search/search/#batch-search-api) to cut round trips to the database.

- **Reduce tail latency with [delayed fan-outs](https://qdrant.tech/documentation/search/low-latency-search/#use-delayed-fan-outs).**
  For collections with a replication factor higher than one, use delayed fan-outs to automatically query a second replica if the first one doesn't respond within the desired latency threshold.
