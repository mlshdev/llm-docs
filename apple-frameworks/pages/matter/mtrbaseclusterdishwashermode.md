> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdishwashermode](https://developer.apple.com/documentation/matter/mtrbaseclusterdishwashermode)

# MTRBaseClusterDishwasherMode (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Dishwasher Mode

## Declaration

```swift
class MTRBaseClusterDishwasherMode
```

<a id="overview"></a>

## Overview

Attributes and commands for selecting a mode from a list of supported options.

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrbaseclusterdishwashermode/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.

### Instance Methods

- [changeToMode(with:completion:)](mtrbaseclusterdishwashermode/changetomode%28with_completion_%29.md): Command ChangeToMode
- [readAttributeAcceptedCommandList(completion:)](mtrbaseclusterdishwashermode/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeList(completion:)](mtrbaseclusterdishwashermode/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevision(completion:)](mtrbaseclusterdishwashermode/readattributeclusterrevision%28completion_%29.md)
- [readAttributeCurrentMode(completion:)](mtrbaseclusterdishwashermode/readattributecurrentmode%28completion_%29.md)
- [readAttributeFeatureMap(completion:)](mtrbaseclusterdishwashermode/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclusterdishwashermode/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeSupportedModes(completion:)](mtrbaseclusterdishwashermode/readattributesupportedmodes%28completion_%29.md)
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdishwashermode/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdishwashermode/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdishwashermode/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeCurrentMode(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdishwashermode/subscribeattributecurrentmode%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdishwashermode/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdishwashermode/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupportedModes(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdishwashermode/subscribeattributesupportedmodes%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdishwashermode/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdishwashermode/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdishwashermode/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeCurrentMode(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdishwashermode/readattributecurrentmode%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdishwashermode/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdishwashermode/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupportedModes(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdishwashermode/readattributesupportedmodes%28withclusterstatecache_endpoint_queue_completion_%29.md)

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

# MTRBaseClusterDishwasherMode (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Dishwasher Mode

## Declaration

```objectivec
@interface MTRBaseClusterDishwasherMode : MTRGenericBaseCluster
```

<a id="overview"></a>

## Overview

Attributes and commands for selecting a mode from a list of supported options.

## Topics

### Instance Methods

- [changeToModeWithParams:completion:](mtrbaseclusterdishwashermode/changetomode%28with_completion_%29.md): Command ChangeToMode
- [initWithDevice:endpointID:queue:](mtrbaseclusterdishwashermode/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclusterdishwashermode/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeListWithCompletion:](mtrbaseclusterdishwashermode/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclusterdishwashermode/readattributeclusterrevision%28completion_%29.md)
- [readAttributeCurrentModeWithCompletion:](mtrbaseclusterdishwashermode/readattributecurrentmode%28completion_%29.md)
- [readAttributeFeatureMapWithCompletion:](mtrbaseclusterdishwashermode/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclusterdishwashermode/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeSupportedModesWithCompletion:](mtrbaseclusterdishwashermode/readattributesupportedmodes%28completion_%29.md)
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdishwashermode/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdishwashermode/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdishwashermode/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeCurrentModeWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdishwashermode/subscribeattributecurrentmode%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdishwashermode/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdishwashermode/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupportedModesWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdishwashermode/subscribeattributesupportedmodes%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdishwashermode/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdishwashermode/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdishwashermode/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeCurrentModeWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdishwashermode/readattributecurrentmode%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdishwashermode/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdishwashermode/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupportedModesWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdishwashermode/readattributesupportedmodes%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)
