> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1804951-cmsetdefaultprofilebyuse](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1804951-cmsetdefaultprofilebyuse)

# CMSetDefaultProfileByUse

**Interface language:** Objective-C

**Framework:** Application Services

Sets values for device profile settings.

## Declaration

```objectivec
CMError CMSetDefaultProfileByUse (
   OSType use,
   CMProfileRef prof
);
```

## Parameters

- `use`: A value that specifies the device type for which to set the profile.
- `prof`:

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

## See Also

### Accessing Special Profiles

- [CMGetSystemProfile](1804926-cmgetsystemprofile.md): Obtains a reference to the current system profile.
- [CMSetSystemProfile](1804932-cmsetsystemprofile.md): Sets the current system profile.
- [NCMSetSystemProfile](1804936-ncmsetsystemprofile.md): Sets the location of a color profile.
- [CMGetDefaultProfileBySpace](1804940-cmgetdefaultprofilebyspace.md): Gets the default profile for the specified color space.
- [CMSetDefaultProfileBySpace](1804944-cmsetdefaultprofilebyspace.md): Sets the default profile for the specified color space.
- [CMGetDefaultProfileByUse](1804948-cmgetdefaultprofilebyuse.md): Obtains the users’ preferred device profile setting.
- [CMGetProfileByAVID](1804955-cmgetprofilebyavid.md): Gets the current profile for a monitor.
- [CMSetProfileByAVID](1804959-cmsetprofilebyavid.md): Sets the profile for the specified monitor, optionally setting video card gamma.
