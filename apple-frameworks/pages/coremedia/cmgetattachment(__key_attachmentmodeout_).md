> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmgetattachment(_:key:attachmentmodeout:)](https://developer.apple.com/documentation/coremedia/cmgetattachment(_:key:attachmentmodeout:))

# CMGetAttachment(\_:key:attachmentModeOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns an attachment from an attachment bearer object.

## Declaration

```swift
func CMGetAttachment(_ target: CMAttachmentBearer, key: CFString, attachmentModeOut: UnsafeMutablePointer<CMAttachmentMode>?) -> CFTypeRef?
```

## Parameters

- `target`: Specifies the `CMAttachmentBearer` whose attachment you want to retrieve.
- `key`: Key in the form of a `CFString` identifying the desired attachment.
- `attachmentModeOut`: On output, `attachmentMode` points to the mode of the attachment. See [CMAttachmentMode](cmattachmentmode.md)for possible values. May be `NULL`.

<a id="return-value"></a>

## Return Value

The requested attachment object or `NULL` if not found.

<a id="Discussion"></a>

## Discussion

You can attach any Core Foundation object to a `CMAttachmentBearer` to store additional information. `CMGetAttachment` retrieves an attachment identified by a key. Given a [CVBuffer](../corevideo/cvbuffer.md), `CMGetAttachment` is equivalent to [CVBufferCopyAttachment(\_:\_:\_:)](../corevideo/cvbuffercopyattachment%28______%29.md).

## See Also

### Processing Attachments

- [CMCopyDictionaryOfAttachments(allocator:target:attachmentMode:)](cmcopydictionaryofattachments%28allocator_target_attachmentmode_%29.md): Returns a dictionary of all attachments for an attachment bearer object.
- [CMSetAttachment(\_:key:value:attachmentMode:)](cmsetattachment%28__key_value_attachmentmode_%29.md): Sets or adds an attachment to an attachment bearer object.
- [CMSetAttachments(\_:attachments:attachmentMode:)](cmsetattachments%28__attachments_attachmentmode_%29.md): Sets a dictionary of attachments on an attachment bearer object.
- [CMRemoveAttachment(\_:key:)](cmremoveattachment%28__key_%29.md): Removes a specific attachment from an attachment bearer object.
- [CMRemoveAllAttachments(\_:)](cmremoveallattachments%28__%29.md): Removes all attachments from an attachment bearer object.
- [CMPropagateAttachments(\_:destination:)](cmpropagateattachments%28__destination_%29.md): Copies all propagable attachments from one attachment bearer object to another.

# CMGetAttachment (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns an attachment from an attachment bearer object.

## Declaration

```objectivec
extern CFTypeRefCMGetAttachment(CMAttachmentBearerRef target, CFStringRef key, CMAttachmentMode *attachmentModeOut);
```

## Parameters

- `target`: Specifies the `CMAttachmentBearer` whose attachment you want to retrieve.
- `key`: Key in the form of a `CFString` identifying the desired attachment.
- `attachmentModeOut`: On output, `attachmentMode` points to the mode of the attachment. See [CMAttachmentMode](cmattachmentmode.md)for possible values. May be `NULL`.

<a id="return-value"></a>

## Return Value

The requested attachment object or `NULL` if not found.

<a id="Discussion"></a>

## Discussion

You can attach any Core Foundation object to a `CMAttachmentBearer` to store additional information. `CMGetAttachment` retrieves an attachment identified by a key. Given a [CVBufferRef](../corevideo/cvbuffer.md), `CMGetAttachment` is equivalent to [CVBufferCopyAttachment](../corevideo/cvbuffercopyattachment%28______%29.md).

## See Also

### Processing Attachments

- [CMCopyDictionaryOfAttachments](cmcopydictionaryofattachments%28allocator_target_attachmentmode_%29.md): Returns a dictionary of all attachments for an attachment bearer object.
- [CMSetAttachment](cmsetattachment%28__key_value_attachmentmode_%29.md): Sets or adds an attachment to an attachment bearer object.
- [CMSetAttachments](cmsetattachments%28__attachments_attachmentmode_%29.md): Sets a dictionary of attachments on an attachment bearer object.
- [CMRemoveAttachment](cmremoveattachment%28__key_%29.md): Removes a specific attachment from an attachment bearer object.
- [CMRemoveAllAttachments](cmremoveallattachments%28__%29.md): Removes all attachments from an attachment bearer object.
- [CMPropagateAttachments](cmpropagateattachments%28__destination_%29.md): Copies all propagable attachments from one attachment bearer object to another.
