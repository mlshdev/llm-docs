> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/openl2capchannelasync(_:withpsm:delegate:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/openl2capchannelasync(_:withpsm:delegate:))

# openL2CAPChannelAsync(\_:withPSM:delegate:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Opens a new L2CAP channel to the target device. Returns immediately after starting the opening process.

## Declaration

```swift
func openL2CAPChannelAsync(_ newChannel: AutoreleasingUnsafeMutablePointer<IOBluetoothL2CAPChannel?>!, withPSM psm: BluetoothL2CAPPSM, delegate channelDelegate: Any!) -> IOReturn
```

## Parameters

- `newChannel`: A pointer to an IOBluetoothL2CAPChannel object to receive the L2CAP channel requested to be opened. The newChannel pointer will only be set if kIOReturnSuccess is returned.
- `psm`: The L2CAP PSM value for the new channel.
- `channelDelegate`: The object that will play the role of delegate for the channel. A channel delegate is the object the l2cap uses as target for data and events. The developer will implement only the the methods he/she is interested in. A list of the possible methods is at the end of the file “IOBluetoothL2CAPChannel.h” in the definition of the protocol IOBluetoothL2CAPChannelDelegate.

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the open process was successfully started (or if an existing L2CAP channel was found).

<a id="Discussion"></a>

## Discussion

This method will begin the process of opening a new L2CAP channel to the target device. The baseband connection to the device will be opened if it is not open already. The L2CAP channel open process will not complete until the client has registered an incoming data listener on the new channel. This prevents a situation where the channel succeeds in being configured and opened and receives data before the client is listening and is ready for it.

NOTE: This method is only available in macOS 10.2.5 (Bluetooth v1.2) or later.

# openL2CAPChannelAsync:withPSM:delegate: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Opens a new L2CAP channel to the target device. Returns immediately after starting the opening process.

## Declaration

```objectivec
- (IOReturn) openL2CAPChannelAsync:(IOBluetoothL2CAPChannel **) newChannel withPSM:(BluetoothL2CAPPSM) psm delegate:(id) channelDelegate;
```

## Parameters

- `newChannel`: A pointer to an IOBluetoothL2CAPChannel object to receive the L2CAP channel requested to be opened. The newChannel pointer will only be set if kIOReturnSuccess is returned.
- `psm`: The L2CAP PSM value for the new channel.
- `channelDelegate`: The object that will play the role of delegate for the channel. A channel delegate is the object the l2cap uses as target for data and events. The developer will implement only the the methods he/she is interested in. A list of the possible methods is at the end of the file “IOBluetoothL2CAPChannel.h” in the definition of the protocol IOBluetoothL2CAPChannelDelegate.

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the open process was successfully started (or if an existing L2CAP channel was found).

<a id="Discussion"></a>

## Discussion

This method will begin the process of opening a new L2CAP channel to the target device. The baseband connection to the device will be opened if it is not open already. The L2CAP channel open process will not complete until the client has registered an incoming data listener on the new channel. This prevents a situation where the channel succeeds in being configured and opened and receives data before the client is listening and is ready for it.

NOTE: This method is only available in macOS 10.2.5 (Bluetooth v1.2) or later.
