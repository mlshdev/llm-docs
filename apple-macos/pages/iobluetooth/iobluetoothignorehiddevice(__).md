> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothignorehiddevice(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothignorehiddevice(_:))

# IOBluetoothIgnoreHIDDevice(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

Hints that the macOS Bluetooth software should ignore a HID device that connects up.

## Declaration

```swift
func IOBluetoothIgnoreHIDDevice(_ device: IOBluetoothDeviceRef!)
```

## Parameters

- `device`: A Bluetooth Device to ignore.

## See Also

### Miscellaneous

- [IOBluetoothL2CAPChannelRegisterForChannelCloseNotification(\_:\_:\_:)](iobluetoothl2capchannelregisterforchannelclosenotification%28______%29.md): Allows a client to register for a channel close notification.
- [IOBluetoothRemoveIgnoredHIDDevice(\_:)](iobluetoothremoveignoredhiddevice%28__%29.md): The counterpart to the above IOBluetoothIgnoreHIDDevice() API.
- [IOBluetoothUserNotificationUnregister(\_:)](iobluetoothusernotificationunregister%28__%29.md): Unregisters the target notification.

# IOBluetoothIgnoreHIDDevice (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

Hints that the macOS Bluetooth software should ignore a HID device that connects up.

## Declaration

```objectivec
extern void IOBluetoothIgnoreHIDDevice(IOBluetoothDeviceRef device);
```

## Parameters

- `device`: A Bluetooth Device to ignore.

## See Also

### Miscellaneous

- [IOBluetoothAddSCOAudioDevice](iobluetoothaddscoaudiodevice.md): Deprecated. Creates a persistent audio driver that will route audio data to/from the specified device.
- [IOBluetoothL2CAPChannelRegisterForChannelCloseNotification](iobluetoothl2capchannelregisterforchannelclosenotification%28______%29.md): Allows a client to register for a channel close notification.
- [IOBluetoothRemoveIgnoredHIDDevice](iobluetoothremoveignoredhiddevice%28__%29.md): The counterpart to the above IOBluetoothIgnoreHIDDevice() API.
- [IOBluetoothRemoveSCOAudioDevice](iobluetoothremovescoaudiodevice.md): Deprecated. Removes a persistent audio driver for a device that had already been added using IOBluetoothAddAudioDevice().
- [IOBluetoothUserNotificationUnregister](iobluetoothusernotificationunregister%28__%29.md): Unregisters the target notification.
