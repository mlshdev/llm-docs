> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/meshgradient/bezierpoint](https://developer.apple.com/documentation/swiftui/meshgradient/bezierpoint)

# MeshGradient.BezierPoint

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

One location in a gradient mesh, along with the four Bezier control points surrounding it.

## Declaration

```swift
@frozen struct BezierPoint
```

## Topics

### Initializers

- [init(position:leadingControlPoint:topControlPoint:trailingControlPoint:bottomControlPoint:)](bezierpoint/init%28position_leadingcontrolpoint_topcontrolpoint_trailingcontrolpoint_bottomcontrolpoint_%29.md): Creates a new vertex.

### Instance Properties

- [bottomControlPoint](bezierpoint/bottomcontrolpoint.md): The Bezier control point of the vertex’s bottom edge.
- [leadingControlPoint](bezierpoint/leadingcontrolpoint.md): The Bezier control point of the vertex’s leading edge.
- [position](bezierpoint/position.md): The position of the vertex.
- [topControlPoint](bezierpoint/topcontrolpoint.md): The Bezier control point of the vertex’s top edge.
- [trailingControlPoint](bezierpoint/trailingcontrolpoint.md): The Bezier control point of the vertex’s trailing edge.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
