> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/openrfcommchannel:channel:](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/openrfcommchannel:channel:)

# openRFCOMMChannel:channel:

**Interface language:** Objective-C

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Opens a new RFCOMM channel to the target device. Returns only once the channel is open or failed to open.

## Declaration

```objectivec
- (IOReturn) openRFCOMMChannel:(BluetoothRFCOMMChannelID) channelID channel:(IOBluetoothRFCOMMChannel **) rfcommChannel;
```

## Parameters

- `channelID`: The RFCOMM channel ID for the new channel.
- `rfcommChannel`: A pointer to an IOBluetoothRFCOMMChannel object to receive the RFCOMM channel requested to be opened. The rfcommChannel pointer will only be set if kIOReturnSuccess is returned.

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the open process was successfully started (or if an existing RFCOMM channel was found).

<a id="Discussion"></a>

## Discussion

This method will begin the process of opening a new RFCOMM channel to the target device. The baseband connection to the device will be opened if it is not open already. The RFCOMM channel open process will not complete until the client has registered an incoming data listener on the new channel.
