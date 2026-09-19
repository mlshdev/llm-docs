> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelrenderer/renderstate/render(meshinstancesarrayindex:range:)

# render(meshInstancesArrayIndex:range:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Encodes draw calls for a contiguous range of mesh instances.

## Declaration

```swift
func render(meshInstancesArrayIndex: Int, range: Range<Int>)
```

## Parameters

- `meshInstancesArrayIndex`: The slot index of the mesh instance array that contains the instances.
- `range`: The range of mesh instance indices to draw.

## See Also

### Rendering mesh instances

- [render(meshInstancesArrayIndex:meshInstanceIndex:)](render%28meshinstancesarrayindex_meshinstanceindex_%29.md): Encodes a draw call for a single mesh instance.
- [reset()](reset%28%29.md): Resets the render encoder state to renderer defaults.
