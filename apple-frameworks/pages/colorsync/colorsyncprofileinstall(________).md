> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofileinstall(_:_:_:_:)](https://developer.apple.com/documentation/colorsync/colorsyncprofileinstall(_:_:_:_:))

# ColorSyncProfileInstall(\_:\_:\_:\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

Installs a profile in the specified domain.

## Declaration

```swift
func ColorSyncProfileInstall(_ profile: ColorSyncProfile!, _ domain: CFString!, _ subpath: CFString!, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> Bool
```

## Parameters

- `profile`: The profile to install.
- `domain`: The domain to install into, either [kColorSyncProfileComputerDomain](kcolorsyncprofilecomputerdomain.md) or [kColorSyncProfileUserDomain](kcolorsyncprofileuserdomain.md).
- `subpath`: A string created from the file system representation of the path of the file to contain the installed profile.
- `error`: On failure, a pointer to an error describing the problem. Optional.

<a id="return-value"></a>

## Return Value

`true` on success, or `false` in case of error.

<a id="discussion"></a>

## Discussion

The `domain` is either [kColorSyncProfileComputerDomain](kcolorsyncprofilecomputerdomain.md) or [kColorSyncProfileUserDomain](kcolorsyncprofileuserdomain.md). [kColorSyncProfileComputerDomain](kcolorsyncprofilecomputerdomain.md) is for sharing the profiles (from `/Library/ColorSync/Profiles`). [kColorSyncProfileUserDomain](kcolorsyncprofileuserdomain.md) is for user custom profiles (installed under the home directory, that is, in `~/Library/ColorSync/Profiles`). `NULL` is the same as [kColorSyncProfileUserDomain](kcolorsyncprofileuserdomain.md).

The `subpath` is the file system representation of the path of the file to contain the installed profile. The function interprets the last component of the path as a file name if it ends with the extension `.icc`. Otherwise, the function interprets the subpath as the directory path and creates the file name from the profile description tag, appended with the `.icc` extension.

Using this function requires `COLORSYNC_PROFILE_INSTALL_ENTITLEMENT`.

## See Also

### Installing profiles

- [ColorSyncProfileUninstall(\_:\_:)](colorsyncprofileuninstall%28____%29.md): Uninstalls a profile.
- [ColorSyncIterateInstalledProfilesWithOptions(\_:\_:\_:\_:\_:)](colorsynciterateinstalledprofileswithoptions%28__________%29.md): Iterates over the installed profiles, using the given options.
- [COLORSYNC_PROFILE_INSTALL_ENTITLEMENT](colorsync_profile_install_entitlement.md)
- [kColorSyncProfileComputerDomain](kcolorsyncprofilecomputerdomain.md): The profile domain for profiles shared by all users of the computer.
- [kColorSyncProfileUserDomain](kcolorsyncprofileuserdomain.md): The profile domain for the current user’s profiles.

# ColorSyncProfileInstall (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** macOS 10.4+

Installs a profile in the specified domain.

## Declaration

```objectivec
extern bool ColorSyncProfileInstall(ColorSyncProfileRef profile, CFStringRef domain, CFStringRef subpath, CFErrorRef*error);
```

## Parameters

- `profile`: The profile to install.
- `domain`: The domain to install into, either [kColorSyncProfileComputerDomain](kcolorsyncprofilecomputerdomain.md) or [kColorSyncProfileUserDomain](kcolorsyncprofileuserdomain.md).
- `subpath`: A string created from the file system representation of the path of the file to contain the installed profile.
- `error`: On failure, a pointer to an error describing the problem. Optional.

<a id="return-value"></a>

## Return Value

`true` on success, or `false` in case of error.

<a id="discussion"></a>

## Discussion

The `domain` is either [kColorSyncProfileComputerDomain](kcolorsyncprofilecomputerdomain.md) or [kColorSyncProfileUserDomain](kcolorsyncprofileuserdomain.md). [kColorSyncProfileComputerDomain](kcolorsyncprofilecomputerdomain.md) is for sharing the profiles (from `/Library/ColorSync/Profiles`). [kColorSyncProfileUserDomain](kcolorsyncprofileuserdomain.md) is for user custom profiles (installed under the home directory, that is, in `~/Library/ColorSync/Profiles`). `NULL` is the same as [kColorSyncProfileUserDomain](kcolorsyncprofileuserdomain.md).

The `subpath` is the file system representation of the path of the file to contain the installed profile. The function interprets the last component of the path as a file name if it ends with the extension `.icc`. Otherwise, the function interprets the subpath as the directory path and creates the file name from the profile description tag, appended with the `.icc` extension.

Using this function requires `COLORSYNC_PROFILE_INSTALL_ENTITLEMENT`.

## See Also

### Installing profiles

- [ColorSyncProfileUninstall](colorsyncprofileuninstall%28____%29.md): Uninstalls a profile.
- [ColorSyncIterateInstalledProfilesWithOptions](colorsynciterateinstalledprofileswithoptions%28__________%29.md): Iterates over the installed profiles, using the given options.
- [COLORSYNC_PROFILE_INSTALL_ENTITLEMENT](colorsync_profile_install_entitlement.md)
- [kColorSyncProfileComputerDomain](kcolorsyncprofilecomputerdomain.md): The profile domain for profiles shared by all users of the computer.
- [kColorSyncProfileUserDomain](kcolorsyncprofileuserdomain.md): The profile domain for the current user’s profiles.
