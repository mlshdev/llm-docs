> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattraccessiblewhenunlockedthisdeviceonly](https://developer.apple.com/documentation/security/ksecattraccessiblewhenunlockedthisdeviceonly)

# kSecAttrAccessibleWhenUnlockedThisDeviceOnly (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The data in the keychain item can be accessed only while the device is unlocked by the user.

## Declaration

```swift
let kSecAttrAccessibleWhenUnlockedThisDeviceOnly: CFString
```

## Mentioned In

- [Protecting keys with the Secure Enclave](protecting-keys-with-the-secure-enclave.md)

<a id="Discussion"></a>

## Discussion

This is recommended for items that need to be accessible only while the application is in the foreground. Items with this attribute *do not* migrate to a new device. Thus, after restoring from a backup of a different device, these items will not be present.

# kSecAttrAccessibleWhenUnlockedThisDeviceOnly (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The data in the keychain item can be accessed only while the device is unlocked by the user.

## Declaration

```objectivec
extern CFStringRef const kSecAttrAccessibleWhenUnlockedThisDeviceOnly;
```

## Mentioned In

- [Protecting keys with the Secure Enclave](protecting-keys-with-the-secure-enclave.md)

<a id="Discussion"></a>

## Discussion

This is recommended for items that need to be accessible only while the application is in the foreground. Items with this attribute *do not* migrate to a new device. Thus, after restoring from a backup of a different device, these items will not be present.
