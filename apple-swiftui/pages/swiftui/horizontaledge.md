> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/horizontaledge](https://developer.apple.com/documentation/swiftui/horizontaledge)

# HorizontalEdge

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An edge on the horizontal axis.

## Declaration

```swift
@frozen enum HorizontalEdge
```

<a id="overview"></a>

## Overview

Use a horizontal edge for tasks like setting a swipe action with the [swipeActions(edge:allowsFullSwipe:content:)](view/swipeactions%28edge_allowsfullswipe_content_%29.md) view modifier. The positions of the leading and trailing edges depend on the locale chosen by the user.

## Topics

### Getting the edges

- [HorizontalEdge.leading](horizontaledge/leading.md): The leading edge.
- [HorizontalEdge.trailing](horizontaledge/trailing.md): The trailing edge.

### Accessing sets of edges

- [HorizontalEdge.Set](horizontaledge/set.md): An efficient set of horizontal edges.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing edges, regions, and layouts

- [Edge](edge.md): An enumeration to indicate one edge of a rectangle.
- [Edge3D](edge3d.md): An edge or face of a 3D volume.
- [VerticalEdge](verticaledge.md): An edge on the vertical axis.
- [EdgeInsets](edgeinsets.md): The inset distances for the sides of a rectangle.
- [EdgeInsets3D](edgeinsets3d.md): The inset distances for the faces of a 3D volume.
