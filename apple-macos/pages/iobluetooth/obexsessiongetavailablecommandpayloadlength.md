> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexsessiongetavailablecommandpayloadlength](https://developer.apple.com/documentation/iobluetooth/obexsessiongetavailablecommandpayloadlength)

# OBEXSessionGetAvailableCommandPayloadLength

**Interface language:** Objective-C

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Gets space available for your data for a particular command response you are trying to send.

## Declaration

```objectivec
OBEXError OBEXSessionGetAvailableCommandPayloadLength(OBEXSessionRef inSessionRef, OBEXOpCode inOpCode, OBEXMaxPacketLength *outLength);
```

## Parameters

- `inSessionRef`: A valid session reference.
- `inOpCode`: A command opcode that you are responding to. For example, if you receiving a Put command, and want to send back a “bad request” response, you should still pass in the Put command opcode for that response.
- `outLength`: Space available for your header data in the payload area for a particular command.

<a id="return-value"></a>

## Return Value

An error code value. 0 if successful.

<a id="Overview"></a>

## Overview

The OBEXSession takes care of packaging OBEX opcodes and other information into the proper packet format, allowing you to focus on sending the proper OBEX headers in your commands and command responses. This formatting and datas requires a small bit of information that varies depending on what command or response you are sending. Thus, you should call this function to find out how much space will be left for your headers before you send the command, allowing you to properly chop up your headers before sending them. This will guarantee that (a) you use up all the available space in a packet and (b) that you do not get an error trying to send too much information at once.

\*\*\* DEPRECATED IN BLUETOOTH 2.2 (OS X v10.6) \*\*\* You should transition your code to Objective-C equivalents. \*\*\* This API may be removed any time in the future.

## See Also

### Functions

- [IOBluetoothNSStringFromDeviceAddressColon](iobluetoothnsstringfromdeviceaddresscolon%28__%29.md)
- [IOBluetoothPackDataList](iobluetoothpackdatalist%28______%29.md)
- [IOBluetoothUnpackDataList](iobluetoothunpackdatalist%28________%29.md)
