> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloaderdelegate](https://developer.apple.com/documentation/avfoundation/avassetresourceloaderdelegate)

# AVAssetResourceLoaderDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Methods you can implement to handle resource-loading requests coming from a URL asset.

## Declaration

```swift
protocol AVAssetResourceLoaderDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

A class should adopt this protocol when associated with the asset’s resource loader—that is, an instance of the [AVAssetResourceLoader](avassetresourceloader.md) class. The resource loader works with your delegate to process the request.

## Topics

### Processing resource requests

- [resourceLoader(\_:shouldWaitForLoadingOfRequestedResource:)](avassetresourceloaderdelegate/resourceloader%28__shouldwaitforloadingofrequestedresource_%29.md): Asks the delegate if it wants to load the requested resource.
- [resourceLoader(\_:shouldWaitForRenewalOfRequestedResource:)](avassetresourceloaderdelegate/resourceloader%28__shouldwaitforrenewalofrequestedresource_%29.md): Tells the delegate when assistance is required of the application to renew a resource.
- [resourceLoader(\_:didCancel:)](avassetresourceloaderdelegate/resourceloader%28__didcancel_%29-3nl51.md): Informs the delegate that a prior loading request has been cancelled.

### Processing authentication challenges

- [resourceLoader(\_:shouldWaitForResponseTo:)](avassetresourceloaderdelegate/resourceloader%28__shouldwaitforresponseto_%29.md): Tells the delegate that assistance is required of the application to respond to an authentication challenge.
- [resourceLoader(\_:didCancel:)](avassetresourceloaderdelegate/resourceloader%28__didcancel_%29-1wqin.md): Informs the delegate that a prior authentication challenge has been cancelled.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Resource loading

- [AVAssetResourceLoader](avassetresourceloader.md): An object that mediates resource requests from a URL asset.
- [AVAssetResourceLoadingRequest](avassetresourceloadingrequest.md): An object that encapsulates information about a resource request from a resource loader object.
- [AVAssetResourceRenewalRequest](avassetresourcerenewalrequest.md): An object that encapsulates information about a resource request from a resource loader to renew a previously issued request.
- [AVAssetResourceLoadingRequestor](avassetresourceloadingrequestor.md): An object that contains information about the originator of a resource-loading request.
- [AVAssetResourceLoadingDataRequest](avassetresourceloadingdatarequest.md): An object for requesting data from a resource that an asset resource-loading request references.
- [AVAssetResourceLoadingContentInformationRequest](avassetresourceloadingcontentinformationrequest.md): A query for retrieving essential information about a resource that an asset resource-loading request references.

# AVAssetResourceLoaderDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Methods you can implement to handle resource-loading requests coming from a URL asset.

## Declaration

```objectivec
@protocol AVAssetResourceLoaderDelegate <NSObject>
```

<a id="overview"></a>

## Overview

A class should adopt this protocol when associated with the asset’s resource loader—that is, an instance of the [AVAssetResourceLoader](avassetresourceloader.md) class. The resource loader works with your delegate to process the request.

## Topics

### Processing resource requests

- [resourceLoader:shouldWaitForLoadingOfRequestedResource:](avassetresourceloaderdelegate/resourceloader%28__shouldwaitforloadingofrequestedresource_%29.md): Asks the delegate if it wants to load the requested resource.
- [resourceLoader:shouldWaitForRenewalOfRequestedResource:](avassetresourceloaderdelegate/resourceloader%28__shouldwaitforrenewalofrequestedresource_%29.md): Tells the delegate when assistance is required of the application to renew a resource.
- [resourceLoader:didCancelLoadingRequest:](avassetresourceloaderdelegate/resourceloader%28__didcancel_%29-3nl51.md): Informs the delegate that a prior loading request has been cancelled.

### Processing authentication challenges

- [resourceLoader:shouldWaitForResponseToAuthenticationChallenge:](avassetresourceloaderdelegate/resourceloader%28__shouldwaitforresponseto_%29.md): Tells the delegate that assistance is required of the application to respond to an authentication challenge.
- [resourceLoader:didCancelAuthenticationChallenge:](avassetresourceloaderdelegate/resourceloader%28__didcancel_%29-1wqin.md): Informs the delegate that a prior authentication challenge has been cancelled.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Resource loading

- [AVAssetResourceLoader](avassetresourceloader.md): An object that mediates resource requests from a URL asset.
- [AVAssetResourceLoadingRequest](avassetresourceloadingrequest.md): An object that encapsulates information about a resource request from a resource loader object.
- [AVAssetResourceRenewalRequest](avassetresourcerenewalrequest.md): An object that encapsulates information about a resource request from a resource loader to renew a previously issued request.
- [AVAssetResourceLoadingRequestor](avassetresourceloadingrequestor.md): An object that contains information about the originator of a resource-loading request.
- [AVAssetResourceLoadingDataRequest](avassetresourceloadingdatarequest.md): An object for requesting data from a resource that an asset resource-loading request references.
- [AVAssetResourceLoadingContentInformationRequest](avassetresourceloadingcontentinformationrequest.md): A query for retrieving essential information about a resource that an asset resource-loading request references.
