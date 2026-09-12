> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/geojsondelegate/itemforpoint](https://developer.apple.com/documentation/mapkitjs/geojsondelegate/itemforpoint)

# itemForPoint(coordinate, geoJSON)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Method  
**Availability:** MapKit JS 5.0+

Overrides a point.

## Declaration

```
itemForPoint?(
    coordinate: Coordinate,
    geoJSON: GeoJSONTypes.Point,
): Item | null;
```

## Parameters

- `coordinate`: A GeoJSON `Point` generates the coordinate. You can use the coordinate to instantiate an item to return.
- `geoJSON`: The original GeoJSON object for the `Point`. This object may be a simple `Point` or a `Feature` with the `Point` geometry type.

<a id="return-value"></a>

## Return Value

An array of map items.

<a id="Discussion"></a>

## Discussion

MapKit JS calls this method for every `Point` object. For a `MultiPoint` object or for a `GeometryCollection` of `Points` and `MultiPoints`, the framework calls [itemForPoint()](itemforpoint.md) for each individual `Point` object.

## See Also

### Overriding items

- [itemForFeature()](itemforfeature.md): Overrides a feature.
- [itemForFeatureCollection()](itemforfeaturecollection.md): Overrides a feature collection.
- [itemForLineString()](itemforlinestring.md): Overrides a line string.
- [itemForMultiLineString()](itemformultilinestring.md): Overrides a multiline string.
- [itemForMultiPoint()](itemformultipoint.md): Overrides a multipoint object.
- [itemForPolygon()](itemforpolygon.md): Overrides a polygon.
- [itemForMultiPolygon()](itemformultipolygon.md): Overrides a multipolygon.
- [styleForOverlay()](styleforoverlay.md): Overrides the style of overlays.
