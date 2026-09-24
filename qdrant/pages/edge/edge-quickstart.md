> Pinned source for Qdrant master: [qdrant-landing/content/documentation/edge/edge-quickstart.md](https://github.com/qdrant/landing_page/blob/78beef7e019cb0e5c3cdf851163a98df8c04c37f/qdrant-landing/content/documentation/edge/edge-quickstart.md)
> Canonical documentation: https://qdrant.tech/documentation/edge/edge-quickstart/

# Qdrant Edge Quickstart

## Install Qdrant Edge

First, install the [Python Bindings for Qdrant Edge](https://pypi.org/project/qdrant-edge-py/) or the [Rust crate](https://crates.io/crates/qdrant-edge).

## Create a Storage Directory

A Qdrant Edge Shard stores its data in a local directory on disk. Create the directory if it doesn't exist yet:

**Python**

```python
from pathlib import Path

SHARD_DIRECTORY = "./qdrant-edge-directory"

Path(SHARD_DIRECTORY).mkdir(parents=True, exist_ok=True)
```

**Rust**

```rust
const SHARD_DIRECTORY: &str = "./qdrant-edge-directory";

fs_err::create_dir_all(SHARD_DIRECTORY)?;
```

## Configure the Edge Shard

An Edge Shard is configured with a definition of the dense and sparse vectors that can be stored in the Edge Shard, similar to how you would configure a Qdrant collection.

Set up a configuration by creating an instance of `EdgeConfig`. For example:

**Python**

```python
from qdrant_edge import (
    Distance,
    EdgeConfig,
    EdgeVectorParams,
)

VECTOR_NAME="my-vector"
VECTOR_DIMENSION=4

config = EdgeConfig(
    vectors={
        VECTOR_NAME: EdgeVectorParams(
            size=VECTOR_DIMENSION,
            distance=Distance.Cosine,
        )
    }
)
```

**Rust**

```rust
use qdrant_edge::*;

const VECTOR_NAME: &str = "my-vector";
const VECTOR_DIMENSION: usize = 4;

let config = EdgeConfigBuilder::new()
    .on_disk_payload(true)
    .vector(
        VECTOR_NAME,
        EdgeVectorParamsBuilder::new(VECTOR_DIMENSION, Distance::Cosine)
            .on_disk(true)
            .build(),
    )
    .build();
```

Qdrant Edge supports all Qdrant quantization methods: Scalar, Product, Binary, and TurboQuant. Configure quantization globally on `EdgeConfig.quantization_config` or override per-vector on `EdgeVectorParams.quantization_config`. See the [Quantization](https://qdrant.tech/documentation/manage-data/quantization/) guide for configuration details.

For every `EdgeConfig` parameter, refer to [Configuration](https://qdrant.tech/documentation/edge/edge-api/configuration/#edgeconfig).

## Initialize the Edge Shard

Now you can create a new `EdgeShard` using `EdgeShard.create` (Python) or `EdgeShard::new` (Rust), passing the storage directory and configuration:

**Python**

```python
from qdrant_edge import EdgeShard

edge_shard = EdgeShard.create(SHARD_DIRECTORY, config)
```

**Rust**

```rust
use std::path::*;
use qdrant_edge::*;

let edge_shard = EdgeShard::new(
    Path::new(SHARD_DIRECTORY),
    config,
)?;
```

Note that `create` and `new` will fail if the storage directory already contains data. To initialize an Edge Shard with existing data, see [Load Existing Edge Shard from Disk](#load-existing-edge-shard-from-disk).

For the full signatures, refer to [Create a New Edge Shard](https://qdrant.tech/documentation/edge/edge-api/shard-lifecycle/#create-a-new-edge-shard).

## Work with Points

An Edge Shard has several methods to work with points. To add points, use the [`update`](https://qdrant.tech/documentation/edge/edge-api/updating-data/#update) method:

**Python**

```python
from qdrant_edge import ( Point, UpdateOperation )

point = Point(
    id=1,
    vector={VECTOR_NAME: [0.1, 0.2, 0.3, 0.4]},
    payload={"color": "red"}
)

edge_shard.update(UpdateOperation.upsert_points([point]))
```

**Rust**

```rust
use serde_json::json;
use qdrant_edge::*;

let points: Vec<PointStructPersisted> = vec![
    PointStruct::new(
        1u64,
        Vectors::new_named([(VECTOR_NAME, vec![0.1f32, 0.2, 0.3, 0.4])]),
        json!({"color": "red"}),
    )
    .into(),
];

edge_shard.update(UpdateOperation::PointOperation(
    PointOperations::UpsertPoints(
        PointInsertOperations::PointsList(points),
    ),
))?;
```

To retrieve a point by ID, use the [`retrieve`](https://qdrant.tech/documentation/edge/edge-api/reading-data/#retrieve) method:

**Python**

```python
records = edge_shard.retrieve(
    point_ids=[1],
    with_payload=True,
    with_vector=False
)
```

**Rust**

```rust
use qdrant_edge::*;

let retrieved = edge_shard.retrieve(
    RetrieveRequestBuilder::new(vec![PointId::NumId(1)])
        .with_payload(WithPayloadInterface::Bool(true))
        .with_vector(WithVector::Bool(false))
        .build(),
)?;
```

## Modify the Vector Schema

You can add or remove named vectors to an existing Edge Shard's schema. This is useful when migrating to a new embedding model or adding hybrid search to an Edge Shard that already contains data.

For example, to add a sparse vector for [BM25 keyword search](https://qdrant.tech/documentation/edge/edge-bm25/):

**Python**

```python
from qdrant_edge import Modifier

edge_shard.update(UpdateOperation.create_sparse_vector(
    vector_name="text",
    modifier=Modifier.Idf,
))
```

**Rust**

```rust
use qdrant_edge::*;

edge_shard.update(UpdateOperation::VectorNameOperation(
    VectorNameOperations::CreateVectorName(CreateVectorName {
        vector_name: "text".to_string(),
        config: VectorNameConfig::sparse(SparseVectorConfig {
            modifier: Some(Modifier::Idf),
            datatype: None,
        }),
    }),
))?;
```

Existing points aren't automatically populated with the new vector. Re-upsert them to add their values for the new field.

To remove a named vector, use `UpdateOperation.delete_vector_name("text")` (Python) or `VectorNameOperations::DeleteVectorName` (Rust).

For every schema operation, refer to [Update Operations](https://qdrant.tech/documentation/edge/edge-api/updating-data/#update-operations).

## Create a Payload Index

To optimize operations like [filtering](#filter-points) and [faceting](#create-facets) on payload fields, first create a payload index on the fields you plan to use with these operations:

**Python**

```python
from qdrant_edge import PayloadSchemaType

edge_shard.update(UpdateOperation.create_field_index("color", PayloadSchemaType.Keyword))
```

**Rust**

```rust
use qdrant_edge::*;

edge_shard.update(UpdateOperation::FieldIndexOperation(
    FieldIndexOperations::CreateIndex(CreateIndex {
        field_name: "color".try_into().unwrap(),
        field_schema: Some(PayloadFieldSchema::FieldType(
            PayloadSchemaType::Keyword,
        )),
    }),
))?;
```

For the index parameters, refer to `create_field_index` in [Update Operations](https://qdrant.tech/documentation/edge/edge-api/updating-data/#update-operations).

## Query Points

To query points in the Edge Shard, use the [`query`](https://qdrant.tech/documentation/edge/edge-api/reading-data/#query) method:

**Python**

```python
from qdrant_edge import Query, QueryRequest

results = edge_shard.query(
    QueryRequest(
        query=Query.Nearest([0.2, 0.1, 0.9, 0.7], using=VECTOR_NAME),
        limit=10,
        with_vector=False,
        with_payload=True
    )
)
```

**Rust**

```rust
use qdrant_edge::*;

let results = edge_shard.query(
    QueryRequestBuilder::new(10)
        .query(ScoringQuery::Vector(QueryEnum::Nearest(NamedQuery {
            query: vec![0.2f32, 0.1, 0.9, 0.7].into(),
            using: Some(VECTOR_NAME.to_string()),
        })))
        .with_payload(WithPayloadInterface::Bool(true))
        .build(),
)?;
```

## Filter points

You can also [filter](https://qdrant.tech/documentation/search/filtering/) points based on payload fields:

**Python**

```python
from qdrant_edge import FieldCondition, Filter, MatchValue

results = edge_shard.query(
    QueryRequest(
        query=Query.Nearest([0.2, 0.1, 0.9, 0.7], using=VECTOR_NAME),
        filter=Filter(
            must=[
                FieldCondition(
                    key="color",
                    match=MatchValue(value="red"),
                )
            ]
        ),
        limit=10,
        with_vector=False,
        with_payload=True
    )
)
```

**Rust**

```rust
use qdrant_edge::*;

let filter = Filter {
    should: None,
    min_should: None,
    must: Some(vec![Condition::Field(FieldCondition::new_match(
        "color".try_into().unwrap(),
        Match::Value(MatchValue {
            value: ValueVariants::String("red".to_string()),
        }),
    ))]),
    must_not: None,
};

let results = edge_shard.query(
    QueryRequestBuilder::new(10)
        .query(ScoringQuery::Vector(QueryEnum::Nearest(NamedQuery {
            query: vec![0.2f32, 0.1, 0.9, 0.7].into(),
            using: Some(VECTOR_NAME.to_string()),
        })))
        .filter(filter)
        .with_payload(WithPayloadInterface::Bool(true))
        .build(),
)?;
```

Filters are accepted by most read methods.

## Create Facets

To create facets on a payload field, use the [`facet`](https://qdrant.tech/documentation/edge/edge-api/reading-data/#facet) method.

**Python**

```python
from qdrant_edge import FacetRequest

facet_response = edge_shard.facet(FacetRequest(key="color", limit=10, exact=False))
```

**Rust**

```rust
use qdrant_edge::*;

let facet_response = edge_shard.facet(
    FacetRequestBuilder::new("color".try_into().unwrap())
        .limit(10)
        .build(),
)?;
```

## Optimize the Edge Shard

Optimization is the process of removing data marked for deletion, merging segments, and creating indexes. Qdrant Edge does not have a background optimizer. Instead, an application can call the `optimize` method to synchronously run optimization at a suitable time, such as during low-traffic periods or after a batch of updates.

**Python**

```python
edge_shard.optimize()
```

**Rust**

```rust
edge_shard.optimize()?;
```

The optimizer can be configured using the `optimizers` parameter of `EdgeConfig` when initializing the Edge Shard. For example:

**Python**

```python
from qdrant_edge import EdgeOptimizersConfig

config = EdgeConfig(
    vectors={
        VECTOR_NAME: EdgeVectorParams(
            size=VECTOR_DIMENSION,
            distance=Distance.Cosine,
        )
    },
    optimizers=EdgeOptimizersConfig(
        deleted_threshold=0.2,
        vacuum_min_vector_number=100,
        default_segment_number=2,
    ),
)
```

**Rust**

```rust
use qdrant_edge::*;

let config = EdgeConfigBuilder::new()
    .on_disk_payload(true)
    .vector(
        VECTOR_NAME,
        EdgeVectorParamsBuilder::new(VECTOR_DIMENSION, Distance::Cosine)
            .on_disk(true)
            .build(),
    )
    .optimizers(EdgeOptimizersConfig {
        deleted_threshold: Some(0.2),
        vacuum_min_vector_number: Some(100),
        default_segment_number: Some(2),
        ..Default::default()
    })
    .build();
```

For the optimizer parameters and the `optimize` return value, refer to [Optimizer Parameters](https://qdrant.tech/documentation/edge/edge-api/configuration/#optimizer-parameters).

## Close the Edge Shard

When shutting down your application, close the Edge Shard to ensure all data is flushed to disk. The data is persisted on disk and can be used to reopen the Edge Shard.

**Python**

```python
edge_shard.close()
```

**Rust**

```rust
drop(edge_shard);
```

In Rust there is no `close` method; the shard is flushed when it is dropped. Refer to [Close an Edge Shard](https://qdrant.tech/documentation/edge/edge-api/shard-lifecycle/#close-an-edge-shard).

## Load Existing Edge Shard from Disk

After closing an Edge Shard, you can reopen it by loading its data and configuration from disk using the [`load`](https://qdrant.tech/documentation/edge/edge-api/shard-lifecycle/#load-an-existing-edge-shard) method:

**Python**

```python
edge_shard = EdgeShard.load(SHARD_DIRECTORY)
```

**Rust**

```rust
use std::path::*;
use qdrant_edge::*;

let edge_shard = EdgeShard::load(Path::new(SHARD_DIRECTORY), None)?;
```

## Custom WAL Size

Qdrant Edge uses a Write-Ahead Log (WAL) to record every update before it's applied to storage. The WAL file is pre-allocated to 32 MB by default, inflating backup sizes and OS storage reports. To reduce the size, set `wal_options` on `EdgeConfig` when calling `new` or `load`. WAL options are only available in Rust.

For example, to set the WAL size to 4 MB:

**Rust**

```rust
use std::path::*;
use qdrant_edge::*;

let config = EdgeConfigBuilder::new()
    .wal_options(WalOptions {
        segment_capacity: 4 * 1024 * 1024,
        ..Default::default()
    })
    .build();

let edge_shard = EdgeShard::load(Path::new(SHARD_DIRECTORY), Some(config))?;
```

When loading an existing Edge Shard, any parameter left unset on the supplied `EdgeConfig` keeps the value persisted with the shard. A config that only sets `wal_options` therefore leaves the rest of the shard's configuration untouched.

For every `WalOptions` field, refer to [WAL Options](https://qdrant.tech/documentation/edge/edge-api/configuration/#wal-options).

## Tune the Search Thread Pool

Each Edge Shard owns a thread pool that runs per-segment reads such as `query`, `scroll`, `count`, and `facet` in parallel. The pool is built once when the shard opens and kept for its lifetime.

By default the pool is deliberately larger than the CPU count: four threads per CPU core. Per-segment reads spend much of their time waiting on I/O, so overcommitting keeps the CPU busy while other threads block. On a device where an Edge Shard shares a small number of cores with the rest of the application, that default can claim more than you want.

Two `EdgeConfig` parameters control the pool:

- `max_search_threads` sets the number of threads directly, replacing the CPU-derived default.
- `search_pool_core` pins every pool thread to one CPU core, bounding the shard's search compute to that core while keeping the pool's ability to overlap I/O.

**Python**

```python
config = EdgeConfig(
    vectors={
        VECTOR_NAME: EdgeVectorParams(
            size=VECTOR_DIMENSION,
            distance=Distance.Cosine,
        )
    },
    max_search_threads=4,
    search_pool_core=0,
)

edge_shard = EdgeShard.load(SHARD_DIRECTORY, config)
```

**Rust**

```rust
use qdrant_edge::*;

let config = EdgeConfigBuilder::new()
    .max_search_threads(4)
    .search_pool_core(0)
    .build();

let edge_shard = EdgeShard::load(Path::new(SHARD_DIRECTORY), Some(config))?;
```

Pinning is best-effort. If the core ID is unavailable, Qdrant Edge logs a warning and leaves the threads unpinned rather than failing. macOS treats thread affinity as a hint, so pinning may have no effect there.

> **Note**
>
> In Python, <code>EdgeConfig</code> requires <code>vectors</code> or <code>sparse\_vectors</code> to be non-empty, so a configuration that only adjusts the thread pool must still declare the shard's vectors. Rust has no such restriction: <code>EdgeConfigBuilder</code> can build a configuration that sets only these parameters, and <code>load</code> takes the rest from the shard.

For both parameters, refer to [Configuration](https://qdrant.tech/documentation/edge/edge-api/configuration/#edgeconfig).

## More Examples

The Qdrant GitHub repository contains examples of using the Qdrant Edge API in [Python](https://github.com/qdrant/qdrant/tree/dev/lib/edge/python/examples) and [Rust](https://github.com/qdrant/qdrant/tree/dev/lib/edge/publish/examples).
