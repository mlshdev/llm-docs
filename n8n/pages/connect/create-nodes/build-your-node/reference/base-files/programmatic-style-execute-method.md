> Commit-pinned source for n8n main: [docs/connect/create-nodes/build-your-node/reference/base-files/programmatic-style-execute-method.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/connect/create-nodes/build-your-node/reference/base-files/programmatic-style-execute-method.md)

# Programmatic-style execute() method <a id="programmatic-style-execute-method"></a>

The main difference between the declarative and programmatic styles is how they handle incoming data and build API requests. The programmatic style requires an `execute()` method, which reads incoming data and parameters, then builds a request. The declarative style handles requests using the `routing` key in the `operations` object.

The `execute()` method creates and returns an instance of `INodeExecutionData`.

> **Warning**
> **Paired items**
>
> You must include input and output item pairing information in the data you return. For more information, refer to [Paired items](https://docs.n8n.io/connect/create-nodes/build-your-node/reference/item-linking).
