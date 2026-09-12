> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvbuffergetattachment(_:_:_:)](https://developer.apple.com/documentation/corevideo/cvbuffergetattachment(_:_:_:))

# CVBufferGetAttachment(\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ (deprecated in 15.0) · iPadOS 4.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.4+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Retrieves a specific attachment of a Core Video buffer.

> Use [CVBufferCopyAttachment(\_:\_:\_:)](cvbuffercopyattachment%28______%29.md) instead.

## Declaration

```swift
func CVBufferGetAttachment(_ buffer: CVBuffer, _ key: CFString, _ attachmentMode: UnsafeMutablePointer<CVAttachmentMode>?) -> Unmanaged<CFTypeRef>?
```

## Parameters

- `buffer`: The buffer whose attachment you want to retrieve.
- `key`: A string that identifies the attachment, which can be of any [CFTypeRef](../corefoundation/cftyperef.md). See [CVBuffer Attachment Keys](cvbuffer-attachment-keys.md) and [Image Buffer Attachment Keys](image-buffer-attachment-keys.md) for predefined values.
- `attachmentMode`: On output, this value points to the mode of the attachment. See [CVAttachmentMode](cvattachmentmode.md) for possible values. This value is [nil](../objectivec/nil-227m0.md) if the buffer doesn’t define an attachment mode.

<a id="return-value"></a>

## Return Value

The specified attachment, if it exists.

## See Also

### Working with attachments

- [CVBufferHasAttachment(\_:\_:)](cvbufferhasattachment%28____%29.md): Returns a Boolean value that indicates whether a Core Video buffer contains a specified attachment.
- [CVBufferCopyAttachment(\_:\_:\_:)](cvbuffercopyattachment%28______%29.md): Returns a copy of an attachment from a Core Video buffer.
- [CVBufferCopyAttachments(\_:\_:)](cvbuffercopyattachments%28____%29.md): Returns a copy of all attachments from a Core Video buffer.
- [CVBufferSetAttachment(\_:\_:\_:\_:)](cvbuffersetattachment%28________%29.md): Sets or adds an attachment to a Core Video buffer.
- [CVBufferSetAttachments(\_:\_:\_:)](cvbuffersetattachments%28______%29.md): Sets a dictionary of attachments on a Core Video buffer.
- [CVBufferPropagateAttachments(\_:\_:)](cvbufferpropagateattachments%28____%29.md): Copies all attachments that Core Video can propagate from one buffer to another.
- [CVBufferRemoveAttachment(\_:\_:)](cvbufferremoveattachment%28____%29.md): Removes the attachment you specify from a Core Video buffer.
- [CVBufferRemoveAllAttachments(\_:)](cvbufferremoveallattachments%28__%29.md): Removes all attachments from a Core Video buffer.
- [CVBufferGetAttachments(\_:\_:)](cvbuffergetattachments%28____%29.md): Deprecated. Retrieves all attachments of a Core Video buffer.

# CVBufferGetAttachment (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ (deprecated in 15.0) · iPadOS 4.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.4+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Retrieves a specific attachment of a Core Video buffer.

> Use [CVBufferCopyAttachment](cvbuffercopyattachment%28______%29.md) instead.

## Declaration

```objectivec
extern CFTypeRefCVBufferGetAttachment(CVBufferRef buffer, CFStringRef key, CVAttachmentMode *attachmentMode);
```

## Parameters

- `buffer`: The buffer whose attachment you want to retrieve.
- `key`: A string that identifies the attachment, which can be of any [CFTypeRef](../corefoundation/cftyperef.md). See [CVBuffer Attachment Keys](cvbuffer-attachment-keys.md) and [Image Buffer Attachment Keys](image-buffer-attachment-keys.md) for predefined values.
- `attachmentMode`: On output, this value points to the mode of the attachment. See [CVAttachmentMode](cvattachmentmode.md) for possible values. This value is [nil](../objectivec/nil-227m0.md) if the buffer doesn’t define an attachment mode.

<a id="return-value"></a>

## Return Value

The specified attachment, if it exists.

## See Also

### Working with attachments

- [CVBufferHasAttachment](cvbufferhasattachment%28____%29.md): Returns a Boolean value that indicates whether a Core Video buffer contains a specified attachment.
- [CVBufferCopyAttachment](cvbuffercopyattachment%28______%29.md): Returns a copy of an attachment from a Core Video buffer.
- [CVBufferCopyAttachments](cvbuffercopyattachments%28____%29.md): Returns a copy of all attachments from a Core Video buffer.
- [CVBufferSetAttachment](cvbuffersetattachment%28________%29.md): Sets or adds an attachment to a Core Video buffer.
- [CVBufferSetAttachments](cvbuffersetattachments%28______%29.md): Sets a dictionary of attachments on a Core Video buffer.
- [CVBufferPropagateAttachments](cvbufferpropagateattachments%28____%29.md): Copies all attachments that Core Video can propagate from one buffer to another.
- [CVBufferRemoveAttachment](cvbufferremoveattachment%28____%29.md): Removes the attachment you specify from a Core Video buffer.
- [CVBufferRemoveAllAttachments](cvbufferremoveallattachments%28__%29.md): Removes all attachments from a Core Video buffer.
- [CVBufferGetAttachments](cvbuffergetattachments%28____%29.md): Deprecated. Retrieves all attachments of a Core Video buffer.
