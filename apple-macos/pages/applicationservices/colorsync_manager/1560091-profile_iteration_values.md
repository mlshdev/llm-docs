> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1560091-profile_iteration_values](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1560091-profile_iteration_values)

# Profile Iteration Values

**Framework:** Application Services

Specify profiles to iterate.

<a id="overview"></a>

## Overview

These are possible values for flags passed to the function `CMIterateDeviceProfiles`.

## Topics

### Constants

- [cmIterateFactoryDeviceProfiles](../cmiteratefactorydeviceprofiles.md): Iterate profiles registered through the routine `CMSetDeviceFactoryProfiles`. To retrieve all factory profiles for all devices, use `cmIterateFactoryDeviceProfiles` as the flags value when calling `CMIterateDeviceProfiles`. I
- [cmIterateCustomDeviceProfiles](../cmiteratecustomdeviceprofiles.md)
- [cmIterateCurrentDeviceProfiles](../cmiteratecurrentdeviceprofiles.md)
- [cmIterateAllDeviceProfiles](../cmiteratealldeviceprofiles.md): Iterate all profiles, without replacement.
- [cmIterateDeviceProfilesMask](../cmiteratedeviceprofilesmask.md)
