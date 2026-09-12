> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsynciterateinstalledprofileswithoptions(_:_:_:_:_:)](https://developer.apple.com/documentation/colorsync/colorsynciterateinstalledprofileswithoptions(_:_:_:_:_:))

# ColorSyncIterateInstalledProfilesWithOptions(\_:\_:\_:\_:\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

Iterates over the installed profiles, using the given options.

## Declaration

```swift
func ColorSyncIterateInstalledProfilesWithOptions(_ callBack: ColorSyncProfileIterateCallback?, _ seed: UnsafeMutablePointer<UInt32>?, _ userInfo: UnsafeMutableRawPointer?, _ options: CFDictionary?, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?)
```

## Parameters

- `callBack`: A pointer to a client-provided function (can be `NULL`).
- `seed`: A pointer to a cache seed owned by the client.
- `userInfo`: User-defined data passed to the callback.
- `options`: A dictionary with iteration options, for example [kColorSyncWaitForCacheReply](kcolorsyncwaitforcachereply.md) to wait for the cache to finish updating before returning.
- `error`: On failure, a pointer to an error describing the problem. Optional.

## See Also

### Installing profiles

- [ColorSyncProfileInstall(\_:\_:\_:\_:)](colorsyncprofileinstall%28________%29.md): Installs a profile in the specified domain.
- [ColorSyncProfileUninstall(\_:\_:)](colorsyncprofileuninstall%28____%29.md): Uninstalls a profile.
- [COLORSYNC_PROFILE_INSTALL_ENTITLEMENT](colorsync_profile_install_entitlement.md)
- [kColorSyncProfileComputerDomain](kcolorsyncprofilecomputerdomain.md): The profile domain for profiles shared by all users of the computer.
- [kColorSyncProfileUserDomain](kcolorsyncprofileuserdomain.md): The profile domain for the current user’s profiles.

# ColorSyncIterateInstalledProfilesWithOptions (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** macOS 10.4+

Iterates over the installed profiles, using the given options.

## Declaration

```objectivec
extern void ColorSyncIterateInstalledProfilesWithOptions(ColorSyncProfileIterateCallback callBack, uint32_t *seed, void *userInfo, CFDictionaryRef options, CFErrorRef*error);
```

## Parameters

- `callBack`: A pointer to a client-provided function (can be `NULL`).
- `seed`: A pointer to a cache seed owned by the client.
- `userInfo`: User-defined data passed to the callback.
- `options`: A dictionary with iteration options, for example [kColorSyncWaitForCacheReply](kcolorsyncwaitforcachereply.md) to wait for the cache to finish updating before returning.
- `error`: On failure, a pointer to an error describing the problem. Optional.

## See Also

### Installing profiles

- [ColorSyncProfileInstall](colorsyncprofileinstall%28________%29.md): Installs a profile in the specified domain.
- [ColorSyncProfileUninstall](colorsyncprofileuninstall%28____%29.md): Uninstalls a profile.
- [COLORSYNC_PROFILE_INSTALL_ENTITLEMENT](colorsync_profile_install_entitlement.md)
- [kColorSyncProfileComputerDomain](kcolorsyncprofilecomputerdomain.md): The profile domain for profiles shared by all users of the computer.
- [kColorSyncProfileUserDomain](kcolorsyncprofileuserdomain.md): The profile domain for the current user’s profiles.
