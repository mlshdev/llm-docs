> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/geojsonimporterror](https://developer.apple.com/documentation/mapkitjs/geojsonimporterror)

# GeoJSONImportError

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.0+

An error object that indicates an error occurred while importing a GeoJSON object.

## Declaration

```
class GeoJSONImportError extends Error
```

<a id="Discussion"></a>

## Discussion

The `message` property contains a string that describes the error.

## Relationships

### Inherits From

- Error

## See Also

### Geographical features

- [importGeoJSON()](mapkit/importgeojson.md): Converts imported GeoJSON data to MapKit JS compatible items.
- [GeoJSONDelegate](geojsondelegate.md): A delegate object that controls a GeoJSON import to override default behavior and provide custom style.
- [Item](item.md): A type alias that represents all objects that the framework sets in an item collection.
- [ItemCollection](itemcollection.md): A tree structure containing annotations, overlays, and nested item collection objects.
- [GeoJSONImporterCallback](geojsonimportercallback.md): A callback function that MapKit JS invokes when importing a GeoJSON object.
- [Displaying Indoor Maps with MapKit JS](displaying-indoor-maps-with-mapkit-js.md): Use the Indoor Mapping Data Format (IMDF) to show an indoor map with custom overlays and points of interest in your browser.
