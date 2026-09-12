> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclustergroups](https://developer.apple.com/documentation/matter/mtrclustergroups)

# MTRClusterGroups (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterGroups
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclustergroups/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclustergroups/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [addGroup(with:expectedValues:expectedValueInterval:completion:)](mtrclustergroups/addgroup%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [addGroup(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclustergroups/addgroup%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [addGroupIfIdentifying(with:expectedValues:expectedValueInterval:completion:)](mtrclustergroups/addgroupifidentifying%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [addGroupIfIdentifying(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclustergroups/addgroupifidentifying%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [getGroupMembership(with:expectedValues:expectedValueInterval:completion:)](mtrclustergroups/getgroupmembership%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [getGroupMembership(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclustergroups/getgroupmembership%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandList(with:)](mtrclustergroups/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclustergroups/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclustergroups/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclustergroups/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclustergroups/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeNameSupport(with:)](mtrclustergroups/readattributenamesupport%28with_%29.md)
- [removeAllGroups(with:expectedValues:expectedValueInterval:completion:)](mtrclustergroups/removeallgroups%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [removeAllGroups(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclustergroups/removeallgroups%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [removeAllGroups(withExpectedValues:expectedValueInterval:completion:)](mtrclustergroups/removeallgroups%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [removeAllGroups(withExpectedValues:expectedValueInterval:completionHandler:)](mtrclustergroups/removeallgroups%28withexpectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [removeGroup(with:expectedValues:expectedValueInterval:completion:)](mtrclustergroups/removegroup%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [removeGroup(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclustergroups/removegroup%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [viewGroup(with:expectedValues:expectedValueInterval:completion:)](mtrclustergroups/viewgroup%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [viewGroup(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclustergroups/viewgroup%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.

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

# MTRClusterGroups (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterGroups : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclustergroups/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclustergroups/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [addGroupWithParams:expectedValues:expectedValueInterval:completion:](mtrclustergroups/addgroup%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [addGroupWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclustergroups/addgroup%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [addGroupIfIdentifyingWithParams:expectedValues:expectedValueInterval:completion:](mtrclustergroups/addgroupifidentifying%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [addGroupIfIdentifyingWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclustergroups/addgroupifidentifying%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [getGroupMembershipWithParams:expectedValues:expectedValueInterval:completion:](mtrclustergroups/getgroupmembership%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [getGroupMembershipWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclustergroups/getgroupmembership%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandListWithParams:](mtrclustergroups/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclustergroups/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclustergroups/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclustergroups/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclustergroups/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeNameSupportWithParams:](mtrclustergroups/readattributenamesupport%28with_%29.md)
- [removeAllGroupsWithParams:expectedValues:expectedValueInterval:completion:](mtrclustergroups/removeallgroups%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [removeAllGroupsWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclustergroups/removeallgroups%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [removeAllGroupsWithExpectedValues:expectedValueInterval:completion:](mtrclustergroups/removeallgroups%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [removeAllGroupsWithExpectedValues:expectedValueInterval:completionHandler:](mtrclustergroups/removeallgroups%28withexpectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [removeGroupWithParams:expectedValues:expectedValueInterval:completion:](mtrclustergroups/removegroup%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [removeGroupWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclustergroups/removegroup%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [viewGroupWithParams:expectedValues:expectedValueInterval:completion:](mtrclustergroups/viewgroup%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [viewGroupWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclustergroups/viewgroup%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
