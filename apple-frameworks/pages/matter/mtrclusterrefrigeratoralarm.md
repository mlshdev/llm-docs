> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterrefrigeratoralarm](https://developer.apple.com/documentation/matter/mtrclusterrefrigeratoralarm)

# MTRClusterRefrigeratorAlarm (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Refrigerator Alarm Attributes and commands for configuring the Refrigerator alarm.

## Declaration

```swift
class MTRClusterRefrigeratorAlarm
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclusterrefrigeratoralarm/init%28device_endpointid_queue_%29.md): The queue is currently unused, but may be used in the future for calling completions for command invocations if commands are added to this cluster.

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclusterrefrigeratoralarm/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterrefrigeratoralarm/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterrefrigeratoralarm/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterrefrigeratoralarm/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterrefrigeratoralarm/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeMask(with:)](mtrclusterrefrigeratoralarm/readattributemask%28with_%29.md)
- [readAttributeState(with:)](mtrclusterrefrigeratoralarm/readattributestate%28with_%29.md)
- [readAttributeSupported(with:)](mtrclusterrefrigeratoralarm/readattributesupported%28with_%29.md)

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

# MTRClusterRefrigeratorAlarm (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Refrigerator Alarm Attributes and commands for configuring the Refrigerator alarm.

## Declaration

```objectivec
@interface MTRClusterRefrigeratorAlarm : MTRGenericCluster
```

## Topics

### Instance Methods

- [initWithDevice:endpointID:queue:](mtrclusterrefrigeratoralarm/init%28device_endpointid_queue_%29.md): The queue is currently unused, but may be used in the future for calling completions for command invocations if commands are added to this cluster.
- [readAttributeAcceptedCommandListWithParams:](mtrclusterrefrigeratoralarm/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterrefrigeratoralarm/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterrefrigeratoralarm/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterrefrigeratoralarm/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterrefrigeratoralarm/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeMaskWithParams:](mtrclusterrefrigeratoralarm/readattributemask%28with_%29.md)
- [readAttributeStateWithParams:](mtrclusterrefrigeratoralarm/readattributestate%28with_%29.md)
- [readAttributeSupportedWithParams:](mtrclusterrefrigeratoralarm/readattributesupported%28with_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
