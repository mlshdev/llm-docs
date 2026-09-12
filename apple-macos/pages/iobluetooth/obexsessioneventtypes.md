> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexsessioneventtypes](https://developer.apple.com/documentation/iobluetooth/obexsessioneventtypes)

# OBEXSessionEventTypes (Swift)

**Framework:** IOBluetooth  
**Kind:** Structure  
**Availability:** macOS

Type identifiers for OBEX sessions.

## Declaration

```swift
struct OBEXSessionEventTypes
```

<a id="overview"></a>

## Overview

When a new session event occurs, your selector (or C callback) will be given an OBEXSessionEvent pointer, and in it will be a ‘type’ field with one of the following types in it. Based on that type, you can then read the corresponding field in the union to get out interesting data for that event type. For example, if the type of an event is a ‘kOBEXSessionEventTypeConnectCommandResponseReceived’, you should look in the ‘OBEXConnectCommandResponseData’ part of the structure’s union to find more information pased to you in the event. Note that some you will never see, depending on the type of session you are using - a client or server. If you are a client (most likely case), you will never see the “Command” events, but instead you will only receive the “CommandResponse” events since you will be the issuer oft he commands, not the receiver of them. Both types of sessions will receive error type events.

## Topics

### Constants

- [kOBEXSessionEventTypeAbortCommandReceived](kobexsessioneventtypeabortcommandreceived.md)
- [kOBEXSessionEventTypeAbortCommandResponseReceived](kobexsessioneventtypeabortcommandresponsereceived.md)
- [kOBEXSessionEventTypeConnectCommandReceived](kobexsessioneventtypeconnectcommandreceived.md)
- [kOBEXSessionEventTypeConnectCommandResponseReceived](kobexsessioneventtypeconnectcommandresponsereceived.md)
- [kOBEXSessionEventTypeDisconnectCommandReceived](kobexsessioneventtypedisconnectcommandreceived.md)
- [kOBEXSessionEventTypeDisconnectCommandResponseReceived](kobexsessioneventtypedisconnectcommandresponsereceived.md)
- [kOBEXSessionEventTypeError](kobexsessioneventtypeerror.md)
- [kOBEXSessionEventTypeGetCommandReceived](kobexsessioneventtypegetcommandreceived.md)
- [kOBEXSessionEventTypeGetCommandResponseReceived](kobexsessioneventtypegetcommandresponsereceived.md)
- [kOBEXSessionEventTypePutCommandReceived](kobexsessioneventtypeputcommandreceived.md)
- [kOBEXSessionEventTypePutCommandResponseReceived](kobexsessioneventtypeputcommandresponsereceived.md)
- [kOBEXSessionEventTypeSetPathCommandReceived](kobexsessioneventtypesetpathcommandreceived.md)
- [kOBEXSessionEventTypeSetPathCommandResponseReceived](kobexsessioneventtypesetpathcommandresponsereceived.md)

### Initializers

- [init(\_:)](obexsessioneventtypes/init%28__%29.md)
- [init(rawValue:)](obexsessioneventtypes/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](obexsessioneventtypes/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Data Types

- [BluetoothAFHMode](bluetoothafhmode.md)
- [BluetoothAirMode](bluetoothairmode.md)
- [BluetoothAllowRoleSwitch](bluetoothallowroleswitch.md)
- [BluetoothAuthenticationRequirements](bluetoothauthenticationrequirements.md)
- [BluetoothAuthenticationRequirementsValues](bluetoothauthenticationrequirementsvalues.md)
- [BluetoothClassOfDevice](bluetoothclassofdevice.md)
- [BluetoothClockOffset](bluetoothclockoffset.md)
- [BluetoothCompanyIdentifers](bluetoothcompanyidentifers.md)
- [BluetoothConnectionHandle](bluetoothconnectionhandle.md)
- [BluetoothDeviceClassMajor](bluetoothdeviceclassmajor.md)
- [BluetoothDeviceClassMinor](bluetoothdeviceclassminor.md)
- [BluetoothDeviceName](bluetoothdevicename.md)
- [BluetoothEncryptionEnable](bluetoothencryptionenable.md)
- [BluetoothFeatureBits](bluetoothfeaturebits.md)
- [BluetoothHCIACLDataByteCount](bluetoothhciacldatabytecount.md)

# OBEXSessionEventTypes (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Enumeration  
**Availability:** macOS

Type identifiers for OBEX sessions.

## Declaration

```objectivec
enum OBEXSessionEventTypes : unsigned int;
```

<a id="overview"></a>

## Overview

When a new session event occurs, your selector (or C callback) will be given an OBEXSessionEvent pointer, and in it will be a ‘type’ field with one of the following types in it. Based on that type, you can then read the corresponding field in the union to get out interesting data for that event type. For example, if the type of an event is a ‘kOBEXSessionEventTypeConnectCommandResponseReceived’, you should look in the ‘OBEXConnectCommandResponseData’ part of the structure’s union to find more information pased to you in the event. Note that some you will never see, depending on the type of session you are using - a client or server. If you are a client (most likely case), you will never see the “Command” events, but instead you will only receive the “CommandResponse” events since you will be the issuer oft he commands, not the receiver of them. Both types of sessions will receive error type events.

## Topics

### Constants

- [kOBEXSessionEventTypeAbortCommandReceived](kobexsessioneventtypeabortcommandreceived.md)
- [kOBEXSessionEventTypeAbortCommandResponseReceived](kobexsessioneventtypeabortcommandresponsereceived.md)
- [kOBEXSessionEventTypeConnectCommandReceived](kobexsessioneventtypeconnectcommandreceived.md)
- [kOBEXSessionEventTypeConnectCommandResponseReceived](kobexsessioneventtypeconnectcommandresponsereceived.md)
- [kOBEXSessionEventTypeDisconnectCommandReceived](kobexsessioneventtypedisconnectcommandreceived.md)
- [kOBEXSessionEventTypeDisconnectCommandResponseReceived](kobexsessioneventtypedisconnectcommandresponsereceived.md)
- [kOBEXSessionEventTypeError](kobexsessioneventtypeerror.md)
- [kOBEXSessionEventTypeGetCommandReceived](kobexsessioneventtypegetcommandreceived.md)
- [kOBEXSessionEventTypeGetCommandResponseReceived](kobexsessioneventtypegetcommandresponsereceived.md)
- [kOBEXSessionEventTypePutCommandReceived](kobexsessioneventtypeputcommandreceived.md)
- [kOBEXSessionEventTypePutCommandResponseReceived](kobexsessioneventtypeputcommandresponsereceived.md)
- [kOBEXSessionEventTypeSetPathCommandReceived](kobexsessioneventtypesetpathcommandreceived.md)
- [kOBEXSessionEventTypeSetPathCommandResponseReceived](kobexsessioneventtypesetpathcommandresponsereceived.md)

## See Also

### Data Types

- [BluetoothAFHMode](bluetoothafhmode.md)
- [BluetoothAirMode](bluetoothairmode.md)
- [BluetoothAllowRoleSwitch](bluetoothallowroleswitch.md)
- [BluetoothAuthenticationRequirements](bluetoothauthenticationrequirements.md)
- [BluetoothAuthenticationRequirementsValues](bluetoothauthenticationrequirementsvalues.md)
- [BluetoothClassOfDevice](bluetoothclassofdevice.md)
- [BluetoothClockOffset](bluetoothclockoffset.md)
- [BluetoothCompanyIdentifers](bluetoothcompanyidentifers.md)
- [BluetoothConnectionHandle](bluetoothconnectionhandle.md)
- [BluetoothDeviceClassMajor](bluetoothdeviceclassmajor.md)
- [BluetoothDeviceClassMinor](bluetoothdeviceclassminor.md)
- [BluetoothDeviceName](bluetoothdevicename.md)
- [BluetoothEncryptionEnable](bluetoothencryptionenable.md)
- [BluetoothFeatureBits](bluetoothfeaturebits.md)
- [BluetoothHCIACLDataByteCount](bluetoothhciacldatabytecount.md)
