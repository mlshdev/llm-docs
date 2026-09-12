> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterswitch](https://developer.apple.com/documentation/matter/mtrclusterswitch)

# MTRClusterSwitch (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterSwitch
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclusterswitch/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclusterswitch/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclusterswitch/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterswitch/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterswitch/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentPosition(with:)](mtrclusterswitch/readattributecurrentposition%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterswitch/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterswitch/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeMultiPressMax(with:)](mtrclusterswitch/readattributemultipressmax%28with_%29.md)
- [readAttributeNumberOfPositions(with:)](mtrclusterswitch/readattributenumberofpositions%28with_%29.md)

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

# MTRClusterSwitch (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterSwitch : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclusterswitch/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclusterswitch/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandListWithParams:](mtrclusterswitch/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterswitch/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterswitch/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentPositionWithParams:](mtrclusterswitch/readattributecurrentposition%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterswitch/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterswitch/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeMultiPressMaxWithParams:](mtrclusterswitch/readattributemultipressmax%28with_%29.md)
- [readAttributeNumberOfPositionsWithParams:](mtrclusterswitch/readattributenumberofpositions%28with_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
