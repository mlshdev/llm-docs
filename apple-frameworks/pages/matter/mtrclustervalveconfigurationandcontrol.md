> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclustervalveconfigurationandcontrol](https://developer.apple.com/documentation/matter/mtrclustervalveconfigurationandcontrol)

# MTRClusterValveConfigurationAndControl (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
class MTRClusterValveConfigurationAndControl
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclustervalveconfigurationandcontrol/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [close(with:expectedValues:expectedValueInterval:completion:)](mtrclustervalveconfigurationandcontrol/close%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [close(withExpectedValues:expectedValueInterval:completion:)](mtrclustervalveconfigurationandcontrol/close%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [open(with:expectedValues:expectedValueInterval:completion:)](mtrclustervalveconfigurationandcontrol/open%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [open(withExpectedValues:expectedValueInterval:completion:)](mtrclustervalveconfigurationandcontrol/open%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandList(with:)](mtrclustervalveconfigurationandcontrol/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclustervalveconfigurationandcontrol/readattributeattributelist%28with_%29.md)
- [readAttributeAutoCloseTime(with:)](mtrclustervalveconfigurationandcontrol/readattributeautoclosetime%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclustervalveconfigurationandcontrol/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentLevel(with:)](mtrclustervalveconfigurationandcontrol/readattributecurrentlevel%28with_%29.md)
- [readAttributeCurrentState(with:)](mtrclustervalveconfigurationandcontrol/readattributecurrentstate%28with_%29.md)
- [readAttributeDefaultOpenDuration(with:)](mtrclustervalveconfigurationandcontrol/readattributedefaultopenduration%28with_%29.md)
- [readAttributeDefaultOpenLevel(with:)](mtrclustervalveconfigurationandcontrol/readattributedefaultopenlevel%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclustervalveconfigurationandcontrol/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclustervalveconfigurationandcontrol/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeLevelStep(with:)](mtrclustervalveconfigurationandcontrol/readattributelevelstep%28with_%29.md)
- [readAttributeOpenDuration(with:)](mtrclustervalveconfigurationandcontrol/readattributeopenduration%28with_%29.md)
- [readAttributeRemainingDuration(with:)](mtrclustervalveconfigurationandcontrol/readattributeremainingduration%28with_%29.md)
- [readAttributeTargetLevel(with:)](mtrclustervalveconfigurationandcontrol/readattributetargetlevel%28with_%29.md)
- [readAttributeTargetState(with:)](mtrclustervalveconfigurationandcontrol/readattributetargetstate%28with_%29.md)
- [readAttributeValveFault(with:)](mtrclustervalveconfigurationandcontrol/readattributevalvefault%28with_%29.md)
- [writeAttributeDefaultOpenDuration(withValue:expectedValueInterval:)](mtrclustervalveconfigurationandcontrol/writeattributedefaultopenduration%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeDefaultOpenDuration(withValue:expectedValueInterval:params:)](mtrclustervalveconfigurationandcontrol/writeattributedefaultopenduration%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeDefaultOpenLevel(withValue:expectedValueInterval:)](mtrclustervalveconfigurationandcontrol/writeattributedefaultopenlevel%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeDefaultOpenLevel(withValue:expectedValueInterval:params:)](mtrclustervalveconfigurationandcontrol/writeattributedefaultopenlevel%28withvalue_expectedvalueinterval_params_%29.md)

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

# MTRClusterValveConfigurationAndControl (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
@interface MTRClusterValveConfigurationAndControl : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpointID:queue:](mtrclustervalveconfigurationandcontrol/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [closeWithParams:expectedValues:expectedValueInterval:completion:](mtrclustervalveconfigurationandcontrol/close%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [closeWithExpectedValues:expectedValueInterval:completion:](mtrclustervalveconfigurationandcontrol/close%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [openWithParams:expectedValues:expectedValueInterval:completion:](mtrclustervalveconfigurationandcontrol/open%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [openWithExpectedValues:expectedValueInterval:completion:](mtrclustervalveconfigurationandcontrol/open%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandListWithParams:](mtrclustervalveconfigurationandcontrol/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclustervalveconfigurationandcontrol/readattributeattributelist%28with_%29.md)
- [readAttributeAutoCloseTimeWithParams:](mtrclustervalveconfigurationandcontrol/readattributeautoclosetime%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclustervalveconfigurationandcontrol/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentLevelWithParams:](mtrclustervalveconfigurationandcontrol/readattributecurrentlevel%28with_%29.md)
- [readAttributeCurrentStateWithParams:](mtrclustervalveconfigurationandcontrol/readattributecurrentstate%28with_%29.md)
- [readAttributeDefaultOpenDurationWithParams:](mtrclustervalveconfigurationandcontrol/readattributedefaultopenduration%28with_%29.md)
- [readAttributeDefaultOpenLevelWithParams:](mtrclustervalveconfigurationandcontrol/readattributedefaultopenlevel%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclustervalveconfigurationandcontrol/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclustervalveconfigurationandcontrol/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeLevelStepWithParams:](mtrclustervalveconfigurationandcontrol/readattributelevelstep%28with_%29.md)
- [readAttributeOpenDurationWithParams:](mtrclustervalveconfigurationandcontrol/readattributeopenduration%28with_%29.md)
- [readAttributeRemainingDurationWithParams:](mtrclustervalveconfigurationandcontrol/readattributeremainingduration%28with_%29.md)
- [readAttributeTargetLevelWithParams:](mtrclustervalveconfigurationandcontrol/readattributetargetlevel%28with_%29.md)
- [readAttributeTargetStateWithParams:](mtrclustervalveconfigurationandcontrol/readattributetargetstate%28with_%29.md)
- [readAttributeValveFaultWithParams:](mtrclustervalveconfigurationandcontrol/readattributevalvefault%28with_%29.md)
- [writeAttributeDefaultOpenDurationWithValue:expectedValueInterval:](mtrclustervalveconfigurationandcontrol/writeattributedefaultopenduration%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeDefaultOpenDurationWithValue:expectedValueInterval:params:](mtrclustervalveconfigurationandcontrol/writeattributedefaultopenduration%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeDefaultOpenLevelWithValue:expectedValueInterval:](mtrclustervalveconfigurationandcontrol/writeattributedefaultopenlevel%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeDefaultOpenLevelWithValue:expectedValueInterval:params:](mtrclustervalveconfigurationandcontrol/writeattributedefaultopenlevel%28withvalue_expectedvalueinterval_params_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
