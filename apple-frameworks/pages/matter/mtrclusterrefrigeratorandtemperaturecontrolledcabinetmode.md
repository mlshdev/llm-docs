> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterrefrigeratorandtemperaturecontrolledcabinetmode](https://developer.apple.com/documentation/matter/mtrclusterrefrigeratorandtemperaturecontrolledcabinetmode)

# MTRClusterRefrigeratorAndTemperatureControlledCabinetMode (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Refrigerator And Temperature Controlled Cabinet Mode Attributes and commands for selecting a mode from a list of supported options.

## Declaration

```swift
class MTRClusterRefrigeratorAndTemperatureControlledCabinetMode
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclusterrefrigeratorandtemperaturecontrolledcabinetmode/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.

### Instance Methods

- [changeToMode(with:expectedValues:expectedValueInterval:completion:)](mtrclusterrefrigeratorandtemperaturecontrolledcabinetmode/changetomode%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandList(with:)](mtrclusterrefrigeratorandtemperaturecontrolledcabinetmode/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterrefrigeratorandtemperaturecontrolledcabinetmode/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterrefrigeratorandtemperaturecontrolledcabinetmode/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentMode(with:)](mtrclusterrefrigeratorandtemperaturecontrolledcabinetmode/readattributecurrentmode%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterrefrigeratorandtemperaturecontrolledcabinetmode/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterrefrigeratorandtemperaturecontrolledcabinetmode/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeSupportedModes(with:)](mtrclusterrefrigeratorandtemperaturecontrolledcabinetmode/readattributesupportedmodes%28with_%29.md)

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

# MTRClusterRefrigeratorAndTemperatureControlledCabinetMode (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Refrigerator And Temperature Controlled Cabinet Mode Attributes and commands for selecting a mode from a list of supported options.

## Declaration

```objectivec
@interface MTRClusterRefrigeratorAndTemperatureControlledCabinetMode : MTRGenericCluster
```

## Topics

### Instance Methods

- [changeToModeWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterrefrigeratorandtemperaturecontrolledcabinetmode/changetomode%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [initWithDevice:endpointID:queue:](mtrclusterrefrigeratorandtemperaturecontrolledcabinetmode/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithParams:](mtrclusterrefrigeratorandtemperaturecontrolledcabinetmode/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterrefrigeratorandtemperaturecontrolledcabinetmode/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterrefrigeratorandtemperaturecontrolledcabinetmode/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentModeWithParams:](mtrclusterrefrigeratorandtemperaturecontrolledcabinetmode/readattributecurrentmode%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterrefrigeratorandtemperaturecontrolledcabinetmode/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterrefrigeratorandtemperaturecontrolledcabinetmode/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeSupportedModesWithParams:](mtrclusterrefrigeratorandtemperaturecontrolledcabinetmode/readattributesupportedmodes%28with_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
