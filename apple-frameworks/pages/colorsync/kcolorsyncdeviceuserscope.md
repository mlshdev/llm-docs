> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/kcolorsyncdeviceuserscope](https://developer.apple.com/documentation/colorsync/kcolorsyncdeviceuserscope)

# kColorSyncDeviceUserScope (Swift)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

A key specifying the user preference scope of a device; one of `kCFPreferencesCurrentUser` or `kCFPreferencesAnyUser`.

## Declaration

```swift
var kColorSyncDeviceUserScope: Unmanaged<CFString>!
```

## See Also

### Describing devices

- [kColorSyncDeviceID](kcolorsyncdeviceid.md): A key whose value is the `CFUUIDRef` identifying the device.
- [kColorSyncDeviceDescription](kcolorsyncdevicedescription.md): A key whose value is the device’s localized name in the current locale.
- [kColorSyncDeviceDescriptions](kcolorsyncdevicedescriptions.md): A key whose value is a `CFDictionary` of the device’s localized names.
- [kColorSyncDeviceModeDescription](kcolorsyncdevicemodedescription.md): A key whose value is the device mode’s localized name in the current locale.
- [kColorSyncDeviceModeDescriptions](kcolorsyncdevicemodedescriptions.md): A key whose value is a `CFDictionary` of the device mode’s localized names.
- [kColorSyncDeviceHostScope](kcolorsyncdevicehostscope.md): A key specifying the host preference scope of a device; currently only `kCFPreferencesCurrentHost` is supported.

# kColorSyncDeviceUserScope (Objective-C)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

A key specifying the user preference scope of a device; one of `kCFPreferencesCurrentUser` or `kCFPreferencesAnyUser`.

## Declaration

```objectivec
extern CFStringRef kColorSyncDeviceUserScope;
```

## See Also

### Describing devices

- [kColorSyncDeviceID](kcolorsyncdeviceid.md): A key whose value is the `CFUUIDRef` identifying the device.
- [kColorSyncDeviceDescription](kcolorsyncdevicedescription.md): A key whose value is the device’s localized name in the current locale.
- [kColorSyncDeviceDescriptions](kcolorsyncdevicedescriptions.md): A key whose value is a `CFDictionary` of the device’s localized names.
- [kColorSyncDeviceModeDescription](kcolorsyncdevicemodedescription.md): A key whose value is the device mode’s localized name in the current locale.
- [kColorSyncDeviceModeDescriptions](kcolorsyncdevicemodedescriptions.md): A key whose value is a `CFDictionary` of the device mode’s localized names.
- [kColorSyncDeviceHostScope](kcolorsyncdevicehostscope.md): A key specifying the host preference scope of a device; currently only `kCFPreferencesCurrentHost` is supported.
