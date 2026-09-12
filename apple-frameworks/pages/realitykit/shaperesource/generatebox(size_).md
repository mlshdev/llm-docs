> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shaperesource/generatebox(size:)](https://developer.apple.com/documentation/realitykit/shaperesource/generatebox(size:))

# generateBox(size:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a box shape with the specified extent.

## Declaration

```swift
@MainActor @preconcurrency static func generateBox(size: SIMD3<Float>) -> ShapeResource
```

## Parameters

- `size`: The box extent in meters along the local axes.

<a id="return-value"></a>

## Return Value

The new box centered at the local origin and aligned with the local axes.

<a id="discussion"></a>

## Discussion

> **Note**

> Collision shape extents that fall below 2mm are forced to be 2mm in size - this includes, entities with negative scale values.

## See Also

### Generating boxes

- [generateBox(width:height:depth:)](generatebox%28width_height_depth_%29.md): Creates a box shape with the specified dimensions.
