> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmremoveallattachments(_:)](https://developer.apple.com/documentation/coremedia/cmremoveallattachments(_:))

# CMRemoveAllAttachments(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Removes all attachments from an attachment bearer object.

## Declaration

```swift
func CMRemoveAllAttachments(_ target: CMAttachmentBearer)
```

## Parameters

- `target`: The `CMAttachmentBearer` whose attachment you want to remove.

<a id="Discussion"></a>

## Discussion

While `CMRemoveAttachment` removes a specific attachment identified by a key, `CMRemoveAllAttachments` removes all attachments of a `CMAttachmentBearer` and decrements their retain counts.  Given a [CVBuffer](../corevideo/cvbuffer.md), `CMRemoveAllAttachments` is equivalent to `CVBufferRemoveAllAttachments`.

## See Also

### Processing Attachments

- [CMGetAttachment(\_:key:attachmentModeOut:)](cmgetattachment%28__key_attachmentmodeout_%29.md): Returns an attachment from an attachment bearer object.
- [CMCopyDictionaryOfAttachments(allocator:target:attachmentMode:)](cmcopydictionaryofattachments%28allocator_target_attachmentmode_%29.md): Returns a dictionary of all attachments for an attachment bearer object.
- [CMSetAttachment(\_:key:value:attachmentMode:)](cmsetattachment%28__key_value_attachmentmode_%29.md): Sets or adds an attachment to an attachment bearer object.
- [CMSetAttachments(\_:attachments:attachmentMode:)](cmsetattachments%28__attachments_attachmentmode_%29.md): Sets a dictionary of attachments on an attachment bearer object.
- [CMRemoveAttachment(\_:key:)](cmremoveattachment%28__key_%29.md): Removes a specific attachment from an attachment bearer object.
- [CMPropagateAttachments(\_:destination:)](cmpropagateattachments%28__destination_%29.md): Copies all propagable attachments from one attachment bearer object to another.

# CMRemoveAllAttachments (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Removes all attachments from an attachment bearer object.

## Declaration

```objectivec
extern void CMRemoveAllAttachments(CMAttachmentBearerRef target);
```

## Parameters

- `target`: The `CMAttachmentBearer` whose attachment you want to remove.

<a id="Discussion"></a>

## Discussion

While `CMRemoveAttachment` removes a specific attachment identified by a key, `CMRemoveAllAttachments` removes all attachments of a `CMAttachmentBearer` and decrements their retain counts.  Given a [CVBufferRef](../corevideo/cvbuffer.md), `CMRemoveAllAttachments` is equivalent to `CVBufferRemoveAllAttachments`.

## See Also

### Processing Attachments

- [CMGetAttachment](cmgetattachment%28__key_attachmentmodeout_%29.md): Returns an attachment from an attachment bearer object.
- [CMCopyDictionaryOfAttachments](cmcopydictionaryofattachments%28allocator_target_attachmentmode_%29.md): Returns a dictionary of all attachments for an attachment bearer object.
- [CMSetAttachment](cmsetattachment%28__key_value_attachmentmode_%29.md): Sets or adds an attachment to an attachment bearer object.
- [CMSetAttachments](cmsetattachments%28__attachments_attachmentmode_%29.md): Sets a dictionary of attachments on an attachment bearer object.
- [CMRemoveAttachment](cmremoveattachment%28__key_%29.md): Removes a specific attachment from an attachment bearer object.
- [CMPropagateAttachments](cmpropagateattachments%28__destination_%29.md): Copies all propagable attachments from one attachment bearer object to another.
