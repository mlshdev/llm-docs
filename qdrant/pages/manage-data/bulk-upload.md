> Pinned source for Qdrant master: [qdrant-landing/content/documentation/manage-data/bulk-upload.md](https://github.com/qdrant/landing_page/blob/3b58061329eedce2091c9dd380b8c47fcaa1cb64/qdrant-landing/content/documentation/manage-data/bulk-upload.md)
> Canonical documentation: https://qdrant.tech/documentation/manage-data/bulk-upload/

# Bulk Upload Vectors to a Qdrant Collection

Uploading a large dataset quickly can be a challenge, but Qdrant provides several strategies to help.

The bottleneck during data upload is usually on the client side, not the server.
This means that if you are uploading a large dataset, you should prefer a high-performance client library. We recommend using our [Rust client library](https://github.com/qdrant/rust-client) for this purpose, as it is the fastest client library available for Qdrant.

## Batch Your Uploads

[Upsert points in batches](https://qdrant.tech/documentation/manage-data/points/#upload-points) rather than one at a time. Each request to Qdrant carries overhead: network round-trip, Write-Ahead Log (WAL) write, and internal routing. When you upload points individually, that overhead impacts the throughput.

Aim for **64–256 points per batch**. Smaller batches under-utilize the network; larger batches can increase memory pressure on the server and raise the cost of retrying on failure. The optimal batch size depends on your data and cluster, so you may want to experiment with different sizes for best performance.

## Parallelize Across Multiple Threads

A single upload thread rarely saturates the server. Split your dataset across two to four concurrent threads, each sending its own stream of batches. This keeps Qdrant's internal write workers busy across shards and reduces total upload time.

If [your collection has multiple shards](#create-collections-with-multiple-shards), target one upload thread per shard as a starting point. Each shard has an independent WAL and update worker, so parallel streams map directly onto available write capacity.

> The Python client's `upload_points` method [handles batching and parallelization for you](https://qdrant.tech/documentation/manage-data/points/#python-client-optimizations). Pass an iterator of points and set `batch_size` and `parallel` to control throughput without managing batches manually. For other client libraries, you need to implement batching and parallelization yourself.

## Create Collections with Multiple Shards

In Qdrant, each collection is split into shards. By default, a collection has one shard, but you can specify more when creating the collection.
By creating multiple shards, you can parallelize the upload of a large dataset. From two to four shards per machine is a reasonable number.

**Http**

```http
PUT /collections/{collection_name}
{
    "vectors": {
      "size": 768,
      "distance": "Cosine"
    },
    "shard_number": 2
}
```

**Python**

```python
from qdrant_client import QdrantClient, models

client.create_collection(
    collection_name="{collection_name}",
    vectors_config=models.VectorParams(size=768, distance=models.Distance.COSINE),
    shard_number=2,
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

client.createCollection("{collection_name}", {
  vectors: {
    size: 768,
    distance: "Cosine",
  },
  shard_number: 2,
});
```

**Rust**

```rust
use qdrant_client::qdrant::{CreateCollectionBuilder, Distance, VectorParamsBuilder};
use qdrant_client::Qdrant;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .vectors_config(VectorParamsBuilder::new(768, Distance::Cosine))
            .shard_number(2),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.Distance;
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
                            .build())
                    .build())
            .setShardNumber(2)
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

await client.CreateCollectionAsync(
	collectionName: "{collection_name}",
	vectorsConfig: new VectorParams { Size = 768, Distance = Distance.Cosine },
	shardNumber: 2
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
	}),
	ShardNumber: qdrant.PtrOf(uint32(2)),
})
```

## Create Payload Indexes Before Ingesting Data

If your collection uses payload indexes, [create them](https://qdrant.tech/documentation/manage-data/indexing/#create-a-payload-index) before you start uploading points. Qdrant builds extra HNSW links for each payload index to optimize filtered vector search quality. If you add a payload index after the HNSW graph is already built, those links won't exist, and filtered search will fall back to slower query-time strategies until you [rebuild the graph](https://qdrant.tech/documentation/manage-data/indexing/#rebuild-the-hnsw-index), which is resource-intensive and can take a long time.

The correct order is:

1. Create the collection.
2. Create all payload indexes.
3. Upload your points.

Following this sequence means Qdrant builds the graph in a single pass, rather than having to rebuild it after the fact.

## Upload Directly to Disk

When the vectors you upload do not all fit in RAM, you likely want to move them to the
[`cold` memory tier](https://qdrant.tech/documentation/ops-configuration/memory-tiers/) directly.

During [collection
creation](https://qdrant.tech/documentation/manage-data/collections/#create-collection),
you can set the `memory` parameter to `cold` on a per-vector basis. This
will store vector data directly on disk at all times.

Using `memmap_threshold` is not recommended in this case. This requires
the [optimizer](https://qdrant.tech/documentation/ops-optimization/optimizer/) to constantly
transform segments to the `cold` tier. This process is
slower, and the optimizer can be a bottleneck when ingesting a large amount of
data.

For full configuration details, see [Configuring Memmap Storage](https://qdrant.tech/documentation/manage-data/storage/#configuring-memmap-storage).

## Mitigate Read-Write Contention

Bulk uploads push a continuous stream of writes through Qdrant's background [optimizer](https://qdrant.tech/documentation/ops-optimization/optimizer/): it must build HNSW indexes, merge segments, and apply quantization as new data arrives. If you are running search queries at the same time, the optimizer and your queries compete for the same CPU time, memory bandwidth, and I/O. This can raise query latency noticeably during ingestion.

If you need to keep serving searches while uploading, see [Read-Write Contention](https://qdrant.tech/documentation/ops-optimization/read-write-contention/) for a set of configuration changes that improve read latency under heavy write load.
