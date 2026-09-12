> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterenergyevsemode](https://developer.apple.com/documentation/matter/mtrclusterenergyevsemode)

# MTRClusterEnergyEVSEMode (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Energy EVSE Mode Attributes and commands for selecting a mode from a list of supported options.

## Declaration

```swift
class MTRClusterEnergyEVSEMode
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclusterenergyevsemode/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.

### Instance Methods

- [changeToMode(with:expectedValues:expectedValueInterval:completion:)](mtrclusterenergyevsemode/changetomode%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandList(with:)](mtrclusterenergyevsemode/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterenergyevsemode/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterenergyevsemode/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentMode(with:)](mtrclusterenergyevsemode/readattributecurrentmode%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterenergyevsemode/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterenergyevsemode/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeSupportedModes(with:)](mtrclusterenergyevsemode/readattributesupportedmodes%28with_%29.md)

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

# MTRClusterEnergyEVSEMode (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Energy EVSE Mode Attributes and commands for selecting a mode from a list of supported options.

## Declaration

```objectivec
@interface MTRClusterEnergyEVSEMode : MTRGenericCluster
```

## Topics

### Instance Methods

- [changeToModeWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterenergyevsemode/changetomode%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [initWithDevice:endpointID:queue:](mtrclusterenergyevsemode/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithParams:](mtrclusterenergyevsemode/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterenergyevsemode/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterenergyevsemode/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentModeWithParams:](mtrclusterenergyevsemode/readattributecurrentmode%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterenergyevsemode/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterenergyevsemode/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeSupportedModesWithParams:](mtrclusterenergyevsemode/readattributesupportedmodes%28with_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
