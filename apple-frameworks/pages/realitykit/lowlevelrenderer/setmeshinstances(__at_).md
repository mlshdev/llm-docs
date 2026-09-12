> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/setmeshinstances(_:at:)](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/setmeshinstances(_:at:))

# setMeshInstances(\_:at:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Assigns a mesh instance array to the given slot index.

## Declaration

```swift
final func setMeshInstances(_ meshInstances: LowLevelMeshInstanceArray?, at index: Int) throws(LowLevelRendererError)
```

## Parameters

- `meshInstances`: The mesh instance array to assign, or `nil` to clear the slot.
- `index`: The zero-based slot index to assign to. Must be within `0..<meshInstancesArrayCount`.

<a id="discussion"></a>

## Discussion

> **Throws**

> [LowLevelRendererError](../lowlevelrenderererror.md) if the renderer’s render target descriptor is not contained in the array’s descriptor set.

## See Also

### Managing mesh instances

- [meshInstances(at:)](meshinstances%28at_%29.md): Returns the mesh instance array at the given slot index, or `nil` if the slot is unoccupied.
- [meshInstancesArrayCount](meshinstancesarraycount.md): The number of mesh instance array slots.
