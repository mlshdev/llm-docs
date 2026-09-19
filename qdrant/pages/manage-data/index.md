> Pinned source for Qdrant master: [qdrant-landing/content/documentation/manage-data/_index.md](https://github.com/qdrant/landing_page/blob/3b58061329eedce2091c9dd380b8c47fcaa1cb64/qdrant-landing/content/documentation/manage-data/_index.md)
> Canonical documentation: https://qdrant.tech/documentation/manage-data/

# Manage Data

Learn how to structure, store, and organize your data in Qdrant. These pages cover the core building blocks — from individual records and the vectors that represent them, to collections, payloads, and the indexing and quantization options that control how data is stored and retrieved.

## Points

[Points](https://qdrant.tech/documentation/manage-data/points/) are the fundamental unit of data in Qdrant — each point is a record consisting of a vector and an optional payload.

## Vectors

[Vectors](https://qdrant.tech/documentation/manage-data/vectors/) define how data is represented in vector space, including support for dense, sparse, and multivector configurations.

## Payload

A [Payload](https://qdrant.tech/documentation/manage-data/payload/) is structured metadata you can attach to a point, enabling filtering and enriched search results.

## Collections

[Collections](https://qdrant.tech/documentation/manage-data/collections/) are named groups of points that share the same vector configuration and serve as the top-level organizational unit in Qdrant.

## Storage

[Storage](https://qdrant.tech/documentation/manage-data/storage/) describes how Qdrant persists vector and payload data, including segment structure and in-memory vs. on-disk options.

## Indexing

[Indexing](https://qdrant.tech/documentation/manage-data/indexing/) covers the available index types — payload, vector, sparse, and filterable — and how they accelerate search and filtering.

## Quantization

[Quantization](https://qdrant.tech/documentation/manage-data/quantization/) reduces memory usage by compressing vectors, with options for scalar, product, and binary quantization.

## Multitenancy

[Multitenancy](https://qdrant.tech/documentation/manage-data/multitenancy/) explains strategies for isolating data across multiple users or tenants within a single Qdrant deployment.

## Bulk Upload

[Bulk Upload](https://qdrant.tech/documentation/manage-data/bulk-upload/) covers strategies for ingesting large datasets efficiently, including batching, parallelization, and index configuration.
