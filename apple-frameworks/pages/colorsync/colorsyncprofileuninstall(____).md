> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofileuninstall(_:_:)](https://developer.apple.com/documentation/colorsync/colorsyncprofileuninstall(_:_:))

# ColorSyncProfileUninstall(\_:\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

Uninstalls a profile.

## Declaration

```swift
func ColorSyncProfileUninstall(_ profile: ColorSyncProfile!, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> Bool
```

## Parameters

- `profile`: The profile to uninstall.
- `error`: On failure, a pointer to an error describing the problem. Optional.

<a id="return-value"></a>

## Return Value

`true` on success, or `false` in case of error.

<a id="discussion"></a>

## Discussion

The profile must return a valid URL for [ColorSyncProfileGetURL(\_:\_:)](colorsyncprofilegeturl%28____%29.md); that is, it must be created with [ColorSyncProfileCreateWithURL(\_:\_:)](colorsyncprofilecreatewithurl%28____%29.md). Also, the URL must be in either [kColorSyncProfileComputerDomain](kcolorsyncprofilecomputerdomain.md) or [kColorSyncProfileUserDomain](kcolorsyncprofileuserdomain.md), including subfolders of those.

Using this function requires `COLORSYNC_PROFILE_INSTALL_ENTITLEMENT`.

## See Also

### Installing profiles

- [ColorSyncProfileInstall(\_:\_:\_:\_:)](colorsyncprofileinstall%28________%29.md): Installs a profile in the specified domain.
- [ColorSyncIterateInstalledProfilesWithOptions(\_:\_:\_:\_:\_:)](colorsynciterateinstalledprofileswithoptions%28__________%29.md): Iterates over the installed profiles, using the given options.
- [COLORSYNC_PROFILE_INSTALL_ENTITLEMENT](colorsync_profile_install_entitlement.md)
- [kColorSyncProfileComputerDomain](kcolorsyncprofilecomputerdomain.md): The profile domain for profiles shared by all users of the computer.
- [kColorSyncProfileUserDomain](kcolorsyncprofileuserdomain.md): The profile domain for the current user’s profiles.

# ColorSyncProfileUninstall (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** macOS 10.4+

Uninstalls a profile.

## Declaration

```objectivec
extern bool ColorSyncProfileUninstall(ColorSyncProfileRef profile, CFErrorRef*error);
```

## Parameters

- `profile`: The profile to uninstall.
- `error`: On failure, a pointer to an error describing the problem. Optional.

<a id="return-value"></a>

## Return Value

`true` on success, or `false` in case of error.

<a id="discussion"></a>

## Discussion

The profile must return a valid URL for [ColorSyncProfileGetURL](colorsyncprofilegeturl%28____%29.md); that is, it must be created with [ColorSyncProfileCreateWithURL](colorsyncprofilecreatewithurl%28____%29.md). Also, the URL must be in either [kColorSyncProfileComputerDomain](kcolorsyncprofilecomputerdomain.md) or [kColorSyncProfileUserDomain](kcolorsyncprofileuserdomain.md), including subfolders of those.

Using this function requires `COLORSYNC_PROFILE_INSTALL_ENTITLEMENT`.

## See Also

### Installing profiles

- [ColorSyncProfileInstall](colorsyncprofileinstall%28________%29.md): Installs a profile in the specified domain.
- [ColorSyncIterateInstalledProfilesWithOptions](colorsynciterateinstalledprofileswithoptions%28__________%29.md): Iterates over the installed profiles, using the given options.
- [COLORSYNC_PROFILE_INSTALL_ENTITLEMENT](colorsync_profile_install_entitlement.md)
- [kColorSyncProfileComputerDomain](kcolorsyncprofilecomputerdomain.md): The profile domain for profiles shared by all users of the computer.
- [kColorSyncProfileUserDomain](kcolorsyncprofileuserdomain.md): The profile domain for the current user’s profiles.
