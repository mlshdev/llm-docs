> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsetattachment(_:key:value:attachmentmode:)](https://developer.apple.com/documentation/coremedia/cmsetattachment(_:key:value:attachmentmode:))

# CMSetAttachment(\_:key:value:attachmentMode:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Sets or adds an attachment to an attachment bearer object.

## Declaration

```swift
func CMSetAttachment(_ target: CMAttachmentBearer, key: CFString, value: CFTypeRef?, attachmentMode: CMAttachmentMode)
```

## Parameters

- `target`: The `CMAttachmentBearer` object on which to add or set attachments.
- `key`: A `CFString` key identifying the desired attachment.
- `value`: A Core Foundation object attachment. If this parameter is `NULL`, the function returns an error.
- `attachmentMode`: Specifies the attachment mode for this attachment. Any given attachment key may exist in only one mode at a time.

<a id="Discussion"></a>

## Discussion

You can attach any Core Foundation object to a `CMAttachmentBearer` object to store additional information. `CMSetAttachment` stores an attachment identified by a key. If the key doesn’t currently exist for the `CMAttachmentBearer` object when you call this function, the function adds the new attachment. If the key does exist, the function replaces the existing attachment. In both cases the function increments the retain count of the attachment. The value can be any `CFType` but a `NULL` value results in an error. Given a [CVBuffer](../corevideo/cvbuffer.md), `CMSetAttachment` is equivalent to `CVBufferSetAttachment`.

## See Also

### Processing Attachments

- [CMGetAttachment(\_:key:attachmentModeOut:)](cmgetattachment%28__key_attachmentmodeout_%29.md): Returns an attachment from an attachment bearer object.
- [CMCopyDictionaryOfAttachments(allocator:target:attachmentMode:)](cmcopydictionaryofattachments%28allocator_target_attachmentmode_%29.md): Returns a dictionary of all attachments for an attachment bearer object.
- [CMSetAttachments(\_:attachments:attachmentMode:)](cmsetattachments%28__attachments_attachmentmode_%29.md): Sets a dictionary of attachments on an attachment bearer object.
- [CMRemoveAttachment(\_:key:)](cmremoveattachment%28__key_%29.md): Removes a specific attachment from an attachment bearer object.
- [CMRemoveAllAttachments(\_:)](cmremoveallattachments%28__%29.md): Removes all attachments from an attachment bearer object.
- [CMPropagateAttachments(\_:destination:)](cmpropagateattachments%28__destination_%29.md): Copies all propagable attachments from one attachment bearer object to another.

# CMSetAttachment (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Sets or adds an attachment to an attachment bearer object.

## Declaration

```objectivec
extern void CMSetAttachment(CMAttachmentBearerRef target, CFStringRef key, CFTypeRef value, CMAttachmentMode attachmentMode);
```

## Parameters

- `target`: The `CMAttachmentBearer` object on which to add or set attachments.
- `key`: A `CFString` key identifying the desired attachment.
- `value`: A Core Foundation object attachment. If this parameter is `NULL`, the function returns an error.
- `attachmentMode`: Specifies the attachment mode for this attachment. Any given attachment key may exist in only one mode at a time.

<a id="Discussion"></a>

## Discussion

You can attach any Core Foundation object to a `CMAttachmentBearer` object to store additional information. `CMSetAttachment` stores an attachment identified by a key. If the key doesn’t currently exist for the `CMAttachmentBearer` object when you call this function, the function adds the new attachment. If the key does exist, the function replaces the existing attachment. In both cases the function increments the retain count of the attachment. The value can be any `CFType` but a `NULL` value results in an error. Given a [CVBufferRef](../corevideo/cvbuffer.md), `CMSetAttachment` is equivalent to `CVBufferSetAttachment`.

## See Also

### Processing Attachments

- [CMGetAttachment](cmgetattachment%28__key_attachmentmodeout_%29.md): Returns an attachment from an attachment bearer object.
- [CMCopyDictionaryOfAttachments](cmcopydictionaryofattachments%28allocator_target_attachmentmode_%29.md): Returns a dictionary of all attachments for an attachment bearer object.
- [CMSetAttachments](cmsetattachments%28__attachments_attachmentmode_%29.md): Sets a dictionary of attachments on an attachment bearer object.
- [CMRemoveAttachment](cmremoveattachment%28__key_%29.md): Removes a specific attachment from an attachment bearer object.
- [CMRemoveAllAttachments](cmremoveallattachments%28__%29.md): Removes all attachments from an attachment bearer object.
- [CMPropagateAttachments](cmpropagateattachments%28__destination_%29.md): Copies all propagable attachments from one attachment bearer object to another.
