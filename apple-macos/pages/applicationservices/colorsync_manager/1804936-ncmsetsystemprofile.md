> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1804936-ncmsetsystemprofile](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1804936-ncmsetsystemprofile)

# NCMSetSystemProfile

**Interface language:** Objective-C

**Framework:** Application Services

Sets the location of a color profile.

## Declaration

```objectivec
CMError NCMSetSystemProfile (
   const CMProfileLocation *profLoc
);
```

## Parameters

- `profLoc`: The location of the profile. Commonly a profile is disk-file based. However, the profile may be a file-based profile, a handle-based profile, or a pointer-based profile.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

Prior to ColorSync 2.6, the function for setting the system profile supported only the `FSSpec` file specification type as a way of specifying a profile. This function allows for greater flexibility when specifying a system profile.

## See Also

### Accessing Special Profiles

- [CMGetSystemProfile](1804926-cmgetsystemprofile.md): Obtains a reference to the current system profile.
- [CMSetSystemProfile](1804932-cmsetsystemprofile.md): Sets the current system profile.
- [CMGetDefaultProfileBySpace](1804940-cmgetdefaultprofilebyspace.md): Gets the default profile for the specified color space.
- [CMSetDefaultProfileBySpace](1804944-cmsetdefaultprofilebyspace.md): Sets the default profile for the specified color space.
- [CMGetDefaultProfileByUse](1804948-cmgetdefaultprofilebyuse.md): Obtains the users’ preferred device profile setting.
- [CMSetDefaultProfileByUse](1804951-cmsetdefaultprofilebyuse.md): Sets values for device profile settings.
- [CMGetProfileByAVID](1804955-cmgetprofilebyavid.md): Gets the current profile for a monitor.
- [CMSetProfileByAVID](1804959-cmsetprofilebyavid.md): Sets the profile for the specified monitor, optionally setting video card gamma.
