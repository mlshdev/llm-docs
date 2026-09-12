> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapconstructoroptions/annotationformapfeature](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/annotationformapfeature)

# annotationForMapFeature

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.74.1+

The method MapKit JS calls when the framework creates a map feature annotation.

## Declaration

```
annotationForMapFeature?: (
    mapFeatureAnnotation: MapFeatureAnnotation,
) => Annotation | undefined;
```

<a id="Discussion"></a>

## Discussion

You can choose to return the annotation the method provides with modified properties, or provide a new annotation to represent the map feature. If an annotation doesn’t return, MapKit JS uses the default annotation.
