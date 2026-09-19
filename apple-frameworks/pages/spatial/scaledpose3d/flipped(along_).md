> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/scaledpose3d/flipped(along:)

# flipped(along:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS · watchOS 11.0+

Returns a scaled pose that results from flipping it along the specified axis.

## Declaration

```swift
func flipped(along axis: Axis3D) -> ScaledPose3D
```

## See Also

### Transforming a 3D scaled-pose structure

- [flip(along:)](flip%28along_%29.md): Flips a scaled pose along the specified axis.
- [rotated(by:)](rotated%28by_%29-5mxbl.md): Returns a scaled pose that results from rotating with the specified quaternion.
- [rotated(by:)](rotated%28by_%29-x75b.md): Returns a scaled pose that results from applying the specified rotation.
- [concatenating(\_:)](concatenating%28__%29-c38k.md): Returns a scaled pose that represents the concatenation of two scaled poses.
- [concatenating(\_:)](concatenating%28__%29-2xzgs.md): Returns a scaled pose that represents the concatenation of two poses.
