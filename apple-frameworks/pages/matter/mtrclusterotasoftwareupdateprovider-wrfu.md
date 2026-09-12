> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterotasoftwareupdateprovider-wrfu](https://developer.apple.com/documentation/matter/mtrclusterotasoftwareupdateprovider-wrfu)

# MTRClusterOTASoftwareUpdateProvider (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
class MTRClusterOTASoftwareUpdateProvider
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclusterotasoftwareupdateprovider-wrfu/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [applyUpdateRequest(with:expectedValues:expectedValueInterval:completion:)](mtrclusterotasoftwareupdateprovider-wrfu/applyupdaterequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [notifyUpdateApplied(with:expectedValues:expectedValueInterval:completion:)](mtrclusterotasoftwareupdateprovider-wrfu/notifyupdateapplied%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [queryImage(with:expectedValues:expectedValueInterval:completion:)](mtrclusterotasoftwareupdateprovider-wrfu/queryimage%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandList(with:)](mtrclusterotasoftwareupdateprovider-wrfu/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterotasoftwareupdateprovider-wrfu/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterotasoftwareupdateprovider-wrfu/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterotasoftwareupdateprovider-wrfu/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterotasoftwareupdateprovider-wrfu/readattributegeneratedcommandlist%28with_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)

### Inherited By

- [MTRClusterOtaSoftwareUpdateProvider](mtrclusterotasoftwareupdateprovider-4p8us.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTRClusterOTASoftwareUpdateProvider (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
@interface MTRClusterOTASoftwareUpdateProvider : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpointID:queue:](mtrclusterotasoftwareupdateprovider-wrfu/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [applyUpdateRequestWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterotasoftwareupdateprovider-wrfu/applyupdaterequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [notifyUpdateAppliedWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterotasoftwareupdateprovider-wrfu/notifyupdateapplied%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [queryImageWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterotasoftwareupdateprovider-wrfu/queryimage%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandListWithParams:](mtrclusterotasoftwareupdateprovider-wrfu/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterotasoftwareupdateprovider-wrfu/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterotasoftwareupdateprovider-wrfu/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterotasoftwareupdateprovider-wrfu/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterotasoftwareupdateprovider-wrfu/readattributegeneratedcommandlist%28with_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)

### Inherited By

- [MTRClusterOtaSoftwareUpdateProvider](mtrclusterotasoftwareupdateprovider-4p8us.md)
