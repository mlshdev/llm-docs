> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/render(using:_:)](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/render(using:_:))

# render(using:\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Encodes draw calls for the frame into the given command buffer using a caller-controlled render callback.

## Declaration

```swift
final func render(using commandBuffer: any MTLCommandBuffer, _ callback: @_lifetime(0: copy 0) (inout LowLevelRenderer.RenderState) -> ())
```

## Parameters

- `commandBuffer`: The Metal command buffer to encode draw calls into.
- `callback`: A closure that receives a `RenderState` and issues draw calls.

<a id="discussion"></a>

## Discussion

Inside the callback, call `state.render(meshInstancesArrayIndex:meshInstanceIndex:)` or `state.render(meshInstancesArrayIndex:range:)` to encode draw calls in any order. You control which instances are drawn and in what sequence — use `sortMeshInstances(_:indices:configuration:)` for built-in depth sorting, `cullMeshInstances(_:indices:configuration:)` to remove instances outside the view frustum before drawing, or supply your own ordering.

You are responsible for committing the command buffer after this call returns.

## See Also

### Rendering a frame

- [LowLevelRenderer.RenderState](renderstate.md): The per-frame render state passed to the `render(using:_:)` callback.
- [LowLevelRenderer.Resources](resources.md): Prepared GPU resources for a renderer.
