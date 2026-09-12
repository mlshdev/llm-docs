> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/geojsondelegate/geojsondiderror](https://developer.apple.com/documentation/mapkitjs/geojsondelegate/geojsondiderror)

# geoJSONDidError(error, geoJSON)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Method  
**Availability:** MapKit JS 5.0+

Indicates when the GeoJSON import fails.

## Declaration

```
geoJSONDidError?(
    error: GeoJSONImportError | Error,
    geoJSON?: GeoJSONTypes.GeoJSON,
): void;
```

## Parameters

- `error`: An `Error` instance related to the last blocking error.
- `geoJSON`: The original parsed GeoJSON object.

<a id="Discussion"></a>

## Discussion

MapKit JS calls this method when the GeoJSON fails to load.

## See Also

### Handling errors and completion

- [geoJSONDidComplete()](geojsondidcomplete.md): Completes the GeoJSON import.
