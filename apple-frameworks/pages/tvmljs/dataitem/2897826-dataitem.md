> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/dataitem/2897826-dataitem](https://developer.apple.com/documentation/tvmljs/dataitem/2897826-dataitem)

# DataItem

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Method  
**Availability:** tvOS 11.0+

Creates a new data item.

## Declaration

```
new DataItem(
    in String type, 
    in String identifier
);
```

## Parameters

- `type`: The group identifier that associates the data item to a prototype attribute.
- `identifier`: A unique identifier for the data item.

<a id="discussion"></a>

## Discussion

Each data item in the same type group must have a unique identifier. Assign any other JSON object keys to the data item after it has been created. [Listing 1](2897826-dataitem.md#2902593) shows JSON objects being mapped to data items. The `url` and `title` keys and values are added to each data item after creation.

<a id="2902593"></a>

**Listing 1**

Mapping JSON objects to data items

```javascript
let newItems = results.map((result) => {
    let objectItem = new DataItem(result.type, result.ID);
    objectItem.url = result.url;
    objectItem.title = result.title;
    return objectItem;
});
```
