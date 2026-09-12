> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloadingcontentinformationrequest/allowedcontenttypes](https://developer.apple.com/documentation/avfoundation/avassetresourceloadingcontentinformationrequest/allowedcontenttypes)

# allowedContentTypes (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 13.1+ · macOS 10.13.2+ · tvOS 11.2+ · visionOS 1.0+

The types of data that are accepted as a valid response for the requested resource.

## Declaration

```swift
var allowedContentTypes: [String]? { get }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of file format UTIs. When `allowedContentTypes` is non-nil, the value of [contentType](contenttype.md) must be set to a value contained in `allowedContentTypes` or `nil`.

## See Also

### Configuring content information

- [contentType](contenttype.md): The UTI that specifies the type of data contained by the requested resource.
- [contentLength](contentlength.md): The length, in bytes, of the requested resource.
- [isByteRangeAccessSupported](isbyterangeaccesssupported.md): A Boolean value that indicates whether random access to arbitrary ranges of bytes of the resource is supported.
- [renewalDate](renewaldate.md): The date at which a new resource loading request will be issued for resources that expire, if the media system still requires it.
- [isEntireLengthAvailableOnDemand](isentirelengthavailableondemand.md): A Boolean value that indicates whether asset data loading can expect data immediately.

# allowedContentTypes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 13.1+ · macOS 10.13.2+ · tvOS 11.2+ · visionOS 1.0+

The types of data that are accepted as a valid response for the requested resource.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<NSString *> * allowedContentTypes;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of file format UTIs. When `allowedContentTypes` is non-nil, the value of [contentType](contenttype.md) must be set to a value contained in `allowedContentTypes` or `nil`.

## See Also

### Configuring content information

- [contentType](contenttype.md): The UTI that specifies the type of data contained by the requested resource.
- [contentLength](contentlength.md): The length, in bytes, of the requested resource.
- [byteRangeAccessSupported](isbyterangeaccesssupported.md): A Boolean value that indicates whether random access to arbitrary ranges of bytes of the resource is supported.
- [renewalDate](renewaldate.md): The date at which a new resource loading request will be issued for resources that expire, if the media system still requires it.
- [entireLengthAvailableOnDemand](isentirelengthavailableondemand.md): A Boolean value that indicates whether asset data loading can expect data immediately.
