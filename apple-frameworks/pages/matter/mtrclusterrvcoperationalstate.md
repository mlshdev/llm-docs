> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterrvcoperationalstate](https://developer.apple.com/documentation/matter/mtrclusterrvcoperationalstate)

# MTRClusterRVCOperationalState (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```swift
class MTRClusterRVCOperationalState
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclusterrvcoperationalstate/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [pause(with:expectedValues:expectedValueInterval:completion:)](mtrclusterrvcoperationalstate/pause%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [pause(withExpectedValues:expectedValueInterval:completion:)](mtrclusterrvcoperationalstate/pause%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandList(with:)](mtrclusterrvcoperationalstate/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterrvcoperationalstate/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterrvcoperationalstate/readattributeclusterrevision%28with_%29.md)
- [readAttributeCountdownTime(with:)](mtrclusterrvcoperationalstate/readattributecountdowntime%28with_%29.md)
- [readAttributeCurrentPhase(with:)](mtrclusterrvcoperationalstate/readattributecurrentphase%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterrvcoperationalstate/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterrvcoperationalstate/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeOperationalError(with:)](mtrclusterrvcoperationalstate/readattributeoperationalerror%28with_%29.md)
- [readAttributeOperationalState(with:)](mtrclusterrvcoperationalstate/readattributeoperationalstate%28with_%29.md)
- [readAttributeOperationalStateList(with:)](mtrclusterrvcoperationalstate/readattributeoperationalstatelist%28with_%29.md)
- [readAttributePhaseList(with:)](mtrclusterrvcoperationalstate/readattributephaselist%28with_%29.md)
- [resume(with:expectedValues:expectedValueInterval:completion:)](mtrclusterrvcoperationalstate/resume%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [resume(withExpectedValues:expectedValueInterval:completion:)](mtrclusterrvcoperationalstate/resume%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [goHome(with:expectedValues:expectedValueInterval:completion:)](mtrclusterrvcoperationalstate/gohome%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [goHome(withExpectedValues:expectedValueInterval:completion:)](mtrclusterrvcoperationalstate/gohome%28withexpectedvalues_expectedvalueinterval_completion_%29.md)

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

# MTRClusterRVCOperationalState (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```objectivec
@interface MTRClusterRVCOperationalState : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpointID:queue:](mtrclusterrvcoperationalstate/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [pauseWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterrvcoperationalstate/pause%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [pauseWithExpectedValues:expectedValueInterval:completion:](mtrclusterrvcoperationalstate/pause%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandListWithParams:](mtrclusterrvcoperationalstate/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterrvcoperationalstate/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterrvcoperationalstate/readattributeclusterrevision%28with_%29.md)
- [readAttributeCountdownTimeWithParams:](mtrclusterrvcoperationalstate/readattributecountdowntime%28with_%29.md)
- [readAttributeCurrentPhaseWithParams:](mtrclusterrvcoperationalstate/readattributecurrentphase%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterrvcoperationalstate/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterrvcoperationalstate/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeOperationalErrorWithParams:](mtrclusterrvcoperationalstate/readattributeoperationalerror%28with_%29.md)
- [readAttributeOperationalStateWithParams:](mtrclusterrvcoperationalstate/readattributeoperationalstate%28with_%29.md)
- [readAttributeOperationalStateListWithParams:](mtrclusterrvcoperationalstate/readattributeoperationalstatelist%28with_%29.md)
- [readAttributePhaseListWithParams:](mtrclusterrvcoperationalstate/readattributephaselist%28with_%29.md)
- [resumeWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterrvcoperationalstate/resume%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [resumeWithExpectedValues:expectedValueInterval:completion:](mtrclusterrvcoperationalstate/resume%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [goHomeWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterrvcoperationalstate/gohome%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [goHomeWithExpectedValues:expectedValueInterval:completion:](mtrclusterrvcoperationalstate/gohome%28withexpectedvalues_expectedvalueinterval_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
