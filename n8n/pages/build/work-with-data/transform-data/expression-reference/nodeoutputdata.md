> Commit-pinned source for n8n main: [docs/build/work-with-data/transform-data/expression-reference/nodeoutputdata.md](https://github.com/n8n-io/n8n-docs/blob/1db58de3a8d474a1ba99f5a612beac694402d963/docs/build/work-with-data/transform-data/expression-reference/nodeoutputdata.md)

# NodeOutputData <a id="nodeoutputdata"></a>

## `$()`.**`all()`** <a id="dollarall"></a>

**Description:** Returns an array of the node’s output items

**Syntax:** `$()`.all(branchIndex?, runIndex?)

**Returns:** Array<Item>

**Source:**  Custom n8n functionality

**Parameters:**

- `branchIndex` (Number) - optional - The output branch of the node to use. Defaults to the first branch (index 0)
- `runIndex` (Number) - optional - The run of the node to use. Defaults to the first run (index 0)

## `$()`.**`first()`** <a id="dollarfirst"></a>

**Description:** Returns the first item output by the node

**Syntax:** `$()`.first(branchIndex?, runIndex?)

**Returns:** Item

**Source:**  Custom n8n functionality

**Parameters:**

- `branchIndex` (Number) - optional - The output branch of the node to use. Defaults to the first branch (index 0)
- `runIndex` (Number) - optional - The run of the node to use. Defaults to the first run (index 0)

## `$()`.**`isExecuted`** <a id="dollarisexecuted"></a>

**Description:** Is <code>true</code> if the node has executed, <code>false</code> otherwise

**Syntax:** `$()`.`$()`.**`isExecuted`**

**Returns:** Boolean

**Source:**  Custom n8n functionality

## `$()`.**`item`** <a id="dollaritem"></a>

**Description:** Returns the matching item, i.e. the one used to produce the current item in the current node. <a href="https://docs.n8n.io/build/work-with-data/reference-data/link-data-items">More info</a>

**Syntax:** `$()`.`$()`.**`item`**

**Returns:** Item

**Source:**  Custom n8n functionality

## `$()`.**`itemMatching()`** <a id="dollaritemmatching"></a>

**Description:** Returns the matching item, i.e. the one used to produce the item in the current node at the specified index. <a href="https://docs.n8n.io/build/work-with-data/reference-data/link-data-items">More info</a>

**Syntax:** `$()`.itemMatching(currentItemIndex?)

**Returns:** Item

**Source:**  Custom n8n functionality

**Parameters:**

- `currentItemIndex` (Number) - The index of the item in the current node to be matched with.

## `$()`.**`last()`** <a id="dollarlast"></a>

**Description:** Returns the last item output by the node

**Syntax:** `$()`.last(branchIndex?, runIndex?)

**Returns:** Item

**Source:**  Custom n8n functionality

**Parameters:**

- `branchIndex` (Number) - optional - The output branch of the node to use. Defaults to the first branch (index 0)
- `runIndex` (Number) - optional - The run of the node to use. Defaults to the first run (index 0)

## `$()`.**`params`** <a id="dollarparams"></a>

**Description:** The configuration settings of the given node. These are the parameters you fill out within the node’s UI (e.g. its operation).

**Syntax:** `$()`.`$()`.**`params`**

**Returns:** NodeParams

**Source:**  Custom n8n functionality
