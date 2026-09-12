> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/selectedannotation](https://developer.apple.com/documentation/mapkitjs/map/selectedannotation)

# selectedAnnotation

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

The selected annotation.

## Declaration

```
get selectedAnnotation(): Annotation | null;
set selectedAnnotation(annotation: Annotation | null);
```

<a id="Discussion"></a>

## Discussion

The value of [selectedAnnotation](selectedannotation.md) is either a [Annotation](../annotation.md) object, if the user selects one, or `null` if there aren’t any selected annotations.

An annotation is in a selected state if its [selected](../annotation/selected.md) property is `true`. To deselect all annotations, set this property to `null`.

To select an annotation that’s already part of the map, set this property to the desired annotation.

When MapKit JS removes the selected annotation from the map (as an effect of [removeAnnotation()](removeannotation.md), [removeAnnotations()](removeannotations.md), or setting a new set of annotations with the [annotations](annotations.md) property), MapKit JS deselects it before removing it.

## See Also

### Annotating the map

- [annotations](annotations.md): An array of all the annotations on the map.
- [annotationForCluster](annotationforcluster.md): A delegate method for modifying an annotation that represents a group of annotations that the framework combines into a cluster.
- [annotationsInMapRect()](annotationsinmaprect.md): Returns the list of annotation objects within the specified map rectangle.
- [addAnnotation()](addannotation.md): Adds an annotation to the map.
- [addAnnotations()](addannotations.md): Adds an array of annotations to the map.
- [removeAnnotation()](removeannotation.md): Removes an annotation from the map.
- [removeAnnotations()](removeannotations.md): Removes multiple annotations from the map.
