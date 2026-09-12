> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1805240-cmgetdevicefactoryprofiles](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1805240-cmgetdevicefactoryprofiles)

# CMGetDeviceFactoryProfiles

**Interface language:** Objective-C

**Framework:** Application Services

Retrieves the original profiles for a given device.

## Declaration

```objectivec
CMError CMGetDeviceFactoryProfiles (
   CMDeviceClass deviceClass,
   CMDeviceID deviceID,
   CMDeviceProfileID *defaultProfID,
   UInt32 *arraySize,
   CMDeviceProfileArray *deviceProfiles
);
```

## Parameters

- `deviceClass`: The device class to query. See [CMDeviceClass](../cmdeviceclass.md) for a list of the constants you can supply.
- `deviceID`: The device ID to query.
- `defaultProfID`: A pointer to the default profile for this device.
- `arraySize`: A pointer to the size of the array to be returned. You can first call this routine to get the size returned, then call it again with the size of the buffer to receive the array.
- `deviceProfiles`: On output, points to the profile array. You can first pass `NULL` in this parameter to receive the size of the array in the `arraySize` parameter. Then, once the appropriate amount of storage has been allocated, a pointer to it can be passed in this parameter to have the array copied to that storage.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

This function allows you to retrieve the original profiles for a given device. These may differ from the actual profiles in use for that device, in the case where any factory profiles have been replaced (updated). To get the actual profiles in use, call `CMGetDeviceProfiles`.

## See Also

### Accessing Devices Profiles

- [CMSetDeviceFactoryProfiles](1805241-cmsetdevicefactoryprofiles.md): Establishes the profiles used by a given device.
- [CMGetDeviceProfiles](1805245-cmgetdeviceprofiles.md): Gets the profiles used by a given device.
- [CMSetDeviceProfiles](1805247-cmsetdeviceprofiles.md): Changes the profiles used by a given device.
- [CMGetDeviceDefaultProfileID](1805249-cmgetdevicedefaultprofileid.md): Gets the default profile ID for a given device.
- [CMSetDeviceDefaultProfileID](1805251-cmsetdevicedefaultprofileid.md): Sets the default profile ID for a given device.
- [CMSetDeviceProfile](1805253-cmsetdeviceprofile.md): Change the profile used by a given device.
- [CMGetDeviceProfile](1805256-cmgetdeviceprofile.md): Gets a profile used by a given device.
