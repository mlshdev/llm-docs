> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/kcolorsyncprofileuserscope](https://developer.apple.com/documentation/colorsync/kcolorsyncprofileuserscope)

# kColorSyncProfileUserScope (Swift)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

A key specifying the user preference scope of a profile; one of `kCFPreferencesCurrentUser` or `kCFPreferencesAnyUser`.

## Declaration

```swift
var kColorSyncProfileUserScope: Unmanaged<CFString>!
```

## See Also

### Describing device profiles

- [kColorSyncDeviceDefaultProfileID](kcolorsyncdevicedefaultprofileid.md): A key whose value is the ProfileID of the device’s default profile.
- [kColorSyncDeviceProfileID](kcolorsyncdeviceprofileid.md): A key in the device-profile-info dictionary whose value is the profile’s ProfileID.
- [kColorSyncDeviceProfileURL](kcolorsyncdeviceprofileurl.md): A key whose value is the `CFURLRef` of a device profile.
- [kColorSyncDeviceProfileIsCurrent](kcolorsyncdeviceprofileiscurrent.md): A key in the device-profile-info dictionary whose value indicates whether the profile is the current profile.
- [kColorSyncDeviceProfileIsDefault](kcolorsyncdeviceprofileisdefault.md): A key in the device-profile-info dictionary whose value indicates whether the profile is the default profile.
- [kColorSyncDeviceProfileIsFactory](kcolorsyncdeviceprofileisfactory.md): A key in the device-profile-info dictionary whose value indicates whether the profile is a factory profile.
- [kColorSyncProfileHostScope](kcolorsyncprofilehostscope.md): A key specifying the host preference scope of a profile; currently only `kCFPreferencesCurrentHost` is supported.

# kColorSyncProfileUserScope (Objective-C)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

A key specifying the user preference scope of a profile; one of `kCFPreferencesCurrentUser` or `kCFPreferencesAnyUser`.

## Declaration

```objectivec
extern CFStringRef kColorSyncProfileUserScope;
```

## See Also

### Describing device profiles

- [kColorSyncDeviceDefaultProfileID](kcolorsyncdevicedefaultprofileid.md): A key whose value is the ProfileID of the device’s default profile.
- [kColorSyncDeviceProfileID](kcolorsyncdeviceprofileid.md): A key in the device-profile-info dictionary whose value is the profile’s ProfileID.
- [kColorSyncDeviceProfileURL](kcolorsyncdeviceprofileurl.md): A key whose value is the `CFURLRef` of a device profile.
- [kColorSyncDeviceProfileIsCurrent](kcolorsyncdeviceprofileiscurrent.md): A key in the device-profile-info dictionary whose value indicates whether the profile is the current profile.
- [kColorSyncDeviceProfileIsDefault](kcolorsyncdeviceprofileisdefault.md): A key in the device-profile-info dictionary whose value indicates whether the profile is the default profile.
- [kColorSyncDeviceProfileIsFactory](kcolorsyncdeviceprofileisfactory.md): A key in the device-profile-info dictionary whose value indicates whether the profile is a factory profile.
- [kColorSyncProfileHostScope](kcolorsyncprofilehostscope.md): A key specifying the host preference scope of a profile; currently only `kCFPreferencesCurrentHost` is supported.
