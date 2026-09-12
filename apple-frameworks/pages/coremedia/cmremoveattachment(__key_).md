> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmremoveattachment(_:key:)](https://developer.apple.com/documentation/coremedia/cmremoveattachment(_:key:))

# CMRemoveAttachment(\_:key:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Removes a specific attachment from an attachment bearer object.

## Declaration

```swift
func CMRemoveAttachment(_ target: CMAttachmentBearer, key: CFString)
```

## Parameters

- `target`: The `CMAttachmentBearer` containing the attachment to remove.
- `key`: Key in the form of a Core Foundation string identifying the desired attachment.

<a id="Discussion"></a>

## Discussion

If the attachment exists, the function removes the attachment and decrements the retain count. Given a [CVBuffer](../corevideo/cvbuffer.md), `CMRemoveAttachment` is equivalent to `CVBufferRemoveAttachment`.

## See Also

### Processing Attachments

- [CMGetAttachment(\_:key:attachmentModeOut:)](cmgetattachment%28__key_attachmentmodeout_%29.md): Returns an attachment from an attachment bearer object.
- [CMCopyDictionaryOfAttachments(allocator:target:attachmentMode:)](cmcopydictionaryofattachments%28allocator_target_attachmentmode_%29.md): Returns a dictionary of all attachments for an attachment bearer object.
- [CMSetAttachment(\_:key:value:attachmentMode:)](cmsetattachment%28__key_value_attachmentmode_%29.md): Sets or adds an attachment to an attachment bearer object.
- [CMSetAttachments(\_:attachments:attachmentMode:)](cmsetattachments%28__attachments_attachmentmode_%29.md): Sets a dictionary of attachments on an attachment bearer object.
- [CMRemoveAllAttachments(\_:)](cmremoveallattachments%28__%29.md): Removes all attachments from an attachment bearer object.
- [CMPropagateAttachments(\_:destination:)](cmpropagateattachments%28__destination_%29.md): Copies all propagable attachments from one attachment bearer object to another.

# CMRemoveAttachment (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Removes a specific attachment from an attachment bearer object.

## Declaration

```objectivec
extern void CMRemoveAttachment(CMAttachmentBearerRef target, CFStringRef key);
```

## Parameters

- `target`: The `CMAttachmentBearer` containing the attachment to remove.
- `key`: Key in the form of a Core Foundation string identifying the desired attachment.

<a id="Discussion"></a>

## Discussion

If the attachment exists, the function removes the attachment and decrements the retain count. Given a [CVBufferRef](../corevideo/cvbuffer.md), `CMRemoveAttachment` is equivalent to `CVBufferRemoveAttachment`.

## See Also

### Processing Attachments

- [CMGetAttachment](cmgetattachment%28__key_attachmentmodeout_%29.md): Returns an attachment from an attachment bearer object.
- [CMCopyDictionaryOfAttachments](cmcopydictionaryofattachments%28allocator_target_attachmentmode_%29.md): Returns a dictionary of all attachments for an attachment bearer object.
- [CMSetAttachment](cmsetattachment%28__key_value_attachmentmode_%29.md): Sets or adds an attachment to an attachment bearer object.
- [CMSetAttachments](cmsetattachments%28__attachments_attachmentmode_%29.md): Sets a dictionary of attachments on an attachment bearer object.
- [CMRemoveAllAttachments](cmremoveallattachments%28__%29.md): Removes all attachments from an attachment bearer object.
- [CMPropagateAttachments](cmpropagateattachments%28__destination_%29.md): Copies all propagable attachments from one attachment bearer object to another.
