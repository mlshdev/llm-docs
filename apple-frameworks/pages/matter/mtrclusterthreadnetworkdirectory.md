> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterthreadnetworkdirectory](https://developer.apple.com/documentation/matter/mtrclusterthreadnetworkdirectory)

# MTRClusterThreadNetworkDirectory (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Thread Network Directory Manages the names and credentials of Thread networks visible to the user.

## Declaration

```swift
class MTRClusterThreadNetworkDirectory
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclusterthreadnetworkdirectory/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.

### Instance Methods

- [addNetwork(with:expectedValues:expectedValueInterval:completion:)](mtrclusterthreadnetworkdirectory/addnetwork%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [getOperationalDataset(with:expectedValues:expectedValueInterval:completion:)](mtrclusterthreadnetworkdirectory/getoperationaldataset%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandList(with:)](mtrclusterthreadnetworkdirectory/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterthreadnetworkdirectory/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterthreadnetworkdirectory/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterthreadnetworkdirectory/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterthreadnetworkdirectory/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributePreferredExtendedPanID(with:)](mtrclusterthreadnetworkdirectory/readattributepreferredextendedpanid%28with_%29.md)
- [readAttributeThreadNetworkTableSize(with:)](mtrclusterthreadnetworkdirectory/readattributethreadnetworktablesize%28with_%29.md)
- [readAttributeThreadNetworks(with:)](mtrclusterthreadnetworkdirectory/readattributethreadnetworks%28with_%29.md)
- [removeNetwork(with:expectedValues:expectedValueInterval:completion:)](mtrclusterthreadnetworkdirectory/removenetwork%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [writeAttributePreferredExtendedPanID(withValue:expectedValueInterval:)](mtrclusterthreadnetworkdirectory/writeattributepreferredextendedpanid%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributePreferredExtendedPanID(withValue:expectedValueInterval:params:)](mtrclusterthreadnetworkdirectory/writeattributepreferredextendedpanid%28withvalue_expectedvalueinterval_params_%29.md)

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

# MTRClusterThreadNetworkDirectory (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Thread Network Directory Manages the names and credentials of Thread networks visible to the user.

## Declaration

```objectivec
@interface MTRClusterThreadNetworkDirectory : MTRGenericCluster
```

## Topics

### Instance Methods

- [addNetworkWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterthreadnetworkdirectory/addnetwork%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [getOperationalDatasetWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterthreadnetworkdirectory/getoperationaldataset%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [initWithDevice:endpointID:queue:](mtrclusterthreadnetworkdirectory/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithParams:](mtrclusterthreadnetworkdirectory/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterthreadnetworkdirectory/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterthreadnetworkdirectory/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterthreadnetworkdirectory/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterthreadnetworkdirectory/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributePreferredExtendedPanIDWithParams:](mtrclusterthreadnetworkdirectory/readattributepreferredextendedpanid%28with_%29.md)
- [readAttributeThreadNetworkTableSizeWithParams:](mtrclusterthreadnetworkdirectory/readattributethreadnetworktablesize%28with_%29.md)
- [readAttributeThreadNetworksWithParams:](mtrclusterthreadnetworkdirectory/readattributethreadnetworks%28with_%29.md)
- [removeNetworkWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterthreadnetworkdirectory/removenetwork%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [writeAttributePreferredExtendedPanIDWithValue:expectedValueInterval:](mtrclusterthreadnetworkdirectory/writeattributepreferredextendedpanid%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributePreferredExtendedPanIDWithValue:expectedValueInterval:params:](mtrclusterthreadnetworkdirectory/writeattributepreferredextendedpanid%28withvalue_expectedvalueinterval_params_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
