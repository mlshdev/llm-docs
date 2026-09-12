> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/size3d/unapplying(_:)-3ip2e](https://developer.apple.com/documentation/spatial/size3d/unapplying(_:)-3ip2e)

# unapplying(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns a size that results from unapplying the specified pose.

## Declaration

```swift
func unapplying(_ pose: Pose3D) -> Size3D
```

## Parameters

- `pose`: The pose that the function unapplies to the size.

## See Also

### Transforming a 3D size structure

- [applying(\_:)](applying%28__%29-85mlm.md): Returns a size that results from applying the specified pose.
- [applying(\_:)](applying%28__%29-7e2pf.md): Returns a size that’s transformed by the specified scaled pose.
- [applying(\_:)](applying%28__%29-85mlm.md): Returns a size that results from applying the specified pose.
- [unapplying(\_:)](unapplying%28__%29-7qam3.md): Returns a size that results from unapplying the specified affine transform.
- [unapplying(\_:)](unapplying%28__%29-yock.md): Returns a size that results from unapplying the specified projective transform.
- [sheared(\_:)](sheared%28__%29.md): Returns a size that results from shearing over an axis by shear factors for the other two axes.
- [applying(\_:)](applying%28__%29-7e2pf.md): Returns a size that’s transformed by the specified scaled pose.
- [unapplying(\_:)](unapplying%28__%29-42rsa.md): Returns a size that’s transformed by the inverse of the specified scaled pose.
