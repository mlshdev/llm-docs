> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncdevicesetcustomprofiles(_:_:_:)](https://developer.apple.com/documentation/colorsync/colorsyncdevicesetcustomprofiles(_:_:_:))

# ColorSyncDeviceSetCustomProfiles(\_:\_:\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

Sets custom profiles for a device in lieu of its factory profiles.

## Declaration

```swift
func ColorSyncDeviceSetCustomProfiles(_ deviceClass: CFString!, _ deviceID: CFUUID!, _ profileInfo: CFDictionary!) -> Bool
```

## Parameters

- `deviceClass`: The class of the device.
- `deviceID`: The identifier of the device.
- `profileInfo`: A `CFDictionary` containing the information about custom profiles to set in lieu of factory profiles.

<a id="return-value"></a>

## Return Value

`true` on success and `false` in case of failure.

<a id="discussion"></a>

## Discussion

The `profileInfo` dictionary requires the following keys:

- ProfileIDs, which must be a subset of the ProfileIDs you registered the device with, or [kColorSyncDeviceDefaultProfileID](kcolorsyncdevicedefaultprofileid.md) for setting a custom default profile.

It requires the following values:

- The `CFURLRef` of the profile to set as a custom profile.

It may also include the following optional keys:

- [kColorSyncProfileHostScope](kcolorsyncprofilehostscope.md): The host scope of the profile; one of `kCFPreferencesCurrentHost` or `kCFPreferencesAnyHost`. If you don’t specify it, the framework assumes `kCFPreferencesCurrentHost`.
- [kColorSyncProfileUserScope](kcolorsyncprofileuserscope.md): The user scope of the profile; one of `kCFPreferencesCurrentUser` or `kCFPreferencesAnyUser`. If you don’t specify it, the framework assumes `kCFPreferencesCurrentUser`.

> **Note**

> Profile scope for custom profiles cannot exceed the scope of the factory profiles.

> **Note**

> There is only one host scope and user scope per dictionary (that is, per call).

> **Note**

> Pass `kCFNull` in lieu of the profile URL to unset the custom profile and reset the current profile to the factory profile.

## See Also

### Registering and enumerating devices

- [ColorSyncDeviceCopyDeviceInfo(\_:\_:)](colorsyncdevicecopydeviceinfo%28____%29.md): Copies information about a device, resolved for the current host and current user.
- [ColorSyncDeviceProfileIterateCallback](colorsyncdeviceprofileiteratecallback.md): A callback that ColorSync invokes for each device profile during iteration.
- [ColorSyncIterateDeviceProfiles(\_:\_:)](colorsynciteratedeviceprofiles%28____%29.md): Iterates over the profiles registered for all devices, invoking a callback for each.
- [ColorSyncProfileCreateDeviceProfile(\_:\_:\_:)](colorsyncprofilecreatedeviceprofile%28______%29.md): Creates a profile for a device registered with ColorSync.
- [ColorSyncRegisterDevice(\_:\_:\_:)](colorsyncregisterdevice%28______%29.md): Registers a device of the given class with ColorSync.
- [ColorSyncUnregisterDevice(\_:\_:)](colorsyncunregisterdevice%28____%29.md): Unregisters a device of the given class and identifier.

# ColorSyncDeviceSetCustomProfiles (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** macOS 10.4+

Sets custom profiles for a device in lieu of its factory profiles.

## Declaration

```objectivec
extern bool ColorSyncDeviceSetCustomProfiles(CFStringRef deviceClass, CFUUIDRef deviceID, CFDictionaryRef profileInfo);
```

## Parameters

- `deviceClass`: The class of the device.
- `deviceID`: The identifier of the device.
- `profileInfo`: A `CFDictionary` containing the information about custom profiles to set in lieu of factory profiles.

<a id="return-value"></a>

## Return Value

`true` on success and `false` in case of failure.

<a id="discussion"></a>

## Discussion

The `profileInfo` dictionary requires the following keys:

- ProfileIDs, which must be a subset of the ProfileIDs you registered the device with, or [kColorSyncDeviceDefaultProfileID](kcolorsyncdevicedefaultprofileid.md) for setting a custom default profile.

It requires the following values:

- The `CFURLRef` of the profile to set as a custom profile.

It may also include the following optional keys:

- [kColorSyncProfileHostScope](kcolorsyncprofilehostscope.md): The host scope of the profile; one of `kCFPreferencesCurrentHost` or `kCFPreferencesAnyHost`. If you don’t specify it, the framework assumes `kCFPreferencesCurrentHost`.
- [kColorSyncProfileUserScope](kcolorsyncprofileuserscope.md): The user scope of the profile; one of `kCFPreferencesCurrentUser` or `kCFPreferencesAnyUser`. If you don’t specify it, the framework assumes `kCFPreferencesCurrentUser`.

> **Note**

> Profile scope for custom profiles cannot exceed the scope of the factory profiles.

> **Note**

> There is only one host scope and user scope per dictionary (that is, per call).

> **Note**

> Pass `kCFNull` in lieu of the profile URL to unset the custom profile and reset the current profile to the factory profile.

## See Also

### Registering and enumerating devices

- [ColorSyncDeviceCopyDeviceInfo](colorsyncdevicecopydeviceinfo%28____%29.md): Copies information about a device, resolved for the current host and current user.
- [ColorSyncDeviceProfileIterateCallback](colorsyncdeviceprofileiteratecallback.md): A callback that ColorSync invokes for each device profile during iteration.
- [ColorSyncIterateDeviceProfiles](colorsynciteratedeviceprofiles%28____%29.md): Iterates over the profiles registered for all devices, invoking a callback for each.
- [ColorSyncProfileCreateDeviceProfile](colorsyncprofilecreatedeviceprofile%28______%29.md): Creates a profile for a device registered with ColorSync.
- [ColorSyncRegisterDevice](colorsyncregisterdevice%28______%29.md): Registers a device of the given class with ColorSync.
- [ColorSyncUnregisterDevice](colorsyncunregisterdevice%28____%29.md): Unregisters a device of the given class and identifier.
