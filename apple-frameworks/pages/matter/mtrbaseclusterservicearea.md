> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterservicearea](https://developer.apple.com/documentation/matter/mtrbaseclusterservicearea)

# MTRBaseClusterServiceArea (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Service Area

## Declaration

```swift
class MTRBaseClusterServiceArea
```

<a id="overview"></a>

## Overview

The Service Area cluster provides an interface for controlling the areas where a device should operate, and for querying the current area being serviced.

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrbaseclusterservicearea/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.

### Instance Methods

- [readAttributeAcceptedCommandList(completion:)](mtrbaseclusterservicearea/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeList(completion:)](mtrbaseclusterservicearea/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevision(completion:)](mtrbaseclusterservicearea/readattributeclusterrevision%28completion_%29.md)
- [readAttributeCurrentArea(completion:)](mtrbaseclusterservicearea/readattributecurrentarea%28completion_%29.md)
- [readAttributeEstimatedEndTime(completion:)](mtrbaseclusterservicearea/readattributeestimatedendtime%28completion_%29.md)
- [readAttributeFeatureMap(completion:)](mtrbaseclusterservicearea/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclusterservicearea/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeProgress(completion:)](mtrbaseclusterservicearea/readattributeprogress%28completion_%29.md)
- [readAttributeSelectedAreas(completion:)](mtrbaseclusterservicearea/readattributeselectedareas%28completion_%29.md)
- [readAttributeSupportedAreas(completion:)](mtrbaseclusterservicearea/readattributesupportedareas%28completion_%29.md)
- [readAttributeSupportedMaps(completion:)](mtrbaseclusterservicearea/readattributesupportedmaps%28completion_%29.md)
- [selectAreas(with:completion:)](mtrbaseclusterservicearea/selectareas%28with_completion_%29.md): Command SelectAreas
- [skip(with:completion:)](mtrbaseclusterservicearea/skip%28with_completion_%29.md): Command SkipArea
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterservicearea/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterservicearea/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterservicearea/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeCurrentArea(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterservicearea/subscribeattributecurrentarea%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeEstimatedEndTime(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterservicearea/subscribeattributeestimatedendtime%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterservicearea/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterservicearea/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeProgress(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterservicearea/subscribeattributeprogress%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSelectedAreas(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterservicearea/subscribeattributeselectedareas%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupportedAreas(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterservicearea/subscribeattributesupportedareas%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupportedMaps(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterservicearea/subscribeattributesupportedmaps%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterservicearea/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterservicearea/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterservicearea/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeCurrentArea(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterservicearea/readattributecurrentarea%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeEstimatedEndTime(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterservicearea/readattributeestimatedendtime%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterservicearea/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterservicearea/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeProgress(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterservicearea/readattributeprogress%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSelectedAreas(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterservicearea/readattributeselectedareas%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupportedAreas(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterservicearea/readattributesupportedareas%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupportedMaps(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterservicearea/readattributesupportedmaps%28withclusterstatecache_endpoint_queue_completion_%29.md)

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

# MTRBaseClusterServiceArea (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Service Area

## Declaration

```objectivec
@interface MTRBaseClusterServiceArea : MTRGenericBaseCluster
```

<a id="overview"></a>

## Overview

The Service Area cluster provides an interface for controlling the areas where a device should operate, and for querying the current area being serviced.

## Topics

### Instance Methods

- [initWithDevice:endpointID:queue:](mtrbaseclusterservicearea/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclusterservicearea/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeListWithCompletion:](mtrbaseclusterservicearea/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclusterservicearea/readattributeclusterrevision%28completion_%29.md)
- [readAttributeCurrentAreaWithCompletion:](mtrbaseclusterservicearea/readattributecurrentarea%28completion_%29.md)
- [readAttributeEstimatedEndTimeWithCompletion:](mtrbaseclusterservicearea/readattributeestimatedendtime%28completion_%29.md)
- [readAttributeFeatureMapWithCompletion:](mtrbaseclusterservicearea/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclusterservicearea/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeProgressWithCompletion:](mtrbaseclusterservicearea/readattributeprogress%28completion_%29.md)
- [readAttributeSelectedAreasWithCompletion:](mtrbaseclusterservicearea/readattributeselectedareas%28completion_%29.md)
- [readAttributeSupportedAreasWithCompletion:](mtrbaseclusterservicearea/readattributesupportedareas%28completion_%29.md)
- [readAttributeSupportedMapsWithCompletion:](mtrbaseclusterservicearea/readattributesupportedmaps%28completion_%29.md)
- [selectAreasWithParams:completion:](mtrbaseclusterservicearea/selectareas%28with_completion_%29.md): Command SelectAreas
- [skipAreaWithParams:completion:](mtrbaseclusterservicearea/skip%28with_completion_%29.md): Command SkipArea
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterservicearea/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterservicearea/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterservicearea/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeCurrentAreaWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterservicearea/subscribeattributecurrentarea%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeEstimatedEndTimeWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterservicearea/subscribeattributeestimatedendtime%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterservicearea/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterservicearea/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeProgressWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterservicearea/subscribeattributeprogress%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSelectedAreasWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterservicearea/subscribeattributeselectedareas%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupportedAreasWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterservicearea/subscribeattributesupportedareas%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupportedMapsWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterservicearea/subscribeattributesupportedmaps%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterservicearea/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterservicearea/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterservicearea/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeCurrentAreaWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterservicearea/readattributecurrentarea%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeEstimatedEndTimeWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterservicearea/readattributeestimatedendtime%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterservicearea/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterservicearea/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeProgressWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterservicearea/readattributeprogress%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSelectedAreasWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterservicearea/readattributeselectedareas%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupportedAreasWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterservicearea/readattributesupportedareas%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupportedMapsWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterservicearea/readattributesupportedmaps%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)
