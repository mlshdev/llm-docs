> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterdeviceenergymanagementmode](https://developer.apple.com/documentation/matter/mtrclusterdeviceenergymanagementmode)

# MTRClusterDeviceEnergyManagementMode (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Device Energy Management Mode Attributes and commands for selecting a mode from a list of supported options.

## Declaration

```swift
class MTRClusterDeviceEnergyManagementMode
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclusterdeviceenergymanagementmode/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.

### Instance Methods

- [changeToMode(with:expectedValues:expectedValueInterval:completion:)](mtrclusterdeviceenergymanagementmode/changetomode%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandList(with:)](mtrclusterdeviceenergymanagementmode/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterdeviceenergymanagementmode/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterdeviceenergymanagementmode/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentMode(with:)](mtrclusterdeviceenergymanagementmode/readattributecurrentmode%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterdeviceenergymanagementmode/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterdeviceenergymanagementmode/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeSupportedModes(with:)](mtrclusterdeviceenergymanagementmode/readattributesupportedmodes%28with_%29.md)

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

# MTRClusterDeviceEnergyManagementMode (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Device Energy Management Mode Attributes and commands for selecting a mode from a list of supported options.

## Declaration

```objectivec
@interface MTRClusterDeviceEnergyManagementMode : MTRGenericCluster
```

## Topics

### Instance Methods

- [changeToModeWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterdeviceenergymanagementmode/changetomode%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [initWithDevice:endpointID:queue:](mtrclusterdeviceenergymanagementmode/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithParams:](mtrclusterdeviceenergymanagementmode/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterdeviceenergymanagementmode/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterdeviceenergymanagementmode/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentModeWithParams:](mtrclusterdeviceenergymanagementmode/readattributecurrentmode%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterdeviceenergymanagementmode/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterdeviceenergymanagementmode/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeSupportedModesWithParams:](mtrclusterdeviceenergymanagementmode/readattributesupportedmodes%28with_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
