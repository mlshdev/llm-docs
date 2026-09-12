> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterbridgeddevicebasicinformation](https://developer.apple.com/documentation/matter/mtrclusterbridgeddevicebasicinformation)

# MTRClusterBridgedDeviceBasicInformation (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
class MTRClusterBridgedDeviceBasicInformation
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclusterbridgeddevicebasicinformation/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclusterbridgeddevicebasicinformation/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterbridgeddevicebasicinformation/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterbridgeddevicebasicinformation/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterbridgeddevicebasicinformation/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterbridgeddevicebasicinformation/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeHardwareVersion(with:)](mtrclusterbridgeddevicebasicinformation/readattributehardwareversion%28with_%29.md)
- [readAttributeHardwareVersionString(with:)](mtrclusterbridgeddevicebasicinformation/readattributehardwareversionstring%28with_%29.md)
- [readAttributeManufacturingDate(with:)](mtrclusterbridgeddevicebasicinformation/readattributemanufacturingdate%28with_%29.md)
- [readAttributeNodeLabel(with:)](mtrclusterbridgeddevicebasicinformation/readattributenodelabel%28with_%29.md)
- [readAttributePartNumber(with:)](mtrclusterbridgeddevicebasicinformation/readattributepartnumber%28with_%29.md)
- [readAttributeProductAppearance(with:)](mtrclusterbridgeddevicebasicinformation/readattributeproductappearance%28with_%29.md)
- [readAttributeProductLabel(with:)](mtrclusterbridgeddevicebasicinformation/readattributeproductlabel%28with_%29.md)
- [readAttributeProductName(with:)](mtrclusterbridgeddevicebasicinformation/readattributeproductname%28with_%29.md)
- [readAttributeProductURL(with:)](mtrclusterbridgeddevicebasicinformation/readattributeproducturl%28with_%29.md)
- [readAttributeReachable(with:)](mtrclusterbridgeddevicebasicinformation/readattributereachable%28with_%29.md)
- [readAttributeSerialNumber(with:)](mtrclusterbridgeddevicebasicinformation/readattributeserialnumber%28with_%29.md)
- [readAttributeSoftwareVersion(with:)](mtrclusterbridgeddevicebasicinformation/readattributesoftwareversion%28with_%29.md)
- [readAttributeSoftwareVersionString(with:)](mtrclusterbridgeddevicebasicinformation/readattributesoftwareversionstring%28with_%29.md)
- [readAttributeUniqueID(with:)](mtrclusterbridgeddevicebasicinformation/readattributeuniqueid%28with_%29.md)
- [readAttributeVendorID(with:)](mtrclusterbridgeddevicebasicinformation/readattributevendorid%28with_%29.md)
- [readAttributeVendorName(with:)](mtrclusterbridgeddevicebasicinformation/readattributevendorname%28with_%29.md)
- [writeAttributeNodeLabel(withValue:expectedValueInterval:)](mtrclusterbridgeddevicebasicinformation/writeattributenodelabel%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeNodeLabel(withValue:expectedValueInterval:params:)](mtrclusterbridgeddevicebasicinformation/writeattributenodelabel%28withvalue_expectedvalueinterval_params_%29.md)
- [keepActive(with:expectedValues:expectedValueInterval:completion:)](mtrclusterbridgeddevicebasicinformation/keepactive%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeProductID(with:)](mtrclusterbridgeddevicebasicinformation/readattributeproductid%28with_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)

### Inherited By

- [MTRClusterBridgedDeviceBasic](mtrclusterbridgeddevicebasic.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTRClusterBridgedDeviceBasicInformation (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
@interface MTRClusterBridgedDeviceBasicInformation : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpointID:queue:](mtrclusterbridgeddevicebasicinformation/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandListWithParams:](mtrclusterbridgeddevicebasicinformation/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterbridgeddevicebasicinformation/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterbridgeddevicebasicinformation/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterbridgeddevicebasicinformation/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterbridgeddevicebasicinformation/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeHardwareVersionWithParams:](mtrclusterbridgeddevicebasicinformation/readattributehardwareversion%28with_%29.md)
- [readAttributeHardwareVersionStringWithParams:](mtrclusterbridgeddevicebasicinformation/readattributehardwareversionstring%28with_%29.md)
- [readAttributeManufacturingDateWithParams:](mtrclusterbridgeddevicebasicinformation/readattributemanufacturingdate%28with_%29.md)
- [readAttributeNodeLabelWithParams:](mtrclusterbridgeddevicebasicinformation/readattributenodelabel%28with_%29.md)
- [readAttributePartNumberWithParams:](mtrclusterbridgeddevicebasicinformation/readattributepartnumber%28with_%29.md)
- [readAttributeProductAppearanceWithParams:](mtrclusterbridgeddevicebasicinformation/readattributeproductappearance%28with_%29.md)
- [readAttributeProductLabelWithParams:](mtrclusterbridgeddevicebasicinformation/readattributeproductlabel%28with_%29.md)
- [readAttributeProductNameWithParams:](mtrclusterbridgeddevicebasicinformation/readattributeproductname%28with_%29.md)
- [readAttributeProductURLWithParams:](mtrclusterbridgeddevicebasicinformation/readattributeproducturl%28with_%29.md)
- [readAttributeReachableWithParams:](mtrclusterbridgeddevicebasicinformation/readattributereachable%28with_%29.md)
- [readAttributeSerialNumberWithParams:](mtrclusterbridgeddevicebasicinformation/readattributeserialnumber%28with_%29.md)
- [readAttributeSoftwareVersionWithParams:](mtrclusterbridgeddevicebasicinformation/readattributesoftwareversion%28with_%29.md)
- [readAttributeSoftwareVersionStringWithParams:](mtrclusterbridgeddevicebasicinformation/readattributesoftwareversionstring%28with_%29.md)
- [readAttributeUniqueIDWithParams:](mtrclusterbridgeddevicebasicinformation/readattributeuniqueid%28with_%29.md)
- [readAttributeVendorIDWithParams:](mtrclusterbridgeddevicebasicinformation/readattributevendorid%28with_%29.md)
- [readAttributeVendorNameWithParams:](mtrclusterbridgeddevicebasicinformation/readattributevendorname%28with_%29.md)
- [writeAttributeNodeLabelWithValue:expectedValueInterval:](mtrclusterbridgeddevicebasicinformation/writeattributenodelabel%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeNodeLabelWithValue:expectedValueInterval:params:](mtrclusterbridgeddevicebasicinformation/writeattributenodelabel%28withvalue_expectedvalueinterval_params_%29.md)
- [keepActiveWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterbridgeddevicebasicinformation/keepactive%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeProductIDWithParams:](mtrclusterbridgeddevicebasicinformation/readattributeproductid%28with_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)

### Inherited By

- [MTRClusterBridgedDeviceBasic](mtrclusterbridgeddevicebasic.md)
