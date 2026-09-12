> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothobexsessionopentransportconnection](https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsessionopentransportconnection)

# IOBluetoothOBEXSessionOpenTransportConnection

**Interface language:** Objective-C

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.6)

## Declaration

```objectivec
OBEXError IOBluetoothOBEXSessionOpenTransportConnection(OBEXSessionRef inSessionRef, IOBluetoothOBEXSessionOpenConnectionCallback inCallback, void *inUserRefCon);
```

## Parameters

- `inSessionRef`: A valid session reference.
- `inCallback`: A valid callback.
- `inUserRefCon`: Optional parameter; can contain anything you wish. Will be returned in your callback just as you passed it.

<a id="return-value"></a>

## Return Value

An error code value. 0 if successful.

<a id="Discussion"></a>

## Discussion

Opens a transport-level connection to a remote target. For example, if you are using a Bluetooth transport, this will establish the baseband/L2CAP/RFCOMM connection to a device. Once the callback is called, the connection will either be opened or have failed with a status code. That status code will most likely have originated from the transport layer being used, so you may receive a Bluetooth error, an IOKit error, etc, but a 0 status should indicate success in all cases.

\*\*\* DEPRECATED IN BLUETOOTH 2.2 (OS X 10.6) \*\*\* You should transition your code to Objective-C equivalents. \*\*\* This API may be removed any time in the future.

## See Also

### Miscellaneous

- [IOBluetoothOBEXSessionCreateWithIncomingIOBluetoothRFCOMMChannel](iobluetoothobexsessioncreatewithincomingiobluetoothrfcommchannel.md): Deprecated. Create an OBEX session with an IOBluetoothRFCOMMchannel. This implies you are creating a OBEX SERVER session that will dole out info to remote Bluetooth clients.
- [IOBluetoothOBEXSessionCreateWithIOBluetoothDeviceRefAndChannelNumber](iobluetoothobexsessioncreatewithiobluetoothdevicerefandchannelnumber.md): Deprecated. Create an OBEX session with a device ref and an RFCOMM channel ID. This allows you to bypass the browser if you already know the SDP information.
- [IOBluetoothOBEXSessionCreateWithIOBluetoothSDPServiceRecordRef](iobluetoothobexsessioncreatewithiobluetoothsdpservicerecordref.md): Deprecated. Create an OBEX session with a service ref, usually obtained from the device browser.
