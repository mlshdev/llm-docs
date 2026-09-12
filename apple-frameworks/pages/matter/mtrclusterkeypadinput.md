> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterkeypadinput](https://developer.apple.com/documentation/matter/mtrclusterkeypadinput)

# MTRClusterKeypadInput (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterKeypadInput
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclusterkeypadinput/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclusterkeypadinput/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclusterkeypadinput/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterkeypadinput/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterkeypadinput/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterkeypadinput/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterkeypadinput/readattributegeneratedcommandlist%28with_%29.md)
- [sendKey(with:expectedValues:expectedValueInterval:completion:)](mtrclusterkeypadinput/sendkey%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [sendKey(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusterkeypadinput/sendkey%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.

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

# MTRClusterKeypadInput (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterKeypadInput : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclusterkeypadinput/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclusterkeypadinput/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandListWithParams:](mtrclusterkeypadinput/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterkeypadinput/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterkeypadinput/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterkeypadinput/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterkeypadinput/readattributegeneratedcommandlist%28with_%29.md)
- [sendKeyWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterkeypadinput/sendkey%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [sendKeyWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusterkeypadinput/sendkey%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
