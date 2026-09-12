> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secaccesscontrolcreateflags/userpresence](https://developer.apple.com/documentation/security/secaccesscontrolcreateflags/userpresence)

# userPresence (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constraint to access an item with either biometry or passcode.

## Declaration

```swift
static var userPresence: SecAccessControlCreateFlags { get }
```

## Mentioned In

- [Restricting keychain item accessibility](../restricting-keychain-item-accessibility.md)

<a id="Discussion"></a>

## Discussion

Biometry doesn’t have to be available or enrolled. The item is still accessible by Touch ID even if fingers are added or removed, or by Face ID if the user is re-enrolled.

This option is equivalent to specifying [biometryAny](biometryany.md), [or](or.md), and [devicePasscode](devicepasscode.md).

# kSecAccessControlUserPresence (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constraint to access an item with either biometry or passcode.

## Declaration

```objectivec
kSecAccessControlUserPresence
```

## Mentioned In

- [Restricting keychain item accessibility](../restricting-keychain-item-accessibility.md)

<a id="Discussion"></a>

## Discussion

Biometry doesn’t have to be available or enrolled. The item is still accessible by Touch ID even if fingers are added or removed, or by Face ID if the user is re-enrolled.

This option is equivalent to specifying [kSecAccessControlBiometryAny](biometryany.md), [kSecAccessControlOr](or.md), and [kSecAccessControlDevicePasscode](devicepasscode.md).
