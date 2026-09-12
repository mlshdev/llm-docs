> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/clusterannotation/memberannotations](https://developer.apple.com/documentation/mapkitjs/clusterannotation/memberannotations)

# memberAnnotations

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

An array of annotations that the framework grouped together in a cluster.

## Declaration

```
get memberAnnotations(): Annotation[];
```

<a id="Discussion"></a>

## Discussion

This is a flat array that contains all of the annotations that MapKit JS groups together in a cluster. If there are multiple clusters of annotations, this array contains all of the individual annotations within those clusters; it doesn’t contain any cluster annotations.
