> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsetattachments(_:attachments:attachmentmode:)](https://developer.apple.com/documentation/coremedia/cmsetattachments(_:attachments:attachmentmode:))

# CMSetAttachments(\_:attachments:attachmentMode:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Sets a dictionary of attachments on an attachment bearer object.

## Declaration

```swift
func CMSetAttachments(_ target: CMAttachmentBearer, attachments theAttachments: CFDictionary, attachmentMode: CMAttachmentMode)
```

## Parameters

- `target`: The target `CMAttachmentBearer` to set the attachment to.
- `theAttachments`: The attachments to set, in the form of a Core Foundation dictionary.
- `attachmentMode`: Specifies the attachment mode for this attachment. A particular attachment key can only exist in a single mode at a time.

<a id="Discussion"></a>

## Discussion

`CMSetAttachments` is a convenience call that in turn calls `CMSetAttachment` for each key and value in the given dictionary. All key value pairs must be in the root level of the dictionary.  Given a [CVBuffer](../corevideo/cvbuffer.md), `CMSetAttachments` is equivalent to `CVBufferSetAttachments`.

## See Also

### Processing Attachments

- [CMGetAttachment(\_:key:attachmentModeOut:)](cmgetattachment%28__key_attachmentmodeout_%29.md): Returns an attachment from an attachment bearer object.
- [CMCopyDictionaryOfAttachments(allocator:target:attachmentMode:)](cmcopydictionaryofattachments%28allocator_target_attachmentmode_%29.md): Returns a dictionary of all attachments for an attachment bearer object.
- [CMSetAttachment(\_:key:value:attachmentMode:)](cmsetattachment%28__key_value_attachmentmode_%29.md): Sets or adds an attachment to an attachment bearer object.
- [CMRemoveAttachment(\_:key:)](cmremoveattachment%28__key_%29.md): Removes a specific attachment from an attachment bearer object.
- [CMRemoveAllAttachments(\_:)](cmremoveallattachments%28__%29.md): Removes all attachments from an attachment bearer object.
- [CMPropagateAttachments(\_:destination:)](cmpropagateattachments%28__destination_%29.md): Copies all propagable attachments from one attachment bearer object to another.

# CMSetAttachments (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Sets a dictionary of attachments on an attachment bearer object.

## Declaration

```objectivec
extern void CMSetAttachments(CMAttachmentBearerRef target, CFDictionaryRef theAttachments, CMAttachmentMode attachmentMode);
```

## Parameters

- `target`: The target `CMAttachmentBearer` to set the attachment to.
- `theAttachments`: The attachments to set, in the form of a Core Foundation dictionary.
- `attachmentMode`: Specifies the attachment mode for this attachment. A particular attachment key can only exist in a single mode at a time.

<a id="Discussion"></a>

## Discussion

`CMSetAttachments` is a convenience call that in turn calls `CMSetAttachment` for each key and value in the given dictionary. All key value pairs must be in the root level of the dictionary.  Given a [CVBufferRef](../corevideo/cvbuffer.md), `CMSetAttachments` is equivalent to `CVBufferSetAttachments`.

## See Also

### Processing Attachments

- [CMGetAttachment](cmgetattachment%28__key_attachmentmodeout_%29.md): Returns an attachment from an attachment bearer object.
- [CMCopyDictionaryOfAttachments](cmcopydictionaryofattachments%28allocator_target_attachmentmode_%29.md): Returns a dictionary of all attachments for an attachment bearer object.
- [CMSetAttachment](cmsetattachment%28__key_value_attachmentmode_%29.md): Sets or adds an attachment to an attachment bearer object.
- [CMRemoveAttachment](cmremoveattachment%28__key_%29.md): Removes a specific attachment from an attachment bearer object.
- [CMRemoveAllAttachments](cmremoveallattachments%28__%29.md): Removes all attachments from an attachment bearer object.
- [CMPropagateAttachments](cmpropagateattachments%28__destination_%29.md): Copies all propagable attachments from one attachment bearer object to another.
