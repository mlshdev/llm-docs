> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/pose3d/concatenating(_:)-4esra](https://developer.apple.com/documentation/spatial/pose3d/concatenating(_:)-4esra)

# concatenating(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS · watchOS 11.0+

Returns a pose that represents the concatenation of a scaled pose and a pose.

## Declaration

```swift
func concatenating(_ transform: ScaledPose3D) -> ScaledPose3D
```

## See Also

### Transforming a 3D pose structure

- [concatenating(\_:)](concatenating%28__%29-6dd2s.md): Returns a pose that represents the concatenation of two poses.
- [flip(along:)](flip%28along_%29.md): Flips a pose along the specified axis.
- [flipped(along:)](flipped%28along_%29.md): Returns a pose that results from flipping it along the specified axis.
- [rotated(by:)](rotated%28by_%29-10k2a.md): Returns a pose that results from rotating with the specified quaternion.
- [rotated(by:)](rotated%28by_%29-377u.md): Returns a pose that results from applying the specified rotation.
