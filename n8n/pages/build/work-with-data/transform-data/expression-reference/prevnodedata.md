> Commit-pinned source for n8n main: [docs/build/work-with-data/transform-data/expression-reference/prevnodedata.md](https://github.com/n8n-io/n8n-docs/blob/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/build/work-with-data/transform-data/expression-reference/prevnodedata.md)

# PrevNodeData <a id="prevnodedata"></a>

## **`name`** <a id="name"></a>

**Description:** The name of the node that the current input came from.

Always uses the current node’s first input connector if there is more than one (e.g. in the ‘Merge’ node).

**Syntax:** **`name`**

**Returns:** String

**Source:**  Custom n8n functionality

## **`outputIndex`** <a id="outputindex"></a>

**Description:** The index of the output connector that the current input came from. Use this when the previous node had multiple outputs (such as an ‘If’ or ‘Switch’ node).

Always uses the current node’s first input connector if there is more than one (e.g. in the ‘Merge’ node).

**Syntax:** **`outputIndex`**

**Returns:** Number

**Source:**  Custom n8n functionality

## **`runIndex`** <a id="runindex"></a>

**Description:** The run of the previous node that generated the current input.

Always uses the current node’s first input connector if there is more than one (e.g. in the ‘Merge’ node).

**Syntax:** **`runIndex`**

**Returns:** Number

**Source:**  Custom n8n functionality
