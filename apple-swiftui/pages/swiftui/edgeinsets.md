> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/edgeinsets](https://developer.apple.com/documentation/swiftui/edgeinsets)

# EdgeInsets

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The inset distances for the sides of a rectangle.

## Declaration

```swift
@frozen struct EdgeInsets
```

## Topics

### Getting edge insets

- [top](edgeinsets/top.md)
- [bottom](edgeinsets/bottom.md)
- [leading](edgeinsets/leading.md)
- [trailing](edgeinsets/trailing.md)

### Creating an edge inset

- [init()](edgeinsets/init%28%29.md)
- [init(top:leading:bottom:trailing:)](edgeinsets/init%28top_leading_bottom_trailing_%29.md)
- [init(\_:)](edgeinsets/init%28__%29.md): Creates a 2D `EdgeInsets` from an `EdgeInsets3D`, dropping its `front` and `back` values.

### Instance Methods

- [inset(by:edges:)](edgeinsets/inset%28by_edges_%29.md): Returns an inset that has been modified by the corner sizes in the specified edges. When two corner insets diverge in their values for the specified edge, the maximum inset value will be used. For example, when the top edge is specified, the top inset will be adjusted by the larger of the two heights from the top leading and trailing corner inset sizes.

## Relationships

### Conforms To

- [Animatable](animatable.md)
- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing edges, regions, and layouts

- [Edge](edge.md): An enumeration to indicate one edge of a rectangle.
- [Edge3D](edge3d.md): An edge or face of a 3D volume.
- [HorizontalEdge](horizontaledge.md): An edge on the horizontal axis.
- [VerticalEdge](verticaledge.md): An edge on the vertical axis.
- [EdgeInsets3D](edgeinsets3d.md): The inset distances for the faces of a 3D volume.
