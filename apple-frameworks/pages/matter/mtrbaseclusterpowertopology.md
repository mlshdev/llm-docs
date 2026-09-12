> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterpowertopology](https://developer.apple.com/documentation/matter/mtrbaseclusterpowertopology)

# MTRBaseClusterPowerTopology (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Power Topology

## Declaration

```swift
class MTRBaseClusterPowerTopology
```

<a id="overview"></a>

## Overview

The Power Topology Cluster provides a mechanism for expressing how power is flowing between endpoints.

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrbaseclusterpowertopology/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.

### Instance Methods

- [readAttributeAcceptedCommandList(completion:)](mtrbaseclusterpowertopology/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeActiveEndpoints(completion:)](mtrbaseclusterpowertopology/readattributeactiveendpoints%28completion_%29.md)
- [readAttributeAttributeList(completion:)](mtrbaseclusterpowertopology/readattributeattributelist%28completion_%29.md)
- [readAttributeAvailableEndpoints(completion:)](mtrbaseclusterpowertopology/readattributeavailableendpoints%28completion_%29.md)
- [readAttributeClusterRevision(completion:)](mtrbaseclusterpowertopology/readattributeclusterrevision%28completion_%29.md)
- [readAttributeFeatureMap(completion:)](mtrbaseclusterpowertopology/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclusterpowertopology/readattributegeneratedcommandlist%28completion_%29.md)
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterpowertopology/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeActiveEndpoints(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterpowertopology/subscribeattributeactiveendpoints%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterpowertopology/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAvailableEndpoints(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterpowertopology/subscribeattributeavailableendpoints%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterpowertopology/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterpowertopology/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterpowertopology/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterpowertopology/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeActiveEndpoints(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterpowertopology/readattributeactiveendpoints%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterpowertopology/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAvailableEndpoints(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterpowertopology/readattributeavailableendpoints%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterpowertopology/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterpowertopology/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterpowertopology/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)

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

# MTRBaseClusterPowerTopology (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Power Topology

## Declaration

```objectivec
@interface MTRBaseClusterPowerTopology : MTRGenericBaseCluster
```

<a id="overview"></a>

## Overview

The Power Topology Cluster provides a mechanism for expressing how power is flowing between endpoints.

## Topics

### Instance Methods

- [initWithDevice:endpointID:queue:](mtrbaseclusterpowertopology/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclusterpowertopology/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeActiveEndpointsWithCompletion:](mtrbaseclusterpowertopology/readattributeactiveendpoints%28completion_%29.md)
- [readAttributeAttributeListWithCompletion:](mtrbaseclusterpowertopology/readattributeattributelist%28completion_%29.md)
- [readAttributeAvailableEndpointsWithCompletion:](mtrbaseclusterpowertopology/readattributeavailableendpoints%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclusterpowertopology/readattributeclusterrevision%28completion_%29.md)
- [readAttributeFeatureMapWithCompletion:](mtrbaseclusterpowertopology/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclusterpowertopology/readattributegeneratedcommandlist%28completion_%29.md)
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterpowertopology/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeActiveEndpointsWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterpowertopology/subscribeattributeactiveendpoints%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterpowertopology/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAvailableEndpointsWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterpowertopology/subscribeattributeavailableendpoints%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterpowertopology/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterpowertopology/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterpowertopology/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterpowertopology/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeActiveEndpointsWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterpowertopology/readattributeactiveendpoints%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterpowertopology/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAvailableEndpointsWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterpowertopology/readattributeavailableendpoints%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterpowertopology/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterpowertopology/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterpowertopology/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)
