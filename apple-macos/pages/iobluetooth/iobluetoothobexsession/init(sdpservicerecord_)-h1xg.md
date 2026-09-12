> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothobexsession/init(sdpservicerecord:)-h1xg](https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/init(sdpservicerecord:)-h1xg)

# init(sdpServiceRecord:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Initializer  
**Availability:** macOS

Initializes a Bluetooth-based OBEX Session using an SDP service record.

## Declaration

```swift
init!(sdpServiceRecord inSDPServiceRecord: IOBluetoothSDPServiceRecord!)
```

## Parameters

- `inSDPServiceRecord`:

## See Also

### Initializers

- [init(device:channelID:)](init%28device_channelid_%29.md): Initializes a Bluetooth-based OBEX Session using a Bluetooth device.
- [init(incomingRFCOMMChannel:eventSelector:selectorTarget:refCon:)](init%28incomingrfcommchannel_eventselector_selectortarget_refcon_%29.md): Initializes a Bluetooth-based OBEX Session using an incoming RFCOMM channel.

# initWithSDPServiceRecord: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Initializes a Bluetooth-based OBEX Session using an SDP service record.

## Declaration

```objectivec
- (instancetype) initWithSDPServiceRecord:(IOBluetoothSDPServiceRecord *) inSDPServiceRecord;
```

## Parameters

- `inSDPServiceRecord`:

## See Also

### Initializers

- [initWithDevice:channelID:](init%28device_channelid_%29.md): Initializes a Bluetooth-based OBEX Session using a Bluetooth device.
- [initWithIncomingRFCOMMChannel:eventSelector:selectorTarget:refCon:](init%28incomingrfcommchannel_eventselector_selectortarget_refcon_%29.md): Initializes a Bluetooth-based OBEX Session using an incoming RFCOMM channel.
