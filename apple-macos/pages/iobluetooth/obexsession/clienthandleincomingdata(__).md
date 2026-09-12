> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexsession/clienthandleincomingdata(_:)](https://developer.apple.com/documentation/iobluetooth/obexsession/clienthandleincomingdata(_:))

# clientHandleIncomingData(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Tranport subclasses need to invoke this from their own data-receive handlers. For example, when data is received over a Bluetooth RFCOMM channel in the IOBluetoothOBEXSession, it in turn calls this to dispatch the data. If you do not handle this case, your server session will not work, guaranteed.

## Declaration

```swift
func clientHandleIncomingData(_ event: UnsafeMutablePointer<OBEXTransportEvent>!)
```

## Parameters

- `event`: New event received from the transport.

<a id="Discussion"></a>

## Discussion

Tranport subclasses must call this for OBEX client sessions to work!

# clientHandleIncomingData: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Tranport subclasses need to invoke this from their own data-receive handlers. For example, when data is received over a Bluetooth RFCOMM channel in the IOBluetoothOBEXSession, it in turn calls this to dispatch the data. If you do not handle this case, your server session will not work, guaranteed.

## Declaration

```objectivec
- (void) clientHandleIncomingData:(OBEXTransportEvent *) event;
```

## Parameters

- `event`: New event received from the transport.

<a id="Discussion"></a>

## Discussion

Tranport subclasses must call this for OBEX client sessions to work!
