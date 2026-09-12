> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/annotation/memberannotations](https://developer.apple.com/documentation/mapkitjs/annotation/memberannotations)

# memberAnnotations

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

An array of annotations that the framework groups together in a cluster.

## Declaration

```
get memberAnnotations(): Annotation[] | null;
```

<a id="Discussion"></a>

## Discussion

The [memberAnnotations](memberannotations.md) array contains all of the annotations that MapKit JS groups together in a cluster. This is a flat array. If there are multiple clusters of annotations, this array contains all of the individual annotations within those clusters; it doesn’t contain any cluster annotations.

## See Also

### Managing clustering

- [clusteringIdentifier](clusteringidentifier.md): An identifier for grouping annotations into the same cluster.
- [collisionMode](collisionmode-data.property.md): A mode that determines the shape of the collision frame.
