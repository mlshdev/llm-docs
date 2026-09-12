> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustercommissionercontrol](https://developer.apple.com/documentation/matter/mtrbaseclustercommissionercontrol)

# MTRBaseClusterCommissionerControl (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Commissioner Control

## Declaration

```swift
class MTRBaseClusterCommissionerControl
```

<a id="overview"></a>

## Overview

Supports the ability for clients to request the commissioning of themselves or other nodes onto a fabric which the cluster server can commission onto.

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrbaseclustercommissionercontrol/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.

### Instance Methods

- [commissionNode(with:completion:)](mtrbaseclustercommissionercontrol/commissionnode%28with_completion_%29.md): Command CommissionNode
- [readAttributeAcceptedCommandList(completion:)](mtrbaseclustercommissionercontrol/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeList(completion:)](mtrbaseclustercommissionercontrol/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevision(completion:)](mtrbaseclustercommissionercontrol/readattributeclusterrevision%28completion_%29.md)
- [readAttributeFeatureMap(completion:)](mtrbaseclustercommissionercontrol/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclustercommissionercontrol/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeSupportedDeviceCategories(completion:)](mtrbaseclustercommissionercontrol/readattributesupporteddevicecategories%28completion_%29.md)
- [requestCommissioningApproval(with:completion:)](mtrbaseclustercommissionercontrol/requestcommissioningapproval%28with_completion_%29.md): Command RequestCommissioningApproval
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclustercommissionercontrol/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclustercommissionercontrol/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclustercommissionercontrol/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclustercommissionercontrol/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclustercommissionercontrol/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupportedDeviceCategories(with:subscriptionEstablished:reportHandler:)](mtrbaseclustercommissionercontrol/subscribeattributesupporteddevicecategories%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustercommissionercontrol/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustercommissionercontrol/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustercommissionercontrol/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustercommissionercontrol/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustercommissionercontrol/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupportedDeviceCategories(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustercommissionercontrol/readattributesupporteddevicecategories%28withclusterstatecache_endpoint_queue_completion_%29.md)

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

# MTRBaseClusterCommissionerControl (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Commissioner Control

## Declaration

```objectivec
@interface MTRBaseClusterCommissionerControl : MTRGenericBaseCluster
```

<a id="overview"></a>

## Overview

Supports the ability for clients to request the commissioning of themselves or other nodes onto a fabric which the cluster server can commission onto.

## Topics

### Instance Methods

- [commissionNodeWithParams:completion:](mtrbaseclustercommissionercontrol/commissionnode%28with_completion_%29.md): Command CommissionNode
- [initWithDevice:endpointID:queue:](mtrbaseclustercommissionercontrol/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclustercommissionercontrol/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeListWithCompletion:](mtrbaseclustercommissionercontrol/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclustercommissionercontrol/readattributeclusterrevision%28completion_%29.md)
- [readAttributeFeatureMapWithCompletion:](mtrbaseclustercommissionercontrol/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclustercommissionercontrol/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeSupportedDeviceCategoriesWithCompletion:](mtrbaseclustercommissionercontrol/readattributesupporteddevicecategories%28completion_%29.md)
- [requestCommissioningApprovalWithParams:completion:](mtrbaseclustercommissionercontrol/requestcommissioningapproval%28with_completion_%29.md): Command RequestCommissioningApproval
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustercommissionercontrol/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustercommissionercontrol/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustercommissionercontrol/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustercommissionercontrol/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustercommissionercontrol/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupportedDeviceCategoriesWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustercommissionercontrol/subscribeattributesupporteddevicecategories%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustercommissionercontrol/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustercommissionercontrol/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustercommissionercontrol/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustercommissionercontrol/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustercommissionercontrol/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupportedDeviceCategoriesWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustercommissionercontrol/readattributesupporteddevicecategories%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)
