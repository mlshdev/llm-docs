> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/vector3d/uniformlyscaled(by:)](https://developer.apple.com/documentation/spatial/vector3d/uniformlyscaled(by:))

# uniformlyScaled(by:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns the entity uniformly scaled by the specified scalar value.

## Declaration

```swift
func uniformlyScaled(by scale: Double) -> Vector3D
```

## Parameters

- `scale`: The value that defines that scale.

<a id="discussion"></a>

## Discussion

- Returns The scaled vector.

## See Also

### Transforming a vector

- [applying(\_:)](applying%28__%29-1d0mh.md): Returns the vector that results from applying an affine transform to the vector.
- [applying(\_:)](applying%28__%29-5y3xb.md): Returns the vector that results from applying a projective transform to the vector.
- [applying(\_:)](applying%28__%29-4k2qi.md): Returns a vector that results from applying the specified pose.
- [unapplying(\_:)](unapplying%28__%29-6vl3o.md): Returns the vector that results from unapplying an affine transform to the vector.
- [unapplying(\_:)](unapplying%28__%29-8ookb.md): Returns the vector that results from unapplying a projective transform to the vector.
- [unapplying(\_:)](unapplying%28__%29-1gzyd.md): Returns a vector that results from unapplying the specified pose.
- [rotated(by:)](rotated%28by_%29-2gcq4.md): Returns the vector rotated by the specified rotation around the origin.
- [rotated(by:)](rotated%28by_%29-8bwna.md): Returns the vector rotated by the specified quaternion around the origin.
- [scaled(by:)](scaled%28by_%29.md): Returns the vector scaled by the specified size.
- [scaledBy(x:y:z:)](scaledby%28x_y_z_%29.md): Returns a vector that results from scaling with the specified double-precision values.
- [sheared(\_:)](sheared%28__%29.md): Returns a vector that results from shearing over an axis by shear factors for the other two axes.
- [applying(\_:)](applying%28__%29-8fn6a.md): Returns a vector that’s transformed by the specified scaled pose.
- [unapplying(\_:)](unapplying%28__%29-4uxr2.md): Returns a vector that’s transformed by the inverse of the specified scaled pose.
