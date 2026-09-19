> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/ksecattraccessiblewhenunlocked

# kSecAttrAccessibleWhenUnlocked (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The data in the keychain item can be accessed only while the device is unlocked by the user.

## Declaration

```swift
let kSecAttrAccessibleWhenUnlocked: CFString
```

<a id="Discussion"></a>

## Discussion

This is recommended for items that need to be accessible only while the application is in the foreground. Items with this attribute migrate to a new device when using encrypted backups.

This is the default value for keychain items added without explicitly setting an accessibility constant.

# kSecAttrAccessibleWhenUnlocked (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The data in the keychain item can be accessed only while the device is unlocked by the user.

## Declaration

```objectivec
extern CFStringRef const kSecAttrAccessibleWhenUnlocked;
```

<a id="Discussion"></a>

## Discussion

This is recommended for items that need to be accessible only while the application is in the foreground. Items with this attribute migrate to a new device when using encrypted backups.

This is the default value for keychain items added without explicitly setting an accessibility constant.
