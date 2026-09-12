> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/meshgradient/bezierpoint/init(position:leadingcontrolpoint:topcontrolpoint:trailingcontrolpoint:bottomcontrolpoint:)](https://developer.apple.com/documentation/swiftui/meshgradient/bezierpoint/init(position:leadingcontrolpoint:topcontrolpoint:trailingcontrolpoint:bottomcontrolpoint:))

# init(position:leadingControlPoint:topControlPoint:trailingControlPoint:bottomControlPoint:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a new vertex.

## Declaration

```swift
@export(implementation) init(position: SIMD2<Float>, leadingControlPoint: SIMD2<Float>, topControlPoint: SIMD2<Float>, trailingControlPoint: SIMD2<Float>, bottomControlPoint: SIMD2<Float>)
```

## Parameters

- `position`: The position of the vertex in the coordinate space the gradient is interpreted in.
- `leadingControlPoint`: The Bezier control point of the vertex’s leading edge.
- `topControlPoint`: The Bezier control point of the vertex’s top edge.
- `trailingControlPoint`: The Bezier control point of the vertex’s trailing edge.
- `bottomControlPoint`: The Bezier control point of the vertex’s bottom edge.
