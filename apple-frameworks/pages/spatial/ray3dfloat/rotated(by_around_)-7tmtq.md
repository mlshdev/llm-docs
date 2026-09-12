> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/ray3dfloat/rotated(by:around:)-7tmtq](https://developer.apple.com/documentation/spatial/ray3dfloat/rotated(by:around:)-7tmtq)

# rotated(by:around:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a ray that’s rotated by the specified rotation around a specified pivot.

## Declaration

```swift
func rotated(by rotation: Rotation3DFloat, around pivot: Point3DFloat) -> Ray3DFloat
```

## Parameters

- `rotation`: The rotation.
- `pivot`: The center of rotation.
