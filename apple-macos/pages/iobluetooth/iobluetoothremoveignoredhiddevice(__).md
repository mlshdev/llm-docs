> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothremoveignoredhiddevice(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothremoveignoredhiddevice(_:))

# IOBluetoothRemoveIgnoredHIDDevice(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

The counterpart to the above IOBluetoothIgnoreHIDDevice() API.

## Declaration

```swift
func IOBluetoothRemoveIgnoredHIDDevice(_ device: IOBluetoothDeviceRef!)
```

## Parameters

- `device`: A Bluetooth Device to “un”ignore.

## See Also

### Miscellaneous

- [IOBluetoothIgnoreHIDDevice(\_:)](iobluetoothignorehiddevice%28__%29.md): Hints that the macOS Bluetooth software should ignore a HID device that connects up.
- [IOBluetoothL2CAPChannelRegisterForChannelCloseNotification(\_:\_:\_:)](iobluetoothl2capchannelregisterforchannelclosenotification%28______%29.md): Allows a client to register for a channel close notification.
- [IOBluetoothUserNotificationUnregister(\_:)](iobluetoothusernotificationunregister%28__%29.md): Unregisters the target notification.

# IOBluetoothRemoveIgnoredHIDDevice (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

The counterpart to the above IOBluetoothIgnoreHIDDevice() API.

## Declaration

```objectivec
extern void IOBluetoothRemoveIgnoredHIDDevice(IOBluetoothDeviceRef device);
```

## Parameters

- `device`: A Bluetooth Device to “un”ignore.

## See Also

### Miscellaneous

- [IOBluetoothAddSCOAudioDevice](iobluetoothaddscoaudiodevice.md): Deprecated. Creates a persistent audio driver that will route audio data to/from the specified device.
- [IOBluetoothIgnoreHIDDevice](iobluetoothignorehiddevice%28__%29.md): Hints that the macOS Bluetooth software should ignore a HID device that connects up.
- [IOBluetoothL2CAPChannelRegisterForChannelCloseNotification](iobluetoothl2capchannelregisterforchannelclosenotification%28______%29.md): Allows a client to register for a channel close notification.
- [IOBluetoothRemoveSCOAudioDevice](iobluetoothremovescoaudiodevice.md): Deprecated. Removes a persistent audio driver for a device that had already been added using IOBluetoothAddAudioDevice().
- [IOBluetoothUserNotificationUnregister](iobluetoothusernotificationunregister%28__%29.md): Unregisters the target notification.
