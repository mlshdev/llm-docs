> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/pose/init(from:)-8rvl5

# init(from:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a pose from a dictionary of joint keypoints.

## Declaration

```swift
init(from points: [JointKey : JointPoint])
```

## Parameters

- `points`: A dictionary of pose joint keypoints, where keys are joint names and values are joint points.

## See Also

### Creating a pose

- [init(\_:)](init%28__%29.md): Creates a pose from a body or hand pose observation.
