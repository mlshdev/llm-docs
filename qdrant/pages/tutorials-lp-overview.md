> Pinned source for Qdrant master: [qdrant-landing/content/documentation/tutorials-lp-overview.md](https://github.com/qdrant/landing_page/blob/3b58061329eedce2091c9dd380b8c47fcaa1cb64/qdrant-landing/content/documentation/tutorials-lp-overview.md)
> Canonical documentation: https://qdrant.tech/documentation/tutorials-lp-overview/

# Qdrant Tutorial Repository

### Basic Tutorials

*Get up and running with Qdrant in minutes.*

| Tutorial                                                                                                    | Objective                                                    | Stack  | Time | Level        |
| :---------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------- | :----- | :--- | :----------- |
| [Qdrant Local Quickstart](https://qdrant.tech/documentation/quickstart/)                                    | Basic CRUD operations and local deployment.                  | Any    | 10m  | Beginner     |
| [Qdrant Cloud Quickstart](https://qdrant.tech/documentation/cloud-quickstart/)                              | Basic CRUD operations on Qdrant Cloud.                       | Any    | 10m  | Beginner     |
| [Semantic Search 101](https://qdrant.tech/documentation/tutorials-basics/search-beginners/)                 | Build a search engine for science fiction books.             | Any    | 10m  | Beginner     |
| [Multimodal Search](https://qdrant.tech/documentation/tutorials-basics/multimodal-search/)                  | Build a pipeline to search across text and images modalities | Python | 15m  | Beginner     |
| [Hybrid Search](https://qdrant.tech/documentation/tutorials-basics/cloud-inference-hybrid-search/)          | Get started with hybrid search.                              | Any    | 30m  | Beginner     |
| [Hybrid Search with Reranking](https://qdrant.tech/documentation/tutorials-basics/reranking-hybrid-search/) | Rerank hybrid search results for improved accuracy.          | Any    | 40m  | Intermediate |

***

### Search Engineering Tutorials

*Master vector search modalities, reranking, and retrieval quality.*

| Tutorial                                                                                                                               | Objective                                                                                        | Stack  | Time | Level        |
| :------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- | :----- | :--- | :----------- |
| [Relevance Feedback](https://qdrant.tech/documentation/tutorials-search-engineering/using-relevance-feedback/)                         | Relevance Feedback Retrieval in Qdrant                                                           | Python | 30m  | Intermediate |
| [Collaborative Filtering](https://qdrant.tech/documentation/tutorials-search-engineering/collaborative-filtering/)                     | Collaborative filtering using sparse embeddings.                                                 | Python | 45m  | Intermediate |
| [Multivector Document Retrieval](https://qdrant.tech/documentation/tutorials-search-engineering/pdf-retrieval-at-scale/)               | PDF RAG using ColPali and embedding pooling.                                                     | Python | 30m  | Intermediate |
| [Measuring ANN Recall](https://qdrant.tech/documentation/tutorials-search-engineering/ann-recall/)                                     | Measure ANN recall with the Web UI and tune HNSW parameters.                                     | Web UI | 15m  | Beginner     |
| [Multivectors and Late Interaction](https://qdrant.tech/documentation/tutorials-search-engineering/using-multivector-representations/) | Effective use of multivector representations.                                                    | Python | 30m  | Intermediate |
| [Compressed Multivector Search](https://qdrant.tech/documentation/tutorials-search-engineering/turbo4-multivector-search/)             | Store a ColBERT multivector as turbo4 and query it alongside a sparse vector with the Query API. | Python | 25m  | Intermediate |
| [Multi-Representation Search](https://qdrant.tech/documentation/tutorials-search-engineering/multi-representation-search/)             | Fuse title, summary, chunk, and tag vectors with named vectors and the Query API.                | Python | 45m  | Intermediate |
| [Static Embeddings](https://qdrant.tech/documentation/tutorials-search-engineering/static-embeddings/)                                 | Evaluate the utility of static embeddings.                                                       | Python | 20m  | Intermediate |
| [Branch-Aware Search](https://qdrant.tech/documentation/tutorials-search-engineering/branch-aware-search/)                             | Scope search to a branch's live view in a versioned corpus, inherited from its ancestors.        | Python | 25m  | Intermediate |
| [Indexing Payloads of Random Shape](https://qdrant.tech/documentation/tutorials-search-engineering/index-dynamic-payloads/)            | Index open-ended payload keys with one nested key-value array instead of one index per key.      | Python | 25m  | Intermediate |
| [Deterministic Collection Slicing](https://qdrant.tech/documentation/tutorials-search-engineering/slicing-filter/)                     | Split a collection into deterministic subsets for parallel scroll and reproducible sampling.     | Python | 20m  | Intermediate |

***

### Operations & Scale

*Production-grade management, monitoring, and high-volume optimization.*

| Tutorial                                                                                                               | Objective                                                                     | Stack      | Time | Level        |
| :--------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------- | :--------- | :--- | :----------- |
| [Snapshots](https://qdrant.tech/documentation/tutorials-operations/create-snapshot/)                                   | Create and restore collection snapshots.                                      | Python     | 20m  | Beginner     |
| [Data Migration](https://qdrant.tech/documentation/tutorials-operations/migration/)                                    | Move embeddings to Qdrant.                                                    | CLI        | 30m  | Intermediate |
| [Embedding Model Migration](https://qdrant.tech/documentation/tutorials-operations/embedding-model-migration/)         | Use your new model with zero downtime.                                        | Any        | 40m  | Intermediate |
| [Blue-Green Cluster Deployment](https://qdrant.tech/documentation/tutorials-operations/blue-green-deployment/)         | Deploy changes to a new cluster and switch traffic with zero production risk. | Any        | 30m  | Intermediate |
| [Time-Based Sharding](https://qdrant.tech/documentation/tutorials-operations/time-based-sharding/)                     | Efficiently manage time-series data with user-defined sharding.               | Any        | 1h   | Intermediate |
| [Large-Scale Search](https://qdrant.tech/documentation/tutorials-operations/large-scale-search/)                       | Cost-efficient search for LAION-400M datasets.                                | Any        | 48h  | Advanced     |
| [GPU-Accelerated HNSW Indexing](https://qdrant.tech/documentation/tutorials-operations/gpu-accelerated-hnsw-indexing/) | Speed up HNSW index builds and compare cost against CPU.                      | Python     | 45m  | Intermediate |
| [Secure a Self-Hosted Instance](https://qdrant.tech/documentation/tutorials-operations/secure-qdrant/)                 | Enable TLS, API keys, and JWT access control.                                 | Any        | 45m  | Intermediate |
| [Incremental Embedding Updates](https://qdrant.tech/documentation/tutorials-operations/incremental-embedding-updates/) | Sync embeddings with changing raw text data.                                  | Any        | 25m  | Beginner     |
| [Prevent Unoptimized Usage](https://qdrant.tech/documentation/tutorials-operations/prevent-unoptimized-usage/)         | Stop bulk uploads from slowing down search without losing data.               | Python     | 20m  | Intermediate |
| [Qdrant Cloud Prometheus Monitoring](https://qdrant.tech/documentation/ops-monitoring/managed-cloud-prometheus/)       | Observability with Prometheus and Grafana.                                    | Prometheus | 30m  | Intermediate |
| [Self-Hosted Prometheus Monitoring](https://qdrant.tech/documentation/ops-monitoring/hybrid-cloud-prometheus/)         | Observability for hybrid/private cloud setups.                                | Prometheus | 30m  | Intermediate |
| [Monitoring Hybrid/Private Cloud with Datadog](https://qdrant.tech/documentation/ops-monitoring/hybrid-cloud-datadog/) | Observability for hybrid/private cloud setups with Datadog.                   | Datadog    | 20m  | Intermediate |

***

### Develop & Implement

*Core tools and APIs for building with Qdrant.*

| Tutorial                                                                                                  | Objective                                         | Stack   | Time | Level        |
| :-------------------------------------------------------------------------------------------------------- | :------------------------------------------------ | :------ | :--- | :----------- |
| [Build a Semantic Search API](https://qdrant.tech/documentation/tutorials-develop/neural-search/)         | Deploy a search service for company descriptions. | FastAPI | 30m  | Beginner     |
| [Build a Hybrid Search API](https://qdrant.tech/documentation/tutorials-develop/hybrid-search-fastembed/) | Combine dense and sparse search.                  | FastAPI | 20m  | Beginner     |
| [Async API](https://qdrant.tech/documentation/tutorials-develop/async-api/)                               | Use Asynchronous programming for efficiency.      | Python  | 25m  | Intermediate |
| [Semantic Search for Code](https://qdrant.tech/documentation/tutorials-develop/code-search/)              | Navigate codebases using vector similarity.       | Python  | 45m  | Intermediate |

***

### Migrate to Qdrant

*Move your vectors from other databases and keep them in sync.*

| Tutorial                                                                                      | Objective                                      | Stack  | Time   | Level        |
| :-------------------------------------------------------------------------------------------- | :--------------------------------------------- | :----- | :----- | :----------- |
| [Migration Tool Overview](https://qdrant.tech/documentation/migrate-to-qdrant/)               | Migrate vectors from any supported source.     | CLI    | Varies | Intermediate |
| [From Pinecone](https://qdrant.tech/documentation/migrate-to-qdrant/from-pinecone/)           | Migrate from Pinecone serverless indexes.      | CLI    | 15m    | Intermediate |
| [From Weaviate](https://qdrant.tech/documentation/migrate-to-qdrant/from-weaviate/)           | Migrate from Weaviate (pre-create collection). | CLI    | 20m    | Intermediate |
| [From Milvus](https://qdrant.tech/documentation/migrate-to-qdrant/from-milvus/)               | Migrate from Milvus/Zilliz with partitions.    | CLI    | 15m    | Intermediate |
| [From Elasticsearch](https://qdrant.tech/documentation/migrate-to-qdrant/from-elasticsearch/) | Migrate dense vectors from Elasticsearch.      | CLI    | 15m    | Intermediate |
| [From pgvector](https://qdrant.tech/documentation/migrate-to-qdrant/from-pgvector/)           | Migrate from PostgreSQL pgvector tables.       | CLI    | 15m    | Intermediate |
| [Migration Verification](https://qdrant.tech/documentation/migration-guidance/)               | Verify data integrity and search quality.      | Python | 1h+    | Intermediate |
| [Keeping Postgres in Sync](https://qdrant.tech/documentation/data-synchronization/)           | Keep Postgres and Qdrant in sync.              | Python | 30m    | Intermediate |
