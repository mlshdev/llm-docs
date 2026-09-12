> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvbuffersetattachment(_:_:_:_:)](https://developer.apple.com/documentation/corevideo/cvbuffersetattachment(_:_:_:_:))

# CVBufferSetAttachment(\_:\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets or adds an attachment to a Core Video buffer.

## Declaration

```swift
func CVBufferSetAttachment(_ buffer: CVBuffer, _ key: CFString, _ value: CFTypeRef, _ attachmentMode: CVAttachmentMode)
```

## Parameters

- `buffer`: The buffer on which to add or set an attachment.
- `key`: A string that identifies the attachment, which can be of any [CFTypeRef](../corefoundation/cftyperef.md). See [CVBuffer Attachment Keys](cvbuffer-attachment-keys.md) and [Image Buffer Attachment Keys](image-buffer-attachment-keys.md) for predefined values.
- `value`: The attachment in the form of a Core Foundation object. If this parameter is `NULL`, the function returns an error.
- `attachmentMode`: The attachment mode for this attachment. See [CVAttachmentMode](cvattachmentmode.md) for possible values. Any given attachment key may exist in only one mode at a time.

<a id="Discussion"></a>

## Discussion

You can attach any Core Foundation object to a Core Video buffer to store additional information.

If it doesn’t exist for the buffer object, the system adds a new attachment. If the key does exist, the system replaces the existing attachment. In both cases, the system increases the retain count of the attachment.

You can also set attachments when creating a buffer by specifying them in the [kCVBufferPropagatedAttachmentsKey](kcvbufferpropagatedattachmentskey.md) or [kCVBufferNonPropagatedAttachmentsKey](kcvbuffernonpropagatedattachmentskey.md) attributes.

To retrieve attachments, use the [CVBufferGetAttachment(\_:\_:\_:)](cvbuffergetattachment%28______%29.md) or [CVBufferGetAttachments(\_:\_:)](cvbuffergetattachments%28____%29.md) functions.

## See Also

### Working with attachments

- [CVBufferHasAttachment(\_:\_:)](cvbufferhasattachment%28____%29.md): Returns a Boolean value that indicates whether a Core Video buffer contains a specified attachment.
- [CVBufferCopyAttachment(\_:\_:\_:)](cvbuffercopyattachment%28______%29.md): Returns a copy of an attachment from a Core Video buffer.
- [CVBufferCopyAttachments(\_:\_:)](cvbuffercopyattachments%28____%29.md): Returns a copy of all attachments from a Core Video buffer.
- [CVBufferSetAttachments(\_:\_:\_:)](cvbuffersetattachments%28______%29.md): Sets a dictionary of attachments on a Core Video buffer.
- [CVBufferPropagateAttachments(\_:\_:)](cvbufferpropagateattachments%28____%29.md): Copies all attachments that Core Video can propagate from one buffer to another.
- [CVBufferRemoveAttachment(\_:\_:)](cvbufferremoveattachment%28____%29.md): Removes the attachment you specify from a Core Video buffer.
- [CVBufferRemoveAllAttachments(\_:)](cvbufferremoveallattachments%28__%29.md): Removes all attachments from a Core Video buffer.
- [CVBufferGetAttachment(\_:\_:\_:)](cvbuffergetattachment%28______%29.md): Deprecated. Retrieves a specific attachment of a Core Video buffer.
- [CVBufferGetAttachments(\_:\_:)](cvbuffergetattachments%28____%29.md): Deprecated. Retrieves all attachments of a Core Video buffer.

# CVBufferSetAttachment (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets or adds an attachment to a Core Video buffer.

## Declaration

```objectivec
extern void CVBufferSetAttachment(CVBufferRef buffer, CFStringRef key, CFTypeRef value, CVAttachmentMode attachmentMode);
```

## Parameters

- `buffer`: The buffer on which to add or set an attachment.
- `key`: A string that identifies the attachment, which can be of any [CFTypeRef](../corefoundation/cftyperef.md). See [CVBuffer Attachment Keys](cvbuffer-attachment-keys.md) and [Image Buffer Attachment Keys](image-buffer-attachment-keys.md) for predefined values.
- `value`: The attachment in the form of a Core Foundation object. If this parameter is `NULL`, the function returns an error.
- `attachmentMode`: The attachment mode for this attachment. See [CVAttachmentMode](cvattachmentmode.md) for possible values. Any given attachment key may exist in only one mode at a time.

<a id="Discussion"></a>

## Discussion

You can attach any Core Foundation object to a Core Video buffer to store additional information.

If it doesn’t exist for the buffer object, the system adds a new attachment. If the key does exist, the system replaces the existing attachment. In both cases, the system increases the retain count of the attachment.

You can also set attachments when creating a buffer by specifying them in the [kCVBufferPropagatedAttachmentsKey](kcvbufferpropagatedattachmentskey.md) or [kCVBufferNonPropagatedAttachmentsKey](kcvbuffernonpropagatedattachmentskey.md) attributes.

To retrieve attachments, use the [CVBufferGetAttachment](cvbuffergetattachment%28______%29.md) or [CVBufferGetAttachments](cvbuffergetattachments%28____%29.md) functions.

## See Also

### Working with attachments

- [CVBufferHasAttachment](cvbufferhasattachment%28____%29.md): Returns a Boolean value that indicates whether a Core Video buffer contains a specified attachment.
- [CVBufferCopyAttachment](cvbuffercopyattachment%28______%29.md): Returns a copy of an attachment from a Core Video buffer.
- [CVBufferCopyAttachments](cvbuffercopyattachments%28____%29.md): Returns a copy of all attachments from a Core Video buffer.
- [CVBufferSetAttachments](cvbuffersetattachments%28______%29.md): Sets a dictionary of attachments on a Core Video buffer.
- [CVBufferPropagateAttachments](cvbufferpropagateattachments%28____%29.md): Copies all attachments that Core Video can propagate from one buffer to another.
- [CVBufferRemoveAttachment](cvbufferremoveattachment%28____%29.md): Removes the attachment you specify from a Core Video buffer.
- [CVBufferRemoveAllAttachments](cvbufferremoveallattachments%28__%29.md): Removes all attachments from a Core Video buffer.
- [CVBufferGetAttachment](cvbuffergetattachment%28______%29.md): Deprecated. Retrieves a specific attachment of a Core Video buffer.
- [CVBufferGetAttachments](cvbuffergetattachments%28____%29.md): Deprecated. Retrieves all attachments of a Core Video buffer.
