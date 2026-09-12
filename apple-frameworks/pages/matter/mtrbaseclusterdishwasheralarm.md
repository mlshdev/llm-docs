> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdishwasheralarm](https://developer.apple.com/documentation/matter/mtrbaseclusterdishwasheralarm)

# MTRBaseClusterDishwasherAlarm (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Dishwasher Alarm

## Declaration

```swift
class MTRBaseClusterDishwasherAlarm
```

<a id="overview"></a>

## Overview

Attributes and commands for configuring the Dishwasher alarm.

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrbaseclusterdishwasheralarm/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.

### Instance Methods

- [modifyEnabledAlarms(with:completion:)](mtrbaseclusterdishwasheralarm/modifyenabledalarms%28with_completion_%29.md): Command ModifyEnabledAlarms
- [readAttributeAcceptedCommandList(completion:)](mtrbaseclusterdishwasheralarm/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeList(completion:)](mtrbaseclusterdishwasheralarm/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevision(completion:)](mtrbaseclusterdishwasheralarm/readattributeclusterrevision%28completion_%29.md)
- [readAttributeFeatureMap(completion:)](mtrbaseclusterdishwasheralarm/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclusterdishwasheralarm/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeLatch(completion:)](mtrbaseclusterdishwasheralarm/readattributelatch%28completion_%29.md)
- [readAttributeMask(completion:)](mtrbaseclusterdishwasheralarm/readattributemask%28completion_%29.md)
- [readAttributeState(completion:)](mtrbaseclusterdishwasheralarm/readattributestate%28completion_%29.md)
- [readAttributeSupported(completion:)](mtrbaseclusterdishwasheralarm/readattributesupported%28completion_%29.md)
- [reset(with:completion:)](mtrbaseclusterdishwasheralarm/reset%28with_completion_%29.md): Command Reset
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdishwasheralarm/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdishwasheralarm/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdishwasheralarm/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdishwasheralarm/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdishwasheralarm/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeLatch(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdishwasheralarm/subscribeattributelatch%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeMask(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdishwasheralarm/subscribeattributemask%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeState(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdishwasheralarm/subscribeattributestate%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupported(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdishwasheralarm/subscribeattributesupported%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdishwasheralarm/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdishwasheralarm/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdishwasheralarm/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdishwasheralarm/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdishwasheralarm/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeLatch(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdishwasheralarm/readattributelatch%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeMask(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdishwasheralarm/readattributemask%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeState(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdishwasheralarm/readattributestate%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupported(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdishwasheralarm/readattributesupported%28withclusterstatecache_endpoint_queue_completion_%29.md)

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

# MTRBaseClusterDishwasherAlarm (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Dishwasher Alarm

## Declaration

```objectivec
@interface MTRBaseClusterDishwasherAlarm : MTRGenericBaseCluster
```

<a id="overview"></a>

## Overview

Attributes and commands for configuring the Dishwasher alarm.

## Topics

### Instance Methods

- [initWithDevice:endpointID:queue:](mtrbaseclusterdishwasheralarm/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.
- [modifyEnabledAlarmsWithParams:completion:](mtrbaseclusterdishwasheralarm/modifyenabledalarms%28with_completion_%29.md): Command ModifyEnabledAlarms
- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclusterdishwasheralarm/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeListWithCompletion:](mtrbaseclusterdishwasheralarm/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclusterdishwasheralarm/readattributeclusterrevision%28completion_%29.md)
- [readAttributeFeatureMapWithCompletion:](mtrbaseclusterdishwasheralarm/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclusterdishwasheralarm/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeLatchWithCompletion:](mtrbaseclusterdishwasheralarm/readattributelatch%28completion_%29.md)
- [readAttributeMaskWithCompletion:](mtrbaseclusterdishwasheralarm/readattributemask%28completion_%29.md)
- [readAttributeStateWithCompletion:](mtrbaseclusterdishwasheralarm/readattributestate%28completion_%29.md)
- [readAttributeSupportedWithCompletion:](mtrbaseclusterdishwasheralarm/readattributesupported%28completion_%29.md)
- [resetWithParams:completion:](mtrbaseclusterdishwasheralarm/reset%28with_completion_%29.md): Command Reset
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdishwasheralarm/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdishwasheralarm/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdishwasheralarm/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdishwasheralarm/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdishwasheralarm/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeLatchWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdishwasheralarm/subscribeattributelatch%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeMaskWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdishwasheralarm/subscribeattributemask%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeStateWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdishwasheralarm/subscribeattributestate%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupportedWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdishwasheralarm/subscribeattributesupported%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdishwasheralarm/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdishwasheralarm/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdishwasheralarm/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdishwasheralarm/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdishwasheralarm/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeLatchWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdishwasheralarm/readattributelatch%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeMaskWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdishwasheralarm/readattributemask%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeStateWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdishwasheralarm/readattributestate%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupportedWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdishwasheralarm/readattributesupported%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)
