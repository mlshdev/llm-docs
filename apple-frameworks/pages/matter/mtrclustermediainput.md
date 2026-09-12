> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclustermediainput](https://developer.apple.com/documentation/matter/mtrclustermediainput)

# MTRClusterMediaInput (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterMediaInput
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclustermediainput/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclustermediainput/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [hideStatus(with:expectedValues:expectedValueInterval:completion:)](mtrclustermediainput/hidestatus%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [hideStatus(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclustermediainput/hidestatus%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [hideStatus(withExpectedValues:expectedValueInterval:completion:)](mtrclustermediainput/hidestatus%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [hideStatus(withExpectedValues:expectedValueInterval:completionHandler:)](mtrclustermediainput/hidestatus%28withexpectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandList(with:)](mtrclustermediainput/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclustermediainput/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclustermediainput/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentInput(with:)](mtrclustermediainput/readattributecurrentinput%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclustermediainput/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclustermediainput/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeInputList(with:)](mtrclustermediainput/readattributeinputlist%28with_%29.md)
- [renameInput(with:expectedValues:expectedValueInterval:completion:)](mtrclustermediainput/renameinput%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [renameInput(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclustermediainput/renameinput%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [select(with:expectedValues:expectedValueInterval:completion:)](mtrclustermediainput/select%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [select(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclustermediainput/select%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [showStatus(with:expectedValues:expectedValueInterval:completion:)](mtrclustermediainput/showstatus%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [showStatus(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclustermediainput/showstatus%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [showStatus(withExpectedValues:expectedValueInterval:completion:)](mtrclustermediainput/showstatus%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [showStatus(withExpectedValues:expectedValueInterval:completionHandler:)](mtrclustermediainput/showstatus%28withexpectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.

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

# MTRClusterMediaInput (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterMediaInput : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclustermediainput/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclustermediainput/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [hideInputStatusWithParams:expectedValues:expectedValueInterval:completion:](mtrclustermediainput/hidestatus%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [hideInputStatusWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclustermediainput/hidestatus%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [hideInputStatusWithExpectedValues:expectedValueInterval:completion:](mtrclustermediainput/hidestatus%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [hideInputStatusWithExpectedValues:expectedValueInterval:completionHandler:](mtrclustermediainput/hidestatus%28withexpectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandListWithParams:](mtrclustermediainput/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclustermediainput/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclustermediainput/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentInputWithParams:](mtrclustermediainput/readattributecurrentinput%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclustermediainput/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclustermediainput/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeInputListWithParams:](mtrclustermediainput/readattributeinputlist%28with_%29.md)
- [renameInputWithParams:expectedValues:expectedValueInterval:completion:](mtrclustermediainput/renameinput%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [renameInputWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclustermediainput/renameinput%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [selectInputWithParams:expectedValues:expectedValueInterval:completion:](mtrclustermediainput/select%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [selectInputWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclustermediainput/select%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [showInputStatusWithParams:expectedValues:expectedValueInterval:completion:](mtrclustermediainput/showstatus%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [showInputStatusWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclustermediainput/showstatus%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [showInputStatusWithExpectedValues:expectedValueInterval:completion:](mtrclustermediainput/showstatus%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [showInputStatusWithExpectedValues:expectedValueInterval:completionHandler:](mtrclustermediainput/showstatus%28withexpectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
