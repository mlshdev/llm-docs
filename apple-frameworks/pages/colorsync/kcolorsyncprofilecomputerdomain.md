> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/colorsync/kcolorsyncprofilecomputerdomain

# kColorSyncProfileComputerDomain (Swift)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

The profile domain for profiles shared by all users of the computer.

## Declaration

```swift
var kColorSyncProfileComputerDomain: Unmanaged<CFString>!
```

<a id="discussion"></a>

## Discussion

On macOS, these profiles are in the `/Library/ColorSync/Profiles` folder.

## See Also

### Installing profiles

- [ColorSyncProfileInstall(\_:\_:\_:\_:)](colorsyncprofileinstall%28________%29.md): Installs a profile in the specified domain.
- [ColorSyncProfileUninstall(\_:\_:)](colorsyncprofileuninstall%28____%29.md): Uninstalls a profile.
- [ColorSyncIterateInstalledProfilesWithOptions(\_:\_:\_:\_:\_:)](colorsynciterateinstalledprofileswithoptions%28__________%29.md): Iterates over the installed profiles, using the given options.
- [COLORSYNC_PROFILE_INSTALL_ENTITLEMENT](colorsync_profile_install_entitlement.md)
- [kColorSyncProfileUserDomain](kcolorsyncprofileuserdomain.md): The profile domain for the current user’s profiles.

# kColorSyncProfileComputerDomain (Objective-C)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

The profile domain for profiles shared by all users of the computer.

## Declaration

```objectivec
extern CFStringRef kColorSyncProfileComputerDomain;
```

<a id="discussion"></a>

## Discussion

On macOS, these profiles are in the `/Library/ColorSync/Profiles` folder.

## See Also

### Installing profiles

- [ColorSyncProfileInstall](colorsyncprofileinstall%28________%29.md): Installs a profile in the specified domain.
- [ColorSyncProfileUninstall](colorsyncprofileuninstall%28____%29.md): Uninstalls a profile.
- [ColorSyncIterateInstalledProfilesWithOptions](colorsynciterateinstalledprofileswithoptions%28__________%29.md): Iterates over the installed profiles, using the given options.
- [COLORSYNC_PROFILE_INSTALL_ENTITLEMENT](colorsync_profile_install_entitlement.md)
- [kColorSyncProfileUserDomain](kcolorsyncprofileuserdomain.md): The profile domain for the current user’s profiles.
