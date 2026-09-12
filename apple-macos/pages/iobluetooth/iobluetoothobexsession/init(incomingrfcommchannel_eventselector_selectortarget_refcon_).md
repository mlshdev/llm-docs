> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothobexsession/init(incomingrfcommchannel:eventselector:selectortarget:refcon:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/init(incomingrfcommchannel:eventselector:selectortarget:refcon:))

# init(incomingRFCOMMChannel:eventSelector:selectorTarget:refCon:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Initializer  
**Availability:** macOS

Initializes a Bluetooth-based OBEX Session using an incoming RFCOMM channel.

## Declaration

```swift
init!(incomingRFCOMMChannel inChannel: IOBluetoothRFCOMMChannel!, eventSelector inEventSelector: Selector!, selectorTarget inEventSelectorTarget: Any!, refCon inUserRefCon: UnsafeMutableRawPointer!)
```

## Parameters

- `inChannel`: RFCOMM channel ID of the desired channel to be used.
- `inEventSelector`: The selector to be called when an event is received.
- `inEventSelectorTarget`: The target object that get the selector message.
- `inUserRefCon`: Caller reference constant, pass whatever you want, it will be returned to you in the selector.

## See Also

### Initializers

- [init(device:channelID:)](init%28device_channelid_%29.md): Initializes a Bluetooth-based OBEX Session using a Bluetooth device.
- [init(sdpServiceRecord:)](init%28sdpservicerecord_%29-h1xg.md): Initializes a Bluetooth-based OBEX Session using an SDP service record.

# initWithIncomingRFCOMMChannel:eventSelector:selectorTarget:refCon: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Initializes a Bluetooth-based OBEX Session using an incoming RFCOMM channel.

## Declaration

```objectivec
- (instancetype) initWithIncomingRFCOMMChannel:(IOBluetoothRFCOMMChannel *) inChannel eventSelector:(SEL) inEventSelector selectorTarget:(id) inEventSelectorTarget refCon:(void *) inUserRefCon;
```

## Parameters

- `inChannel`: RFCOMM channel ID of the desired channel to be used.
- `inEventSelector`: The selector to be called when an event is received.
- `inEventSelectorTarget`: The target object that get the selector message.
- `inUserRefCon`: Caller reference constant, pass whatever you want, it will be returned to you in the selector.

## See Also

### Initializers

- [initWithDevice:channelID:](init%28device_channelid_%29.md): Initializes a Bluetooth-based OBEX Session using a Bluetooth device.
- [initWithSDPServiceRecord:](init%28sdpservicerecord_%29-h1xg.md): Initializes a Bluetooth-based OBEX Session using an SDP service record.
