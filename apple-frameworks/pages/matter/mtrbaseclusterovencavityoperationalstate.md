> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterovencavityoperationalstate](https://developer.apple.com/documentation/matter/mtrbaseclusterovencavityoperationalstate)

# MTRBaseClusterOvenCavityOperationalState (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Oven Cavity Operational State

## Declaration

```swift
class MTRBaseClusterOvenCavityOperationalState
```

<a id="overview"></a>

## Overview

This cluster supports remotely monitoring and, where supported, changing the operational state of an Oven.

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrbaseclusterovencavityoperationalstate/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.

### Instance Methods

- [readAttributeAcceptedCommandList(completion:)](mtrbaseclusterovencavityoperationalstate/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeList(completion:)](mtrbaseclusterovencavityoperationalstate/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevision(completion:)](mtrbaseclusterovencavityoperationalstate/readattributeclusterrevision%28completion_%29.md)
- [readAttributeCountdownTime(completion:)](mtrbaseclusterovencavityoperationalstate/readattributecountdowntime%28completion_%29.md)
- [readAttributeCurrentPhase(completion:)](mtrbaseclusterovencavityoperationalstate/readattributecurrentphase%28completion_%29.md)
- [readAttributeFeatureMap(completion:)](mtrbaseclusterovencavityoperationalstate/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclusterovencavityoperationalstate/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeOperationalError(completion:)](mtrbaseclusterovencavityoperationalstate/readattributeoperationalerror%28completion_%29.md)
- [readAttributeOperationalState(completion:)](mtrbaseclusterovencavityoperationalstate/readattributeoperationalstate%28completion_%29.md)
- [readAttributeOperationalStateList(completion:)](mtrbaseclusterovencavityoperationalstate/readattributeoperationalstatelist%28completion_%29.md)
- [readAttributePhaseList(completion:)](mtrbaseclusterovencavityoperationalstate/readattributephaselist%28completion_%29.md)
- [start(completion:)](mtrbaseclusterovencavityoperationalstate/start%28completion_%29.md)
- [start(with:completion:)](mtrbaseclusterovencavityoperationalstate/start%28with_completion_%29.md): Command Start
- [stop(completion:)](mtrbaseclusterovencavityoperationalstate/stop%28completion_%29.md)
- [stop(with:completion:)](mtrbaseclusterovencavityoperationalstate/stop%28with_completion_%29.md): Command Stop
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterovencavityoperationalstate/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterovencavityoperationalstate/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterovencavityoperationalstate/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeCountdownTime(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterovencavityoperationalstate/subscribeattributecountdowntime%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeCurrentPhase(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterovencavityoperationalstate/subscribeattributecurrentphase%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterovencavityoperationalstate/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterovencavityoperationalstate/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeOperationalError(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterovencavityoperationalstate/subscribeattributeoperationalerror%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeOperationalState(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterovencavityoperationalstate/subscribeattributeoperationalstate%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeOperationalStateList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterovencavityoperationalstate/subscribeattributeoperationalstatelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributePhaseList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterovencavityoperationalstate/subscribeattributephaselist%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterovencavityoperationalstate/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterovencavityoperationalstate/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterovencavityoperationalstate/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeCountdownTime(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterovencavityoperationalstate/readattributecountdowntime%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeCurrentPhase(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterovencavityoperationalstate/readattributecurrentphase%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterovencavityoperationalstate/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterovencavityoperationalstate/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeOperationalError(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterovencavityoperationalstate/readattributeoperationalerror%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeOperationalState(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterovencavityoperationalstate/readattributeoperationalstate%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeOperationalStateList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterovencavityoperationalstate/readattributeoperationalstatelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributePhaseList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterovencavityoperationalstate/readattributephaselist%28withclusterstatecache_endpoint_queue_completion_%29.md)

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

# MTRBaseClusterOvenCavityOperationalState (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Oven Cavity Operational State

## Declaration

```objectivec
@interface MTRBaseClusterOvenCavityOperationalState : MTRGenericBaseCluster
```

<a id="overview"></a>

## Overview

This cluster supports remotely monitoring and, where supported, changing the operational state of an Oven.

## Topics

### Instance Methods

- [initWithDevice:endpointID:queue:](mtrbaseclusterovencavityoperationalstate/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclusterovencavityoperationalstate/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeListWithCompletion:](mtrbaseclusterovencavityoperationalstate/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclusterovencavityoperationalstate/readattributeclusterrevision%28completion_%29.md)
- [readAttributeCountdownTimeWithCompletion:](mtrbaseclusterovencavityoperationalstate/readattributecountdowntime%28completion_%29.md)
- [readAttributeCurrentPhaseWithCompletion:](mtrbaseclusterovencavityoperationalstate/readattributecurrentphase%28completion_%29.md)
- [readAttributeFeatureMapWithCompletion:](mtrbaseclusterovencavityoperationalstate/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclusterovencavityoperationalstate/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeOperationalErrorWithCompletion:](mtrbaseclusterovencavityoperationalstate/readattributeoperationalerror%28completion_%29.md)
- [readAttributeOperationalStateWithCompletion:](mtrbaseclusterovencavityoperationalstate/readattributeoperationalstate%28completion_%29.md)
- [readAttributeOperationalStateListWithCompletion:](mtrbaseclusterovencavityoperationalstate/readattributeoperationalstatelist%28completion_%29.md)
- [readAttributePhaseListWithCompletion:](mtrbaseclusterovencavityoperationalstate/readattributephaselist%28completion_%29.md)
- [startWithCompletion:](mtrbaseclusterovencavityoperationalstate/start%28completion_%29.md)
- [startWithParams:completion:](mtrbaseclusterovencavityoperationalstate/start%28with_completion_%29.md): Command Start
- [stopWithCompletion:](mtrbaseclusterovencavityoperationalstate/stop%28completion_%29.md)
- [stopWithParams:completion:](mtrbaseclusterovencavityoperationalstate/stop%28with_completion_%29.md): Command Stop
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterovencavityoperationalstate/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterovencavityoperationalstate/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterovencavityoperationalstate/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeCountdownTimeWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterovencavityoperationalstate/subscribeattributecountdowntime%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeCurrentPhaseWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterovencavityoperationalstate/subscribeattributecurrentphase%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterovencavityoperationalstate/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterovencavityoperationalstate/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeOperationalErrorWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterovencavityoperationalstate/subscribeattributeoperationalerror%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeOperationalStateWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterovencavityoperationalstate/subscribeattributeoperationalstate%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeOperationalStateListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterovencavityoperationalstate/subscribeattributeoperationalstatelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributePhaseListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterovencavityoperationalstate/subscribeattributephaselist%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterovencavityoperationalstate/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterovencavityoperationalstate/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterovencavityoperationalstate/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeCountdownTimeWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterovencavityoperationalstate/readattributecountdowntime%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeCurrentPhaseWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterovencavityoperationalstate/readattributecurrentphase%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterovencavityoperationalstate/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterovencavityoperationalstate/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeOperationalErrorWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterovencavityoperationalstate/readattributeoperationalerror%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeOperationalStateWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterovencavityoperationalstate/readattributeoperationalstate%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeOperationalStateListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterovencavityoperationalstate/readattributeoperationalstatelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributePhaseListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterovencavityoperationalstate/readattributephaselist%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)
