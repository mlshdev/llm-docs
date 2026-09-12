> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusteroperationalstate](https://developer.apple.com/documentation/matter/mtrclusteroperationalstate)

# MTRClusterOperationalState (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```swift
class MTRClusterOperationalState
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclusteroperationalstate/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [pause(with:expectedValues:expectedValueInterval:completion:)](mtrclusteroperationalstate/pause%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [pause(withExpectedValues:expectedValueInterval:completion:)](mtrclusteroperationalstate/pause%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandList(with:)](mtrclusteroperationalstate/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusteroperationalstate/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusteroperationalstate/readattributeclusterrevision%28with_%29.md)
- [readAttributeCountdownTime(with:)](mtrclusteroperationalstate/readattributecountdowntime%28with_%29.md)
- [readAttributeCurrentPhase(with:)](mtrclusteroperationalstate/readattributecurrentphase%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusteroperationalstate/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusteroperationalstate/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeOperationalError(with:)](mtrclusteroperationalstate/readattributeoperationalerror%28with_%29.md)
- [readAttributeOperationalState(with:)](mtrclusteroperationalstate/readattributeoperationalstate%28with_%29.md)
- [readAttributeOperationalStateList(with:)](mtrclusteroperationalstate/readattributeoperationalstatelist%28with_%29.md)
- [readAttributePhaseList(with:)](mtrclusteroperationalstate/readattributephaselist%28with_%29.md)
- [resume(with:expectedValues:expectedValueInterval:completion:)](mtrclusteroperationalstate/resume%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [resume(withExpectedValues:expectedValueInterval:completion:)](mtrclusteroperationalstate/resume%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [start(with:expectedValues:expectedValueInterval:completion:)](mtrclusteroperationalstate/start%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [start(withExpectedValues:expectedValueInterval:completion:)](mtrclusteroperationalstate/start%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [stop(with:expectedValues:expectedValueInterval:completion:)](mtrclusteroperationalstate/stop%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [stop(withExpectedValues:expectedValueInterval:completion:)](mtrclusteroperationalstate/stop%28withexpectedvalues_expectedvalueinterval_completion_%29.md)

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

# MTRClusterOperationalState (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```objectivec
@interface MTRClusterOperationalState : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpointID:queue:](mtrclusteroperationalstate/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [pauseWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteroperationalstate/pause%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [pauseWithExpectedValues:expectedValueInterval:completion:](mtrclusteroperationalstate/pause%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandListWithParams:](mtrclusteroperationalstate/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusteroperationalstate/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusteroperationalstate/readattributeclusterrevision%28with_%29.md)
- [readAttributeCountdownTimeWithParams:](mtrclusteroperationalstate/readattributecountdowntime%28with_%29.md)
- [readAttributeCurrentPhaseWithParams:](mtrclusteroperationalstate/readattributecurrentphase%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusteroperationalstate/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusteroperationalstate/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeOperationalErrorWithParams:](mtrclusteroperationalstate/readattributeoperationalerror%28with_%29.md)
- [readAttributeOperationalStateWithParams:](mtrclusteroperationalstate/readattributeoperationalstate%28with_%29.md)
- [readAttributeOperationalStateListWithParams:](mtrclusteroperationalstate/readattributeoperationalstatelist%28with_%29.md)
- [readAttributePhaseListWithParams:](mtrclusteroperationalstate/readattributephaselist%28with_%29.md)
- [resumeWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteroperationalstate/resume%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [resumeWithExpectedValues:expectedValueInterval:completion:](mtrclusteroperationalstate/resume%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [startWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteroperationalstate/start%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [startWithExpectedValues:expectedValueInterval:completion:](mtrclusteroperationalstate/start%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [stopWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteroperationalstate/stop%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [stopWithExpectedValues:expectedValueInterval:completion:](mtrclusteroperationalstate/stop%28withexpectedvalues_expectedvalueinterval_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
