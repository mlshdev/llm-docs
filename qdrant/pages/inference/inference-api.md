> Pinned source for Qdrant master: [qdrant-landing/content/documentation/inference/inference-api.md](https://github.com/qdrant/landing_page/blob/32eb334faf299b1cbfe0bddc7cd79e10b77012c4/qdrant-landing/content/documentation/inference/inference-api.md)
> Canonical documentation: https://qdrant.tech/documentation/inference/inference-api/

# Inference API

When using [Qdrant Cloud Inference](https://qdrant.tech/documentation/inference/cloud-inference/) or Qdrant's [BM25 model](https://qdrant.tech/documentation/inference/inference-bm25/), embeddings are generated server-side. Instead of pre-computed vectors, you pass Inference Objects when ingesting or querying data. An Inference Object tells Qdrant how to generate a vector from your input. It contains the input, such as text or an image, along with the model to use. The API supports three types of Inference Objects:

- **`Document`** object, used for text inference

  ```js
  // Document
  {
      // Text input
      text: "Your text",
      // Name of the model, to do inference with
      model: "<the-model-to-use>",
      // Extra parameters for the model, Optional
      options: {}
  }
  ```

- **`Image`** object, used for image inference

  ```js
  // Image
  {
      // Image input
      image: "<url>", // Or base64 encoded image
      // Name of the model, to do inference with
      model: "<the-model-to-use>",
      // Extra parameters for the model, Optional
      options: {}
  }
  ```

- **`Object`** object, reserved for other types of input, which might be implemented in the future.

For example, the following code:

**Http**

```http
POST /collections/<your-collection>/points/query
{
  "query": {
    "nearest": [0.12, 0.34, 0.56, 0.78, ...]
  }
}
```

**Python**

```python
client.query_points(
    collection_name="{collection_name}",
    query=[0.12, 0.34, 0.56, 0.78],
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

client.query("{collection_name}", {
    query: [0.12, 0.34, 0.56, 0.78],
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{Query, QueryPointsBuilder};

client
    .query(
        QueryPointsBuilder::new("{collection_name}")
            .query(Query::new_nearest(vec![0.12, 0.34, 0.56, 0.78]))
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.QueryFactory.nearest;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.QueryPoints;
import java.util.List;

client.queryAsync(QueryPoints.newBuilder()
    .setCollectionName("{collection_name}")
    .setQuery(nearest(List.of(0.12f, 0.34f, 0.56f, 0.78f)))
    .build()).get();
```

**Csharp**

```csharp
using Qdrant.Client;

await client.QueryAsync(
    collectionName: "{collection_name}",
    query: new float[] { 0.12f, 0.34f, 0.56f, 0.78f }
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client.Query(context.Background(), &qdrant.QueryPoints{
	CollectionName: "{collection_name}",
	Query:          qdrant.NewQuery(0.12, 0.34, 0.56, 0.78),
})
```

can be replaced with:

**Http**

```http
POST /collections/<your-collection>/points/query
{
  "query": {
    "nearest": {
      "text": "My Query Text",
      "model": "<the-model-to-use>"
    }
  }
}
```

**Python**

```python
from qdrant_client import QdrantClient, models

client.query_points(
    collection_name="{collection_name}",
    query=models.Document(
        text="My Query Text",
        model="<the-model-to-use>",
    ),
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

client.query("{collection_name}", {
    query: {
        text: 'My Query Text',
        model: '<the-model-to-use>',
    },
});
```

**Rust**

```rust
use qdrant_client::{
    Qdrant,
    qdrant::{Document, Query, QueryPointsBuilder},
};

client
    .query(
        QueryPointsBuilder::new("{collection_name}")
            .query(Query::new_nearest(Document {
                text: "My Query Text".into(),
                model: "<the-model-to-use>".into(),
                ..Default::default()
            }))
            .build(),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.QueryFactory.nearest;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.Document;
import io.qdrant.client.grpc.Points;

    client
        .queryAsync(
            Points.QueryPoints.newBuilder()
                .setCollectionName("{collection_name}")
                .setQuery(
                    nearest(
                        Document.newBuilder()
                            .setModel("<the-model-to-use>")
                            .setText("My Query Text")
                            .build()))
                .build())
        .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

await client.QueryAsync(
    collectionName: "{collection_name}",
    query: new Document() { Model = "<the-model-to-use>", Text = "My Query Text" }
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client.Query(context.Background(), &qdrant.QueryPoints{
	CollectionName: "{collection_name}",
	Query: qdrant.NewQueryNearest(
		qdrant.NewVectorInputDocument(&qdrant.Document{
			Text:  "My Query Text",
			Model: "<the-model-to-use>",
		}),
	),
})
```

In this case, Qdrant uses the configured embedding model to create a vector from the Inference Object and then perform the search query with it. All of this happens within a low-latency network.

> **Note**
>
> When using inference at ingest time, the input used for inference is not stored. If you want to persist it in Qdrant, ensure that you explicitly include it in the payload.

## Multiple Inference Operations

You can run multiple inference operations within a single request, even when models are hosted in different locations. This example generates three different named vectors for a single point: image embeddings using `jina-clip-v2` hosted by Jina AI, text embeddings using `all-minilm-l6-v2` hosted by Qdrant Cloud, and BM25 embeddings using the `bm25` model executed locally by the Qdrant cluster:

**Http**

```http
PUT /collections/{collection_name}/points?wait=true
{
  "points": [
    {
      "id": 1,
      "vector": {
        "image": {
          "image": "https://qdrant.tech/example.png",
          "model": "jinaai/jina-clip-v2",
          "options": {
            "jina-api-key": "<YOUR_JINAAI_API_KEY>",
            "dimensions": 512
          }
        },
        "text": {
          "text": "Mars, the red planet",
          "model": "sentence-transformers/all-minilm-l6-v2"
        },
        "bm25": {
          "text": "Mars, the red planet",
          "model": "qdrant/bm25"
        }
      }
    }
  ]
}
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(
    url="https://xyz-example.qdrant.io:6333",
    api_key="<your-qdrant-api-key>",
    cloud_inference=True
)

client.upsert(
    collection_name="{collection_name}",
    points=[
        models.PointStruct(
            id=1,
            vector={
                "image": models.Image(
                    image="https://qdrant.tech/example.png",
                    model="jinaai/jina-clip-v2",
                    options={
                        "jina-api-key": "<your_jinaai_api_key>",
                        "dimensions": 512
                    },
                ),
                "text": models.Document(
                    text="Mars, the red planet",
                    model="sentence-transformers/all-minilm-l6-v2",
                ),
                "bm25": models.Document(
                    text="Mars, the red planet",
                    model="Qdrant/bm25",
                ),
            },
        )
    ],
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

client.upsert("{collection_name}", {
    points: [
        {
            id: 1,
            vector: {
                image: {
                    image: 'https://qdrant.tech/example.png',
                    model: 'jinaai/jina-clip-v2',
                    options: {
                        'jina-api-key': '<your_jinaai_api_key>',
                        dimensions: 512,
                    },
                },
                text: {
                    text: 'Mars, the red planet',
                    model: 'sentence-transformers/all-minilm-l6-v2',
                },
                bm25: {
                    text: 'Mars, the red planet',
                    model: 'Qdrant/bm25',
                },
            },
        },
    ],
});
```

**Rust**

```rust
use qdrant_client::{
    Payload, Qdrant,
    qdrant::{Document, Image, NamedVectors, PointStruct, UpsertPointsBuilder},
};
use std::collections::HashMap;

let mut jina_options = HashMap::new();
jina_options.insert("jina-api-key".to_string(), "<YOUR_JINAAI_API_KEY>".into());
jina_options.insert("dimensions".to_string(), 512.into());

client
    .upsert_points(
        UpsertPointsBuilder::new(
            "{collection_name}",
            vec![PointStruct::new(
                1,
                NamedVectors::default()
                    .add_vector(
                        "image",
                        Image {
                            image: Some("https://qdrant.tech/example.png".into()),
                            model: "jinaai/jina-clip-v2".into(),
                            options: jina_options,
                        },
                    )
                    .add_vector(
                        "text",
                        Document {
                            text: "Mars, the red planet".into(),
                            model: "sentence-transformers/all-minilm-l6-v2".into(),
                            ..Default::default()
                        },
                    )
                    .add_vector(
                        "bm25",
                        Document {
                            text: "How to bake cookies?".into(),
                            model: "qdrant/bm25".into(),
                            ..Default::default()
                        },
                    ),
                Payload::default(),
            )],
        )
        .wait(true),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.ValueFactory.value;
import static io.qdrant.client.VectorFactory.vector;
import static io.qdrant.client.VectorsFactory.namedVectors;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.Document;
import io.qdrant.client.grpc.Points.Image;
import io.qdrant.client.grpc.Points.PointStruct;
import java.util.List;
import java.util.Map;

    client
        .upsertAsync(
            "{collection_name}",
            List.of(
                PointStruct.newBuilder()
                    .setId(id(1))
                    .setVectors(
                        namedVectors(
                            Map.of(
                                "image",
                                vector(
                                    Image.newBuilder()
                                        .setModel("jinaai/jina-clip-v2")
                                        .setImage(value("https://qdrant.tech/example.png"))
                                        .putAllOptions(
                                            Map.of(
                                                "jina-api-key",
                                                value("<YOUR_JINAAI_API_KEY>"),
                                                "dimensions",
                                                value(512)))
                                        .build()),
                                "text",
                                vector(
                                    Document.newBuilder()
                                        .setModel("sentence-transformers/all-minilm-l6-v2")
                                        .setText("Mars, the red planet")
                                        .build()),
                                "bm25",
                                vector(
                                    Document.newBuilder()
                                        .setModel("qdrant/bm25")
                                        .setText("Mars, the red planet")
                                        .build()))))
                    .build()))
        .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

await client.UpsertAsync(
    collectionName: "{collection_name}",
    points: new List<PointStruct>
    {
        new()
        {
            Id = 1,
            Vectors = new Dictionary<string, Vector>
            {
                ["image"] = new Image()
                {
                    Model = "jinaai/jina-clip-v2",
                    Image_ = "https://qdrant.tech/example.png",
                    Options = { ["jina-api-key"] = "<YOUR_JINAAI_API_KEY>", ["dimensions"] = 512 },
                },
                ["text"] = new Document()
                {
                    Model = "sentence-transformers/all-minilm-l6-v2",
                    Text = "Mars, the red planet",
                },
                ["bm25"] = new Document() { Model = "qdrant/bm25", Text = "Mars, the red planet" },
            },
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

client.Upsert(context.Background(), &qdrant.UpsertPoints{
	CollectionName: "{collection_name}",
	Points: []*qdrant.PointStruct{
		{
			Id: qdrant.NewIDNum(uint64(1)),
			Vectors: qdrant.NewVectorsMap(map[string]*qdrant.Vector{
				"image": qdrant.NewVectorImage(&qdrant.Image{
					Model: "jinaai/jina-clip-v2",
					Image: qdrant.NewValueString("https://qdrant.tech/example.png"),
					Options: qdrant.NewValueMap(map[string]any{
						"jina-api-key": "<YOUR_JINAAI_API_KEY>",
						"dimensions":   512,
					}),
				}),
				"text": qdrant.NewVectorDocument(&qdrant.Document{
					Model: "sentence-transformers/all-minilm-l6-v2",
					Text:  "Mars, the red planet",
				}),
				"my-bm25-vector": qdrant.NewVectorDocument(&qdrant.Document{
					Model: "qdrant/bm25",
					Text:  "Recipe for baking chocolate chip cookies",
				}),
			}),
		},
	},
})
```

When specifying multiple identical inference objects in a single request, the inference service generates embeddings only once and reuses the resulting vectors. This optimization is particularly beneficial when working with external model providers, as it reduces both latency and cost.
