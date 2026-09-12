> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/geojsondelegate/itemforfeaturecollection](https://developer.apple.com/documentation/mapkitjs/geojsondelegate/itemforfeaturecollection)

# itemForFeatureCollection(itemCollection, geoJSON)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Method  
**Availability:** MapKit JS 5.0+

Overrides a feature collection.

## Declaration

```
itemForFeatureCollection?<D extends GeoJSONTypes.FeatureCollection>(
    itemCollection: ItemCollection<D>,
    geoJSON: D,
): ItemCollection<D> | Item[] | null;
```

## Parameters

- `itemCollection`: A collection containing associated annotations and overlays.
- `geoJSON`: The original GeoJSON object for the `FeatureCollection`. This contains an array of `feature` types.

<a id="return-value"></a>

## Return Value

A map item or an array of map items.

<a id="Discussion"></a>

## Discussion

MapKit JS calls this method for every GeoJSON `FeatureCollection` object. The framework also calls this method after constructing subitems and calling their delegate functions.

## See Also

### Overriding items

- [itemForFeature()](itemforfeature.md): Overrides a feature.
- [itemForLineString()](itemforlinestring.md): Overrides a line string.
- [itemForMultiLineString()](itemformultilinestring.md): Overrides a multiline string.
- [itemForPoint()](itemforpoint.md): Overrides a point.
- [itemForMultiPoint()](itemformultipoint.md): Overrides a multipoint object.
- [itemForPolygon()](itemforpolygon.md): Overrides a polygon.
- [itemForMultiPolygon()](itemformultipolygon.md): Overrides a multipolygon.
- [styleForOverlay()](styleforoverlay.md): Overrides the style of overlays.
