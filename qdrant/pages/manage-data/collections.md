> Pinned source for Qdrant master: [qdrant-landing/content/documentation/manage-data/collections.md](https://github.com/qdrant/landing_page/blob/4d8a8ceb08486decdbf0f0016772c7f120ea7d56/qdrant-landing/content/documentation/manage-data/collections.md)
> Canonical documentation: https://qdrant.tech/documentation/manage-data/collections/

# Collections

A collection is a named set of points (vectors with a payload) among which you can search. The vector of each point within the same collection must have the same dimensionality and be compared by a single metric. [Named vectors](#collection-with-multiple-vectors) can be used to have multiple vectors in a single point, each of which can have their own dimensionality and metric requirements.

Distance metrics are used to measure similarities among vectors.
The choice of metric depends on the way vectors obtaining and, in particular, on the method of neural network encoder training.

Qdrant supports these most popular types of metrics:

- Dot product: `Dot` - [\[wiki\]](https://en.wikipedia.org/wiki/Dot_product)
- Cosine similarity: `Cosine`  - [\[wiki\]](https://en.wikipedia.org/wiki/Cosine_similarity)
- Euclidean distance: `Euclid` - [\[wiki\]](https://en.wikipedia.org/wiki/Euclidean_distance)
- Manhattan distance: `Manhattan` - [\[wiki\]](https://en.wikipedia.org/wiki/Taxicab_geometry)

> **Note**
>
> For search efficiency, Cosine similarity is implemented as dot-product over normalized vectors. Vectors are automatically normalized during upload

In addition to metrics and vector size, each collection uses its own set of parameters that controls collection optimization, index construction, and vacuum.
These settings can be changed at any time by a corresponding request.

## Setting Up Multitenancy

**How many collections should you create?** In most cases, you should only use a single collection with payload-based partitioning. This approach is called [multitenancy](https://en.wikipedia.org/wiki/Multitenancy). It is efficient for most of users, but it requires additional configuration. [Learn how to set it up](https://qdrant.tech/documentation/manage-data/multitenancy/).

**When should you create multiple collections?** When you have a limited number of users and you need isolation. This approach is flexible, but it may be more costly, since creating numerous collections may result in resource overhead. Also, you need to ensure that they do not affect each other in any way, including performance-wise.

## Create a Collection

**Http**

```http
PUT /collections/{collection_name}
{
    "vectors": {
      "size": 300,
      "distance": "Cosine"
    }
}
```

**Bash**

```bash
curl -X PUT http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "vectors": {
      "size": 100,
      "distance": "Cosine"
    }
  }'
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    vectors_config=models.VectorParams(size=100, distance=models.Distance.COSINE),
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  vectors: { size: 100, distance: "Cosine" },
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{CreateCollectionBuilder, VectorParamsBuilder, Distance};

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .vectors_config(VectorParamsBuilder::new(100, Distance::Cosine)),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.Distance;
import io.qdrant.client.grpc.Collections.VectorParams;

QdrantClient client = new QdrantClient(
    QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client.createCollectionAsync("{collection_name}",
        VectorParams.newBuilder().setDistance(Distance.Cosine).setSize(100).build()).get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.CreateCollectionAsync(
	collectionName: "{collection_name}",
	vectorsConfig: new VectorParams { Size = 100, Distance = Distance.Cosine }
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

client.CreateCollection(context.Background(), &qdrant.CreateCollection{
	CollectionName: "{collection_name}",
	VectorsConfig: qdrant.NewVectorsConfig(&qdrant.VectorParams{
		Size:     100,
		Distance: qdrant.Distance_Cosine,
	}),
})
```

In addition to the required options, you can also specify custom values for the following collection options:

- `hnsw_config` - see [indexing](https://qdrant.tech/documentation/manage-data/indexing/#vector-index) for details.
- `wal_config` - Write-Ahead-Log related configuration. See more details about [WAL](https://qdrant.tech/documentation/manage-data/storage/#versioning).
- `optimizers_config` - see [optimizer](https://qdrant.tech/documentation/ops-optimization/optimizer/) for details.
- `shard_number` - which defines how many shards the collection should have. See [distributed deployment](https://qdrant.tech/documentation/scaling/distributed_deployment/#sharding) section for details.
- `payload.memory` - configures the [memory tier](https://qdrant.tech/documentation/ops-configuration/memory-tiers/) for payload storage.
- `quantization_config` - see [quantization](https://qdrant.tech/documentation/manage-data/quantization/#setting-up-quantization-in-qdrant) for details.
- `strict_mode_config` - see [strict mode](https://qdrant.tech/documentation/ops-configuration/administration/#strict-mode) for details.

Default parameters for the optional collection parameters are defined in [configuration file](https://github.com/qdrant/qdrant/blob/master/config/config.yaml).

See [schema definitions](https://api.qdrant.tech/api-reference/collections/create-collection) and a [configuration file](https://github.com/qdrant/qdrant/blob/master/config/config.yaml) for more information about collection and vector parameters.

*Available as of v1.2.0*

Qdrant always [stores vectors on disk](https://qdrant.tech/documentation/manage-data/storage/#vector-storage). You can configure a [memory tier](https://qdrant.tech/documentation/ops-configuration/memory-tiers/) for each vector to control how much of that data also lives in memory.

### Collection with Multiple Vectors

*Available as of v0.10.0*

It is possible to have multiple vectors per record.
This feature allows for multiple vector storages per collection.
To distinguish vectors in one record, they should have a unique [name](https://qdrant.tech/documentation/manage-data/vectors/#named-vectors).
Each named vector in this mode has its distance and size:

**Http**

```http
PUT /collections/{collection_name}
{
    "vectors": {
        "image": {
            "size": 4,
            "distance": "Dot"
        },
        "text": {
            "size": 8,
            "distance": "Cosine"
        }
    }
}
```

**Bash**

```bash
curl -X PUT http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "vectors": {
        "image": {
            "size": 4,
            "distance": "Dot"
        },
        "text": {
            "size": 8,
            "distance": "Cosine"
        }
      }
    }'
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    vectors_config={
        "image": models.VectorParams(size=4, distance=models.Distance.DOT),
        "text": models.VectorParams(size=8, distance=models.Distance.COSINE),
    },
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  vectors: {
    image: { size: 4, distance: "Dot" },
    text: { size: 8, distance: "Cosine" },
  },
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{
    CreateCollectionBuilder, Distance, VectorParamsBuilder, VectorsConfigBuilder,
};

let client = Qdrant::from_url("http://localhost:6334").build()?;

let mut vectors_config = VectorsConfigBuilder::default();
vectors_config
    .add_named_vector_params("image", VectorParamsBuilder::new(4, Distance::Dot).build());
vectors_config.add_named_vector_params(
    "text",
    VectorParamsBuilder::new(8, Distance::Cosine).build(),
);

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}").vectors_config(vectors_config),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.Distance;
import io.qdrant.client.grpc.Collections.VectorParams;
import java.util.Map;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .createCollectionAsync(
        "{collection_name}",
        Map.of(
            "image", VectorParams.newBuilder().setSize(4).setDistance(Distance.Dot).build(),
            "text",
                VectorParams.newBuilder().setSize(8).setDistance(Distance.Cosine).build()))
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.CreateCollectionAsync(
	collectionName: "{collection_name}",
	vectorsConfig: new VectorParamsMap
	{
		Map =
		{
			["image"] = new VectorParams { Size = 4, Distance = Distance.Dot },
			["text"] = new VectorParams { Size = 8, Distance = Distance.Cosine },
		}
	}
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

client.CreateCollection(context.Background(), &qdrant.CreateCollection{
	CollectionName: "{collection_name}",
	VectorsConfig: qdrant.NewVectorsConfigMap(
		map[string]*qdrant.VectorParams{
			"image": {
				Size:     4,
				Distance: qdrant.Distance_Dot,
			},
			"text": {
				Size:     8,
				Distance: qdrant.Distance_Cosine,
			},
		}),
})
```

For rare use cases, it is possible to create a collection without any vector storage.

*Available as of v1.1.1*

For each named vector you can optionally specify
[`hnsw_config`](https://qdrant.tech/documentation/manage-data/indexing/#vector-index) or
[`quantization_config`](https://qdrant.tech/documentation/manage-data/quantization/#setting-up-quantization-in-qdrant) to
deviate from the collection configuration. This can be useful to fine-tune
search performance on a vector level.

*Available as of v1.2.0*

Qdrant always [stores vectors on disk](https://qdrant.tech/documentation/manage-data/storage/#vector-storage). On a per-vector basis, you can configure a [memory tier](https://qdrant.tech/documentation/ops-configuration/memory-tiers/) to control how much of that data also lives in memory.

### Vector Datatypes

*Available as of v1.9.0*

By default, Qdrant stores each vector dimension as a 32-bit float. Memory and storage grow linearly with dimensionality, so for large vectors this adds up quickly. To reduce that cost, or to store vectors that are already lower precision, you can configure a different datatype: `float16` (half-precision), `uint8` (unsigned 8-bit integers), or `turbo4` (4 bits).

For example, to create a collection with `uint8` embeddings:

**Http**

```http
PUT /collections/{collection_name}
{
    "vectors": {
      "size": 1024,
      "distance": "Cosine",
      "datatype": "uint8"
    }
}
```

**Bash**

```bash
curl -X PUT http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "vectors": {
      "size": 1024,
      "distance": "Cosine",
      "datatype": "uint8"
    }
  }'
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    vectors_config=models.VectorParams(
        size=1024,
        distance=models.Distance.COSINE,
        datatype=models.Datatype.UINT8,
    ),
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  vectors: {
    image: { size: 1024, distance: "Cosine", datatype: "uint8" },
  },
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{
    CreateCollectionBuilder, Datatype, Distance, VectorParamsBuilder,
};

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}").vectors_config(
            VectorParamsBuilder::new(1024, Distance::Cosine).datatype(Datatype::Uint8),
        ),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.Datatype;
import io.qdrant.client.grpc.Collections.Distance;
import io.qdrant.client.grpc.Collections.VectorParams;

QdrantClient client = new QdrantClient(
    QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .createCollectionAsync("{collection_name}",
        VectorParams.newBuilder()
            .setSize(1024)
            .setDistance(Distance.Cosine)
            .setDatatype(Datatype.Uint8)
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.CreateCollectionAsync(
  collectionName: "{collection_name}",
  vectorsConfig: new VectorParams {
    Size = 1024, Distance = Distance.Cosine, Datatype = Datatype.Uint8
  }
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

client.CreateCollection(context.Background(), &qdrant.CreateCollection{
	CollectionName: "{collection_name}",
	VectorsConfig: qdrant.NewVectorsConfig(&qdrant.VectorParams{
		Size:     1024,
		Distance: qdrant.Distance_Cosine,
		Datatype: qdrant.Datatype_Uint8.Enum(),
	}),
})
```

See [Datatypes](https://qdrant.tech/documentation/manage-data/vectors/#datatypes) for the full set of options and their tradeoffs.

### Collection with Sparse Vectors

*Available as of v1.7.0*

Qdrant supports sparse vectors as a first-class citizen.

Sparse vectors are useful for text search, where each word is represented as a separate dimension.

Collections can contain sparse vectors as additional [named vectors](#collection-with-multiple-vectors) along side regular dense vectors in a single point.

Unlike dense vectors, sparse vectors must be named.
And additionally, sparse vectors and dense vectors must have different names within a collection.

**Http**

```http
PUT /collections/{collection_name}
{
    "sparse_vectors": {
        "text": { }
    }
}
```

**Bash**

```bash
curl -X PUT http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "sparse_vectors": {
        "text": { }
    }
  }'
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    vectors_config={},
    sparse_vectors_config={
        "text": models.SparseVectorParams(),
    },
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  sparse_vectors: {
    text: { },
  },
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{
    CreateCollectionBuilder, SparseVectorParamsBuilder, SparseVectorsConfigBuilder,
};

let client = Qdrant::from_url("http://localhost:6334").build()?;

let mut sparse_vector_config = SparseVectorsConfigBuilder::default();

sparse_vector_config.add_named_vector_params("text", SparseVectorParamsBuilder::default());

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .sparse_vectors_config(sparse_vector_config),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.SparseVectorConfig;
import io.qdrant.client.grpc.Collections.SparseVectorParams;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setSparseVectorsConfig(
                SparseVectorConfig.newBuilder()
                    .putMap("text", SparseVectorParams.getDefaultInstance()))
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.CreateCollectionAsync(
	collectionName: "{collection_name}",
	sparseVectorsConfig: ("text", new SparseVectorParams())
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

client.CreateCollection(context.Background(), &qdrant.CreateCollection{
	CollectionName: "{collection_name}",
	SparseVectorsConfig: qdrant.NewSparseVectorsConfig(
		map[string]*qdrant.SparseVectorParams{
			"text": {},
		}),
})
```

Outside of a unique name, there are no required configuration parameters for sparse vectors.

The distance function for sparse vectors is always `Dot` and does not need to be specified.

However, there are optional parameters to tune the underlying [sparse vector index](https://qdrant.tech/documentation/manage-data/indexing/#sparse-vector-index).

### Create Collection from Another Collection

To create a collection from another collection, use the [Migration Tool](https://github.com/qdrant/migration/). You can use it to either copy a collection within the same Qdrant instance or to copy a collection to another instance.

For example, to copy a collection from a local instance to a Qdrant Cloud instance, run the following command:

```bash
docker run --net=host --rm -it registry.cloud.qdrant.io/library/qdrant-migration qdrant \
    --source.url 'http://localhost:6334' \
    --source.collection 'source-collection' \
    --target.url 'https://example.cloud-region.cloud-provider.cloud.qdrant.io:6334' \
    --target.api-key 'qdrant-key' \
    --target.collection 'target-collection' \
    --migration.batch-size 64
```

## Check Collection Existence

*Available as of v1.8.0*

**Http**

```http
GET /collections/{collection_name}/exists
```

**Bash**

```bash
curl -X GET http://localhost:6333/collections/{collection_name}/exists
```

**Python**

```python
client.collection_exists(collection_name="{collection_name}")
```

**Typescript**

```typescript
client.collectionExists("{collection_name}");
```

**Rust**

```rust
client.collection_exists("{collection_name}").await?;
```

**Java**

```java
client.collectionExistsAsync("{collection_name}").get();
```

**Csharp**

```csharp
await client.CollectionExistsAsync("{collection_name}");
```

**Go**

```go
import "context"

client.CollectionExists(context.Background(), "my_collection")
```

## Delete Collection

**Http**

```http
DELETE /collections/{collection_name}
```

**Bash**

```bash
curl -X DELETE http://localhost:6333/collections/{collection_name}
```

**Python**

```python
client.delete_collection(collection_name="{collection_name}")
```

**Typescript**

```typescript
client.deleteCollection("{collection_name}");
```

**Rust**

```rust
client.delete_collection("{collection_name}").await?;
```

**Java**

```java
client.deleteCollectionAsync("{collection_name}").get();
```

**Csharp**

```csharp
await client.DeleteCollectionAsync("{collection_name}");
```

**Go**

```go
import "context"

client.DeleteCollection(context.Background(), "{collection_name}")
```

## Update Collection

After creating a collection, you can change its configuration, its vectors, and the configuration of its vectors.

### Update Collection Parameters

Dynamic parameter updates may be helpful, for example, for more efficient initial loading of vectors.
For example, you can disable indexing during the upload process, and enable it immediately after the upload is finished.
As a result, you will not waste extra computation resources on rebuilding the index.

The following command enables indexing for segments that have more than 10000 kB of vectors stored:

**Http**

```http
PATCH /collections/{collection_name}
{
    "optimizers_config": {
        "indexing_threshold": 10000
    }
}
```

**Bash**

```bash
curl -X PATCH http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "optimizers_config": {
        "indexing_threshold": 10000
    }
  }'
```

**Python**

```python
client.update_collection(
    collection_name="{collection_name}",
    optimizers_config=models.OptimizersConfigDiff(indexing_threshold=10000),
)
```

**Typescript**

```typescript
client.updateCollection("{collection_name}", {
  optimizers_config: {
    indexing_threshold: 10000,
  },
});
```

**Rust**

```rust
use qdrant_client::qdrant::{OptimizersConfigDiffBuilder, UpdateCollectionBuilder};

client
    .update_collection(
        UpdateCollectionBuilder::new("{collection_name}").optimizers_config(
            OptimizersConfigDiffBuilder::default().indexing_threshold(10000),
        ),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.grpc.Collections.OptimizersConfigDiff;
import io.qdrant.client.grpc.Collections.UpdateCollection;

client
    .updateCollectionAsync(
        UpdateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setOptimizersConfig(
                OptimizersConfigDiff.newBuilder().setIndexingThreshold(10000).build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

await client.UpdateCollectionAsync(
	collectionName: "{collection_name}",
	optimizersConfig: new OptimizersConfigDiff { IndexingThreshold = 10000 }
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client.UpdateCollection(context.Background(), &qdrant.UpdateCollection{
	CollectionName: "{collection_name}",
	OptimizersConfig: &qdrant.OptimizersConfigDiff{
		IndexingThreshold: qdrant.PtrOf(uint64(10000)),
	},
})
```

The following parameters can be updated:

- `optimizers_config` - see [optimizer](https://qdrant.tech/documentation/ops-optimization/optimizer/) for details.
- `hnsw_config` - see [indexing](https://qdrant.tech/documentation/manage-data/indexing/#vector-index) for details.
- `quantization_config` - see [quantization](https://qdrant.tech/documentation/manage-data/quantization/#setting-up-quantization-in-qdrant) for details.
- `vectors_config` - vector-specific configuration, including individual `hnsw_config`, `quantization_config`, and [`memory`](https://qdrant.tech/documentation/ops-configuration/memory-tiers/) tier settings.
- `params` - other collection parameters, including `read_fan_out_delay_ms`, `write_consistency_factor`, and the payload's [`memory`](https://qdrant.tech/documentation/ops-configuration/memory-tiers/) tier.
- `strict_mode_config` - see [strict mode](https://qdrant.tech/documentation/ops-configuration/administration/#strict-mode) for details.

Full API specification is available in [schema definitions](https://api.qdrant.tech/api-reference/collections/update-collection).

Calls to this endpoint may be blocking as it waits for existing optimizers to
finish. We recommended against using this in a production database as it may
introduce huge overhead due to the rebuilding of the index.

### Update Vector Schema

*Available as of v1.18.0*

Named vectors can be added to or removed from an existing collection without having to recreate the collection. This is useful for [embedding model migration](https://qdrant.tech/documentation/tutorials-operations/embedding-model-migration/): you can add a new vector for the new model, re-embed points in the background, and then remove the old vector when you're ready.

> **Note**
>
> These are schema-level operations that add or remove vector definitions from a collection's schema. To add/remove vector values from specific points, use the <a href="https://qdrant.tech/documentation/manage-data/points/#update-vectors">update</a> and <a href="https://qdrant.tech/documentation/manage-data/points/#delete-vectors">delete</a> vectors operations.

To add a new dense named vector to an existing collection:

**Http**

```http
PUT /collections/{collection_name}/vectors/{vector_name}
{
    "dense": {
        "size": 256,
        "distance": "Cosine"
    }
}
```

**Python**

```python
client.create_vector_name(
    collection_name="{collection_name}",
    vector_name="{vector_name}",
    vector_name_config=models.DenseVectorNameConfig(
        dense=models.DenseVectorConfig(
            size=256,
            distance=models.Distance.COSINE,
        ),
    ),
)
```

**Typescript**

```typescript
client.createVectorName("{collection_name}", "{vector_name}", {
  dense: {
    size: 256,
    distance: "Cosine",
  },
});
```

**Rust**

```rust
use qdrant_client::qdrant::{
    CreateVectorNameRequestBuilder, DenseVectorCreationConfigBuilder, Distance,
};
use qdrant_client::Qdrant;

client
    .create_vector_name(
        CreateVectorNameRequestBuilder::new(
            "{collection_name}",
            "{vector_name}",
            DenseVectorCreationConfigBuilder::new(256, Distance::Cosine),
        ),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.Distance;
import io.qdrant.client.grpc.Points.CreateVectorNameRequest;
import io.qdrant.client.grpc.Points.DenseVectorCreationConfig;

client
    .createVectorNameAsync(
        CreateVectorNameRequest.newBuilder()
            .setCollectionName("{collection_name}")
            .setVectorName("{vector_name}")
            .setDenseConfig(
                DenseVectorCreationConfig.newBuilder()
                    .setSize(256)
                    .setDistance(Distance.Cosine)
                    .build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

await client.CreateVectorNameAsync(new()
{
	CollectionName = "{collection_name}",
	VectorName = "{vector_name}",
	DenseConfig = new() { Size = 256, Distance = Distance.Cosine }
});
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client.CreateVectorName(context.Background(), &qdrant.CreateVectorNameRequest{
	CollectionName: "{collection_name}",
	VectorName:     "{vector_name}",
	VectorConfig: &qdrant.CreateVectorNameRequest_DenseConfig{
		DenseConfig: &qdrant.DenseVectorCreationConfig{
			Size:     256,
			Distance: qdrant.Distance_Cosine,
		},
	},
})
```

To add a new sparse named vector to an existing collection:

**Http**

```http
PUT /collections/{collection_name}/vectors/{vector_name}
{
    "sparse": {
        "modifier": "Idf"
    }
}
```

**Python**

```python
client.create_vector_name(
    collection_name="{collection_name}",
    vector_name="{vector_name}",
    vector_name_config=models.SparseVectorNameConfig(
        sparse=models.SparseVectorConfig(
            modifier=models.Modifier.IDF,
        ),
    ),
)
```

**Typescript**

```typescript
client.createVectorName("{collection_name}", "{vector_name}", {
  sparse: {
    modifier: "idf",
  },
});
```

**Rust**

```rust
use qdrant_client::qdrant::{
    CreateVectorNameRequestBuilder, Modifier, SparseVectorCreationConfigBuilder,
};
use qdrant_client::Qdrant;

client
    .create_vector_name(
        CreateVectorNameRequestBuilder::new(
            "{collection_name}",
            "{vector_name}",
            SparseVectorCreationConfigBuilder::new().modifier(Modifier::Idf),
        ),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.Modifier;
import io.qdrant.client.grpc.Points.CreateVectorNameRequest;
import io.qdrant.client.grpc.Points.SparseVectorCreationConfig;

client
    .createVectorNameAsync(
        CreateVectorNameRequest.newBuilder()
            .setCollectionName("{collection_name}")
            .setVectorName("{vector_name}")
            .setSparseConfig(
                SparseVectorCreationConfig.newBuilder()
                    .setModifier(Modifier.Idf)
                    .build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

await client.CreateVectorNameAsync(new()
{
	CollectionName = "{collection_name}",
	VectorName = "{vector_name}",
	SparseConfig = new() { Modifier = Modifier.Idf }
});
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client.CreateVectorName(context.Background(), &qdrant.CreateVectorNameRequest{
	CollectionName: "{collection_name}",
	VectorName:     "{vector_name}",
	VectorConfig: &qdrant.CreateVectorNameRequest_SparseConfig{
		SparseConfig: &qdrant.SparseVectorCreationConfig{
			Modifier: qdrant.Modifier_Idf.Enum(),
		},
	},
})
```

The request body only accepts properties that define the vector space (size and distance for dense vectors). Quantization, storage type, and index configuration can be set afterward using the [update collection parameters](https://qdrant.tech/documentation/manage-data/collections/#update-collection-parameters) or [update vector parameters](https://qdrant.tech/documentation/manage-data/collections/#update-vector-parameters) APIs.

Existing points will not have values for the newly added vector until they are upserted again. The new vector can be queried immediately, but will return no results until it is populated.

To delete a named vector from an existing collection:

**Http**

```http
DELETE /collections/{collection_name}/vectors/{vector_name}
```

**Python**

```python
client.delete_vector_name(
    collection_name="{collection_name}",
    vector_name="{vector_name}",
)
```

**Typescript**

```typescript
client.deleteVectorName("{collection_name}", "{vector_name}");
```

**Rust**

```rust
use qdrant_client::qdrant::DeleteVectorNameRequestBuilder;
use qdrant_client::Qdrant;

client
    .delete_vector_name(DeleteVectorNameRequestBuilder::new(
        "{collection_name}",
        "{vector_name}",
    ))
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.DeleteVectorNameRequest;

client
    .deleteVectorNameAsync(
        DeleteVectorNameRequest.newBuilder()
            .setCollectionName("{collection_name}")
            .setVectorName("{vector_name}")
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

await client.DeleteVectorNameAsync(new()
{
	CollectionName = "{collection_name}",
	VectorName = "{vector_name}"
});
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client.DeleteVectorName(context.Background(), &qdrant.DeleteVectorNameRequest{
	CollectionName: "{collection_name}",
	VectorName:     "{vector_name}",
})
```

Deleting a named vector removes its schema and all associated data. Existing points are otherwise unaffected.

### Update Vector Parameters

*Available as of v1.4.0*

> **Note**
>
> To update vector parameters using the collection update API, you must always specify a vector name. If your collection does not have named vectors, use an empty (<code>""</code>) name.

Qdrant 1.4 adds support for updating more collection parameters at runtime. HNSW
index, quantization and disk configurations can now be changed without
recreating a collection. Segments (with index and quantized data) will
automatically be rebuilt in the background to match updated parameters.

To move vector data to the `cold` [memory tier](https://qdrant.tech/documentation/ops-configuration/memory-tiers/) for a collection that **does not have** named vectors,
use `""` as name:

**Http**

```http
PATCH /collections/{collection_name}
{
    "vectors": {
        "": {
            "memory": "cold"
        }
    }
}
```

**Bash**

```bash
curl -X PATCH http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "vectors": {
        "": {
            "memory": "cold"
      }
    }
  }'
```

To move vector data to the `cold` memory tier for a collection that **does have** named vectors:

Note: To create a vector name, follow the procedure from our [Points](https://qdrant.tech/documentation/manage-data/points/#create-vector-name).

**Http**

```http
PATCH /collections/{collection_name}
{
    "vectors": {
        "my_vector": {
            "memory": "cold"
        }
    }
}
```

**Bash**

```bash
curl -X PATCH http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "vectors": {
        "my_vector": {
           "memory": "cold"
      }
    }
  }'
```

In the following example the HNSW index and quantization parameters are updated,
both for the whole collection, and for `my_vector` specifically:

**Http**

```http
PATCH /collections/{collection_name}
{
    "vectors": {
        "my_vector": {
            "hnsw_config": {
                "m": 32,
                "ef_construct": 123
            },
            "quantization_config": {
                "product": {
                    "compression": "x32",
                    "memory": "pinned"
                }
            },
            "memory": "cold"
        }
    },
    "hnsw_config": {
        "ef_construct": 123
    },
    "quantization_config": {
        "scalar": {
            "type": "int8",
            "quantile": 0.8,
            "memory": "cached"
        }
    }
}
```

**Bash**

```bash
curl -X PATCH http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "vectors": {
        "my_vector": {
            "hnsw_config": {
                "m": 32,
                "ef_construct": 123
            },
            "quantization_config": {
                "product": {
                    "compression": "x32",
                    "memory": "pinned"
                }
            },
            "memory": "cold"
        }
    },
    "hnsw_config": {
        "ef_construct": 123
    },
    "quantization_config": {
        "scalar": {
            "type": "int8",
            "quantile": 0.8,
            "memory": "cached"
        }
    }
}'
```

**Python**

```python
client.update_collection(
    collection_name="{collection_name}",
    vectors_config={
        "my_vector": models.VectorParamsDiff(
            hnsw_config=models.HnswConfigDiff(
                m=32,
                ef_construct=123,
            ),
            quantization_config=models.ProductQuantization(
                product=models.ProductQuantizationConfig(
                    compression=models.CompressionRatio.X32,
                    memory=models.Memory.PINNED,
                ),
            ),
            memory=models.Memory.COLD,
        ),
    },
    hnsw_config=models.HnswConfigDiff(
        ef_construct=123,
    ),
    quantization_config=models.ScalarQuantization(
        scalar=models.ScalarQuantizationConfig(
            type=models.ScalarType.INT8,
            quantile=0.8,
            memory=models.Memory.CACHED,
        ),
    ),
)
```

**Typescript**

```typescript
client.updateCollection("{collection_name}", {
  vectors: {
    my_vector: {
      hnsw_config: {
        m: 32,
        ef_construct: 123,
      },
      quantization_config: {
        product: {
          compression: "x32",
          memory: "pinned",
        },
      },
      memory: "cold",
    },
  },
  hnsw_config: {
    ef_construct: 123,
  },
  quantization_config: {
    scalar: {
      type: "int8",
      quantile: 0.8,
      memory: "cached",
    },
  },
});
```

**Rust**

```rust
use std::collections::HashMap;

use qdrant_client::qdrant::{
    quantization_config_diff::Quantization, vectors_config_diff::Config, HnswConfigDiffBuilder,
    Memory, QuantizationType, ScalarQuantizationBuilder, UpdateCollectionBuilder,
    VectorParamsDiffBuilder, VectorParamsDiffMap,
};

client
    .update_collection(
        UpdateCollectionBuilder::new("{collection_name}")
            .hnsw_config(HnswConfigDiffBuilder::default().ef_construct(123))
            .vectors_config(Config::ParamsMap(VectorParamsDiffMap {
                map: HashMap::from([(
                    ("my_vector".into()),
                    VectorParamsDiffBuilder::default()
                        .hnsw_config(HnswConfigDiffBuilder::default().m(32).ef_construct(123))
                        .build(),
                )]),
            }))
            .quantization_config(Quantization::Scalar(
                ScalarQuantizationBuilder::default()
                    .r#type(QuantizationType::Int8.into())
                    .quantile(0.8)
                    .memory(Memory::Cached)
                    .build(),
            )),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.grpc.Collections.HnswConfigDiff;
import io.qdrant.client.grpc.Collections.Memory;
import io.qdrant.client.grpc.Collections.QuantizationConfigDiff;
import io.qdrant.client.grpc.Collections.QuantizationType;
import io.qdrant.client.grpc.Collections.ScalarQuantization;
import io.qdrant.client.grpc.Collections.UpdateCollection;
import io.qdrant.client.grpc.Collections.VectorParamsDiff;
import io.qdrant.client.grpc.Collections.VectorParamsDiffMap;
import io.qdrant.client.grpc.Collections.VectorsConfigDiff;

client
    .updateCollectionAsync(
        UpdateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setHnswConfig(HnswConfigDiff.newBuilder().setEfConstruct(123).build())
            .setVectorsConfig(
                VectorsConfigDiff.newBuilder()
                    .setParamsMap(
                        VectorParamsDiffMap.newBuilder()
                            .putMap(
                                "my_vector",
                                VectorParamsDiff.newBuilder()
                                    .setHnswConfig(
                                        HnswConfigDiff.newBuilder()
                                            .setM(3)
                                            .setEfConstruct(123)
                                            .build())
                                    .build())))
            .setQuantizationConfig(
                QuantizationConfigDiff.newBuilder()
                    .setScalar(
                        ScalarQuantization.newBuilder()
                            .setType(QuantizationType.Int8)
                            .setQuantile(0.8f)
                            .setMemory(Memory.Cached)
                            .build()))
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.UpdateCollectionAsync(
	collectionName: "{collection_name}",
	hnswConfig: new HnswConfigDiff { EfConstruct = 123 },
	vectorsConfig: new VectorParamsDiffMap
	{
		Map =
		{
			{
				"my_vector",
				new VectorParamsDiff
				{
					HnswConfig = new HnswConfigDiff { M = 3, EfConstruct = 123 }
				}
			}
		}
	},
	quantizationConfig: new QuantizationConfigDiff
	{
		Scalar = new ScalarQuantization
		{
			Type = QuantizationType.Int8,
			Quantile = 0.8f,
			Memory = Memory.Cached
		}
	}
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

client.UpdateCollection(context.Background(), &qdrant.UpdateCollection{
	CollectionName: "{collection_name}",
	VectorsConfig: qdrant.NewVectorsConfigDiffMap(
		map[string]*qdrant.VectorParamsDiff{
			"my_vector": {
				HnswConfig: &qdrant.HnswConfigDiff{
					M:           qdrant.PtrOf(uint64(3)),
					EfConstruct: qdrant.PtrOf(uint64(123)),
				},
			},
		}),
	QuantizationConfig: qdrant.NewQuantizationDiffScalar(
		&qdrant.ScalarQuantization{
			Type:     qdrant.QuantizationType_Int8,
			Quantile: qdrant.PtrOf(float32(0.8)),
			Memory:   qdrant.Memory_Cached.Enum(),
		}),
})
```

## Collection Info

Qdrant allows determining the configuration parameters of an existing collection to better understand how the points are
distributed and indexed.

**Http**

```http
GET /collections/{collection_name}
```

**Bash**

```bash
curl -X GET http://localhost:6333/collections/{collection_name}
```

**Python**

```python
client.get_collection(collection_name="{collection_name}")
```

**Typescript**

```typescript
client.getCollection("{collection_name}");
```

**Rust**

```rust
client.collection_info("{collection_name}").await?;
```

**Java**

```java
client.getCollectionInfoAsync("{collection_name}").get();
```

**Csharp**

```csharp
await client.GetCollectionInfoAsync("{collection_name}");
```

**Go**

```go
import "context"

client.GetCollectionInfo(context.Background(), "{collection_name}")
```

**Expected result**

```json
{
    "result": {
        "status": "green",
        "optimizer_status": "ok",
        "indexed_vectors_count": 1024232,
        "points_count": 1068786,
        "segments_count": 31,
        "config": {
            "params": {
                "vectors": {
                    "size": 384,
                    "distance": "Cosine"
                },
                "shard_number": 1,
                "replication_factor": 1,
                "write_consistency_factor": 1,
                "on_disk_payload": false
            },
            "hnsw_config": {
                "m": 16,
                "ef_construct": 100,
                "full_scan_threshold": 10000,
                "max_indexing_threads": 0
            },
            "optimizer_config": {
                "deleted_threshold": 0.2,
                "vacuum_min_vector_number": 1000,
                "default_segment_number": 0,
                "max_segment_size": null,
                "memmap_threshold": null,
                "indexing_threshold": 20000,
                "flush_interval_sec": 5,
                "max_optimization_threads": 1
            },
            "wal_config": {
                "wal_capacity_mb": 32,
                "wal_segments_ahead": 0
            }
        },
        "payload_schema": {}
    },
    "status": "ok",
    "time": 0.00010143
}
```

If you insert the vectors into the collection, the `status` field may become
`yellow` whilst it is optimizing. It will become `green` once all the points are
successfully processed.

The following color statuses are possible:

- 🟢 `green`: collection is ready
- 🟡 `yellow`: collection is optimizing
- ⚫ `grey`: collection is pending optimization ([help](#grey-collection-status))
- 🔴 `red`: an error occurred which the engine could not recover from

### Grey Collection Status

*Available as of v1.9.0*

A collection may have the grey ⚫ status or show "optimizations pending,
awaiting update operation" as optimization status. This state is normally caused
by restarting a Qdrant instance while optimizations were ongoing.

It means the collection has optimizations pending, but they are paused. You must
send any update operation to trigger and start the optimizations again.

For example:

**Http**

```http
PATCH /collections/{collection_name}
{
    "optimizers_config": {}
}
```

**Bash**

```bash
curl -X PATCH http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "optimizers_config": {}
  }'
```

**Python**

```python
client.update_collection(
    collection_name="{collection_name}",
    optimizer_config=models.OptimizersConfigDiff(),
)
```

**Typescript**

```typescript
client.updateCollection("{collection_name}", {
  optimizers_config: {},
});
```

**Rust**

```rust
use qdrant_client::qdrant::{OptimizersConfigDiffBuilder, UpdateCollectionBuilder};

client
    .update_collection(
        UpdateCollectionBuilder::new("{collection_name}")
            .optimizers_config(OptimizersConfigDiffBuilder::default()),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.grpc.Collections.OptimizersConfigDiff;
import io.qdrant.client.grpc.Collections.UpdateCollection;

client.updateCollectionAsync(
    UpdateCollection.newBuilder()
        .setCollectionName("{collection_name}")
        .setOptimizersConfig(
            OptimizersConfigDiff.getDefaultInstance())
        .build());
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.UpdateCollectionAsync(
	collectionName: "{collection_name}",
	optimizersConfig: new OptimizersConfigDiff { }
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

client.UpdateCollection(context.Background(), &qdrant.UpdateCollection{
	CollectionName:   "{collection_name}",
	OptimizersConfig: &qdrant.OptimizersConfigDiff{},
})
```

Alternatively you may use the `Trigger Optimizers` button in the [Qdrant Web UI](https://qdrant.tech/documentation/web-ui/).
It is shown next to the grey collection status on the collection info page.

### Approximate Point and Vector Counts

You may be interested in the count attributes:

- `points_count` - total number of objects (vectors and their payloads) stored in the collection
- `indexed_vectors_count` - total number of vectors stored in the HNSW or sparse index. Qdrant does not store all the vectors in the index, but only if an index segment might be created for a given configuration.

The above counts are not exact, but should be considered approximate. Depending
on how you use Qdrant these may give very different numbers than what you may
expect. It's therefore important **not** to rely on them.

More specifically, these numbers represent the count of points and vectors in
Qdrant's internal storage. Internally, Qdrant may temporarily duplicate points
as part of automatic optimizations. It may keep changed or deleted points for a
bit. And it may delay indexing of new points. All of that is for optimization
reasons.

Updates you do are therefore not directly reflected in these numbers. If you see
a wildly different count of points, it will likely resolve itself once a new
round of automatic optimizations is completed.

To clarify: these numbers don't represent the exact amount of points or vectors
you have inserted, nor does it represent the exact number of distinguishable
points or vectors you can query. If you want to know exact counts, refer to the
[count API](https://qdrant.tech/documentation/manage-data/points/#counting-points).

*Note: these numbers may be removed in a future version of Qdrant.*

### Indexing Vectors in HNSW

In some cases, you might be surprised the value of `indexed_vectors_count` is lower than you expected. This is an intended behaviour and
depends on the [optimizer configuration](https://qdrant.tech/documentation/ops-optimization/optimizer/). A new index segment is built if the size of non-indexed vectors is higher than the
value of `indexing_threshold`(in kB).  If your collection is very small or the dimensionality of the vectors is low, there might be no HNSW segment
created and `indexed_vectors_count` might be equal to `0`.

It is possible to reduce the `indexing_threshold` for an existing collection by [updating collection parameters](#update-collection-parameters).

### Collection Metadata

*Available as of v1.16.0*

For convenience and better data organization, Qdrant allows attaching custom metadata to collections in the form of key-value pairs.
Adding metadata is treated as a part of collection configuration and synchronized across all nodes in a cluster with consensus protocol.

Collection metadata can be specified during collection creation:

**Http**

```http
PUT /collections/{collection_name}
{
    "vectors": {
      "size": 300,
      "distance": "Cosine"
    },
    "metadata": {
      "my-metadata-field": "value-1",
      "another-field": 123
    }
}
```

**Bash**

```bash
curl -X PUT http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "vectors": {
      "size": 300,
      "distance": "Cosine"
    },
    "metadata": {
      "my-metadata-field": "value-1",
      "another-field": 123
    }
  }'
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    metadata={
        "my-metadata-field": "value-1",
        "another-field": 123
    },
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  vectors: { size: 100, distance: "Cosine" },
  metadata: {
    "my-metadata-field": "value-1",
    "another-field": 123
  }
});
```

**Rust**

```rust
use qdrant_client::qdrant::{CreateCollectionBuilder, Distance, VectorParamsBuilder};
use qdrant_client::Qdrant;
use serde_json::{json, Value};
use std::collections::HashMap;

let client = Qdrant::from_url("http://localhost:6334").build()?;

let mut metadata: HashMap<String, Value> = HashMap::new();
metadata.insert("my-metadata-field".to_string(), json!("value-1"));
metadata.insert("another-field".to_string(), json!(123));

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .vectors_config(VectorParamsBuilder::new(100, Distance::Cosine))
            .metadata(metadata),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.ValueFactory.value;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.Distance;
import io.qdrant.client.grpc.Collections.VectorParams;
import io.qdrant.client.grpc.Collections.VectorsConfig;
import java.util.Map;

QdrantClient client = new QdrantClient(
    QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setVectorsConfig(
                VectorsConfig.newBuilder()
                    .setParams(
                        VectorParams.newBuilder()
                            .setDistance(Distance.Cosine)
                            .setSize(100)
                            .build())
                    .build())
            .putAllMetadata(
                Map.of(
                    "my-metadata-field", value("value-1"),
                    "another-field", value(123)))
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.CreateCollectionAsync(
	collectionName: "{collection_name}",
	vectorsConfig: new VectorParams { Size = 100, Distance = Distance.Cosine },
	metadata: new()
	{
		["my-metadata-field"] = "value-1",
		["another-field"] = 123
	}
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

client.CreateCollection(context.Background(), &qdrant.CreateCollection{
	CollectionName: "{collection_name}",
	VectorsConfig: qdrant.NewVectorsConfig(&qdrant.VectorParams{
		Size:     100,
		Distance: qdrant.Distance_Cosine,
	}),
	Metadata: qdrant.NewValueMap(map[string]any{
		"my-metadata-field": "value-1",
		"another-field":     123,
	}),
})
```

as well as updated later:

**Http**

```http
PATCH /collections/{collection_name}
{
    "metadata": {
        "my-metadata-field": {
            "key-a": "value-a",
            "key-b": 42
        }
    }
}
```

**Bash**

```bash
curl -X PATCH http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "metadata": {
      "my-metadata-field": {
        "key-a": "value-a",
        "key-b": 42    
      }
    }
  }'
```

**Python**

```python
client.update_collection(
    collection_name="{collection_name}",
    metadata={
        "my-metadata-field": {
            "key-a": "value-a",
            "key-b": 42
        }
    },
)
```

**Typescript**

```typescript
client.updateCollection("{collection_name}", {
  metadata: {
    "my-metadata-field": {
      "key-a": "value-a",
      "key-b": 42
    }
  },
});
```

**Rust**

```rust
use qdrant_client::qdrant::{UpdateCollectionBuilder};
use qdrant_client::Qdrant;
use serde_json::{json, Value};
use std::collections::HashMap;

let client = Qdrant::from_url("http://localhost:6334").build()?;

let mut metadata: HashMap<String, Value> = HashMap::new();
metadata.insert("my-metadata-field".to_string(), json!({
    "key-a": "value-a",
    "key-b": 42
}));

client
    .update_collection(
        UpdateCollectionBuilder::new("{collection_name}").metadata(metadata),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.ValueFactory.value;

import io.qdrant.client.grpc.Collections.OptimizersConfigDiff;
import io.qdrant.client.grpc.Collections.UpdateCollection;
import java.util.Map;

client
    .updateCollectionAsync(
        UpdateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setOptimizersConfig(
                OptimizersConfigDiff.newBuilder().setIndexingThreshold(10000).build())
            .putAllMetadata(
                Map.of(
                    "my-metadata-field",
                    value(
                        Map.of(
                            "key-a", value("value-a"),
                            "key-b", value(42)))))
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.UpdateCollectionAsync(
	collectionName: "{collection_name}",
	optimizersConfig: new OptimizersConfigDiff { IndexingThreshold = 10000 },
	metadata: new()
	{
		["my-metadata-field"] = new Dictionary<string, Value>
		{
			["key-a"] = "value-a",
			["key-b"] = 42
		},
	}
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

client.UpdateCollection(context.Background(), &qdrant.UpdateCollection{
	CollectionName: "{collection_name}",
	OptimizersConfig: &qdrant.OptimizersConfigDiff{
		IndexingThreshold: qdrant.PtrOf(uint64(10000)),
	},
	Metadata: qdrant.NewValueMap(map[string]any{
		"my-metadata-field": map[string]any{
			"key-a": "value-a",
			"key-b": 42,
		},
	}),
})
```

Note, that update operation only modifies the specified metadata fields, leaving other fields unchanged.

When specified, metadata is returned as part of collection info:

```json
{
    "result": {
        "config": {
            "metadata": {
                "my-metadata-field": {
                    "key-a": "value-a",
                    "key-b": 42
                },
                "another-field": 123
            }
        }
    }
}
```

## Collection Aliases

In a production environment, it is sometimes necessary to switch different versions of vectors seamlessly.
For example, when upgrading to a new version of the neural network.

There is no way to stop the service and rebuild the collection with new vectors in these situations.
Aliases are additional names for existing collections.
All queries to the collection can also be done identically, using an alias instead of the collection name.

Thus, it is possible to build a second collection in the background and then switch alias from the old to the new collection.
Since all changes of aliases happen atomically, no concurrent requests will be affected during the switch.

### Create Alias

**Http**

```http
POST /collections/aliases
{
    "actions": [
        {
            "create_alias": {
                "collection_name": "example_collection",
                "alias_name": "production_collection"
            }
        }
    ]
}
```

**Bash**

```bash
curl -X POST http://localhost:6333/collections/aliases \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "actions": [
        {
            "create_alias": {
                "collection_name": "example_collection",
                "alias_name": "production_collection"
            }
        }
    ]
}'
```

**Python**

```python
client.update_collection_aliases(
    change_aliases_operations=[
        models.CreateAliasOperation(
            create_alias=models.CreateAlias(
                collection_name="example_collection", alias_name="production_collection"
            )
        )
    ]
)
```

**Typescript**

```typescript
client.updateCollectionAliases({
  actions: [
    {
      create_alias: {
        collection_name: "example_collection",
        alias_name: "production_collection",
      },
    },
  ],
});
```

**Rust**

```rust
use qdrant_client::qdrant::CreateAliasBuilder;

client
    .create_alias(CreateAliasBuilder::new(
        "example_collection",
        "production_collection",
    ))
    .await?;
```

**Java**

```java
client.createAliasAsync("production_collection", "example_collection").get();
```

**Csharp**

```csharp
await client.CreateAliasAsync(aliasName: "production_collection", collectionName: "example_collection");
```

**Go**

```go
import "context"

client.CreateAlias(context.Background(), "production_collection", "example_collection")
```

### Remove Alias

**Http**

```http
POST /collections/aliases
{
    "actions": [
        {
            "delete_alias": {
                "alias_name": "production_collection"
            }
        }
    ]
}
```

**Bash**

```bash
curl -X POST http://localhost:6333/collections/aliases \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "actions": [
        {
            "delete_alias": {
                "alias_name": "production_collection"
            }
        }
    ]
}'
```

**Python**

```python
client.update_collection_aliases(
    change_aliases_operations=[
        models.DeleteAliasOperation(
            delete_alias=models.DeleteAlias(alias_name="production_collection")
        ),
    ]
)
```

**Typescript**

```typescript
client.updateCollectionAliases({
  actions: [
    {
      delete_alias: {
        alias_name: "production_collection",
      },
    },
  ],
});
```

**Rust**

```rust
client.delete_alias("production_collection").await?;
```

**Java**

```java
client.deleteAliasAsync("production_collection").get();
```

**Csharp**

```csharp
await client.DeleteAliasAsync("production_collection");
```

**Go**

```go
import "context"

client.DeleteAlias(context.Background(), "production_collection")
```

### Switch Collection

Multiple alias actions are performed atomically.
For example, you can switch underlying collection with the following command:

**Http**

```http
POST /collections/aliases
{
    "actions": [
        {
            "delete_alias": {
                "alias_name": "production_collection"
            }
        },
        {
            "create_alias": {
                "collection_name": "example_collection",
                "alias_name": "production_collection"
            }
        }
    ]
}
```

**Bash**

```bash
curl -X POST http://localhost:6333/collections/aliases \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "actions": [
        {
            "delete_alias": {
                "alias_name": "production_collection"
            }
        },
        {
            "create_alias": {
                "collection_name": "example_collection",
                "alias_name": "production_collection"
            }
        }
    ]
}'
```

**Python**

```python
client.update_collection_aliases(
    change_aliases_operations=[
        models.DeleteAliasOperation(
            delete_alias=models.DeleteAlias(alias_name="production_collection")
        ),
        models.CreateAliasOperation(
            create_alias=models.CreateAlias(
                collection_name="example_collection", alias_name="production_collection"
            )
        ),
    ]
)
```

**Typescript**

```typescript
client.updateCollectionAliases({
  actions: [
    {
      delete_alias: {
        alias_name: "production_collection",
      },
    },
    {
      create_alias: {
        collection_name: "example_collection",
        alias_name: "production_collection",
      },
    },
  ],
});
```

**Rust**

```rust
use qdrant_client::qdrant::CreateAliasBuilder;

client.delete_alias("production_collection").await?;
client
    .create_alias(CreateAliasBuilder::new(
        "example_collection",
        "production_collection",
    ))
    .await?;
```

**Java**

```java
client.deleteAliasAsync("production_collection").get();
client.createAliasAsync("production_collection", "example_collection").get();
```

**Csharp**

```csharp
await client.DeleteAliasAsync("production_collection");
await client.CreateAliasAsync(aliasName: "production_collection", collectionName: "example_collection");
```

**Go**

```go
import "context"

client.DeleteAlias(context.Background(), "production_collection")
client.CreateAlias(context.Background(), "production_collection", "example_collection")
```

### List Collection Aliases

**Http**

```http
GET /collections/{collection_name}/aliases
```

**Bash**

```bash
curl -X GET http://localhost:6333/collections/{collection_name}/aliases
```

**Python**

```python
from qdrant_client import QdrantClient

client = QdrantClient(url="http://localhost:6333")

client.get_collection_aliases(collection_name="{collection_name}")
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.getCollectionAliases("{collection_name}");
```

**Rust**

```rust
use qdrant_client::Qdrant;

let client = Qdrant::from_url("http://localhost:6334").build()?;

client.list_collection_aliases("{collection_name}").await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client.listCollectionAliasesAsync("{collection_name}").get();
```

**Csharp**

```csharp
using Qdrant.Client;

var client = new QdrantClient("localhost", 6334);

await client.ListCollectionAliasesAsync("{collection_name}");
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

client.ListCollectionAliases(context.Background(), "{collection_name}")
```

### List All Aliases

**Http**

```http
GET /aliases
```

**Bash**

```bash
curl -X GET http://localhost:6333/aliases
```

**Python**

```python
from qdrant_client import QdrantClient

client = QdrantClient(url="http://localhost:6333")

client.get_aliases()
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.getAliases();
```

**Rust**

```rust
use qdrant_client::Qdrant;

let client = Qdrant::from_url("http://localhost:6334").build()?;

client.list_aliases().await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client.listAliasesAsync().get();
```

**Csharp**

```csharp
using Qdrant.Client;

var client = new QdrantClient("localhost", 6334);

await client.ListAliasesAsync();
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

client.ListAliases(context.Background())
```

### List All Collections

**Http**

```http
GET /collections
```

**Bash**

```bash
curl -X GET http://localhost:6333/collections
```

**Python**

```python
from qdrant_client import QdrantClient

client = QdrantClient(url="http://localhost:6333")

client.get_collections()
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.getCollections();
```

**Rust**

```rust
use qdrant_client::Qdrant;

let client = Qdrant::from_url("http://localhost:6334").build()?;

client.list_collections().await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client.listCollectionsAsync().get();
```

**Csharp**

```csharp
using Qdrant.Client;

var client = new QdrantClient("localhost", 6334);

await client.ListCollectionsAsync();
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

client.ListCollections(context.Background())
```
