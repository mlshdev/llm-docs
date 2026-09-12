> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkclusterannotation](https://developer.apple.com/documentation/mapkit/mkclusterannotation)

# MKClusterAnnotation (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An annotation that groups two or more distinct annotations into a single entity.

## Declaration

```swift
class MKClusterAnnotation
```

<a id="overview"></a>

## Overview

A cluster annotation object stands in for the group of annotations. Cluster views promote legibility of the underlying annotations by displaying a single annotation that takes it’s title from one annotation and includes a subtitle that indicates how many additional annotations belong to the group.

MapKit automatically creates cluster annotations when two or more annotation views group too closely together on the map surface. To customize the cluster annotations that display on your map, implement the [mapView(\_:clusterAnnotationForMemberAnnotations:)](mkmapviewdelegate/mapview%28__clusterannotationformemberannotations_%29.md) method in your map’s delegate.

## Topics

### Creating a cluster annotation

- [init(memberAnnotations:)](mkclusterannotation/init%28memberannotations_%29.md): Creates a cluster annotation with the specified individual annotations.

### Getting the cluster attributes

- [title](mkclusterannotation/title.md): The title string to display for the group of annotations.
- [subtitle](mkclusterannotation/subtitle.md): The subtitle string to display for the group of annotations.

### Getting the annotations

- [memberAnnotations](mkclusterannotation/memberannotations.md): The annotations that the cluster contains.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MKAnnotation](mkannotation.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Grouped annotations

- [Decluttering a Map with MapKit Annotation Clustering](decluttering-a-map-with-mapkit-annotation-clustering.md): Enhance the readability of a map by replacing overlapping annotations with a clustering annotation view.

# MKClusterAnnotation (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An annotation that groups two or more distinct annotations into a single entity.

## Declaration

```objectivec
@interface MKClusterAnnotation : NSObject
```

<a id="overview"></a>

## Overview

A cluster annotation object stands in for the group of annotations. Cluster views promote legibility of the underlying annotations by displaying a single annotation that takes it’s title from one annotation and includes a subtitle that indicates how many additional annotations belong to the group.

MapKit automatically creates cluster annotations when two or more annotation views group too closely together on the map surface. To customize the cluster annotations that display on your map, implement the [mapView:clusterAnnotationForMemberAnnotations:](mkmapviewdelegate/mapview%28__clusterannotationformemberannotations_%29.md) method in your map’s delegate.

## Topics

### Creating a cluster annotation

- [initWithMemberAnnotations:](mkclusterannotation/init%28memberannotations_%29.md): Creates a cluster annotation with the specified individual annotations.

### Getting the cluster attributes

- [title](mkclusterannotation/title.md): The title string to display for the group of annotations.
- [subtitle](mkclusterannotation/subtitle.md): The subtitle string to display for the group of annotations.

### Getting the annotations

- [memberAnnotations](mkclusterannotation/memberannotations.md): The annotations that the cluster contains.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [MKAnnotation](mkannotation.md)

## See Also

### Grouped annotations

- [Decluttering a Map with MapKit Annotation Clustering](decluttering-a-map-with-mapkit-annotation-clustering.md): Enhance the readability of a map by replacing overlapping annotations with a clustering annotation view.
