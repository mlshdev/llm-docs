> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterethernetnetworkdiagnostics](https://developer.apple.com/documentation/matter/mtrclusterethernetnetworkdiagnostics)

# MTRClusterEthernetNetworkDiagnostics (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterEthernetNetworkDiagnostics
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclusterethernetnetworkdiagnostics/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclusterethernetnetworkdiagnostics/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclusterethernetnetworkdiagnostics/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterethernetnetworkdiagnostics/readattributeattributelist%28with_%29.md)
- [readAttributeCarrierDetect(with:)](mtrclusterethernetnetworkdiagnostics/readattributecarrierdetect%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterethernetnetworkdiagnostics/readattributeclusterrevision%28with_%29.md)
- [readAttributeCollisionCount(with:)](mtrclusterethernetnetworkdiagnostics/readattributecollisioncount%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterethernetnetworkdiagnostics/readattributefeaturemap%28with_%29.md)
- [readAttributeFullDuplex(with:)](mtrclusterethernetnetworkdiagnostics/readattributefullduplex%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterethernetnetworkdiagnostics/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeOverrunCount(with:)](mtrclusterethernetnetworkdiagnostics/readattributeoverruncount%28with_%29.md)
- [readAttributePHYRate(with:)](mtrclusterethernetnetworkdiagnostics/readattributephyrate%28with_%29.md)
- [readAttributePacketRxCount(with:)](mtrclusterethernetnetworkdiagnostics/readattributepacketrxcount%28with_%29.md)
- [readAttributePacketTxCount(with:)](mtrclusterethernetnetworkdiagnostics/readattributepackettxcount%28with_%29.md)
- [readAttributeTimeSinceReset(with:)](mtrclusterethernetnetworkdiagnostics/readattributetimesincereset%28with_%29.md)
- [readAttributeTxErrCount(with:)](mtrclusterethernetnetworkdiagnostics/readattributetxerrcount%28with_%29.md)
- [resetCounts(with:expectedValues:expectedValueInterval:completion:)](mtrclusterethernetnetworkdiagnostics/resetcounts%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [resetCounts(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusterethernetnetworkdiagnostics/resetcounts%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [resetCounts(withExpectedValues:expectedValueInterval:completion:)](mtrclusterethernetnetworkdiagnostics/resetcounts%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [resetCounts(withExpectedValues:expectedValueInterval:completionHandler:)](mtrclusterethernetnetworkdiagnostics/resetcounts%28withexpectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.

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

# MTRClusterEthernetNetworkDiagnostics (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterEthernetNetworkDiagnostics : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclusterethernetnetworkdiagnostics/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclusterethernetnetworkdiagnostics/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandListWithParams:](mtrclusterethernetnetworkdiagnostics/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterethernetnetworkdiagnostics/readattributeattributelist%28with_%29.md)
- [readAttributeCarrierDetectWithParams:](mtrclusterethernetnetworkdiagnostics/readattributecarrierdetect%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterethernetnetworkdiagnostics/readattributeclusterrevision%28with_%29.md)
- [readAttributeCollisionCountWithParams:](mtrclusterethernetnetworkdiagnostics/readattributecollisioncount%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterethernetnetworkdiagnostics/readattributefeaturemap%28with_%29.md)
- [readAttributeFullDuplexWithParams:](mtrclusterethernetnetworkdiagnostics/readattributefullduplex%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterethernetnetworkdiagnostics/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeOverrunCountWithParams:](mtrclusterethernetnetworkdiagnostics/readattributeoverruncount%28with_%29.md)
- [readAttributePHYRateWithParams:](mtrclusterethernetnetworkdiagnostics/readattributephyrate%28with_%29.md)
- [readAttributePacketRxCountWithParams:](mtrclusterethernetnetworkdiagnostics/readattributepacketrxcount%28with_%29.md)
- [readAttributePacketTxCountWithParams:](mtrclusterethernetnetworkdiagnostics/readattributepackettxcount%28with_%29.md)
- [readAttributeTimeSinceResetWithParams:](mtrclusterethernetnetworkdiagnostics/readattributetimesincereset%28with_%29.md)
- [readAttributeTxErrCountWithParams:](mtrclusterethernetnetworkdiagnostics/readattributetxerrcount%28with_%29.md)
- [resetCountsWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterethernetnetworkdiagnostics/resetcounts%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [resetCountsWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusterethernetnetworkdiagnostics/resetcounts%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [resetCountsWithExpectedValues:expectedValueInterval:completion:](mtrclusterethernetnetworkdiagnostics/resetcounts%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [resetCountsWithExpectedValues:expectedValueInterval:completionHandler:](mtrclusterethernetnetworkdiagnostics/resetcounts%28withexpectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
