> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/blendtreeanimation/bindtarget](https://developer.apple.com/documentation/realitykit/blendtreeanimation/bindtarget)

# bindTarget

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A textual name that identifies the particular property that animates.

## Declaration

```swift
var bindTarget: BindTarget { get set }
```

## See Also

### Configuring the animation

- [root](root.md): The first node in a tree of animations.
- [name](name.md): A textual name for the animation.
- [blendLayer](blendlayer.md): The order in which the framework composites the animation.
- [isAdditive](isadditive.md): A Boolean value that indicates whether the animation builds on the current state of the target entity or resets the state before running.
