> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rect3d/unapplying(_:)-1j6g7](https://developer.apple.com/documentation/spatial/rect3d/unapplying(_:)-1j6g7)

# unapplying(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns a rectangle that results from unapplying the specified projective transform.

## Declaration

```swift
func unapplying(_ transform: ProjectiveTransform3D) -> Rect3D
```

## Parameters

- `transform`: The projective transform that the function unapplies to the rectangle.

<a id="return-value"></a>

## Return Value

The rectangle that results from unapplying the specified projective transform.

## See Also

### Transforming a 3D rectangle structure

- [applying(\_:)](applying%28__%29-3qdiy.md): Returns a rectangle that results from applying the specified pose.
- [applying(\_:)](applying%28__%29-5hnif.md): Returns a rectangle that’s transformed by the specified scaled pose.
- [applying(\_:)](applying%28__%29-5hnif.md): Returns a rectangle that’s transformed by the specified scaled pose.
- [rotated(by:around:)](rotated%28by_around_%29-3ih62.md): Returns a rectangle that results from applying the specified rotation around a pivot point.
- [rotated(by:around:)](rotated%28by_around_%29-8g1c9.md): Returns a rectangle that results from rotating with the specified quaternion around a pivot point.
- [scaledBy(x:y:z:)](scaledby%28x_y_z_%29.md): Returns a rectangle that results from scaling with the specified double-precision values.
- [sheared(\_:)](sheared%28__%29.md): Returns a rectangle that results from shearing over an axis by shear factors for the other two axes.
- [unapplying(\_:)](unapplying%28__%29-1pbfn.md): Returns a rectangle that’s transformed by the inverse of the specified scaled pose.
- [unapplying(\_:)](unapplying%28__%29-2he5i.md): Returns a rectangle that results from unapplying the specified pose.
- [unapplying(\_:)](unapplying%28__%29-7eglq.md): Returns a rectangle that results from unapplying the specified affine transform.
