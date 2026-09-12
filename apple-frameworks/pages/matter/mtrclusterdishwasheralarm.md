> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterdishwasheralarm](https://developer.apple.com/documentation/matter/mtrclusterdishwasheralarm)

# MTRClusterDishwasherAlarm (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Dishwasher Alarm Attributes and commands for configuring the Dishwasher alarm.

## Declaration

```swift
class MTRClusterDishwasherAlarm
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclusterdishwasheralarm/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.

### Instance Methods

- [modifyEnabledAlarms(with:expectedValues:expectedValueInterval:completion:)](mtrclusterdishwasheralarm/modifyenabledalarms%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandList(with:)](mtrclusterdishwasheralarm/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterdishwasheralarm/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterdishwasheralarm/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterdishwasheralarm/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterdishwasheralarm/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeLatch(with:)](mtrclusterdishwasheralarm/readattributelatch%28with_%29.md)
- [readAttributeMask(with:)](mtrclusterdishwasheralarm/readattributemask%28with_%29.md)
- [readAttributeState(with:)](mtrclusterdishwasheralarm/readattributestate%28with_%29.md)
- [readAttributeSupported(with:)](mtrclusterdishwasheralarm/readattributesupported%28with_%29.md)
- [reset(with:expectedValues:expectedValueInterval:completion:)](mtrclusterdishwasheralarm/reset%28with_expectedvalues_expectedvalueinterval_completion_%29.md)

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

# MTRClusterDishwasherAlarm (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Dishwasher Alarm Attributes and commands for configuring the Dishwasher alarm.

## Declaration

```objectivec
@interface MTRClusterDishwasherAlarm : MTRGenericCluster
```

## Topics

### Instance Methods

- [initWithDevice:endpointID:queue:](mtrclusterdishwasheralarm/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.
- [modifyEnabledAlarmsWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterdishwasheralarm/modifyenabledalarms%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandListWithParams:](mtrclusterdishwasheralarm/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterdishwasheralarm/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterdishwasheralarm/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterdishwasheralarm/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterdishwasheralarm/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeLatchWithParams:](mtrclusterdishwasheralarm/readattributelatch%28with_%29.md)
- [readAttributeMaskWithParams:](mtrclusterdishwasheralarm/readattributemask%28with_%29.md)
- [readAttributeStateWithParams:](mtrclusterdishwasheralarm/readattributestate%28with_%29.md)
- [readAttributeSupportedWithParams:](mtrclusterdishwasheralarm/readattributesupported%28with_%29.md)
- [resetWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterdishwasheralarm/reset%28with_expectedvalues_expectedvalueinterval_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
