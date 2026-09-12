> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterlowpower](https://developer.apple.com/documentation/matter/mtrclusterlowpower)

# MTRClusterLowPower (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterLowPower
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclusterlowpower/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclusterlowpower/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclusterlowpower/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterlowpower/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterlowpower/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterlowpower/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterlowpower/readattributegeneratedcommandlist%28with_%29.md)
- [sleep(with:expectedValues:expectedValueInterval:completion:)](mtrclusterlowpower/sleep%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [sleep(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusterlowpower/sleep%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [sleep(withExpectedValues:expectedValueInterval:completion:)](mtrclusterlowpower/sleep%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [sleep(withExpectedValues:expectedValueInterval:completionHandler:)](mtrclusterlowpower/sleep%28withexpectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.

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

# MTRClusterLowPower (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterLowPower : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclusterlowpower/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclusterlowpower/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandListWithParams:](mtrclusterlowpower/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterlowpower/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterlowpower/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterlowpower/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterlowpower/readattributegeneratedcommandlist%28with_%29.md)
- [sleepWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterlowpower/sleep%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [sleepWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusterlowpower/sleep%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [sleepWithExpectedValues:expectedValueInterval:completion:](mtrclusterlowpower/sleep%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [sleepWithExpectedValues:expectedValueInterval:completionHandler:](mtrclusterlowpower/sleep%28withexpectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
