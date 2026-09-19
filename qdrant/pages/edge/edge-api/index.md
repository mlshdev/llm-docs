> Pinned source for Qdrant master: [qdrant-landing/content/documentation/edge/edge-api/_index.md](https://github.com/qdrant/landing_page/blob/3b58061329eedce2091c9dd380b8c47fcaa1cb64/qdrant-landing/content/documentation/edge/edge-api/_index.md)
> Canonical documentation: https://qdrant.tech/documentation/edge/edge-api/

# The Edge API

To work with a Qdrant Edge Shard, use the [Python Bindings for Qdrant Edge](https://pypi.org/project/qdrant-edge-py/) package or the [`qdrant-edge` Rust crate](https://crates.io/crates/qdrant-edge). Both expose an `EdgeShard` type with methods to manage data, query it, and restore snapshots.

For task-oriented introductions, refer to the [Quickstart](https://qdrant.tech/documentation/edge/edge-quickstart/) and the [Data Synchronization Patterns](https://qdrant.tech/documentation/edge/edge-data-synchronization-patterns/).

## Reference

| Page                                                                                | What it covers                                                                                           |
| ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [Shard Lifecycle](https://qdrant.tech/documentation/edge/edge-api/shard-lifecycle/) | Creating, loading, inspecting, flushing, and closing an Edge Shard, and reading its metadata with `info` |
| [Configuration](https://qdrant.tech/documentation/edge/edge-api/configuration/)     | `EdgeConfig`, dense and sparse vector parameters, optimizer settings and `optimize`, and WAL options     |
| [Updating Data](https://qdrant.tech/documentation/edge/edge-api/updating-data/)     | The `update` method and the full set of update operations                                                |
| [Reading Data](https://qdrant.tech/documentation/edge/edge-api/reading-data/)       | `query`, `scroll`, grouping, `retrieve`, `count`, and `facet`                                            |
| [Snapshots](https://qdrant.tech/documentation/edge/edge-api/snapshots/)             | Unpacking snapshots, reading manifests, and applying snapshots to a shard                                |

## Language Differences

The Python bindings and the Rust crate cover the same core surface, but they are not identical. Each method notes the languages it is available in. The most significant differences are:

- Rust exposes [`query_groups`](https://qdrant.tech/documentation/edge/edge-api/reading-data/#query_groups) and [`search_matrix`](https://qdrant.tech/documentation/edge/edge-api/reading-data/#search_matrix), which have no Python equivalent. Both require the `EdgeShardRead` trait in scope.
- Rust closes a shard by dropping it, while Python has an explicit `close` method.
- WAL options and the configuration setters are Rust only.
- Python's [`EdgeConfig`](https://qdrant.tech/documentation/edge/edge-api/configuration/#edgeconfig) always requires `vectors` or `sparse_vectors`, so adjusting a tunable parameter on an existing shard means redeclaring its vectors. Rust can build a configuration that sets only tunables.
- [Applying a snapshot](https://qdrant.tech/documentation/edge/edge-api/snapshots/#apply-a-snapshot) updates the shard in place in Python, but returns a new shard in Rust.

## More Examples

The Qdrant GitHub repository contains examples of using the Qdrant Edge API in [Python](https://github.com/qdrant/qdrant/tree/dev/lib/edge/python/examples) and [Rust](https://github.com/qdrant/qdrant/tree/dev/lib/edge/publish/examples).
