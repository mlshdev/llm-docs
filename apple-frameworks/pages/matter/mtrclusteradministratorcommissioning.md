> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusteradministratorcommissioning](https://developer.apple.com/documentation/matter/mtrclusteradministratorcommissioning)

# MTRClusterAdministratorCommissioning (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterAdministratorCommissioning
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclusteradministratorcommissioning/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclusteradministratorcommissioning/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [openBasicCommissioningWindow(with:expectedValues:expectedValueInterval:completion:)](mtrclusteradministratorcommissioning/openbasiccommissioningwindow%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [openBasicCommissioningWindow(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteradministratorcommissioning/openbasiccommissioningwindow%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [openWindow(with:expectedValues:expectedValueInterval:completion:)](mtrclusteradministratorcommissioning/openwindow%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [openWindow(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteradministratorcommissioning/openwindow%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandList(with:)](mtrclusteradministratorcommissioning/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAdminFabricIndex(with:)](mtrclusteradministratorcommissioning/readattributeadminfabricindex%28with_%29.md)
- [readAttributeAdminVendorId(with:)](mtrclusteradministratorcommissioning/readattributeadminvendorid%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusteradministratorcommissioning/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusteradministratorcommissioning/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusteradministratorcommissioning/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusteradministratorcommissioning/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeWindowStatus(with:)](mtrclusteradministratorcommissioning/readattributewindowstatus%28with_%29.md)
- [revokeCommissioning(with:expectedValues:expectedValueInterval:completion:)](mtrclusteradministratorcommissioning/revokecommissioning%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [revokeCommissioning(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteradministratorcommissioning/revokecommissioning%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [revokeCommissioning(withExpectedValues:expectedValueInterval:completion:)](mtrclusteradministratorcommissioning/revokecommissioning%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [revokeCommissioning(withExpectedValues:expectedValueInterval:completionHandler:)](mtrclusteradministratorcommissioning/revokecommissioning%28withexpectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.

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

# MTRClusterAdministratorCommissioning (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterAdministratorCommissioning : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclusteradministratorcommissioning/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclusteradministratorcommissioning/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [openBasicCommissioningWindowWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteradministratorcommissioning/openbasiccommissioningwindow%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [openBasicCommissioningWindowWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteradministratorcommissioning/openbasiccommissioningwindow%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [openCommissioningWindowWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteradministratorcommissioning/openwindow%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [openCommissioningWindowWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteradministratorcommissioning/openwindow%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandListWithParams:](mtrclusteradministratorcommissioning/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAdminFabricIndexWithParams:](mtrclusteradministratorcommissioning/readattributeadminfabricindex%28with_%29.md)
- [readAttributeAdminVendorIdWithParams:](mtrclusteradministratorcommissioning/readattributeadminvendorid%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusteradministratorcommissioning/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusteradministratorcommissioning/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusteradministratorcommissioning/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusteradministratorcommissioning/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeWindowStatusWithParams:](mtrclusteradministratorcommissioning/readattributewindowstatus%28with_%29.md)
- [revokeCommissioningWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteradministratorcommissioning/revokecommissioning%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [revokeCommissioningWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteradministratorcommissioning/revokecommissioning%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [revokeCommissioningWithExpectedValues:expectedValueInterval:completion:](mtrclusteradministratorcommissioning/revokecommissioning%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [revokeCommissioningWithExpectedValues:expectedValueInterval:completionHandler:](mtrclusteradministratorcommissioning/revokecommissioning%28withexpectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
