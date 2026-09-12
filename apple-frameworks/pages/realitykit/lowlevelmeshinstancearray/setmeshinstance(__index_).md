> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshinstancearray/setmeshinstance(_:index:)](https://developer.apple.com/documentation/realitykit/lowlevelmeshinstancearray/setmeshinstance(_:index:))

# setMeshInstance(\_:index:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Assigns a mesh instance to the slot at the given index, or clears the slot if the instance is nil.

## Declaration

```swift
final func setMeshInstance(_ newElement: LowLevelMeshInstanceArray.Element, index: Int) throws(LowLevelRenderContextError)
```

## Parameters

- `newElement`: The mesh instance to assign, or `nil` to clear the slot.
- `index`: The slot index to assign to.

<a id="discussion"></a>

## Discussion

The `index` must be at least `0` and less than `count`.

> **Throws**

> [LowLevelRenderContextError](../lowlevelrendercontexterror.md) if the render target descriptors of the array are not a subset of the render target descriptors of the mesh instance’s pipeline state.

## See Also

### Setting mesh instances

- [count](count.md): The number of instance slots in this array.
