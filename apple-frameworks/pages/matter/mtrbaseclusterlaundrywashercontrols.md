> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterlaundrywashercontrols](https://developer.apple.com/documentation/matter/mtrbaseclusterlaundrywashercontrols)

# MTRBaseClusterLaundryWasherControls (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Laundry Washer Controls

## Declaration

```swift
class MTRBaseClusterLaundryWasherControls
```

<a id="overview"></a>

## Overview

This cluster supports remotely monitoring and controlling the different types of functionality available to a washing device, such as a washing machine.

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrbaseclusterlaundrywashercontrols/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.

### Instance Methods

- [readAttributeAcceptedCommandList(completion:)](mtrbaseclusterlaundrywashercontrols/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeList(completion:)](mtrbaseclusterlaundrywashercontrols/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevision(completion:)](mtrbaseclusterlaundrywashercontrols/readattributeclusterrevision%28completion_%29.md)
- [readAttributeFeatureMap(completion:)](mtrbaseclusterlaundrywashercontrols/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclusterlaundrywashercontrols/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeNumberOfRinses(completion:)](mtrbaseclusterlaundrywashercontrols/readattributenumberofrinses%28completion_%29.md)
- [readAttributeSpinSpeedCurrent(completion:)](mtrbaseclusterlaundrywashercontrols/readattributespinspeedcurrent%28completion_%29.md)
- [readAttributeSpinSpeeds(completion:)](mtrbaseclusterlaundrywashercontrols/readattributespinspeeds%28completion_%29.md)
- [readAttributeSupportedRinses(completion:)](mtrbaseclusterlaundrywashercontrols/readattributesupportedrinses%28completion_%29.md)
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterlaundrywashercontrols/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterlaundrywashercontrols/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterlaundrywashercontrols/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterlaundrywashercontrols/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterlaundrywashercontrols/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeNumberOfRinses(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterlaundrywashercontrols/subscribeattributenumberofrinses%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSpinSpeedCurrent(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterlaundrywashercontrols/subscribeattributespinspeedcurrent%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSpinSpeeds(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterlaundrywashercontrols/subscribeattributespinspeeds%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupportedRinses(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterlaundrywashercontrols/subscribeattributesupportedrinses%28with_subscriptionestablished_reporthandler_%29.md)
- [writeAttributeNumberOfRinses(withValue:completion:)](mtrbaseclusterlaundrywashercontrols/writeattributenumberofrinses%28withvalue_completion_%29.md)
- [writeAttributeNumberOfRinses(withValue:params:completion:)](mtrbaseclusterlaundrywashercontrols/writeattributenumberofrinses%28withvalue_params_completion_%29.md)
- [writeAttributeSpinSpeedCurrent(withValue:completion:)](mtrbaseclusterlaundrywashercontrols/writeattributespinspeedcurrent%28withvalue_completion_%29.md)
- [writeAttributeSpinSpeedCurrent(withValue:params:completion:)](mtrbaseclusterlaundrywashercontrols/writeattributespinspeedcurrent%28withvalue_params_completion_%29.md)

### Type Methods

- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterlaundrywashercontrols/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterlaundrywashercontrols/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterlaundrywashercontrols/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterlaundrywashercontrols/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterlaundrywashercontrols/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeNumberOfRinses(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterlaundrywashercontrols/readattributenumberofrinses%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSpinSpeedCurrent(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterlaundrywashercontrols/readattributespinspeedcurrent%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSpinSpeeds(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterlaundrywashercontrols/readattributespinspeeds%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupportedRinses(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterlaundrywashercontrols/readattributesupportedrinses%28withclusterstatecache_endpoint_queue_completion_%29.md)

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

# MTRBaseClusterLaundryWasherControls (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Laundry Washer Controls

## Declaration

```objectivec
@interface MTRBaseClusterLaundryWasherControls : MTRGenericBaseCluster
```

<a id="overview"></a>

## Overview

This cluster supports remotely monitoring and controlling the different types of functionality available to a washing device, such as a washing machine.

## Topics

### Instance Methods

- [initWithDevice:endpointID:queue:](mtrbaseclusterlaundrywashercontrols/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclusterlaundrywashercontrols/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeListWithCompletion:](mtrbaseclusterlaundrywashercontrols/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclusterlaundrywashercontrols/readattributeclusterrevision%28completion_%29.md)
- [readAttributeFeatureMapWithCompletion:](mtrbaseclusterlaundrywashercontrols/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclusterlaundrywashercontrols/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeNumberOfRinsesWithCompletion:](mtrbaseclusterlaundrywashercontrols/readattributenumberofrinses%28completion_%29.md)
- [readAttributeSpinSpeedCurrentWithCompletion:](mtrbaseclusterlaundrywashercontrols/readattributespinspeedcurrent%28completion_%29.md)
- [readAttributeSpinSpeedsWithCompletion:](mtrbaseclusterlaundrywashercontrols/readattributespinspeeds%28completion_%29.md)
- [readAttributeSupportedRinsesWithCompletion:](mtrbaseclusterlaundrywashercontrols/readattributesupportedrinses%28completion_%29.md)
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterlaundrywashercontrols/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterlaundrywashercontrols/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterlaundrywashercontrols/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterlaundrywashercontrols/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterlaundrywashercontrols/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeNumberOfRinsesWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterlaundrywashercontrols/subscribeattributenumberofrinses%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSpinSpeedCurrentWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterlaundrywashercontrols/subscribeattributespinspeedcurrent%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSpinSpeedsWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterlaundrywashercontrols/subscribeattributespinspeeds%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupportedRinsesWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterlaundrywashercontrols/subscribeattributesupportedrinses%28with_subscriptionestablished_reporthandler_%29.md)
- [writeAttributeNumberOfRinsesWithValue:completion:](mtrbaseclusterlaundrywashercontrols/writeattributenumberofrinses%28withvalue_completion_%29.md)
- [writeAttributeNumberOfRinsesWithValue:params:completion:](mtrbaseclusterlaundrywashercontrols/writeattributenumberofrinses%28withvalue_params_completion_%29.md)
- [writeAttributeSpinSpeedCurrentWithValue:completion:](mtrbaseclusterlaundrywashercontrols/writeattributespinspeedcurrent%28withvalue_completion_%29.md)
- [writeAttributeSpinSpeedCurrentWithValue:params:completion:](mtrbaseclusterlaundrywashercontrols/writeattributespinspeedcurrent%28withvalue_params_completion_%29.md)

### Type Methods

- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterlaundrywashercontrols/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterlaundrywashercontrols/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterlaundrywashercontrols/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterlaundrywashercontrols/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterlaundrywashercontrols/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeNumberOfRinsesWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterlaundrywashercontrols/readattributenumberofrinses%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSpinSpeedCurrentWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterlaundrywashercontrols/readattributespinspeedcurrent%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSpinSpeedsWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterlaundrywashercontrols/readattributespinspeeds%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupportedRinsesWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterlaundrywashercontrols/readattributesupportedrinses%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)
