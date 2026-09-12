> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/kcolorsyncdeviceprofileisfactory](https://developer.apple.com/documentation/colorsync/kcolorsyncdeviceprofileisfactory)

# kColorSyncDeviceProfileIsFactory (Swift)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

A key in the device-profile-info dictionary whose value indicates whether the profile is a factory profile.

## Declaration

```swift
var kColorSyncDeviceProfileIsFactory: Unmanaged<CFString>!
```

## See Also

### Describing device profiles

- [kColorSyncDeviceDefaultProfileID](kcolorsyncdevicedefaultprofileid.md): A key whose value is the ProfileID of the device’s default profile.
- [kColorSyncDeviceProfileID](kcolorsyncdeviceprofileid.md): A key in the device-profile-info dictionary whose value is the profile’s ProfileID.
- [kColorSyncDeviceProfileURL](kcolorsyncdeviceprofileurl.md): A key whose value is the `CFURLRef` of a device profile.
- [kColorSyncDeviceProfileIsCurrent](kcolorsyncdeviceprofileiscurrent.md): A key in the device-profile-info dictionary whose value indicates whether the profile is the current profile.
- [kColorSyncDeviceProfileIsDefault](kcolorsyncdeviceprofileisdefault.md): A key in the device-profile-info dictionary whose value indicates whether the profile is the default profile.
- [kColorSyncProfileHostScope](kcolorsyncprofilehostscope.md): A key specifying the host preference scope of a profile; currently only `kCFPreferencesCurrentHost` is supported.
- [kColorSyncProfileUserScope](kcolorsyncprofileuserscope.md): A key specifying the user preference scope of a profile; one of `kCFPreferencesCurrentUser` or `kCFPreferencesAnyUser`.

# kColorSyncDeviceProfileIsFactory (Objective-C)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

A key in the device-profile-info dictionary whose value indicates whether the profile is a factory profile.

## Declaration

```objectivec
extern CFStringRef kColorSyncDeviceProfileIsFactory;
```

## See Also

### Describing device profiles

- [kColorSyncDeviceDefaultProfileID](kcolorsyncdevicedefaultprofileid.md): A key whose value is the ProfileID of the device’s default profile.
- [kColorSyncDeviceProfileID](kcolorsyncdeviceprofileid.md): A key in the device-profile-info dictionary whose value is the profile’s ProfileID.
- [kColorSyncDeviceProfileURL](kcolorsyncdeviceprofileurl.md): A key whose value is the `CFURLRef` of a device profile.
- [kColorSyncDeviceProfileIsCurrent](kcolorsyncdeviceprofileiscurrent.md): A key in the device-profile-info dictionary whose value indicates whether the profile is the current profile.
- [kColorSyncDeviceProfileIsDefault](kcolorsyncdeviceprofileisdefault.md): A key in the device-profile-info dictionary whose value indicates whether the profile is the default profile.
- [kColorSyncProfileHostScope](kcolorsyncprofilehostscope.md): A key specifying the host preference scope of a profile; currently only `kCFPreferencesCurrentHost` is supported.
- [kColorSyncProfileUserScope](kcolorsyncprofileuserscope.md): A key specifying the user preference scope of a profile; one of `kCFPreferencesCurrentUser` or `kCFPreferencesAnyUser`.
