> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloadingcontentinformationrequest/contenttype](https://developer.apple.com/documentation/avfoundation/avassetresourceloadingcontentinformationrequest/contenttype)

# contentType (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The UTI that specifies the type of data contained by the requested resource.

## Declaration

```swift
var contentType: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Before finishing loading an [AVAssetResourceLoadingRequest](../avassetresourceloadingrequest.md) instance, if its [contentInformationRequest](../avassetresourceloadingrequest/contentinformationrequest.md) property is  not `nil`, set the value of this property to a UTI indicating the type of data contained by the requested resource.

When responding to an `AVAssetResourceLoadingRequest` for a FairPlay Streaming key, only set `contentType` to [AVStreamingKeyDeliveryContentKeyType](../avstreamingkeydeliverycontentkeytype.md), [AVStreamingKeyDeliveryPersistentContentKeyType](../avstreamingkeydeliverypersistentcontentkeytype.md), or `nil`. The value of contentType must be contained in the [allowedContentTypes](allowedcontenttypes.md) property or `nil`.

## See Also

### Configuring content information

- [allowedContentTypes](allowedcontenttypes.md): The types of data that are accepted as a valid response for the requested resource.
- [contentLength](contentlength.md): The length, in bytes, of the requested resource.
- [isByteRangeAccessSupported](isbyterangeaccesssupported.md): A Boolean value that indicates whether random access to arbitrary ranges of bytes of the resource is supported.
- [renewalDate](renewaldate.md): The date at which a new resource loading request will be issued for resources that expire, if the media system still requires it.
- [isEntireLengthAvailableOnDemand](isentirelengthavailableondemand.md): A Boolean value that indicates whether asset data loading can expect data immediately.

# contentType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The UTI that specifies the type of data contained by the requested resource.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * contentType;
```

<a id="Discussion"></a>

## Discussion

Before finishing loading an [AVAssetResourceLoadingRequest](../avassetresourceloadingrequest.md) instance, if its [contentInformationRequest](../avassetresourceloadingrequest/contentinformationrequest.md) property is  not `nil`, set the value of this property to a UTI indicating the type of data contained by the requested resource.

When responding to an `AVAssetResourceLoadingRequest` for a FairPlay Streaming key, only set `contentType` to [AVStreamingKeyDeliveryContentKeyType](../avstreamingkeydeliverycontentkeytype.md), [AVStreamingKeyDeliveryPersistentContentKeyType](../avstreamingkeydeliverypersistentcontentkeytype.md), or `nil`. The value of contentType must be contained in the [allowedContentTypes](allowedcontenttypes.md) property or `nil`.

## See Also

### Configuring content information

- [allowedContentTypes](allowedcontenttypes.md): The types of data that are accepted as a valid response for the requested resource.
- [contentLength](contentlength.md): The length, in bytes, of the requested resource.
- [byteRangeAccessSupported](isbyterangeaccesssupported.md): A Boolean value that indicates whether random access to arbitrary ranges of bytes of the resource is supported.
- [renewalDate](renewaldate.md): The date at which a new resource loading request will be issued for resources that expire, if the media system still requires it.
- [entireLengthAvailableOnDemand](isentirelengthavailableondemand.md): A Boolean value that indicates whether asset data loading can expect data immediately.
