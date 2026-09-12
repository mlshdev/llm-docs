> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shaperesource/generatebox(width:height:depth:)](https://developer.apple.com/documentation/realitykit/shaperesource/generatebox(width:height:depth:))

# generateBox(width:height:depth:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a box shape with the specified dimensions.

## Declaration

```swift
@MainActor @preconcurrency static func generateBox(width: Float, height: Float, depth: Float) -> ShapeResource
```

## Parameters

- `width`: The extent of the box along the x-axis in meters.
- `height`: The extent of the box along the y-axis in meters.
- `depth`: The extent of the box along the z-axis in meters.

<a id="return-value"></a>

## Return Value

The new box centered at the local origin and aligned with the local axes.

<a id="discussion"></a>

## Discussion

> **Note**

> Collision shape extents that fall below 2mm are forced to be 2mm in size - this includes, entities with negative scale values.

## See Also

### Generating boxes

- [generateBox(size:)](generatebox%28size_%29.md): Creates a box shape with the specified extent.
