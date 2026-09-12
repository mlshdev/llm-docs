> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterwaterheatermanagement](https://developer.apple.com/documentation/matter/mtrbaseclusterwaterheatermanagement)

# MTRBaseClusterWaterHeaterManagement (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Water Heater Management

## Declaration

```swift
class MTRBaseClusterWaterHeaterManagement
```

<a id="overview"></a>

## Overview

This cluster is used to allow clients to control the operation of a hot water heating appliance so that it can be used with energy management.

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrbaseclusterwaterheatermanagement/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.

### Instance Methods

- [boost(with:completion:)](mtrbaseclusterwaterheatermanagement/boost%28with_completion_%29.md): Command Boost
- [cancelBoost(completion:)](mtrbaseclusterwaterheatermanagement/cancelboost%28completion_%29.md)
- [cancelBoost(with:completion:)](mtrbaseclusterwaterheatermanagement/cancelboost%28with_completion_%29.md): Command CancelBoost
- [readAttributeAcceptedCommandList(completion:)](mtrbaseclusterwaterheatermanagement/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeList(completion:)](mtrbaseclusterwaterheatermanagement/readattributeattributelist%28completion_%29.md)
- [readAttributeBoostState(completion:)](mtrbaseclusterwaterheatermanagement/readattributebooststate%28completion_%29.md)
- [readAttributeClusterRevision(completion:)](mtrbaseclusterwaterheatermanagement/readattributeclusterrevision%28completion_%29.md)
- [readAttributeEstimatedHeatRequired(completion:)](mtrbaseclusterwaterheatermanagement/readattributeestimatedheatrequired%28completion_%29.md)
- [readAttributeFeatureMap(completion:)](mtrbaseclusterwaterheatermanagement/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclusterwaterheatermanagement/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeHeatDemand(completion:)](mtrbaseclusterwaterheatermanagement/readattributeheatdemand%28completion_%29.md)
- [readAttributeHeaterTypes(completion:)](mtrbaseclusterwaterheatermanagement/readattributeheatertypes%28completion_%29.md)
- [readAttributeTankPercentage(completion:)](mtrbaseclusterwaterheatermanagement/readattributetankpercentage%28completion_%29.md)
- [readAttributeTankVolume(completion:)](mtrbaseclusterwaterheatermanagement/readattributetankvolume%28completion_%29.md)
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterwaterheatermanagement/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterwaterheatermanagement/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeBoostState(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterwaterheatermanagement/subscribeattributebooststate%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterwaterheatermanagement/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeEstimatedHeatRequired(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterwaterheatermanagement/subscribeattributeestimatedheatrequired%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterwaterheatermanagement/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterwaterheatermanagement/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeHeatDemand(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterwaterheatermanagement/subscribeattributeheatdemand%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeHeaterTypes(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterwaterheatermanagement/subscribeattributeheatertypes%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeTankPercentage(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterwaterheatermanagement/subscribeattributetankpercentage%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeTankVolume(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterwaterheatermanagement/subscribeattributetankvolume%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterwaterheatermanagement/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterwaterheatermanagement/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeBoostState(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterwaterheatermanagement/readattributebooststate%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterwaterheatermanagement/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeEstimatedHeatRequired(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterwaterheatermanagement/readattributeestimatedheatrequired%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterwaterheatermanagement/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterwaterheatermanagement/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeHeatDemand(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterwaterheatermanagement/readattributeheatdemand%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeHeaterTypes(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterwaterheatermanagement/readattributeheatertypes%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeTankPercentage(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterwaterheatermanagement/readattributetankpercentage%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeTankVolume(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterwaterheatermanagement/readattributetankvolume%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTRBaseClusterWaterHeaterManagement (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Water Heater Management

## Declaration

```objectivec
@interface MTRBaseClusterWaterHeaterManagement : MTRGenericBaseCluster
```

<a id="overview"></a>

## Overview

This cluster is used to allow clients to control the operation of a hot water heating appliance so that it can be used with energy management.

## Topics

### Instance Methods

- [boostWithParams:completion:](mtrbaseclusterwaterheatermanagement/boost%28with_completion_%29.md): Command Boost
- [cancelBoostWithCompletion:](mtrbaseclusterwaterheatermanagement/cancelboost%28completion_%29.md)
- [cancelBoostWithParams:completion:](mtrbaseclusterwaterheatermanagement/cancelboost%28with_completion_%29.md): Command CancelBoost
- [initWithDevice:endpointID:queue:](mtrbaseclusterwaterheatermanagement/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclusterwaterheatermanagement/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeListWithCompletion:](mtrbaseclusterwaterheatermanagement/readattributeattributelist%28completion_%29.md)
- [readAttributeBoostStateWithCompletion:](mtrbaseclusterwaterheatermanagement/readattributebooststate%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclusterwaterheatermanagement/readattributeclusterrevision%28completion_%29.md)
- [readAttributeEstimatedHeatRequiredWithCompletion:](mtrbaseclusterwaterheatermanagement/readattributeestimatedheatrequired%28completion_%29.md)
- [readAttributeFeatureMapWithCompletion:](mtrbaseclusterwaterheatermanagement/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclusterwaterheatermanagement/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeHeatDemandWithCompletion:](mtrbaseclusterwaterheatermanagement/readattributeheatdemand%28completion_%29.md)
- [readAttributeHeaterTypesWithCompletion:](mtrbaseclusterwaterheatermanagement/readattributeheatertypes%28completion_%29.md)
- [readAttributeTankPercentageWithCompletion:](mtrbaseclusterwaterheatermanagement/readattributetankpercentage%28completion_%29.md)
- [readAttributeTankVolumeWithCompletion:](mtrbaseclusterwaterheatermanagement/readattributetankvolume%28completion_%29.md)
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterwaterheatermanagement/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterwaterheatermanagement/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeBoostStateWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterwaterheatermanagement/subscribeattributebooststate%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterwaterheatermanagement/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeEstimatedHeatRequiredWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterwaterheatermanagement/subscribeattributeestimatedheatrequired%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterwaterheatermanagement/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterwaterheatermanagement/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeHeatDemandWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterwaterheatermanagement/subscribeattributeheatdemand%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeHeaterTypesWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterwaterheatermanagement/subscribeattributeheatertypes%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeTankPercentageWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterwaterheatermanagement/subscribeattributetankpercentage%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeTankVolumeWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterwaterheatermanagement/subscribeattributetankvolume%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterwaterheatermanagement/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterwaterheatermanagement/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeBoostStateWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterwaterheatermanagement/readattributebooststate%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterwaterheatermanagement/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeEstimatedHeatRequiredWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterwaterheatermanagement/readattributeestimatedheatrequired%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterwaterheatermanagement/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterwaterheatermanagement/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeHeatDemandWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterwaterheatermanagement/readattributeheatdemand%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeHeaterTypesWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterwaterheatermanagement/readattributeheatertypes%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeTankPercentageWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterwaterheatermanagement/readattributetankpercentage%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeTankVolumeWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterwaterheatermanagement/readattributetankvolume%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)
