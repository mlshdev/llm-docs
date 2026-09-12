> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdeviceenergymanagementmode](https://developer.apple.com/documentation/matter/mtrbaseclusterdeviceenergymanagementmode)

# MTRBaseClusterDeviceEnergyManagementMode (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Device Energy Management Mode

## Declaration

```swift
class MTRBaseClusterDeviceEnergyManagementMode
```

<a id="overview"></a>

## Overview

Attributes and commands for selecting a mode from a list of supported options.

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrbaseclusterdeviceenergymanagementmode/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.

### Instance Methods

- [changeToMode(with:completion:)](mtrbaseclusterdeviceenergymanagementmode/changetomode%28with_completion_%29.md): Command ChangeToMode
- [readAttributeAcceptedCommandList(completion:)](mtrbaseclusterdeviceenergymanagementmode/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeList(completion:)](mtrbaseclusterdeviceenergymanagementmode/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevision(completion:)](mtrbaseclusterdeviceenergymanagementmode/readattributeclusterrevision%28completion_%29.md)
- [readAttributeCurrentMode(completion:)](mtrbaseclusterdeviceenergymanagementmode/readattributecurrentmode%28completion_%29.md)
- [readAttributeFeatureMap(completion:)](mtrbaseclusterdeviceenergymanagementmode/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclusterdeviceenergymanagementmode/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeSupportedModes(completion:)](mtrbaseclusterdeviceenergymanagementmode/readattributesupportedmodes%28completion_%29.md)
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdeviceenergymanagementmode/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdeviceenergymanagementmode/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdeviceenergymanagementmode/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeCurrentMode(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdeviceenergymanagementmode/subscribeattributecurrentmode%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdeviceenergymanagementmode/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdeviceenergymanagementmode/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupportedModes(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdeviceenergymanagementmode/subscribeattributesupportedmodes%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdeviceenergymanagementmode/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdeviceenergymanagementmode/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdeviceenergymanagementmode/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeCurrentMode(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdeviceenergymanagementmode/readattributecurrentmode%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdeviceenergymanagementmode/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdeviceenergymanagementmode/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupportedModes(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdeviceenergymanagementmode/readattributesupportedmodes%28withclusterstatecache_endpoint_queue_completion_%29.md)

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

# MTRBaseClusterDeviceEnergyManagementMode (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Device Energy Management Mode

## Declaration

```objectivec
@interface MTRBaseClusterDeviceEnergyManagementMode : MTRGenericBaseCluster
```

<a id="overview"></a>

## Overview

Attributes and commands for selecting a mode from a list of supported options.

## Topics

### Instance Methods

- [changeToModeWithParams:completion:](mtrbaseclusterdeviceenergymanagementmode/changetomode%28with_completion_%29.md): Command ChangeToMode
- [initWithDevice:endpointID:queue:](mtrbaseclusterdeviceenergymanagementmode/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclusterdeviceenergymanagementmode/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeListWithCompletion:](mtrbaseclusterdeviceenergymanagementmode/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclusterdeviceenergymanagementmode/readattributeclusterrevision%28completion_%29.md)
- [readAttributeCurrentModeWithCompletion:](mtrbaseclusterdeviceenergymanagementmode/readattributecurrentmode%28completion_%29.md)
- [readAttributeFeatureMapWithCompletion:](mtrbaseclusterdeviceenergymanagementmode/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclusterdeviceenergymanagementmode/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeSupportedModesWithCompletion:](mtrbaseclusterdeviceenergymanagementmode/readattributesupportedmodes%28completion_%29.md)
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdeviceenergymanagementmode/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdeviceenergymanagementmode/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdeviceenergymanagementmode/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeCurrentModeWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdeviceenergymanagementmode/subscribeattributecurrentmode%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdeviceenergymanagementmode/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdeviceenergymanagementmode/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupportedModesWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdeviceenergymanagementmode/subscribeattributesupportedmodes%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdeviceenergymanagementmode/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdeviceenergymanagementmode/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdeviceenergymanagementmode/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeCurrentModeWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdeviceenergymanagementmode/readattributecurrentmode%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdeviceenergymanagementmode/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdeviceenergymanagementmode/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupportedModesWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdeviceenergymanagementmode/readattributesupportedmodes%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)
