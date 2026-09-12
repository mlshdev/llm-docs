> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/geojsondelegate/itemformultilinestring](https://developer.apple.com/documentation/mapkitjs/geojsondelegate/itemformultilinestring)

# itemForMultiLineString(itemCollection, geoJSON)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Method  
**Availability:** MapKit JS 5.0+

Overrides a multiline string.

## Declaration

```
itemForMultiLineString?<D extends GeoJSONTypes.MultiLineString>(
    itemCollection: ItemCollection<D>,
    geoJSON: D,
): ItemCollection<D> | Item[] | null;
```

## Parameters

- `itemCollection`: An item collection containing associated overlays.
- `geoJSON`: The original GeoJSON object for the `MultiLineString`. This contains an array of geometries.

<a id="return-value"></a>

## Return Value

A map item or an array of map items.

<a id="Discussion"></a>

## Discussion

MapKit JS calls this method for every `MultiLineString` object. The framework also calls this method after constructing subitems and calling their delegate functions.

## See Also

### Overriding items

- [itemForFeature()](itemforfeature.md): Overrides a feature.
- [itemForFeatureCollection()](itemforfeaturecollection.md): Overrides a feature collection.
- [itemForLineString()](itemforlinestring.md): Overrides a line string.
- [itemForPoint()](itemforpoint.md): Overrides a point.
- [itemForMultiPoint()](itemformultipoint.md): Overrides a multipoint object.
- [itemForPolygon()](itemforpolygon.md): Overrides a polygon.
- [itemForMultiPolygon()](itemformultipolygon.md): Overrides a multipolygon.
- [styleForOverlay()](styleforoverlay.md): Overrides the style of overlays.
