> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/skeletalpose/jointtransforms](https://developer.apple.com/documentation/realitykit/skeletalpose/jointtransforms)

# jointTransforms

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The transformations of the joints in the pose.

## Declaration

```swift
var jointTransforms: JointTransforms
```

<a id="discussion"></a>

## Discussion

Each joint transformation has a corresponding name in [jointNames](jointnames.md) at the same index.

A new value with element count not matching the element count  of [jointNames](jointnames.md) is accepted but invokes special handling when the [SkeletalPosesComponent](../skeletalposescomponent.md) is set on an entity.
