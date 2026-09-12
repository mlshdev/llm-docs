> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/annotationconstructoroptions/clusteringidentifier](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/clusteringidentifier)

# clusteringIdentifier

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.0+

An identifier for grouping annotations into the same cluster.

## Declaration

```
clusteringIdentifier?: string | null;
```

<a id="Discussion"></a>

## Discussion

When zooming out on a map that contains many annotations, MapKit JS groups the colliding annotations based on a clustering identifier value.

The default value is `null`.

For more information, see [Clustering annotations](../clustering-annotations.md).

## See Also

### Grouping annotations

- [collisionMode](collisionmode.md): A mode that determines the shape of the collision frame.
- [id](id.md): A Place ID that uniquely identifies a feature.
