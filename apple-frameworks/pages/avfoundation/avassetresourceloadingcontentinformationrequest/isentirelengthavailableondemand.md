> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloadingcontentinformationrequest/isentirelengthavailableondemand](https://developer.apple.com/documentation/avfoundation/avassetresourceloadingcontentinformationrequest/isentirelengthavailableondemand)

# isEntireLengthAvailableOnDemand (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether asset data loading can expect data immediately.

## Declaration

```swift
var isEntireLengthAvailableOnDemand: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Before you finish loading an [AVAssetResourceLoadingRequest](../avassetresourceloadingrequest.md), if its [contentInformationRequest](../avassetresourceloadingrequest/contentinformationrequest.md) isn’t `nil`, set the value to [true](https://developer.apple.com/documentation/swift/true) to indicate that all asset data is available. This may be [true](https://developer.apple.com/documentation/swift/true) because the data is fully cached, or because the custom URL scheme ultimately refers to files on local storage, which allows for significant data flow optimizations.

For backward compatibility, this property defaults to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring content information

- [allowedContentTypes](allowedcontenttypes.md): The types of data that are accepted as a valid response for the requested resource.
- [contentType](contenttype.md): The UTI that specifies the type of data contained by the requested resource.
- [contentLength](contentlength.md): The length, in bytes, of the requested resource.
- [isByteRangeAccessSupported](isbyterangeaccesssupported.md): A Boolean value that indicates whether random access to arbitrary ranges of bytes of the resource is supported.
- [renewalDate](renewaldate.md): The date at which a new resource loading request will be issued for resources that expire, if the media system still requires it.

# entireLengthAvailableOnDemand (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether asset data loading can expect data immediately.

## Declaration

```objectivec
@property (nonatomic, getter=isEntireLengthAvailableOnDemand) BOOL entireLengthAvailableOnDemand;
```

<a id="Discussion"></a>

## Discussion

Before you finish loading an [AVAssetResourceLoadingRequest](../avassetresourceloadingrequest.md), if its [contentInformationRequest](../avassetresourceloadingrequest/contentinformationrequest.md) isn’t `nil`, set the value to [true](https://developer.apple.com/documentation/swift/true) to indicate that all asset data is available. This may be [true](https://developer.apple.com/documentation/swift/true) because the data is fully cached, or because the custom URL scheme ultimately refers to files on local storage, which allows for significant data flow optimizations.

For backward compatibility, this property defaults to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring content information

- [allowedContentTypes](allowedcontenttypes.md): The types of data that are accepted as a valid response for the requested resource.
- [contentType](contenttype.md): The UTI that specifies the type of data contained by the requested resource.
- [contentLength](contentlength.md): The length, in bytes, of the requested resource.
- [byteRangeAccessSupported](isbyterangeaccesssupported.md): A Boolean value that indicates whether random access to arbitrary ranges of bytes of the resource is supported.
- [renewalDate](renewaldate.md): The date at which a new resource loading request will be issued for resources that expire, if the media system still requires it.
