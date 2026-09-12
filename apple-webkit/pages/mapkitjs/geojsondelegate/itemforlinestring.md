> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/geojsondelegate/itemforlinestring](https://developer.apple.com/documentation/mapkitjs/geojsondelegate/itemforlinestring)

# itemForLineString(overlay, geoJSON)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Method  
**Availability:** MapKit JS 5.0+

Overrides a line string.

## Declaration

```
itemForLineString?(
    overlay: PolylineOverlay,
    geoJSON: GeoJSONTypes.LineString,
): PolylineOverlay | null;
```

## Parameters

- `overlay`: A [PolylineOverlay](../polylineoverlay.md) object.
- `geoJSON`: The original GeoJSON object for the `LineString` object.

<a id="return-value"></a>

## Return Value

A map item or an array of map items.

<a id="Discussion"></a>

## Discussion

MapKit JS calls this method for each individual `LineString` geometry object. You can customize or completely replace the provided overlay before returning it.

## See Also

### Overriding items

- [itemForFeature()](itemforfeature.md): Overrides a feature.
- [itemForFeatureCollection()](itemforfeaturecollection.md): Overrides a feature collection.
- [itemForMultiLineString()](itemformultilinestring.md): Overrides a multiline string.
- [itemForPoint()](itemforpoint.md): Overrides a point.
- [itemForMultiPoint()](itemformultipoint.md): Overrides a multipoint object.
- [itemForPolygon()](itemforpolygon.md): Overrides a polygon.
- [itemForMultiPolygon()](itemformultipolygon.md): Overrides a multipolygon.
- [styleForOverlay()](styleforoverlay.md): Overrides the style of overlays.
