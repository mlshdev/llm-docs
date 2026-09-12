> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncunregisterdevice(_:_:)](https://developer.apple.com/documentation/colorsync/colorsyncunregisterdevice(_:_:))

# ColorSyncUnregisterDevice(\_:\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

Unregisters a device of the given class and identifier.

## Declaration

```swift
func ColorSyncUnregisterDevice(_ deviceClass: CFString!, _ deviceID: CFUUID!) -> Bool
```

## Parameters

- `deviceClass`: The class of the device to unregister.
- `deviceID`: The identifier of the device to unregister.

<a id="return-value"></a>

## Return Value

`true` on success and `false` in case of failure.

## See Also

### Registering and enumerating devices

- [ColorSyncDeviceCopyDeviceInfo(\_:\_:)](colorsyncdevicecopydeviceinfo%28____%29.md): Copies information about a device, resolved for the current host and current user.
- [ColorSyncDeviceProfileIterateCallback](colorsyncdeviceprofileiteratecallback.md): A callback that ColorSync invokes for each device profile during iteration.
- [ColorSyncDeviceSetCustomProfiles(\_:\_:\_:)](colorsyncdevicesetcustomprofiles%28______%29.md): Sets custom profiles for a device in lieu of its factory profiles.
- [ColorSyncIterateDeviceProfiles(\_:\_:)](colorsynciteratedeviceprofiles%28____%29.md): Iterates over the profiles registered for all devices, invoking a callback for each.
- [ColorSyncProfileCreateDeviceProfile(\_:\_:\_:)](colorsyncprofilecreatedeviceprofile%28______%29.md): Creates a profile for a device registered with ColorSync.
- [ColorSyncRegisterDevice(\_:\_:\_:)](colorsyncregisterdevice%28______%29.md): Registers a device of the given class with ColorSync.

# ColorSyncUnregisterDevice (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** macOS 10.4+

Unregisters a device of the given class and identifier.

## Declaration

```objectivec
extern bool ColorSyncUnregisterDevice(CFStringRef deviceClass, CFUUIDRef deviceID);
```

## Parameters

- `deviceClass`: The class of the device to unregister.
- `deviceID`: The identifier of the device to unregister.

<a id="return-value"></a>

## Return Value

`true` on success and `false` in case of failure.

## See Also

### Registering and enumerating devices

- [ColorSyncDeviceCopyDeviceInfo](colorsyncdevicecopydeviceinfo%28____%29.md): Copies information about a device, resolved for the current host and current user.
- [ColorSyncDeviceProfileIterateCallback](colorsyncdeviceprofileiteratecallback.md): A callback that ColorSync invokes for each device profile during iteration.
- [ColorSyncDeviceSetCustomProfiles](colorsyncdevicesetcustomprofiles%28______%29.md): Sets custom profiles for a device in lieu of its factory profiles.
- [ColorSyncIterateDeviceProfiles](colorsynciteratedeviceprofiles%28____%29.md): Iterates over the profiles registered for all devices, invoking a callback for each.
- [ColorSyncProfileCreateDeviceProfile](colorsyncprofilecreatedeviceprofile%28______%29.md): Creates a profile for a device registered with ColorSync.
- [ColorSyncRegisterDevice](colorsyncregisterdevice%28______%29.md): Registers a device of the given class with ColorSync.
