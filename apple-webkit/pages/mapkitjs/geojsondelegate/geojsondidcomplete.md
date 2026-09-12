> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/geojsondelegate/geojsondidcomplete](https://developer.apple.com/documentation/mapkitjs/geojsondelegate/geojsondidcomplete)

# geoJSONDidComplete(result, geoJSON)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Method  
**Availability:** MapKit JS 5.0+

Completes the GeoJSON import.

## Declaration

```
geoJSONDidComplete?<D extends GeoJSONTypes.GeoJSON>(
    result: ItemCollection<D>,
    geoJSON: D,
): void;
```

## Parameters

- `result`: The mapped item collection.
- `geoJSON`: The original parsed GeoJSON object.

<a id="Discussion"></a>

## Discussion

After MapKit JS loads the GeoJSON data and converts it to MapKit objects, the framework calls [geoJSONDidComplete()](geojsondidcomplete.md) with the resulting [ItemCollection](../itemcollection.md), which reflects any provided customizations. This is the same value that returns directly from [importGeoJSON()](../mapkit/importgeojson.md) in the synchronous case.

## See Also

### Handling errors and completion

- [geoJSONDidError()](geojsondiderror.md): Indicates when the GeoJSON import fails.
