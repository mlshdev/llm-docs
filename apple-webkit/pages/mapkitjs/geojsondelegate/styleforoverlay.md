> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/geojsondelegate/styleforoverlay](https://developer.apple.com/documentation/mapkitjs/geojsondelegate/styleforoverlay)

# styleForOverlay(overlay, geoJSON)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Method  
**Availability:** MapKit JS 5.0+

Overrides the style of overlays.

## Declaration

```
styleForOverlay?(
    overlay: PolylineOverlay | PolygonOverlay,
    geoJSON: GeoJSONTypes.LineString | GeoJSONTypes.Polygon,
): Style;
```

## Parameters

- `overlay`: The overlay to style.
- `geoJSON`: The original GeoJSON for the `feature` or `geometry` object`.`

<a id="return-value"></a>

## Return Value

This method returns a [Style](../style.md) object for the provided overlay.

<a id="Discussion"></a>

## Discussion

MapKit JS calls this method for each overlay, and after each call to [itemForPoint()](itemforpoint.md) and [itemForPolygon()](itemforpolygon.md).

## See Also

### Overriding items

- [itemForFeature()](itemforfeature.md): Overrides a feature.
- [itemForFeatureCollection()](itemforfeaturecollection.md): Overrides a feature collection.
- [itemForLineString()](itemforlinestring.md): Overrides a line string.
- [itemForMultiLineString()](itemformultilinestring.md): Overrides a multiline string.
- [itemForPoint()](itemforpoint.md): Overrides a point.
- [itemForMultiPoint()](itemformultipoint.md): Overrides a multipoint object.
- [itemForPolygon()](itemforpolygon.md): Overrides a polygon.
- [itemForMultiPolygon()](itemformultipolygon.md): Overrides a multipolygon.
