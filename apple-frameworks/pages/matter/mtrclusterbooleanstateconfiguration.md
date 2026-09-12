> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterbooleanstateconfiguration](https://developer.apple.com/documentation/matter/mtrclusterbooleanstateconfiguration)

# MTRClusterBooleanStateConfiguration (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
class MTRClusterBooleanStateConfiguration
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclusterbooleanstateconfiguration/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [enableDisableAlarm(with:expectedValues:expectedValueInterval:completion:)](mtrclusterbooleanstateconfiguration/enabledisablealarm%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandList(with:)](mtrclusterbooleanstateconfiguration/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAlarmsActive(with:)](mtrclusterbooleanstateconfiguration/readattributealarmsactive%28with_%29.md)
- [readAttributeAlarmsEnabled(with:)](mtrclusterbooleanstateconfiguration/readattributealarmsenabled%28with_%29.md)
- [readAttributeAlarmsSupported(with:)](mtrclusterbooleanstateconfiguration/readattributealarmssupported%28with_%29.md)
- [readAttributeAlarmsSuppressed(with:)](mtrclusterbooleanstateconfiguration/readattributealarmssuppressed%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterbooleanstateconfiguration/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterbooleanstateconfiguration/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentSensitivityLevel(with:)](mtrclusterbooleanstateconfiguration/readattributecurrentsensitivitylevel%28with_%29.md)
- [readAttributeDefaultSensitivityLevel(with:)](mtrclusterbooleanstateconfiguration/readattributedefaultsensitivitylevel%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterbooleanstateconfiguration/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterbooleanstateconfiguration/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeSensorFault(with:)](mtrclusterbooleanstateconfiguration/readattributesensorfault%28with_%29.md)
- [readAttributeSupportedSensitivityLevels(with:)](mtrclusterbooleanstateconfiguration/readattributesupportedsensitivitylevels%28with_%29.md)
- [suppressAlarm(with:expectedValues:expectedValueInterval:completion:)](mtrclusterbooleanstateconfiguration/suppressalarm%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [writeAttributeCurrentSensitivityLevel(withValue:expectedValueInterval:)](mtrclusterbooleanstateconfiguration/writeattributecurrentsensitivitylevel%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeCurrentSensitivityLevel(withValue:expectedValueInterval:params:)](mtrclusterbooleanstateconfiguration/writeattributecurrentsensitivitylevel%28withvalue_expectedvalueinterval_params_%29.md)

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

# MTRClusterBooleanStateConfiguration (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
@interface MTRClusterBooleanStateConfiguration : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpointID:queue:](mtrclusterbooleanstateconfiguration/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [enableDisableAlarmWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterbooleanstateconfiguration/enabledisablealarm%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandListWithParams:](mtrclusterbooleanstateconfiguration/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAlarmsActiveWithParams:](mtrclusterbooleanstateconfiguration/readattributealarmsactive%28with_%29.md)
- [readAttributeAlarmsEnabledWithParams:](mtrclusterbooleanstateconfiguration/readattributealarmsenabled%28with_%29.md)
- [readAttributeAlarmsSupportedWithParams:](mtrclusterbooleanstateconfiguration/readattributealarmssupported%28with_%29.md)
- [readAttributeAlarmsSuppressedWithParams:](mtrclusterbooleanstateconfiguration/readattributealarmssuppressed%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterbooleanstateconfiguration/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterbooleanstateconfiguration/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentSensitivityLevelWithParams:](mtrclusterbooleanstateconfiguration/readattributecurrentsensitivitylevel%28with_%29.md)
- [readAttributeDefaultSensitivityLevelWithParams:](mtrclusterbooleanstateconfiguration/readattributedefaultsensitivitylevel%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterbooleanstateconfiguration/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterbooleanstateconfiguration/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeSensorFaultWithParams:](mtrclusterbooleanstateconfiguration/readattributesensorfault%28with_%29.md)
- [readAttributeSupportedSensitivityLevelsWithParams:](mtrclusterbooleanstateconfiguration/readattributesupportedsensitivitylevels%28with_%29.md)
- [suppressAlarmWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterbooleanstateconfiguration/suppressalarm%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [writeAttributeCurrentSensitivityLevelWithValue:expectedValueInterval:](mtrclusterbooleanstateconfiguration/writeattributecurrentsensitivitylevel%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeCurrentSensitivityLevelWithValue:expectedValueInterval:params:](mtrclusterbooleanstateconfiguration/writeattributecurrentsensitivitylevel%28withvalue_expectedvalueinterval_params_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
