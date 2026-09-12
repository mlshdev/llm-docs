> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterbasicinformation](https://developer.apple.com/documentation/matter/mtrclusterbasicinformation)

# MTRClusterBasicInformation (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
class MTRClusterBasicInformation
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclusterbasicinformation/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclusterbasicinformation/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterbasicinformation/readattributeattributelist%28with_%29.md)
- [readAttributeCapabilityMinima(with:)](mtrclusterbasicinformation/readattributecapabilityminima%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterbasicinformation/readattributeclusterrevision%28with_%29.md)
- [readAttributeDataModelRevision(with:)](mtrclusterbasicinformation/readattributedatamodelrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterbasicinformation/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterbasicinformation/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeHardwareVersion(with:)](mtrclusterbasicinformation/readattributehardwareversion%28with_%29.md)
- [readAttributeHardwareVersionString(with:)](mtrclusterbasicinformation/readattributehardwareversionstring%28with_%29.md)
- [readAttributeLocalConfigDisabled(with:)](mtrclusterbasicinformation/readattributelocalconfigdisabled%28with_%29.md)
- [readAttributeLocation(with:)](mtrclusterbasicinformation/readattributelocation%28with_%29.md)
- [readAttributeManufacturingDate(with:)](mtrclusterbasicinformation/readattributemanufacturingdate%28with_%29.md)
- [readAttributeNodeLabel(with:)](mtrclusterbasicinformation/readattributenodelabel%28with_%29.md)
- [readAttributePartNumber(with:)](mtrclusterbasicinformation/readattributepartnumber%28with_%29.md)
- [readAttributeProductAppearance(with:)](mtrclusterbasicinformation/readattributeproductappearance%28with_%29.md)
- [readAttributeProductID(with:)](mtrclusterbasicinformation/readattributeproductid%28with_%29.md)
- [readAttributeProductLabel(with:)](mtrclusterbasicinformation/readattributeproductlabel%28with_%29.md)
- [readAttributeProductName(with:)](mtrclusterbasicinformation/readattributeproductname%28with_%29.md)
- [readAttributeProductURL(with:)](mtrclusterbasicinformation/readattributeproducturl%28with_%29.md)
- [readAttributeReachable(with:)](mtrclusterbasicinformation/readattributereachable%28with_%29.md)
- [readAttributeSerialNumber(with:)](mtrclusterbasicinformation/readattributeserialnumber%28with_%29.md)
- [readAttributeSoftwareVersion(with:)](mtrclusterbasicinformation/readattributesoftwareversion%28with_%29.md)
- [readAttributeSoftwareVersionString(with:)](mtrclusterbasicinformation/readattributesoftwareversionstring%28with_%29.md)
- [readAttributeUniqueID(with:)](mtrclusterbasicinformation/readattributeuniqueid%28with_%29.md)
- [readAttributeVendorID(with:)](mtrclusterbasicinformation/readattributevendorid%28with_%29.md)
- [readAttributeVendorName(with:)](mtrclusterbasicinformation/readattributevendorname%28with_%29.md)
- [writeAttributeLocalConfigDisabled(withValue:expectedValueInterval:)](mtrclusterbasicinformation/writeattributelocalconfigdisabled%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeLocalConfigDisabled(withValue:expectedValueInterval:params:)](mtrclusterbasicinformation/writeattributelocalconfigdisabled%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeLocation(withValue:expectedValueInterval:)](mtrclusterbasicinformation/writeattributelocation%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeLocation(withValue:expectedValueInterval:params:)](mtrclusterbasicinformation/writeattributelocation%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeNodeLabel(withValue:expectedValueInterval:)](mtrclusterbasicinformation/writeattributenodelabel%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeNodeLabel(withValue:expectedValueInterval:params:)](mtrclusterbasicinformation/writeattributenodelabel%28withvalue_expectedvalueinterval_params_%29.md)
- [readAttributeMaxPathsPerInvoke(with:)](mtrclusterbasicinformation/readattributemaxpathsperinvoke%28with_%29.md)
- [readAttributeSpecificationVersion(with:)](mtrclusterbasicinformation/readattributespecificationversion%28with_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)

### Inherited By

- [MTRClusterBasic](mtrclusterbasic.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTRClusterBasicInformation (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
@interface MTRClusterBasicInformation : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpointID:queue:](mtrclusterbasicinformation/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandListWithParams:](mtrclusterbasicinformation/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterbasicinformation/readattributeattributelist%28with_%29.md)
- [readAttributeCapabilityMinimaWithParams:](mtrclusterbasicinformation/readattributecapabilityminima%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterbasicinformation/readattributeclusterrevision%28with_%29.md)
- [readAttributeDataModelRevisionWithParams:](mtrclusterbasicinformation/readattributedatamodelrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterbasicinformation/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterbasicinformation/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeHardwareVersionWithParams:](mtrclusterbasicinformation/readattributehardwareversion%28with_%29.md)
- [readAttributeHardwareVersionStringWithParams:](mtrclusterbasicinformation/readattributehardwareversionstring%28with_%29.md)
- [readAttributeLocalConfigDisabledWithParams:](mtrclusterbasicinformation/readattributelocalconfigdisabled%28with_%29.md)
- [readAttributeLocationWithParams:](mtrclusterbasicinformation/readattributelocation%28with_%29.md)
- [readAttributeManufacturingDateWithParams:](mtrclusterbasicinformation/readattributemanufacturingdate%28with_%29.md)
- [readAttributeNodeLabelWithParams:](mtrclusterbasicinformation/readattributenodelabel%28with_%29.md)
- [readAttributePartNumberWithParams:](mtrclusterbasicinformation/readattributepartnumber%28with_%29.md)
- [readAttributeProductAppearanceWithParams:](mtrclusterbasicinformation/readattributeproductappearance%28with_%29.md)
- [readAttributeProductIDWithParams:](mtrclusterbasicinformation/readattributeproductid%28with_%29.md)
- [readAttributeProductLabelWithParams:](mtrclusterbasicinformation/readattributeproductlabel%28with_%29.md)
- [readAttributeProductNameWithParams:](mtrclusterbasicinformation/readattributeproductname%28with_%29.md)
- [readAttributeProductURLWithParams:](mtrclusterbasicinformation/readattributeproducturl%28with_%29.md)
- [readAttributeReachableWithParams:](mtrclusterbasicinformation/readattributereachable%28with_%29.md)
- [readAttributeSerialNumberWithParams:](mtrclusterbasicinformation/readattributeserialnumber%28with_%29.md)
- [readAttributeSoftwareVersionWithParams:](mtrclusterbasicinformation/readattributesoftwareversion%28with_%29.md)
- [readAttributeSoftwareVersionStringWithParams:](mtrclusterbasicinformation/readattributesoftwareversionstring%28with_%29.md)
- [readAttributeUniqueIDWithParams:](mtrclusterbasicinformation/readattributeuniqueid%28with_%29.md)
- [readAttributeVendorIDWithParams:](mtrclusterbasicinformation/readattributevendorid%28with_%29.md)
- [readAttributeVendorNameWithParams:](mtrclusterbasicinformation/readattributevendorname%28with_%29.md)
- [writeAttributeLocalConfigDisabledWithValue:expectedValueInterval:](mtrclusterbasicinformation/writeattributelocalconfigdisabled%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeLocalConfigDisabledWithValue:expectedValueInterval:params:](mtrclusterbasicinformation/writeattributelocalconfigdisabled%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeLocationWithValue:expectedValueInterval:](mtrclusterbasicinformation/writeattributelocation%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeLocationWithValue:expectedValueInterval:params:](mtrclusterbasicinformation/writeattributelocation%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeNodeLabelWithValue:expectedValueInterval:](mtrclusterbasicinformation/writeattributenodelabel%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeNodeLabelWithValue:expectedValueInterval:params:](mtrclusterbasicinformation/writeattributenodelabel%28withvalue_expectedvalueinterval_params_%29.md)
- [readAttributeMaxPathsPerInvokeWithParams:](mtrclusterbasicinformation/readattributemaxpathsperinvoke%28with_%29.md)
- [readAttributeSpecificationVersionWithParams:](mtrclusterbasicinformation/readattributespecificationversion%28with_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)

### Inherited By

- [MTRClusterBasic](mtrclusterbasic.md)
