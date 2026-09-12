> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterrvcrunmode](https://developer.apple.com/documentation/matter/mtrbaseclusterrvcrunmode)

# MTRBaseClusterRVCRunMode (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```swift
class MTRBaseClusterRVCRunMode
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrbaseclusterrvcrunmode/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [changeToMode(with:completion:)](mtrbaseclusterrvcrunmode/changetomode%28with_completion_%29.md)
- [readAttributeAcceptedCommandList(completion:)](mtrbaseclusterrvcrunmode/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeList(completion:)](mtrbaseclusterrvcrunmode/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevision(completion:)](mtrbaseclusterrvcrunmode/readattributeclusterrevision%28completion_%29.md)
- [readAttributeCurrentMode(completion:)](mtrbaseclusterrvcrunmode/readattributecurrentmode%28completion_%29.md)
- [readAttributeFeatureMap(completion:)](mtrbaseclusterrvcrunmode/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclusterrvcrunmode/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeSupportedModes(completion:)](mtrbaseclusterrvcrunmode/readattributesupportedmodes%28completion_%29.md)
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterrvcrunmode/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterrvcrunmode/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterrvcrunmode/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeCurrentMode(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterrvcrunmode/subscribeattributecurrentmode%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterrvcrunmode/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterrvcrunmode/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupportedModes(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterrvcrunmode/subscribeattributesupportedmodes%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterrvcrunmode/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterrvcrunmode/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterrvcrunmode/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeCurrentMode(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterrvcrunmode/readattributecurrentmode%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterrvcrunmode/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterrvcrunmode/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupportedModes(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterrvcrunmode/readattributesupportedmodes%28withclusterstatecache_endpoint_queue_completion_%29.md)

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

# MTRBaseClusterRVCRunMode (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```objectivec
@interface MTRBaseClusterRVCRunMode : MTRGenericBaseCluster
```

## Topics

### Initializers

- [initWithDevice:endpointID:queue:](mtrbaseclusterrvcrunmode/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [changeToModeWithParams:completion:](mtrbaseclusterrvcrunmode/changetomode%28with_completion_%29.md)
- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclusterrvcrunmode/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeListWithCompletion:](mtrbaseclusterrvcrunmode/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclusterrvcrunmode/readattributeclusterrevision%28completion_%29.md)
- [readAttributeCurrentModeWithCompletion:](mtrbaseclusterrvcrunmode/readattributecurrentmode%28completion_%29.md)
- [readAttributeFeatureMapWithCompletion:](mtrbaseclusterrvcrunmode/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclusterrvcrunmode/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeSupportedModesWithCompletion:](mtrbaseclusterrvcrunmode/readattributesupportedmodes%28completion_%29.md)
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterrvcrunmode/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterrvcrunmode/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterrvcrunmode/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeCurrentModeWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterrvcrunmode/subscribeattributecurrentmode%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterrvcrunmode/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterrvcrunmode/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupportedModesWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterrvcrunmode/subscribeattributesupportedmodes%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterrvcrunmode/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterrvcrunmode/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterrvcrunmode/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeCurrentModeWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterrvcrunmode/readattributecurrentmode%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterrvcrunmode/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterrvcrunmode/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupportedModesWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterrvcrunmode/readattributesupportedmodes%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)
