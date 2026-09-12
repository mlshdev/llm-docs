> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustermessages](https://developer.apple.com/documentation/matter/mtrbaseclustermessages)

# MTRBaseClusterMessages (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Messages

## Declaration

```swift
class MTRBaseClusterMessages
```

<a id="overview"></a>

## Overview

This cluster provides an interface for passing messages to be presented by a device.

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrbaseclustermessages/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.

### Instance Methods

- [cancelRequest(with:completion:)](mtrbaseclustermessages/cancelrequest%28with_completion_%29.md): Command CancelMessagesRequest
- [presentRequest(with:completion:)](mtrbaseclustermessages/presentrequest%28with_completion_%29.md): Command PresentMessagesRequest
- [readAttributeAcceptedCommandList(completion:)](mtrbaseclustermessages/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeActiveMessageIDs(completion:)](mtrbaseclustermessages/readattributeactivemessageids%28completion_%29.md)
- [readAttributeAttributeList(completion:)](mtrbaseclustermessages/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevision(completion:)](mtrbaseclustermessages/readattributeclusterrevision%28completion_%29.md)
- [readAttributeFeatureMap(completion:)](mtrbaseclustermessages/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclustermessages/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeMessages(completion:)](mtrbaseclustermessages/readattributemessages%28completion_%29.md)
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclustermessages/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeActiveMessageIDs(with:subscriptionEstablished:reportHandler:)](mtrbaseclustermessages/subscribeattributeactivemessageids%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclustermessages/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclustermessages/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclustermessages/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclustermessages/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeMessages(with:subscriptionEstablished:reportHandler:)](mtrbaseclustermessages/subscribeattributemessages%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustermessages/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeActiveMessageIDs(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustermessages/readattributeactivemessageids%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustermessages/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustermessages/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustermessages/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustermessages/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeMessages(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustermessages/readattributemessages%28withclusterstatecache_endpoint_queue_completion_%29.md)

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

# MTRBaseClusterMessages (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Messages

## Declaration

```objectivec
@interface MTRBaseClusterMessages : MTRGenericBaseCluster
```

<a id="overview"></a>

## Overview

This cluster provides an interface for passing messages to be presented by a device.

## Topics

### Instance Methods

- [cancelMessagesRequestWithParams:completion:](mtrbaseclustermessages/cancelrequest%28with_completion_%29.md): Command CancelMessagesRequest
- [initWithDevice:endpointID:queue:](mtrbaseclustermessages/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.
- [presentMessagesRequestWithParams:completion:](mtrbaseclustermessages/presentrequest%28with_completion_%29.md): Command PresentMessagesRequest
- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclustermessages/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeActiveMessageIDsWithCompletion:](mtrbaseclustermessages/readattributeactivemessageids%28completion_%29.md)
- [readAttributeAttributeListWithCompletion:](mtrbaseclustermessages/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclustermessages/readattributeclusterrevision%28completion_%29.md)
- [readAttributeFeatureMapWithCompletion:](mtrbaseclustermessages/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclustermessages/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeMessagesWithCompletion:](mtrbaseclustermessages/readattributemessages%28completion_%29.md)
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustermessages/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeActiveMessageIDsWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustermessages/subscribeattributeactivemessageids%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustermessages/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustermessages/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustermessages/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustermessages/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeMessagesWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustermessages/subscribeattributemessages%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustermessages/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeActiveMessageIDsWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustermessages/readattributeactivemessageids%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustermessages/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustermessages/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustermessages/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustermessages/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeMessagesWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustermessages/readattributemessages%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)
