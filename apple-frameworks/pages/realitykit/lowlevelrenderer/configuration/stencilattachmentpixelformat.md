> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/configuration/stencilattachmentpixelformat](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/configuration/stencilattachmentpixelformat)

# stencilAttachmentPixelFormat

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The pixel format of the stencil attachment in the render pass the renderer encodes into.

## Declaration

```swift
var stencilAttachmentPixelFormat: MTLPixelFormat { get }
```

<a id="discussion"></a>

## Discussion

Relevant when the render pass uses a separate stencil attachment rather than a packed depth-stencil format. Use this format when compiling your own `MTLRenderPipelineState` objects for draw calls issued inside the `render(using:_:)` callback.

## See Also

### Configuring pixel formats

- [colorAttachmentPixelFormats](colorattachmentpixelformats.md): The pixel formats of the color attachments in the render pass the renderer encodes into.
- [depthAttachmentPixelFormat](depthattachmentpixelformat.md): The pixel format of the depth attachment in the render pass the renderer encodes into.
