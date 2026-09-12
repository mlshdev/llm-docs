> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/blend(sources:name:isadditive:)](https://developer.apple.com/documentation/realitykit/blend(sources:name:isadditive:))

# blend(sources:name:isAdditive:)

**Framework:** RealityKit  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Combines the animations that result from the individual blend-tree nodes of the given array to a single blend-tree node.

## Declaration

```swift
func blend(sources: [any BlendTreeNode], name: String = "", isAdditive: Bool = false) -> any BlendTreeNode
```

## Parameters

- `sources`: The blend-tree nodes to combine.
- `name`: A unique name for the combined node.
- `isAdditive`: A Boolean value that indicates whether the animation builds on the current state of the target entity, or resets the state before running.

<a id="return-value"></a>

## Return Value

A blend-tree node that combines the given animations.

## See Also

### Blending animations

- [blend(\_:\_:name:isAdditive:)](blend%28____name_isadditive_%29.md): Combines the animations that result from two blend-tree nodes into a single blend-tree node.
