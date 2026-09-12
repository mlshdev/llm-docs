> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/skeletalposeset/default](https://developer.apple.com/documentation/realitykit/skeletalposeset/default)

# default

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Accesses the first skeletal pose.

## Declaration

```swift
var `default`: SkeletalPoseSet.Element? { get set }
```

<a id="discussion"></a>

## Discussion

Equivalent to accessing [jointNames](../hasmodel/jointnames.md) and [jointTransforms](../hasmodel/jointtransforms.md) if used from an entity with a skeletal model.
