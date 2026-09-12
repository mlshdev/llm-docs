> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterbinding](https://developer.apple.com/documentation/matter/mtrclusterbinding)

# MTRClusterBinding (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterBinding
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclusterbinding/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclusterbinding/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclusterbinding/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterbinding/readattributeattributelist%28with_%29.md)
- [readAttributeBinding(with:)](mtrclusterbinding/readattributebinding%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterbinding/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterbinding/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterbinding/readattributegeneratedcommandlist%28with_%29.md)
- [writeAttributeBinding(withValue:expectedValueInterval:)](mtrclusterbinding/writeattributebinding%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeBinding(withValue:expectedValueInterval:params:)](mtrclusterbinding/writeattributebinding%28withvalue_expectedvalueinterval_params_%29.md)

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

# MTRClusterBinding (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterBinding : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclusterbinding/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclusterbinding/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandListWithParams:](mtrclusterbinding/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterbinding/readattributeattributelist%28with_%29.md)
- [readAttributeBindingWithParams:](mtrclusterbinding/readattributebinding%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterbinding/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterbinding/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterbinding/readattributegeneratedcommandlist%28with_%29.md)
- [writeAttributeBindingWithValue:expectedValueInterval:](mtrclusterbinding/writeattributebinding%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeBindingWithValue:expectedValueInterval:params:](mtrclusterbinding/writeattributebinding%28withvalue_expectedvalueinterval_params_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
