> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/reverbmeshresource/plane(width:depth:)](https://developer.apple.com/documentation/realitykit/reverbmeshresource/plane(width:depth:))

# plane(width:depth:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a new rectangle reverb mesh with the specified dimensions in the entity’s xz-plane.

## Declaration

```swift
static func plane(width: Float, depth: Float) -> Self
```

## Parameters

- `width`: The width of the plane along the x-axis, in meters.
- `depth`: The depth of the plane along the z-axis, in meters.

## See Also

### Creating standard room shapes

- [shoebox(size:)](shoebox%28size_%29.md): Creates a box mesh with the vertices positioned such that the bottom surface is at y=0, with faces oriented inward.
- [box(size:)](box%28size_%29.md): Creates a box mesh with vertices positioned such that the origin is at the center, with faces oriented outward.
