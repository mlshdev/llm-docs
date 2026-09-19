> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/ksecattraccessiblewhenpasscodesetthisdeviceonly

# kSecAttrAccessibleWhenPasscodeSetThisDeviceOnly (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The data in the keychain can only be accessed when the device is unlocked. Only available if a passcode is set on the device.

## Declaration

```swift
let kSecAttrAccessibleWhenPasscodeSetThisDeviceOnly: CFString
```

## Mentioned In

- [Restricting keychain item accessibility](restricting-keychain-item-accessibility.md)

<a id="Discussion"></a>

## Discussion

This is recommended for items that only need to be accessible while the application is in the foreground. Items with this attribute never migrate to a new device. After a backup is restored to a new device, these items are missing. No items can be stored in this class on devices without a passcode. Disabling the device passcode causes all items in this class to be deleted.

# kSecAttrAccessibleWhenPasscodeSetThisDeviceOnly (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The data in the keychain can only be accessed when the device is unlocked. Only available if a passcode is set on the device.

## Declaration

```objectivec
extern CFStringRef const kSecAttrAccessibleWhenPasscodeSetThisDeviceOnly;
```

## Mentioned In

- [Restricting keychain item accessibility](restricting-keychain-item-accessibility.md)

<a id="Discussion"></a>

## Discussion

This is recommended for items that only need to be accessible while the application is in the foreground. Items with this attribute never migrate to a new device. After a backup is restored to a new device, these items are missing. No items can be stored in this class on devices without a passcode. Disabling the device passcode causes all items in this class to be deleted.
