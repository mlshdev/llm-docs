> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/blendtreeanimation/blendlayer](https://developer.apple.com/documentation/realitykit/blendtreeanimation/blendlayer)

# blendLayer

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The order in which the framework composites the animation.

## Declaration

```swift
var blendLayer: Int32 { get set }
```

<a id="discussion"></a>

## Discussion

The framework applies multiple animations on the same target in ascending order of this property’s value. Animations in a lower layer run before animations in a higher layer. Animations that share the same value apply in the order that they execute.

## See Also

### Configuring the animation

- [root](root.md): The first node in a tree of animations.
- [name](name.md): A textual name for the animation.
- [bindTarget](bindtarget.md): A textual name that identifies the particular property that animates.
- [isAdditive](isadditive.md): A Boolean value that indicates whether the animation builds on the current state of the target entity or resets the state before running.
