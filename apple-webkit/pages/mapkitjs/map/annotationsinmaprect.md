> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/annotationsinmaprect](https://developer.apple.com/documentation/mapkitjs/map/annotationsinmaprect)

# annotationsInMapRect(mapRect)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.0+

Returns the list of annotation objects within the specified map rectangle.

## Declaration

```
annotationsInMapRect(mapRect: MapRectData): Annotation[];
```

## Parameters

- `mapRect`: The portion of the map in which to look for annotations.

<a id="return-value"></a>

## Return Value

Returns an array of annotations that fall inside `mapRect`.

## Mentioned In

- [MapKit JS 5](../mapkit-js-5.md)

## See Also

### Annotating the map

- [annotations](annotations.md): An array of all the annotations on the map.
- [selectedAnnotation](selectedannotation.md): The selected annotation.
- [annotationForCluster](annotationforcluster.md): A delegate method for modifying an annotation that represents a group of annotations that the framework combines into a cluster.
- [addAnnotation()](addannotation.md): Adds an annotation to the map.
- [addAnnotations()](addannotations.md): Adds an array of annotations to the map.
- [removeAnnotation()](removeannotation.md): Removes an annotation from the map.
- [removeAnnotations()](removeannotations.md): Removes multiple annotations from the map.
