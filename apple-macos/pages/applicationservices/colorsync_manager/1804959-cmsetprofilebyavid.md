> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1804959-cmsetprofilebyavid](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1804959-cmsetprofilebyavid)

# CMSetProfileByAVID

**Interface language:** Objective-C

**Framework:** Application Services

Sets the profile for the specified monitor, optionally setting video card gamma.

## Declaration

```objectivec
CMError CMSetProfileByAVID (
   CMDisplayIDType theID,
   CMProfileRef prof
);
```

## Parameters

- `theAVID`: A Display Manager ID value. You pass the ID value for the monitor for which to set the profile.
- `prof`: A profile reference. Before calling `CMSetProfileByAVID`, set the reference to identify the profile for the monitor specified by `theAVID`.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

If you specify a profile that contains the optional profile tag for video card gamma, `CMSetProfileByAVID` extracts the tag and sets the video card based on the tag data. This is the only ColorSync function that sets video card gamma. The tag constant `cmVideoCardGammaTag` is described in [Video Card Gamma Tags](../1560164-video_card_gamma_tags.md).

When a user sets a display profile using the Monitors & Sound control panel, the system profile is set to the same profile. When you call `CMSetProfileByAVID` to set a profile for a monitor, you may also wish to make that profile the system profile. If so, you must call [CMSetSystemProfile](1804932-cmsetsystemprofile.md) explicitly—calling `CMSetProfileByAVID` alone has no affect on the system profile.

Note that if the Display Manager supports ColorSync, the `CMSetProfileByAVID` function calls on the Display Manager to set the profile for the specified display. This is the case if the version of the Display Manager is 2.2.5 or higher (if `gestaltDisplayMgrAttr` has the `gestaltDisplayMgrColorSyncAware` bit set).

## See Also

### Accessing Special Profiles

- [CMGetSystemProfile](1804926-cmgetsystemprofile.md): Obtains a reference to the current system profile.
- [CMSetSystemProfile](1804932-cmsetsystemprofile.md): Sets the current system profile.
- [NCMSetSystemProfile](1804936-ncmsetsystemprofile.md): Sets the location of a color profile.
- [CMGetDefaultProfileBySpace](1804940-cmgetdefaultprofilebyspace.md): Gets the default profile for the specified color space.
- [CMSetDefaultProfileBySpace](1804944-cmsetdefaultprofilebyspace.md): Sets the default profile for the specified color space.
- [CMGetDefaultProfileByUse](1804948-cmgetdefaultprofilebyuse.md): Obtains the users’ preferred device profile setting.
- [CMSetDefaultProfileByUse](1804951-cmsetdefaultprofilebyuse.md): Sets values for device profile settings.
- [CMGetProfileByAVID](1804955-cmgetprofilebyavid.md): Gets the current profile for a monitor.
