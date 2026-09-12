> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/renderstate](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/renderstate)

# LowLevelRenderer.RenderState

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The per-frame render state passed to the `render(using:_:)` callback.

## Declaration

```swift
struct RenderState
```

<a id="overview"></a>

## Overview

`RenderState` is non-copyable and non-escapable; it is only valid for the duration of the `render(using:_:)` callback. Use its methods to encode individual draw calls, or access `encoder` to issue custom Metal commands between draws.

## Topics

### Accessing the encoder

- [encoder](renderstate/encoder.md): The underlying Metal render command encoder for this render pass.

### Rendering mesh instances

- [render(meshInstancesArrayIndex:meshInstanceIndex:)](renderstate/render%28meshinstancesarrayindex_meshinstanceindex_%29.md): Encodes a draw call for a single mesh instance.
- [render(meshInstancesArrayIndex:range:)](renderstate/render%28meshinstancesarrayindex_range_%29.md): Encodes draw calls for a contiguous range of mesh instances.
- [reset()](renderstate/reset%28%29.md): Resets the render encoder state to renderer defaults.

## See Also

### Rendering a frame

- [render(using:\_:)](render%28using___%29.md): Encodes draw calls for the frame into the given command buffer using a caller-controlled render callback.
- [LowLevelRenderer.Resources](resources.md): Prepared GPU resources for a renderer.
