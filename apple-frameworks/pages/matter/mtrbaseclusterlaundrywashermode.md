> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterlaundrywashermode](https://developer.apple.com/documentation/matter/mtrbaseclusterlaundrywashermode)

# MTRBaseClusterLaundryWasherMode (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Laundry Washer Mode

## Declaration

```swift
class MTRBaseClusterLaundryWasherMode
```

<a id="overview"></a>

## Overview

Attributes and commands for selecting a mode from a list of supported options.

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrbaseclusterlaundrywashermode/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.

### Instance Methods

- [changeToMode(with:completion:)](mtrbaseclusterlaundrywashermode/changetomode%28with_completion_%29.md): Command ChangeToMode
- [readAttributeAcceptedCommandList(completion:)](mtrbaseclusterlaundrywashermode/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeList(completion:)](mtrbaseclusterlaundrywashermode/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevision(completion:)](mtrbaseclusterlaundrywashermode/readattributeclusterrevision%28completion_%29.md)
- [readAttributeCurrentMode(completion:)](mtrbaseclusterlaundrywashermode/readattributecurrentmode%28completion_%29.md)
- [readAttributeFeatureMap(completion:)](mtrbaseclusterlaundrywashermode/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclusterlaundrywashermode/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeSupportedModes(completion:)](mtrbaseclusterlaundrywashermode/readattributesupportedmodes%28completion_%29.md)
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterlaundrywashermode/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterlaundrywashermode/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterlaundrywashermode/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeCurrentMode(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterlaundrywashermode/subscribeattributecurrentmode%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterlaundrywashermode/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterlaundrywashermode/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupportedModes(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterlaundrywashermode/subscribeattributesupportedmodes%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterlaundrywashermode/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterlaundrywashermode/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterlaundrywashermode/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeCurrentMode(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterlaundrywashermode/readattributecurrentmode%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterlaundrywashermode/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterlaundrywashermode/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupportedModes(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterlaundrywashermode/readattributesupportedmodes%28withclusterstatecache_endpoint_queue_completion_%29.md)

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

# MTRBaseClusterLaundryWasherMode (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Laundry Washer Mode

## Declaration

```objectivec
@interface MTRBaseClusterLaundryWasherMode : MTRGenericBaseCluster
```

<a id="overview"></a>

## Overview

Attributes and commands for selecting a mode from a list of supported options.

## Topics

### Instance Methods

- [changeToModeWithParams:completion:](mtrbaseclusterlaundrywashermode/changetomode%28with_completion_%29.md): Command ChangeToMode
- [initWithDevice:endpointID:queue:](mtrbaseclusterlaundrywashermode/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclusterlaundrywashermode/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeListWithCompletion:](mtrbaseclusterlaundrywashermode/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclusterlaundrywashermode/readattributeclusterrevision%28completion_%29.md)
- [readAttributeCurrentModeWithCompletion:](mtrbaseclusterlaundrywashermode/readattributecurrentmode%28completion_%29.md)
- [readAttributeFeatureMapWithCompletion:](mtrbaseclusterlaundrywashermode/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclusterlaundrywashermode/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeSupportedModesWithCompletion:](mtrbaseclusterlaundrywashermode/readattributesupportedmodes%28completion_%29.md)
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterlaundrywashermode/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterlaundrywashermode/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterlaundrywashermode/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeCurrentModeWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterlaundrywashermode/subscribeattributecurrentmode%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterlaundrywashermode/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterlaundrywashermode/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupportedModesWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterlaundrywashermode/subscribeattributesupportedmodes%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterlaundrywashermode/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterlaundrywashermode/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterlaundrywashermode/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeCurrentModeWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterlaundrywashermode/readattributecurrentmode%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterlaundrywashermode/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterlaundrywashermode/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupportedModesWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterlaundrywashermode/readattributesupportedmodes%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)
