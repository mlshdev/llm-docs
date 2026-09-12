> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapannotationprotocol](https://developer.apple.com/documentation/mapkit/mapannotationprotocol)

# MapAnnotationProtocol

**Framework:** MapKit  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A protocol that represents the possible return types of annotations.

## Declaration

```swift
protocol MapAnnotationProtocol
```

<a id="overview"></a>

## Overview

Don’t create types conforming to this protocol. Instead, use one of the framework-provided types [MapAnnotation](mapannotation.md), [MapMarker](mapmarker.md), and [MapPin](mappin.md).

## Relationships

### Conforming Types

- [MapAnnotation](mapannotation.md)
- [MapMarker](mapmarker.md)
- [MapPin](mappin.md)

## See Also

### Annotations in SwiftUI

- [MapMarker](mapmarker.md): Deprecated. A balloon-shaped annotation used to indicate the location on a map.
- [MapPin](mappin.md): Deprecated. A pin-shaped annotation used to indicate a location on a map.
- [MapAnnotation](mapannotation.md): Deprecated. A customizable annotation that marks a map location.
