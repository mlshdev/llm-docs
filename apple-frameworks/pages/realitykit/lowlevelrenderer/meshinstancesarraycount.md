> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/meshinstancesarraycount](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/meshinstancesarraycount)

# meshInstancesArrayCount

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The number of mesh instance array slots.

## Declaration

```swift
final var meshInstancesArrayCount: Int { get set }
```

<a id="discussion"></a>

## Discussion

Increase this value before calling `setMeshInstances(_:at:)` to assign arrays to slots. Setting this to a smaller value removes trailing slots.

## See Also

### Managing mesh instances

- [meshInstances(at:)](meshinstances%28at_%29.md): Returns the mesh instance array at the given slot index, or `nil` if the slot is unoccupied.
- [setMeshInstances(\_:at:)](setmeshinstances%28__at_%29.md): Assigns a mesh instance array to the given slot index.
