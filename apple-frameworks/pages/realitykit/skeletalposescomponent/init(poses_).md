> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/skeletalposescomponent/init(poses:)](https://developer.apple.com/documentation/realitykit/skeletalposescomponent/init(poses:))

# init(poses:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a component value with the provided poses.

## Declaration

```swift
init(poses: [SkeletalPose])
```

## Parameters

- `poses`: The pose values, arranged in any order of your choosing.

<a id="discussion"></a>

## Discussion

> **Warning**

> When multiple poses share the same identifier, only the first one is accessible using its identifier.
