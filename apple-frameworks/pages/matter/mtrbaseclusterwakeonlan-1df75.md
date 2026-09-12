> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterwakeonlan-1df75](https://developer.apple.com/documentation/matter/mtrbaseclusterwakeonlan-1df75)

# MTRBaseClusterWakeOnLAN (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
class MTRBaseClusterWakeOnLAN
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrbaseclusterwakeonlan-1df75/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandList(completion:)](mtrbaseclusterwakeonlan-1df75/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeList(completion:)](mtrbaseclusterwakeonlan-1df75/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevision(completion:)](mtrbaseclusterwakeonlan-1df75/readattributeclusterrevision%28completion_%29.md)
- [readAttributeFeatureMap(completion:)](mtrbaseclusterwakeonlan-1df75/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclusterwakeonlan-1df75/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeMACAddress(completion:)](mtrbaseclusterwakeonlan-1df75/readattributemacaddress%28completion_%29.md)
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterwakeonlan-1df75/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterwakeonlan-1df75/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterwakeonlan-1df75/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterwakeonlan-1df75/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterwakeonlan-1df75/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeMACAddress(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterwakeonlan-1df75/subscribeattributemacaddress%28with_subscriptionestablished_reporthandler_%29.md)
- [readAttributeLinkLocalAddress(completion:)](mtrbaseclusterwakeonlan-1df75/readattributelinklocaladdress%28completion_%29.md)
- [subscribeAttributeLinkLocalAddress(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterwakeonlan-1df75/subscribeattributelinklocaladdress%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterwakeonlan-1df75/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterwakeonlan-1df75/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterwakeonlan-1df75/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterwakeonlan-1df75/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterwakeonlan-1df75/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeMACAddress(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterwakeonlan-1df75/readattributemacaddress%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeLinkLocalAddress(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterwakeonlan-1df75/readattributelinklocaladdress%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)

### Inherited By

- [MTRBaseClusterWakeOnLan](mtrbaseclusterwakeonlan-1dp5d.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTRBaseClusterWakeOnLAN (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
@interface MTRBaseClusterWakeOnLAN : MTRGenericBaseCluster
```

## Topics

### Initializers

- [initWithDevice:endpointID:queue:](mtrbaseclusterwakeonlan-1df75/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclusterwakeonlan-1df75/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeListWithCompletion:](mtrbaseclusterwakeonlan-1df75/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclusterwakeonlan-1df75/readattributeclusterrevision%28completion_%29.md)
- [readAttributeFeatureMapWithCompletion:](mtrbaseclusterwakeonlan-1df75/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclusterwakeonlan-1df75/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeMACAddressWithCompletion:](mtrbaseclusterwakeonlan-1df75/readattributemacaddress%28completion_%29.md)
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterwakeonlan-1df75/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterwakeonlan-1df75/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterwakeonlan-1df75/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterwakeonlan-1df75/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterwakeonlan-1df75/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeMACAddressWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterwakeonlan-1df75/subscribeattributemacaddress%28with_subscriptionestablished_reporthandler_%29.md)
- [readAttributeLinkLocalAddressWithCompletion:](mtrbaseclusterwakeonlan-1df75/readattributelinklocaladdress%28completion_%29.md)
- [subscribeAttributeLinkLocalAddressWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterwakeonlan-1df75/subscribeattributelinklocaladdress%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterwakeonlan-1df75/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterwakeonlan-1df75/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterwakeonlan-1df75/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterwakeonlan-1df75/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterwakeonlan-1df75/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeMACAddressWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterwakeonlan-1df75/readattributemacaddress%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeLinkLocalAddressWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterwakeonlan-1df75/readattributelinklocaladdress%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)

### Inherited By

- [MTRBaseClusterWakeOnLan](mtrbaseclusterwakeonlan-1dp5d.md)
