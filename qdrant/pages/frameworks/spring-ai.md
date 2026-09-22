> Pinned source for Qdrant master: [qdrant-landing/content/documentation/frameworks/spring-ai.md](https://github.com/qdrant/landing_page/blob/32eb334faf299b1cbfe0bddc7cd79e10b77012c4/qdrant-landing/content/documentation/frameworks/spring-ai.md)
> Canonical documentation: https://qdrant.tech/documentation/frameworks/spring-ai/

# Spring AI

[Spring AI](https://docs.spring.io/spring-ai/reference/) is a Java framework that provides a [Spring-friendly](https://spring.io/) API and abstractions for developing AI applications.

Qdrant is available as supported vector database for use within your Spring AI projects.

## Installation

You can find the Spring AI installation instructions [here](https://docs.spring.io/spring-ai/reference/getting-started.html).

Add the Qdrant boot starter package.

```xml
<dependency>
 <groupId>org.springframework.ai</groupId>
 <artifactId>spring-ai-qdrant-store-spring-boot-starter</artifactId>
</dependency>
```

## Usage

Configure Qdrant with Spring Boot’s `application.properties`.

```
spring.ai.vectorstore.qdrant.host=<host of your qdrant instance>
spring.ai.vectorstore.qdrant.port=<the GRPC port of your qdrant instance>
spring.ai.vectorstore.qdrant.api-key=<your api key>
spring.ai.vectorstore.qdrant.collection-name=<The name of the collection to use in Qdrant>
```

Learn more about these options in the [configuration reference](https://docs.spring.io/spring-ai/reference/api/vectordbs/qdrant.html#qdrant-vectorstore-properties).

Or you can set up the Qdrant vector store with the `QdrantVectorStoreConfig` options.

```java
@Bean
public QdrantVectorStoreConfig qdrantVectorStoreConfig() {

    return QdrantVectorStoreConfig.builder()
        .withHost("<QDRANT_HOSTNAME>")
        .withPort(<QDRANT_GRPC_PORT>)
        .withCollectionName("<QDRANT_COLLECTION_NAME>")
        .withApiKey("<QDRANT_API_KEY>")
        .build();
}
```

Build the vector store using the config and any of the support [Spring AI embedding providers](https://docs.spring.io/spring-ai/reference/api/embeddings.html#available-implementations).

```java
@Bean
public VectorStore vectorStore(QdrantVectorStoreConfig config, EmbeddingClient embeddingClient) {
    return new QdrantVectorStore(config, embeddingClient);
}
```

You can now use the `VectorStore` instance backed by Qdrant as a vector store in the Spring AI APIs.

> **Note**
>
> If the collection is not <a href="https://qdrant.tech/documentation/manage-data/collections/#create-a-collection">created in advance</a>, <code>QdrantVectorStore</code> will attempt to create one using cosine similarity and the dimension of the configured <code>EmbeddingClient</code>.

## 📚 Further Reading

- Spring AI [Qdrant reference](https://docs.spring.io/spring-ai/reference/api/vectordbs/qdrant.html)
- Spring AI [API reference](https://docs.spring.io/spring-ai/reference/index.html)
- [Source Code](https://github.com/spring-projects/spring-ai/tree/main/vector-stores/spring-ai-qdrant-store)
