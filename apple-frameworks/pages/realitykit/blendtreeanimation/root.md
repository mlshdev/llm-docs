> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/blendtreeanimation/root](https://developer.apple.com/documentation/realitykit/blendtreeanimation/root)

# root

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The first node in a tree of animations.

## Declaration

```swift
var root: any BlendTreeNode { get set }
```

<a id="discussion"></a>

## Discussion

This property defines the node that represents the root of a blend tree. If you assign this property a [BlendTreeBlendNode](../blendtreeblendnode.md) instance, the root branches for every member you add to the instance’s [sources](../blendtreeblendnode/sources.md) property.

If you define a [BlendTreeSourceNode](../blendtreesourcenode.md) instance to this property, the tree contains a single animation, which blends with no other animations.

## See Also

### Configuring the animation

- [name](name.md): A textual name for the animation.
- [bindTarget](bindtarget.md): A textual name that identifies the particular property that animates.
- [blendLayer](blendlayer.md): The order in which the framework composites the animation.
- [isAdditive](isadditive.md): A Boolean value that indicates whether the animation builds on the current state of the target entity or resets the state before running.
