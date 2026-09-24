> Pinned source for Qdrant master: [qdrant-landing/content/documentation/edge/_index.md](https://github.com/qdrant/landing_page/blob/78beef7e019cb0e5c3cdf851163a98df8c04c37f/qdrant-landing/content/documentation/edge/_index.md)
> Canonical documentation: https://qdrant.tech/documentation/edge/

> **Note**
>
> Qdrant Edge is in beta. The API and functionality may change in future releases.

# What Is Qdrant Edge?

Qdrant Edge is a lightweight, embedded vector search engine for in-process retrieval with a minimal memory footprint and no background services. Qdrant Edge is designed for applications requiring low-latency vector search in environments with limited or intermittent connectivity, such as robots, kiosks, home assistants, and mobile phones.

Unlike Qdrant Server, which uses a client-server architecture, Qdrant Edge runs inside the application process. Think of it as SQLite, but for vector search. Data is stored and queried locally, ensuring low-latency access and enhanced privacy since data does not need to be transmitted to an external server. That said, Qdrant Edge provides APIs to [synchronize data with a Qdrant server](https://qdrant.tech/documentation/edge/edge-data-synchronization-patterns/). This enables you to offload heavy computations such as indexing to more powerful server instances, back up and restore data, and centrally aggregate data from multiple edge devices.

## Qdrant Edge Shard

Qdrant Edge is built around the concept of an **Edge Shard**: a self-contained storage unit that can operate independently. Each Edge Shard manages its own data, including vector and payload storage, and can perform local search and retrieval operations.

![Qdrant Edge Shards operate on edge devices](https://raw.githubusercontent.com/qdrant/landing_page/78beef7e019cb0e5c3cdf851163a98df8c04c37f/qdrant-landing/static/documentation/edge/qdrant-edge.png)

To work with a Qdrant Edge Shard, use the [Python Bindings for Qdrant Edge](https://pypi.org/project/qdrant-edge-py/) package or the [`qdrant-edge` Rust crate](https://crates.io/crates/qdrant-edge). Both expose an `EdgeShard` type with methods to manage data, query it, and restore snapshots. To learn more about the available methods, refer to the [Edge API](https://qdrant.tech/documentation/edge/edge-api/) page.

## Using Qdrant Edge

| Type          | Guide                                                                                                       | What you'll learn                                                                                                  |
| ------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Beginner**  | [Qdrant Edge Quickstart](https://qdrant.tech/documentation/edge/edge-quickstart/)                           | Get started with Qdrant Edge and learn the basics of managing and querying data                                    |
| **Beginner**  | [On-Device Embeddings](https://qdrant.tech/documentation/edge/edge-fastembed-embeddings/)                   | Generate vector embeddings directly on edge devices using FastEmbed                                                |
| **Beginner**  | [On-Device BM25](https://qdrant.tech/documentation/edge/edge-bm25/)                                         | Generate BM25 sparse embeddings on-device for keyword search                                                       |
| **Reference** | [Data Synchronization Patterns](https://qdrant.tech/documentation/edge/edge-data-synchronization-patterns/) | Overview of patterns for synchronizing data between Edge Shards and Qdrant server collections                      |
| **Advanced**  | [Synchronize with a Server](https://qdrant.tech/documentation/edge/edge-synchronization-guide/)             | Synchronize an Edge Shard with a Qdrant server collection to offload indexing and synchronize data between devices |
| **Reference** | [Edge API](https://qdrant.tech/documentation/edge/edge-api/)                                                | Reference for the `EdgeShard` methods available in Python and Rust, with their parameters and return values        |
| **Reference** | [Edge vs. Qdrant Cluster](https://qdrant.tech/documentation/edge/edge-vs-qdrant-cluster/)                   | Comparison of Qdrant Edge and Qdrant Server across architecture, operations, and API surface                       |

### More Examples

The Qdrant GitHub repository contains examples of using the Qdrant Edge API in [Python](https://github.com/qdrant/qdrant/tree/dev/lib/edge/python/examples) and [Rust](https://github.com/qdrant/qdrant/tree/dev/lib/edge/publish/examples).
