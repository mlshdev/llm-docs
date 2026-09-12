> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothobexsession/getrfcommchannel()](https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/getrfcommchannel())

# getRFCOMMChannel() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Get the Bluetooth RFCOMM channel being used by the session object.

## Declaration

```swift
func getRFCOMMChannel() -> IOBluetoothRFCOMMChannel!
```

<a id="return-value"></a>

## Return Value

A IOBluetoothRFCOMMChannel object.

<a id="Discussion"></a>

## Discussion

This could potentially be nil even though you have a valid OBEX session, because the RFCOMM channel is only valid when the session is connected.

# getRFCOMMChannel (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Get the Bluetooth RFCOMM channel being used by the session object.

## Declaration

```objectivec
- (IOBluetoothRFCOMMChannel *) getRFCOMMChannel;
```

<a id="return-value"></a>

## Return Value

A IOBluetoothRFCOMMChannel object.

<a id="Discussion"></a>

## Discussion

This could potentially be nil even though you have a valid OBEX session, because the RFCOMM channel is only valid when the session is connected.
