> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/annotationconstructoroptions/collisionmode](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/collisionmode)

# collisionMode

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.0+

A mode that determines the shape of the collision frame.

## Declaration

```
collisionMode?: AnnotationCollisionMode;
```

<a id="Discussion"></a>

## Discussion

Use one of the modes available in [AnnotationCollisionMode](../annotationcollisionmode.md):

- [Rectangle](../annotationcollisionmode/rectangle.md) — Indicates the bounding box of the annotation.
- [Circle](../annotationcollisionmode/circle.md) — Indicates a circle within the bounding box.

The default value is [Rectangle](../annotationcollisionmode/rectangle.md).

## See Also

### Grouping annotations

- [clusteringIdentifier](clusteringidentifier.md): An identifier for grouping annotations into the same cluster.
- [id](id.md): A Place ID that uniquely identifies a feature.
