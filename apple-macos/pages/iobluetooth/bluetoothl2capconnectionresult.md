> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/bluetoothl2capconnectionresult](https://developer.apple.com/documentation/iobluetooth/bluetoothl2capconnectionresult)

# BluetoothL2CAPConnectionResult (Swift)

**Framework:** IOBluetooth  
**Kind:** Structure  
**Availability:** macOS

## Declaration

```swift
struct BluetoothL2CAPConnectionResult
```

## Topics

### Constants

- [kBluetoothL2CAPConnectionResultPending](kbluetoothl2capconnectionresultpending.md)
- [kBluetoothL2CAPConnectionResultRefusedNoResources](kbluetoothl2capconnectionresultrefusednoresources.md)
- [kBluetoothL2CAPConnectionResultRefusedPSMNotSupported](kbluetoothl2capconnectionresultrefusedpsmnotsupported.md)
- [kBluetoothL2CAPConnectionResultRefusedSecurityBlock](kbluetoothl2capconnectionresultrefusedsecurityblock.md)
- [kBluetoothL2CAPConnectionResultSuccessful](kbluetoothl2capconnectionresultsuccessful.md)
- [kBluetoothL2CAPConnectionResultRefusedInvalidSourceCID](kbluetoothl2capconnectionresultrefusedinvalidsourcecid.md)
- [kBluetoothL2CAPConnectionResultRefusedReserved](kbluetoothl2capconnectionresultrefusedreserved.md)
- [kBluetoothL2CAPConnectionResultRefusedSourceCIDAlreadyAllocated](kbluetoothl2capconnectionresultrefusedsourcecidalreadyallocated.md)

### Initializers

- [init(\_:)](bluetoothl2capconnectionresult/init%28__%29.md)
- [init(rawValue:)](bluetoothl2capconnectionresult/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](bluetoothl2capconnectionresult/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Enumerations

- [BluetoothAMPCommandRejectReason](bluetoothampcommandrejectreason.md)
- [BluetoothAMPCreatePhysicalLinkResponseStatus](bluetoothampcreatephysicallinkresponsestatus.md)
- [BluetoothAMPDisconnectPhysicalLinkResponseStatus](bluetoothampdisconnectphysicallinkresponsestatus.md)
- [BluetoothAMPDiscoverResponseControllerStatus](bluetoothampdiscoverresponsecontrollerstatus.md)
- [BluetoothAMPGetAssocResponseStatus](bluetoothampgetassocresponsestatus.md)
- [BluetoothAMPGetInfoResponseStatus](bluetoothampgetinforesponsestatus.md)
- [BluetoothAMPManagerCode](bluetoothampmanagercode.md)
- [BluetoothHCIPowerState](bluetoothhcipowerstate.md)
- [BluetoothL2CAPCommandCode](bluetoothl2capcommandcode.md)
- [BluetoothL2CAPCommandRejectReason](bluetoothl2capcommandrejectreason.md)
- [BluetoothL2CAPConfigurationOption](bluetoothl2capconfigurationoption.md)
- [BluetoothL2CAPConfigurationResult](bluetoothl2capconfigurationresult.md)
- [BluetoothL2CAPConfigurationRetransmissionAndFlowControlFlags](bluetoothl2capconfigurationretransmissionandflowcontrolflags.md)
- [BluetoothL2CAPConnectionStatus](bluetoothl2capconnectionstatus.md)
- [BluetoothL2CAPInformationExtendedFeaturesMask](bluetoothl2capinformationextendedfeaturesmask.md)

# BluetoothL2CAPConnectionResult (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Enumeration  
**Availability:** macOS

## Declaration

```objectivec
typedef enum { ... } BluetoothL2CAPConnectionResult;
```

## Topics

### Constants

- [kBluetoothL2CAPConnectionResultPending](kbluetoothl2capconnectionresultpending.md)
- [kBluetoothL2CAPConnectionResultRefusedNoResources](kbluetoothl2capconnectionresultrefusednoresources.md)
- [kBluetoothL2CAPConnectionResultRefusedPSMNotSupported](kbluetoothl2capconnectionresultrefusedpsmnotsupported.md)
- [kBluetoothL2CAPConnectionResultRefusedSecurityBlock](kbluetoothl2capconnectionresultrefusedsecurityblock.md)
- [kBluetoothL2CAPConnectionResultSuccessful](kbluetoothl2capconnectionresultsuccessful.md)
- [kBluetoothL2CAPConnectionResultRefusedInvalidSourceCID](kbluetoothl2capconnectionresultrefusedinvalidsourcecid.md)
- [kBluetoothL2CAPConnectionResultRefusedReserved](kbluetoothl2capconnectionresultrefusedreserved.md)
- [kBluetoothL2CAPConnectionResultRefusedSourceCIDAlreadyAllocated](kbluetoothl2capconnectionresultrefusedsourcecidalreadyallocated.md)

## See Also

### Enumerations

- [BluetoothAMPCommandRejectReason](bluetoothampcommandrejectreason.md)
- [BluetoothAMPCreatePhysicalLinkResponseStatus](bluetoothampcreatephysicallinkresponsestatus.md)
- [BluetoothAMPDisconnectPhysicalLinkResponseStatus](bluetoothampdisconnectphysicallinkresponsestatus.md)
- [BluetoothAMPDiscoverResponseControllerStatus](bluetoothampdiscoverresponsecontrollerstatus.md)
- [BluetoothAMPGetAssocResponseStatus](bluetoothampgetassocresponsestatus.md)
- [BluetoothAMPGetInfoResponseStatus](bluetoothampgetinforesponsestatus.md)
- [BluetoothAMPManagerCode](bluetoothampmanagercode.md)
- [BluetoothHCIPowerState](bluetoothhcipowerstate.md)
- [BluetoothL2CAPCommandCode](bluetoothl2capcommandcode.md)
- [BluetoothL2CAPCommandRejectReason](bluetoothl2capcommandrejectreason.md)
- [BluetoothL2CAPConfigurationOption](bluetoothl2capconfigurationoption.md)
- [BluetoothL2CAPConfigurationResult](bluetoothl2capconfigurationresult.md)
- [BluetoothL2CAPConfigurationRetransmissionAndFlowControlFlags](bluetoothl2capconfigurationretransmissionandflowcontrolflags.md)
- [BluetoothL2CAPConnectionStatus](bluetoothl2capconnectionstatus.md)
- [BluetoothL2CAPInformationExtendedFeaturesMask](bluetoothl2capinformationextendedfeaturesmask.md)
