> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothl2capchannelregisterforchannelclosenotification(_:_:_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannelregisterforchannelclosenotification(_:_:_:))

# IOBluetoothL2CAPChannelRegisterForChannelCloseNotification(\_:\_:\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

Allows a client to register for a channel close notification.

## Declaration

```swift
func IOBluetoothL2CAPChannelRegisterForChannelCloseNotification(_ channel: IOBluetoothL2CAPChannelRef!, _ callback: IOBluetoothUserNotificationCallback!, _ inRefCon: UnsafeMutableRawPointer!) -> Unmanaged<IOBluetoothUserNotificationRef>!
```

## Parameters

- `channel`: The target L2CAP channel
- `callback`: Callback to be called when the L2CAP channel is closed.
- `inRefCon`: Client-supplied refCon to be passed to the callback.

<a id="return-value"></a>

## Return Value

Returns an IOBluetoothUserNotificationRef representing the outstanding L2CAP channel close notification. To unregister the notification, call IOBluetoothUserNotificationUnregister() with the returned IOBluetoothUserNotificationRef. If an error is encountered creating the notification, NULL is returned. The returned IOBluetoothUserNotificationRef will be valid for as long as the notification is registered. It is not necessary to retain the result. Once the notification is unregistered, it will no longer be valid.

<a id="Discussion"></a>

## Discussion

The given callback will be called when the L2CAP channel is closed.

## See Also

### Miscellaneous

- [IOBluetoothIgnoreHIDDevice(\_:)](iobluetoothignorehiddevice%28__%29.md): Hints that the macOS Bluetooth software should ignore a HID device that connects up.
- [IOBluetoothRemoveIgnoredHIDDevice(\_:)](iobluetoothremoveignoredhiddevice%28__%29.md): The counterpart to the above IOBluetoothIgnoreHIDDevice() API.
- [IOBluetoothUserNotificationUnregister(\_:)](iobluetoothusernotificationunregister%28__%29.md): Unregisters the target notification.

# IOBluetoothL2CAPChannelRegisterForChannelCloseNotification (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

Allows a client to register for a channel close notification.

## Declaration

```objectivec
IOBluetoothUserNotificationRefIOBluetoothL2CAPChannelRegisterForChannelCloseNotification(IOBluetoothL2CAPChannelRef channel, IOBluetoothUserNotificationCallback callback, void *inRefCon);
```

## Parameters

- `channel`: The target L2CAP channel
- `callback`: Callback to be called when the L2CAP channel is closed.
- `inRefCon`: Client-supplied refCon to be passed to the callback.

<a id="return-value"></a>

## Return Value

Returns an IOBluetoothUserNotificationRef representing the outstanding L2CAP channel close notification. To unregister the notification, call IOBluetoothUserNotificationUnregister() with the returned IOBluetoothUserNotificationRef. If an error is encountered creating the notification, NULL is returned. The returned IOBluetoothUserNotificationRef will be valid for as long as the notification is registered. It is not necessary to retain the result. Once the notification is unregistered, it will no longer be valid.

<a id="Discussion"></a>

## Discussion

The given callback will be called when the L2CAP channel is closed.

## See Also

### Miscellaneous

- [IOBluetoothAddSCOAudioDevice](iobluetoothaddscoaudiodevice.md): Deprecated. Creates a persistent audio driver that will route audio data to/from the specified device.
- [IOBluetoothIgnoreHIDDevice](iobluetoothignorehiddevice%28__%29.md): Hints that the macOS Bluetooth software should ignore a HID device that connects up.
- [IOBluetoothRemoveIgnoredHIDDevice](iobluetoothremoveignoredhiddevice%28__%29.md): The counterpart to the above IOBluetoothIgnoreHIDDevice() API.
- [IOBluetoothRemoveSCOAudioDevice](iobluetoothremovescoaudiodevice.md): Deprecated. Removes a persistent audio driver for a device that had already been added using IOBluetoothAddAudioDevice().
- [IOBluetoothUserNotificationUnregister](iobluetoothusernotificationunregister%28__%29.md): Unregisters the target notification.
