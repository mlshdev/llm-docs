> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourcerenewalrequest](https://developer.apple.com/documentation/avfoundation/avassetresourcerenewalrequest)

# AVAssetResourceRenewalRequest (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that encapsulates information about a resource request from a resource loader to renew a previously issued request.

## Declaration

```swift
class AVAssetResourceRenewalRequest
```

<a id="overview"></a>

## Overview

When an [AVURLAsset](avurlasset.md) needs to renew a resource, because the [renewalDate](avassetresourceloadingcontentinformationrequest/renewaldate.md) has been set on a previous loading request, it asks its [AVAssetResourceLoader](avassetresourceloader.md) object to assist. The resource loader encapsulates the request information by creating an instance of this object, which it then hands to its delegate for processing. The delegate uses the information in this object to perform the request and report on the success or failure of the operation.

The `AVAssetResourceRenewalRequest` class is a subclass of [AVAssetResourceLoadingRequest](avassetresourceloadingrequest.md).

## Relationships

### Inherits From

- [AVAssetResourceLoadingRequest](avassetresourceloadingrequest.md)

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
- [AVAssetResourceLoadingRequestor](avassetresourceloadingrequestor.md): An object that contains information about the originator of a resource-loading request.
- [AVAssetResourceLoadingDataRequest](avassetresourceloadingdatarequest.md): An object for requesting data from a resource that an asset resource-loading request references.
- [AVAssetResourceLoadingContentInformationRequest](avassetresourceloadingcontentinformationrequest.md): A query for retrieving essential information about a resource that an asset resource-loading request references.

# AVAssetResourceRenewalRequest (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that encapsulates information about a resource request from a resource loader to renew a previously issued request.

## Declaration

```objectivec
@interface AVAssetResourceRenewalRequest : AVAssetResourceLoadingRequest
```

<a id="overview"></a>

## Overview

When an [AVURLAsset](avurlasset.md) needs to renew a resource, because the [renewalDate](avassetresourceloadingcontentinformationrequest/renewaldate.md) has been set on a previous loading request, it asks its [AVAssetResourceLoader](avassetresourceloader.md) object to assist. The resource loader encapsulates the request information by creating an instance of this object, which it then hands to its delegate for processing. The delegate uses the information in this object to perform the request and report on the success or failure of the operation.

The `AVAssetResourceRenewalRequest` class is a subclass of [AVAssetResourceLoadingRequest](avassetresourceloadingrequest.md).

## Relationships

### Inherits From

- [AVAssetResourceLoadingRequest](avassetresourceloadingrequest.md)

## See Also

### Resource loading

- [AVAssetResourceLoader](avassetresourceloader.md): An object that mediates resource requests from a URL asset.
- [AVAssetResourceLoaderDelegate](avassetresourceloaderdelegate.md): Methods you can implement to handle resource-loading requests coming from a URL asset.
- [AVAssetResourceLoadingRequest](avassetresourceloadingrequest.md): An object that encapsulates information about a resource request from a resource loader object.
- [AVAssetResourceLoadingRequestor](avassetresourceloadingrequestor.md): An object that contains information about the originator of a resource-loading request.
- [AVAssetResourceLoadingDataRequest](avassetresourceloadingdatarequest.md): An object for requesting data from a resource that an asset resource-loading request references.
- [AVAssetResourceLoadingContentInformationRequest](avassetresourceloadingcontentinformationrequest.md): A query for retrieving essential information about a resource that an asset resource-loading request references.
