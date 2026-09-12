> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmpropagateattachments(_:destination:)](https://developer.apple.com/documentation/coremedia/cmpropagateattachments(_:destination:))

# CMPropagateAttachments(\_:destination:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Copies all propagable attachments from one attachment bearer object to another.

## Declaration

```swift
func CMPropagateAttachments(_ source: CMAttachmentBearer, destination: CMAttachmentBearer)
```

## Parameters

- `source`: `CMAttachmentBearer` to copy attachments from.
- `destination`: `CMAttachmentBearer` to copy attachments to.

<a id="Discussion"></a>

## Discussion

`CMPropagateAttachments` is a convenience call that copies all attachments with a mode of `kCMAttachmentMode_ShouldPropagate` from one buffer to another.  Given a [CVBuffer](../corevideo/cvbuffer.md), `CMPropagateAttachments` is equivalent to `CVBufferPropagateAttachments`.

## See Also

### Processing Attachments

- [CMGetAttachment(\_:key:attachmentModeOut:)](cmgetattachment%28__key_attachmentmodeout_%29.md): Returns an attachment from an attachment bearer object.
- [CMCopyDictionaryOfAttachments(allocator:target:attachmentMode:)](cmcopydictionaryofattachments%28allocator_target_attachmentmode_%29.md): Returns a dictionary of all attachments for an attachment bearer object.
- [CMSetAttachment(\_:key:value:attachmentMode:)](cmsetattachment%28__key_value_attachmentmode_%29.md): Sets or adds an attachment to an attachment bearer object.
- [CMSetAttachments(\_:attachments:attachmentMode:)](cmsetattachments%28__attachments_attachmentmode_%29.md): Sets a dictionary of attachments on an attachment bearer object.
- [CMRemoveAttachment(\_:key:)](cmremoveattachment%28__key_%29.md): Removes a specific attachment from an attachment bearer object.
- [CMRemoveAllAttachments(\_:)](cmremoveallattachments%28__%29.md): Removes all attachments from an attachment bearer object.

# CMPropagateAttachments (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Copies all propagable attachments from one attachment bearer object to another.

## Declaration

```objectivec
extern void CMPropagateAttachments(CMAttachmentBearerRef source, CMAttachmentBearerRef destination);
```

## Parameters

- `source`: `CMAttachmentBearer` to copy attachments from.
- `destination`: `CMAttachmentBearer` to copy attachments to.

<a id="Discussion"></a>

## Discussion

`CMPropagateAttachments` is a convenience call that copies all attachments with a mode of `kCMAttachmentMode_ShouldPropagate` from one buffer to another.  Given a [CVBufferRef](../corevideo/cvbuffer.md), `CMPropagateAttachments` is equivalent to `CVBufferPropagateAttachments`.

## See Also

### Processing Attachments

- [CMGetAttachment](cmgetattachment%28__key_attachmentmodeout_%29.md): Returns an attachment from an attachment bearer object.
- [CMCopyDictionaryOfAttachments](cmcopydictionaryofattachments%28allocator_target_attachmentmode_%29.md): Returns a dictionary of all attachments for an attachment bearer object.
- [CMSetAttachment](cmsetattachment%28__key_value_attachmentmode_%29.md): Sets or adds an attachment to an attachment bearer object.
- [CMSetAttachments](cmsetattachments%28__attachments_attachmentmode_%29.md): Sets a dictionary of attachments on an attachment bearer object.
- [CMRemoveAttachment](cmremoveattachment%28__key_%29.md): Removes a specific attachment from an attachment bearer object.
- [CMRemoveAllAttachments](cmremoveallattachments%28__%29.md): Removes all attachments from an attachment bearer object.
