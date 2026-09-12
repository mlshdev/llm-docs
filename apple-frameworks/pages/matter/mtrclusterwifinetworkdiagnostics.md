> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterwifinetworkdiagnostics](https://developer.apple.com/documentation/matter/mtrclusterwifinetworkdiagnostics)

# MTRClusterWiFiNetworkDiagnostics (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterWiFiNetworkDiagnostics
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclusterwifinetworkdiagnostics/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclusterwifinetworkdiagnostics/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclusterwifinetworkdiagnostics/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterwifinetworkdiagnostics/readattributeattributelist%28with_%29.md)
- [readAttributeBSSID(with:)](mtrclusterwifinetworkdiagnostics/readattributebssid%28with_%29-ckgu.md)
- [readAttributeBeaconLostCount(with:)](mtrclusterwifinetworkdiagnostics/readattributebeaconlostcount%28with_%29.md)
- [readAttributeBeaconRxCount(with:)](mtrclusterwifinetworkdiagnostics/readattributebeaconrxcount%28with_%29.md)
- [readAttributeBssid(with:)](mtrclusterwifinetworkdiagnostics/readattributebssid%28with_%29-6zw56.md): Deprecated.
- [readAttributeChannelNumber(with:)](mtrclusterwifinetworkdiagnostics/readattributechannelnumber%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterwifinetworkdiagnostics/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentMaxRate(with:)](mtrclusterwifinetworkdiagnostics/readattributecurrentmaxrate%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterwifinetworkdiagnostics/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterwifinetworkdiagnostics/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeOverrunCount(with:)](mtrclusterwifinetworkdiagnostics/readattributeoverruncount%28with_%29.md)
- [readAttributePacketMulticastRxCount(with:)](mtrclusterwifinetworkdiagnostics/readattributepacketmulticastrxcount%28with_%29.md)
- [readAttributePacketMulticastTxCount(with:)](mtrclusterwifinetworkdiagnostics/readattributepacketmulticasttxcount%28with_%29.md)
- [readAttributePacketUnicastRxCount(with:)](mtrclusterwifinetworkdiagnostics/readattributepacketunicastrxcount%28with_%29.md)
- [readAttributePacketUnicastTxCount(with:)](mtrclusterwifinetworkdiagnostics/readattributepacketunicasttxcount%28with_%29.md)
- [readAttributeRSSI(with:)](mtrclusterwifinetworkdiagnostics/readattributerssi%28with_%29-8yq7w.md)
- [readAttributeRssi(with:)](mtrclusterwifinetworkdiagnostics/readattributerssi%28with_%29-939pp.md): Deprecated.
- [readAttributeSecurityType(with:)](mtrclusterwifinetworkdiagnostics/readattributesecuritytype%28with_%29.md)
- [readAttributeWiFiVersion(with:)](mtrclusterwifinetworkdiagnostics/readattributewifiversion%28with_%29.md)
- [resetCounts(with:expectedValues:expectedValueInterval:completion:)](mtrclusterwifinetworkdiagnostics/resetcounts%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [resetCounts(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusterwifinetworkdiagnostics/resetcounts%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [resetCounts(withExpectedValues:expectedValueInterval:completion:)](mtrclusterwifinetworkdiagnostics/resetcounts%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [resetCounts(withExpectedValues:expectedValueInterval:completionHandler:)](mtrclusterwifinetworkdiagnostics/resetcounts%28withexpectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.

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

# MTRClusterWiFiNetworkDiagnostics (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterWiFiNetworkDiagnostics : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclusterwifinetworkdiagnostics/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclusterwifinetworkdiagnostics/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandListWithParams:](mtrclusterwifinetworkdiagnostics/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterwifinetworkdiagnostics/readattributeattributelist%28with_%29.md)
- [readAttributeBSSIDWithParams:](mtrclusterwifinetworkdiagnostics/readattributebssid%28with_%29-ckgu.md)
- [readAttributeBeaconLostCountWithParams:](mtrclusterwifinetworkdiagnostics/readattributebeaconlostcount%28with_%29.md)
- [readAttributeBeaconRxCountWithParams:](mtrclusterwifinetworkdiagnostics/readattributebeaconrxcount%28with_%29.md)
- [readAttributeBssidWithParams:](mtrclusterwifinetworkdiagnostics/readattributebssid%28with_%29-6zw56.md): Deprecated.
- [readAttributeChannelNumberWithParams:](mtrclusterwifinetworkdiagnostics/readattributechannelnumber%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterwifinetworkdiagnostics/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentMaxRateWithParams:](mtrclusterwifinetworkdiagnostics/readattributecurrentmaxrate%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterwifinetworkdiagnostics/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterwifinetworkdiagnostics/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeOverrunCountWithParams:](mtrclusterwifinetworkdiagnostics/readattributeoverruncount%28with_%29.md)
- [readAttributePacketMulticastRxCountWithParams:](mtrclusterwifinetworkdiagnostics/readattributepacketmulticastrxcount%28with_%29.md)
- [readAttributePacketMulticastTxCountWithParams:](mtrclusterwifinetworkdiagnostics/readattributepacketmulticasttxcount%28with_%29.md)
- [readAttributePacketUnicastRxCountWithParams:](mtrclusterwifinetworkdiagnostics/readattributepacketunicastrxcount%28with_%29.md)
- [readAttributePacketUnicastTxCountWithParams:](mtrclusterwifinetworkdiagnostics/readattributepacketunicasttxcount%28with_%29.md)
- [readAttributeRSSIWithParams:](mtrclusterwifinetworkdiagnostics/readattributerssi%28with_%29-8yq7w.md)
- [readAttributeRssiWithParams:](mtrclusterwifinetworkdiagnostics/readattributerssi%28with_%29-939pp.md): Deprecated.
- [readAttributeSecurityTypeWithParams:](mtrclusterwifinetworkdiagnostics/readattributesecuritytype%28with_%29.md)
- [readAttributeWiFiVersionWithParams:](mtrclusterwifinetworkdiagnostics/readattributewifiversion%28with_%29.md)
- [resetCountsWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterwifinetworkdiagnostics/resetcounts%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [resetCountsWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusterwifinetworkdiagnostics/resetcounts%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [resetCountsWithExpectedValues:expectedValueInterval:completion:](mtrclusterwifinetworkdiagnostics/resetcounts%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [resetCountsWithExpectedValues:expectedValueInterval:completionHandler:](mtrclusterwifinetworkdiagnostics/resetcounts%28withexpectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
