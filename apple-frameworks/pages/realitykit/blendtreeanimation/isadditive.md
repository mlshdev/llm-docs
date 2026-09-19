> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/blendtreeanimation/isadditive

# isAdditive

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A Boolean value that indicates whether the animation builds on the current state of the target entity or resets the state before running.

## Declaration

```swift
var isAdditive: Bool { get set }
```

## See Also

### Configuring the animation

- [root](root.md): The first node in a tree of animations.
- [name](name.md): A textual name for the animation.
- [bindTarget](bindtarget.md): A textual name that identifies the particular property that animates.
- [blendLayer](blendlayer.md): The order in which the framework composites the animation.
