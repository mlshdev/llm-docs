> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusteraccesscontrol](https://developer.apple.com/documentation/matter/mtrclusteraccesscontrol)

# MTRClusterAccessControl (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterAccessControl
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclusteraccesscontrol/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclusteraccesscontrol/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeACL(with:)](mtrclusteraccesscontrol/readattributeacl%28with_%29-4l4no.md)
- [readAttributeAcceptedCommandList(with:)](mtrclusteraccesscontrol/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAccessControlEntriesPerFabric(with:)](mtrclusteraccesscontrol/readattributeaccesscontrolentriesperfabric%28with_%29.md)
- [readAttributeAcl(with:)](mtrclusteraccesscontrol/readattributeacl%28with_%29-7usq4.md): Deprecated.
- [readAttributeAttributeList(with:)](mtrclusteraccesscontrol/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusteraccesscontrol/readattributeclusterrevision%28with_%29.md)
- [readAttributeExtension(with:)](mtrclusteraccesscontrol/readattributeextension%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusteraccesscontrol/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusteraccesscontrol/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeSubjectsPerAccessControlEntry(with:)](mtrclusteraccesscontrol/readattributesubjectsperaccesscontrolentry%28with_%29.md)
- [readAttributeTargetsPerAccessControlEntry(with:)](mtrclusteraccesscontrol/readattributetargetsperaccesscontrolentry%28with_%29.md)
- [writeAttributeACL(withValue:expectedValueInterval:)](mtrclusteraccesscontrol/writeattributeacl%28withvalue_expectedvalueinterval_%29-69lwc.md)
- [writeAttributeACL(withValue:expectedValueInterval:params:)](mtrclusteraccesscontrol/writeattributeacl%28withvalue_expectedvalueinterval_params_%29-o1ih.md)
- [writeAttributeAcl(withValue:expectedValueInterval:)](mtrclusteraccesscontrol/writeattributeacl%28withvalue_expectedvalueinterval_%29-6povm.md): Deprecated.
- [writeAttributeAcl(withValue:expectedValueInterval:params:)](mtrclusteraccesscontrol/writeattributeacl%28withvalue_expectedvalueinterval_params_%29-9dn9j.md): Deprecated.
- [writeAttributeExtension(withValue:expectedValueInterval:)](mtrclusteraccesscontrol/writeattributeextension%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeExtension(withValue:expectedValueInterval:params:)](mtrclusteraccesscontrol/writeattributeextension%28withvalue_expectedvalueinterval_params_%29.md)
- [readAttributeARL(with:)](mtrclusteraccesscontrol/readattributearl%28with_%29.md)
- [readAttributeCommissioningARL(with:)](mtrclusteraccesscontrol/readattributecommissioningarl%28with_%29.md)
- [reviewFabricRestrictions(with:expectedValues:expectedValueInterval:completion:)](mtrclusteraccesscontrol/reviewfabricrestrictions%28with_expectedvalues_expectedvalueinterval_completion_%29.md)

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

# MTRClusterAccessControl (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterAccessControl : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclusteraccesscontrol/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclusteraccesscontrol/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeACLWithParams:](mtrclusteraccesscontrol/readattributeacl%28with_%29-4l4no.md)
- [readAttributeAcceptedCommandListWithParams:](mtrclusteraccesscontrol/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAccessControlEntriesPerFabricWithParams:](mtrclusteraccesscontrol/readattributeaccesscontrolentriesperfabric%28with_%29.md)
- [readAttributeAclWithParams:](mtrclusteraccesscontrol/readattributeacl%28with_%29-7usq4.md): Deprecated.
- [readAttributeAttributeListWithParams:](mtrclusteraccesscontrol/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusteraccesscontrol/readattributeclusterrevision%28with_%29.md)
- [readAttributeExtensionWithParams:](mtrclusteraccesscontrol/readattributeextension%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusteraccesscontrol/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusteraccesscontrol/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeSubjectsPerAccessControlEntryWithParams:](mtrclusteraccesscontrol/readattributesubjectsperaccesscontrolentry%28with_%29.md)
- [readAttributeTargetsPerAccessControlEntryWithParams:](mtrclusteraccesscontrol/readattributetargetsperaccesscontrolentry%28with_%29.md)
- [writeAttributeACLWithValue:expectedValueInterval:](mtrclusteraccesscontrol/writeattributeacl%28withvalue_expectedvalueinterval_%29-69lwc.md)
- [writeAttributeACLWithValue:expectedValueInterval:params:](mtrclusteraccesscontrol/writeattributeacl%28withvalue_expectedvalueinterval_params_%29-o1ih.md)
- [writeAttributeAclWithValue:expectedValueInterval:](mtrclusteraccesscontrol/writeattributeacl%28withvalue_expectedvalueinterval_%29-6povm.md): Deprecated.
- [writeAttributeAclWithValue:expectedValueInterval:params:](mtrclusteraccesscontrol/writeattributeacl%28withvalue_expectedvalueinterval_params_%29-9dn9j.md): Deprecated.
- [writeAttributeExtensionWithValue:expectedValueInterval:](mtrclusteraccesscontrol/writeattributeextension%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeExtensionWithValue:expectedValueInterval:params:](mtrclusteraccesscontrol/writeattributeextension%28withvalue_expectedvalueinterval_params_%29.md)
- [readAttributeARLWithParams:](mtrclusteraccesscontrol/readattributearl%28with_%29.md)
- [readAttributeCommissioningARLWithParams:](mtrclusteraccesscontrol/readattributecommissioningarl%28with_%29.md)
- [reviewFabricRestrictionsWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteraccesscontrol/reviewfabricrestrictions%28with_expectedvalues_expectedvalueinterval_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
