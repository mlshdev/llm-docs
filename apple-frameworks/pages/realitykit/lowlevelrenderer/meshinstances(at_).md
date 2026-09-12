> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/meshinstances(at:)](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/meshinstances(at:))

# meshInstances(at:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the mesh instance array at the given slot index, or `nil` if the slot is unoccupied.

## Declaration

```swift
final func meshInstances(at index: Int) -> LowLevelMeshInstanceArray?
```

## Parameters

- `index`: The zero-based slot index to retrieve.

<a id="return-value"></a>

## Return Value

The [LowLevelMeshInstanceArray](../lowlevelmeshinstancearray.md) at `index`, or `nil` if the slot is unoccupied.

## See Also

### Managing mesh instances

- [setMeshInstances(\_:at:)](setmeshinstances%28__at_%29.md): Assigns a mesh instance array to the given slot index.
- [meshInstancesArrayCount](meshinstancesarraycount.md): The number of mesh instance array slots.
