> Commit-pinned source for n8n main: [docs/connect/create-nodes/build-your-node/reference/base-files/structure.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/connect/create-nodes/build-your-node/reference/base-files/structure.md)

# Structure of the node base file <a id="structure-of-the-node-base-file"></a>

The node base file follows this basic structure:

1. Add import statements.
2. Create a class for the node.
3. Within the node class, create a `description` object, which defines the node.

A programmatic-style node also has an `execute()` method, which reads incoming data and parameters, then builds a request. The declarative style handles this using the `routing` key in the `properties` object, within `descriptions`.

## Outline structure for a declarative-style node <a id="outline-structure-for-a-declarative-style-node"></a>

This code snippet gives an outline of the node structure.

```js
import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class ExampleNode implements INodeType {
    description: INodeTypeDescription = {
        // Basic node details here
        properties: [
            // Resources and operations here
        ]
    };
}
```

Refer to [Standard parameters](https://docs.n8n.io/connect/create-nodes/build-your-node/reference/base-files/standard-parameters) for information on parameters available to all node types. Refer to [Declarative-style parameters](https://docs.n8n.io/connect/create-nodes/build-your-node/reference/base-files/declarative-style-parameters) for the parameters available for declarative-style nodes.

## Outline structure for a programmatic-style node <a id="outline-structure-for-a-programmatic-style-node"></a>

This code snippet gives an outline of the node structure.

```js
import { IExecuteFunctions, INodeExecutionData, INodeType, INodeTypeDescription } from 'n8n-workflow';

export class ExampleNode implements INodeType {
    description: INodeTypeDescription = {
    // Basic node details here
    properties: [
      // Resources and operations here
    ]
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    // Process data and return
  }
};
```

Refer to [Standard parameters](https://docs.n8n.io/connect/create-nodes/build-your-node/reference/base-files/standard-parameters) for information on parameters available to all node types. Refer to [Programmatic-style parameters](https://docs.n8n.io/connect/create-nodes/build-your-node/reference/base-files/programmatic-style-parameters) and [Programmatic-style execute method](https://docs.n8n.io/connect/create-nodes/build-your-node/reference/base-files/programmatic-style-execute-method) for more information on working with programmatic-style nodes.
