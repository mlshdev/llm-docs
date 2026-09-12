> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/renderstate/render(meshinstancesarrayindex:meshinstanceindex:)](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/renderstate/render(meshinstancesarrayindex:meshinstanceindex:))

# render(meshInstancesArrayIndex:meshInstanceIndex:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Encodes a draw call for a single mesh instance.

## Declaration

```swift
func render(meshInstancesArrayIndex: Int, meshInstanceIndex: Int)
```

## Parameters

- `meshInstancesArrayIndex`: The slot index of the mesh instance array that contains the instance.
- `meshInstanceIndex`: The index of the mesh instance within that array.

## See Also

### Rendering mesh instances

- [render(meshInstancesArrayIndex:range:)](render%28meshinstancesarrayindex_range_%29.md): Encodes draw calls for a contiguous range of mesh instances.
- [reset()](reset%28%29.md): Resets the render encoder state to renderer defaults.
