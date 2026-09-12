> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/reverbmeshresource/box(size:)](https://developer.apple.com/documentation/realitykit/reverbmeshresource/box(size:))

# box(size:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a box mesh with vertices positioned such that the origin is at the center, with faces oriented outward.

## Declaration

```swift
static func box(size: SIMD3<Float>) -> Self
```

## Parameters

- `size`: The width, height, and depth of the box, in meters.

<a id="discussion"></a>

## Discussion

Use this factory method for objects that are *in* the scene rather than defining the scene, or when combining multiple reverb meshes to define a space (for example, separate entities for the floor, ceiling, and walls of a room).

## See Also

### Creating standard room shapes

- [shoebox(size:)](shoebox%28size_%29.md): Creates a box mesh with the vertices positioned such that the bottom surface is at y=0, with faces oriented inward.
- [plane(width:depth:)](plane%28width_depth_%29.md): Creates a new rectangle reverb mesh with the specified dimensions in the entity’s xz-plane.
