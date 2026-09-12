> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclustersmokecoalarm](https://developer.apple.com/documentation/matter/mtrclustersmokecoalarm)

# MTRClusterSmokeCOAlarm (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
class MTRClusterSmokeCOAlarm
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclustersmokecoalarm/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclustersmokecoalarm/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclustersmokecoalarm/readattributeattributelist%28with_%29.md)
- [readAttributeBatteryAlert(with:)](mtrclustersmokecoalarm/readattributebatteryalert%28with_%29.md)
- [readAttributeCOState(with:)](mtrclustersmokecoalarm/readattributecostate%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclustersmokecoalarm/readattributeclusterrevision%28with_%29.md)
- [readAttributeContaminationState(with:)](mtrclustersmokecoalarm/readattributecontaminationstate%28with_%29.md)
- [readAttributeDeviceMuted(with:)](mtrclustersmokecoalarm/readattributedevicemuted%28with_%29.md)
- [readAttributeEndOfServiceAlert(with:)](mtrclustersmokecoalarm/readattributeendofservicealert%28with_%29.md)
- [readAttributeExpiryDate(with:)](mtrclustersmokecoalarm/readattributeexpirydate%28with_%29.md)
- [readAttributeExpressedState(with:)](mtrclustersmokecoalarm/readattributeexpressedstate%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclustersmokecoalarm/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclustersmokecoalarm/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeHardwareFaultAlert(with:)](mtrclustersmokecoalarm/readattributehardwarefaultalert%28with_%29.md)
- [readAttributeInterconnectCOAlarm(with:)](mtrclustersmokecoalarm/readattributeinterconnectcoalarm%28with_%29.md)
- [readAttributeInterconnectSmoke(with:)](mtrclustersmokecoalarm/readattributeinterconnectsmoke%28with_%29.md)
- [readAttributeSmokeSensitivityLevel(with:)](mtrclustersmokecoalarm/readattributesmokesensitivitylevel%28with_%29.md)
- [readAttributeSmokeState(with:)](mtrclustersmokecoalarm/readattributesmokestate%28with_%29.md)
- [readAttributeTestInProgress(with:)](mtrclustersmokecoalarm/readattributetestinprogress%28with_%29.md)
- [selfTestRequest(with:expectedValues:expectedValueInterval:completion:)](mtrclustersmokecoalarm/selftestrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [selfTestRequest(withExpectedValues:expectedValueInterval:completion:)](mtrclustersmokecoalarm/selftestrequest%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [writeAttributeSmokeSensitivityLevel(withValue:expectedValueInterval:)](mtrclustersmokecoalarm/writeattributesmokesensitivitylevel%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeSmokeSensitivityLevel(withValue:expectedValueInterval:params:)](mtrclustersmokecoalarm/writeattributesmokesensitivitylevel%28withvalue_expectedvalueinterval_params_%29.md)

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

# MTRClusterSmokeCOAlarm (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
@interface MTRClusterSmokeCOAlarm : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpointID:queue:](mtrclustersmokecoalarm/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandListWithParams:](mtrclustersmokecoalarm/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclustersmokecoalarm/readattributeattributelist%28with_%29.md)
- [readAttributeBatteryAlertWithParams:](mtrclustersmokecoalarm/readattributebatteryalert%28with_%29.md)
- [readAttributeCOStateWithParams:](mtrclustersmokecoalarm/readattributecostate%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclustersmokecoalarm/readattributeclusterrevision%28with_%29.md)
- [readAttributeContaminationStateWithParams:](mtrclustersmokecoalarm/readattributecontaminationstate%28with_%29.md)
- [readAttributeDeviceMutedWithParams:](mtrclustersmokecoalarm/readattributedevicemuted%28with_%29.md)
- [readAttributeEndOfServiceAlertWithParams:](mtrclustersmokecoalarm/readattributeendofservicealert%28with_%29.md)
- [readAttributeExpiryDateWithParams:](mtrclustersmokecoalarm/readattributeexpirydate%28with_%29.md)
- [readAttributeExpressedStateWithParams:](mtrclustersmokecoalarm/readattributeexpressedstate%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclustersmokecoalarm/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclustersmokecoalarm/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeHardwareFaultAlertWithParams:](mtrclustersmokecoalarm/readattributehardwarefaultalert%28with_%29.md)
- [readAttributeInterconnectCOAlarmWithParams:](mtrclustersmokecoalarm/readattributeinterconnectcoalarm%28with_%29.md)
- [readAttributeInterconnectSmokeAlarmWithParams:](mtrclustersmokecoalarm/readattributeinterconnectsmoke%28with_%29.md)
- [readAttributeSmokeSensitivityLevelWithParams:](mtrclustersmokecoalarm/readattributesmokesensitivitylevel%28with_%29.md)
- [readAttributeSmokeStateWithParams:](mtrclustersmokecoalarm/readattributesmokestate%28with_%29.md)
- [readAttributeTestInProgressWithParams:](mtrclustersmokecoalarm/readattributetestinprogress%28with_%29.md)
- [selfTestRequestWithParams:expectedValues:expectedValueInterval:completion:](mtrclustersmokecoalarm/selftestrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [selfTestRequestWithExpectedValues:expectedValueInterval:completion:](mtrclustersmokecoalarm/selftestrequest%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [writeAttributeSmokeSensitivityLevelWithValue:expectedValueInterval:](mtrclustersmokecoalarm/writeattributesmokesensitivitylevel%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeSmokeSensitivityLevelWithValue:expectedValueInterval:params:](mtrclustersmokecoalarm/writeattributesmokesensitivitylevel%28withvalue_expectedvalueinterval_params_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
