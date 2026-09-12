> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusteroperationalstate](https://developer.apple.com/documentation/matter/mtrbaseclusteroperationalstate)

# MTRBaseClusterOperationalState (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```swift
class MTRBaseClusterOperationalState
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrbaseclusteroperationalstate/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [pause(completion:)](mtrbaseclusteroperationalstate/pause%28completion_%29.md)
- [pause(with:completion:)](mtrbaseclusteroperationalstate/pause%28with_completion_%29.md)
- [readAttributeAcceptedCommandList(completion:)](mtrbaseclusteroperationalstate/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeList(completion:)](mtrbaseclusteroperationalstate/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevision(completion:)](mtrbaseclusteroperationalstate/readattributeclusterrevision%28completion_%29.md)
- [readAttributeCountdownTime(completion:)](mtrbaseclusteroperationalstate/readattributecountdowntime%28completion_%29.md)
- [readAttributeCurrentPhase(completion:)](mtrbaseclusteroperationalstate/readattributecurrentphase%28completion_%29.md)
- [readAttributeFeatureMap(completion:)](mtrbaseclusteroperationalstate/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclusteroperationalstate/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeOperationalError(completion:)](mtrbaseclusteroperationalstate/readattributeoperationalerror%28completion_%29.md)
- [readAttributeOperationalState(completion:)](mtrbaseclusteroperationalstate/readattributeoperationalstate%28completion_%29.md)
- [readAttributeOperationalStateList(completion:)](mtrbaseclusteroperationalstate/readattributeoperationalstatelist%28completion_%29.md)
- [readAttributePhaseList(completion:)](mtrbaseclusteroperationalstate/readattributephaselist%28completion_%29.md)
- [resume(completion:)](mtrbaseclusteroperationalstate/resume%28completion_%29.md)
- [resume(with:completion:)](mtrbaseclusteroperationalstate/resume%28with_completion_%29.md)
- [start(completion:)](mtrbaseclusteroperationalstate/start%28completion_%29.md)
- [start(with:completion:)](mtrbaseclusteroperationalstate/start%28with_completion_%29.md)
- [stop(completion:)](mtrbaseclusteroperationalstate/stop%28completion_%29.md)
- [stop(with:completion:)](mtrbaseclusteroperationalstate/stop%28with_completion_%29.md)
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusteroperationalstate/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusteroperationalstate/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclusteroperationalstate/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeCountdownTime(with:subscriptionEstablished:reportHandler:)](mtrbaseclusteroperationalstate/subscribeattributecountdowntime%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeCurrentPhase(with:subscriptionEstablished:reportHandler:)](mtrbaseclusteroperationalstate/subscribeattributecurrentphase%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclusteroperationalstate/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusteroperationalstate/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeOperationalError(with:subscriptionEstablished:reportHandler:)](mtrbaseclusteroperationalstate/subscribeattributeoperationalerror%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeOperationalState(with:subscriptionEstablished:reportHandler:)](mtrbaseclusteroperationalstate/subscribeattributeoperationalstate%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeOperationalStateList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusteroperationalstate/subscribeattributeoperationalstatelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributePhaseList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusteroperationalstate/subscribeattributephaselist%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusteroperationalstate/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusteroperationalstate/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusteroperationalstate/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeCountdownTime(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusteroperationalstate/readattributecountdowntime%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeCurrentPhase(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusteroperationalstate/readattributecurrentphase%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusteroperationalstate/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusteroperationalstate/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeOperationalError(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusteroperationalstate/readattributeoperationalerror%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeOperationalState(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusteroperationalstate/readattributeoperationalstate%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeOperationalStateList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusteroperationalstate/readattributeoperationalstatelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributePhaseList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusteroperationalstate/readattributephaselist%28withclusterstatecache_endpoint_queue_completion_%29.md)

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

# MTRBaseClusterOperationalState (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```objectivec
@interface MTRBaseClusterOperationalState : MTRGenericBaseCluster
```

## Topics

### Initializers

- [initWithDevice:endpointID:queue:](mtrbaseclusteroperationalstate/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [pauseWithCompletion:](mtrbaseclusteroperationalstate/pause%28completion_%29.md)
- [pauseWithParams:completion:](mtrbaseclusteroperationalstate/pause%28with_completion_%29.md)
- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclusteroperationalstate/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeListWithCompletion:](mtrbaseclusteroperationalstate/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclusteroperationalstate/readattributeclusterrevision%28completion_%29.md)
- [readAttributeCountdownTimeWithCompletion:](mtrbaseclusteroperationalstate/readattributecountdowntime%28completion_%29.md)
- [readAttributeCurrentPhaseWithCompletion:](mtrbaseclusteroperationalstate/readattributecurrentphase%28completion_%29.md)
- [readAttributeFeatureMapWithCompletion:](mtrbaseclusteroperationalstate/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclusteroperationalstate/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeOperationalErrorWithCompletion:](mtrbaseclusteroperationalstate/readattributeoperationalerror%28completion_%29.md)
- [readAttributeOperationalStateWithCompletion:](mtrbaseclusteroperationalstate/readattributeoperationalstate%28completion_%29.md)
- [readAttributeOperationalStateListWithCompletion:](mtrbaseclusteroperationalstate/readattributeoperationalstatelist%28completion_%29.md)
- [readAttributePhaseListWithCompletion:](mtrbaseclusteroperationalstate/readattributephaselist%28completion_%29.md)
- [resumeWithCompletion:](mtrbaseclusteroperationalstate/resume%28completion_%29.md)
- [resumeWithParams:completion:](mtrbaseclusteroperationalstate/resume%28with_completion_%29.md)
- [startWithCompletion:](mtrbaseclusteroperationalstate/start%28completion_%29.md)
- [startWithParams:completion:](mtrbaseclusteroperationalstate/start%28with_completion_%29.md)
- [stopWithCompletion:](mtrbaseclusteroperationalstate/stop%28completion_%29.md)
- [stopWithParams:completion:](mtrbaseclusteroperationalstate/stop%28with_completion_%29.md)
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusteroperationalstate/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusteroperationalstate/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusteroperationalstate/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeCountdownTimeWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusteroperationalstate/subscribeattributecountdowntime%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeCurrentPhaseWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusteroperationalstate/subscribeattributecurrentphase%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusteroperationalstate/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusteroperationalstate/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeOperationalErrorWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusteroperationalstate/subscribeattributeoperationalerror%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeOperationalStateWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusteroperationalstate/subscribeattributeoperationalstate%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeOperationalStateListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusteroperationalstate/subscribeattributeoperationalstatelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributePhaseListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusteroperationalstate/subscribeattributephaselist%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusteroperationalstate/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusteroperationalstate/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusteroperationalstate/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeCountdownTimeWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusteroperationalstate/readattributecountdowntime%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeCurrentPhaseWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusteroperationalstate/readattributecurrentphase%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusteroperationalstate/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusteroperationalstate/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeOperationalErrorWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusteroperationalstate/readattributeoperationalerror%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeOperationalStateWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusteroperationalstate/readattributeoperationalstate%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeOperationalStateListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusteroperationalstate/readattributeoperationalstatelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributePhaseListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusteroperationalstate/readattributephaselist%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)
