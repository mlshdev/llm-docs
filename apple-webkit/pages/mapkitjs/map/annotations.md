> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/annotations](https://developer.apple.com/documentation/mapkitjs/map/annotations)

# annotations

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

An array of all the annotations on the map.

## Declaration

```
get annotations(): Annotation[];
set annotations(annotations: Annotation[]);
```

## Mentioned In

- [MapKit JS 5](../mapkit-js-5.md)

<a id="Discussion"></a>

## Discussion

You can set this property to a new (possibly empty) array of annotations, which updates all the annotations on the map.

## See Also

### Annotating the map

- [selectedAnnotation](selectedannotation.md): The selected annotation.
- [annotationForCluster](annotationforcluster.md): A delegate method for modifying an annotation that represents a group of annotations that the framework combines into a cluster.
- [annotationsInMapRect()](annotationsinmaprect.md): Returns the list of annotation objects within the specified map rectangle.
- [addAnnotation()](addannotation.md): Adds an annotation to the map.
- [addAnnotations()](addannotations.md): Adds an array of annotations to the map.
- [removeAnnotation()](removeannotation.md): Removes an annotation from the map.
- [removeAnnotations()](removeannotations.md): Removes multiple annotations from the map.
