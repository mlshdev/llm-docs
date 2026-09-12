> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterlaundrydryercontrols](https://developer.apple.com/documentation/matter/mtrbaseclusterlaundrydryercontrols)

# MTRBaseClusterLaundryDryerControls (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Laundry Dryer Controls

## Declaration

```swift
class MTRBaseClusterLaundryDryerControls
```

<a id="overview"></a>

## Overview

This cluster provides a way to access options associated with the operation of a laundry dryer device type.

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrbaseclusterlaundrydryercontrols/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.

### Instance Methods

- [readAttributeAcceptedCommandList(completion:)](mtrbaseclusterlaundrydryercontrols/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeList(completion:)](mtrbaseclusterlaundrydryercontrols/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevision(completion:)](mtrbaseclusterlaundrydryercontrols/readattributeclusterrevision%28completion_%29.md)
- [readAttributeFeatureMap(completion:)](mtrbaseclusterlaundrydryercontrols/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclusterlaundrydryercontrols/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeSelectedDrynessLevel(completion:)](mtrbaseclusterlaundrydryercontrols/readattributeselecteddrynesslevel%28completion_%29.md)
- [readAttributeSupportedDrynessLevels(completion:)](mtrbaseclusterlaundrydryercontrols/readattributesupporteddrynesslevels%28completion_%29.md)
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterlaundrydryercontrols/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterlaundrydryercontrols/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterlaundrydryercontrols/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterlaundrydryercontrols/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterlaundrydryercontrols/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSelectedDrynessLevel(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterlaundrydryercontrols/subscribeattributeselecteddrynesslevel%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupportedDrynessLevels(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterlaundrydryercontrols/subscribeattributesupporteddrynesslevels%28with_subscriptionestablished_reporthandler_%29.md)
- [writeAttributeSelectedDrynessLevel(withValue:completion:)](mtrbaseclusterlaundrydryercontrols/writeattributeselecteddrynesslevel%28withvalue_completion_%29.md)
- [writeAttributeSelectedDrynessLevel(withValue:params:completion:)](mtrbaseclusterlaundrydryercontrols/writeattributeselecteddrynesslevel%28withvalue_params_completion_%29.md)

### Type Methods

- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterlaundrydryercontrols/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterlaundrydryercontrols/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterlaundrydryercontrols/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterlaundrydryercontrols/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterlaundrydryercontrols/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSelectedDrynessLevel(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterlaundrydryercontrols/readattributeselecteddrynesslevel%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupportedDrynessLevels(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterlaundrydryercontrols/readattributesupporteddrynesslevels%28withclusterstatecache_endpoint_queue_completion_%29.md)

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

# MTRBaseClusterLaundryDryerControls (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Laundry Dryer Controls

## Declaration

```objectivec
@interface MTRBaseClusterLaundryDryerControls : MTRGenericBaseCluster
```

<a id="overview"></a>

## Overview

This cluster provides a way to access options associated with the operation of a laundry dryer device type.

## Topics

### Instance Methods

- [initWithDevice:endpointID:queue:](mtrbaseclusterlaundrydryercontrols/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclusterlaundrydryercontrols/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeListWithCompletion:](mtrbaseclusterlaundrydryercontrols/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclusterlaundrydryercontrols/readattributeclusterrevision%28completion_%29.md)
- [readAttributeFeatureMapWithCompletion:](mtrbaseclusterlaundrydryercontrols/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclusterlaundrydryercontrols/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeSelectedDrynessLevelWithCompletion:](mtrbaseclusterlaundrydryercontrols/readattributeselecteddrynesslevel%28completion_%29.md)
- [readAttributeSupportedDrynessLevelsWithCompletion:](mtrbaseclusterlaundrydryercontrols/readattributesupporteddrynesslevels%28completion_%29.md)
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterlaundrydryercontrols/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterlaundrydryercontrols/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterlaundrydryercontrols/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterlaundrydryercontrols/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterlaundrydryercontrols/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSelectedDrynessLevelWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterlaundrydryercontrols/subscribeattributeselecteddrynesslevel%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupportedDrynessLevelsWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterlaundrydryercontrols/subscribeattributesupporteddrynesslevels%28with_subscriptionestablished_reporthandler_%29.md)
- [writeAttributeSelectedDrynessLevelWithValue:completion:](mtrbaseclusterlaundrydryercontrols/writeattributeselecteddrynesslevel%28withvalue_completion_%29.md)
- [writeAttributeSelectedDrynessLevelWithValue:params:completion:](mtrbaseclusterlaundrydryercontrols/writeattributeselecteddrynesslevel%28withvalue_params_completion_%29.md)

### Type Methods

- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterlaundrydryercontrols/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterlaundrydryercontrols/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterlaundrydryercontrols/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterlaundrydryercontrols/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterlaundrydryercontrols/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSelectedDrynessLevelWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterlaundrydryercontrols/readattributeselecteddrynesslevel%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupportedDrynessLevelsWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterlaundrydryercontrols/readattributesupporteddrynesslevels%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)
