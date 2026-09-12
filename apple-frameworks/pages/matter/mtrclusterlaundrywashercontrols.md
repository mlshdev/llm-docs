> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterlaundrywashercontrols](https://developer.apple.com/documentation/matter/mtrclusterlaundrywashercontrols)

# MTRClusterLaundryWasherControls (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Laundry Washer Controls This cluster supports remotely monitoring and controlling the different types of functionality available to a washing device, such as a washing machine.

## Declaration

```swift
class MTRClusterLaundryWasherControls
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclusterlaundrywashercontrols/init%28device_endpointid_queue_%29.md): The queue is currently unused, but may be used in the future for calling completions for command invocations if commands are added to this cluster.

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclusterlaundrywashercontrols/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterlaundrywashercontrols/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterlaundrywashercontrols/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterlaundrywashercontrols/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterlaundrywashercontrols/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeNumberOfRinses(with:)](mtrclusterlaundrywashercontrols/readattributenumberofrinses%28with_%29.md)
- [readAttributeSpinSpeedCurrent(with:)](mtrclusterlaundrywashercontrols/readattributespinspeedcurrent%28with_%29.md)
- [readAttributeSpinSpeeds(with:)](mtrclusterlaundrywashercontrols/readattributespinspeeds%28with_%29.md)
- [readAttributeSupportedRinses(with:)](mtrclusterlaundrywashercontrols/readattributesupportedrinses%28with_%29.md)
- [writeAttributeNumberOfRinses(withValue:expectedValueInterval:)](mtrclusterlaundrywashercontrols/writeattributenumberofrinses%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeNumberOfRinses(withValue:expectedValueInterval:params:)](mtrclusterlaundrywashercontrols/writeattributenumberofrinses%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeSpinSpeedCurrent(withValue:expectedValueInterval:)](mtrclusterlaundrywashercontrols/writeattributespinspeedcurrent%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeSpinSpeedCurrent(withValue:expectedValueInterval:params:)](mtrclusterlaundrywashercontrols/writeattributespinspeedcurrent%28withvalue_expectedvalueinterval_params_%29.md)

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

# MTRClusterLaundryWasherControls (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Laundry Washer Controls This cluster supports remotely monitoring and controlling the different types of functionality available to a washing device, such as a washing machine.

## Declaration

```objectivec
@interface MTRClusterLaundryWasherControls : MTRGenericCluster
```

## Topics

### Instance Methods

- [initWithDevice:endpointID:queue:](mtrclusterlaundrywashercontrols/init%28device_endpointid_queue_%29.md): The queue is currently unused, but may be used in the future for calling completions for command invocations if commands are added to this cluster.
- [readAttributeAcceptedCommandListWithParams:](mtrclusterlaundrywashercontrols/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterlaundrywashercontrols/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterlaundrywashercontrols/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterlaundrywashercontrols/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterlaundrywashercontrols/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeNumberOfRinsesWithParams:](mtrclusterlaundrywashercontrols/readattributenumberofrinses%28with_%29.md)
- [readAttributeSpinSpeedCurrentWithParams:](mtrclusterlaundrywashercontrols/readattributespinspeedcurrent%28with_%29.md)
- [readAttributeSpinSpeedsWithParams:](mtrclusterlaundrywashercontrols/readattributespinspeeds%28with_%29.md)
- [readAttributeSupportedRinsesWithParams:](mtrclusterlaundrywashercontrols/readattributesupportedrinses%28with_%29.md)
- [writeAttributeNumberOfRinsesWithValue:expectedValueInterval:](mtrclusterlaundrywashercontrols/writeattributenumberofrinses%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeNumberOfRinsesWithValue:expectedValueInterval:params:](mtrclusterlaundrywashercontrols/writeattributenumberofrinses%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeSpinSpeedCurrentWithValue:expectedValueInterval:](mtrclusterlaundrywashercontrols/writeattributespinspeedcurrent%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeSpinSpeedCurrentWithValue:expectedValueInterval:params:](mtrclusterlaundrywashercontrols/writeattributespinspeedcurrent%28withvalue_expectedvalueinterval_params_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
