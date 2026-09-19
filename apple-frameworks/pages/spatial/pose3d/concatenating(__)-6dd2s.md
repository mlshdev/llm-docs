> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/pose3d/concatenating(_:)-6dd2s

# concatenating(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns a pose that represents the concatenation of two poses.

## Declaration

```swift
func concatenating(_ transform: Pose3D) -> Pose3D
```

## Parameters

- `transform`: The second pose.

## See Also

### Transforming a 3D pose structure

- [concatenating(\_:)](concatenating%28__%29-4esra.md): Returns a pose that represents the concatenation of a scaled pose and a pose.
- [flip(along:)](flip%28along_%29.md): Flips a pose along the specified axis.
- [flipped(along:)](flipped%28along_%29.md): Returns a pose that results from flipping it along the specified axis.
- [rotated(by:)](rotated%28by_%29-10k2a.md): Returns a pose that results from rotating with the specified quaternion.
- [rotated(by:)](rotated%28by_%29-377u.md): Returns a pose that results from applying the specified rotation.
