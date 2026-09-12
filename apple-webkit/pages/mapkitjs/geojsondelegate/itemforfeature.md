> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/geojsondelegate/itemforfeature](https://developer.apple.com/documentation/mapkitjs/geojsondelegate/itemforfeature)

# itemForFeature(item, geoJSON)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Method  
**Availability:** MapKit JS 5.0+

Overrides a feature.

## Declaration

```
itemForFeature?(
    item: Item | null,
    geoJSON: GeoJSONTypes.Feature,
): Item | null;
```

## Parameters

- `item`: An item the system creates for the geometry of the feature, or `null` for features with `null` geometry.
- `geoJSON`: The original GeoJSON object for the `feature`.

<a id="return-value"></a>

## Return Value

A map item for the `feature`.

<a id="Discussion"></a>

## Discussion

MapKit JS calls this method for every GeoJSON `feature`.

## See Also

### Overriding items

- [itemForFeatureCollection()](itemforfeaturecollection.md): Overrides a feature collection.
- [itemForLineString()](itemforlinestring.md): Overrides a line string.
- [itemForMultiLineString()](itemformultilinestring.md): Overrides a multiline string.
- [itemForPoint()](itemforpoint.md): Overrides a point.
- [itemForMultiPoint()](itemformultipoint.md): Overrides a multipoint object.
- [itemForPolygon()](itemforpolygon.md): Overrides a polygon.
- [itemForMultiPolygon()](itemformultipolygon.md): Overrides a multipolygon.
- [styleForOverlay()](styleforoverlay.md): Overrides the style of overlays.
