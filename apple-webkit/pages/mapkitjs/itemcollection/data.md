> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkitjs/itemcollection/data

# data

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

The raw GeoJSON data.

## Declaration

```
get data(): D | null;
set data(data: D | null);
```

<a id="Discussion"></a>

## Discussion

Use the [data](data.md) object to view the original GeoJSON data. To retrieve the data as MapKit JS items, use the [items](items.md) or [getFlattenedItemList()](getflatteneditemlist.md) objects.

## See Also

### Item collection properties

- [getFlattenedItemList()](getflatteneditemlist.md): A flattened array of items that includes annotations and overlays.
- [items](items.md): A nested list of annotations, overlays, and other item collections.
