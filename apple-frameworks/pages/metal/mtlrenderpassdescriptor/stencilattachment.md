> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpassdescriptor/stencilattachment](https://developer.apple.com/documentation/metal/mtlrenderpassdescriptor/stencilattachment)

# stencilAttachment (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

State information for an attachment that stores stencil data.

## Declaration

```swift
@NSCopying var stencilAttachment: MTLRenderPassStencilAttachmentDescriptor! { get set }
```

## See Also

### Specifying the attachments for a rendering pass

- [colorAttachments](colorattachments.md): An array of state information for attachments that store color data.
- [depthAttachment](depthattachment.md): State information for an attachment that stores depth data.

# stencilAttachment (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

State information for an attachment that stores stencil data.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) MTLRenderPassStencilAttachmentDescriptor * stencilAttachment;
```

## See Also

### Specifying the attachments for a rendering pass

- [colorAttachments](colorattachments.md): An array of state information for attachments that store color data.
- [depthAttachment](depthattachment.md): State information for an attachment that stores depth data.
