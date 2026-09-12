> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclustergeneralcommissioning](https://developer.apple.com/documentation/matter/mtrclustergeneralcommissioning)

# MTRClusterGeneralCommissioning (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterGeneralCommissioning
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclustergeneralcommissioning/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclustergeneralcommissioning/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [armFailSafe(with:expectedValues:expectedValueInterval:completion:)](mtrclustergeneralcommissioning/armfailsafe%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [armFailSafe(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclustergeneralcommissioning/armfailsafe%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [commissioningComplete(with:expectedValues:expectedValueInterval:completion:)](mtrclustergeneralcommissioning/commissioningcomplete%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [commissioningComplete(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclustergeneralcommissioning/commissioningcomplete%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [commissioningComplete(withExpectedValues:expectedValueInterval:completion:)](mtrclustergeneralcommissioning/commissioningcomplete%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [commissioningComplete(withExpectedValues:expectedValueInterval:completionHandler:)](mtrclustergeneralcommissioning/commissioningcomplete%28withexpectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandList(with:)](mtrclustergeneralcommissioning/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclustergeneralcommissioning/readattributeattributelist%28with_%29.md)
- [readAttributeBasicCommissioningInfo(with:)](mtrclustergeneralcommissioning/readattributebasiccommissioninginfo%28with_%29.md)
- [readAttributeBreadcrumb(with:)](mtrclustergeneralcommissioning/readattributebreadcrumb%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclustergeneralcommissioning/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclustergeneralcommissioning/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclustergeneralcommissioning/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeLocationCapability(with:)](mtrclustergeneralcommissioning/readattributelocationcapability%28with_%29.md)
- [readAttributeRegulatoryConfig(with:)](mtrclustergeneralcommissioning/readattributeregulatoryconfig%28with_%29.md)
- [readAttributeSupportsConcurrentConnection(with:)](mtrclustergeneralcommissioning/readattributesupportsconcurrentconnection%28with_%29.md)
- [setRegulatoryConfigWith(\_:expectedValues:expectedValueInterval:completion:)](mtrclustergeneralcommissioning/setregulatoryconfigwith%28__expectedvalues_expectedvalueinterval_completion_%29.md)
- [setRegulatoryConfigWith(\_:expectedValues:expectedValueInterval:completionHandler:)](mtrclustergeneralcommissioning/setregulatoryconfigwith%28__expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [writeAttributeBreadcrumb(withValue:expectedValueInterval:)](mtrclustergeneralcommissioning/writeattributebreadcrumb%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeBreadcrumb(withValue:expectedValueInterval:params:)](mtrclustergeneralcommissioning/writeattributebreadcrumb%28withvalue_expectedvalueinterval_params_%29.md)

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

# MTRClusterGeneralCommissioning (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterGeneralCommissioning : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclustergeneralcommissioning/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclustergeneralcommissioning/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [armFailSafeWithParams:expectedValues:expectedValueInterval:completion:](mtrclustergeneralcommissioning/armfailsafe%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [armFailSafeWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclustergeneralcommissioning/armfailsafe%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [commissioningCompleteWithParams:expectedValues:expectedValueInterval:completion:](mtrclustergeneralcommissioning/commissioningcomplete%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [commissioningCompleteWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclustergeneralcommissioning/commissioningcomplete%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [commissioningCompleteWithExpectedValues:expectedValueInterval:completion:](mtrclustergeneralcommissioning/commissioningcomplete%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [commissioningCompleteWithExpectedValues:expectedValueInterval:completionHandler:](mtrclustergeneralcommissioning/commissioningcomplete%28withexpectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandListWithParams:](mtrclustergeneralcommissioning/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclustergeneralcommissioning/readattributeattributelist%28with_%29.md)
- [readAttributeBasicCommissioningInfoWithParams:](mtrclustergeneralcommissioning/readattributebasiccommissioninginfo%28with_%29.md)
- [readAttributeBreadcrumbWithParams:](mtrclustergeneralcommissioning/readattributebreadcrumb%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclustergeneralcommissioning/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclustergeneralcommissioning/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclustergeneralcommissioning/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeLocationCapabilityWithParams:](mtrclustergeneralcommissioning/readattributelocationcapability%28with_%29.md)
- [readAttributeRegulatoryConfigWithParams:](mtrclustergeneralcommissioning/readattributeregulatoryconfig%28with_%29.md)
- [readAttributeSupportsConcurrentConnectionWithParams:](mtrclustergeneralcommissioning/readattributesupportsconcurrentconnection%28with_%29.md)
- [setRegulatoryConfigWithParams:expectedValues:expectedValueInterval:completion:](mtrclustergeneralcommissioning/setregulatoryconfigwith%28__expectedvalues_expectedvalueinterval_completion_%29.md)
- [setRegulatoryConfigWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclustergeneralcommissioning/setregulatoryconfigwith%28__expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [writeAttributeBreadcrumbWithValue:expectedValueInterval:](mtrclustergeneralcommissioning/writeattributebreadcrumb%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeBreadcrumbWithValue:expectedValueInterval:params:](mtrclustergeneralcommissioning/writeattributebreadcrumb%28withvalue_expectedvalueinterval_params_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
