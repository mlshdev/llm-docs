> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterwifinetworkmanagement](https://developer.apple.com/documentation/matter/mtrbaseclusterwifinetworkmanagement)

# MTRBaseClusterWiFiNetworkManagement (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Wi-Fi Network Management

## Declaration

```swift
class MTRBaseClusterWiFiNetworkManagement
```

<a id="overview"></a>

## Overview

Functionality to retrieve operational information about a managed Wi-Fi network.

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrbaseclusterwifinetworkmanagement/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.

### Instance Methods

- [networkPassphraseRequest(completion:)](mtrbaseclusterwifinetworkmanagement/networkpassphraserequest%28completion_%29.md)
- [networkPassphraseRequest(with:completion:)](mtrbaseclusterwifinetworkmanagement/networkpassphraserequest%28with_completion_%29.md): Command NetworkPassphraseRequest
- [readAttributeAcceptedCommandList(completion:)](mtrbaseclusterwifinetworkmanagement/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeList(completion:)](mtrbaseclusterwifinetworkmanagement/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevision(completion:)](mtrbaseclusterwifinetworkmanagement/readattributeclusterrevision%28completion_%29.md)
- [readAttributeFeatureMap(completion:)](mtrbaseclusterwifinetworkmanagement/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclusterwifinetworkmanagement/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributePassphraseSurrogate(completion:)](mtrbaseclusterwifinetworkmanagement/readattributepassphrasesurrogate%28completion_%29.md)
- [readAttributeSSID(completion:)](mtrbaseclusterwifinetworkmanagement/readattributessid%28completion_%29.md)
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterwifinetworkmanagement/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterwifinetworkmanagement/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterwifinetworkmanagement/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterwifinetworkmanagement/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterwifinetworkmanagement/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributePassphraseSurrogate(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterwifinetworkmanagement/subscribeattributepassphrasesurrogate%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSSID(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterwifinetworkmanagement/subscribeattributessid%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterwifinetworkmanagement/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterwifinetworkmanagement/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterwifinetworkmanagement/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterwifinetworkmanagement/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterwifinetworkmanagement/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributePassphraseSurrogate(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterwifinetworkmanagement/readattributepassphrasesurrogate%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSSID(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterwifinetworkmanagement/readattributessid%28withclusterstatecache_endpoint_queue_completion_%29.md)

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

# MTRBaseClusterWiFiNetworkManagement (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Wi-Fi Network Management

## Declaration

```objectivec
@interface MTRBaseClusterWiFiNetworkManagement : MTRGenericBaseCluster
```

<a id="overview"></a>

## Overview

Functionality to retrieve operational information about a managed Wi-Fi network.

## Topics

### Instance Methods

- [initWithDevice:endpointID:queue:](mtrbaseclusterwifinetworkmanagement/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.
- [networkPassphraseRequestWithCompletion:](mtrbaseclusterwifinetworkmanagement/networkpassphraserequest%28completion_%29.md)
- [networkPassphraseRequestWithParams:completion:](mtrbaseclusterwifinetworkmanagement/networkpassphraserequest%28with_completion_%29.md): Command NetworkPassphraseRequest
- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclusterwifinetworkmanagement/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeListWithCompletion:](mtrbaseclusterwifinetworkmanagement/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclusterwifinetworkmanagement/readattributeclusterrevision%28completion_%29.md)
- [readAttributeFeatureMapWithCompletion:](mtrbaseclusterwifinetworkmanagement/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclusterwifinetworkmanagement/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributePassphraseSurrogateWithCompletion:](mtrbaseclusterwifinetworkmanagement/readattributepassphrasesurrogate%28completion_%29.md)
- [readAttributeSSIDWithCompletion:](mtrbaseclusterwifinetworkmanagement/readattributessid%28completion_%29.md)
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterwifinetworkmanagement/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterwifinetworkmanagement/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterwifinetworkmanagement/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterwifinetworkmanagement/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterwifinetworkmanagement/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributePassphraseSurrogateWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterwifinetworkmanagement/subscribeattributepassphrasesurrogate%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSSIDWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterwifinetworkmanagement/subscribeattributessid%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterwifinetworkmanagement/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterwifinetworkmanagement/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterwifinetworkmanagement/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterwifinetworkmanagement/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterwifinetworkmanagement/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributePassphraseSurrogateWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterwifinetworkmanagement/readattributepassphrasesurrogate%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSSIDWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterwifinetworkmanagement/readattributessid%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)
