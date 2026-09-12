> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/addannotations](https://developer.apple.com/documentation/mapkitjs/map/addannotations)

# addAnnotations(annotations)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.0+

Adds an array of annotations to the map.

## Declaration

```
addAnnotations(annotations: Annotation[]): Annotation[];
```

## Parameters

- `annotations`: An array of annotations to add.

<a id="return-value"></a>

## Return Value

Returns the array of annotations.

<a id="Discussion"></a>

## Discussion

The map shows annotations that have their [animates](../annotation/animates.md) property set to `true` in a staggered manner, in order of latitude.

> **Note**

>  MapKitJS immediately adds the annotations to the [annotations](annotations.md) array, then visually displays them on the map.

## See Also

### Annotating the map

- [annotations](annotations.md): An array of all the annotations on the map.
- [selectedAnnotation](selectedannotation.md): The selected annotation.
- [annotationForCluster](annotationforcluster.md): A delegate method for modifying an annotation that represents a group of annotations that the framework combines into a cluster.
- [annotationsInMapRect()](annotationsinmaprect.md): Returns the list of annotation objects within the specified map rectangle.
- [addAnnotation()](addannotation.md): Adds an annotation to the map.
- [removeAnnotation()](removeannotation.md): Removes an annotation from the map.
- [removeAnnotations()](removeannotations.md): Removes multiple annotations from the map.
