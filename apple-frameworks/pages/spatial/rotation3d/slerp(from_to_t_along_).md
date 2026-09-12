> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotation3d/slerp(from:to:t:along:)](https://developer.apple.com/documentation/spatial/rotation3d/slerp(from:to:t:along:))

# slerp(from:to:t:along:)

**Framework:** Spatial  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Returns the spherical linear interpolation along either the shortest or the longest arc between two rotations.

## Declaration

```swift
static func slerp(from: Rotation3D, to: Rotation3D, t: Double, along path: Rotation3D.SlerpPath = .shortest) -> Rotation3D
```

## Parameters

- `from`: The starting rotation.
- `to`: The ending rotation.
- `t`: The position along the interpolation that’s between `0` and `1`.
- `path`: An enumeration that specifies whether the interpolation should be along the shortest or the longest path between the two rotations.

<a id="return-value"></a>

## Return Value

A new rotation. When `t = 0.0`, the result is the `from` rotation. When `t = 1.0`, the result is the `to` rotation. For any other value of `t`, the result is a spherical linear interpolation between the two rotations.

## See Also

### Transforming a 3D rotation structure

- [Rotation3D.SlerpPath](slerppath.md): Constants that define the arc that a slerp operation takes.
- [inverse](inverse.md): The inverse of the rotation.
- [identity](identity.md): The identity rotation.
