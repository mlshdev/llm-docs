> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthreadnetworkdirectory](https://developer.apple.com/documentation/matter/mtrbaseclusterthreadnetworkdirectory)

# MTRBaseClusterThreadNetworkDirectory (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Thread Network Directory

## Declaration

```swift
class MTRBaseClusterThreadNetworkDirectory
```

<a id="overview"></a>

## Overview

Manages the names and credentials of Thread networks visible to the user.

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrbaseclusterthreadnetworkdirectory/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.

### Instance Methods

- [addNetwork(with:completion:)](mtrbaseclusterthreadnetworkdirectory/addnetwork%28with_completion_%29.md): Command AddNetwork
- [getOperationalDataset(with:completion:)](mtrbaseclusterthreadnetworkdirectory/getoperationaldataset%28with_completion_%29.md): Command GetOperationalDataset
- [readAttributeAcceptedCommandList(completion:)](mtrbaseclusterthreadnetworkdirectory/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeList(completion:)](mtrbaseclusterthreadnetworkdirectory/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevision(completion:)](mtrbaseclusterthreadnetworkdirectory/readattributeclusterrevision%28completion_%29.md)
- [readAttributeFeatureMap(completion:)](mtrbaseclusterthreadnetworkdirectory/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclusterthreadnetworkdirectory/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributePreferredExtendedPanID(completion:)](mtrbaseclusterthreadnetworkdirectory/readattributepreferredextendedpanid%28completion_%29.md)
- [readAttributeThreadNetworkTableSize(completion:)](mtrbaseclusterthreadnetworkdirectory/readattributethreadnetworktablesize%28completion_%29.md)
- [readAttributeThreadNetworks(completion:)](mtrbaseclusterthreadnetworkdirectory/readattributethreadnetworks%28completion_%29.md)
- [removeNetwork(with:completion:)](mtrbaseclusterthreadnetworkdirectory/removenetwork%28with_completion_%29.md): Command RemoveNetwork
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterthreadnetworkdirectory/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterthreadnetworkdirectory/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterthreadnetworkdirectory/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterthreadnetworkdirectory/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterthreadnetworkdirectory/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributePreferredExtendedPanID(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterthreadnetworkdirectory/subscribeattributepreferredextendedpanid%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeThreadNetworkTableSize(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterthreadnetworkdirectory/subscribeattributethreadnetworktablesize%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeThreadNetworks(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterthreadnetworkdirectory/subscribeattributethreadnetworks%28with_subscriptionestablished_reporthandler_%29.md)
- [writeAttributePreferredExtendedPanID(withValue:completion:)](mtrbaseclusterthreadnetworkdirectory/writeattributepreferredextendedpanid%28withvalue_completion_%29.md)
- [writeAttributePreferredExtendedPanID(withValue:params:completion:)](mtrbaseclusterthreadnetworkdirectory/writeattributepreferredextendedpanid%28withvalue_params_completion_%29.md)

### Type Methods

- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterthreadnetworkdirectory/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterthreadnetworkdirectory/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterthreadnetworkdirectory/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterthreadnetworkdirectory/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterthreadnetworkdirectory/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributePreferredExtendedPanID(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterthreadnetworkdirectory/readattributepreferredextendedpanid%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeThreadNetworkTableSize(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterthreadnetworkdirectory/readattributethreadnetworktablesize%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeThreadNetworks(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterthreadnetworkdirectory/readattributethreadnetworks%28withclusterstatecache_endpoint_queue_completion_%29.md)

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

# MTRBaseClusterThreadNetworkDirectory (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Thread Network Directory

## Declaration

```objectivec
@interface MTRBaseClusterThreadNetworkDirectory : MTRGenericBaseCluster
```

<a id="overview"></a>

## Overview

Manages the names and credentials of Thread networks visible to the user.

## Topics

### Instance Methods

- [addNetworkWithParams:completion:](mtrbaseclusterthreadnetworkdirectory/addnetwork%28with_completion_%29.md): Command AddNetwork
- [getOperationalDatasetWithParams:completion:](mtrbaseclusterthreadnetworkdirectory/getoperationaldataset%28with_completion_%29.md): Command GetOperationalDataset
- [initWithDevice:endpointID:queue:](mtrbaseclusterthreadnetworkdirectory/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclusterthreadnetworkdirectory/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeListWithCompletion:](mtrbaseclusterthreadnetworkdirectory/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclusterthreadnetworkdirectory/readattributeclusterrevision%28completion_%29.md)
- [readAttributeFeatureMapWithCompletion:](mtrbaseclusterthreadnetworkdirectory/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclusterthreadnetworkdirectory/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributePreferredExtendedPanIDWithCompletion:](mtrbaseclusterthreadnetworkdirectory/readattributepreferredextendedpanid%28completion_%29.md)
- [readAttributeThreadNetworkTableSizeWithCompletion:](mtrbaseclusterthreadnetworkdirectory/readattributethreadnetworktablesize%28completion_%29.md)
- [readAttributeThreadNetworksWithCompletion:](mtrbaseclusterthreadnetworkdirectory/readattributethreadnetworks%28completion_%29.md)
- [removeNetworkWithParams:completion:](mtrbaseclusterthreadnetworkdirectory/removenetwork%28with_completion_%29.md): Command RemoveNetwork
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterthreadnetworkdirectory/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterthreadnetworkdirectory/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterthreadnetworkdirectory/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterthreadnetworkdirectory/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterthreadnetworkdirectory/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributePreferredExtendedPanIDWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterthreadnetworkdirectory/subscribeattributepreferredextendedpanid%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeThreadNetworkTableSizeWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterthreadnetworkdirectory/subscribeattributethreadnetworktablesize%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeThreadNetworksWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterthreadnetworkdirectory/subscribeattributethreadnetworks%28with_subscriptionestablished_reporthandler_%29.md)
- [writeAttributePreferredExtendedPanIDWithValue:completion:](mtrbaseclusterthreadnetworkdirectory/writeattributepreferredextendedpanid%28withvalue_completion_%29.md)
- [writeAttributePreferredExtendedPanIDWithValue:params:completion:](mtrbaseclusterthreadnetworkdirectory/writeattributepreferredextendedpanid%28withvalue_params_completion_%29.md)

### Type Methods

- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterthreadnetworkdirectory/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterthreadnetworkdirectory/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterthreadnetworkdirectory/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterthreadnetworkdirectory/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterthreadnetworkdirectory/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributePreferredExtendedPanIDWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterthreadnetworkdirectory/readattributepreferredextendedpanid%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeThreadNetworkTableSizeWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterthreadnetworkdirectory/readattributethreadnetworktablesize%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeThreadNetworksWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterthreadnetworkdirectory/readattributethreadnetworks%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)
