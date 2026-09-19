> Pinned source for Qdrant master: [qdrant-landing/content/documentation/frameworks/haystack.md](https://github.com/qdrant/landing_page/blob/3b58061329eedce2091c9dd380b8c47fcaa1cb64/qdrant-landing/content/documentation/frameworks/haystack.md)
> Canonical documentation: https://qdrant.tech/documentation/frameworks/haystack/

# Haystack

[Haystack](https://haystack.deepset.ai/) serves as a comprehensive NLP framework, offering a modular methodology for constructing
cutting-edge generative AI, QA, and semantic knowledge base search systems. A critical element in contemporary NLP systems is an
efficient database for storing and retrieving extensive text data. Vector databases excel in this role, as they house vector
representations of text and implement effective methods for swift retrieval. Thus, we are happy to announce the integration
with Haystack - `QdrantDocumentStore`. This document store is unique, as it is maintained externally by the Qdrant team.

The new document store comes as a separate package and can be updated independently of Haystack:

```bash
pip install qdrant-haystack
```

`QdrantDocumentStore` supports [all the configuration properties](https://qdrant.tech/documentation/manage-data/collections/#create-collection) available in
the Qdrant Python client. If you want to customize the default configuration of the collection used under the hood, you can
provide these settings when you create an instance of the `QdrantDocumentStore`. For example, if you'd like to enable the
Scalar Quantization, you'd make that in the following way:

```python
from haystack_integrations.document_stores.qdrant import QdrantDocumentStore
from qdrant_client import models

document_store = QdrantDocumentStore(
    ":memory:",
    index="Document",
    embedding_dim=512,
    recreate_index=True,
    quantization_config=models.ScalarQuantization(
        scalar=models.ScalarQuantizationConfig(
            type=models.ScalarType.INT8,
            quantile=0.99,
            always_ram=True,
        ),
    ),
)
```

## Further Reading

- [Haystack Documentation](https://haystack.deepset.ai/integrations/qdrant-document-store)
- [Source Code](https://github.com/deepset-ai/haystack-core-integrations/tree/main/integrations/qdrant)
