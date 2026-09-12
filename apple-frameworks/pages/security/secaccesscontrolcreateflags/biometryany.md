> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secaccesscontrolcreateflags/biometryany](https://developer.apple.com/documentation/security/secaccesscontrolcreateflags/biometryany)

# biometryAny (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.1+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+ · watchOS 4.3+

Constraint to access an item with Touch ID for any enrolled fingers, or Face ID.

## Declaration

```swift
static var biometryAny: SecAccessControlCreateFlags { get }
```

## Mentioned In

- [Protecting keys with the Secure Enclave](../protecting-keys-with-the-secure-enclave.md)

<a id="Discussion"></a>

## Discussion

Touch ID must be available and enrolled with at least one finger, or Face ID must be available and enrolled. The item is still accessible by Touch ID if fingers are added or removed, or by Face ID if the user is re-enrolled.

# kSecAccessControlBiometryAny (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.1+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+ · watchOS 4.3+

Constraint to access an item with Touch ID for any enrolled fingers, or Face ID.

## Declaration

```objectivec
kSecAccessControlBiometryAny
```

## Mentioned In

- [Protecting keys with the Secure Enclave](../protecting-keys-with-the-secure-enclave.md)

<a id="Discussion"></a>

## Discussion

Touch ID must be available and enrolled with at least one finger, or Face ID must be available and enrolled. The item is still accessible by Touch ID if fingers are added or removed, or by Face ID if the user is re-enrolled.
