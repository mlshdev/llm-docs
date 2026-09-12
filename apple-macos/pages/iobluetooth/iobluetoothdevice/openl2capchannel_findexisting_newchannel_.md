> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/openl2capchannel:findexisting:newchannel:](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/openl2capchannel:findexisting:newchannel:)

# openL2CAPChannel:findExisting:newChannel:

**Interface language:** Objective-C

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Opens a new L2CAP channel to the target device. Returns immedialty after starting the opening process.

## Declaration

```objectivec
- (IOReturn) openL2CAPChannel:(BluetoothL2CAPPSM) psm findExisting:(BOOL) findExisting newChannel:(IOBluetoothL2CAPChannel **) newChannel;
```

## Parameters

- `psm`: The L2CAP PSM value for the new channel.
- `findExisting`: This value should be set to TRUE if it should look for an existing channel with the PSM. Typically this value will be FALSE. It should be TRUE only in the case where a single channel is allowed by the spec for the given PSM.
- `newChannel`: A pointer to an IOBluetoothL2CAPChannel object to receive the L2CAP channel requested to be opened. The newChannel pointer will only be set if kIOReturnSuccess is returned.

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the open process was successfully started (or if an existing L2CAP channel was found).

<a id="Discussion"></a>

## Discussion

This method will begin the process of opening a new L2CAP channel to the target device. The baseband connection to the device will be opened if it is not open already. The L2CAP channel open process will not complete until the client has registered an incoming data listener on the new channel. This prevents a situation where the channel succeeds in being configured and opened and receives data before the client is listening and is ready for it.
