> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofilecreatedeviceprofile(_:_:_:)](https://developer.apple.com/documentation/colorsync/colorsyncprofilecreatedeviceprofile(_:_:_:))

# ColorSyncProfileCreateDeviceProfile(\_:\_:\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

Creates a profile for a device registered with ColorSync.

## Declaration

```swift
func ColorSyncProfileCreateDeviceProfile(_ deviceClass: CFString!, _ deviceID: CFUUID!, _ profileID: CFTypeRef!) -> Unmanaged<ColorSyncProfile>?
```

## Parameters

- `deviceClass`: The ColorSync device class.
- `deviceID`: The device ID registered with ColorSync.
- `profileID`: The profile ID registered with ColorSync; pass [kColorSyncDeviceDefaultProfileID](kcolorsyncdevicedefaultprofileid.md) to get the default profile.

<a id="return-value"></a>

## Return Value

A new profile, or `NULL` in case of failure.

<a id="discussion"></a>

## Discussion

See `ColorSyncDevice.h` for more information on `deviceClass`, `deviceID`, and `profileID`.

## See Also

### Registering and enumerating devices

- [ColorSyncDeviceCopyDeviceInfo(\_:\_:)](colorsyncdevicecopydeviceinfo%28____%29.md): Copies information about a device, resolved for the current host and current user.
- [ColorSyncDeviceProfileIterateCallback](colorsyncdeviceprofileiteratecallback.md): A callback that ColorSync invokes for each device profile during iteration.
- [ColorSyncDeviceSetCustomProfiles(\_:\_:\_:)](colorsyncdevicesetcustomprofiles%28______%29.md): Sets custom profiles for a device in lieu of its factory profiles.
- [ColorSyncIterateDeviceProfiles(\_:\_:)](colorsynciteratedeviceprofiles%28____%29.md): Iterates over the profiles registered for all devices, invoking a callback for each.
- [ColorSyncRegisterDevice(\_:\_:\_:)](colorsyncregisterdevice%28______%29.md): Registers a device of the given class with ColorSync.
- [ColorSyncUnregisterDevice(\_:\_:)](colorsyncunregisterdevice%28____%29.md): Unregisters a device of the given class and identifier.

# ColorSyncProfileCreateDeviceProfile (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** macOS 10.4+

Creates a profile for a device registered with ColorSync.

## Declaration

```objectivec
extern ColorSyncProfileRefColorSyncProfileCreateDeviceProfile(CFStringRef deviceClass, CFUUIDRef deviceID, CFTypeRef profileID);
```

## Parameters

- `deviceClass`: The ColorSync device class.
- `deviceID`: The device ID registered with ColorSync.
- `profileID`: The profile ID registered with ColorSync; pass [kColorSyncDeviceDefaultProfileID](kcolorsyncdevicedefaultprofileid.md) to get the default profile.

<a id="return-value"></a>

## Return Value

A new profile, or `NULL` in case of failure.

<a id="discussion"></a>

## Discussion

See `ColorSyncDevice.h` for more information on `deviceClass`, `deviceID`, and `profileID`.

## See Also

### Registering and enumerating devices

- [ColorSyncDeviceCopyDeviceInfo](colorsyncdevicecopydeviceinfo%28____%29.md): Copies information about a device, resolved for the current host and current user.
- [ColorSyncDeviceProfileIterateCallback](colorsyncdeviceprofileiteratecallback.md): A callback that ColorSync invokes for each device profile during iteration.
- [ColorSyncDeviceSetCustomProfiles](colorsyncdevicesetcustomprofiles%28______%29.md): Sets custom profiles for a device in lieu of its factory profiles.
- [ColorSyncIterateDeviceProfiles](colorsynciteratedeviceprofiles%28____%29.md): Iterates over the profiles registered for all devices, invoking a callback for each.
- [ColorSyncRegisterDevice](colorsyncregisterdevice%28______%29.md): Registers a device of the given class with ColorSync.
- [ColorSyncUnregisterDevice](colorsyncunregisterdevice%28____%29.md): Unregisters a device of the given class and identifier.
