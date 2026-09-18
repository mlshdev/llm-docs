> Pinned source for Qdrant master: [qdrant-landing/content/documentation/inference/inference-bm25.md](https://github.com/qdrant/landing_page/blob/4d8a8ceb08486decdbf0f0016772c7f120ea7d56/qdrant-landing/content/documentation/inference/inference-bm25.md)
> Canonical documentation: https://qdrant.tech/documentation/inference/inference-bm25/

# Server-side Inference: BM25

[BM25](https://qdrant.tech/documentation/search/text-search/full-text-search/#bm25) (Best Matching 25) is a ranking function for text search. BM25 uses sparse vectors that represent documents, where each dimension corresponds to a word. Qdrant can generate these sparse embeddings from input text directly on the server.

While upserting points, provide the text and the `qdrant/bm25` embedding model:

**Http**

```http
PUT /collections/{collection_name}/points
{
  "points": [
    {
      "id": 1,
      "vector": {
        "my-bm25-vector": {
          "text": "Recipe for baking chocolate chip cookies",
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

client.upsert(
    collection_name="{collection_name}",
    points=[
        models.PointStruct(
            id=1,
            vector={
                "my-bm25-vector": models.Document(
                    text="Recipe for baking chocolate chip cookies",
                    model="Qdrant/bm25",
                )
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
                'my-bm25-vector': {
                    text: 'Recipe for baking chocolate chip cookies',
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
    qdrant::{DocumentBuilder, PointStruct, UpsertPointsBuilder},
};
use std::collections::HashMap;

client
    .upsert_points(UpsertPointsBuilder::new(
        "{collection_name}",
        vec![PointStruct::new(
            1,
            HashMap::from([(
                "my-bm25-vector".to_string(),
                DocumentBuilder::new("Recipe for baking chocolate chip cookies", "qdrant/bm25")
                    .build(),
            )]),
            Payload::default(),
        )],
    ))
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
                                "my-bm25-vector",
                                vector(
                                    Document.newBuilder()
                                        .setModel("qdrant/bm25")
                                        .setText("Recipe for baking chocolate chip cookies")
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
                ["my-bm25-vector"] = new Document()
                {
                    Model = "qdrant/bm25",
                    Text = "Recipe for baking chocolate chip cookies",
                },
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
				"my-bm25-vector": qdrant.NewVectorDocument(&qdrant.Document{
					Model: "qdrant/bm25",
					Text:  "Recipe for baking chocolate chip cookies",
				}),
			}),
		},
	},
})
```

Qdrant uses the model to generate the embeddings and stores the point with the resulting vector. Retrieving the point shows the embeddings that were generated:

```json
    ....
      "my-bm25-vector": {
        "indices": [
          112174620,
          177304315,
          662344706,
          771857363,
          1617337648
        ],
        "values": [
          1.6697302,
          1.6697302,
          1.6697302,
          1.6697302,
          1.6697302
        ]
      }
    ....
]
```

Similarly, use the BM25 model at query time by providing the query string and the `qdrant/bm25` embedding model:

**Http**

```http
POST /collections/{collection_name}/points/query
{
  "query": {
    "text": "How to bake cookies?",
    "model": "qdrant/bm25"
  },
  "using": "my-bm25-vector"
}
```

**Python**

```python
from qdrant_client import QdrantClient, models

client.query_points(
    collection_name="{collection_name}",
    query=models.Document(
        text="How to bake cookies?", 
        model="Qdrant/bm25",
    ),
    using="my-bm25-vector",
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

client.query("{collection_name}", {
    query: {
        text: 'How to bake cookies?',
        model: 'qdrant/bm25',
    },
    using: 'my-bm25-vector',
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
                text: "How to bake cookies?".into(),
                model: "qdrant/bm25".into(),
                ..Default::default()
            }))
            .using("my-bm25-vector")
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
                            .setModel("qdrant/bm25")
                            .setText("How to bake cookies?")
                            .build()))
                .setUsing("my-bm25-vector")
                .build())
        .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

await client.QueryAsync(
    collectionName: "{collection_name}",
    query: new Document() { Model = "qdrant/bm25", Text = "How to bake cookies?" },
    usingVector: "my-bm25-vector"
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
			Model: "qdrant/bm25",
			Text:  "How to bake cookies?",
		}),
	),
	Using: qdrant.PtrOf("my-bm25-vector"),
})
```

Read more about full-text search with BM25 in the [text search guide](https://qdrant.tech/documentation/search/text-search/full-text-search/).
