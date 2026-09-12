> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/itemcollection/items](https://developer.apple.com/documentation/mapkitjs/itemcollection/items)

# items

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

A nested list of annotations, overlays, and other item collections.

## Declaration

```
get items(): Item[];
set items(items: Item | Item[] | null);
```

<a id="Discussion"></a>

## Discussion

Access the original GeoJSON data in the [data](data.md) object. To retrieve the data as MapKit JS items, use the [items](items.md) or [getFlattenedItemList()](getflatteneditemlist.md) objects.

## See Also

### Item collection properties

- [data](data.md): The raw GeoJSON data.
- [getFlattenedItemList()](getflatteneditemlist.md): A flattened array of items that includes annotations and overlays.
