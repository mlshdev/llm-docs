> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmcopydictionaryofattachments(allocator:target:attachmentmode:)](https://developer.apple.com/documentation/coremedia/cmcopydictionaryofattachments(allocator:target:attachmentmode:))

# CMCopyDictionaryOfAttachments(allocator:target:attachmentMode:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a dictionary of all attachments for an attachment bearer object.

## Declaration

```swift
func CMCopyDictionaryOfAttachments(allocator: CFAllocator?, target: CMAttachmentBearer, attachmentMode: CMAttachmentMode) -> sending CFDictionary?
```

## Parameters

- `allocator`: Allocator for the new dictionary; pass [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) or `NULL` to use the default allocator.
- `target`: Specifies the [CMAttachmentBearer](cmattachmentbearer.md) whose attachments you want to obtain.
- `attachmentMode`: The mode of the attachments you want to obtain. See [CMAttachmentMode](cmattachmentmode.md) for possible values.

<a id="return-value"></a>

## Return Value

A Core Foundation dictionary with all attachments identified by their keys. If no attachment is present, the dictionary is empty. Returns `NULL` for an invalid attachment mode.

<a id="Discussion"></a>

## Discussion

`CMCopyDictionaryOfAttachments` is a convenience call that returns all attachments with their corresponding keys in a new [CFDictionary](../corefoundation/cfdictionary.md). Given a `CVBufferRef`, `CMCopyDictionaryOfAttachments` is similar to `CVBufferGetAttachments`, except that the `CFDictionary` that `CMCopyDictionaryOfAttachments` returns isn’t updated for later changes to the attachments.

## See Also

### Processing Attachments

- [CMGetAttachment(\_:key:attachmentModeOut:)](cmgetattachment%28__key_attachmentmodeout_%29.md): Returns an attachment from an attachment bearer object.
- [CMSetAttachment(\_:key:value:attachmentMode:)](cmsetattachment%28__key_value_attachmentmode_%29.md): Sets or adds an attachment to an attachment bearer object.
- [CMSetAttachments(\_:attachments:attachmentMode:)](cmsetattachments%28__attachments_attachmentmode_%29.md): Sets a dictionary of attachments on an attachment bearer object.
- [CMRemoveAttachment(\_:key:)](cmremoveattachment%28__key_%29.md): Removes a specific attachment from an attachment bearer object.
- [CMRemoveAllAttachments(\_:)](cmremoveallattachments%28__%29.md): Removes all attachments from an attachment bearer object.
- [CMPropagateAttachments(\_:destination:)](cmpropagateattachments%28__destination_%29.md): Copies all propagable attachments from one attachment bearer object to another.

# CMCopyDictionaryOfAttachments (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a dictionary of all attachments for an attachment bearer object.

## Declaration

```objectivec
extern CFDictionaryRefCMCopyDictionaryOfAttachments(CFAllocatorRef allocator, CMAttachmentBearerRef target, CMAttachmentMode attachmentMode);
```

## Parameters

- `allocator`: Allocator for the new dictionary; pass [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) or `NULL` to use the default allocator.
- `target`: Specifies the [CMAttachmentBearerRef](cmattachmentbearer.md) whose attachments you want to obtain.
- `attachmentMode`: The mode of the attachments you want to obtain. See [CMAttachmentMode](cmattachmentmode.md) for possible values.

<a id="return-value"></a>

## Return Value

A Core Foundation dictionary with all attachments identified by their keys. If no attachment is present, the dictionary is empty. Returns `NULL` for an invalid attachment mode.

<a id="Discussion"></a>

## Discussion

`CMCopyDictionaryOfAttachments` is a convenience call that returns all attachments with their corresponding keys in a new [CFDictionaryRef](../corefoundation/cfdictionary.md). Given a `CVBufferRef`, `CMCopyDictionaryOfAttachments` is similar to `CVBufferGetAttachments`, except that the `CFDictionary` that `CMCopyDictionaryOfAttachments` returns isn’t updated for later changes to the attachments.

## See Also

### Processing Attachments

- [CMGetAttachment](cmgetattachment%28__key_attachmentmodeout_%29.md): Returns an attachment from an attachment bearer object.
- [CMSetAttachment](cmsetattachment%28__key_value_attachmentmode_%29.md): Sets or adds an attachment to an attachment bearer object.
- [CMSetAttachments](cmsetattachments%28__attachments_attachmentmode_%29.md): Sets a dictionary of attachments on an attachment bearer object.
- [CMRemoveAttachment](cmremoveattachment%28__key_%29.md): Removes a specific attachment from an attachment bearer object.
- [CMRemoveAllAttachments](cmremoveallattachments%28__%29.md): Removes all attachments from an attachment bearer object.
- [CMPropagateAttachments](cmpropagateattachments%28__destination_%29.md): Copies all propagable attachments from one attachment bearer object to another.
