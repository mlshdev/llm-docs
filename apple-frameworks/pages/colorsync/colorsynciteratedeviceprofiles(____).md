> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsynciteratedeviceprofiles(_:_:)](https://developer.apple.com/documentation/colorsync/colorsynciteratedeviceprofiles(_:_:))

# ColorSyncIterateDeviceProfiles(\_:\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

Iterates over the profiles registered for all devices, invoking a callback for each.

## Declaration

```swift
func ColorSyncIterateDeviceProfiles(_ callBack: ColorSyncDeviceProfileIterateCallback!, _ userInfo: UnsafeMutableRawPointer?)
```

## Parameters

- `callBack`: The callback to invoke for each registered device profile.
- `userInfo`: Caller-supplied context passed through to the callback. Optional.

## See Also

### Registering and enumerating devices

- [ColorSyncDeviceCopyDeviceInfo(\_:\_:)](colorsyncdevicecopydeviceinfo%28____%29.md): Copies information about a device, resolved for the current host and current user.
- [ColorSyncDeviceProfileIterateCallback](colorsyncdeviceprofileiteratecallback.md): A callback that ColorSync invokes for each device profile during iteration.
- [ColorSyncDeviceSetCustomProfiles(\_:\_:\_:)](colorsyncdevicesetcustomprofiles%28______%29.md): Sets custom profiles for a device in lieu of its factory profiles.
- [ColorSyncProfileCreateDeviceProfile(\_:\_:\_:)](colorsyncprofilecreatedeviceprofile%28______%29.md): Creates a profile for a device registered with ColorSync.
- [ColorSyncRegisterDevice(\_:\_:\_:)](colorsyncregisterdevice%28______%29.md): Registers a device of the given class with ColorSync.
- [ColorSyncUnregisterDevice(\_:\_:)](colorsyncunregisterdevice%28____%29.md): Unregisters a device of the given class and identifier.

# ColorSyncIterateDeviceProfiles (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** macOS 10.4+

Iterates over the profiles registered for all devices, invoking a callback for each.

## Declaration

```objectivec
extern void ColorSyncIterateDeviceProfiles(ColorSyncDeviceProfileIterateCallback callBack, void *userInfo);
```

## Parameters

- `callBack`: The callback to invoke for each registered device profile.
- `userInfo`: Caller-supplied context passed through to the callback. Optional.

## See Also

### Registering and enumerating devices

- [ColorSyncDeviceCopyDeviceInfo](colorsyncdevicecopydeviceinfo%28____%29.md): Copies information about a device, resolved for the current host and current user.
- [ColorSyncDeviceProfileIterateCallback](colorsyncdeviceprofileiteratecallback.md): A callback that ColorSync invokes for each device profile during iteration.
- [ColorSyncDeviceSetCustomProfiles](colorsyncdevicesetcustomprofiles%28______%29.md): Sets custom profiles for a device in lieu of its factory profiles.
- [ColorSyncProfileCreateDeviceProfile](colorsyncprofilecreatedeviceprofile%28______%29.md): Creates a profile for a device registered with ColorSync.
- [ColorSyncRegisterDevice](colorsyncregisterdevice%28______%29.md): Registers a device of the given class with ColorSync.
- [ColorSyncUnregisterDevice](colorsyncunregisterdevice%28____%29.md): Unregisters a device of the given class and identifier.
