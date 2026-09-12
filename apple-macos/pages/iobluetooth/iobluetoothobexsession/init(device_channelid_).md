> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothobexsession/init(device:channelid:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/init(device:channelid:))

# init(device:channelID:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Initializer  
**Availability:** macOS

Initializes a Bluetooth-based OBEX Session using a Bluetooth device.

## Declaration

```swift
init!(device inDevice: IOBluetoothDevice!, channelID inChannelID: BluetoothRFCOMMChannelID)
```

## Parameters

- `inDevice`: The bluetooth device on which to open the OBEXSession.
- `inChannelID`: The RFCOMM channel ID to use when opening the connection.

## See Also

### Initializers

- [init(incomingRFCOMMChannel:eventSelector:selectorTarget:refCon:)](init%28incomingrfcommchannel_eventselector_selectortarget_refcon_%29.md): Initializes a Bluetooth-based OBEX Session using an incoming RFCOMM channel.
- [init(sdpServiceRecord:)](init%28sdpservicerecord_%29-h1xg.md): Initializes a Bluetooth-based OBEX Session using an SDP service record.

# initWithDevice:channelID: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Initializes a Bluetooth-based OBEX Session using a Bluetooth device.

## Declaration

```objectivec
- (instancetype) initWithDevice:(IOBluetoothDevice *) inDevice channelID:(BluetoothRFCOMMChannelID) inChannelID;
```

## Parameters

- `inDevice`: The bluetooth device on which to open the OBEXSession.
- `inChannelID`: The RFCOMM channel ID to use when opening the connection.

## See Also

### Initializers

- [initWithIncomingRFCOMMChannel:eventSelector:selectorTarget:refCon:](init%28incomingrfcommchannel_eventselector_selectortarget_refcon_%29.md): Initializes a Bluetooth-based OBEX Session using an incoming RFCOMM channel.
- [initWithSDPServiceRecord:](init%28sdpservicerecord_%29-h1xg.md): Initializes a Bluetooth-based OBEX Session using an SDP service record.
