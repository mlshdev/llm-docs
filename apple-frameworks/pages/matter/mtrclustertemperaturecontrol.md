> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclustertemperaturecontrol](https://developer.apple.com/documentation/matter/mtrclustertemperaturecontrol)

# MTRClusterTemperatureControl (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Temperature Control Attributes and commands for configuring the temperature control, and reporting temperature.

## Declaration

```swift
class MTRClusterTemperatureControl
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclustertemperaturecontrol/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclustertemperaturecontrol/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclustertemperaturecontrol/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclustertemperaturecontrol/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclustertemperaturecontrol/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclustertemperaturecontrol/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeMaxTemperature(with:)](mtrclustertemperaturecontrol/readattributemaxtemperature%28with_%29.md)
- [readAttributeMinTemperature(with:)](mtrclustertemperaturecontrol/readattributemintemperature%28with_%29.md)
- [readAttributeSelectedTemperatureLevel(with:)](mtrclustertemperaturecontrol/readattributeselectedtemperaturelevel%28with_%29.md)
- [readAttributeStep(with:)](mtrclustertemperaturecontrol/readattributestep%28with_%29.md)
- [readAttributeSupportedTemperatureLevels(with:)](mtrclustertemperaturecontrol/readattributesupportedtemperaturelevels%28with_%29.md)
- [readAttributeTemperatureSetpoint(with:)](mtrclustertemperaturecontrol/readattributetemperaturesetpoint%28with_%29.md)
- [setTemperatureWith(\_:expectedValues:expectedValueInterval:completion:)](mtrclustertemperaturecontrol/settemperaturewith%28__expectedvalues_expectedvalueinterval_completion_%29.md)
- [setTemperatureWithExpectedValues(\_:expectedValueInterval:completion:)](mtrclustertemperaturecontrol/settemperaturewithexpectedvalues%28__expectedvalueinterval_completion_%29.md)

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

# MTRClusterTemperatureControl (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Temperature Control Attributes and commands for configuring the temperature control, and reporting temperature.

## Declaration

```objectivec
@interface MTRClusterTemperatureControl : MTRGenericCluster
```

## Topics

### Instance Methods

- [initWithDevice:endpointID:queue:](mtrclustertemperaturecontrol/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithParams:](mtrclustertemperaturecontrol/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclustertemperaturecontrol/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclustertemperaturecontrol/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclustertemperaturecontrol/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclustertemperaturecontrol/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeMaxTemperatureWithParams:](mtrclustertemperaturecontrol/readattributemaxtemperature%28with_%29.md)
- [readAttributeMinTemperatureWithParams:](mtrclustertemperaturecontrol/readattributemintemperature%28with_%29.md)
- [readAttributeSelectedTemperatureLevelWithParams:](mtrclustertemperaturecontrol/readattributeselectedtemperaturelevel%28with_%29.md)
- [readAttributeStepWithParams:](mtrclustertemperaturecontrol/readattributestep%28with_%29.md)
- [readAttributeSupportedTemperatureLevelsWithParams:](mtrclustertemperaturecontrol/readattributesupportedtemperaturelevels%28with_%29.md)
- [readAttributeTemperatureSetpointWithParams:](mtrclustertemperaturecontrol/readattributetemperaturesetpoint%28with_%29.md)
- [setTemperatureWithParams:expectedValues:expectedValueInterval:completion:](mtrclustertemperaturecontrol/settemperaturewith%28__expectedvalues_expectedvalueinterval_completion_%29.md)
- [setTemperatureWithExpectedValues:expectedValueInterval:completion:](mtrclustertemperaturecontrol/settemperaturewithexpectedvalues%28__expectedvalueinterval_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
