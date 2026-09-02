> Commit-pinned source for n8n main: [docs/build/code-in-n8n/cookbook/built-in-methods-and-variables-examples/(node-name).all.md](https://github.com/n8n-io/n8n-docs/blob/50a2c8dc6704c114ca2b241eac1e72867ed718fe/docs/build/code-in-n8n/cookbook/built-in-methods-and-variables-examples/(node-name).all.md)

# `("<node-name>").all(branchIndex?: number, runIndex?: number)` <a id="lessnode-namegreaterallbranchindex-number-runindex-number"></a>

This gives access to all the items of the current or parent nodes. If you don't supply any parameters, it returns all the items of the current node.

## Getting items <a id="getting-items"></a>

**JavaScript**

```js
// Returns all the items of the given node and current run
let allItems = $("<node-name>").all();

// Returns all items the node "IF" outputs (index: 0 which is Output "true" of its most recent run)
let allItems = $("IF").all();

// Returns all items the node "IF" outputs (index: 0 which is Output "true" of the same run as current node)
let allItems = $("IF").all(0, $runIndex);

// Returns all items the node "IF" outputs (index: 1 which is Output "false" of run 0 which is the first run)
let allItems = $("IF").all(1, 0);
```

**Python**

```python
# Returns all the items of the given node and current run
allItems = _("<node-name>").all();

# Returns all items the node "IF" outputs (index: 0 which is Output "true" of its most recent run)
allItems = _("IF").all();

# Returns all items the node "IF" outputs (index: 0 which is Output "true" of the same run as current node)
allItems = _("IF").all(0, _runIndex);

# Returns all items the node "IF" outputs (index: 1 which is Output "false" of run 0 which is the first run)
allItems = _("IF").all(1, 0);
```

## Accessing item data <a id="accessing-item-data"></a>

Get all items output by a previous node, and log out the data they contain:

**JavaScript**

```typescript
previousNodeData = $("<node-name>").all();
for(let i=0; i<previousNodeData.length; i++) {
    console.log(previousNodeData[i].json);
}
```

**Python**

```python
previousNodeData = _("<node-name>").all();
for item in previousNodeData:
    # item is of type <class 'pyodide.ffi.JsProxy'>
    # You need to convert it to a Dict
    itemDict = item.json.to_py()
    print(itemDict)
```
