> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvbufferpropagateattachments(_:_:)](https://developer.apple.com/documentation/corevideo/cvbufferpropagateattachments(_:_:))

# CVBufferPropagateAttachments(\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies all attachments that Core Video can propagate from one buffer to another.

## Declaration

```swift
func CVBufferPropagateAttachments(_ sourceBuffer: CVBuffer, _ destinationBuffer: CVBuffer)
```

## Parameters

- `sourceBuffer`: The buffer to copy attachments from.
- `destinationBuffer`: The buffer to copy attachments to.

<a id="Discussion"></a>

## Discussion

This is a convenience function that copies all attachments from one buffer to another with an attachment mode of [CVAttachmentMode.shouldPropagate](cvattachmentmode/shouldpropagate.md).

## See Also

### Working with attachments

- [CVBufferHasAttachment(\_:\_:)](cvbufferhasattachment%28____%29.md): Returns a Boolean value that indicates whether a Core Video buffer contains a specified attachment.
- [CVBufferCopyAttachment(\_:\_:\_:)](cvbuffercopyattachment%28______%29.md): Returns a copy of an attachment from a Core Video buffer.
- [CVBufferCopyAttachments(\_:\_:)](cvbuffercopyattachments%28____%29.md): Returns a copy of all attachments from a Core Video buffer.
- [CVBufferSetAttachment(\_:\_:\_:\_:)](cvbuffersetattachment%28________%29.md): Sets or adds an attachment to a Core Video buffer.
- [CVBufferSetAttachments(\_:\_:\_:)](cvbuffersetattachments%28______%29.md): Sets a dictionary of attachments on a Core Video buffer.
- [CVBufferRemoveAttachment(\_:\_:)](cvbufferremoveattachment%28____%29.md): Removes the attachment you specify from a Core Video buffer.
- [CVBufferRemoveAllAttachments(\_:)](cvbufferremoveallattachments%28__%29.md): Removes all attachments from a Core Video buffer.
- [CVBufferGetAttachment(\_:\_:\_:)](cvbuffergetattachment%28______%29.md): Deprecated. Retrieves a specific attachment of a Core Video buffer.
- [CVBufferGetAttachments(\_:\_:)](cvbuffergetattachments%28____%29.md): Deprecated. Retrieves all attachments of a Core Video buffer.

# CVBufferPropagateAttachments (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies all attachments that Core Video can propagate from one buffer to another.

## Declaration

```objectivec
extern void CVBufferPropagateAttachments(CVBufferRef sourceBuffer, CVBufferRef destinationBuffer);
```

## Parameters

- `sourceBuffer`: The buffer to copy attachments from.
- `destinationBuffer`: The buffer to copy attachments to.

<a id="Discussion"></a>

## Discussion

This is a convenience function that copies all attachments from one buffer to another with an attachment mode of [kCVAttachmentMode_ShouldPropagate](cvattachmentmode/shouldpropagate.md).

## See Also

### Working with attachments

- [CVBufferHasAttachment](cvbufferhasattachment%28____%29.md): Returns a Boolean value that indicates whether a Core Video buffer contains a specified attachment.
- [CVBufferCopyAttachment](cvbuffercopyattachment%28______%29.md): Returns a copy of an attachment from a Core Video buffer.
- [CVBufferCopyAttachments](cvbuffercopyattachments%28____%29.md): Returns a copy of all attachments from a Core Video buffer.
- [CVBufferSetAttachment](cvbuffersetattachment%28________%29.md): Sets or adds an attachment to a Core Video buffer.
- [CVBufferSetAttachments](cvbuffersetattachments%28______%29.md): Sets a dictionary of attachments on a Core Video buffer.
- [CVBufferRemoveAttachment](cvbufferremoveattachment%28____%29.md): Removes the attachment you specify from a Core Video buffer.
- [CVBufferRemoveAllAttachments](cvbufferremoveallattachments%28__%29.md): Removes all attachments from a Core Video buffer.
- [CVBufferGetAttachment](cvbuffergetattachment%28______%29.md): Deprecated. Retrieves a specific attachment of a Core Video buffer.
- [CVBufferGetAttachments](cvbuffergetattachments%28____%29.md): Deprecated. Retrieves all attachments of a Core Video buffer.
