> Pinned source for Qdrant master: [qdrant-landing/content/documentation/ops-configuration/memory-tiers.md](https://github.com/qdrant/landing_page/blob/4d8a8ceb08486decdbf0f0016772c7f120ea7d56/qdrant-landing/content/documentation/ops-configuration/memory-tiers.md)
> Canonical documentation: https://qdrant.tech/documentation/ops-configuration/memory-tiers/

# Memory Tiers

Qdrant persists all collection data to disk. For faster search, you can also load individual structures into RAM, but keeping everything in memory isn't always cost-effective. The per-structure `memory` parameter controls how each structure is cached in RAM: pinned permanently, warmed into a disk cache at startup, or left on disk until first accessed.

This page covers how to configure memory tiers, the different placement tiers available, and how to optimize for disk-based retrieval.

## Configuring Memory Tiers

> **Note**
>
> This page covers the <code>memory</code> parameter introduced in Qdrant v1.19. If you're using an older version, see the <a href="#legacy-settings">Legacy Settings</a> section for how to map the new parameter to the old ones.

Each collection in Qdrant is backed by several independent structures:

- **[Dense vectors](https://qdrant.tech/documentation/manage-data/vectors/)** hold the original floating-point vectors for a collection or named vector.
- **The [HNSW vector index](https://qdrant.tech/documentation/manage-data/indexing/#vector-index)** is a graph structure built over dense vectors that makes approximate nearest-neighbor search fast.
- **[Quantized vectors](https://qdrant.tech/documentation/manage-data/quantization/)** are compressed copies of the original vectors, used to speed up search and shrink memory use.
- **The [sparse vector index](https://qdrant.tech/documentation/manage-data/indexing/#sparse-vector-index)** is an exact, inverted-index-style structure built over sparse vectors.
- **[Payloads](https://qdrant.tech/documentation/manage-data/collections/#create-a-collection)** are the JSON documents attached to each point.
- **[Payload indexes](https://qdrant.tech/documentation/manage-data/indexing/#payload-index)** are per-field indexes that speed up filtering.

Each of these structures accepts a `memory` parameter that controls how it is cached in RAM: pinned permanently, warmed into a disk cache at startup, or left on disk until first accessed. The available tiers are:

- **`pinned`**: Qdrant loads the data onto the heap and never evicts it. Requests stay fast, but the structure must fit in RAM at all times. Because it allocates data on the heap, it's [only available for structures that support a heap-backed in-RAM representation](#limitations).
- **`cached`**: Qdrant pre-loads the data into the disk cache when it starts up, so the first request is fast. Under memory pressure, the operating system can evict this data if it decides another component's data is used more often.
- **`cold`**: Qdrant doesn't pre-load the data into RAM. Startup is faster and uses less memory, but the first access to any page requires a disk read until the OS caches it.

`cold` and `cached` both back the data with a memory-mapped file; the only difference is whether Qdrant proactively warms the operating system's page cache on load. The OS evicts both tiers using the same criteria, so `cached` data gets no priority over `cold` data under memory pressure. Under heavy I/O load, pages evicted from either tier require disk reads to reload, which adds latency.

### Limitations

- Qdrant rejects `pinned` for dense vectors and payloads, since both only support a memory-mapped in-RAM representation (`cached` or `cold`).
- For sparse vectors, only the sparse vector index has a `memory` parameter. Qdrant doesn't offer a RAM cache for sparse vectors, since their values aren't read during the index search step itself, only when a point is fetched.

## Default Tiers

If you don't explicitly set `memory` on a structure, Qdrant defaults to the following tiers:

| Data structure      | Default tier                                                                                                                              |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Dense vectors       | `cached`                                                                                                                                  |
| HNSW vector index   | `cached`                                                                                                                                  |
| Quantized vectors   | Depends on the placement of the original dense vectors: `pinned` if original vectors are `cached`, `cold` if original vectors are `cold`. |
| Sparse vector index | `pinned`                                                                                                                                  |
| Payloads            | `cold`                                                                                                                                    |
| Payload indexes     | `pinned`                                                                                                                                  |

[Low Memory Mode](https://qdrant.tech/documentation/ops-configuration/administration/#low-memory-mode) can degrade these defaults at startup under memory constraints, without changing the persisted collection configuration.

## Example

This example configures a collection so the vectors are cached in RAM, the HNSW vector index is cold, the quantized vectors are pinned, and the payload is cached:

**Http**

```http
PUT /collections/{collection_name}
{
    "vectors": {
        "size": 768,
        "distance": "Cosine",
        "memory": "cached"
    },
    "hnsw_config": {
        "memory": "cold"
    },
    "quantization_config": {
        "scalar": {
            "type": "int8",
            "memory": "pinned"
        }
    },
    "payload": {
        "memory": "cached"
    }
}
```

**Python**

```python
from qdrant_client import QdrantClient, models

client.create_collection(
    collection_name="{collection_name}",
    vectors_config=models.VectorParams(
        size=768,
        distance=models.Distance.COSINE,
        memory=models.Memory.CACHED,
    ),
    hnsw_config=models.HnswConfigDiff(memory=models.Memory.COLD),
    quantization_config=models.ScalarQuantization(
        scalar=models.ScalarQuantizationConfig(
            type=models.ScalarType.INT8,
            memory=models.Memory.PINNED,
        ),
    ),
    payload=models.PayloadStorageParams(memory=models.Memory.CACHED),
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

client.createCollection("{collection_name}", {
  vectors: {
    size: 768,
    distance: "Cosine",
    memory: "cached",
  },
  hnsw_config: {
    memory: "cold",
  },
  quantization_config: {
    scalar: {
      type: "int8",
      memory: "pinned",
    },
  },
  payload: {
    memory: "cached",
  },
});
```

**Rust**

```rust
use qdrant_client::qdrant::{
    CreateCollectionBuilder, Distance, HnswConfigDiffBuilder, Memory, PayloadStorageParamsBuilder,
    QuantizationType, ScalarQuantizationBuilder, VectorParamsBuilder,
};
use qdrant_client::Qdrant;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .vectors_config(
                VectorParamsBuilder::new(768, Distance::Cosine).memory(Memory::Cached),
            )
            .hnsw_config(HnswConfigDiffBuilder::default().memory(Memory::Cold))
            .quantization_config(
                ScalarQuantizationBuilder::default()
                    .r#type(QuantizationType::Int8.into())
                    .memory(Memory::Pinned),
            )
            .payload(PayloadStorageParamsBuilder::default().memory(Memory::Cached)),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.Distance;
import io.qdrant.client.grpc.Collections.HnswConfigDiff;
import io.qdrant.client.grpc.Collections.Memory;
import io.qdrant.client.grpc.Collections.PayloadStorageParams;
import io.qdrant.client.grpc.Collections.QuantizationConfig;
import io.qdrant.client.grpc.Collections.QuantizationType;
import io.qdrant.client.grpc.Collections.ScalarQuantization;
import io.qdrant.client.grpc.Collections.VectorParams;
import io.qdrant.client.grpc.Collections.VectorsConfig;

client
    .createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setVectorsConfig(
                VectorsConfig.newBuilder()
                    .setParams(
                        VectorParams.newBuilder()
                            .setSize(768)
                            .setDistance(Distance.Cosine)
                            .setMemory(Memory.Cached)
                            .build())
                    .build())
            .setHnswConfig(HnswConfigDiff.newBuilder().setMemory(Memory.Cold).build())
            .setQuantizationConfig(
                QuantizationConfig.newBuilder()
                    .setScalar(
                        ScalarQuantization.newBuilder()
                            .setType(QuantizationType.Int8)
                            .setMemory(Memory.Pinned)
                            .build())
                    .build())
            .setPayload(PayloadStorageParams.newBuilder().setMemory(Memory.Cached).build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

await client.CreateCollectionAsync(
	collectionName: "{collection_name}",
	vectorsConfig: new VectorParams { Size = 768, Distance = Distance.Cosine, Memory = Memory.Cached },
	hnswConfig: new HnswConfigDiff { Memory = Memory.Cold },
	quantizationConfig: new QuantizationConfig
	{
		Scalar = new ScalarQuantization { Type = QuantizationType.Int8, Memory = Memory.Pinned }
	},
	onDiskPayload: false
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client.CreateCollection(context.Background(), &qdrant.CreateCollection{
	CollectionName: "{collection_name}",
	VectorsConfig: qdrant.NewVectorsConfig(&qdrant.VectorParams{
		Size:     768,
		Distance: qdrant.Distance_Cosine,
		Memory:   qdrant.Memory_Cached.Enum(),
	}),
	HnswConfig: &qdrant.HnswConfigDiff{
		Memory: qdrant.Memory_Cold.Enum(),
	},
	QuantizationConfig: qdrant.NewQuantizationScalar(
		&qdrant.ScalarQuantization{
			Type:   qdrant.QuantizationType_Int8,
			Memory: qdrant.Memory_Pinned.Enum(),
		},
	),
	Payload: &qdrant.PayloadStorageParams{
		Memory: qdrant.Memory_Cached.Enum(),
	},
})
```

## Optimizing for Disk-Based Retrieval

When structures are in the `cold` tier, retrieval may involve reading from disk. Use these techniques to reduce search latency despite the extra disk I/O.

### Quantization

[Quantization](https://qdrant.tech/documentation/manage-data/quantization/) compresses vectors into a smaller representation. The quantized copy fits comfortably in RAM even when the original vectors are `cold`. This enables Qdrant to score most candidates against the quantized copy and only read the original vectors from disk to rescore the top results. Quantization cuts down on how much data needs to come from disk during search, at the cost of the small accuracy loss it introduces.

Keep the quantized vectors in RAM by setting `memory: "pinned"` in the `quantization_config`. Without pinning, the quantized copy may be evicted under memory pressure, forcing Qdrant to read both the quantized and original vectors from disk.

If the accuracy loss is acceptable, you can disable rescoring against the original vectors by setting `rescore: false` in a query's search parameters. This avoids any disk reads during search, and the memory tier of the original vectors no longer affects search latency. `rescore` is a per-query parameter, so you can keep it on for the queries that need the accuracy:

**Http**

```http
POST /collections/{collection_name}/points/query
{
    "query": [0.2, 0.1, 0.9, 0.7],
    "params": {
        "quantization": {
            "rescore": false
        }
    },
    "limit": 10
}
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.query_points(
    collection_name="{collection_name}",
    query=[0.2, 0.1, 0.9, 0.7],
    search_params=models.SearchParams(
        quantization=models.QuantizationSearchParams(rescore=False)
    ),
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.query("{collection_name}", {
    query: [0.2, 0.1, 0.9, 0.7],
    params: {
        quantization: {
            rescore: false,
        },
    },
});
```

**Rust**

```rust
use qdrant_client::qdrant::{
    QuantizationSearchParamsBuilder, QueryPointsBuilder, SearchParamsBuilder,
};
use qdrant_client::Qdrant;

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .query(
        QueryPointsBuilder::new("{collection_name}")
            .query(vec![0.2, 0.1, 0.9, 0.7])
            .limit(3)
            .params(
                SearchParamsBuilder::default()
                    .quantization(QuantizationSearchParamsBuilder::default().rescore(false)),
            ),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.QueryFactory.nearest;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.QuantizationSearchParams;
import io.qdrant.client.grpc.Points.QueryPoints;
import io.qdrant.client.grpc.Points.SearchParams;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client.queryAsync(
        QueryPoints.newBuilder()
                .setCollectionName("{collection_name}")
                .setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
                .setParams(
                        SearchParams.newBuilder()
                                .setQuantization(
                                        QuantizationSearchParams.newBuilder().setRescore(false).build())
                                .build())
                .setLimit(3)
                .build())
        .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.QueryAsync(
	collectionName: "{collection_name}",
	query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
	searchParams: new SearchParams
	{
		Quantization = new QuantizationSearchParams { Rescore = false }
	},
	limit: 3
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client, err := qdrant.NewClient(&qdrant.Config{
	Host: "localhost",
	Port: 6334,
})

client.Query(context.Background(), &qdrant.QueryPoints{
	CollectionName: "{collection_name}",
	Query:          qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
	Params: &qdrant.SearchParams{
		Quantization: &qdrant.QuantizationSearchParams{
			Rescore: qdrant.PtrOf(false),
		},
	},
})
```

### Async I/O

Async I/O lets Qdrant issue disk reads concurrently instead of one at a time, reducing how long a query waits on disk when structures are `cold`. This uses [io\_uring](https://qdrant.tech/articles/io_uring/), a Linux kernel interface for asynchronous I/O, and requires a kernel that supports it. Async I/O helps most for vector rescoring, where the original vectors are `cold` and quantization is enabled, since rescoring the top candidates against the on-disk originals is where sequential disk reads would otherwise add up. It also applies to payload storage, so it helps whenever a `cold` payload is read from disk.

#### `io_uring` Setting

*Available as of v1.19.0.*

Set `io_uring` to `auto` in the [storage configuration](https://qdrant.tech/documentation/ops-configuration/configuration/) to apply async I/O to any structure that's `cold`. You can enable it in the configuration file:

```yaml
storage:
  performance:
    io_uring: auto
```

or via an environment variable:

```bash
QDRANT__STORAGE__PERFORMANCE__IO_URING=auto
```

#### `async_scorer` Setting

*Available as of v1.3.0.*

An older setting that applies async I/O to vector rescoring only. Prefer `io_uring` unless you're on a version older than 1.19. You can enable it in the configuration file:

```yaml
storage:
  performance:
    async_scorer: true
```

or via an environment variable:

```bash
QDRANT__STORAGE__PERFORMANCE__ASYNC_SCORER=true
```

### Local NVMe/SSD Storage

On-disk retrieval benefits from fast, local storage. If you're self hosting Qdrant, use NVMe or SSD drives attached directly to the machine. Avoid network-attached storage. It is too slow for the sequential reads that vector search requires.

### Inline Storage

*Available as of v1.16.0*

Avoid putting the HNSW vector index in the `cold` tier. If you must store it on disk and use quantization, consider enabling [inline storage](https://qdrant.tech/documentation/ops-optimization/optimize/#inline-storage-in-hnsw-index). This reduces I/O operations at the cost of more disk usage.

Enabling inline storage can significantly increase the size of the HNSW index. Do not use inline storage if the HNSW index is in RAM ([`pinned` or `cached` tiers](https://qdrant.tech/documentation/ops-configuration/memory-tiers/)). To keep the index size to roughly 3–6 times the original float32 vectors, apply a quantization method [that compresses to at most 4 bits per dimension](https://qdrant.tech/documentation/manage-data/quantization/#how-to-choose-the-right-quantization-method), such as TurboQuant.

## Migrating

When migrating from a pre-1.19 version to a newer version, Qdrant doesn't automatically convert any [legacy settings](#legacy-settings) that control memory placement to the new `memory` setting. The legacy settings have only been deprecated, not removed, so your existing settings remain working. A pre-1.19 collection with legacy settings will continue to work on newer versions without having to change its configuration.

### Legacy Settings

Before version 1.19, memory placement was controlled by a different set of parameters. These parameters are deprecated. Use the following tables to map the new `memory` parameter to the legacy parameters.

#### Dense Vectors

The legacy parameter is `on_disk`.

| `memory` | Legacy value     |
| -------- | ---------------- |
| `cached` | `on_disk: false` |
| `cold`   | `on_disk: true`  |

#### HNSW Vector Index

The legacy parameter is `on_disk`, set in `hnsw_config`.

| `memory` | Legacy value         |
| -------- | -------------------- |
| `pinned` | No legacy equivalent |
| `cached` | `on_disk: false`     |
| `cold`   | `on_disk: true`      |

#### Quantized Vectors

The legacy parameter is `always_ram`. `always_ram: true` always resolves to `pinned`. Otherwise, quantized vectors inherit the original vectors' placement: `pinned` if the vectors are in RAM, `cold` if they're on disk.

| `memory` | Legacy value                                               |
| -------- | ---------------------------------------------------------- |
| `pinned` | `always_ram: true`, or inherited from the original vectors |
| `cached` | No legacy equivalent                                       |
| `cold`   | Inherited from the original vectors                        |

#### Sparse Vector Index

The legacy parameter is `on_disk`.

| `memory` | Legacy value         |
| -------- | -------------------- |
| `pinned` | `on_disk: false`     |
| `cached` | No legacy equivalent |
| `cold`   | `on_disk: true`      |

#### Payloads

The legacy parameter is `on_disk_payload`, set on the collection.

| `memory` | Legacy value             |
| -------- | ------------------------ |
| `cached` | `on_disk_payload: false` |
| `cold`   | `on_disk_payload: true`  |

#### Payload Indexes

The legacy parameter is `on_disk`, set on each field index.

| `memory` | Legacy value         |
| -------- | -------------------- |
| `pinned` | `on_disk: false`     |
| `cached` | No legacy equivalent |
| `cold`   | `on_disk: true`      |
