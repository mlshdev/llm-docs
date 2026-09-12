> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secaccesscontrolcreateflags/applicationpassword](https://developer.apple.com/documentation/security/secaccesscontrolcreateflags/applicationpassword)

# applicationPassword (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Option to use an application-provided password for data encryption key generation.

## Declaration

```swift
static var applicationPassword: SecAccessControlCreateFlags { get }
```

## Mentioned In

- [Restricting keychain item accessibility](../restricting-keychain-item-accessibility.md)

<a id="Discussion"></a>

## Discussion

This may be specified in addition to any constraints.

# kSecAccessControlApplicationPassword (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Option to use an application-provided password for data encryption key generation.

## Declaration

```objectivec
kSecAccessControlApplicationPassword
```

## Mentioned In

- [Restricting keychain item accessibility](../restricting-keychain-item-accessibility.md)

<a id="Discussion"></a>

## Discussion

This may be specified in addition to any constraints.
