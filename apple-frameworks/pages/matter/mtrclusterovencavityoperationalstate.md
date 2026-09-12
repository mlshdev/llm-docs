> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterovencavityoperationalstate](https://developer.apple.com/documentation/matter/mtrclusterovencavityoperationalstate)

# MTRClusterOvenCavityOperationalState (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Oven Cavity Operational State This cluster supports remotely monitoring and, where supported, changing the operational state of an Oven.

## Declaration

```swift
class MTRClusterOvenCavityOperationalState
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclusterovencavityoperationalstate/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclusterovencavityoperationalstate/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterovencavityoperationalstate/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterovencavityoperationalstate/readattributeclusterrevision%28with_%29.md)
- [readAttributeCountdownTime(with:)](mtrclusterovencavityoperationalstate/readattributecountdowntime%28with_%29.md)
- [readAttributeCurrentPhase(with:)](mtrclusterovencavityoperationalstate/readattributecurrentphase%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterovencavityoperationalstate/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterovencavityoperationalstate/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeOperationalError(with:)](mtrclusterovencavityoperationalstate/readattributeoperationalerror%28with_%29.md)
- [readAttributeOperationalState(with:)](mtrclusterovencavityoperationalstate/readattributeoperationalstate%28with_%29.md)
- [readAttributeOperationalStateList(with:)](mtrclusterovencavityoperationalstate/readattributeoperationalstatelist%28with_%29.md)
- [readAttributePhaseList(with:)](mtrclusterovencavityoperationalstate/readattributephaselist%28with_%29.md)
- [start(with:expectedValues:expectedValueInterval:completion:)](mtrclusterovencavityoperationalstate/start%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [start(withExpectedValues:expectedValueInterval:completion:)](mtrclusterovencavityoperationalstate/start%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [stop(with:expectedValues:expectedValueInterval:completion:)](mtrclusterovencavityoperationalstate/stop%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [stop(withExpectedValues:expectedValueInterval:completion:)](mtrclusterovencavityoperationalstate/stop%28withexpectedvalues_expectedvalueinterval_completion_%29.md)

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

# MTRClusterOvenCavityOperationalState (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Oven Cavity Operational State This cluster supports remotely monitoring and, where supported, changing the operational state of an Oven.

## Declaration

```objectivec
@interface MTRClusterOvenCavityOperationalState : MTRGenericCluster
```

## Topics

### Instance Methods

- [initWithDevice:endpointID:queue:](mtrclusterovencavityoperationalstate/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithParams:](mtrclusterovencavityoperationalstate/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterovencavityoperationalstate/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterovencavityoperationalstate/readattributeclusterrevision%28with_%29.md)
- [readAttributeCountdownTimeWithParams:](mtrclusterovencavityoperationalstate/readattributecountdowntime%28with_%29.md)
- [readAttributeCurrentPhaseWithParams:](mtrclusterovencavityoperationalstate/readattributecurrentphase%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterovencavityoperationalstate/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterovencavityoperationalstate/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeOperationalErrorWithParams:](mtrclusterovencavityoperationalstate/readattributeoperationalerror%28with_%29.md)
- [readAttributeOperationalStateWithParams:](mtrclusterovencavityoperationalstate/readattributeoperationalstate%28with_%29.md)
- [readAttributeOperationalStateListWithParams:](mtrclusterovencavityoperationalstate/readattributeoperationalstatelist%28with_%29.md)
- [readAttributePhaseListWithParams:](mtrclusterovencavityoperationalstate/readattributephaselist%28with_%29.md)
- [startWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterovencavityoperationalstate/start%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [startWithExpectedValues:expectedValueInterval:completion:](mtrclusterovencavityoperationalstate/start%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [stopWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterovencavityoperationalstate/stop%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [stopWithExpectedValues:expectedValueInterval:completion:](mtrclusterovencavityoperationalstate/stop%28withexpectedvalues_expectedvalueinterval_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
