> Pinned source for Qdrant master: [qdrant-landing/content/documentation/frameworks/llama-index.md](https://github.com/qdrant/landing_page/blob/32eb334faf299b1cbfe0bddc7cd79e10b77012c4/qdrant-landing/content/documentation/frameworks/llama-index.md)
> Canonical documentation: https://qdrant.tech/documentation/frameworks/llama-index/

# LlamaIndex

Llama Index acts as an interface between your external data and Large Language Models. So you can bring your
private data and augment LLMs with it. LlamaIndex simplifies data ingestion and indexing, integrating Qdrant as a vector index.

Installing Llama Index is straightforward if we use pip as a package manager. Qdrant is not installed by default, so we need to
install it separately. The integration of both tools also comes as another package.

```bash
pip install llama-index llama-index-vector-stores-qdrant
```

Llama Index requires providing an instance of `QdrantClient`, so it can interact with Qdrant server.

```python
from llama_index.core.indices.vector_store.base import VectorStoreIndex
from llama_index.vector_stores.qdrant import QdrantVectorStore

import qdrant_client

client = qdrant_client.QdrantClient(
    "<qdrant-url>",
    api_key="<qdrant-api-key>", # For Qdrant Cloud, None for local instance
)

vector_store = QdrantVectorStore(client=client, collection_name="documents")
index = VectorStoreIndex.from_vector_store(vector_store=vector_store)

```

## Further Reading

- [LlamaIndex Documentation](https://developers.llamaindex.ai/python/examples/vector_stores/qdrantindexdemo/)
- [Example Notebook](https://colab.research.google.com/github/run-llama/llama_index/blob/main/docs/examples/vector_stores/QdrantIndexDemo.ipynb)
- [Source Code](https://github.com/run-llama/llama_index/tree/main/llama-index-integrations/vector_stores/llama-index-vector-stores-qdrant)
