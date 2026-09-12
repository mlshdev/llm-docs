> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/blend(_:_:name:isadditive:)](https://developer.apple.com/documentation/realitykit/blend(_:_:name:isadditive:))

# blend(\_:\_:name:isAdditive:)

**Framework:** RealityKit  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Combines the animations that result from two blend-tree nodes into a single blend-tree node.

## Declaration

```swift
func blend(_ x: any BlendTreeNode, _ y: any BlendTreeNode, name: String = "", isAdditive: Bool = false) -> any BlendTreeNode
```

## Parameters

- `x`: A blend-tree node whose animation combines with the second animation argument.
- `y`: A blend-tree node whose animation combines with the first animation argument.
- `name`: A unique name for the combined node.
- `isAdditive`: A Boolean value that indicates whether the animation builds on the current state of the target entity, or resets the state before running.

<a id="return-value"></a>

## Return Value

A blend-tree node that combines the given animations.

## See Also

### Blending animations

- [blend(sources:name:isAdditive:)](blend%28sources_name_isadditive_%29.md): Combines the animations that result from the individual blend-tree nodes of the given array to a single blend-tree node.
