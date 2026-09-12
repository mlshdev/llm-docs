> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinedescriptor/stencilattachmentpixelformat](https://developer.apple.com/documentation/metal/mtlrenderpipelinedescriptor/stencilattachmentpixelformat)

# stencilAttachmentPixelFormat (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The pixel format of the attachment that stores stencil data.

## Declaration

```swift
var stencilAttachmentPixelFormat: MTLPixelFormat { get set }
```

<a id="discussion"></a>

## Discussion

By default, the pixel format of the rendering pipeline state for each attachment is `MTLPixelFormatInvalid`.

## See Also

### Specifying rendering pipeline state

- [reset()](reset%28%29.md): Specifies the default rendering pipeline state values for the descriptor.
- [colorAttachments](colorattachments.md): An array of attachments that store color data.
- [depthAttachmentPixelFormat](depthattachmentpixelformat.md): The pixel format of the attachment that stores depth data.

# stencilAttachmentPixelFormat (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The pixel format of the attachment that stores stencil data.

## Declaration

```objectivec
@property (nonatomic) MTLPixelFormat stencilAttachmentPixelFormat;
```

<a id="discussion"></a>

## Discussion

By default, the pixel format of the rendering pipeline state for each attachment is `MTLPixelFormatInvalid`.

## See Also

### Specifying rendering pipeline state

- [reset](reset%28%29.md): Specifies the default rendering pipeline state values for the descriptor.
- [colorAttachments](colorattachments.md): An array of attachments that store color data.
- [depthAttachmentPixelFormat](depthattachmentpixelformat.md): The pixel format of the attachment that stores depth data.
