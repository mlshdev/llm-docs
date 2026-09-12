> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterrvcoperationalstate](https://developer.apple.com/documentation/matter/mtrbaseclusterrvcoperationalstate)

# MTRBaseClusterRVCOperationalState (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```swift
class MTRBaseClusterRVCOperationalState
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrbaseclusterrvcoperationalstate/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [pause(completion:)](mtrbaseclusterrvcoperationalstate/pause%28completion_%29.md)
- [pause(with:completion:)](mtrbaseclusterrvcoperationalstate/pause%28with_completion_%29.md)
- [readAttributeAcceptedCommandList(completion:)](mtrbaseclusterrvcoperationalstate/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeList(completion:)](mtrbaseclusterrvcoperationalstate/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevision(completion:)](mtrbaseclusterrvcoperationalstate/readattributeclusterrevision%28completion_%29.md)
- [readAttributeCountdownTime(completion:)](mtrbaseclusterrvcoperationalstate/readattributecountdowntime%28completion_%29.md)
- [readAttributeCurrentPhase(completion:)](mtrbaseclusterrvcoperationalstate/readattributecurrentphase%28completion_%29.md)
- [readAttributeFeatureMap(completion:)](mtrbaseclusterrvcoperationalstate/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclusterrvcoperationalstate/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeOperationalError(completion:)](mtrbaseclusterrvcoperationalstate/readattributeoperationalerror%28completion_%29.md)
- [readAttributeOperationalState(completion:)](mtrbaseclusterrvcoperationalstate/readattributeoperationalstate%28completion_%29.md)
- [readAttributeOperationalStateList(completion:)](mtrbaseclusterrvcoperationalstate/readattributeoperationalstatelist%28completion_%29.md)
- [readAttributePhaseList(completion:)](mtrbaseclusterrvcoperationalstate/readattributephaselist%28completion_%29.md)
- [resume(completion:)](mtrbaseclusterrvcoperationalstate/resume%28completion_%29.md)
- [resume(with:completion:)](mtrbaseclusterrvcoperationalstate/resume%28with_completion_%29.md)
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterrvcoperationalstate/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterrvcoperationalstate/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterrvcoperationalstate/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeCountdownTime(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterrvcoperationalstate/subscribeattributecountdowntime%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeCurrentPhase(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterrvcoperationalstate/subscribeattributecurrentphase%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterrvcoperationalstate/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterrvcoperationalstate/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeOperationalError(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterrvcoperationalstate/subscribeattributeoperationalerror%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeOperationalState(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterrvcoperationalstate/subscribeattributeoperationalstate%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeOperationalStateList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterrvcoperationalstate/subscribeattributeoperationalstatelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributePhaseList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterrvcoperationalstate/subscribeattributephaselist%28with_subscriptionestablished_reporthandler_%29.md)
- [goHome(completion:)](mtrbaseclusterrvcoperationalstate/gohome%28completion_%29.md)
- [goHome(with:completion:)](mtrbaseclusterrvcoperationalstate/gohome%28with_completion_%29.md): Command GoHome

### Type Methods

- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterrvcoperationalstate/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterrvcoperationalstate/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterrvcoperationalstate/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeCountdownTime(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterrvcoperationalstate/readattributecountdowntime%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeCurrentPhase(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterrvcoperationalstate/readattributecurrentphase%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterrvcoperationalstate/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterrvcoperationalstate/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeOperationalError(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterrvcoperationalstate/readattributeoperationalerror%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeOperationalState(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterrvcoperationalstate/readattributeoperationalstate%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeOperationalStateList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterrvcoperationalstate/readattributeoperationalstatelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributePhaseList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterrvcoperationalstate/readattributephaselist%28withclusterstatecache_endpoint_queue_completion_%29.md)

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

# MTRBaseClusterRVCOperationalState (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```objectivec
@interface MTRBaseClusterRVCOperationalState : MTRGenericBaseCluster
```

## Topics

### Initializers

- [initWithDevice:endpointID:queue:](mtrbaseclusterrvcoperationalstate/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [pauseWithCompletion:](mtrbaseclusterrvcoperationalstate/pause%28completion_%29.md)
- [pauseWithParams:completion:](mtrbaseclusterrvcoperationalstate/pause%28with_completion_%29.md)
- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclusterrvcoperationalstate/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeListWithCompletion:](mtrbaseclusterrvcoperationalstate/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclusterrvcoperationalstate/readattributeclusterrevision%28completion_%29.md)
- [readAttributeCountdownTimeWithCompletion:](mtrbaseclusterrvcoperationalstate/readattributecountdowntime%28completion_%29.md)
- [readAttributeCurrentPhaseWithCompletion:](mtrbaseclusterrvcoperationalstate/readattributecurrentphase%28completion_%29.md)
- [readAttributeFeatureMapWithCompletion:](mtrbaseclusterrvcoperationalstate/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclusterrvcoperationalstate/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeOperationalErrorWithCompletion:](mtrbaseclusterrvcoperationalstate/readattributeoperationalerror%28completion_%29.md)
- [readAttributeOperationalStateWithCompletion:](mtrbaseclusterrvcoperationalstate/readattributeoperationalstate%28completion_%29.md)
- [readAttributeOperationalStateListWithCompletion:](mtrbaseclusterrvcoperationalstate/readattributeoperationalstatelist%28completion_%29.md)
- [readAttributePhaseListWithCompletion:](mtrbaseclusterrvcoperationalstate/readattributephaselist%28completion_%29.md)
- [resumeWithCompletion:](mtrbaseclusterrvcoperationalstate/resume%28completion_%29.md)
- [resumeWithParams:completion:](mtrbaseclusterrvcoperationalstate/resume%28with_completion_%29.md)
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterrvcoperationalstate/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterrvcoperationalstate/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterrvcoperationalstate/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeCountdownTimeWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterrvcoperationalstate/subscribeattributecountdowntime%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeCurrentPhaseWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterrvcoperationalstate/subscribeattributecurrentphase%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterrvcoperationalstate/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterrvcoperationalstate/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeOperationalErrorWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterrvcoperationalstate/subscribeattributeoperationalerror%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeOperationalStateWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterrvcoperationalstate/subscribeattributeoperationalstate%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeOperationalStateListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterrvcoperationalstate/subscribeattributeoperationalstatelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributePhaseListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterrvcoperationalstate/subscribeattributephaselist%28with_subscriptionestablished_reporthandler_%29.md)
- [goHomeWithCompletion:](mtrbaseclusterrvcoperationalstate/gohome%28completion_%29.md)
- [goHomeWithParams:completion:](mtrbaseclusterrvcoperationalstate/gohome%28with_completion_%29.md): Command GoHome

### Type Methods

- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterrvcoperationalstate/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterrvcoperationalstate/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterrvcoperationalstate/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeCountdownTimeWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterrvcoperationalstate/readattributecountdowntime%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeCurrentPhaseWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterrvcoperationalstate/readattributecurrentphase%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterrvcoperationalstate/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterrvcoperationalstate/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeOperationalErrorWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterrvcoperationalstate/readattributeoperationalerror%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeOperationalStateWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterrvcoperationalstate/readattributeoperationalstate%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeOperationalStateListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterrvcoperationalstate/readattributeoperationalstatelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributePhaseListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterrvcoperationalstate/readattributephaselist%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)
