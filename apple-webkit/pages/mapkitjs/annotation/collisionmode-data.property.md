> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/annotation/collisionmode-data.property](https://developer.apple.com/documentation/mapkitjs/annotation/collisionmode-data.property)

# collisionMode

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

A mode that determines the shape of the collision frame.

## Declaration

```
get collisionMode(): AnnotationCollisionMode;
set collisionMode(value: AnnotationCollisionMode);
```

<a id="Discussion"></a>

## Discussion

The collision mode indicates whether the annotation collides, and, if so, the shape of an annotation’s collision frame:

- **[Rectangle](../annotationcollisionmode/rectangle.md)**: Indicates the bounding box of the annotation.
- **[Circle](../annotationcollisionmode/circle.md)**: Indicates a circle within the bounding box.
- **[None](../annotationcollisionmode/none.md)**: Indicates the annotation doesn’t collide with other annotations.

The default value is [Rectangle](../annotationcollisionmode/rectangle.md).

## See Also

### Managing clustering

- [memberAnnotations](memberannotations.md): An array of annotations that the framework groups together in a cluster.
- [clusteringIdentifier](clusteringidentifier.md): An identifier for grouping annotations into the same cluster.
