> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdiagnosticlogs](https://developer.apple.com/documentation/matter/mtrbaseclusterdiagnosticlogs)

# MTRBaseClusterDiagnosticLogs (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRBaseClusterDiagnosticLogs
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrbaseclusterdiagnosticlogs/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrbaseclusterdiagnosticlogs/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandList(completion:)](mtrbaseclusterdiagnosticlogs/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAcceptedCommandList(completionHandler:)](mtrbaseclusterdiagnosticlogs/readattributeacceptedcommandlist%28completionhandler_%29.md): Deprecated.
- [readAttributeAttributeList(completion:)](mtrbaseclusterdiagnosticlogs/readattributeattributelist%28completion_%29.md)
- [readAttributeAttributeList(completionHandler:)](mtrbaseclusterdiagnosticlogs/readattributeattributelist%28completionhandler_%29.md): Deprecated.
- [readAttributeClusterRevision(completion:)](mtrbaseclusterdiagnosticlogs/readattributeclusterrevision%28completion_%29.md)
- [readAttributeClusterRevision(completionHandler:)](mtrbaseclusterdiagnosticlogs/readattributeclusterrevision%28completionhandler_%29.md): Deprecated.
- [readAttributeFeatureMap(completion:)](mtrbaseclusterdiagnosticlogs/readattributefeaturemap%28completion_%29.md)
- [readAttributeFeatureMap(completionHandler:)](mtrbaseclusterdiagnosticlogs/readattributefeaturemap%28completionhandler_%29.md): Deprecated.
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclusterdiagnosticlogs/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeGeneratedCommandList(completionHandler:)](mtrbaseclusterdiagnosticlogs/readattributegeneratedcommandlist%28completionhandler_%29.md): Deprecated.
- [retrieveLogsRequest(with:completion:)](mtrbaseclusterdiagnosticlogs/retrievelogsrequest%28with_completion_%29.md)
- [retrieveLogsRequest(with:completionHandler:)](mtrbaseclusterdiagnosticlogs/retrievelogsrequest%28with_completionhandler_%29.md): Deprecated.
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdiagnosticlogs/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAcceptedCommandList(withMinInterval:maxInterval:params:subscriptionEstablished:reportHandler:)](mtrbaseclusterdiagnosticlogs/subscribeattributeacceptedcommandlist%28withmininterval_maxinterval_params_subscriptionestablished_reporthandler_%29.md): Deprecated.
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdiagnosticlogs/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(withMinInterval:maxInterval:params:subscriptionEstablished:reportHandler:)](mtrbaseclusterdiagnosticlogs/subscribeattributeattributelist%28withmininterval_maxinterval_params_subscriptionestablished_reporthandler_%29.md): Deprecated.
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdiagnosticlogs/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(withMinInterval:maxInterval:params:subscriptionEstablished:reportHandler:)](mtrbaseclusterdiagnosticlogs/subscribeattributeclusterrevision%28withmininterval_maxinterval_params_subscriptionestablished_reporthandler_%29.md): Deprecated.
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdiagnosticlogs/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(withMinInterval:maxInterval:params:subscriptionEstablished:reportHandler:)](mtrbaseclusterdiagnosticlogs/subscribeattributefeaturemap%28withmininterval_maxinterval_params_subscriptionestablished_reporthandler_%29.md): Deprecated.
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdiagnosticlogs/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(withMinInterval:maxInterval:params:subscriptionEstablished:reportHandler:)](mtrbaseclusterdiagnosticlogs/subscribeattributegeneratedcommandlist%28withmininterval_maxinterval_params_subscriptionestablished_reporthandler_%29.md): Deprecated.

### Type Methods

- [readAttributeAcceptedCommandList(withAttributeCache:endpoint:queue:completionHandler:)](mtrbaseclusterdiagnosticlogs/readattributeacceptedcommandlist%28withattributecache_endpoint_queue_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdiagnosticlogs/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withAttributeCache:endpoint:queue:completionHandler:)](mtrbaseclusterdiagnosticlogs/readattributeattributelist%28withattributecache_endpoint_queue_completionhandler_%29.md): Deprecated.
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdiagnosticlogs/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withAttributeCache:endpoint:queue:completionHandler:)](mtrbaseclusterdiagnosticlogs/readattributeclusterrevision%28withattributecache_endpoint_queue_completionhandler_%29.md): Deprecated.
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdiagnosticlogs/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withAttributeCache:endpoint:queue:completionHandler:)](mtrbaseclusterdiagnosticlogs/readattributefeaturemap%28withattributecache_endpoint_queue_completionhandler_%29.md): Deprecated.
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdiagnosticlogs/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withAttributeCache:endpoint:queue:completionHandler:)](mtrbaseclusterdiagnosticlogs/readattributegeneratedcommandlist%28withattributecache_endpoint_queue_completionhandler_%29.md): Deprecated.
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdiagnosticlogs/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)

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

# MTRBaseClusterDiagnosticLogs (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRBaseClusterDiagnosticLogs : MTRGenericBaseCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrbaseclusterdiagnosticlogs/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrbaseclusterdiagnosticlogs/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclusterdiagnosticlogs/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAcceptedCommandListWithCompletionHandler:](mtrbaseclusterdiagnosticlogs/readattributeacceptedcommandlist%28completionhandler_%29.md): Deprecated.
- [readAttributeAttributeListWithCompletion:](mtrbaseclusterdiagnosticlogs/readattributeattributelist%28completion_%29.md)
- [readAttributeAttributeListWithCompletionHandler:](mtrbaseclusterdiagnosticlogs/readattributeattributelist%28completionhandler_%29.md): Deprecated.
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclusterdiagnosticlogs/readattributeclusterrevision%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletionHandler:](mtrbaseclusterdiagnosticlogs/readattributeclusterrevision%28completionhandler_%29.md): Deprecated.
- [readAttributeFeatureMapWithCompletion:](mtrbaseclusterdiagnosticlogs/readattributefeaturemap%28completion_%29.md)
- [readAttributeFeatureMapWithCompletionHandler:](mtrbaseclusterdiagnosticlogs/readattributefeaturemap%28completionhandler_%29.md): Deprecated.
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclusterdiagnosticlogs/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletionHandler:](mtrbaseclusterdiagnosticlogs/readattributegeneratedcommandlist%28completionhandler_%29.md): Deprecated.
- [retrieveLogsRequestWithParams:completion:](mtrbaseclusterdiagnosticlogs/retrievelogsrequest%28with_completion_%29.md)
- [retrieveLogsRequestWithParams:completionHandler:](mtrbaseclusterdiagnosticlogs/retrievelogsrequest%28with_completionhandler_%29.md): Deprecated.
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdiagnosticlogs/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAcceptedCommandListWithMinInterval:maxInterval:params:subscriptionEstablished:reportHandler:](mtrbaseclusterdiagnosticlogs/subscribeattributeacceptedcommandlist%28withmininterval_maxinterval_params_subscriptionestablished_reporthandler_%29.md): Deprecated.
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdiagnosticlogs/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithMinInterval:maxInterval:params:subscriptionEstablished:reportHandler:](mtrbaseclusterdiagnosticlogs/subscribeattributeattributelist%28withmininterval_maxinterval_params_subscriptionestablished_reporthandler_%29.md): Deprecated.
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdiagnosticlogs/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithMinInterval:maxInterval:params:subscriptionEstablished:reportHandler:](mtrbaseclusterdiagnosticlogs/subscribeattributeclusterrevision%28withmininterval_maxinterval_params_subscriptionestablished_reporthandler_%29.md): Deprecated.
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdiagnosticlogs/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithMinInterval:maxInterval:params:subscriptionEstablished:reportHandler:](mtrbaseclusterdiagnosticlogs/subscribeattributefeaturemap%28withmininterval_maxinterval_params_subscriptionestablished_reporthandler_%29.md): Deprecated.
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdiagnosticlogs/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithMinInterval:maxInterval:params:subscriptionEstablished:reportHandler:](mtrbaseclusterdiagnosticlogs/subscribeattributegeneratedcommandlist%28withmininterval_maxinterval_params_subscriptionestablished_reporthandler_%29.md): Deprecated.

### Type Methods

- [readAttributeAcceptedCommandListWithAttributeCache:endpoint:queue:completionHandler:](mtrbaseclusterdiagnosticlogs/readattributeacceptedcommandlist%28withattributecache_endpoint_queue_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdiagnosticlogs/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithAttributeCache:endpoint:queue:completionHandler:](mtrbaseclusterdiagnosticlogs/readattributeattributelist%28withattributecache_endpoint_queue_completionhandler_%29.md): Deprecated.
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdiagnosticlogs/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithAttributeCache:endpoint:queue:completionHandler:](mtrbaseclusterdiagnosticlogs/readattributeclusterrevision%28withattributecache_endpoint_queue_completionhandler_%29.md): Deprecated.
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdiagnosticlogs/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithAttributeCache:endpoint:queue:completionHandler:](mtrbaseclusterdiagnosticlogs/readattributefeaturemap%28withattributecache_endpoint_queue_completionhandler_%29.md): Deprecated.
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdiagnosticlogs/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithAttributeCache:endpoint:queue:completionHandler:](mtrbaseclusterdiagnosticlogs/readattributegeneratedcommandlist%28withattributecache_endpoint_queue_completionhandler_%29.md): Deprecated.
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdiagnosticlogs/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)
