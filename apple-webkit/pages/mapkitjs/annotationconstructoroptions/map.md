> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/annotationconstructoroptions/map](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/map)

# map

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.0+

Sets the annotation’s map.

## Declaration

```
map?: Map;
```

<a id="Discussion"></a>

## Discussion

The framework ignores the map option in the constructor. If present, the framework generates a warning.

To add or remove an annotation from a specific map, use `Map/addAnnotation` and `Map/removeAnnotation`.
