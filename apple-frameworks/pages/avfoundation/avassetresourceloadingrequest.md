> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloadingrequest](https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest)

# AVAssetResourceLoadingRequest (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An object that encapsulates information about a resource request from a resource loader object.

## Declaration

```swift
class AVAssetResourceLoadingRequest
```

<a id="overview"></a>

## Overview

When an [AVURLAsset](avurlasset.md) object needs help loading a resource, it asks its [AVAssetResourceLoader](avassetresourceloader.md) object to assist. The resource loader encapsulates the request information by creating an instance of this object, which it then hands to its delegate object for processing. The delegate uses the information in this object to perform the request and report on the success or failure of the operation.

## Topics

### Accessing the request data

- [request](avassetresourceloadingrequest/request.md): The URL request object for the resource.
- [requestor](avassetresourceloadingrequest/requestor.md): The asset resource requestor that made the request.
- [contentInformationRequest](avassetresourceloadingrequest/contentinformationrequest.md): The information for a requested resource.
- [dataRequest](avassetresourceloadingrequest/datarequest.md): The range of requested resource data.
- [redirect](avassetresourceloadingrequest/redirect.md): An URL request instance if the loading request was redirected.
- [streamingContentKeyRequestData(forApp:contentIdentifier:options:)](avassetresourceloadingrequest/streamingcontentkeyrequestdata%28forapp_contentidentifier_options_%29.md): Deprecated. Obtains key request data for a specific combination of application and content.
- [persistentContentKey(fromKeyVendorResponse:options:)](avassetresourceloadingrequest/persistentcontentkey%28fromkeyvendorresponse_options_%29.md): Deprecated. Obtains a persistable content key from a context.
- [AVAssetResourceLoadingRequestStreamingContentKeyRequestRequiresPersistentKey](avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey.md): Deprecated. Specifies whether the content key request requires a persistable key to be returned from the key vendor.

### Reporting the result of the request

- [response](avassetresourceloadingrequest/response.md): The URL response for the loading request.
- [finishLoading()](avassetresourceloadingrequest/finishloading%28%29.md): Causes the receiver to treat the processing of the request as complete.
- [isCancelled](avassetresourceloadingrequest/iscancelled.md): A Boolean value that indicates whether the request has been cancelled.
- [finishLoading(with:)](avassetresourceloadingrequest/finishloading%28with_%29.md): Causes the receiver to handle the failure to load a resource for which a resource loader’s delegate took responsibility.
- [isFinished](avassetresourceloadingrequest/isfinished.md): A Boolean value that indicates whether loading of the resource has finished.
- [finishLoading(with:data:redirect:)](avassetresourceloadingrequest/finishloading%28with_data_redirect_%29.md): Deprecated. Causes the receiver to finish loading a resource for which a resource loader’s delegate took responsibility .

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVAssetResourceRenewalRequest](avassetresourcerenewalrequest.md)

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
- [AVAssetResourceRenewalRequest](avassetresourcerenewalrequest.md): An object that encapsulates information about a resource request from a resource loader to renew a previously issued request.
- [AVAssetResourceLoadingRequestor](avassetresourceloadingrequestor.md): An object that contains information about the originator of a resource-loading request.
- [AVAssetResourceLoadingDataRequest](avassetresourceloadingdatarequest.md): An object for requesting data from a resource that an asset resource-loading request references.
- [AVAssetResourceLoadingContentInformationRequest](avassetresourceloadingcontentinformationrequest.md): A query for retrieving essential information about a resource that an asset resource-loading request references.

# AVAssetResourceLoadingRequest (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An object that encapsulates information about a resource request from a resource loader object.

## Declaration

```objectivec
@interface AVAssetResourceLoadingRequest : NSObject
```

<a id="overview"></a>

## Overview

When an [AVURLAsset](avurlasset.md) object needs help loading a resource, it asks its [AVAssetResourceLoader](avassetresourceloader.md) object to assist. The resource loader encapsulates the request information by creating an instance of this object, which it then hands to its delegate object for processing. The delegate uses the information in this object to perform the request and report on the success or failure of the operation.

## Topics

### Accessing the request data

- [request](avassetresourceloadingrequest/request.md): The URL request object for the resource.
- [requestor](avassetresourceloadingrequest/requestor.md): The asset resource requestor that made the request.
- [contentInformationRequest](avassetresourceloadingrequest/contentinformationrequest.md): The information for a requested resource.
- [dataRequest](avassetresourceloadingrequest/datarequest.md): The range of requested resource data.
- [redirect](avassetresourceloadingrequest/redirect.md): An URL request instance if the loading request was redirected.
- [streamingContentKeyRequestDataForApp:contentIdentifier:options:error:](avassetresourceloadingrequest/streamingcontentkeyrequestdata%28forapp_contentidentifier_options_%29.md): Deprecated. Obtains key request data for a specific combination of application and content.
- [persistentContentKeyFromKeyVendorResponse:options:error:](avassetresourceloadingrequest/persistentcontentkey%28fromkeyvendorresponse_options_%29.md): Deprecated. Obtains a persistable content key from a context.
- [AVAssetResourceLoadingRequestStreamingContentKeyRequestRequiresPersistentKey](avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey.md): Deprecated. Specifies whether the content key request requires a persistable key to be returned from the key vendor.

### Reporting the result of the request

- [response](avassetresourceloadingrequest/response.md): The URL response for the loading request.
- [finishLoading](avassetresourceloadingrequest/finishloading%28%29.md): Causes the receiver to treat the processing of the request as complete.
- [cancelled](avassetresourceloadingrequest/iscancelled.md): A Boolean value that indicates whether the request has been cancelled.
- [finishLoadingWithError:](avassetresourceloadingrequest/finishloading%28with_%29.md): Causes the receiver to handle the failure to load a resource for which a resource loader’s delegate took responsibility.
- [finished](avassetresourceloadingrequest/isfinished.md): A Boolean value that indicates whether loading of the resource has finished.
- [finishLoadingWithResponse:data:redirect:](avassetresourceloadingrequest/finishloading%28with_data_redirect_%29.md): Deprecated. Causes the receiver to finish loading a resource for which a resource loader’s delegate took responsibility .

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVAssetResourceRenewalRequest](avassetresourcerenewalrequest.md)

## See Also

### Resource loading

- [AVAssetResourceLoader](avassetresourceloader.md): An object that mediates resource requests from a URL asset.
- [AVAssetResourceLoaderDelegate](avassetresourceloaderdelegate.md): Methods you can implement to handle resource-loading requests coming from a URL asset.
- [AVAssetResourceRenewalRequest](avassetresourcerenewalrequest.md): An object that encapsulates information about a resource request from a resource loader to renew a previously issued request.
- [AVAssetResourceLoadingRequestor](avassetresourceloadingrequestor.md): An object that contains information about the originator of a resource-loading request.
- [AVAssetResourceLoadingDataRequest](avassetresourceloadingdatarequest.md): An object for requesting data from a resource that an asset resource-loading request references.
- [AVAssetResourceLoadingContentInformationRequest](avassetresourceloadingcontentinformationrequest.md): A query for retrieving essential information about a resource that an asset resource-loading request references.
