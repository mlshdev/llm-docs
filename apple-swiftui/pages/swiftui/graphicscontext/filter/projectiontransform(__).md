> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/filter/projectiontransform(_:)](https://developer.apple.com/documentation/swiftui/graphicscontext/filter/projectiontransform(_:))

# projectionTransform(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a filter that transforms the rasterized form of subsequent graphics primitives.

## Declaration

```swift
static func projectionTransform(_ matrix: ProjectionTransform) -> GraphicsContext.Filter
```

## Parameters

- `matrix`: A projection transform to apply to the rasterized form of graphics primitives.

<a id="return-value"></a>

## Return Value

A filter that applies a transform.
