> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterthermostatuserinterfaceconfiguration](https://developer.apple.com/documentation/matter/mtrclusterthermostatuserinterfaceconfiguration)

# MTRClusterThermostatUserInterfaceConfiguration (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterThermostatUserInterfaceConfiguration
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclusterthermostatuserinterfaceconfiguration/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclusterthermostatuserinterfaceconfiguration/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclusterthermostatuserinterfaceconfiguration/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterthermostatuserinterfaceconfiguration/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterthermostatuserinterfaceconfiguration/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterthermostatuserinterfaceconfiguration/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterthermostatuserinterfaceconfiguration/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeKeypadLockout(with:)](mtrclusterthermostatuserinterfaceconfiguration/readattributekeypadlockout%28with_%29.md)
- [readAttributeScheduleProgrammingVisibility(with:)](mtrclusterthermostatuserinterfaceconfiguration/readattributescheduleprogrammingvisibility%28with_%29.md)
- [readAttributeTemperatureDisplayMode(with:)](mtrclusterthermostatuserinterfaceconfiguration/readattributetemperaturedisplaymode%28with_%29.md)
- [writeAttributeKeypadLockout(withValue:expectedValueInterval:)](mtrclusterthermostatuserinterfaceconfiguration/writeattributekeypadlockout%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeKeypadLockout(withValue:expectedValueInterval:params:)](mtrclusterthermostatuserinterfaceconfiguration/writeattributekeypadlockout%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeScheduleProgrammingVisibility(withValue:expectedValueInterval:)](mtrclusterthermostatuserinterfaceconfiguration/writeattributescheduleprogrammingvisibility%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeScheduleProgrammingVisibility(withValue:expectedValueInterval:params:)](mtrclusterthermostatuserinterfaceconfiguration/writeattributescheduleprogrammingvisibility%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeTemperatureDisplayMode(withValue:expectedValueInterval:)](mtrclusterthermostatuserinterfaceconfiguration/writeattributetemperaturedisplaymode%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeTemperatureDisplayMode(withValue:expectedValueInterval:params:)](mtrclusterthermostatuserinterfaceconfiguration/writeattributetemperaturedisplaymode%28withvalue_expectedvalueinterval_params_%29.md)

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

# MTRClusterThermostatUserInterfaceConfiguration (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterThermostatUserInterfaceConfiguration : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclusterthermostatuserinterfaceconfiguration/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclusterthermostatuserinterfaceconfiguration/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandListWithParams:](mtrclusterthermostatuserinterfaceconfiguration/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterthermostatuserinterfaceconfiguration/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterthermostatuserinterfaceconfiguration/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterthermostatuserinterfaceconfiguration/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterthermostatuserinterfaceconfiguration/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeKeypadLockoutWithParams:](mtrclusterthermostatuserinterfaceconfiguration/readattributekeypadlockout%28with_%29.md)
- [readAttributeScheduleProgrammingVisibilityWithParams:](mtrclusterthermostatuserinterfaceconfiguration/readattributescheduleprogrammingvisibility%28with_%29.md)
- [readAttributeTemperatureDisplayModeWithParams:](mtrclusterthermostatuserinterfaceconfiguration/readattributetemperaturedisplaymode%28with_%29.md)
- [writeAttributeKeypadLockoutWithValue:expectedValueInterval:](mtrclusterthermostatuserinterfaceconfiguration/writeattributekeypadlockout%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeKeypadLockoutWithValue:expectedValueInterval:params:](mtrclusterthermostatuserinterfaceconfiguration/writeattributekeypadlockout%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeScheduleProgrammingVisibilityWithValue:expectedValueInterval:](mtrclusterthermostatuserinterfaceconfiguration/writeattributescheduleprogrammingvisibility%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeScheduleProgrammingVisibilityWithValue:expectedValueInterval:params:](mtrclusterthermostatuserinterfaceconfiguration/writeattributescheduleprogrammingvisibility%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeTemperatureDisplayModeWithValue:expectedValueInterval:](mtrclusterthermostatuserinterfaceconfiguration/writeattributetemperaturedisplaymode%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeTemperatureDisplayModeWithValue:expectedValueInterval:params:](mtrclusterthermostatuserinterfaceconfiguration/writeattributetemperaturedisplaymode%28withvalue_expectedvalueinterval_params_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
