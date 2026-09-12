> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterdescriptor](https://developer.apple.com/documentation/matter/mtrclusterdescriptor)

# MTRClusterDescriptor (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterDescriptor
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclusterdescriptor/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclusterdescriptor/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclusterdescriptor/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterdescriptor/readattributeattributelist%28with_%29.md)
- [readAttributeClientList(with:)](mtrclusterdescriptor/readattributeclientlist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterdescriptor/readattributeclusterrevision%28with_%29.md)
- [readAttributeDeviceList(with:)](mtrclusterdescriptor/readattributedevicelist%28with_%29.md): Deprecated.
- [readAttributeDeviceTypeList(with:)](mtrclusterdescriptor/readattributedevicetypelist%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterdescriptor/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterdescriptor/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributePartsList(with:)](mtrclusterdescriptor/readattributepartslist%28with_%29.md)
- [readAttributeServerList(with:)](mtrclusterdescriptor/readattributeserverlist%28with_%29.md)

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

# MTRClusterDescriptor (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterDescriptor : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclusterdescriptor/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclusterdescriptor/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandListWithParams:](mtrclusterdescriptor/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterdescriptor/readattributeattributelist%28with_%29.md)
- [readAttributeClientListWithParams:](mtrclusterdescriptor/readattributeclientlist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterdescriptor/readattributeclusterrevision%28with_%29.md)
- [readAttributeDeviceListWithParams:](mtrclusterdescriptor/readattributedevicelist%28with_%29.md): Deprecated.
- [readAttributeDeviceTypeListWithParams:](mtrclusterdescriptor/readattributedevicetypelist%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterdescriptor/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterdescriptor/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributePartsListWithParams:](mtrclusterdescriptor/readattributepartslist%28with_%29.md)
- [readAttributeServerListWithParams:](mtrclusterdescriptor/readattributeserverlist%28with_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
