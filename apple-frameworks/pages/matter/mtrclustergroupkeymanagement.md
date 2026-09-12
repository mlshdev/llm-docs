> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclustergroupkeymanagement](https://developer.apple.com/documentation/matter/mtrclustergroupkeymanagement)

# MTRClusterGroupKeyManagement (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterGroupKeyManagement
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclustergroupkeymanagement/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclustergroupkeymanagement/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [keySetRead(with:expectedValues:expectedValueInterval:completion:)](mtrclustergroupkeymanagement/keysetread%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [keySetRead(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclustergroupkeymanagement/keysetread%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [keySetReadAllIndices(with:expectedValues:expectedValueInterval:completion:)](mtrclustergroupkeymanagement/keysetreadallindices%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [keySetReadAllIndices(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclustergroupkeymanagement/keysetreadallindices%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [keySetReadAllIndices(withExpectedValues:expectedValueInterval:completion:)](mtrclustergroupkeymanagement/keysetreadallindices%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [keySetRemove(with:expectedValues:expectedValueInterval:completion:)](mtrclustergroupkeymanagement/keysetremove%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [keySetRemove(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclustergroupkeymanagement/keysetremove%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [keySetWrite(with:expectedValues:expectedValueInterval:completion:)](mtrclustergroupkeymanagement/keysetwrite%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [keySetWrite(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclustergroupkeymanagement/keysetwrite%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandList(with:)](mtrclustergroupkeymanagement/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclustergroupkeymanagement/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclustergroupkeymanagement/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclustergroupkeymanagement/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclustergroupkeymanagement/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeGroupKeyMap(with:)](mtrclustergroupkeymanagement/readattributegroupkeymap%28with_%29.md)
- [readAttributeGroupTable(with:)](mtrclustergroupkeymanagement/readattributegrouptable%28with_%29.md)
- [readAttributeMaxGroupKeysPerFabric(with:)](mtrclustergroupkeymanagement/readattributemaxgroupkeysperfabric%28with_%29.md)
- [readAttributeMaxGroupsPerFabric(with:)](mtrclustergroupkeymanagement/readattributemaxgroupsperfabric%28with_%29.md)
- [writeAttributeGroupKeyMap(withValue:expectedValueInterval:)](mtrclustergroupkeymanagement/writeattributegroupkeymap%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeGroupKeyMap(withValue:expectedValueInterval:params:)](mtrclustergroupkeymanagement/writeattributegroupkeymap%28withvalue_expectedvalueinterval_params_%29.md)

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

# MTRClusterGroupKeyManagement (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterGroupKeyManagement : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclustergroupkeymanagement/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclustergroupkeymanagement/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [keySetReadWithParams:expectedValues:expectedValueInterval:completion:](mtrclustergroupkeymanagement/keysetread%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [keySetReadWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclustergroupkeymanagement/keysetread%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [keySetReadAllIndicesWithParams:expectedValues:expectedValueInterval:completion:](mtrclustergroupkeymanagement/keysetreadallindices%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [keySetReadAllIndicesWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclustergroupkeymanagement/keysetreadallindices%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [keySetReadAllIndicesWithExpectedValues:expectedValueInterval:completion:](mtrclustergroupkeymanagement/keysetreadallindices%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [keySetRemoveWithParams:expectedValues:expectedValueInterval:completion:](mtrclustergroupkeymanagement/keysetremove%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [keySetRemoveWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclustergroupkeymanagement/keysetremove%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [keySetWriteWithParams:expectedValues:expectedValueInterval:completion:](mtrclustergroupkeymanagement/keysetwrite%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [keySetWriteWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclustergroupkeymanagement/keysetwrite%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandListWithParams:](mtrclustergroupkeymanagement/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclustergroupkeymanagement/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclustergroupkeymanagement/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclustergroupkeymanagement/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclustergroupkeymanagement/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeGroupKeyMapWithParams:](mtrclustergroupkeymanagement/readattributegroupkeymap%28with_%29.md)
- [readAttributeGroupTableWithParams:](mtrclustergroupkeymanagement/readattributegrouptable%28with_%29.md)
- [readAttributeMaxGroupKeysPerFabricWithParams:](mtrclustergroupkeymanagement/readattributemaxgroupkeysperfabric%28with_%29.md)
- [readAttributeMaxGroupsPerFabricWithParams:](mtrclustergroupkeymanagement/readattributemaxgroupsperfabric%28with_%29.md)
- [writeAttributeGroupKeyMapWithValue:expectedValueInterval:](mtrclustergroupkeymanagement/writeattributegroupkeymap%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeGroupKeyMapWithValue:expectedValueInterval:params:](mtrclustergroupkeymanagement/writeattributegroupkeymap%28withvalue_expectedvalueinterval_params_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
