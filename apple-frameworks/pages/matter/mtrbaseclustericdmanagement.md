> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustericdmanagement](https://developer.apple.com/documentation/matter/mtrbaseclustericdmanagement)

# MTRBaseClusterICDManagement (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster ICD Management

## Declaration

```swift
class MTRBaseClusterICDManagement
```

<a id="overview"></a>

## Overview

Allows servers to ensure that listed clients are notified when a server is available for communication.

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrbaseclustericdmanagement/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.

### Instance Methods

- [readAttributeAcceptedCommandList(completion:)](mtrbaseclustericdmanagement/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeActiveModeDuration(completion:)](mtrbaseclustericdmanagement/readattributeactivemodeduration%28completion_%29.md)
- [readAttributeActiveModeThreshold(completion:)](mtrbaseclustericdmanagement/readattributeactivemodethreshold%28completion_%29.md)
- [readAttributeAttributeList(completion:)](mtrbaseclustericdmanagement/readattributeattributelist%28completion_%29.md)
- [readAttributeClientsSupportedPerFabric(completion:)](mtrbaseclustericdmanagement/readattributeclientssupportedperfabric%28completion_%29.md)
- [readAttributeClusterRevision(completion:)](mtrbaseclustericdmanagement/readattributeclusterrevision%28completion_%29.md)
- [readAttributeFeatureMap(completion:)](mtrbaseclustericdmanagement/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclustericdmanagement/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeICDCounter(completion:)](mtrbaseclustericdmanagement/readattributeicdcounter%28completion_%29.md)
- [readAttributeIdleModeDuration(completion:)](mtrbaseclustericdmanagement/readattributeidlemodeduration%28completion_%29.md)
- [readAttributeMaximumCheckInBackOff(completion:)](mtrbaseclustericdmanagement/readattributemaximumcheckinbackoff%28completion_%29.md)
- [readAttributeOperatingMode(completion:)](mtrbaseclustericdmanagement/readattributeoperatingmode%28completion_%29.md)
- [readAttributeRegisteredClients(with:completion:)](mtrbaseclustericdmanagement/readattributeregisteredclients%28with_completion_%29.md)
- [readAttributeUserActiveModeTriggerHint(completion:)](mtrbaseclustericdmanagement/readattributeuseractivemodetriggerhint%28completion_%29.md)
- [readAttributeUserActiveModeTriggerInstruction(completion:)](mtrbaseclustericdmanagement/readattributeuseractivemodetriggerinstruction%28completion_%29.md)
- [registerClient(with:completion:)](mtrbaseclustericdmanagement/registerclient%28with_completion_%29.md): Command RegisterClient
- [stayActiveRequest(with:completion:)](mtrbaseclustericdmanagement/stayactiverequest%28with_completion_%29.md): Command StayActiveRequest
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclustericdmanagement/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeActiveModeDuration(with:subscriptionEstablished:reportHandler:)](mtrbaseclustericdmanagement/subscribeattributeactivemodeduration%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeActiveModeThreshold(with:subscriptionEstablished:reportHandler:)](mtrbaseclustericdmanagement/subscribeattributeactivemodethreshold%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclustericdmanagement/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClientsSupportedPerFabric(with:subscriptionEstablished:reportHandler:)](mtrbaseclustericdmanagement/subscribeattributeclientssupportedperfabric%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclustericdmanagement/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclustericdmanagement/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclustericdmanagement/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeICDCounter(with:subscriptionEstablished:reportHandler:)](mtrbaseclustericdmanagement/subscribeattributeicdcounter%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeIdleModeDuration(with:subscriptionEstablished:reportHandler:)](mtrbaseclustericdmanagement/subscribeattributeidlemodeduration%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeMaximumCheckInBackOff(with:subscriptionEstablished:reportHandler:)](mtrbaseclustericdmanagement/subscribeattributemaximumcheckinbackoff%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeOperatingMode(with:subscriptionEstablished:reportHandler:)](mtrbaseclustericdmanagement/subscribeattributeoperatingmode%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeRegisteredClients(with:subscriptionEstablished:reportHandler:)](mtrbaseclustericdmanagement/subscribeattributeregisteredclients%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeUserActiveModeTriggerHint(with:subscriptionEstablished:reportHandler:)](mtrbaseclustericdmanagement/subscribeattributeuseractivemodetriggerhint%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeUserActiveModeTriggerInstruction(with:subscriptionEstablished:reportHandler:)](mtrbaseclustericdmanagement/subscribeattributeuseractivemodetriggerinstruction%28with_subscriptionestablished_reporthandler_%29.md)
- [unregisterClient(with:completion:)](mtrbaseclustericdmanagement/unregisterclient%28with_completion_%29.md): Command UnregisterClient

### Type Methods

- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustericdmanagement/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeActiveModeDuration(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustericdmanagement/readattributeactivemodeduration%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeActiveModeThreshold(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustericdmanagement/readattributeactivemodethreshold%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustericdmanagement/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClientsSupportedPerFabric(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustericdmanagement/readattributeclientssupportedperfabric%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustericdmanagement/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustericdmanagement/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustericdmanagement/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeICDCounter(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustericdmanagement/readattributeicdcounter%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeIdleModeDuration(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustericdmanagement/readattributeidlemodeduration%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeMaximumCheckInBackOff(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustericdmanagement/readattributemaximumcheckinbackoff%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeOperatingMode(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustericdmanagement/readattributeoperatingmode%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeRegisteredClients(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustericdmanagement/readattributeregisteredclients%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeUserActiveModeTriggerHint(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustericdmanagement/readattributeuseractivemodetriggerhint%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeUserActiveModeTriggerInstruction(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustericdmanagement/readattributeuseractivemodetriggerinstruction%28withclusterstatecache_endpoint_queue_completion_%29.md)

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

# MTRBaseClusterICDManagement (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster ICD Management

## Declaration

```objectivec
@interface MTRBaseClusterICDManagement : MTRGenericBaseCluster
```

<a id="overview"></a>

## Overview

Allows servers to ensure that listed clients are notified when a server is available for communication.

## Topics

### Instance Methods

- [initWithDevice:endpointID:queue:](mtrbaseclustericdmanagement/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclustericdmanagement/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeActiveModeDurationWithCompletion:](mtrbaseclustericdmanagement/readattributeactivemodeduration%28completion_%29.md)
- [readAttributeActiveModeThresholdWithCompletion:](mtrbaseclustericdmanagement/readattributeactivemodethreshold%28completion_%29.md)
- [readAttributeAttributeListWithCompletion:](mtrbaseclustericdmanagement/readattributeattributelist%28completion_%29.md)
- [readAttributeClientsSupportedPerFabricWithCompletion:](mtrbaseclustericdmanagement/readattributeclientssupportedperfabric%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclustericdmanagement/readattributeclusterrevision%28completion_%29.md)
- [readAttributeFeatureMapWithCompletion:](mtrbaseclustericdmanagement/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclustericdmanagement/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeICDCounterWithCompletion:](mtrbaseclustericdmanagement/readattributeicdcounter%28completion_%29.md)
- [readAttributeIdleModeDurationWithCompletion:](mtrbaseclustericdmanagement/readattributeidlemodeduration%28completion_%29.md)
- [readAttributeMaximumCheckInBackOffWithCompletion:](mtrbaseclustericdmanagement/readattributemaximumcheckinbackoff%28completion_%29.md)
- [readAttributeOperatingModeWithCompletion:](mtrbaseclustericdmanagement/readattributeoperatingmode%28completion_%29.md)
- [readAttributeRegisteredClientsWithParams:completion:](mtrbaseclustericdmanagement/readattributeregisteredclients%28with_completion_%29.md)
- [readAttributeUserActiveModeTriggerHintWithCompletion:](mtrbaseclustericdmanagement/readattributeuseractivemodetriggerhint%28completion_%29.md)
- [readAttributeUserActiveModeTriggerInstructionWithCompletion:](mtrbaseclustericdmanagement/readattributeuseractivemodetriggerinstruction%28completion_%29.md)
- [registerClientWithParams:completion:](mtrbaseclustericdmanagement/registerclient%28with_completion_%29.md): Command RegisterClient
- [stayActiveRequestWithParams:completion:](mtrbaseclustericdmanagement/stayactiverequest%28with_completion_%29.md): Command StayActiveRequest
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustericdmanagement/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeActiveModeDurationWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustericdmanagement/subscribeattributeactivemodeduration%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeActiveModeThresholdWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustericdmanagement/subscribeattributeactivemodethreshold%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustericdmanagement/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClientsSupportedPerFabricWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustericdmanagement/subscribeattributeclientssupportedperfabric%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustericdmanagement/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustericdmanagement/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustericdmanagement/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeICDCounterWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustericdmanagement/subscribeattributeicdcounter%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeIdleModeDurationWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustericdmanagement/subscribeattributeidlemodeduration%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeMaximumCheckInBackOffWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustericdmanagement/subscribeattributemaximumcheckinbackoff%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeOperatingModeWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustericdmanagement/subscribeattributeoperatingmode%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeRegisteredClientsWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustericdmanagement/subscribeattributeregisteredclients%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeUserActiveModeTriggerHintWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustericdmanagement/subscribeattributeuseractivemodetriggerhint%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeUserActiveModeTriggerInstructionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustericdmanagement/subscribeattributeuseractivemodetriggerinstruction%28with_subscriptionestablished_reporthandler_%29.md)
- [unregisterClientWithParams:completion:](mtrbaseclustericdmanagement/unregisterclient%28with_completion_%29.md): Command UnregisterClient

### Type Methods

- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustericdmanagement/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeActiveModeDurationWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustericdmanagement/readattributeactivemodeduration%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeActiveModeThresholdWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustericdmanagement/readattributeactivemodethreshold%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustericdmanagement/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClientsSupportedPerFabricWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustericdmanagement/readattributeclientssupportedperfabric%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustericdmanagement/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustericdmanagement/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustericdmanagement/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeICDCounterWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustericdmanagement/readattributeicdcounter%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeIdleModeDurationWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustericdmanagement/readattributeidlemodeduration%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeMaximumCheckInBackOffWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustericdmanagement/readattributemaximumcheckinbackoff%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeOperatingModeWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustericdmanagement/readattributeoperatingmode%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeRegisteredClientsWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustericdmanagement/readattributeregisteredclients%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeUserActiveModeTriggerHintWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustericdmanagement/readattributeuseractivemodetriggerhint%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeUserActiveModeTriggerInstructionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustericdmanagement/readattributeuseractivemodetriggerinstruction%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)
