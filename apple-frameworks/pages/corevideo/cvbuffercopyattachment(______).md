> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvbuffercopyattachment(_:_:_:)](https://developer.apple.com/documentation/corevideo/cvbuffercopyattachment(_:_:_:))

# CVBufferCopyAttachment(\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a copy of an attachment from a Core Video buffer.

## Declaration

```swift
func CVBufferCopyAttachment(_ buffer: CVBuffer, _ key: CFString, _ attachmentMode: UnsafeMutablePointer<CVAttachmentMode>?) -> CFTypeRef?
```

## Parameters

- `buffer`: A buffer with an attachment to copy.
- `key`: A string that identifies the attachment, which can be of any [CFTypeRef](../corefoundation/cftyperef.md). See [CVBuffer Attachment Keys](cvbuffer-attachment-keys.md) and [Image Buffer Attachment Keys](image-buffer-attachment-keys.md) for predefined values.
- `attachmentMode`: On output, this value points to the mode of the attachment. See [CVAttachmentMode](cvattachmentmode.md) for possible values. This value is [nil](../objectivec/nil-227m0.md) if the buffer doesn’t define an attachment mode.

<a id="return-value"></a>

## Return Value

The requested attachment, or `nil` if no attachment for the specified key exists.

<a id="Discussion"></a>

## Discussion

This function returns a retained attachment value, which you need to release when you’re done with it.

## See Also

### Working with attachments

- [CVBufferHasAttachment(\_:\_:)](cvbufferhasattachment%28____%29.md): Returns a Boolean value that indicates whether a Core Video buffer contains a specified attachment.
- [CVBufferCopyAttachments(\_:\_:)](cvbuffercopyattachments%28____%29.md): Returns a copy of all attachments from a Core Video buffer.
- [CVBufferSetAttachment(\_:\_:\_:\_:)](cvbuffersetattachment%28________%29.md): Sets or adds an attachment to a Core Video buffer.
- [CVBufferSetAttachments(\_:\_:\_:)](cvbuffersetattachments%28______%29.md): Sets a dictionary of attachments on a Core Video buffer.
- [CVBufferPropagateAttachments(\_:\_:)](cvbufferpropagateattachments%28____%29.md): Copies all attachments that Core Video can propagate from one buffer to another.
- [CVBufferRemoveAttachment(\_:\_:)](cvbufferremoveattachment%28____%29.md): Removes the attachment you specify from a Core Video buffer.
- [CVBufferRemoveAllAttachments(\_:)](cvbufferremoveallattachments%28__%29.md): Removes all attachments from a Core Video buffer.
- [CVBufferGetAttachment(\_:\_:\_:)](cvbuffergetattachment%28______%29.md): Deprecated. Retrieves a specific attachment of a Core Video buffer.
- [CVBufferGetAttachments(\_:\_:)](cvbuffergetattachments%28____%29.md): Deprecated. Retrieves all attachments of a Core Video buffer.

# CVBufferCopyAttachment (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a copy of an attachment from a Core Video buffer.

## Declaration

```objectivec
extern CFTypeRefCVBufferCopyAttachment(CVBufferRef buffer, CFStringRef key, CVAttachmentMode *attachmentMode);
```

## Parameters

- `buffer`: A buffer with an attachment to copy.
- `key`: A string that identifies the attachment, which can be of any [CFTypeRef](../corefoundation/cftyperef.md). See [CVBuffer Attachment Keys](cvbuffer-attachment-keys.md) and [Image Buffer Attachment Keys](image-buffer-attachment-keys.md) for predefined values.
- `attachmentMode`: On output, this value points to the mode of the attachment. See [CVAttachmentMode](cvattachmentmode.md) for possible values. This value is [nil](../objectivec/nil-227m0.md) if the buffer doesn’t define an attachment mode.

<a id="return-value"></a>

## Return Value

The requested attachment, or `nil` if no attachment for the specified key exists.

<a id="Discussion"></a>

## Discussion

This function returns a retained attachment value, which you need to release when you’re done with it.

## See Also

### Working with attachments

- [CVBufferHasAttachment](cvbufferhasattachment%28____%29.md): Returns a Boolean value that indicates whether a Core Video buffer contains a specified attachment.
- [CVBufferCopyAttachments](cvbuffercopyattachments%28____%29.md): Returns a copy of all attachments from a Core Video buffer.
- [CVBufferSetAttachment](cvbuffersetattachment%28________%29.md): Sets or adds an attachment to a Core Video buffer.
- [CVBufferSetAttachments](cvbuffersetattachments%28______%29.md): Sets a dictionary of attachments on a Core Video buffer.
- [CVBufferPropagateAttachments](cvbufferpropagateattachments%28____%29.md): Copies all attachments that Core Video can propagate from one buffer to another.
- [CVBufferRemoveAttachment](cvbufferremoveattachment%28____%29.md): Removes the attachment you specify from a Core Video buffer.
- [CVBufferRemoveAllAttachments](cvbufferremoveallattachments%28__%29.md): Removes all attachments from a Core Video buffer.
- [CVBufferGetAttachment](cvbuffergetattachment%28______%29.md): Deprecated. Retrieves a specific attachment of a Core Video buffer.
- [CVBufferGetAttachments](cvbuffergetattachments%28____%29.md): Deprecated. Retrieves all attachments of a Core Video buffer.
