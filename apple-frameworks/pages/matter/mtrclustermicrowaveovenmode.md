> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclustermicrowaveovenmode](https://developer.apple.com/documentation/matter/mtrclustermicrowaveovenmode)

# MTRClusterMicrowaveOvenMode (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Microwave Oven Mode Attributes and commands for selecting a mode from a list of supported options.

## Declaration

```swift
class MTRClusterMicrowaveOvenMode
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclustermicrowaveovenmode/init%28device_endpointid_queue_%29.md): The queue is currently unused, but may be used in the future for calling completions for command invocations if commands are added to this cluster.

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclustermicrowaveovenmode/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclustermicrowaveovenmode/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclustermicrowaveovenmode/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentMode(with:)](mtrclustermicrowaveovenmode/readattributecurrentmode%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclustermicrowaveovenmode/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclustermicrowaveovenmode/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeSupportedModes(with:)](mtrclustermicrowaveovenmode/readattributesupportedmodes%28with_%29.md)

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

# MTRClusterMicrowaveOvenMode (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Microwave Oven Mode Attributes and commands for selecting a mode from a list of supported options.

## Declaration

```objectivec
@interface MTRClusterMicrowaveOvenMode : MTRGenericCluster
```

## Topics

### Instance Methods

- [initWithDevice:endpointID:queue:](mtrclustermicrowaveovenmode/init%28device_endpointid_queue_%29.md): The queue is currently unused, but may be used in the future for calling completions for command invocations if commands are added to this cluster.
- [readAttributeAcceptedCommandListWithParams:](mtrclustermicrowaveovenmode/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclustermicrowaveovenmode/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclustermicrowaveovenmode/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentModeWithParams:](mtrclustermicrowaveovenmode/readattributecurrentmode%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclustermicrowaveovenmode/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclustermicrowaveovenmode/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeSupportedModesWithParams:](mtrclustermicrowaveovenmode/readattributesupportedmodes%28with_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
