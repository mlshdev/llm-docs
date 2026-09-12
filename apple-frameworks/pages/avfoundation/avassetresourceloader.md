> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloader](https://developer.apple.com/documentation/avfoundation/avassetresourceloader)

# AVAssetResourceLoader (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An object that mediates resource requests from a URL asset.

## Declaration

```swift
class AVAssetResourceLoader
```

<a id="overview"></a>

## Overview

You do not create resource loader objects yourself. Instead, you retrieve a resource loader from the [resourceLoader](avurlasset/resourceloader.md) property of an [AVURLAsset](avurlasset.md) object and use it to assign your custom delegate object.

The delegate you associate with this object must adopt the [AVAssetResourceLoaderDelegate](avassetresourceloaderdelegate.md) protocol. For more information, see [AVAssetResourceLoaderDelegate](avassetresourceloaderdelegate.md).

## Topics

### Accessing the delegate

- [setDelegate(\_:queue:)](avassetresourceloader/setdelegate%28__queue_%29.md): Sets the delegate and dispatch queue to use with the resource loader.
- [delegate](avassetresourceloader/delegate.md): The delegate object to use when handling resource requests.
- [AVAssetResourceLoaderDelegate](avassetresourceloaderdelegate.md): Methods you can implement to handle resource-loading requests coming from a URL asset.
- [delegateQueue](avassetresourceloader/delegatequeue.md): The dispatch queue to use when handling resource requests.

### Loading content keys

- [preloadsEligibleContentKeys](avassetresourceloader/preloadseligiblecontentkeys.md): A Boolean value that indicates whether content keys will be loaded as quickly as possible.

### Supporting Common Media Client Data

- [sendsCommonMediaClientDataAsHTTPHeaders](avassetresourceloader/sendscommonmediaclientdataashttpheaders.md): A Boolean value that indicates whether to enable attaching Common Media Client Data as HTTP request headers.

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

- [AVAssetResourceLoaderDelegate](avassetresourceloaderdelegate.md): Methods you can implement to handle resource-loading requests coming from a URL asset.
- [AVAssetResourceLoadingRequest](avassetresourceloadingrequest.md): An object that encapsulates information about a resource request from a resource loader object.
- [AVAssetResourceRenewalRequest](avassetresourcerenewalrequest.md): An object that encapsulates information about a resource request from a resource loader to renew a previously issued request.
- [AVAssetResourceLoadingRequestor](avassetresourceloadingrequestor.md): An object that contains information about the originator of a resource-loading request.
- [AVAssetResourceLoadingDataRequest](avassetresourceloadingdatarequest.md): An object for requesting data from a resource that an asset resource-loading request references.
- [AVAssetResourceLoadingContentInformationRequest](avassetresourceloadingcontentinformationrequest.md): A query for retrieving essential information about a resource that an asset resource-loading request references.

# AVAssetResourceLoader (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An object that mediates resource requests from a URL asset.

## Declaration

```objectivec
@interface AVAssetResourceLoader : NSObject
```

<a id="overview"></a>

## Overview

You do not create resource loader objects yourself. Instead, you retrieve a resource loader from the [resourceLoader](avurlasset/resourceloader.md) property of an [AVURLAsset](avurlasset.md) object and use it to assign your custom delegate object.

The delegate you associate with this object must adopt the [AVAssetResourceLoaderDelegate](avassetresourceloaderdelegate.md) protocol. For more information, see [AVAssetResourceLoaderDelegate](avassetresourceloaderdelegate.md).

## Topics

### Accessing the delegate

- [setDelegate:queue:](avassetresourceloader/setdelegate%28__queue_%29.md): Sets the delegate and dispatch queue to use with the resource loader.
- [delegate](avassetresourceloader/delegate.md): The delegate object to use when handling resource requests.
- [AVAssetResourceLoaderDelegate](avassetresourceloaderdelegate.md): Methods you can implement to handle resource-loading requests coming from a URL asset.
- [delegateQueue](avassetresourceloader/delegatequeue.md): The dispatch queue to use when handling resource requests.

### Loading content keys

- [preloadsEligibleContentKeys](avassetresourceloader/preloadseligiblecontentkeys.md): A Boolean value that indicates whether content keys will be loaded as quickly as possible.

### Supporting Common Media Client Data

- [sendsCommonMediaClientDataAsHTTPHeaders](avassetresourceloader/sendscommonmediaclientdataashttpheaders.md): A Boolean value that indicates whether to enable attaching Common Media Client Data as HTTP request headers.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Resource loading

- [AVAssetResourceLoaderDelegate](avassetresourceloaderdelegate.md): Methods you can implement to handle resource-loading requests coming from a URL asset.
- [AVAssetResourceLoadingRequest](avassetresourceloadingrequest.md): An object that encapsulates information about a resource request from a resource loader object.
- [AVAssetResourceRenewalRequest](avassetresourcerenewalrequest.md): An object that encapsulates information about a resource request from a resource loader to renew a previously issued request.
- [AVAssetResourceLoadingRequestor](avassetresourceloadingrequestor.md): An object that contains information about the originator of a resource-loading request.
- [AVAssetResourceLoadingDataRequest](avassetresourceloadingdatarequest.md): An object for requesting data from a resource that an asset resource-loading request references.
- [AVAssetResourceLoadingContentInformationRequest](avassetresourceloadingcontentinformationrequest.md): A query for retrieving essential information about a resource that an asset resource-loading request references.
