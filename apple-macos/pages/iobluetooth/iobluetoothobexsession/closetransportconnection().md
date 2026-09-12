> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothobexsession/closetransportconnection()](https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/closetransportconnection())

# closeTransportConnection() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

An OBEXSession override. When this is called by the session baseclass, we will close the transport connection if it is opened. In our case, it will be the RFCOMM channel that needs closing.

## Declaration

```swift
func closeTransportConnection() -> OBEXError
```

<a id="return-value"></a>

## Return Value

Success or failure code, describing whether the call succeeded in closing the transport connection successfully.

# closeTransportConnection (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

An OBEXSession override. When this is called by the session baseclass, we will close the transport connection if it is opened. In our case, it will be the RFCOMM channel that needs closing.

## Declaration

```objectivec
- (OBEXError) closeTransportConnection;
```

<a id="return-value"></a>

## Return Value

Success or failure code, describing whether the call succeeded in closing the transport connection successfully.
