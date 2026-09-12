> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshresource/skeleton/joint/restposetransform](https://developer.apple.com/documentation/realitykit/meshresource/skeleton/joint/restposetransform)

# restPoseTransform

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The local transform of this joint in skeleton’s rest pose, specified relative to this joint’s parent (or relative to model space, if this joint has no parent).

## Declaration

```swift
var restPoseTransform: Transform
```

<a id="discussion"></a>

## Discussion

The rest pose of a skeleton is used when a joint is not otherwise animated.
