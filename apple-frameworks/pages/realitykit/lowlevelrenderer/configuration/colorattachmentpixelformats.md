> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/configuration/colorattachmentpixelformats](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/configuration/colorattachmentpixelformats)

# colorAttachmentPixelFormats

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The pixel formats of the color attachments in the render pass the renderer encodes into.

## Declaration

```swift
var colorAttachmentPixelFormats: [MTLPixelFormat] { get }
```

<a id="discussion"></a>

## Discussion

Use these formats when compiling your own `MTLRenderPipelineState` objects for draw calls issued inside the `render(using:_:)` callback.

## See Also

### Configuring pixel formats

- [depthAttachmentPixelFormat](depthattachmentpixelformat.md): The pixel format of the depth attachment in the render pass the renderer encodes into.
- [stencilAttachmentPixelFormat](stencilattachmentpixelformat.md): The pixel format of the stencil attachment in the render pass the renderer encodes into.
