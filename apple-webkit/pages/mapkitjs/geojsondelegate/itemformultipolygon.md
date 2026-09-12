> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/geojsondelegate/itemformultipolygon](https://developer.apple.com/documentation/mapkitjs/geojsondelegate/itemformultipolygon)

# itemForMultiPolygon(itemCollection, geoJSON)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Method  
**Availability:** MapKit JS 5.0+

Overrides a multipolygon.

## Declaration

```
itemForMultiPolygon?<D extends GeoJSONTypes.MultiPolygon>(
    itemCollection: ItemCollection<D>,
    geoJSON: D,
): ItemCollection<D> | Item[] | null;
```

## Parameters

- `itemCollection`: A collection containing associated overlays.
- `geoJSON`: The original GeoJSON object for the `MultiPolygon`. It contains an array of geometries.

<a id="return-value"></a>

## Return Value

A map item or an array of map items.

<a id="Discussion"></a>

## Discussion

MapKit JS calls this method for every `MultiPolygon` object. The framework also calls this method after constructing subitems, and calling their delegate functions.

## See Also

### Overriding items

- [itemForFeature()](itemforfeature.md): Overrides a feature.
- [itemForFeatureCollection()](itemforfeaturecollection.md): Overrides a feature collection.
- [itemForLineString()](itemforlinestring.md): Overrides a line string.
- [itemForMultiLineString()](itemformultilinestring.md): Overrides a multiline string.
- [itemForPoint()](itemforpoint.md): Overrides a point.
- [itemForMultiPoint()](itemformultipoint.md): Overrides a multipoint object.
- [itemForPolygon()](itemforpolygon.md): Overrides a polygon.
- [styleForOverlay()](styleforoverlay.md): Overrides the style of overlays.
