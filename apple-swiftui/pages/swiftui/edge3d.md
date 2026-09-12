> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/edge3d](https://developer.apple.com/documentation/swiftui/edge3d)

# Edge3D

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** visionOS 1.0+

An edge or face of a 3D volume.

## Declaration

```swift
@frozen enum Edge3D
```

## Topics

### Getting the edges

- [Edge3D.top](edge3d/top.md)
- [Edge3D.bottom](edge3d/bottom.md)
- [Edge3D.leading](edge3d/leading.md)
- [Edge3D.trailing](edge3d/trailing.md)
- [Edge3D.front](edge3d/front.md)
- [Edge3D.back](edge3d/back.md)

### Creating an edge

- [init(\_:)](edge3d/init%28__%29.md)

### Accessing sets of edges

- [Edge3D.Set](edge3d/set.md): An efficient set of 3D edges.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing edges, regions, and layouts

- [Edge](edge.md): An enumeration to indicate one edge of a rectangle.
- [HorizontalEdge](horizontaledge.md): An edge on the horizontal axis.
- [VerticalEdge](verticaledge.md): An edge on the vertical axis.
- [EdgeInsets](edgeinsets.md): The inset distances for the sides of a rectangle.
- [EdgeInsets3D](edgeinsets3d.md): The inset distances for the faces of a 3D volume.
