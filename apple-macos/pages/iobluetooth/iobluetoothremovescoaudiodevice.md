> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothremovescoaudiodevice](https://developer.apple.com/documentation/iobluetooth/iobluetoothremovescoaudiodevice)

# IOBluetoothRemoveSCOAudioDevice

**Interface language:** Objective-C

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.9)

Removes a persistent audio driver for a device that had already been added using IOBluetoothAddAudioDevice().

## Declaration

```objectivec
extern IOReturn IOBluetoothRemoveSCOAudioDevice(IOBluetoothDeviceRef device);
```

## Parameters

- `device`: Bluetooth audio device to remove

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the audio driver was successfully removed.

## See Also

### Miscellaneous

- [IOBluetoothAddSCOAudioDevice](iobluetoothaddscoaudiodevice.md): Deprecated. Creates a persistent audio driver that will route audio data to/from the specified device.
- [IOBluetoothIgnoreHIDDevice](iobluetoothignorehiddevice%28__%29.md): Hints that the macOS Bluetooth software should ignore a HID device that connects up.
- [IOBluetoothL2CAPChannelRegisterForChannelCloseNotification](iobluetoothl2capchannelregisterforchannelclosenotification%28______%29.md): Allows a client to register for a channel close notification.
- [IOBluetoothRemoveIgnoredHIDDevice](iobluetoothremoveignoredhiddevice%28__%29.md): The counterpart to the above IOBluetoothIgnoreHIDDevice() API.
- [IOBluetoothUserNotificationUnregister](iobluetoothusernotificationunregister%28__%29.md): Unregisters the target notification.
