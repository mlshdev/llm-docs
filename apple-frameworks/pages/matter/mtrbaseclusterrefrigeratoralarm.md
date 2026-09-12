> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterrefrigeratoralarm](https://developer.apple.com/documentation/matter/mtrbaseclusterrefrigeratoralarm)

# MTRBaseClusterRefrigeratorAlarm (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Refrigerator Alarm

## Declaration

```swift
class MTRBaseClusterRefrigeratorAlarm
```

<a id="overview"></a>

## Overview

Attributes and commands for configuring the Refrigerator alarm.

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrbaseclusterrefrigeratoralarm/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.

### Instance Methods

- [readAttributeAcceptedCommandList(completion:)](mtrbaseclusterrefrigeratoralarm/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeList(completion:)](mtrbaseclusterrefrigeratoralarm/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevision(completion:)](mtrbaseclusterrefrigeratoralarm/readattributeclusterrevision%28completion_%29.md)
- [readAttributeFeatureMap(completion:)](mtrbaseclusterrefrigeratoralarm/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclusterrefrigeratoralarm/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeMask(completion:)](mtrbaseclusterrefrigeratoralarm/readattributemask%28completion_%29.md)
- [readAttributeState(completion:)](mtrbaseclusterrefrigeratoralarm/readattributestate%28completion_%29.md)
- [readAttributeSupported(completion:)](mtrbaseclusterrefrigeratoralarm/readattributesupported%28completion_%29.md)
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterrefrigeratoralarm/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterrefrigeratoralarm/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterrefrigeratoralarm/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterrefrigeratoralarm/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterrefrigeratoralarm/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeMask(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterrefrigeratoralarm/subscribeattributemask%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeState(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterrefrigeratoralarm/subscribeattributestate%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupported(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterrefrigeratoralarm/subscribeattributesupported%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterrefrigeratoralarm/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterrefrigeratoralarm/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterrefrigeratoralarm/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterrefrigeratoralarm/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterrefrigeratoralarm/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeMask(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterrefrigeratoralarm/readattributemask%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeState(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterrefrigeratoralarm/readattributestate%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupported(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterrefrigeratoralarm/readattributesupported%28withclusterstatecache_endpoint_queue_completion_%29.md)

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

# MTRBaseClusterRefrigeratorAlarm (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Refrigerator Alarm

## Declaration

```objectivec
@interface MTRBaseClusterRefrigeratorAlarm : MTRGenericBaseCluster
```

<a id="overview"></a>

## Overview

Attributes and commands for configuring the Refrigerator alarm.

## Topics

### Instance Methods

- [initWithDevice:endpointID:queue:](mtrbaseclusterrefrigeratoralarm/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclusterrefrigeratoralarm/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeListWithCompletion:](mtrbaseclusterrefrigeratoralarm/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclusterrefrigeratoralarm/readattributeclusterrevision%28completion_%29.md)
- [readAttributeFeatureMapWithCompletion:](mtrbaseclusterrefrigeratoralarm/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclusterrefrigeratoralarm/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeMaskWithCompletion:](mtrbaseclusterrefrigeratoralarm/readattributemask%28completion_%29.md)
- [readAttributeStateWithCompletion:](mtrbaseclusterrefrigeratoralarm/readattributestate%28completion_%29.md)
- [readAttributeSupportedWithCompletion:](mtrbaseclusterrefrigeratoralarm/readattributesupported%28completion_%29.md)
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterrefrigeratoralarm/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterrefrigeratoralarm/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterrefrigeratoralarm/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterrefrigeratoralarm/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterrefrigeratoralarm/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeMaskWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterrefrigeratoralarm/subscribeattributemask%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeStateWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterrefrigeratoralarm/subscribeattributestate%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupportedWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterrefrigeratoralarm/subscribeattributesupported%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterrefrigeratoralarm/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterrefrigeratoralarm/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterrefrigeratoralarm/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterrefrigeratoralarm/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterrefrigeratoralarm/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeMaskWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterrefrigeratoralarm/readattributemask%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeStateWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterrefrigeratoralarm/readattributestate%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupportedWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterrefrigeratoralarm/readattributesupported%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)
