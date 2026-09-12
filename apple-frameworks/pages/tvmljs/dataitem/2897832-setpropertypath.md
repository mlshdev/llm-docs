> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/dataitem/2897832-setpropertypath](https://developer.apple.com/documentation/tvmljs/dataitem/2897832-setpropertypath)

# setPropertyPath

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Method  
**Availability:** tvOS 11.0+

Sets the value associated with a property path.

## Declaration

```
void setPropertyPath(
    in String path, 
    in Object value
);
```

## Parameters

- `path`: The dot-separated sequence of properties from the receiver. The path can contain array indexers. For example, `items[0].title` refers to the `title` property stored in index location 0 in the `items` array.
- `value`: An object associated with the property path.

<a id="discussion"></a>

## Discussion

Set the property path to associate the data item objects contained in the `value` parameter with a section element. [Listing 1](2897832-setpropertypath.md#2902804) shows an example of data item objects contained in the `newItems` object added to the section that binds the `images` path; for example `<section binding="items:{images};" />`.

<a id="2902804"></a>

**Listing 1**

Setting the property path

```javascript
let section = shelf.getElementsByTagName("section").item(0)section.dataItem = new DataItem()

let newItems = results.map((result) => {
    let objectItem = new DataItem(result.type, result.ID);
    objectItem.url = result.url;
    return objectItem;
});

section.dataItem.setPropertyPath("images", newItems)
```

## See Also

### Working with Property Paths

- [getPropertyPath](2897819-getpropertypath.md): Retrieves the value associated with a property path.
- [touchPropertyPath](2897830-touchpropertypath.md): Updates the property path.
