> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/pose3d/applying(_:)](https://developer.apple.com/documentation/spatial/pose3d/applying(_:))

# applying(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a pose that’s transformed by the specified projective transform.

## Declaration

```swift
func applying(_ transform: ProjectiveTransform3D) -> Pose3D
```

## Parameters

- `transform`: The projective transform.

<a id="discussion"></a>

## Discussion

- Returns The transformed pose.

This function applies the transform to the pose.
