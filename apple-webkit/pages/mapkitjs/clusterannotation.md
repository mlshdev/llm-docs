> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/clusterannotation](https://developer.apple.com/documentation/mapkitjs/clusterannotation)

# ClusterAnnotation

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.0+

An annotation type that groups multiple annotations together.

## Declaration

```
class ClusterAnnotation extends MarkerAnnotation
```

<a id="Discussion"></a>

## Discussion

The framework creates a [ClusterAnnotation](clusterannotation.md) when it groups annotations in a cluster. You can replace the annotation or update its properties using the [annotationForCluster](map/annotationforcluster.md) delegate method.

## Topics

### Instance Properties

- [memberAnnotations](clusterannotation/memberannotations.md): An array of annotations that the framework grouped together in a cluster.

## Relationships

### Inherits From

- [MarkerAnnotation](markerannotation.md)
