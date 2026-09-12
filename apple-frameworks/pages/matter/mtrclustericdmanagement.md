> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclustericdmanagement](https://developer.apple.com/documentation/matter/mtrclustericdmanagement)

# MTRClusterICDManagement (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster ICD Management Allows servers to ensure that listed clients are notified when a server is available for communication.

## Declaration

```swift
class MTRClusterICDManagement
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclustericdmanagement/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclustericdmanagement/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeActiveModeDuration(with:)](mtrclustericdmanagement/readattributeactivemodeduration%28with_%29.md)
- [readAttributeActiveModeThreshold(with:)](mtrclustericdmanagement/readattributeactivemodethreshold%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclustericdmanagement/readattributeattributelist%28with_%29.md)
- [readAttributeClientsSupportedPerFabric(with:)](mtrclustericdmanagement/readattributeclientssupportedperfabric%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclustericdmanagement/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclustericdmanagement/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclustericdmanagement/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeICDCounter(with:)](mtrclustericdmanagement/readattributeicdcounter%28with_%29.md)
- [readAttributeIdleModeDuration(with:)](mtrclustericdmanagement/readattributeidlemodeduration%28with_%29.md)
- [readAttributeMaximumCheckInBackOff(with:)](mtrclustericdmanagement/readattributemaximumcheckinbackoff%28with_%29.md)
- [readAttributeOperatingMode(with:)](mtrclustericdmanagement/readattributeoperatingmode%28with_%29.md)
- [readAttributeRegisteredClients(with:)](mtrclustericdmanagement/readattributeregisteredclients%28with_%29.md)
- [readAttributeUserActiveModeTriggerHint(with:)](mtrclustericdmanagement/readattributeuseractivemodetriggerhint%28with_%29.md)
- [readAttributeUserActiveModeTriggerInstruction(with:)](mtrclustericdmanagement/readattributeuseractivemodetriggerinstruction%28with_%29.md)
- [registerClient(with:expectedValues:expectedValueInterval:completion:)](mtrclustericdmanagement/registerclient%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [stayActiveRequest(with:expectedValues:expectedValueInterval:completion:)](mtrclustericdmanagement/stayactiverequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [unregisterClient(with:expectedValues:expectedValueInterval:completion:)](mtrclustericdmanagement/unregisterclient%28with_expectedvalues_expectedvalueinterval_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTRClusterICDManagement (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster ICD Management Allows servers to ensure that listed clients are notified when a server is available for communication.

## Declaration

```objectivec
@interface MTRClusterICDManagement : MTRGenericCluster
```

## Topics

### Instance Methods

- [initWithDevice:endpointID:queue:](mtrclustericdmanagement/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithParams:](mtrclustericdmanagement/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeActiveModeDurationWithParams:](mtrclustericdmanagement/readattributeactivemodeduration%28with_%29.md)
- [readAttributeActiveModeThresholdWithParams:](mtrclustericdmanagement/readattributeactivemodethreshold%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclustericdmanagement/readattributeattributelist%28with_%29.md)
- [readAttributeClientsSupportedPerFabricWithParams:](mtrclustericdmanagement/readattributeclientssupportedperfabric%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclustericdmanagement/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclustericdmanagement/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclustericdmanagement/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeICDCounterWithParams:](mtrclustericdmanagement/readattributeicdcounter%28with_%29.md)
- [readAttributeIdleModeDurationWithParams:](mtrclustericdmanagement/readattributeidlemodeduration%28with_%29.md)
- [readAttributeMaximumCheckInBackOffWithParams:](mtrclustericdmanagement/readattributemaximumcheckinbackoff%28with_%29.md)
- [readAttributeOperatingModeWithParams:](mtrclustericdmanagement/readattributeoperatingmode%28with_%29.md)
- [readAttributeRegisteredClientsWithParams:](mtrclustericdmanagement/readattributeregisteredclients%28with_%29.md)
- [readAttributeUserActiveModeTriggerHintWithParams:](mtrclustericdmanagement/readattributeuseractivemodetriggerhint%28with_%29.md)
- [readAttributeUserActiveModeTriggerInstructionWithParams:](mtrclustericdmanagement/readattributeuseractivemodetriggerinstruction%28with_%29.md)
- [registerClientWithParams:expectedValues:expectedValueInterval:completion:](mtrclustericdmanagement/registerclient%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [stayActiveRequestWithParams:expectedValues:expectedValueInterval:completion:](mtrclustericdmanagement/stayactiverequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [unregisterClientWithParams:expectedValues:expectedValueInterval:completion:](mtrclustericdmanagement/unregisterclient%28with_expectedvalues_expectedvalueinterval_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
