> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexsession/serverhandleincomingdata(_:)](https://developer.apple.com/documentation/iobluetooth/obexsession/serverhandleincomingdata(_:))

# serverHandleIncomingData(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Tranport subclasses need to invoke this from their own data-receive handlers. For example, when data is received over a Bluetooth RFCOMM channel in the IOBluetoothOBEXSession, it in turn calls this to dispatch the data. If you do not handle this case, your server session will not work, guaranteed.

## Declaration

```swift
func serverHandleIncomingData(_ event: UnsafeMutablePointer<OBEXTransportEvent>!)
```

## Parameters

- `event`: New event received from the transport.

<a id="Discussion"></a>

## Discussion

Tranport subclasses must call this for OBEX server sessions to work!

# serverHandleIncomingData: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Tranport subclasses need to invoke this from their own data-receive handlers. For example, when data is received over a Bluetooth RFCOMM channel in the IOBluetoothOBEXSession, it in turn calls this to dispatch the data. If you do not handle this case, your server session will not work, guaranteed.

## Declaration

```objectivec
- (void) serverHandleIncomingData:(OBEXTransportEvent *) event;
```

## Parameters

- `event`: New event received from the transport.

<a id="Discussion"></a>

## Discussion

Tranport subclasses must call this for OBEX server sessions to work!
