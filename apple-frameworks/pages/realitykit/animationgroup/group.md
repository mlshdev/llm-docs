> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationgroup/group](https://developer.apple.com/documentation/realitykit/animationgroup/group)

# group

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A collection of animations to run.

## Declaration

```swift
var group: [any AnimationDefinition] { get set }
```

## See Also

### Configuring the group

- [name](name.md): A textual name for the group.
- [bindTarget](bindtarget.md): A textual name that refers to a property on which to run the grouped animations.
- [blendLayer](blendlayer.md): The order in which the framework composites the animation.
- [additive](additive.md): A Boolean value that indicates whether the animation builds on the current state of the target entity or resets the state before running.
