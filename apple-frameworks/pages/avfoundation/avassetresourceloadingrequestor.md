> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloadingrequestor](https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequestor)

# AVAssetResourceLoadingRequestor (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

An object that contains information about the originator of a resource-loading request.

## Declaration

```swift
class AVAssetResourceLoadingRequestor
```

## Topics

### Retrieving expired session reports

- [providesExpiredSessionReports](avassetresourceloadingrequestor/providesexpiredsessionreports.md): A Boolean value that indicates whether the requestor provides expired session reports.

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
- [AVAssetResourceLoadingDataRequest](avassetresourceloadingdatarequest.md): An object for requesting data from a resource that an asset resource-loading request references.
- [AVAssetResourceLoadingContentInformationRequest](avassetresourceloadingcontentinformationrequest.md): A query for retrieving essential information about a resource that an asset resource-loading request references.

# AVAssetResourceLoadingRequestor (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

An object that contains information about the originator of a resource-loading request.

## Declaration

```objectivec
@interface AVAssetResourceLoadingRequestor : NSObject
```

## Topics

### Retrieving expired session reports

- [providesExpiredSessionReports](avassetresourceloadingrequestor/providesexpiredsessionreports.md): A Boolean value that indicates whether the requestor provides expired session reports.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Resource loading

- [AVAssetResourceLoader](avassetresourceloader.md): An object that mediates resource requests from a URL asset.
- [AVAssetResourceLoaderDelegate](avassetresourceloaderdelegate.md): Methods you can implement to handle resource-loading requests coming from a URL asset.
- [AVAssetResourceLoadingRequest](avassetresourceloadingrequest.md): An object that encapsulates information about a resource request from a resource loader object.
- [AVAssetResourceRenewalRequest](avassetresourcerenewalrequest.md): An object that encapsulates information about a resource request from a resource loader to renew a previously issued request.
- [AVAssetResourceLoadingDataRequest](avassetresourceloadingdatarequest.md): An object for requesting data from a resource that an asset resource-loading request references.
- [AVAssetResourceLoadingContentInformationRequest](avassetresourceloadingcontentinformationrequest.md): A query for retrieving essential information about a resource that an asset resource-loading request references.
