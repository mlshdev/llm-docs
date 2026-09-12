> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1804932-cmsetsystemprofile](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1804932-cmsetsystemprofile)

# CMSetSystemProfile

**Interface language:** Objective-C

**Framework:** Application Services

Sets the current system profile.

## Declaration

```objectivec
CMError CMSetSystemProfile (
   const FSSpec *profileFileSpec
);
```

## Parameters

- `profileFileSpec`: A pointer to a file specification structure. Before calling `CMSetSystemProfile`, set the structure to specify the desired system profile.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

By default, a standard RGB profile is configured as the system profile. By calling the `CMSetSystemProfile` function, your application can specify a new system profile. You can configure only a display device profile as the system profile. 

<a id="1819347"></a>

### Version-Notes

Starting with version 2.5, use of the system profile has changed.

The function `CMSetSystemProfile` does not retrieve video card gamma data (introduced in ColorSync version 2.5) to set the video card; use the function [CMSetProfileByAVID](1804959-cmsetprofilebyavid.md) instead.

## See Also

### Accessing Special Profiles

- [CMGetSystemProfile](1804926-cmgetsystemprofile.md): Obtains a reference to the current system profile.
- [NCMSetSystemProfile](1804936-ncmsetsystemprofile.md): Sets the location of a color profile.
- [CMGetDefaultProfileBySpace](1804940-cmgetdefaultprofilebyspace.md): Gets the default profile for the specified color space.
- [CMSetDefaultProfileBySpace](1804944-cmsetdefaultprofilebyspace.md): Sets the default profile for the specified color space.
- [CMGetDefaultProfileByUse](1804948-cmgetdefaultprofilebyuse.md): Obtains the users’ preferred device profile setting.
- [CMSetDefaultProfileByUse](1804951-cmsetdefaultprofilebyuse.md): Sets values for device profile settings.
- [CMGetProfileByAVID](1804955-cmgetprofilebyavid.md): Gets the current profile for a monitor.
- [CMSetProfileByAVID](1804959-cmsetprofilebyavid.md): Sets the profile for the specified monitor, optionally setting video card gamma.
