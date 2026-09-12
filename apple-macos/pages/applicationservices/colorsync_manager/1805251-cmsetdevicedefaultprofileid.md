> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1805251-cmsetdevicedefaultprofileid](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1805251-cmsetdevicedefaultprofileid)

# CMSetDeviceDefaultProfileID

**Interface language:** Objective-C

**Framework:** Application Services

Sets the default profile ID for a given device.

## Declaration

```objectivec
CMError CMSetDeviceDefaultProfileID (
   CMDeviceClass deviceClass,
   CMDeviceID deviceID,
   CMDeviceProfileID defaultProfID
);
```

## Parameters

- `deviceClass`: The device class for the device whose default profile you want to set. See [CMDeviceClass](../cmdeviceclass.md) for a list of the constants you can supply.
- `deviceID`: The device ID for the device whose default profile you want to set.
- `defaultID`: The ID of profile you want to set as the default.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

The default profile ID for a given device is an important piece of information because of the function `CMGetProfileByUse`. The function `CMGetProfileByUse` returns the default profile for devices depending on the user's selection in the ColorSync preferences pane. Device drivers and host software can set the default profile for a given device using the function `CMSetDeviceDefaultProfileID`.

## See Also

### Accessing Devices Profiles

- [CMGetDeviceFactoryProfiles](1805240-cmgetdevicefactoryprofiles.md): Retrieves the original profiles for a given device.
- [CMSetDeviceFactoryProfiles](1805241-cmsetdevicefactoryprofiles.md): Establishes the profiles used by a given device.
- [CMGetDeviceProfiles](1805245-cmgetdeviceprofiles.md): Gets the profiles used by a given device.
- [CMSetDeviceProfiles](1805247-cmsetdeviceprofiles.md): Changes the profiles used by a given device.
- [CMGetDeviceDefaultProfileID](1805249-cmgetdevicedefaultprofileid.md): Gets the default profile ID for a given device.
- [CMSetDeviceProfile](1805253-cmsetdeviceprofile.md): Change the profile used by a given device.
- [CMGetDeviceProfile](1805256-cmgetdeviceprofile.md): Gets a profile used by a given device.
