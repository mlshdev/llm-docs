> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncdeviceprofileiteratecallback](https://developer.apple.com/documentation/colorsync/colorsyncdeviceprofileiteratecallback)

# ColorSyncDeviceProfileIterateCallback (Swift)

**Framework:** ColorSync  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

A callback that ColorSync invokes for each device profile during iteration.

## Declaration

```swift
typealias ColorSyncDeviceProfileIterateCallback = (CFDictionary?, UnsafeMutableRawPointer?) -> Bool
```

## Parameters

- `colorSyncDeviceProfileInfo`: A dictionary describing the device profile.
- `userInfo`: The user info passed to the iteration function. Optional.

<a id="discussion"></a>

## Discussion

The `colorSyncDeviceProfileInfo` dictionary contains the following keys:

```
kColorSyncDeviceClass              {camera, display, printer, scanner}
kColorSyncDeviceID                 {CFUUIDRef registered with ColorSync}
kColorSyncDeviceDescription        {localized device description}
kColorSyncDeviceModeDescription    {localized device mode description}
kColorSyncDeviceProfileID          {ProfileID registered with ColorSync}
kColorSyncDeviceProfileURL         {CFURLRef registered with ColorSync}
kColorSyncDeviceProfileIsFactory   {kCFBooleanTrue or kCFBooleanFalse}
kColorSyncDeviceProfileIsDefault   {kCFBooleanTrue or kCFBooleanFalse}
kColorSyncDeviceProfileIsCurrent   {kCFBooleanTrue or kCFBooleanFalse}
```

## See Also

### Registering and enumerating devices

- [ColorSyncDeviceCopyDeviceInfo(\_:\_:)](colorsyncdevicecopydeviceinfo%28____%29.md): Copies information about a device, resolved for the current host and current user.
- [ColorSyncDeviceSetCustomProfiles(\_:\_:\_:)](colorsyncdevicesetcustomprofiles%28______%29.md): Sets custom profiles for a device in lieu of its factory profiles.
- [ColorSyncIterateDeviceProfiles(\_:\_:)](colorsynciteratedeviceprofiles%28____%29.md): Iterates over the profiles registered for all devices, invoking a callback for each.
- [ColorSyncProfileCreateDeviceProfile(\_:\_:\_:)](colorsyncprofilecreatedeviceprofile%28______%29.md): Creates a profile for a device registered with ColorSync.
- [ColorSyncRegisterDevice(\_:\_:\_:)](colorsyncregisterdevice%28______%29.md): Registers a device of the given class with ColorSync.
- [ColorSyncUnregisterDevice(\_:\_:)](colorsyncunregisterdevice%28____%29.md): Unregisters a device of the given class and identifier.

# ColorSyncDeviceProfileIterateCallback (Objective-C)

**Framework:** ColorSync  
**Kind:** Type Alias  
**Availability:** macOS 10.4+

A callback that ColorSync invokes for each device profile during iteration.

## Declaration

```objectivec
typedef _Bool (*)(const struct __CFDictionary *, void *) ColorSyncDeviceProfileIterateCallback;
```

## Parameters

- `colorSyncDeviceProfileInfo`: A dictionary describing the device profile.
- `userInfo`: The user info passed to the iteration function. Optional.

<a id="discussion"></a>

## Discussion

The `colorSyncDeviceProfileInfo` dictionary contains the following keys:

```
kColorSyncDeviceClass              {camera, display, printer, scanner}
kColorSyncDeviceID                 {CFUUIDRef registered with ColorSync}
kColorSyncDeviceDescription        {localized device description}
kColorSyncDeviceModeDescription    {localized device mode description}
kColorSyncDeviceProfileID          {ProfileID registered with ColorSync}
kColorSyncDeviceProfileURL         {CFURLRef registered with ColorSync}
kColorSyncDeviceProfileIsFactory   {kCFBooleanTrue or kCFBooleanFalse}
kColorSyncDeviceProfileIsDefault   {kCFBooleanTrue or kCFBooleanFalse}
kColorSyncDeviceProfileIsCurrent   {kCFBooleanTrue or kCFBooleanFalse}
```

## See Also

### Registering and enumerating devices

- [ColorSyncDeviceCopyDeviceInfo](colorsyncdevicecopydeviceinfo%28____%29.md): Copies information about a device, resolved for the current host and current user.
- [ColorSyncDeviceSetCustomProfiles](colorsyncdevicesetcustomprofiles%28______%29.md): Sets custom profiles for a device in lieu of its factory profiles.
- [ColorSyncIterateDeviceProfiles](colorsynciteratedeviceprofiles%28____%29.md): Iterates over the profiles registered for all devices, invoking a callback for each.
- [ColorSyncProfileCreateDeviceProfile](colorsyncprofilecreatedeviceprofile%28______%29.md): Creates a profile for a device registered with ColorSync.
- [ColorSyncRegisterDevice](colorsyncregisterdevice%28______%29.md): Registers a device of the given class with ColorSync.
- [ColorSyncUnregisterDevice](colorsyncunregisterdevice%28____%29.md): Unregisters a device of the given class and identifier.
