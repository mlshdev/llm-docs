> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusteronoff](https://developer.apple.com/documentation/matter/mtrclusteronoff)

# MTRClusterOnOff (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterOnOff
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclusteronoff/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclusteronoff/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [off(with:expectedValues:expectedValueInterval:completion:)](mtrclusteronoff/off%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [off(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteronoff/off%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [off(withExpectedValues:expectedValueInterval:completion:)](mtrclusteronoff/off%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [off(withExpectedValues:expectedValueInterval:completionHandler:)](mtrclusteronoff/off%28withexpectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [offWithEffect(with:expectedValues:expectedValueInterval:completion:)](mtrclusteronoff/offwitheffect%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [offWithEffect(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteronoff/offwitheffect%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [on(with:expectedValues:expectedValueInterval:completion:)](mtrclusteronoff/on%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [on(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteronoff/on%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [on(withExpectedValues:expectedValueInterval:completion:)](mtrclusteronoff/on%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [on(withExpectedValues:expectedValueInterval:completionHandler:)](mtrclusteronoff/on%28withexpectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [onWithRecallGlobalScene(with:expectedValues:expectedValueInterval:completion:)](mtrclusteronoff/onwithrecallglobalscene%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [onWithRecallGlobalScene(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteronoff/onwithrecallglobalscene%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [onWithRecallGlobalScene(withExpectedValues:expectedValueInterval:completion:)](mtrclusteronoff/onwithrecallglobalscene%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [onWithRecallGlobalScene(withExpectedValues:expectedValueInterval:completionHandler:)](mtrclusteronoff/onwithrecallglobalscene%28withexpectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [onWithTimedOff(with:expectedValues:expectedValueInterval:completion:)](mtrclusteronoff/onwithtimedoff%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [onWithTimedOff(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteronoff/onwithtimedoff%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandList(with:)](mtrclusteronoff/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusteronoff/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusteronoff/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusteronoff/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusteronoff/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeGlobalSceneControl(with:)](mtrclusteronoff/readattributeglobalscenecontrol%28with_%29.md)
- [readAttributeOffWaitTime(with:)](mtrclusteronoff/readattributeoffwaittime%28with_%29.md)
- [readAttributeOnOff(with:)](mtrclusteronoff/readattributeonoff%28with_%29.md)
- [readAttributeOnTime(with:)](mtrclusteronoff/readattributeontime%28with_%29.md)
- [readAttributeStartUp(with:)](mtrclusteronoff/readattributestartup%28with_%29.md)
- [toggle(with:expectedValues:expectedValueInterval:completion:)](mtrclusteronoff/toggle%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [toggle(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteronoff/toggle%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [toggle(withExpectedValues:expectedValueInterval:completion:)](mtrclusteronoff/toggle%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [toggle(withExpectedValues:expectedValueInterval:completionHandler:)](mtrclusteronoff/toggle%28withexpectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [writeAttributeOffWaitTime(withValue:expectedValueInterval:)](mtrclusteronoff/writeattributeoffwaittime%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeOffWaitTime(withValue:expectedValueInterval:params:)](mtrclusteronoff/writeattributeoffwaittime%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeOnTime(withValue:expectedValueInterval:)](mtrclusteronoff/writeattributeontime%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeOnTime(withValue:expectedValueInterval:params:)](mtrclusteronoff/writeattributeontime%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeStartUp(withValue:expectedValueInterval:)](mtrclusteronoff/writeattributestartup%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeStartUp(withValue:expectedValueInterval:params:)](mtrclusteronoff/writeattributestartup%28withvalue_expectedvalueinterval_params_%29.md)

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

# MTRClusterOnOff (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterOnOff : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclusteronoff/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclusteronoff/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [offWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteronoff/off%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [offWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteronoff/off%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [offWithExpectedValues:expectedValueInterval:completion:](mtrclusteronoff/off%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [offWithExpectedValues:expectedValueInterval:completionHandler:](mtrclusteronoff/off%28withexpectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [offWithEffectWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteronoff/offwitheffect%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [offWithEffectWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteronoff/offwitheffect%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [onWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteronoff/on%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [onWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteronoff/on%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [onWithExpectedValues:expectedValueInterval:completion:](mtrclusteronoff/on%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [onWithExpectedValues:expectedValueInterval:completionHandler:](mtrclusteronoff/on%28withexpectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [onWithRecallGlobalSceneWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteronoff/onwithrecallglobalscene%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [onWithRecallGlobalSceneWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteronoff/onwithrecallglobalscene%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [onWithRecallGlobalSceneWithExpectedValues:expectedValueInterval:completion:](mtrclusteronoff/onwithrecallglobalscene%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [onWithRecallGlobalSceneWithExpectedValues:expectedValueInterval:completionHandler:](mtrclusteronoff/onwithrecallglobalscene%28withexpectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [onWithTimedOffWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteronoff/onwithtimedoff%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [onWithTimedOffWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteronoff/onwithtimedoff%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandListWithParams:](mtrclusteronoff/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusteronoff/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusteronoff/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusteronoff/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusteronoff/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeGlobalSceneControlWithParams:](mtrclusteronoff/readattributeglobalscenecontrol%28with_%29.md)
- [readAttributeOffWaitTimeWithParams:](mtrclusteronoff/readattributeoffwaittime%28with_%29.md)
- [readAttributeOnOffWithParams:](mtrclusteronoff/readattributeonoff%28with_%29.md)
- [readAttributeOnTimeWithParams:](mtrclusteronoff/readattributeontime%28with_%29.md)
- [readAttributeStartUpOnOffWithParams:](mtrclusteronoff/readattributestartup%28with_%29.md)
- [toggleWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteronoff/toggle%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [toggleWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteronoff/toggle%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [toggleWithExpectedValues:expectedValueInterval:completion:](mtrclusteronoff/toggle%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [toggleWithExpectedValues:expectedValueInterval:completionHandler:](mtrclusteronoff/toggle%28withexpectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [writeAttributeOffWaitTimeWithValue:expectedValueInterval:](mtrclusteronoff/writeattributeoffwaittime%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeOffWaitTimeWithValue:expectedValueInterval:params:](mtrclusteronoff/writeattributeoffwaittime%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeOnTimeWithValue:expectedValueInterval:](mtrclusteronoff/writeattributeontime%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeOnTimeWithValue:expectedValueInterval:params:](mtrclusteronoff/writeattributeontime%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeStartUpOnOffWithValue:expectedValueInterval:](mtrclusteronoff/writeattributestartup%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeStartUpOnOffWithValue:expectedValueInterval:params:](mtrclusteronoff/writeattributestartup%28withvalue_expectedvalueinterval_params_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
