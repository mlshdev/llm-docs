> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvbuffersetattachments(_:_:_:)](https://developer.apple.com/documentation/corevideo/cvbuffersetattachments(_:_:_:))

# CVBufferSetAttachments(\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets a dictionary of attachments on a Core Video buffer.

## Declaration

```swift
func CVBufferSetAttachments(_ buffer: CVBuffer, _ theAttachments: CFDictionary, _ attachmentMode: CVAttachmentMode)
```

## Parameters

- `buffer`: The buffer on which to set the attachments.
- `theAttachments`: The dictionary of the attachments to set.
- `attachmentMode`: The attachment mode for this attachment. See [CVAttachmentMode](cvattachmentmode.md) for possible values. Any given attachment key may exist in only one mode at a time.

<a id="Discussion"></a>

## Discussion

This is a convenience function that calls [CVBufferSetAttachment(\_:\_:\_:\_:)](cvbuffersetattachment%28________%29.md) for each key-value pair in the given dictionary. All key-value pairs must be in the root level of the dictionary.

## See Also

### Working with attachments

- [CVBufferHasAttachment(\_:\_:)](cvbufferhasattachment%28____%29.md): Returns a Boolean value that indicates whether a Core Video buffer contains a specified attachment.
- [CVBufferCopyAttachment(\_:\_:\_:)](cvbuffercopyattachment%28______%29.md): Returns a copy of an attachment from a Core Video buffer.
- [CVBufferCopyAttachments(\_:\_:)](cvbuffercopyattachments%28____%29.md): Returns a copy of all attachments from a Core Video buffer.
- [CVBufferSetAttachment(\_:\_:\_:\_:)](cvbuffersetattachment%28________%29.md): Sets or adds an attachment to a Core Video buffer.
- [CVBufferPropagateAttachments(\_:\_:)](cvbufferpropagateattachments%28____%29.md): Copies all attachments that Core Video can propagate from one buffer to another.
- [CVBufferRemoveAttachment(\_:\_:)](cvbufferremoveattachment%28____%29.md): Removes the attachment you specify from a Core Video buffer.
- [CVBufferRemoveAllAttachments(\_:)](cvbufferremoveallattachments%28__%29.md): Removes all attachments from a Core Video buffer.
- [CVBufferGetAttachment(\_:\_:\_:)](cvbuffergetattachment%28______%29.md): Deprecated. Retrieves a specific attachment of a Core Video buffer.
- [CVBufferGetAttachments(\_:\_:)](cvbuffergetattachments%28____%29.md): Deprecated. Retrieves all attachments of a Core Video buffer.

# CVBufferSetAttachments (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets a dictionary of attachments on a Core Video buffer.

## Declaration

```objectivec
extern void CVBufferSetAttachments(CVBufferRef buffer, CFDictionaryRef theAttachments, CVAttachmentMode attachmentMode);
```

## Parameters

- `buffer`: The buffer on which to set the attachments.
- `theAttachments`: The dictionary of the attachments to set.
- `attachmentMode`: The attachment mode for this attachment. See [CVAttachmentMode](cvattachmentmode.md) for possible values. Any given attachment key may exist in only one mode at a time.

<a id="Discussion"></a>

## Discussion

This is a convenience function that calls [CVBufferSetAttachment](cvbuffersetattachment%28________%29.md) for each key-value pair in the given dictionary. All key-value pairs must be in the root level of the dictionary.

## See Also

### Working with attachments

- [CVBufferHasAttachment](cvbufferhasattachment%28____%29.md): Returns a Boolean value that indicates whether a Core Video buffer contains a specified attachment.
- [CVBufferCopyAttachment](cvbuffercopyattachment%28______%29.md): Returns a copy of an attachment from a Core Video buffer.
- [CVBufferCopyAttachments](cvbuffercopyattachments%28____%29.md): Returns a copy of all attachments from a Core Video buffer.
- [CVBufferSetAttachment](cvbuffersetattachment%28________%29.md): Sets or adds an attachment to a Core Video buffer.
- [CVBufferPropagateAttachments](cvbufferpropagateattachments%28____%29.md): Copies all attachments that Core Video can propagate from one buffer to another.
- [CVBufferRemoveAttachment](cvbufferremoveattachment%28____%29.md): Removes the attachment you specify from a Core Video buffer.
- [CVBufferRemoveAllAttachments](cvbufferremoveallattachments%28__%29.md): Removes all attachments from a Core Video buffer.
- [CVBufferGetAttachment](cvbuffergetattachment%28______%29.md): Deprecated. Retrieves a specific attachment of a Core Video buffer.
- [CVBufferGetAttachments](cvbuffergetattachments%28____%29.md): Deprecated. Retrieves all attachments of a Core Video buffer.
