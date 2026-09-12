> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffergetsampleattachmentsarray(_:createifnecessary:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffergetsampleattachmentsarray(_:createifnecessary:))

# CMSampleBufferGetSampleAttachmentsArray(\_:createIfNecessary:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Retrieves an array of sample attachment dictionaries that represents each sample in a sample buffer.

## Declaration

```swift
func CMSampleBufferGetSampleAttachmentsArray(_ sbuf: CMSampleBuffer, createIfNecessary: Bool) -> CFArray?
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being interrogated.
- `createIfNecessary`: Specifies whether an empty array should be created (if there are no sample attachments yet).

<a id="return-value"></a>

## Return Value

A reference to the `CMSampleBuffer's` immutable array of mutable sample attachments dictionaries (one dictionary per sample in the `CMSampleBuffer`). `NULL` is returned if there is an error

<a id="Discussion"></a>

## Discussion

Attachments can then be added/removed directly by the caller, using Core Foundation APIs. On return, the caller doesn’t own the returned array of attachments dictionaries, and must retain it if the caller needs to maintain a reference to it. If there are no sample attachments yet, and createIfNecessary is true, a new `CFArray` containing N empty `CFMutableDictionaries` is returned (where N is the number of samples in the `CMSampleBuffer`), so that attachments can be added directly by the caller. If there are no sample attachments yet, and `createIfNecessary` is false, `NULL` is returned. Once the `CFArray` has been created, subsequent calls will return it, even if there are still no sample attachments in the array.

## See Also

### Managing Attachments

- [Sample Attachment Keys](sample-attachment-keys.md): Keys that specify attachments to individual samples in a buffer.

# CMSampleBufferGetSampleAttachmentsArray (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Retrieves an array of sample attachment dictionaries that represents each sample in a sample buffer.

## Declaration

```objectivec
extern CFArrayRefCMSampleBufferGetSampleAttachmentsArray(CMSampleBufferRef sbuf, Boolean createIfNecessary);
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being interrogated.
- `createIfNecessary`: Specifies whether an empty array should be created (if there are no sample attachments yet).

<a id="return-value"></a>

## Return Value

A reference to the `CMSampleBuffer's` immutable array of mutable sample attachments dictionaries (one dictionary per sample in the `CMSampleBuffer`). `NULL` is returned if there is an error

<a id="Discussion"></a>

## Discussion

Attachments can then be added/removed directly by the caller, using Core Foundation APIs. On return, the caller doesn’t own the returned array of attachments dictionaries, and must retain it if the caller needs to maintain a reference to it. If there are no sample attachments yet, and createIfNecessary is true, a new `CFArray` containing N empty `CFMutableDictionaries` is returned (where N is the number of samples in the `CMSampleBuffer`), so that attachments can be added directly by the caller. If there are no sample attachments yet, and `createIfNecessary` is false, `NULL` is returned. Once the `CFArray` has been created, subsequent calls will return it, even if there are still no sample attachments in the array.

## See Also

### Managing Attachments

- [Sample Attachment Keys](sample-attachment-keys.md): Keys that specify attachments to individual samples in a buffer.
