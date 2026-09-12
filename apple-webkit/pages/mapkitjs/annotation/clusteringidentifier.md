> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/annotation/clusteringidentifier](https://developer.apple.com/documentation/mapkitjs/annotation/clusteringidentifier)

# clusteringIdentifier

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

An identifier for grouping annotations into the same cluster.

## Declaration

```
get clusteringIdentifier(): string | null;
set clusteringIdentifier(value: string | null);
```

## Mentioned In

- [MapKit JS 5](../mapkit-js-5.md)

<a id="Discussion"></a>

## Discussion

For MapKit JS to cluster annotations, an annotation needs a `clusteringIdentifie`r. When annotations collide and have the same `clusteringIdentifier`, MapKit JS clusters them together.

The default value is `null`.

For more details, see [Clustering annotations](../clustering-annotations.md).

## See Also

### Managing clustering

- [memberAnnotations](memberannotations.md): An array of annotations that the framework groups together in a cluster.
- [collisionMode](collisionmode-data.property.md): A mode that determines the shape of the collision frame.
