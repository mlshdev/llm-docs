> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterovenmode](https://developer.apple.com/documentation/matter/mtrclusterovenmode)

# MTRClusterOvenMode (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Oven Mode Attributes and commands for selecting a mode from a list of supported options.

## Declaration

```swift
class MTRClusterOvenMode
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclusterovenmode/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.

### Instance Methods

- [changeToMode(with:expectedValues:expectedValueInterval:completion:)](mtrclusterovenmode/changetomode%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandList(with:)](mtrclusterovenmode/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterovenmode/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterovenmode/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentMode(with:)](mtrclusterovenmode/readattributecurrentmode%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterovenmode/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterovenmode/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeSupportedModes(with:)](mtrclusterovenmode/readattributesupportedmodes%28with_%29.md)

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

# MTRClusterOvenMode (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Oven Mode Attributes and commands for selecting a mode from a list of supported options.

## Declaration

```objectivec
@interface MTRClusterOvenMode : MTRGenericCluster
```

## Topics

### Instance Methods

- [changeToModeWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterovenmode/changetomode%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [initWithDevice:endpointID:queue:](mtrclusterovenmode/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithParams:](mtrclusterovenmode/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterovenmode/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterovenmode/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentModeWithParams:](mtrclusterovenmode/readattributecurrentmode%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterovenmode/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterovenmode/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeSupportedModesWithParams:](mtrclusterovenmode/readattributesupportedmodes%28with_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
