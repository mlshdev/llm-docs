> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclustercommissionercontrol](https://developer.apple.com/documentation/matter/mtrclustercommissionercontrol)

# MTRClusterCommissionerControl (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Commissioner Control Supports the ability for clients to request the commissioning of themselves or other nodes onto a fabric which the cluster server can commission onto.

## Declaration

```swift
class MTRClusterCommissionerControl
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclustercommissionercontrol/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.

### Instance Methods

- [commissionNode(with:expectedValues:expectedValueInterval:completion:)](mtrclustercommissionercontrol/commissionnode%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandList(with:)](mtrclustercommissionercontrol/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclustercommissionercontrol/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclustercommissionercontrol/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclustercommissionercontrol/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclustercommissionercontrol/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeSupportedDeviceCategories(with:)](mtrclustercommissionercontrol/readattributesupporteddevicecategories%28with_%29.md)
- [requestCommissioningApproval(with:expectedValues:expectedValueInterval:completion:)](mtrclustercommissionercontrol/requestcommissioningapproval%28with_expectedvalues_expectedvalueinterval_completion_%29.md)

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

# MTRClusterCommissionerControl (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Commissioner Control Supports the ability for clients to request the commissioning of themselves or other nodes onto a fabric which the cluster server can commission onto.

## Declaration

```objectivec
@interface MTRClusterCommissionerControl : MTRGenericCluster
```

## Topics

### Instance Methods

- [commissionNodeWithParams:expectedValues:expectedValueInterval:completion:](mtrclustercommissionercontrol/commissionnode%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [initWithDevice:endpointID:queue:](mtrclustercommissionercontrol/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithParams:](mtrclustercommissionercontrol/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclustercommissionercontrol/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclustercommissionercontrol/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclustercommissionercontrol/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclustercommissionercontrol/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeSupportedDeviceCategoriesWithParams:](mtrclustercommissionercontrol/readattributesupporteddevicecategories%28with_%29.md)
- [requestCommissioningApprovalWithParams:expectedValues:expectedValueInterval:completion:](mtrclustercommissionercontrol/requestcommissioningapproval%28with_expectedvalues_expectedvalueinterval_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
