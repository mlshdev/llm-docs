> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustertemperaturecontrol](https://developer.apple.com/documentation/matter/mtrbaseclustertemperaturecontrol)

# MTRBaseClusterTemperatureControl (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Temperature Control

## Declaration

```swift
class MTRBaseClusterTemperatureControl
```

<a id="overview"></a>

## Overview

Attributes and commands for configuring the temperature control, and reporting temperature.

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrbaseclustertemperaturecontrol/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.

### Instance Methods

- [readAttributeAcceptedCommandList(completion:)](mtrbaseclustertemperaturecontrol/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeList(completion:)](mtrbaseclustertemperaturecontrol/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevision(completion:)](mtrbaseclustertemperaturecontrol/readattributeclusterrevision%28completion_%29.md)
- [readAttributeFeatureMap(completion:)](mtrbaseclustertemperaturecontrol/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclustertemperaturecontrol/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeMaxTemperature(completion:)](mtrbaseclustertemperaturecontrol/readattributemaxtemperature%28completion_%29.md)
- [readAttributeMinTemperature(completion:)](mtrbaseclustertemperaturecontrol/readattributemintemperature%28completion_%29.md)
- [readAttributeSelectedTemperatureLevel(completion:)](mtrbaseclustertemperaturecontrol/readattributeselectedtemperaturelevel%28completion_%29.md)
- [readAttributeStep(completion:)](mtrbaseclustertemperaturecontrol/readattributestep%28completion_%29.md)
- [readAttributeSupportedTemperatureLevels(completion:)](mtrbaseclustertemperaturecontrol/readattributesupportedtemperaturelevels%28completion_%29.md)
- [readAttributeTemperatureSetpoint(completion:)](mtrbaseclustertemperaturecontrol/readattributetemperaturesetpoint%28completion_%29.md)
- [setTemperatureWith(\_:completion:)](mtrbaseclustertemperaturecontrol/settemperaturewith%28__completion_%29.md): Command SetTemperature
- [setTemperatureWithCompletion(\_:)](mtrbaseclustertemperaturecontrol/settemperaturewithcompletion%28__%29.md)
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertemperaturecontrol/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertemperaturecontrol/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertemperaturecontrol/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertemperaturecontrol/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertemperaturecontrol/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeMaxTemperature(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertemperaturecontrol/subscribeattributemaxtemperature%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeMinTemperature(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertemperaturecontrol/subscribeattributemintemperature%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSelectedTemperatureLevel(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertemperaturecontrol/subscribeattributeselectedtemperaturelevel%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeStep(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertemperaturecontrol/subscribeattributestep%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupportedTemperatureLevels(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertemperaturecontrol/subscribeattributesupportedtemperaturelevels%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeTemperatureSetpoint(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertemperaturecontrol/subscribeattributetemperaturesetpoint%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertemperaturecontrol/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertemperaturecontrol/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertemperaturecontrol/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertemperaturecontrol/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertemperaturecontrol/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeMaxTemperature(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertemperaturecontrol/readattributemaxtemperature%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeMinTemperature(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertemperaturecontrol/readattributemintemperature%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSelectedTemperatureLevel(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertemperaturecontrol/readattributeselectedtemperaturelevel%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeStep(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertemperaturecontrol/readattributestep%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupportedTemperatureLevels(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertemperaturecontrol/readattributesupportedtemperaturelevels%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeTemperatureSetpoint(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertemperaturecontrol/readattributetemperaturesetpoint%28withclusterstatecache_endpoint_queue_completion_%29.md)

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

# MTRBaseClusterTemperatureControl (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Temperature Control

## Declaration

```objectivec
@interface MTRBaseClusterTemperatureControl : MTRGenericBaseCluster
```

<a id="overview"></a>

## Overview

Attributes and commands for configuring the temperature control, and reporting temperature.

## Topics

### Instance Methods

- [initWithDevice:endpointID:queue:](mtrbaseclustertemperaturecontrol/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclustertemperaturecontrol/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeListWithCompletion:](mtrbaseclustertemperaturecontrol/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclustertemperaturecontrol/readattributeclusterrevision%28completion_%29.md)
- [readAttributeFeatureMapWithCompletion:](mtrbaseclustertemperaturecontrol/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclustertemperaturecontrol/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeMaxTemperatureWithCompletion:](mtrbaseclustertemperaturecontrol/readattributemaxtemperature%28completion_%29.md)
- [readAttributeMinTemperatureWithCompletion:](mtrbaseclustertemperaturecontrol/readattributemintemperature%28completion_%29.md)
- [readAttributeSelectedTemperatureLevelWithCompletion:](mtrbaseclustertemperaturecontrol/readattributeselectedtemperaturelevel%28completion_%29.md)
- [readAttributeStepWithCompletion:](mtrbaseclustertemperaturecontrol/readattributestep%28completion_%29.md)
- [readAttributeSupportedTemperatureLevelsWithCompletion:](mtrbaseclustertemperaturecontrol/readattributesupportedtemperaturelevels%28completion_%29.md)
- [readAttributeTemperatureSetpointWithCompletion:](mtrbaseclustertemperaturecontrol/readattributetemperaturesetpoint%28completion_%29.md)
- [setTemperatureWithParams:completion:](mtrbaseclustertemperaturecontrol/settemperaturewith%28__completion_%29.md): Command SetTemperature
- [setTemperatureWithCompletion:](mtrbaseclustertemperaturecontrol/settemperaturewithcompletion%28__%29.md)
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertemperaturecontrol/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertemperaturecontrol/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertemperaturecontrol/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertemperaturecontrol/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertemperaturecontrol/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeMaxTemperatureWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertemperaturecontrol/subscribeattributemaxtemperature%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeMinTemperatureWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertemperaturecontrol/subscribeattributemintemperature%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSelectedTemperatureLevelWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertemperaturecontrol/subscribeattributeselectedtemperaturelevel%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeStepWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertemperaturecontrol/subscribeattributestep%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupportedTemperatureLevelsWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertemperaturecontrol/subscribeattributesupportedtemperaturelevels%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeTemperatureSetpointWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertemperaturecontrol/subscribeattributetemperaturesetpoint%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertemperaturecontrol/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertemperaturecontrol/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertemperaturecontrol/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertemperaturecontrol/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertemperaturecontrol/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeMaxTemperatureWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertemperaturecontrol/readattributemaxtemperature%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeMinTemperatureWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertemperaturecontrol/readattributemintemperature%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSelectedTemperatureLevelWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertemperaturecontrol/readattributeselectedtemperaturelevel%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeStepWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertemperaturecontrol/readattributestep%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupportedTemperatureLevelsWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertemperaturecontrol/readattributesupportedtemperaturelevels%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeTemperatureSetpointWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertemperaturecontrol/readattributetemperaturesetpoint%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)
