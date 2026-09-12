> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/pose3d/flip(along:)](https://developer.apple.com/documentation/spatial/pose3d/flip(along:))

# flip(along:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Flips a pose along the specified axis.

## Declaration

```swift
mutating func flip(along axis: Axis3D)
```

## Parameters

- `axis`: An axis structure that specifies the flip axis.

## See Also

### Transforming a 3D pose structure

- [concatenating(\_:)](concatenating%28__%29-4esra.md): Returns a pose that represents the concatenation of a scaled pose and a pose.
- [concatenating(\_:)](concatenating%28__%29-6dd2s.md): Returns a pose that represents the concatenation of two poses.
- [flipped(along:)](flipped%28along_%29.md): Returns a pose that results from flipping it along the specified axis.
- [rotated(by:)](rotated%28by_%29-10k2a.md): Returns a pose that results from rotating with the specified quaternion.
- [rotated(by:)](rotated%28by_%29-377u.md): Returns a pose that results from applying the specified rotation.
