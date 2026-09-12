> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/geojsondelegate/itemforpolygon](https://developer.apple.com/documentation/mapkitjs/geojsondelegate/itemforpolygon)

# itemForPolygon(overlay, geoJSON)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Method  
**Availability:** MapKit JS 5.0+

Overrides a polygon.

## Declaration

```
itemForPolygon?(
    overlay: PolygonOverlay,
    geoJSON: GeoJSONTypes.Polygon,
): PolygonOverlay | null;
```

## Parameters

- `overlay`: You can customize the provided overlay before returning it, or you can completely replace the overlay.
- `geoJSON`: The original GeoJSON object for the polygon.

<a id="return-value"></a>

## Return Value

A map item or an array of map items.

<a id="Discussion"></a>

## Discussion

MapKit JS calls this method for each individual `polygon` geometry object. The framework breaks `MultiPolygon` geometry types into individual polygon types.

## See Also

### Overriding items

- [itemForFeature()](itemforfeature.md): Overrides a feature.
- [itemForFeatureCollection()](itemforfeaturecollection.md): Overrides a feature collection.
- [itemForLineString()](itemforlinestring.md): Overrides a line string.
- [itemForMultiLineString()](itemformultilinestring.md): Overrides a multiline string.
- [itemForPoint()](itemforpoint.md): Overrides a point.
- [itemForMultiPoint()](itemformultipoint.md): Overrides a multipoint object.
- [itemForMultiPolygon()](itemformultipolygon.md): Overrides a multipolygon.
- [styleForOverlay()](styleforoverlay.md): Overrides the style of overlays.
