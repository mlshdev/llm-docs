> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterwaterheatermode](https://developer.apple.com/documentation/matter/mtrclusterwaterheatermode)

# MTRClusterWaterHeaterMode (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Water Heater Mode Attributes and commands for selecting a mode from a list of supported options.

## Declaration

```swift
class MTRClusterWaterHeaterMode
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclusterwaterheatermode/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.

### Instance Methods

- [changeToMode(with:expectedValues:expectedValueInterval:completion:)](mtrclusterwaterheatermode/changetomode%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandList(with:)](mtrclusterwaterheatermode/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterwaterheatermode/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterwaterheatermode/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentMode(with:)](mtrclusterwaterheatermode/readattributecurrentmode%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterwaterheatermode/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterwaterheatermode/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeSupportedModes(with:)](mtrclusterwaterheatermode/readattributesupportedmodes%28with_%29.md)

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

# MTRClusterWaterHeaterMode (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Water Heater Mode Attributes and commands for selecting a mode from a list of supported options.

## Declaration

```objectivec
@interface MTRClusterWaterHeaterMode : MTRGenericCluster
```

## Topics

### Instance Methods

- [changeToModeWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterwaterheatermode/changetomode%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [initWithDevice:endpointID:queue:](mtrclusterwaterheatermode/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithParams:](mtrclusterwaterheatermode/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterwaterheatermode/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterwaterheatermode/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentModeWithParams:](mtrclusterwaterheatermode/readattributecurrentmode%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterwaterheatermode/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterwaterheatermode/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeSupportedModesWithParams:](mtrclusterwaterheatermode/readattributesupportedmodes%28with_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
