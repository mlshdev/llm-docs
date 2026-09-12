> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattraccessiblealways](https://developer.apple.com/documentation/security/ksecattraccessiblealways)

# kSecAttrAccessibleAlways (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ (deprecated in 12.0) · iPadOS 4.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 5.0)

The data in the keychain item can always be accessed regardless of whether the device is locked.

> Use an accessibility level that provides some user protection, such as kSecAttrAccessibleAfterFirstUnlock

## Declaration

```swift
let kSecAttrAccessibleAlways: CFString
```

<a id="Discussion"></a>

## Discussion

This is not recommended for application use. Items with this attribute migrate to a new device when using encrypted backups.

# kSecAttrAccessibleAlways (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ (deprecated in 12.0) · iPadOS 4.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 5.0)

The data in the keychain item can always be accessed regardless of whether the device is locked.

> Use an accessibility level that provides some user protection, such as kSecAttrAccessibleAfterFirstUnlock

## Declaration

```objectivec
extern CFStringRef const kSecAttrAccessibleAlways;
```

<a id="Discussion"></a>

## Discussion

This is not recommended for application use. Items with this attribute migrate to a new device when using encrypted backups.
