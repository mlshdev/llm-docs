> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/size3d/sheared(_:)](https://developer.apple.com/documentation/spatial/size3d/sheared(_:))

# sheared(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns a size that results from shearing over an axis by shear factors for the other two axes.

## Declaration

```swift
func sheared(_ shear: AxisWithFactors) -> Size3D
```

## Parameters

- `shear`: The shear axis and factors.

<a id="return-value"></a>

## Return Value

The size that results from shearing over an axis by shear factors for the other two axes.

## See Also

### Transforming a 3D size structure

- [applying(\_:)](applying%28__%29-85mlm.md): Returns a size that results from applying the specified pose.
- [applying(\_:)](applying%28__%29-7e2pf.md): Returns a size that’s transformed by the specified scaled pose.
- [applying(\_:)](applying%28__%29-85mlm.md): Returns a size that results from applying the specified pose.
- [unapplying(\_:)](unapplying%28__%29-7qam3.md): Returns a size that results from unapplying the specified affine transform.
- [unapplying(\_:)](unapplying%28__%29-yock.md): Returns a size that results from unapplying the specified projective transform.
- [unapplying(\_:)](unapplying%28__%29-3ip2e.md): Returns a size that results from unapplying the specified pose.
- [applying(\_:)](applying%28__%29-7e2pf.md): Returns a size that’s transformed by the specified scaled pose.
- [unapplying(\_:)](unapplying%28__%29-42rsa.md): Returns a size that’s transformed by the inverse of the specified scaled pose.
