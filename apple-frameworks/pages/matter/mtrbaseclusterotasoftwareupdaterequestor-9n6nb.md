> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterotasoftwareupdaterequestor-9n6nb](https://developer.apple.com/documentation/matter/mtrbaseclusterotasoftwareupdaterequestor-9n6nb)

# MTRBaseClusterOTASoftwareUpdateRequestor (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
class MTRBaseClusterOTASoftwareUpdateRequestor
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [announceOTAProvider(with:completion:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/announceotaprovider%28with_completion_%29.md)
- [readAttributeAcceptedCommandList(completion:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeList(completion:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevision(completion:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributeclusterrevision%28completion_%29.md)
- [readAttributeDefaultOTAProviders(with:completion:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributedefaultotaproviders%28with_completion_%29.md)
- [readAttributeFeatureMap(completion:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeUpdatePossible(completion:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributeupdatepossible%28completion_%29.md)
- [readAttributeUpdateState(completion:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributeupdatestate%28completion_%29.md)
- [readAttributeUpdateStateProgress(completion:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributeupdatestateprogress%28completion_%29.md)
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeDefaultOTAProviders(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/subscribeattributedefaultotaproviders%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeUpdatePossible(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/subscribeattributeupdatepossible%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeUpdateState(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/subscribeattributeupdatestate%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeUpdateStateProgress(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/subscribeattributeupdatestateprogress%28with_subscriptionestablished_reporthandler_%29.md)
- [writeAttributeDefaultOTAProviders(withValue:completion:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/writeattributedefaultotaproviders%28withvalue_completion_%29.md)
- [writeAttributeDefaultOTAProviders(withValue:params:completion:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/writeattributedefaultotaproviders%28withvalue_params_completion_%29.md)

### Type Methods

- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeDefaultOTAProviders(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributedefaultotaproviders%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeUpdatePossible(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributeupdatepossible%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeUpdateState(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributeupdatestate%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeUpdateStateProgress(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributeupdatestateprogress%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)

### Inherited By

- [MTRBaseClusterOtaSoftwareUpdateRequestor](mtrbaseclusterotasoftwareupdaterequestor-35vsy.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTRBaseClusterOTASoftwareUpdateRequestor (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
@interface MTRBaseClusterOTASoftwareUpdateRequestor : MTRGenericBaseCluster
```

## Topics

### Initializers

- [initWithDevice:endpointID:queue:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [announceOTAProviderWithParams:completion:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/announceotaprovider%28with_completion_%29.md)
- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeListWithCompletion:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributeclusterrevision%28completion_%29.md)
- [readAttributeDefaultOTAProvidersWithParams:completion:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributedefaultotaproviders%28with_completion_%29.md)
- [readAttributeFeatureMapWithCompletion:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeUpdatePossibleWithCompletion:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributeupdatepossible%28completion_%29.md)
- [readAttributeUpdateStateWithCompletion:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributeupdatestate%28completion_%29.md)
- [readAttributeUpdateStateProgressWithCompletion:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributeupdatestateprogress%28completion_%29.md)
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeDefaultOTAProvidersWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/subscribeattributedefaultotaproviders%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeUpdatePossibleWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/subscribeattributeupdatepossible%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeUpdateStateWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/subscribeattributeupdatestate%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeUpdateStateProgressWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/subscribeattributeupdatestateprogress%28with_subscriptionestablished_reporthandler_%29.md)
- [writeAttributeDefaultOTAProvidersWithValue:completion:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/writeattributedefaultotaproviders%28withvalue_completion_%29.md)
- [writeAttributeDefaultOTAProvidersWithValue:params:completion:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/writeattributedefaultotaproviders%28withvalue_params_completion_%29.md)

### Type Methods

- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeDefaultOTAProvidersWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributedefaultotaproviders%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeUpdatePossibleWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributeupdatepossible%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeUpdateStateWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributeupdatestate%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeUpdateStateProgressWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributeupdatestateprogress%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)

### Inherited By

- [MTRBaseClusterOtaSoftwareUpdateRequestor](mtrbaseclusterotasoftwareupdaterequestor-35vsy.md)
