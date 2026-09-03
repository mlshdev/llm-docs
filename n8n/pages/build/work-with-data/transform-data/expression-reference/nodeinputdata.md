> Commit-pinned source for n8n main: [docs/build/work-with-data/transform-data/expression-reference/nodeinputdata.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/build/work-with-data/transform-data/expression-reference/nodeinputdata.md)

# NodeInputData <a id="nodeinputdata"></a>

## `$input`.**`all()`** <a id="dollarinputall"></a>

**Description:** Returns an array of the current node’s input items

**Syntax:** `$input`.all(branchIndex?, runIndex?)

**Returns:** Array<Item>

**Source:**  Custom n8n functionality

**Parameters:**

- `branchIndex` (Number) - optional - The output branch index of the node to use. Defaults to the first branch (index 0)
- `runIndex` (Number) - optional - The run of the node to use. Defaults to the first run (index 0)

## `$input`.**`first()`** <a id="dollarinputfirst"></a>

**Description:** Returns the current node’s first input item

**Syntax:** `$input`.first(branchIndex?, runIndex?)

**Returns:** Item

**Source:**  Custom n8n functionality

**Parameters:**

- `branchIndex` (Number) - optional - The output branch index of the node to use. Defaults to the first branch (index 0)
- `runIndex` (Number) - optional - The run of the node to use. Defaults to the first run (index 0)

## `$input`.**`item`** <a id="dollarinputitem"></a>

**Description:** Returns the input item currently being processed

**Syntax:** `$input`.`$input`.**`item`**

**Returns:** Item

**Source:**  Custom n8n functionality

## `$input`.**`last()`** <a id="dollarinputlast"></a>

**Description:** Returns the current node’s last input item

**Syntax:** `$input`.last(branchIndex?, runIndex?)

**Returns:** Item

**Source:**  Custom n8n functionality

**Parameters:**

- `branchIndex` (Number) - optional - The output branch index of the node to use. Defaults to the first branch (index 0)
- `runIndex` (Number) - optional - The run of the node to use. Defaults to the first run (index 0)

## `$input`.**`params`** <a id="dollarinputparams"></a>

**Description:** The configuration settings of the current node. These are the parameters you fill out within the node when configuring it (e.g. its operation).

**Syntax:** `$input`.`$input`.**`params`**

**Returns:** NodeParams

**Source:**  Custom n8n functionality
