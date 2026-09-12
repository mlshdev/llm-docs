> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterotasoftwareupdateprovider-8bnit](https://developer.apple.com/documentation/matter/mtrbaseclusterotasoftwareupdateprovider-8bnit)

# MTRBaseClusterOTASoftwareUpdateProvider (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
class MTRBaseClusterOTASoftwareUpdateProvider
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrbaseclusterotasoftwareupdateprovider-8bnit/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [applyUpdateRequest(with:completion:)](mtrbaseclusterotasoftwareupdateprovider-8bnit/applyupdaterequest%28with_completion_%29.md)
- [notifyUpdateApplied(with:completion:)](mtrbaseclusterotasoftwareupdateprovider-8bnit/notifyupdateapplied%28with_completion_%29.md)
- [queryImage(with:completion:)](mtrbaseclusterotasoftwareupdateprovider-8bnit/queryimage%28with_completion_%29.md)
- [readAttributeAcceptedCommandList(completion:)](mtrbaseclusterotasoftwareupdateprovider-8bnit/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeList(completion:)](mtrbaseclusterotasoftwareupdateprovider-8bnit/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevision(completion:)](mtrbaseclusterotasoftwareupdateprovider-8bnit/readattributeclusterrevision%28completion_%29.md)
- [readAttributeFeatureMap(completion:)](mtrbaseclusterotasoftwareupdateprovider-8bnit/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclusterotasoftwareupdateprovider-8bnit/readattributegeneratedcommandlist%28completion_%29.md)
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterotasoftwareupdateprovider-8bnit/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterotasoftwareupdateprovider-8bnit/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterotasoftwareupdateprovider-8bnit/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterotasoftwareupdateprovider-8bnit/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterotasoftwareupdateprovider-8bnit/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterotasoftwareupdateprovider-8bnit/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterotasoftwareupdateprovider-8bnit/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterotasoftwareupdateprovider-8bnit/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterotasoftwareupdateprovider-8bnit/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterotasoftwareupdateprovider-8bnit/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)

### Inherited By

- [MTRBaseClusterOtaSoftwareUpdateProvider](mtrbaseclusterotasoftwareupdateprovider-2vync.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTRBaseClusterOTASoftwareUpdateProvider (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
@interface MTRBaseClusterOTASoftwareUpdateProvider : MTRGenericBaseCluster
```

## Topics

### Initializers

- [initWithDevice:endpointID:queue:](mtrbaseclusterotasoftwareupdateprovider-8bnit/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [applyUpdateRequestWithParams:completion:](mtrbaseclusterotasoftwareupdateprovider-8bnit/applyupdaterequest%28with_completion_%29.md)
- [notifyUpdateAppliedWithParams:completion:](mtrbaseclusterotasoftwareupdateprovider-8bnit/notifyupdateapplied%28with_completion_%29.md)
- [queryImageWithParams:completion:](mtrbaseclusterotasoftwareupdateprovider-8bnit/queryimage%28with_completion_%29.md)
- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclusterotasoftwareupdateprovider-8bnit/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeListWithCompletion:](mtrbaseclusterotasoftwareupdateprovider-8bnit/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclusterotasoftwareupdateprovider-8bnit/readattributeclusterrevision%28completion_%29.md)
- [readAttributeFeatureMapWithCompletion:](mtrbaseclusterotasoftwareupdateprovider-8bnit/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclusterotasoftwareupdateprovider-8bnit/readattributegeneratedcommandlist%28completion_%29.md)
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterotasoftwareupdateprovider-8bnit/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterotasoftwareupdateprovider-8bnit/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterotasoftwareupdateprovider-8bnit/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterotasoftwareupdateprovider-8bnit/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterotasoftwareupdateprovider-8bnit/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterotasoftwareupdateprovider-8bnit/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterotasoftwareupdateprovider-8bnit/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterotasoftwareupdateprovider-8bnit/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterotasoftwareupdateprovider-8bnit/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterotasoftwareupdateprovider-8bnit/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)

### Inherited By

- [MTRBaseClusterOtaSoftwareUpdateProvider](mtrbaseclusterotasoftwareupdateprovider-2vync.md)
