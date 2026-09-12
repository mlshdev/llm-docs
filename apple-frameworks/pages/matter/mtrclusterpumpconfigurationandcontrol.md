> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterpumpconfigurationandcontrol](https://developer.apple.com/documentation/matter/mtrclusterpumpconfigurationandcontrol)

# MTRClusterPumpConfigurationAndControl (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterPumpConfigurationAndControl
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclusterpumpconfigurationandcontrol/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclusterpumpconfigurationandcontrol/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclusterpumpconfigurationandcontrol/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterpumpconfigurationandcontrol/readattributeattributelist%28with_%29.md)
- [readAttributeCapacity(with:)](mtrclusterpumpconfigurationandcontrol/readattributecapacity%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterpumpconfigurationandcontrol/readattributeclusterrevision%28with_%29.md)
- [readAttributeControlMode(with:)](mtrclusterpumpconfigurationandcontrol/readattributecontrolmode%28with_%29.md)
- [readAttributeEffectiveControlMode(with:)](mtrclusterpumpconfigurationandcontrol/readattributeeffectivecontrolmode%28with_%29.md)
- [readAttributeEffectiveOperationMode(with:)](mtrclusterpumpconfigurationandcontrol/readattributeeffectiveoperationmode%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterpumpconfigurationandcontrol/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterpumpconfigurationandcontrol/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeLifetimeEnergyConsumed(with:)](mtrclusterpumpconfigurationandcontrol/readattributelifetimeenergyconsumed%28with_%29.md)
- [readAttributeLifetimeRunningHours(with:)](mtrclusterpumpconfigurationandcontrol/readattributelifetimerunninghours%28with_%29.md)
- [readAttributeMaxCompPressure(with:)](mtrclusterpumpconfigurationandcontrol/readattributemaxcomppressure%28with_%29.md)
- [readAttributeMaxConstFlow(with:)](mtrclusterpumpconfigurationandcontrol/readattributemaxconstflow%28with_%29.md)
- [readAttributeMaxConstPressure(with:)](mtrclusterpumpconfigurationandcontrol/readattributemaxconstpressure%28with_%29.md)
- [readAttributeMaxConstSpeed(with:)](mtrclusterpumpconfigurationandcontrol/readattributemaxconstspeed%28with_%29.md)
- [readAttributeMaxConstTemp(with:)](mtrclusterpumpconfigurationandcontrol/readattributemaxconsttemp%28with_%29.md)
- [readAttributeMaxFlow(with:)](mtrclusterpumpconfigurationandcontrol/readattributemaxflow%28with_%29.md)
- [readAttributeMaxPressure(with:)](mtrclusterpumpconfigurationandcontrol/readattributemaxpressure%28with_%29.md)
- [readAttributeMaxSpeed(with:)](mtrclusterpumpconfigurationandcontrol/readattributemaxspeed%28with_%29.md)
- [readAttributeMinCompPressure(with:)](mtrclusterpumpconfigurationandcontrol/readattributemincomppressure%28with_%29.md)
- [readAttributeMinConstFlow(with:)](mtrclusterpumpconfigurationandcontrol/readattributeminconstflow%28with_%29.md)
- [readAttributeMinConstPressure(with:)](mtrclusterpumpconfigurationandcontrol/readattributeminconstpressure%28with_%29.md)
- [readAttributeMinConstSpeed(with:)](mtrclusterpumpconfigurationandcontrol/readattributeminconstspeed%28with_%29.md)
- [readAttributeMinConstTemp(with:)](mtrclusterpumpconfigurationandcontrol/readattributeminconsttemp%28with_%29.md)
- [readAttributeOperationMode(with:)](mtrclusterpumpconfigurationandcontrol/readattributeoperationmode%28with_%29.md)
- [readAttributePower(with:)](mtrclusterpumpconfigurationandcontrol/readattributepower%28with_%29.md)
- [readAttributePumpStatus(with:)](mtrclusterpumpconfigurationandcontrol/readattributepumpstatus%28with_%29.md)
- [readAttributeSpeed(with:)](mtrclusterpumpconfigurationandcontrol/readattributespeed%28with_%29.md)
- [writeAttributeControlMode(withValue:expectedValueInterval:)](mtrclusterpumpconfigurationandcontrol/writeattributecontrolmode%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeControlMode(withValue:expectedValueInterval:params:)](mtrclusterpumpconfigurationandcontrol/writeattributecontrolmode%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeLifetimeEnergyConsumed(withValue:expectedValueInterval:)](mtrclusterpumpconfigurationandcontrol/writeattributelifetimeenergyconsumed%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeLifetimeEnergyConsumed(withValue:expectedValueInterval:params:)](mtrclusterpumpconfigurationandcontrol/writeattributelifetimeenergyconsumed%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeLifetimeRunningHours(withValue:expectedValueInterval:)](mtrclusterpumpconfigurationandcontrol/writeattributelifetimerunninghours%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeLifetimeRunningHours(withValue:expectedValueInterval:params:)](mtrclusterpumpconfigurationandcontrol/writeattributelifetimerunninghours%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeOperationMode(withValue:expectedValueInterval:)](mtrclusterpumpconfigurationandcontrol/writeattributeoperationmode%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeOperationMode(withValue:expectedValueInterval:params:)](mtrclusterpumpconfigurationandcontrol/writeattributeoperationmode%28withvalue_expectedvalueinterval_params_%29.md)

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

# MTRClusterPumpConfigurationAndControl (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterPumpConfigurationAndControl : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclusterpumpconfigurationandcontrol/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclusterpumpconfigurationandcontrol/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandListWithParams:](mtrclusterpumpconfigurationandcontrol/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterpumpconfigurationandcontrol/readattributeattributelist%28with_%29.md)
- [readAttributeCapacityWithParams:](mtrclusterpumpconfigurationandcontrol/readattributecapacity%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterpumpconfigurationandcontrol/readattributeclusterrevision%28with_%29.md)
- [readAttributeControlModeWithParams:](mtrclusterpumpconfigurationandcontrol/readattributecontrolmode%28with_%29.md)
- [readAttributeEffectiveControlModeWithParams:](mtrclusterpumpconfigurationandcontrol/readattributeeffectivecontrolmode%28with_%29.md)
- [readAttributeEffectiveOperationModeWithParams:](mtrclusterpumpconfigurationandcontrol/readattributeeffectiveoperationmode%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterpumpconfigurationandcontrol/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterpumpconfigurationandcontrol/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeLifetimeEnergyConsumedWithParams:](mtrclusterpumpconfigurationandcontrol/readattributelifetimeenergyconsumed%28with_%29.md)
- [readAttributeLifetimeRunningHoursWithParams:](mtrclusterpumpconfigurationandcontrol/readattributelifetimerunninghours%28with_%29.md)
- [readAttributeMaxCompPressureWithParams:](mtrclusterpumpconfigurationandcontrol/readattributemaxcomppressure%28with_%29.md)
- [readAttributeMaxConstFlowWithParams:](mtrclusterpumpconfigurationandcontrol/readattributemaxconstflow%28with_%29.md)
- [readAttributeMaxConstPressureWithParams:](mtrclusterpumpconfigurationandcontrol/readattributemaxconstpressure%28with_%29.md)
- [readAttributeMaxConstSpeedWithParams:](mtrclusterpumpconfigurationandcontrol/readattributemaxconstspeed%28with_%29.md)
- [readAttributeMaxConstTempWithParams:](mtrclusterpumpconfigurationandcontrol/readattributemaxconsttemp%28with_%29.md)
- [readAttributeMaxFlowWithParams:](mtrclusterpumpconfigurationandcontrol/readattributemaxflow%28with_%29.md)
- [readAttributeMaxPressureWithParams:](mtrclusterpumpconfigurationandcontrol/readattributemaxpressure%28with_%29.md)
- [readAttributeMaxSpeedWithParams:](mtrclusterpumpconfigurationandcontrol/readattributemaxspeed%28with_%29.md)
- [readAttributeMinCompPressureWithParams:](mtrclusterpumpconfigurationandcontrol/readattributemincomppressure%28with_%29.md)
- [readAttributeMinConstFlowWithParams:](mtrclusterpumpconfigurationandcontrol/readattributeminconstflow%28with_%29.md)
- [readAttributeMinConstPressureWithParams:](mtrclusterpumpconfigurationandcontrol/readattributeminconstpressure%28with_%29.md)
- [readAttributeMinConstSpeedWithParams:](mtrclusterpumpconfigurationandcontrol/readattributeminconstspeed%28with_%29.md)
- [readAttributeMinConstTempWithParams:](mtrclusterpumpconfigurationandcontrol/readattributeminconsttemp%28with_%29.md)
- [readAttributeOperationModeWithParams:](mtrclusterpumpconfigurationandcontrol/readattributeoperationmode%28with_%29.md)
- [readAttributePowerWithParams:](mtrclusterpumpconfigurationandcontrol/readattributepower%28with_%29.md)
- [readAttributePumpStatusWithParams:](mtrclusterpumpconfigurationandcontrol/readattributepumpstatus%28with_%29.md)
- [readAttributeSpeedWithParams:](mtrclusterpumpconfigurationandcontrol/readattributespeed%28with_%29.md)
- [writeAttributeControlModeWithValue:expectedValueInterval:](mtrclusterpumpconfigurationandcontrol/writeattributecontrolmode%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeControlModeWithValue:expectedValueInterval:params:](mtrclusterpumpconfigurationandcontrol/writeattributecontrolmode%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeLifetimeEnergyConsumedWithValue:expectedValueInterval:](mtrclusterpumpconfigurationandcontrol/writeattributelifetimeenergyconsumed%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeLifetimeEnergyConsumedWithValue:expectedValueInterval:params:](mtrclusterpumpconfigurationandcontrol/writeattributelifetimeenergyconsumed%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeLifetimeRunningHoursWithValue:expectedValueInterval:](mtrclusterpumpconfigurationandcontrol/writeattributelifetimerunninghours%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeLifetimeRunningHoursWithValue:expectedValueInterval:params:](mtrclusterpumpconfigurationandcontrol/writeattributelifetimerunninghours%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeOperationModeWithValue:expectedValueInterval:](mtrclusterpumpconfigurationandcontrol/writeattributeoperationmode%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeOperationModeWithValue:expectedValueInterval:params:](mtrclusterpumpconfigurationandcontrol/writeattributeoperationmode%28withvalue_expectedvalueinterval_params_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
