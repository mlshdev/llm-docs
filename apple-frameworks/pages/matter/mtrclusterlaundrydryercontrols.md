> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterlaundrydryercontrols](https://developer.apple.com/documentation/matter/mtrclusterlaundrydryercontrols)

# MTRClusterLaundryDryerControls (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Laundry Dryer Controls This cluster provides a way to access options associated with the operation of a laundry dryer device type.

## Declaration

```swift
class MTRClusterLaundryDryerControls
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclusterlaundrydryercontrols/init%28device_endpointid_queue_%29.md): The queue is currently unused, but may be used in the future for calling completions for command invocations if commands are added to this cluster.

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclusterlaundrydryercontrols/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterlaundrydryercontrols/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterlaundrydryercontrols/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterlaundrydryercontrols/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterlaundrydryercontrols/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeSelectedDrynessLevel(with:)](mtrclusterlaundrydryercontrols/readattributeselecteddrynesslevel%28with_%29.md)
- [readAttributeSupportedDrynessLevels(with:)](mtrclusterlaundrydryercontrols/readattributesupporteddrynesslevels%28with_%29.md)
- [writeAttributeSelectedDrynessLevel(withValue:expectedValueInterval:)](mtrclusterlaundrydryercontrols/writeattributeselecteddrynesslevel%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeSelectedDrynessLevel(withValue:expectedValueInterval:params:)](mtrclusterlaundrydryercontrols/writeattributeselecteddrynesslevel%28withvalue_expectedvalueinterval_params_%29.md)

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

# MTRClusterLaundryDryerControls (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Laundry Dryer Controls This cluster provides a way to access options associated with the operation of a laundry dryer device type.

## Declaration

```objectivec
@interface MTRClusterLaundryDryerControls : MTRGenericCluster
```

## Topics

### Instance Methods

- [initWithDevice:endpointID:queue:](mtrclusterlaundrydryercontrols/init%28device_endpointid_queue_%29.md): The queue is currently unused, but may be used in the future for calling completions for command invocations if commands are added to this cluster.
- [readAttributeAcceptedCommandListWithParams:](mtrclusterlaundrydryercontrols/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterlaundrydryercontrols/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterlaundrydryercontrols/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterlaundrydryercontrols/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterlaundrydryercontrols/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeSelectedDrynessLevelWithParams:](mtrclusterlaundrydryercontrols/readattributeselecteddrynesslevel%28with_%29.md)
- [readAttributeSupportedDrynessLevelsWithParams:](mtrclusterlaundrydryercontrols/readattributesupporteddrynesslevels%28with_%29.md)
- [writeAttributeSelectedDrynessLevelWithValue:expectedValueInterval:](mtrclusterlaundrydryercontrols/writeattributeselecteddrynesslevel%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeSelectedDrynessLevelWithValue:expectedValueInterval:params:](mtrclusterlaundrydryercontrols/writeattributeselecteddrynesslevel%28withvalue_expectedvalueinterval_params_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
