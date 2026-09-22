> Pinned source for Qdrant master: [qdrant-landing/content/documentation/search/text-search/_index.md](https://github.com/qdrant/landing_page/blob/32eb334faf299b1cbfe0bddc7cd79e10b77012c4/qdrant-landing/content/documentation/search/text-search/_index.md)
> Canonical documentation: https://qdrant.tech/documentation/search/text-search/

# Text Search

Qdrant is a vector search engine, making it a great tool for [semantic search](#semantic-search). However, Qdrant's capabilities go beyond just vector search. It also supports a range of lexical search features, including filtering on text fields and full-text search using popular algorithms like BM25.

## Semantic Search

Semantic search is a search technique that focuses on the meaning of the text rather than just matching on keywords. This is achieved by converting text into [vectors](https://qdrant.tech/documentation/manage-data/vectors/) (embeddings) using machine learning models. These vectors capture the semantic meaning of the text, enabling you to find similar text even if it doesn't share exact keywords.

> **Note**
>
> The examples in this guide use <a href="https://qdrant.tech/documentation/inference/">inference</a> to let Qdrant generate the vectors. Inference is only available on <a href="https://qdrant.tech/documentation/inference/cloud-inference/">Qdrant Cloud</a>, with the exception of the BM25 model. If you are not running on Qdrant Cloud, you can use a library like <a href="https://qdrant.tech/documentation/fastembed/">FastEmbed</a> to generate vectors on the client side. When using FastEmbed, refer to the documentation, as its API may differ from that of server-side inference.

For example, to search through a collection of books, you could use a model like the `all-MiniLM-L6-v2` sentence transformer model. First, create a collection and configure a dense vector for the book descriptions:

**Http**

```http
PUT /collections/books
{
  "vectors": {
    "description-dense": {
      "size": 384,
      "distance": "Cosine"
    }
  }
}
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(
    url="https://xyz-example.qdrant.io:6333",
    api_key="<your-api-key>",
    cloud_inference=True,
)

client.create_collection(
    collection_name="books",
    vectors_config={
        "description-dense": models.VectorParams(size=384, distance=models.Distance.COSINE)
    },
)
```

**Typescript**

```typescript
client.createCollection("books", {
  vectors: {
    "description-dense": { size: 384, distance: "Cosine" },
  },
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{
    CreateCollectionBuilder, Distance, VectorParamsBuilder, VectorsConfigBuilder,
};

let mut vectors_config = VectorsConfigBuilder::default();
vectors_config.add_named_vector_params(
    "description-dense",
    VectorParamsBuilder::new(384, Distance::Cosine),
);

client
    .create_collection(CreateCollectionBuilder::new("books").vectors_config(vectors_config))
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.*;

QdrantClient client =

client
    .createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName("books")
            .setVectorsConfig(
                VectorsConfig.newBuilder()
                    .setParamsMap(
                        VectorParamsMap.newBuilder()
                            .putMap(
                                "description-dense",
                                VectorParams.newBuilder()
                                    .setSize(384)
                                    .setDistance(Distance.Cosine)
                                    .build())
                            .build())
                    .build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

await client.CreateCollectionAsync(
    collectionName: "books",
    vectorsConfig: new VectorParamsMap
    {
        Map =
        {
            ["description-dense"] = new VectorParams
            {
                Size = 384,
                Distance = Distance.Cosine,
            },
        },
    }
);
```

**Go**

```go
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
	CollectionName: "books",
	VectorsConfig: qdrant.NewVectorsConfigMap(
		map[string]*qdrant.VectorParams{
			"description-dense": {
				Size:     384,
				Distance: qdrant.Distance_Cosine,
			},
		}),
})
```

Next, you can ingest data:

**Http**

```http
PUT /collections/books/points?wait=true
{
  "points": [
    {
      "id": 1,
      "vector": {
        "description-dense": {
          "text": "A Victorian scientist builds a device to travel far into the future and observes the dim trajectories of humanity. He discovers evolutionary divergence and the consequences of class division. Wells's novella established time travel as a vehicle for social commentary.",
          "model": "sentence-transformers/all-minilm-l6-v2"
        }
      },
      "payload": {
        "title": "The Time Machine",
        "author": "H.G. Wells",
        "isbn": "9780553213515"
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
    api_key="<your-api-key>",
    cloud_inference=True,
)

client.upsert(
    collection_name="books",
    points=[
        models.PointStruct(
            id=1,
            vector={
                "description-dense": models.Document(
                    text="A Victorian scientist builds a device to travel far into the future and observes the dim trajectories of humanity. He discovers evolutionary divergence and the consequences of class division. Wells's novella established time travel as a vehicle for social commentary.",
                    model="sentence-transformers/all-minilm-l6-v2",
                )
            },
            payload={
                "title": "The Time Machine",
                "author": "H.G. Wells",
                "isbn": "9780553213515",
            },
        )
    ],
)
```

**Typescript**

```typescript
client.upsert("books", {
  wait: true,
  points: [
    {
      id: 1,
      vector: {
        "description-dense": {
          text: "A Victorian scientist builds a device to travel far into the future and observes the dim trajectories of humanity. He discovers evolutionary divergence and the consequences of class division. Wells's novella established time travel as a vehicle for social commentary.",
          model: "sentence-transformers/all-minilm-l6-v2",
        },
      },
      payload: {
        title: "The Time Machine",
        author: "H.G. Wells",
        isbn: "9780553213515",
      },
    },
  ],
});
```

**Rust**

```rust
use std::collections::HashMap;

use qdrant_client::qdrant::{Document, PointStruct, UpsertPointsBuilder};
use qdrant_client::{Payload, Qdrant};
use serde_json::json;

let point = PointStruct::new(
    1,
    HashMap::from([(
        "description-dense".to_string(),
        Document::new(
            "A Victorian scientist builds a device to travel far into the future and observes the dim trajectories of humanity. He discovers evolutionary divergence and the consequences of class division. Wells's novella established time travel as a vehicle for social commentary.",
            "sentence-transformers/all-minilm-l6-v2",
        ),
    )]),
    Payload::try_from(json!({
        "title": "The Time Machine",
        "author": "H.G. Wells",
        "isbn": "9780553213515",
    }))
    .unwrap(),
);

client
    .upsert_points(UpsertPointsBuilder::new("books", vec![point]).wait(true))
    .await?;
```

**Java**

```java
import static io.qdrant.client.ConditionFactory.*;
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.ValueFactory.value;
import static io.qdrant.client.VectorFactory.vector;
import static io.qdrant.client.VectorsFactory.namedVectors;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.*;
import io.qdrant.client.grpc.Points.*;
import java.util.*;

QdrantClient client =

PointStruct point =
    PointStruct.newBuilder()
        .setId(id(1))
        .setVectors(
            namedVectors(
                Map.of(
                    "description-dense",
                    vector(
                        Document.newBuilder()
                            .setText(
                                "A Victorian scientist builds a device to travel far into the future and observes the dim trajectories of humanity. He discovers evolutionary divergence and the consequences of class division. Wells's novella established time travel as a vehicle for social commentary.")
                            .setModel("sentence-transformers/all-minilm-l6-v2")
                            .build()))))
        .putAllPayload(
            Map.of(
                "title", value("The Time Machine"),
                "author", value("H.G. Wells"),
                "isbn", value("9780553213515")))
        .build();

client.upsertAsync("books", List.of(point)).get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

await client.UpsertAsync(
    collectionName: "books",
    wait: true,
    points: new List<PointStruct>
    {
        new()
        {
            Id = 1,
            Vectors = new Dictionary<string, Vector>
            {
                ["description-dense"] = new Document
                {
                    Text =
                        "A Victorian scientist builds a device to travel far into the future and observes the dim trajectories of humanity. He discovers evolutionary divergence and the consequences of class division. Wells's novella established time travel as a vehicle for social commentary.",
                    Model = "sentence-transformers/all-minilm-l6-v2",
                },
            },
            Payload =
            {
                ["title"] = "The Time Machine",
                ["author"] = "H.G. Wells",
                ["isbn"] = "9780553213515",
            },
        },
    }
);
```

**Go**

```go
client.Upsert(context.Background(), &qdrant.UpsertPoints{
	CollectionName: "books",
	Points: []*qdrant.PointStruct{
		{
			Id: qdrant.NewIDNum(uint64(1)),
			Vectors: qdrant.NewVectorsMap(map[string]*qdrant.Vector{
				"description-dense": qdrant.NewVectorDocument(&qdrant.Document{
					Model: "sentence-transformers/all-minilm-l6-v2",
					Text:  "A Victorian scientist builds a device to travel far into the future and observes the dim trajectories of humanity. He discovers evolutionary divergence and the consequences of class division. Wells's novella established time travel as a vehicle for social commentary.",
				}),
			}),
			Payload: qdrant.NewValueMap(map[string]any{
				"title":  "The Time Machine",
				"author": "H.G. Wells",
				"isbn":   "9780553213515",
			}),
		},
	},
})
```

To find books related to "time travel", use the following query:

**Http**

```http
POST /collections/books/points/query
{
  "query": {
    "text": "time travel",
    "model": "sentence-transformers/all-minilm-l6-v2"
  },
  "using": "description-dense",
  "with_payload": true
}
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(
    url="https://xyz-example.qdrant.io:6333",
    api_key="<your-api-key>",
    cloud_inference=True,
)

client.query_points(
    collection_name="books",
    query=models.Document(text="time travel", model="sentence-transformers/all-minilm-l6-v2"),
    using="description-dense",
    with_payload=True,
)
```

**Typescript**

```typescript
client.query("books", {
  query: {
    text: "time travel",
    model: "sentence-transformers/all-minilm-l6-v2",
  },
  using: "description-dense",
  with_payload: true,
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{Document, Query, QueryPointsBuilder};

client
    .query(
        QueryPointsBuilder::new("books")
            .query(Query::new_nearest(Document::new(
                "time travel",
                "sentence-transformers/all-minilm-l6-v2",
            )))
            .using("description-dense")
            .with_payload(true)
            .build(),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.enable;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.*;

QdrantClient client =

client
    .queryAsync(
        QueryPoints.newBuilder()
            .setCollectionName("books")
            .setQuery(
                nearest(
                    Document.newBuilder()
                        .setText("time travel")
                        .setModel("sentence-transformers/all-minilm-l6-v2")
                        .build()))
            .setUsing("description-dense")
            .setWithPayload(enable(true))
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

await client.QueryAsync(
    collectionName: "books",
    query: new Document
    {
        Text = "time travel",
        Model = "sentence-transformers/all-minilm-l6-v2",
    },
    usingVector: "description-dense",
    payloadSelector: true
);
```

**Go**

```go
client.Query(context.Background(), &qdrant.QueryPoints{
	CollectionName: "books",
	Query: qdrant.NewQueryNearest(
		qdrant.NewVectorInputDocument(&qdrant.Document{
			Model: "sentence-transformers/all-minilm-l6-v2",
			Text:  "time travel",
		}),
	),
	Using:       qdrant.PtrOf("description-dense"),
	WithPayload: qdrant.NewWithPayload(true),
})
```

In these examples, Qdrant uses [inference](https://qdrant.tech/documentation/inference/) to generate vectors from the `text` provided in the request using the specified `model`. Alternatively, you can generate explicit vectors on the client side with a library like [FastEmbed](https://qdrant.tech/documentation/fastembed/).

## Lexical Search

Lexical search, also known as keyword-based search, is a traditional search technique that relies on matching words or phrases in the text. Many applications require a combination of semantic and traditional lexical search. A good example is in e-commerce, where users may want to search for products using a product ID. ID values don't lend themselves well to vectorization, but being able to search for them is essential for a good search experience. To facilitate these use cases, Qdrant supports [text filtering](https://qdrant.tech/documentation/search/text-search/text-filtering/) and [full-text search](https://qdrant.tech/documentation/search/text-search/full-text-search/).

## Filtering Versus Querying

When it comes to lexical search in Qdrant, it's important to distinguish between filtering and querying. Filtering is used to narrow down results based on exact matches or specific criteria, while querying involves finding relevant documents based on the content of the text. In other words, filtering is about precision, while querying is about recall. A filter does not contribute to the ranking of search results, as no score is calculated for filters. A query calculates a relevance score for each matching document and that score is used to rank search results.

| Filter                                       | Query                                    |
| -------------------------------------------- | ---------------------------------------- |
| Does not contribute to ranking               | Contributes to ranking                   |
| Improves precision by narrowing down results | Improves recall by finding relevant data |

## Combining Semantic and Lexical Search

Semantic and lexical search are complementary techniques. When you don't know in advance whether a user is looking for a concept or an exact keyword, you can run both in a single query and merge the results. Qdrant supports this through [hybrid search](https://qdrant.tech/documentation/search/text-search/hybrid-search/).
