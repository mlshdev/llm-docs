> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusteraudiooutput](https://developer.apple.com/documentation/matter/mtrclusteraudiooutput)

# MTRClusterAudioOutput (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterAudioOutput
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclusteraudiooutput/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclusteraudiooutput/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclusteraudiooutput/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusteraudiooutput/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusteraudiooutput/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentOutput(with:)](mtrclusteraudiooutput/readattributecurrentoutput%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusteraudiooutput/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusteraudiooutput/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeOutputList(with:)](mtrclusteraudiooutput/readattributeoutputlist%28with_%29.md)
- [renameOutput(with:expectedValues:expectedValueInterval:completion:)](mtrclusteraudiooutput/renameoutput%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [renameOutput(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteraudiooutput/renameoutput%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [select(with:expectedValues:expectedValueInterval:completion:)](mtrclusteraudiooutput/select%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [select(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteraudiooutput/select%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.

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

# MTRClusterAudioOutput (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterAudioOutput : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclusteraudiooutput/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclusteraudiooutput/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandListWithParams:](mtrclusteraudiooutput/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusteraudiooutput/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusteraudiooutput/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentOutputWithParams:](mtrclusteraudiooutput/readattributecurrentoutput%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusteraudiooutput/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusteraudiooutput/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeOutputListWithParams:](mtrclusteraudiooutput/readattributeoutputlist%28with_%29.md)
- [renameOutputWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteraudiooutput/renameoutput%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [renameOutputWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteraudiooutput/renameoutput%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [selectOutputWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteraudiooutput/select%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [selectOutputWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteraudiooutput/select%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
