> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationstate/storeanimatedjoints(transforms:jointindex:)](https://developer.apple.com/documentation/realitykit/animationstate/storeanimatedjoints(transforms:jointindex:))

# storeAnimatedJoints(transforms:jointIndex:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Stores a subset of animated joints.

## Declaration

```swift
@discardableResult func storeAnimatedJoints(transforms: [Transform], jointIndex: Int) -> Bool
```

<a id="discussion"></a>

## Discussion

See [storeAnimatedValue(\_:)](../animationstateprotocol/storeanimatedvalue%28__%29.md) for more about returning an animation result to the animation system.
