> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/hasopentransportconnection()

# hasOpenTransportConnection() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

An OBEXSession override. When this is called by the session baseclass, we will return whether or not we have a transport connection established to another OBEX server/client. In our case we will tell whether or not the RFCOMM channel to a remote device is still open.

## Declaration

```swift
func hasOpenTransportConnection() -> Bool
```

<a id="return-value"></a>

## Return Value

True or false, whether there is already an open transport connection for this OBEX session.

# hasOpenTransportConnection (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

An OBEXSession override. When this is called by the session baseclass, we will return whether or not we have a transport connection established to another OBEX server/client. In our case we will tell whether or not the RFCOMM channel to a remote device is still open.

## Declaration

```objectivec
- (Boolean) hasOpenTransportConnection;
```

<a id="return-value"></a>

## Return Value

True or false, whether there is already an open transport connection for this OBEX session.
