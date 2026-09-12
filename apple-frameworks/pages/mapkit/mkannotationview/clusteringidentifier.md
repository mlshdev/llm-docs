> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkannotationview/clusteringidentifier](https://developer.apple.com/documentation/mapkit/mkannotationview/clusteringidentifier)

# clusteringIdentifier (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An identifier that determines whether the annotation view participates in clustering.

## Declaration

```swift
var clusteringIdentifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`, which prevents MapKit from clustering the annotation view with other annotation views. Setting the property to a non-`nil` value enables it to participate in clustering.

Clustering occurs when there’s a collision between multiple annotation views with the same identifier on the map surface. MapKit removes the annotation views involved in the collision from the map view and replaces them with a clustering annotation view, which displays the title from one of the annotations and provides access to the other annotations.

## See Also

### Clustering annotation views

- [Decluttering a Map with MapKit Annotation Clustering](../decluttering-a-map-with-mapkit-annotation-clustering.md): Enhance the readability of a map by replacing overlapping annotations with a clustering annotation view.
- [cluster](cluster.md): The clustering annotation view that replaces the annotation view.

# clusteringIdentifier (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An identifier that determines whether the annotation view participates in clustering.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * clusteringIdentifier;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`, which prevents MapKit from clustering the annotation view with other annotation views. Setting the property to a non-`nil` value enables it to participate in clustering.

Clustering occurs when there’s a collision between multiple annotation views with the same identifier on the map surface. MapKit removes the annotation views involved in the collision from the map view and replaces them with a clustering annotation view, which displays the title from one of the annotations and provides access to the other annotations.

## See Also

### Clustering annotation views

- [Decluttering a Map with MapKit Annotation Clustering](../decluttering-a-map-with-mapkit-annotation-clustering.md): Enhance the readability of a map by replacing overlapping annotations with a clustering annotation view.
- [clusterAnnotationView](cluster.md): The clustering annotation view that replaces the annotation view.
