> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/ray3d/rotated(by:)-qxp0](https://developer.apple.com/documentation/spatial/ray3d/rotated(by:)-qxp0)

# rotated(by:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns a ray that results from applying the specified rotation.

## Declaration

```swift
func rotated(by rotation: Rotation3D) -> Ray3D
```

## Parameters

- `rotation`: The rotation structure that defines the rotation’s angle and axis.

<a id="return-value"></a>

## Return Value

The ray that results from applying the specified rotation.

## See Also

### Transforming a 3D ray structure

- [apply(\_:)](apply%28__%29.md): Applies the specified pose to the ray.
- [applying(\_:)](applying%28__%29-337n0.md): Returns a ray that results from applying the specified affine transform.
- [applying(\_:)](applying%28__%29-2aom9.md): Returns a ray that results from applying the specified projective transform.
- [applying(\_:)](applying%28__%29-34rqi.md): Returns a ray that results from applying the specified pose.
- [unapplying(\_:)](unapplying%28__%29-7bc37.md): Returns a ray that results from unapplying the specified affine transform.
- [unapplying(\_:)](unapplying%28__%29-6tj2w.md): Returns a ray that results from unapplying the specified projective transform.
- [unapplying(\_:)](unapplying%28__%29-928o9.md): Unapplies the specified pose to the ray.
- [rotated(by:)](rotated%28by_%29-81glv.md): Returns a ray that results from rotating with the specified quaternion.
- [rotated(by:around:)](rotated%28by_around_%29-uzon.md): Returns a ray that’s rotated by the specified quaternion around a specified pivot.
- [rotated(by:around:)](rotated%28by_around_%29-7h43.md): Returns a ray that’s rotated by the specified rotation around a specified pivot.
- [applying(\_:)](applying%28__%29-6hfqw.md): Returns a ray that’s transformed by the specified scaled pose.
- [unapplying(\_:)](unapplying%28__%29-9x164.md): Returns a ray that’s transformed by the inverse of the specified scaled pose.
