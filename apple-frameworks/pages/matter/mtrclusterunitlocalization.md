> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterunitlocalization](https://developer.apple.com/documentation/matter/mtrclusterunitlocalization)

# MTRClusterUnitLocalization (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterUnitLocalization
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclusterunitlocalization/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclusterunitlocalization/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclusterunitlocalization/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterunitlocalization/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterunitlocalization/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterunitlocalization/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterunitlocalization/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeTemperatureUnit(with:)](mtrclusterunitlocalization/readattributetemperatureunit%28with_%29.md)
- [writeAttributeTemperatureUnit(withValue:expectedValueInterval:)](mtrclusterunitlocalization/writeattributetemperatureunit%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeTemperatureUnit(withValue:expectedValueInterval:params:)](mtrclusterunitlocalization/writeattributetemperatureunit%28withvalue_expectedvalueinterval_params_%29.md)

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

# MTRClusterUnitLocalization (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterUnitLocalization : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclusterunitlocalization/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclusterunitlocalization/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandListWithParams:](mtrclusterunitlocalization/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterunitlocalization/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterunitlocalization/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterunitlocalization/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterunitlocalization/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeTemperatureUnitWithParams:](mtrclusterunitlocalization/readattributetemperatureunit%28with_%29.md)
- [writeAttributeTemperatureUnitWithValue:expectedValueInterval:](mtrclusterunitlocalization/writeattributetemperatureunit%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeTemperatureUnitWithValue:expectedValueInterval:params:](mtrclusterunitlocalization/writeattributetemperatureunit%28withvalue_expectedvalueinterval_params_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
