> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterfancontrol](https://developer.apple.com/documentation/matter/mtrclusterfancontrol)

# MTRClusterFanControl (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterFanControl
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclusterfancontrol/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclusterfancontrol/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclusterfancontrol/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAirflowDirection(with:)](mtrclusterfancontrol/readattributeairflowdirection%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterfancontrol/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterfancontrol/readattributeclusterrevision%28with_%29.md)
- [readAttributeFanMode(with:)](mtrclusterfancontrol/readattributefanmode%28with_%29.md)
- [readAttributeFanModeSequence(with:)](mtrclusterfancontrol/readattributefanmodesequence%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterfancontrol/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterfancontrol/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributePercentCurrent(with:)](mtrclusterfancontrol/readattributepercentcurrent%28with_%29.md)
- [readAttributePercentSetting(with:)](mtrclusterfancontrol/readattributepercentsetting%28with_%29.md)
- [readAttributeRockSetting(with:)](mtrclusterfancontrol/readattributerocksetting%28with_%29.md)
- [readAttributeRockSupport(with:)](mtrclusterfancontrol/readattributerocksupport%28with_%29.md)
- [readAttributeSpeedCurrent(with:)](mtrclusterfancontrol/readattributespeedcurrent%28with_%29.md)
- [readAttributeSpeedMax(with:)](mtrclusterfancontrol/readattributespeedmax%28with_%29.md)
- [readAttributeSpeedSetting(with:)](mtrclusterfancontrol/readattributespeedsetting%28with_%29.md)
- [readAttributeWindSetting(with:)](mtrclusterfancontrol/readattributewindsetting%28with_%29.md)
- [readAttributeWindSupport(with:)](mtrclusterfancontrol/readattributewindsupport%28with_%29.md)
- [step(with:expectedValues:expectedValueInterval:completion:)](mtrclusterfancontrol/step%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [writeAttributeAirflowDirection(withValue:expectedValueInterval:)](mtrclusterfancontrol/writeattributeairflowdirection%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeAirflowDirection(withValue:expectedValueInterval:params:)](mtrclusterfancontrol/writeattributeairflowdirection%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeFanMode(withValue:expectedValueInterval:)](mtrclusterfancontrol/writeattributefanmode%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeFanMode(withValue:expectedValueInterval:params:)](mtrclusterfancontrol/writeattributefanmode%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeFanModeSequence(withValue:expectedValueInterval:)](mtrclusterfancontrol/writeattributefanmodesequence%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeFanModeSequence(withValue:expectedValueInterval:params:)](mtrclusterfancontrol/writeattributefanmodesequence%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributePercentSetting(withValue:expectedValueInterval:)](mtrclusterfancontrol/writeattributepercentsetting%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributePercentSetting(withValue:expectedValueInterval:params:)](mtrclusterfancontrol/writeattributepercentsetting%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeRockSetting(withValue:expectedValueInterval:)](mtrclusterfancontrol/writeattributerocksetting%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeRockSetting(withValue:expectedValueInterval:params:)](mtrclusterfancontrol/writeattributerocksetting%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeSpeedSetting(withValue:expectedValueInterval:)](mtrclusterfancontrol/writeattributespeedsetting%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeSpeedSetting(withValue:expectedValueInterval:params:)](mtrclusterfancontrol/writeattributespeedsetting%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeWindSetting(withValue:expectedValueInterval:)](mtrclusterfancontrol/writeattributewindsetting%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeWindSetting(withValue:expectedValueInterval:params:)](mtrclusterfancontrol/writeattributewindsetting%28withvalue_expectedvalueinterval_params_%29.md)

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

# MTRClusterFanControl (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterFanControl : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclusterfancontrol/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclusterfancontrol/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandListWithParams:](mtrclusterfancontrol/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAirflowDirectionWithParams:](mtrclusterfancontrol/readattributeairflowdirection%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterfancontrol/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterfancontrol/readattributeclusterrevision%28with_%29.md)
- [readAttributeFanModeWithParams:](mtrclusterfancontrol/readattributefanmode%28with_%29.md)
- [readAttributeFanModeSequenceWithParams:](mtrclusterfancontrol/readattributefanmodesequence%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterfancontrol/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterfancontrol/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributePercentCurrentWithParams:](mtrclusterfancontrol/readattributepercentcurrent%28with_%29.md)
- [readAttributePercentSettingWithParams:](mtrclusterfancontrol/readattributepercentsetting%28with_%29.md)
- [readAttributeRockSettingWithParams:](mtrclusterfancontrol/readattributerocksetting%28with_%29.md)
- [readAttributeRockSupportWithParams:](mtrclusterfancontrol/readattributerocksupport%28with_%29.md)
- [readAttributeSpeedCurrentWithParams:](mtrclusterfancontrol/readattributespeedcurrent%28with_%29.md)
- [readAttributeSpeedMaxWithParams:](mtrclusterfancontrol/readattributespeedmax%28with_%29.md)
- [readAttributeSpeedSettingWithParams:](mtrclusterfancontrol/readattributespeedsetting%28with_%29.md)
- [readAttributeWindSettingWithParams:](mtrclusterfancontrol/readattributewindsetting%28with_%29.md)
- [readAttributeWindSupportWithParams:](mtrclusterfancontrol/readattributewindsupport%28with_%29.md)
- [stepWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterfancontrol/step%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [writeAttributeAirflowDirectionWithValue:expectedValueInterval:](mtrclusterfancontrol/writeattributeairflowdirection%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeAirflowDirectionWithValue:expectedValueInterval:params:](mtrclusterfancontrol/writeattributeairflowdirection%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeFanModeWithValue:expectedValueInterval:](mtrclusterfancontrol/writeattributefanmode%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeFanModeWithValue:expectedValueInterval:params:](mtrclusterfancontrol/writeattributefanmode%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeFanModeSequenceWithValue:expectedValueInterval:](mtrclusterfancontrol/writeattributefanmodesequence%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeFanModeSequenceWithValue:expectedValueInterval:params:](mtrclusterfancontrol/writeattributefanmodesequence%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributePercentSettingWithValue:expectedValueInterval:](mtrclusterfancontrol/writeattributepercentsetting%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributePercentSettingWithValue:expectedValueInterval:params:](mtrclusterfancontrol/writeattributepercentsetting%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeRockSettingWithValue:expectedValueInterval:](mtrclusterfancontrol/writeattributerocksetting%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeRockSettingWithValue:expectedValueInterval:params:](mtrclusterfancontrol/writeattributerocksetting%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeSpeedSettingWithValue:expectedValueInterval:](mtrclusterfancontrol/writeattributespeedsetting%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeSpeedSettingWithValue:expectedValueInterval:params:](mtrclusterfancontrol/writeattributespeedsetting%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeWindSettingWithValue:expectedValueInterval:](mtrclusterfancontrol/writeattributewindsetting%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeWindSettingWithValue:expectedValueInterval:params:](mtrclusterfancontrol/writeattributewindsetting%28withvalue_expectedvalueinterval_params_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
