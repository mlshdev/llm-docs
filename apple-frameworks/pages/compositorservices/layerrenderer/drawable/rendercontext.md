> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/rendercontext](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/rendercontext)

# LayerRenderer.Drawable.RenderContext

**Framework:** Compositor Services  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 26.0+

An object the compositer uses for rendering all effects associated with a layer renderer drawable.

## Declaration

```swift
struct RenderContext
```

<a id="overview"></a>

## Overview

A `RenderContext` is required for apps to render using the progressive immersion style.

## Topics

### Rendering with Metal 4

- [drawMaskOnStencilAttachment(commandEncoder:value:)](rendercontext/drawmaskonstencilattachment%28commandencoder_value_%29-7npim.md): Store the value parameter in the stencil texture in the pixels that the Compositor displays onscreen.
- [endEncoding(commandEncoder:)](rendercontext/endencoding%28commandencoder_%29-2l6lk.md): Finish encoding the render context.

### Rendering with Metal

- [drawMaskOnStencilAttachment(commandEncoder:value:)](rendercontext/drawmaskonstencilattachment%28commandencoder_value_%29-65i67.md): Store the value parameter in the stencil texture in the pixels that the compositor will display onscreen.
- [endEncoding(commandEncoder:)](rendercontext/endencoding%28commandencoder_%29-4hx0m.md): Finish encoding the render context.

### Initializers

- [init()](rendercontext/init%28%29.md): Creates a new render context.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Adding a render context

- [addRenderContext(commandBuffer:)](addrendercontext%28commandbuffer_%29.md): Adds and returns a render context to a `LayerRenderer.Drawable` providing a metal command buffer.
- [addRenderContext()](addrendercontext%28%29.md): Adds and returns a render context to a `LayerRenderer.Drawable` that draws any content required by the compositor.
