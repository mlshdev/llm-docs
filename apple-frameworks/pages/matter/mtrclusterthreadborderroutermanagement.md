> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterthreadborderroutermanagement](https://developer.apple.com/documentation/matter/mtrclusterthreadborderroutermanagement)

# MTRClusterThreadBorderRouterManagement (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Thread Border Router Management Manage the Thread network of Thread Border Router

## Declaration

```swift
class MTRClusterThreadBorderRouterManagement
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclusterthreadborderroutermanagement/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.

### Instance Methods

- [getActiveDatasetRequest(with:expectedValues:expectedValueInterval:completion:)](mtrclusterthreadborderroutermanagement/getactivedatasetrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [getActiveDatasetRequest(withExpectedValues:expectedValueInterval:completion:)](mtrclusterthreadborderroutermanagement/getactivedatasetrequest%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [getPendingDatasetRequest(with:expectedValues:expectedValueInterval:completion:)](mtrclusterthreadborderroutermanagement/getpendingdatasetrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [getPendingDatasetRequest(withExpectedValues:expectedValueInterval:completion:)](mtrclusterthreadborderroutermanagement/getpendingdatasetrequest%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandList(with:)](mtrclusterthreadborderroutermanagement/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeActiveDatasetTimestamp(with:)](mtrclusterthreadborderroutermanagement/readattributeactivedatasettimestamp%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterthreadborderroutermanagement/readattributeattributelist%28with_%29.md)
- [readAttributeBorderAgentID(with:)](mtrclusterthreadborderroutermanagement/readattributeborderagentid%28with_%29.md)
- [readAttributeBorderRouterName(with:)](mtrclusterthreadborderroutermanagement/readattributeborderroutername%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterthreadborderroutermanagement/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterthreadborderroutermanagement/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterthreadborderroutermanagement/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeInterfaceEnabled(with:)](mtrclusterthreadborderroutermanagement/readattributeinterfaceenabled%28with_%29.md)
- [readAttributePendingDatasetTimestamp(with:)](mtrclusterthreadborderroutermanagement/readattributependingdatasettimestamp%28with_%29.md)
- [readAttributeThreadVersion(with:)](mtrclusterthreadborderroutermanagement/readattributethreadversion%28with_%29.md)
- [setActiveDatasetRequestWith(\_:expectedValues:expectedValueInterval:completion:)](mtrclusterthreadborderroutermanagement/setactivedatasetrequestwith%28__expectedvalues_expectedvalueinterval_completion_%29.md)
- [setPendingDatasetRequestWith(\_:expectedValues:expectedValueInterval:completion:)](mtrclusterthreadborderroutermanagement/setpendingdatasetrequestwith%28__expectedvalues_expectedvalueinterval_completion_%29.md)

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

# MTRClusterThreadBorderRouterManagement (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Thread Border Router Management Manage the Thread network of Thread Border Router

## Declaration

```objectivec
@interface MTRClusterThreadBorderRouterManagement : MTRGenericCluster
```

## Topics

### Instance Methods

- [getActiveDatasetRequestWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterthreadborderroutermanagement/getactivedatasetrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [getActiveDatasetRequestWithExpectedValues:expectedValueInterval:completion:](mtrclusterthreadborderroutermanagement/getactivedatasetrequest%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [getPendingDatasetRequestWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterthreadborderroutermanagement/getpendingdatasetrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [getPendingDatasetRequestWithExpectedValues:expectedValueInterval:completion:](mtrclusterthreadborderroutermanagement/getpendingdatasetrequest%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [initWithDevice:endpointID:queue:](mtrclusterthreadborderroutermanagement/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithParams:](mtrclusterthreadborderroutermanagement/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeActiveDatasetTimestampWithParams:](mtrclusterthreadborderroutermanagement/readattributeactivedatasettimestamp%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterthreadborderroutermanagement/readattributeattributelist%28with_%29.md)
- [readAttributeBorderAgentIDWithParams:](mtrclusterthreadborderroutermanagement/readattributeborderagentid%28with_%29.md)
- [readAttributeBorderRouterNameWithParams:](mtrclusterthreadborderroutermanagement/readattributeborderroutername%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterthreadborderroutermanagement/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterthreadborderroutermanagement/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterthreadborderroutermanagement/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeInterfaceEnabledWithParams:](mtrclusterthreadborderroutermanagement/readattributeinterfaceenabled%28with_%29.md)
- [readAttributePendingDatasetTimestampWithParams:](mtrclusterthreadborderroutermanagement/readattributependingdatasettimestamp%28with_%29.md)
- [readAttributeThreadVersionWithParams:](mtrclusterthreadborderroutermanagement/readattributethreadversion%28with_%29.md)
- [setActiveDatasetRequestWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterthreadborderroutermanagement/setactivedatasetrequestwith%28__expectedvalues_expectedvalueinterval_completion_%29.md)
- [setPendingDatasetRequestWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterthreadborderroutermanagement/setpendingdatasetrequestwith%28__expectedvalues_expectedvalueinterval_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
