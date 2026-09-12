> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterlevelcontrol](https://developer.apple.com/documentation/matter/mtrclusterlevelcontrol)

# MTRClusterLevelControl (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterLevelControl
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclusterlevelcontrol/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclusterlevelcontrol/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [move(with:expectedValues:expectedValueInterval:completion:)](mtrclusterlevelcontrol/move%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [move(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusterlevelcontrol/move%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [moveToClosestFrequency(with:expectedValues:expectedValueInterval:completion:)](mtrclusterlevelcontrol/movetoclosestfrequency%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [moveToClosestFrequency(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusterlevelcontrol/movetoclosestfrequency%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [moveToLevel(with:expectedValues:expectedValueInterval:completion:)](mtrclusterlevelcontrol/movetolevel%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [moveToLevel(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusterlevelcontrol/movetolevel%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [moveToLevelWithOnOff(with:expectedValues:expectedValueInterval:completion:)](mtrclusterlevelcontrol/movetolevelwithonoff%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [moveToLevelWithOnOff(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusterlevelcontrol/movetolevelwithonoff%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [moveWithOnOff(with:expectedValues:expectedValueInterval:completion:)](mtrclusterlevelcontrol/movewithonoff%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [moveWithOnOff(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusterlevelcontrol/movewithonoff%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandList(with:)](mtrclusterlevelcontrol/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterlevelcontrol/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterlevelcontrol/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentFrequency(with:)](mtrclusterlevelcontrol/readattributecurrentfrequency%28with_%29.md)
- [readAttributeCurrentLevel(with:)](mtrclusterlevelcontrol/readattributecurrentlevel%28with_%29.md)
- [readAttributeDefaultMoveRate(with:)](mtrclusterlevelcontrol/readattributedefaultmoverate%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterlevelcontrol/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterlevelcontrol/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeMaxFrequency(with:)](mtrclusterlevelcontrol/readattributemaxfrequency%28with_%29.md)
- [readAttributeMaxLevel(with:)](mtrclusterlevelcontrol/readattributemaxlevel%28with_%29.md)
- [readAttributeMinFrequency(with:)](mtrclusterlevelcontrol/readattributeminfrequency%28with_%29.md)
- [readAttributeMinLevel(with:)](mtrclusterlevelcontrol/readattributeminlevel%28with_%29.md)
- [readAttributeOffTransitionTime(with:)](mtrclusterlevelcontrol/readattributeofftransitiontime%28with_%29.md)
- [readAttributeOnLevel(with:)](mtrclusterlevelcontrol/readattributeonlevel%28with_%29.md)
- [readAttributeOnOffTransitionTime(with:)](mtrclusterlevelcontrol/readattributeonofftransitiontime%28with_%29.md)
- [readAttributeOnTransitionTime(with:)](mtrclusterlevelcontrol/readattributeontransitiontime%28with_%29.md)
- [readAttributeOptions(with:)](mtrclusterlevelcontrol/readattributeoptions%28with_%29.md)
- [readAttributeRemainingTime(with:)](mtrclusterlevelcontrol/readattributeremainingtime%28with_%29.md)
- [readAttributeStartUpCurrentLevel(with:)](mtrclusterlevelcontrol/readattributestartupcurrentlevel%28with_%29.md)
- [step(with:expectedValues:expectedValueInterval:completion:)](mtrclusterlevelcontrol/step%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [step(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusterlevelcontrol/step%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [stepWithOnOff(with:expectedValues:expectedValueInterval:completion:)](mtrclusterlevelcontrol/stepwithonoff%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [stepWithOnOff(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusterlevelcontrol/stepwithonoff%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [stop(with:expectedValues:expectedValueInterval:completion:)](mtrclusterlevelcontrol/stop%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [stop(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusterlevelcontrol/stop%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [stopWithOnOff(with:expectedValues:expectedValueInterval:completion:)](mtrclusterlevelcontrol/stopwithonoff%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [stopWithOnOff(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusterlevelcontrol/stopwithonoff%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [writeAttributeDefaultMoveRate(withValue:expectedValueInterval:)](mtrclusterlevelcontrol/writeattributedefaultmoverate%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeDefaultMoveRate(withValue:expectedValueInterval:params:)](mtrclusterlevelcontrol/writeattributedefaultmoverate%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeOffTransitionTime(withValue:expectedValueInterval:)](mtrclusterlevelcontrol/writeattributeofftransitiontime%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeOffTransitionTime(withValue:expectedValueInterval:params:)](mtrclusterlevelcontrol/writeattributeofftransitiontime%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeOnLevel(withValue:expectedValueInterval:)](mtrclusterlevelcontrol/writeattributeonlevel%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeOnLevel(withValue:expectedValueInterval:params:)](mtrclusterlevelcontrol/writeattributeonlevel%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeOnOffTransitionTime(withValue:expectedValueInterval:)](mtrclusterlevelcontrol/writeattributeonofftransitiontime%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeOnOffTransitionTime(withValue:expectedValueInterval:params:)](mtrclusterlevelcontrol/writeattributeonofftransitiontime%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeOnTransitionTime(withValue:expectedValueInterval:)](mtrclusterlevelcontrol/writeattributeontransitiontime%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeOnTransitionTime(withValue:expectedValueInterval:params:)](mtrclusterlevelcontrol/writeattributeontransitiontime%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeOptions(withValue:expectedValueInterval:)](mtrclusterlevelcontrol/writeattributeoptions%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeOptions(withValue:expectedValueInterval:params:)](mtrclusterlevelcontrol/writeattributeoptions%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeStartUpCurrentLevel(withValue:expectedValueInterval:)](mtrclusterlevelcontrol/writeattributestartupcurrentlevel%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeStartUpCurrentLevel(withValue:expectedValueInterval:params:)](mtrclusterlevelcontrol/writeattributestartupcurrentlevel%28withvalue_expectedvalueinterval_params_%29.md)

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

# MTRClusterLevelControl (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterLevelControl : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclusterlevelcontrol/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclusterlevelcontrol/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [moveWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterlevelcontrol/move%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [moveWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusterlevelcontrol/move%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [moveToClosestFrequencyWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterlevelcontrol/movetoclosestfrequency%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [moveToClosestFrequencyWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusterlevelcontrol/movetoclosestfrequency%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [moveToLevelWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterlevelcontrol/movetolevel%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [moveToLevelWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusterlevelcontrol/movetolevel%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [moveToLevelWithOnOffWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterlevelcontrol/movetolevelwithonoff%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [moveToLevelWithOnOffWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusterlevelcontrol/movetolevelwithonoff%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [moveWithOnOffWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterlevelcontrol/movewithonoff%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [moveWithOnOffWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusterlevelcontrol/movewithonoff%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandListWithParams:](mtrclusterlevelcontrol/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterlevelcontrol/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterlevelcontrol/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentFrequencyWithParams:](mtrclusterlevelcontrol/readattributecurrentfrequency%28with_%29.md)
- [readAttributeCurrentLevelWithParams:](mtrclusterlevelcontrol/readattributecurrentlevel%28with_%29.md)
- [readAttributeDefaultMoveRateWithParams:](mtrclusterlevelcontrol/readattributedefaultmoverate%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterlevelcontrol/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterlevelcontrol/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeMaxFrequencyWithParams:](mtrclusterlevelcontrol/readattributemaxfrequency%28with_%29.md)
- [readAttributeMaxLevelWithParams:](mtrclusterlevelcontrol/readattributemaxlevel%28with_%29.md)
- [readAttributeMinFrequencyWithParams:](mtrclusterlevelcontrol/readattributeminfrequency%28with_%29.md)
- [readAttributeMinLevelWithParams:](mtrclusterlevelcontrol/readattributeminlevel%28with_%29.md)
- [readAttributeOffTransitionTimeWithParams:](mtrclusterlevelcontrol/readattributeofftransitiontime%28with_%29.md)
- [readAttributeOnLevelWithParams:](mtrclusterlevelcontrol/readattributeonlevel%28with_%29.md)
- [readAttributeOnOffTransitionTimeWithParams:](mtrclusterlevelcontrol/readattributeonofftransitiontime%28with_%29.md)
- [readAttributeOnTransitionTimeWithParams:](mtrclusterlevelcontrol/readattributeontransitiontime%28with_%29.md)
- [readAttributeOptionsWithParams:](mtrclusterlevelcontrol/readattributeoptions%28with_%29.md)
- [readAttributeRemainingTimeWithParams:](mtrclusterlevelcontrol/readattributeremainingtime%28with_%29.md)
- [readAttributeStartUpCurrentLevelWithParams:](mtrclusterlevelcontrol/readattributestartupcurrentlevel%28with_%29.md)
- [stepWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterlevelcontrol/step%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [stepWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusterlevelcontrol/step%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [stepWithOnOffWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterlevelcontrol/stepwithonoff%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [stepWithOnOffWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusterlevelcontrol/stepwithonoff%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [stopWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterlevelcontrol/stop%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [stopWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusterlevelcontrol/stop%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [stopWithOnOffWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterlevelcontrol/stopwithonoff%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [stopWithOnOffWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusterlevelcontrol/stopwithonoff%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [writeAttributeDefaultMoveRateWithValue:expectedValueInterval:](mtrclusterlevelcontrol/writeattributedefaultmoverate%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeDefaultMoveRateWithValue:expectedValueInterval:params:](mtrclusterlevelcontrol/writeattributedefaultmoverate%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeOffTransitionTimeWithValue:expectedValueInterval:](mtrclusterlevelcontrol/writeattributeofftransitiontime%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeOffTransitionTimeWithValue:expectedValueInterval:params:](mtrclusterlevelcontrol/writeattributeofftransitiontime%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeOnLevelWithValue:expectedValueInterval:](mtrclusterlevelcontrol/writeattributeonlevel%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeOnLevelWithValue:expectedValueInterval:params:](mtrclusterlevelcontrol/writeattributeonlevel%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeOnOffTransitionTimeWithValue:expectedValueInterval:](mtrclusterlevelcontrol/writeattributeonofftransitiontime%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeOnOffTransitionTimeWithValue:expectedValueInterval:params:](mtrclusterlevelcontrol/writeattributeonofftransitiontime%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeOnTransitionTimeWithValue:expectedValueInterval:](mtrclusterlevelcontrol/writeattributeontransitiontime%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeOnTransitionTimeWithValue:expectedValueInterval:params:](mtrclusterlevelcontrol/writeattributeontransitiontime%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeOptionsWithValue:expectedValueInterval:](mtrclusterlevelcontrol/writeattributeoptions%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeOptionsWithValue:expectedValueInterval:params:](mtrclusterlevelcontrol/writeattributeoptions%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeStartUpCurrentLevelWithValue:expectedValueInterval:](mtrclusterlevelcontrol/writeattributestartupcurrentlevel%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeStartUpCurrentLevelWithValue:expectedValueInterval:params:](mtrclusterlevelcontrol/writeattributestartupcurrentlevel%28withvalue_expectedvalueinterval_params_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
