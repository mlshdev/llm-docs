> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterbinding](https://developer.apple.com/documentation/matter/mtrbaseclusterbinding)

# MTRBaseClusterBinding (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRBaseClusterBinding
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrbaseclusterbinding/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrbaseclusterbinding/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandList(completion:)](mtrbaseclusterbinding/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAcceptedCommandList(completionHandler:)](mtrbaseclusterbinding/readattributeacceptedcommandlist%28completionhandler_%29.md): Deprecated.
- [readAttributeAttributeList(completion:)](mtrbaseclusterbinding/readattributeattributelist%28completion_%29.md)
- [readAttributeAttributeList(completionHandler:)](mtrbaseclusterbinding/readattributeattributelist%28completionhandler_%29.md): Deprecated.
- [readAttributeBinding(with:completion:)](mtrbaseclusterbinding/readattributebinding%28with_completion_%29.md)
- [readAttributeBinding(with:completionHandler:)](mtrbaseclusterbinding/readattributebinding%28with_completionhandler_%29.md): Deprecated.
- [readAttributeClusterRevision(completion:)](mtrbaseclusterbinding/readattributeclusterrevision%28completion_%29.md)
- [readAttributeClusterRevision(completionHandler:)](mtrbaseclusterbinding/readattributeclusterrevision%28completionhandler_%29.md): Deprecated.
- [readAttributeFeatureMap(completion:)](mtrbaseclusterbinding/readattributefeaturemap%28completion_%29.md)
- [readAttributeFeatureMap(completionHandler:)](mtrbaseclusterbinding/readattributefeaturemap%28completionhandler_%29.md): Deprecated.
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclusterbinding/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeGeneratedCommandList(completionHandler:)](mtrbaseclusterbinding/readattributegeneratedcommandlist%28completionhandler_%29.md): Deprecated.
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterbinding/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAcceptedCommandList(withMinInterval:maxInterval:params:subscriptionEstablished:reportHandler:)](mtrbaseclusterbinding/subscribeattributeacceptedcommandlist%28withmininterval_maxinterval_params_subscriptionestablished_reporthandler_%29.md): Deprecated.
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterbinding/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(withMinInterval:maxInterval:params:subscriptionEstablished:reportHandler:)](mtrbaseclusterbinding/subscribeattributeattributelist%28withmininterval_maxinterval_params_subscriptionestablished_reporthandler_%29.md): Deprecated.
- [subscribeAttributeBinding(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterbinding/subscribeattributebinding%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeBinding(withMinInterval:maxInterval:params:subscriptionEstablished:reportHandler:)](mtrbaseclusterbinding/subscribeattributebinding%28withmininterval_maxinterval_params_subscriptionestablished_reporthandler_%29.md): Deprecated.
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterbinding/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(withMinInterval:maxInterval:params:subscriptionEstablished:reportHandler:)](mtrbaseclusterbinding/subscribeattributeclusterrevision%28withmininterval_maxinterval_params_subscriptionestablished_reporthandler_%29.md): Deprecated.
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterbinding/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(withMinInterval:maxInterval:params:subscriptionEstablished:reportHandler:)](mtrbaseclusterbinding/subscribeattributefeaturemap%28withmininterval_maxinterval_params_subscriptionestablished_reporthandler_%29.md): Deprecated.
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterbinding/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(withMinInterval:maxInterval:params:subscriptionEstablished:reportHandler:)](mtrbaseclusterbinding/subscribeattributegeneratedcommandlist%28withmininterval_maxinterval_params_subscriptionestablished_reporthandler_%29.md): Deprecated.
- [writeAttributeBinding(withValue:completion:)](mtrbaseclusterbinding/writeattributebinding%28withvalue_completion_%29.md)
- [writeAttributeBinding(withValue:completionHandler:)](mtrbaseclusterbinding/writeattributebinding%28withvalue_completionhandler_%29.md): Deprecated.
- [writeAttributeBinding(withValue:params:completion:)](mtrbaseclusterbinding/writeattributebinding%28withvalue_params_completion_%29.md)
- [writeAttributeBinding(withValue:params:completionHandler:)](mtrbaseclusterbinding/writeattributebinding%28withvalue_params_completionhandler_%29.md): Deprecated.

### Type Methods

- [readAttributeAcceptedCommandList(withAttributeCache:endpoint:queue:completionHandler:)](mtrbaseclusterbinding/readattributeacceptedcommandlist%28withattributecache_endpoint_queue_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterbinding/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withAttributeCache:endpoint:queue:completionHandler:)](mtrbaseclusterbinding/readattributeattributelist%28withattributecache_endpoint_queue_completionhandler_%29.md): Deprecated.
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterbinding/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeBinding(withAttributeCache:endpoint:queue:completionHandler:)](mtrbaseclusterbinding/readattributebinding%28withattributecache_endpoint_queue_completionhandler_%29.md): Deprecated.
- [readAttributeBinding(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterbinding/readattributebinding%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withAttributeCache:endpoint:queue:completionHandler:)](mtrbaseclusterbinding/readattributeclusterrevision%28withattributecache_endpoint_queue_completionhandler_%29.md): Deprecated.
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterbinding/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withAttributeCache:endpoint:queue:completionHandler:)](mtrbaseclusterbinding/readattributefeaturemap%28withattributecache_endpoint_queue_completionhandler_%29.md): Deprecated.
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterbinding/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withAttributeCache:endpoint:queue:completionHandler:)](mtrbaseclusterbinding/readattributegeneratedcommandlist%28withattributecache_endpoint_queue_completionhandler_%29.md): Deprecated.
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterbinding/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)

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

# MTRBaseClusterBinding (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRBaseClusterBinding : MTRGenericBaseCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrbaseclusterbinding/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrbaseclusterbinding/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclusterbinding/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAcceptedCommandListWithCompletionHandler:](mtrbaseclusterbinding/readattributeacceptedcommandlist%28completionhandler_%29.md): Deprecated.
- [readAttributeAttributeListWithCompletion:](mtrbaseclusterbinding/readattributeattributelist%28completion_%29.md)
- [readAttributeAttributeListWithCompletionHandler:](mtrbaseclusterbinding/readattributeattributelist%28completionhandler_%29.md): Deprecated.
- [readAttributeBindingWithParams:completion:](mtrbaseclusterbinding/readattributebinding%28with_completion_%29.md)
- [readAttributeBindingWithParams:completionHandler:](mtrbaseclusterbinding/readattributebinding%28with_completionhandler_%29.md): Deprecated.
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclusterbinding/readattributeclusterrevision%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletionHandler:](mtrbaseclusterbinding/readattributeclusterrevision%28completionhandler_%29.md): Deprecated.
- [readAttributeFeatureMapWithCompletion:](mtrbaseclusterbinding/readattributefeaturemap%28completion_%29.md)
- [readAttributeFeatureMapWithCompletionHandler:](mtrbaseclusterbinding/readattributefeaturemap%28completionhandler_%29.md): Deprecated.
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclusterbinding/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletionHandler:](mtrbaseclusterbinding/readattributegeneratedcommandlist%28completionhandler_%29.md): Deprecated.
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterbinding/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAcceptedCommandListWithMinInterval:maxInterval:params:subscriptionEstablished:reportHandler:](mtrbaseclusterbinding/subscribeattributeacceptedcommandlist%28withmininterval_maxinterval_params_subscriptionestablished_reporthandler_%29.md): Deprecated.
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterbinding/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithMinInterval:maxInterval:params:subscriptionEstablished:reportHandler:](mtrbaseclusterbinding/subscribeattributeattributelist%28withmininterval_maxinterval_params_subscriptionestablished_reporthandler_%29.md): Deprecated.
- [subscribeAttributeBindingWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterbinding/subscribeattributebinding%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeBindingWithMinInterval:maxInterval:params:subscriptionEstablished:reportHandler:](mtrbaseclusterbinding/subscribeattributebinding%28withmininterval_maxinterval_params_subscriptionestablished_reporthandler_%29.md): Deprecated.
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterbinding/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithMinInterval:maxInterval:params:subscriptionEstablished:reportHandler:](mtrbaseclusterbinding/subscribeattributeclusterrevision%28withmininterval_maxinterval_params_subscriptionestablished_reporthandler_%29.md): Deprecated.
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterbinding/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithMinInterval:maxInterval:params:subscriptionEstablished:reportHandler:](mtrbaseclusterbinding/subscribeattributefeaturemap%28withmininterval_maxinterval_params_subscriptionestablished_reporthandler_%29.md): Deprecated.
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterbinding/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithMinInterval:maxInterval:params:subscriptionEstablished:reportHandler:](mtrbaseclusterbinding/subscribeattributegeneratedcommandlist%28withmininterval_maxinterval_params_subscriptionestablished_reporthandler_%29.md): Deprecated.
- [writeAttributeBindingWithValue:completion:](mtrbaseclusterbinding/writeattributebinding%28withvalue_completion_%29.md)
- [writeAttributeBindingWithValue:completionHandler:](mtrbaseclusterbinding/writeattributebinding%28withvalue_completionhandler_%29.md): Deprecated.
- [writeAttributeBindingWithValue:params:completion:](mtrbaseclusterbinding/writeattributebinding%28withvalue_params_completion_%29.md)
- [writeAttributeBindingWithValue:params:completionHandler:](mtrbaseclusterbinding/writeattributebinding%28withvalue_params_completionhandler_%29.md): Deprecated.

### Type Methods

- [readAttributeAcceptedCommandListWithAttributeCache:endpoint:queue:completionHandler:](mtrbaseclusterbinding/readattributeacceptedcommandlist%28withattributecache_endpoint_queue_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterbinding/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithAttributeCache:endpoint:queue:completionHandler:](mtrbaseclusterbinding/readattributeattributelist%28withattributecache_endpoint_queue_completionhandler_%29.md): Deprecated.
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterbinding/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeBindingWithAttributeCache:endpoint:queue:completionHandler:](mtrbaseclusterbinding/readattributebinding%28withattributecache_endpoint_queue_completionhandler_%29.md): Deprecated.
- [readAttributeBindingWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterbinding/readattributebinding%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithAttributeCache:endpoint:queue:completionHandler:](mtrbaseclusterbinding/readattributeclusterrevision%28withattributecache_endpoint_queue_completionhandler_%29.md): Deprecated.
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterbinding/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithAttributeCache:endpoint:queue:completionHandler:](mtrbaseclusterbinding/readattributefeaturemap%28withattributecache_endpoint_queue_completionhandler_%29.md): Deprecated.
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterbinding/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithAttributeCache:endpoint:queue:completionHandler:](mtrbaseclusterbinding/readattributegeneratedcommandlist%28withattributecache_endpoint_queue_completionhandler_%29.md): Deprecated.
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterbinding/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)
