> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/reverbmeshresource/shoebox(size:)](https://developer.apple.com/documentation/realitykit/reverbmeshresource/shoebox(size:))

# shoebox(size:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a box mesh with the vertices positioned such that the bottom surface is at y=0, with faces oriented inward.

## Declaration

```swift
static func shoebox(size: SIMD3<Float>) -> Self
```

## Parameters

- `size`: The width, height, and depth of the box, in meters.

<a id="discussion"></a>

## Discussion

Use this factory method for objects that *define* the scene rather than objects within it — for example, the enclosing walls, floor, and ceiling of a room.

```swift
let room = ReverbMeshResource.shoebox(size: [4, 3, 5])
```

## See Also

### Creating standard room shapes

- [box(size:)](box%28size_%29.md): Creates a box mesh with vertices positioned such that the origin is at the center, with faces oriented outward.
- [plane(width:depth:)](plane%28width_depth_%29.md): Creates a new rectangle reverb mesh with the specified dimensions in the entity’s xz-plane.
