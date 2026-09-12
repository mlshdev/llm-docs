> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/renderstate/reset()](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/renderstate/reset())

# reset()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Resets the render encoder state to renderer defaults.

## Declaration

```swift
func reset()
```

<a id="discussion"></a>

## Discussion

Call this after any custom Metal commands that modify the depth stencil state, cull mode, viewports, or scissor rects, to restore the renderer’s expected state before the next draw call.

## See Also

### Rendering mesh instances

- [render(meshInstancesArrayIndex:meshInstanceIndex:)](render%28meshinstancesarrayindex_meshinstanceindex_%29.md): Encodes a draw call for a single mesh instance.
- [render(meshInstancesArrayIndex:range:)](render%28meshinstancesarrayindex_range_%29.md): Encodes draw calls for a contiguous range of mesh instances.
