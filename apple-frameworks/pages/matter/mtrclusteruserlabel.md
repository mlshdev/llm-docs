> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusteruserlabel](https://developer.apple.com/documentation/matter/mtrclusteruserlabel)

# MTRClusterUserLabel (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterUserLabel
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclusteruserlabel/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclusteruserlabel/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclusteruserlabel/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusteruserlabel/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusteruserlabel/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusteruserlabel/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusteruserlabel/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeLabelList(with:)](mtrclusteruserlabel/readattributelabellist%28with_%29.md)
- [writeAttributeLabelList(withValue:expectedValueInterval:)](mtrclusteruserlabel/writeattributelabellist%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeLabelList(withValue:expectedValueInterval:params:)](mtrclusteruserlabel/writeattributelabellist%28withvalue_expectedvalueinterval_params_%29.md)

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

# MTRClusterUserLabel (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterUserLabel : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclusteruserlabel/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclusteruserlabel/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandListWithParams:](mtrclusteruserlabel/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusteruserlabel/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusteruserlabel/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusteruserlabel/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusteruserlabel/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeLabelListWithParams:](mtrclusteruserlabel/readattributelabellist%28with_%29.md)
- [writeAttributeLabelListWithValue:expectedValueInterval:](mtrclusteruserlabel/writeattributelabellist%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeLabelListWithValue:expectedValueInterval:params:](mtrclusteruserlabel/writeattributelabellist%28withvalue_expectedvalueinterval_params_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
