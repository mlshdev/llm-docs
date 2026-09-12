> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloadingcontentinformationrequest](https://developer.apple.com/documentation/avfoundation/avassetresourceloadingcontentinformationrequest)

# AVAssetResourceLoadingContentInformationRequest (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A query for retrieving essential information about a resource that an asset resource-loading request references.

## Declaration

```swift
class AVAssetResourceLoadingContentInformationRequest
```

<a id="overview"></a>

## Overview

When a resource loading delegate, which must implement the [AVAssetResourceLoaderDelegate](avassetresourceloaderdelegate.md) protocol, receives an instance of [AVAssetResourceLoadingRequest](avassetresourceloadingrequest.md) when the [resourceLoader(\_:shouldWaitForLoadingOfRequestedResource:)](avassetresourceloaderdelegate/resourceloader%28__shouldwaitforloadingofrequestedresource_%29.md) is invoked and accepts responsibility for loading the resource, it must check whether the [contentInformationRequest](avassetresourceloadingrequest/contentinformationrequest.md) property of the [AVAssetResourceLoadingRequest](avassetresourceloadingrequest.md) is not `nil`. Whenever the value is not `nil`, the request includes a query for the information that `AVAssetResourceLoadingContentInformationRequest` encapsulates. In response to such queries, the resource loading delegate should set the values of the content information request’s properties appropriately before invoking the [AVAssetResourceLoadingRequest](avassetresourceloadingrequest.md) method [finishLoading()](avassetresourceloadingrequest/finishloading%28%29.md).

When [finishLoading()](avassetresourceloadingrequest/finishloading%28%29.md) is invoked, the values of the properties of its [contentInformationRequest](avassetresourceloadingrequest/contentinformationrequest.md) property will, in part, determine how the requested resource is processed. For example, if the requested resource’s URL is the URL of an [AVURLAsset](avurlasset.md) and [contentType](avassetresourceloadingcontentinformationrequest/contenttype.md) is set by the resource loading delegate to a value that the underlying media system doesn’t recognize as a supported media file type, operations on the `AVURLAsset`, such as playback, are likely to fail.

## Topics

### Configuring content information

- [allowedContentTypes](avassetresourceloadingcontentinformationrequest/allowedcontenttypes.md): The types of data that are accepted as a valid response for the requested resource.
- [contentType](avassetresourceloadingcontentinformationrequest/contenttype.md): The UTI that specifies the type of data contained by the requested resource.
- [contentLength](avassetresourceloadingcontentinformationrequest/contentlength.md): The length, in bytes, of the requested resource.
- [isByteRangeAccessSupported](avassetresourceloadingcontentinformationrequest/isbyterangeaccesssupported.md): A Boolean value that indicates whether random access to arbitrary ranges of bytes of the resource is supported.
- [renewalDate](avassetresourceloadingcontentinformationrequest/renewaldate.md): The date at which a new resource loading request will be issued for resources that expire, if the media system still requires it.
- [isEntireLengthAvailableOnDemand](avassetresourceloadingcontentinformationrequest/isentirelengthavailableondemand.md): A Boolean value that indicates whether asset data loading can expect data immediately.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Resource loading

- [AVAssetResourceLoader](avassetresourceloader.md): An object that mediates resource requests from a URL asset.
- [AVAssetResourceLoaderDelegate](avassetresourceloaderdelegate.md): Methods you can implement to handle resource-loading requests coming from a URL asset.
- [AVAssetResourceLoadingRequest](avassetresourceloadingrequest.md): An object that encapsulates information about a resource request from a resource loader object.
- [AVAssetResourceRenewalRequest](avassetresourcerenewalrequest.md): An object that encapsulates information about a resource request from a resource loader to renew a previously issued request.
- [AVAssetResourceLoadingRequestor](avassetresourceloadingrequestor.md): An object that contains information about the originator of a resource-loading request.
- [AVAssetResourceLoadingDataRequest](avassetresourceloadingdatarequest.md): An object for requesting data from a resource that an asset resource-loading request references.

# AVAssetResourceLoadingContentInformationRequest (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A query for retrieving essential information about a resource that an asset resource-loading request references.

## Declaration

```objectivec
@interface AVAssetResourceLoadingContentInformationRequest : NSObject
```

<a id="overview"></a>

## Overview

When a resource loading delegate, which must implement the [AVAssetResourceLoaderDelegate](avassetresourceloaderdelegate.md) protocol, receives an instance of [AVAssetResourceLoadingRequest](avassetresourceloadingrequest.md) when the [resourceLoader:shouldWaitForLoadingOfRequestedResource:](avassetresourceloaderdelegate/resourceloader%28__shouldwaitforloadingofrequestedresource_%29.md) is invoked and accepts responsibility for loading the resource, it must check whether the [contentInformationRequest](avassetresourceloadingrequest/contentinformationrequest.md) property of the [AVAssetResourceLoadingRequest](avassetresourceloadingrequest.md) is not `nil`. Whenever the value is not `nil`, the request includes a query for the information that `AVAssetResourceLoadingContentInformationRequest` encapsulates. In response to such queries, the resource loading delegate should set the values of the content information request’s properties appropriately before invoking the [AVAssetResourceLoadingRequest](avassetresourceloadingrequest.md) method [finishLoading](avassetresourceloadingrequest/finishloading%28%29.md).

When [finishLoading](avassetresourceloadingrequest/finishloading%28%29.md) is invoked, the values of the properties of its [contentInformationRequest](avassetresourceloadingrequest/contentinformationrequest.md) property will, in part, determine how the requested resource is processed. For example, if the requested resource’s URL is the URL of an [AVURLAsset](avurlasset.md) and [contentType](avassetresourceloadingcontentinformationrequest/contenttype.md) is set by the resource loading delegate to a value that the underlying media system doesn’t recognize as a supported media file type, operations on the `AVURLAsset`, such as playback, are likely to fail.

## Topics

### Configuring content information

- [allowedContentTypes](avassetresourceloadingcontentinformationrequest/allowedcontenttypes.md): The types of data that are accepted as a valid response for the requested resource.
- [contentType](avassetresourceloadingcontentinformationrequest/contenttype.md): The UTI that specifies the type of data contained by the requested resource.
- [contentLength](avassetresourceloadingcontentinformationrequest/contentlength.md): The length, in bytes, of the requested resource.
- [byteRangeAccessSupported](avassetresourceloadingcontentinformationrequest/isbyterangeaccesssupported.md): A Boolean value that indicates whether random access to arbitrary ranges of bytes of the resource is supported.
- [renewalDate](avassetresourceloadingcontentinformationrequest/renewaldate.md): The date at which a new resource loading request will be issued for resources that expire, if the media system still requires it.
- [entireLengthAvailableOnDemand](avassetresourceloadingcontentinformationrequest/isentirelengthavailableondemand.md): A Boolean value that indicates whether asset data loading can expect data immediately.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Resource loading

- [AVAssetResourceLoader](avassetresourceloader.md): An object that mediates resource requests from a URL asset.
- [AVAssetResourceLoaderDelegate](avassetresourceloaderdelegate.md): Methods you can implement to handle resource-loading requests coming from a URL asset.
- [AVAssetResourceLoadingRequest](avassetresourceloadingrequest.md): An object that encapsulates information about a resource request from a resource loader object.
- [AVAssetResourceRenewalRequest](avassetresourcerenewalrequest.md): An object that encapsulates information about a resource request from a resource loader to renew a previously issued request.
- [AVAssetResourceLoadingRequestor](avassetresourceloadingrequestor.md): An object that contains information about the originator of a resource-loading request.
- [AVAssetResourceLoadingDataRequest](avassetresourceloadingdatarequest.md): An object for requesting data from a resource that an asset resource-loading request references.
