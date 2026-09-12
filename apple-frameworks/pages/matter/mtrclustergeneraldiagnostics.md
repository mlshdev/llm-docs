> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclustergeneraldiagnostics](https://developer.apple.com/documentation/matter/mtrclustergeneraldiagnostics)

# MTRClusterGeneralDiagnostics (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterGeneralDiagnostics
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclustergeneraldiagnostics/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclustergeneraldiagnostics/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclustergeneraldiagnostics/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeActiveHardwareFaults(with:)](mtrclustergeneraldiagnostics/readattributeactivehardwarefaults%28with_%29.md)
- [readAttributeActiveNetworkFaults(with:)](mtrclustergeneraldiagnostics/readattributeactivenetworkfaults%28with_%29.md)
- [readAttributeActiveRadioFaults(with:)](mtrclustergeneraldiagnostics/readattributeactiveradiofaults%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclustergeneraldiagnostics/readattributeattributelist%28with_%29.md)
- [readAttributeBootReason(with:)](mtrclustergeneraldiagnostics/readattributebootreason%28with_%29.md)
- [readAttributeBootReasons(with:)](mtrclustergeneraldiagnostics/readattributebootreasons%28with_%29.md): Deprecated.
- [readAttributeClusterRevision(with:)](mtrclustergeneraldiagnostics/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclustergeneraldiagnostics/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclustergeneraldiagnostics/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeNetworkInterfaces(with:)](mtrclustergeneraldiagnostics/readattributenetworkinterfaces%28with_%29.md)
- [readAttributeRebootCount(with:)](mtrclustergeneraldiagnostics/readattributerebootcount%28with_%29.md)
- [readAttributeTestEventTriggersEnabled(with:)](mtrclustergeneraldiagnostics/readattributetesteventtriggersenabled%28with_%29.md)
- [readAttributeTotalOperationalHours(with:)](mtrclustergeneraldiagnostics/readattributetotaloperationalhours%28with_%29.md)
- [readAttributeUpTime(with:)](mtrclustergeneraldiagnostics/readattributeuptime%28with_%29.md)
- [testEventTrigger(with:expectedValues:expectedValueInterval:completion:)](mtrclustergeneraldiagnostics/testeventtrigger%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [testEventTrigger(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclustergeneraldiagnostics/testeventtrigger%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [payloadTestRequest(with:expectedValues:expectedValueInterval:completion:)](mtrclustergeneraldiagnostics/payloadtestrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [timeSnapshot(with:expectedValues:expectedValueInterval:completion:)](mtrclustergeneraldiagnostics/timesnapshot%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [timeSnapshot(withExpectedValues:expectedValueInterval:completion:)](mtrclustergeneraldiagnostics/timesnapshot%28withexpectedvalues_expectedvalueinterval_completion_%29.md)

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

# MTRClusterGeneralDiagnostics (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterGeneralDiagnostics : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclustergeneraldiagnostics/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclustergeneraldiagnostics/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandListWithParams:](mtrclustergeneraldiagnostics/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeActiveHardwareFaultsWithParams:](mtrclustergeneraldiagnostics/readattributeactivehardwarefaults%28with_%29.md)
- [readAttributeActiveNetworkFaultsWithParams:](mtrclustergeneraldiagnostics/readattributeactivenetworkfaults%28with_%29.md)
- [readAttributeActiveRadioFaultsWithParams:](mtrclustergeneraldiagnostics/readattributeactiveradiofaults%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclustergeneraldiagnostics/readattributeattributelist%28with_%29.md)
- [readAttributeBootReasonWithParams:](mtrclustergeneraldiagnostics/readattributebootreason%28with_%29.md)
- [readAttributeBootReasonsWithParams:](mtrclustergeneraldiagnostics/readattributebootreasons%28with_%29.md): Deprecated.
- [readAttributeClusterRevisionWithParams:](mtrclustergeneraldiagnostics/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclustergeneraldiagnostics/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclustergeneraldiagnostics/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeNetworkInterfacesWithParams:](mtrclustergeneraldiagnostics/readattributenetworkinterfaces%28with_%29.md)
- [readAttributeRebootCountWithParams:](mtrclustergeneraldiagnostics/readattributerebootcount%28with_%29.md)
- [readAttributeTestEventTriggersEnabledWithParams:](mtrclustergeneraldiagnostics/readattributetesteventtriggersenabled%28with_%29.md)
- [readAttributeTotalOperationalHoursWithParams:](mtrclustergeneraldiagnostics/readattributetotaloperationalhours%28with_%29.md)
- [readAttributeUpTimeWithParams:](mtrclustergeneraldiagnostics/readattributeuptime%28with_%29.md)
- [testEventTriggerWithParams:expectedValues:expectedValueInterval:completion:](mtrclustergeneraldiagnostics/testeventtrigger%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [testEventTriggerWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclustergeneraldiagnostics/testeventtrigger%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [payloadTestRequestWithParams:expectedValues:expectedValueInterval:completion:](mtrclustergeneraldiagnostics/payloadtestrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [timeSnapshotWithParams:expectedValues:expectedValueInterval:completion:](mtrclustergeneraldiagnostics/timesnapshot%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [timeSnapshotWithExpectedValues:expectedValueInterval:completion:](mtrclustergeneraldiagnostics/timesnapshot%28withexpectedvalues_expectedvalueinterval_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
