> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothusernotificationunregister(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothusernotificationunregister(_:))

# IOBluetoothUserNotificationUnregister(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

Unregisters the target notification.

## Declaration

```swift
func IOBluetoothUserNotificationUnregister(_ notificationRef: IOBluetoothUserNotificationRef!)
```

## Parameters

- `notificationRef`: The target IOBluetoothUserNotificationRef to be unregistered

<a id="Discussion"></a>

## Discussion

This function will unregister the notification. Once the notification has been unregistered, it will no longer call the callback. Additionally, once this function has been called the target IOBluetoothUserNotificationRef is no longer valid.

## See Also

### Miscellaneous

- [IOBluetoothIgnoreHIDDevice(\_:)](iobluetoothignorehiddevice%28__%29.md): Hints that the macOS Bluetooth software should ignore a HID device that connects up.
- [IOBluetoothL2CAPChannelRegisterForChannelCloseNotification(\_:\_:\_:)](iobluetoothl2capchannelregisterforchannelclosenotification%28______%29.md): Allows a client to register for a channel close notification.
- [IOBluetoothRemoveIgnoredHIDDevice(\_:)](iobluetoothremoveignoredhiddevice%28__%29.md): The counterpart to the above IOBluetoothIgnoreHIDDevice() API.

# IOBluetoothUserNotificationUnregister (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

Unregisters the target notification.

## Declaration

```objectivec
void IOBluetoothUserNotificationUnregister(IOBluetoothUserNotificationRef notificationRef);
```

## Parameters

- `notificationRef`: The target IOBluetoothUserNotificationRef to be unregistered

<a id="Discussion"></a>

## Discussion

This function will unregister the notification. Once the notification has been unregistered, it will no longer call the callback. Additionally, once this function has been called the target IOBluetoothUserNotificationRef is no longer valid.

## See Also

### Miscellaneous

- [IOBluetoothAddSCOAudioDevice](iobluetoothaddscoaudiodevice.md): Deprecated. Creates a persistent audio driver that will route audio data to/from the specified device.
- [IOBluetoothIgnoreHIDDevice](iobluetoothignorehiddevice%28__%29.md): Hints that the macOS Bluetooth software should ignore a HID device that connects up.
- [IOBluetoothL2CAPChannelRegisterForChannelCloseNotification](iobluetoothl2capchannelregisterforchannelclosenotification%28______%29.md): Allows a client to register for a channel close notification.
- [IOBluetoothRemoveIgnoredHIDDevice](iobluetoothremoveignoredhiddevice%28__%29.md): The counterpart to the above IOBluetoothIgnoreHIDDevice() API.
- [IOBluetoothRemoveSCOAudioDevice](iobluetoothremovescoaudiodevice.md): Deprecated. Removes a persistent audio driver for a device that had already been added using IOBluetoothAddAudioDevice().
