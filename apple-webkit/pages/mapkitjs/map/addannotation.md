> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/addannotation](https://developer.apple.com/documentation/mapkitjs/map/addannotation)

# addAnnotation(annotation)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.0+

Adds an annotation to the map.

## Declaration

```
addAnnotation(annotation: Annotation): Annotation | null;
```

## Parameters

- `annotation`: The annotation to add.

<a id="return-value"></a>

## Return Value

Returns the annotation.

## See Also

### Annotating the map

- [annotations](annotations.md): An array of all the annotations on the map.
- [selectedAnnotation](selectedannotation.md): The selected annotation.
- [annotationForCluster](annotationforcluster.md): A delegate method for modifying an annotation that represents a group of annotations that the framework combines into a cluster.
- [annotationsInMapRect()](annotationsinmaprect.md): Returns the list of annotation objects within the specified map rectangle.
- [addAnnotations()](addannotations.md): Adds an array of annotations to the map.
- [removeAnnotation()](removeannotation.md): Removes an annotation from the map.
- [removeAnnotations()](removeannotations.md): Removes multiple annotations from the map.
