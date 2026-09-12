> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/geojsondelegate/itemforgeometrycollection](https://developer.apple.com/documentation/mapkitjs/geojsondelegate/itemforgeometrycollection)

# itemForGeometryCollection(item, object)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Method  
**Availability:** MapKit JS 5.0+

Overrides a geometry collection with the provided item and object.

## Declaration

```
itemForGeometryCollection?<D extends GeoJSONTypes.GeometryCollection>(
    item: ItemCollection<D>,
    object: D,
): ItemCollection<D> | Item[] | null;
```

## Parameters

- `item`: An item the system creates for the geometry of the geometry collection.
- `object`: The original GeoJSON object for the `feature`.

<a id="return-value"></a>

## Return Value

A map item for the geometry collection.
