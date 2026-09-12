> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclustermodeselect](https://developer.apple.com/documentation/matter/mtrclustermodeselect)

# MTRClusterModeSelect (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterModeSelect
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclustermodeselect/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclustermodeselect/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [changeToMode(with:expectedValues:expectedValueInterval:completion:)](mtrclustermodeselect/changetomode%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [changeToMode(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclustermodeselect/changetomode%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandList(with:)](mtrclustermodeselect/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclustermodeselect/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclustermodeselect/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentMode(with:)](mtrclustermodeselect/readattributecurrentmode%28with_%29.md)
- [readAttributeDescription(with:)](mtrclustermodeselect/readattributedescription%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclustermodeselect/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclustermodeselect/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeOnMode(with:)](mtrclustermodeselect/readattributeonmode%28with_%29.md)
- [readAttributeStandardNamespace(with:)](mtrclustermodeselect/readattributestandardnamespace%28with_%29.md)
- [readAttributeStartUpMode(with:)](mtrclustermodeselect/readattributestartupmode%28with_%29.md)
- [readAttributeSupportedModes(with:)](mtrclustermodeselect/readattributesupportedmodes%28with_%29.md)
- [writeAttributeOnMode(withValue:expectedValueInterval:)](mtrclustermodeselect/writeattributeonmode%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeOnMode(withValue:expectedValueInterval:params:)](mtrclustermodeselect/writeattributeonmode%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeStartUpMode(withValue:expectedValueInterval:)](mtrclustermodeselect/writeattributestartupmode%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeStartUpMode(withValue:expectedValueInterval:params:)](mtrclustermodeselect/writeattributestartupmode%28withvalue_expectedvalueinterval_params_%29.md)

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

# MTRClusterModeSelect (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterModeSelect : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclustermodeselect/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclustermodeselect/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [changeToModeWithParams:expectedValues:expectedValueInterval:completion:](mtrclustermodeselect/changetomode%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [changeToModeWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclustermodeselect/changetomode%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandListWithParams:](mtrclustermodeselect/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclustermodeselect/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclustermodeselect/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentModeWithParams:](mtrclustermodeselect/readattributecurrentmode%28with_%29.md)
- [readAttributeDescriptionWithParams:](mtrclustermodeselect/readattributedescription%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclustermodeselect/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclustermodeselect/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeOnModeWithParams:](mtrclustermodeselect/readattributeonmode%28with_%29.md)
- [readAttributeStandardNamespaceWithParams:](mtrclustermodeselect/readattributestandardnamespace%28with_%29.md)
- [readAttributeStartUpModeWithParams:](mtrclustermodeselect/readattributestartupmode%28with_%29.md)
- [readAttributeSupportedModesWithParams:](mtrclustermodeselect/readattributesupportedmodes%28with_%29.md)
- [writeAttributeOnModeWithValue:expectedValueInterval:](mtrclustermodeselect/writeattributeonmode%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeOnModeWithValue:expectedValueInterval:params:](mtrclustermodeselect/writeattributeonmode%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeStartUpModeWithValue:expectedValueInterval:](mtrclustermodeselect/writeattributestartupmode%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeStartUpModeWithValue:expectedValueInterval:params:](mtrclustermodeselect/writeattributestartupmode%28withvalue_expectedvalueinterval_params_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
