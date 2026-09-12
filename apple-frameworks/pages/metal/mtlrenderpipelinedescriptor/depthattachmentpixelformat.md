> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinedescriptor/depthattachmentpixelformat](https://developer.apple.com/documentation/metal/mtlrenderpipelinedescriptor/depthattachmentpixelformat)

# depthAttachmentPixelFormat (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The pixel format of the attachment that stores depth data.

## Declaration

```swift
var depthAttachmentPixelFormat: MTLPixelFormat { get set }
```

<a id="discussion"></a>

## Discussion

By default, the pixel format of the rendering pipeline state for each attachment is `MTLPixelFormatInvalid`.

## See Also

### Specifying rendering pipeline state

- [reset()](reset%28%29.md): Specifies the default rendering pipeline state values for the descriptor.
- [colorAttachments](colorattachments.md): An array of attachments that store color data.
- [stencilAttachmentPixelFormat](stencilattachmentpixelformat.md): The pixel format of the attachment that stores stencil data.

# depthAttachmentPixelFormat (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The pixel format of the attachment that stores depth data.

## Declaration

```objectivec
@property (nonatomic) MTLPixelFormat depthAttachmentPixelFormat;
```

<a id="discussion"></a>

## Discussion

By default, the pixel format of the rendering pipeline state for each attachment is `MTLPixelFormatInvalid`.

## See Also

### Specifying rendering pipeline state

- [reset](reset%28%29.md): Specifies the default rendering pipeline state values for the descriptor.
- [colorAttachments](colorattachments.md): An array of attachments that store color data.
- [stencilAttachmentPixelFormat](stencilattachmentpixelformat.md): The pixel format of the attachment that stores stencil data.
