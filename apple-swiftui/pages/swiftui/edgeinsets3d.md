> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/edgeinsets3d](https://developer.apple.com/documentation/swiftui/edgeinsets3d)

# EdgeInsets3D

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 1.0+

The inset distances for the faces of a 3D volume.

## Declaration

```swift
@frozen struct EdgeInsets3D
```

## Topics

### Getting edge insets

- [top](edgeinsets3d/top.md): The inset distance along the top face of a 3D volume.
- [bottom](edgeinsets3d/bottom.md): The inset distance along the bottom face of a 3D volume.
- [leading](edgeinsets3d/leading.md): The inset distance along the leading face of a 3D volume.
- [trailing](edgeinsets3d/trailing.md): The inset distance along the top trailing of a 3D volume.
- [front](edgeinsets3d/front.md): The inset distance along the top front of a 3D volume.
- [back](edgeinsets3d/back.md): The inset distance along the top back of a 3D volume.

### Creating an edge inset

- [init(horizontal:vertical:depth:)](edgeinsets3d/init%28horizontal_vertical_depth_%29.md): Creates an `EdgeInsets3D` value with values provided for each axis.
- [init(top:leading:bottom:trailing:front:back:)](edgeinsets3d/init%28top_leading_bottom_trailing_front_back_%29.md): Creates an `EdgeInsets3D` value with values provided for each face.

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
- [EdgeInsets](edgeinsets.md): The inset distances for the sides of a rectangle.
