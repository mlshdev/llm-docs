> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinedescriptor/colorattachments](https://developer.apple.com/documentation/metal/mtlrenderpipelinedescriptor/colorattachments)

# colorAttachments (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An array of attachments that store color data.

## Declaration

```swift
var colorAttachments: MTLRenderPipelineColorAttachmentDescriptorArray { get }
```

## See Also

### Specifying rendering pipeline state

- [reset()](reset%28%29.md): Specifies the default rendering pipeline state values for the descriptor.
- [depthAttachmentPixelFormat](depthattachmentpixelformat.md): The pixel format of the attachment that stores depth data.
- [stencilAttachmentPixelFormat](stencilattachmentpixelformat.md): The pixel format of the attachment that stores stencil data.

# colorAttachments (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An array of attachments that store color data.

## Declaration

```objectivec
@property (readonly) MTLRenderPipelineColorAttachmentDescriptorArray * colorAttachments;
```

## See Also

### Specifying rendering pipeline state

- [reset](reset%28%29.md): Specifies the default rendering pipeline state values for the descriptor.
- [depthAttachmentPixelFormat](depthattachmentpixelformat.md): The pixel format of the attachment that stores depth data.
- [stencilAttachmentPixelFormat](stencilattachmentpixelformat.md): The pixel format of the attachment that stores stencil data.
