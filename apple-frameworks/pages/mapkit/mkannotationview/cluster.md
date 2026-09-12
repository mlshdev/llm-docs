> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkannotationview/cluster](https://developer.apple.com/documentation/mapkit/mkannotationview/cluster)

# cluster (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The clustering annotation view that replaces the annotation view.

## Declaration

```swift
weak var cluster: MKAnnotationView? { get }
```

<a id="Discussion"></a>

## Discussion

When the map is displaying this annotation view, the value of this property is `nil`.

## See Also

### Clustering annotation views

- [Decluttering a Map with MapKit Annotation Clustering](../decluttering-a-map-with-mapkit-annotation-clustering.md): Enhance the readability of a map by replacing overlapping annotations with a clustering annotation view.
- [clusteringIdentifier](clusteringidentifier.md): An identifier that determines whether the annotation view participates in clustering.

# clusterAnnotationView (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The clustering annotation view that replaces the annotation view.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) MKAnnotationView * clusterAnnotationView;
```

<a id="Discussion"></a>

## Discussion

When the map is displaying this annotation view, the value of this property is `nil`.

## See Also

### Clustering annotation views

- [Decluttering a Map with MapKit Annotation Clustering](../decluttering-a-map-with-mapkit-annotation-clustering.md): Enhance the readability of a map by replacing overlapping annotations with a clustering annotation view.
- [clusteringIdentifier](clusteringidentifier.md): An identifier that determines whether the annotation view participates in clustering.
