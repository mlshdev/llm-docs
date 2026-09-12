> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/point3d/clamp(to:)](https://developer.apple.com/documentation/spatial/point3d/clamp(to:))

# clamp(to:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Clamps the mutable point to the specified rectangle.

## Declaration

```swift
mutating func clamp(to rect: Rect3D)
```

## Parameters

- `rect`: The rectangle structure that defines the clamp volume.

## See Also

### Transforming a 3D point structure

- [applying(\_:)](applying%28__%29-1f4em.md): Returns a point that’s transformed by the specified scaled pose.
- [applying(\_:)](applying%28__%29-1f4em.md): Returns a point that’s transformed by the specified scaled pose.
- [applying(\_:)](applying%28__%29-7ulww.md): Returns a point that results from applying the specified pose.
- [scale(by:)](scale%28by_%29.md)
- [rotated(by:around:)](rotated%28by_around_%29-4tmfq.md): Returns a point that results from applying a rotation around the specified point.
- [rotated(by:around:)](rotated%28by_around_%29-chuy.md): Returns a point that results from rotating with a quaternion around the specified point.
- [unapplying(\_:)](unapplying%28__%29-5hk6t.md): Returns a point that results from unapplying the specified pose.
- [unapplying(\_:)](unapplying%28__%29-7wdtv.md): Returns a point that’s transformed by the inverse of the specified scaled pose.
- [unapplying(\_:)](unapplying%28__%29-7wdtv.md): Returns a point that’s transformed by the inverse of the specified scaled pose.
