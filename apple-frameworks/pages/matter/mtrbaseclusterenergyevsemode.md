> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterenergyevsemode](https://developer.apple.com/documentation/matter/mtrbaseclusterenergyevsemode)

# MTRBaseClusterEnergyEVSEMode (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Energy EVSE Mode

## Declaration

```swift
class MTRBaseClusterEnergyEVSEMode
```

<a id="overview"></a>

## Overview

Attributes and commands for selecting a mode from a list of supported options.

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrbaseclusterenergyevsemode/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.

### Instance Methods

- [changeToMode(with:completion:)](mtrbaseclusterenergyevsemode/changetomode%28with_completion_%29.md): Command ChangeToMode
- [readAttributeAcceptedCommandList(completion:)](mtrbaseclusterenergyevsemode/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeList(completion:)](mtrbaseclusterenergyevsemode/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevision(completion:)](mtrbaseclusterenergyevsemode/readattributeclusterrevision%28completion_%29.md)
- [readAttributeCurrentMode(completion:)](mtrbaseclusterenergyevsemode/readattributecurrentmode%28completion_%29.md)
- [readAttributeFeatureMap(completion:)](mtrbaseclusterenergyevsemode/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclusterenergyevsemode/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeSupportedModes(completion:)](mtrbaseclusterenergyevsemode/readattributesupportedmodes%28completion_%29.md)
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevsemode/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevsemode/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevsemode/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeCurrentMode(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevsemode/subscribeattributecurrentmode%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevsemode/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevsemode/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupportedModes(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevsemode/subscribeattributesupportedmodes%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevsemode/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevsemode/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevsemode/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeCurrentMode(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevsemode/readattributecurrentmode%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevsemode/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevsemode/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupportedModes(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevsemode/readattributesupportedmodes%28withclusterstatecache_endpoint_queue_completion_%29.md)

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

# MTRBaseClusterEnergyEVSEMode (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Energy EVSE Mode

## Declaration

```objectivec
@interface MTRBaseClusterEnergyEVSEMode : MTRGenericBaseCluster
```

<a id="overview"></a>

## Overview

Attributes and commands for selecting a mode from a list of supported options.

## Topics

### Instance Methods

- [changeToModeWithParams:completion:](mtrbaseclusterenergyevsemode/changetomode%28with_completion_%29.md): Command ChangeToMode
- [initWithDevice:endpointID:queue:](mtrbaseclusterenergyevsemode/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclusterenergyevsemode/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeListWithCompletion:](mtrbaseclusterenergyevsemode/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclusterenergyevsemode/readattributeclusterrevision%28completion_%29.md)
- [readAttributeCurrentModeWithCompletion:](mtrbaseclusterenergyevsemode/readattributecurrentmode%28completion_%29.md)
- [readAttributeFeatureMapWithCompletion:](mtrbaseclusterenergyevsemode/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclusterenergyevsemode/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeSupportedModesWithCompletion:](mtrbaseclusterenergyevsemode/readattributesupportedmodes%28completion_%29.md)
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevsemode/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevsemode/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevsemode/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeCurrentModeWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevsemode/subscribeattributecurrentmode%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevsemode/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevsemode/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupportedModesWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevsemode/subscribeattributesupportedmodes%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevsemode/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevsemode/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevsemode/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeCurrentModeWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevsemode/readattributecurrentmode%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevsemode/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevsemode/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupportedModesWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevsemode/readattributesupportedmodes%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)
