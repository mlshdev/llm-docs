> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secaccesscontrolcreateflags](https://developer.apple.com/documentation/security/secaccesscontrolcreateflags)

# SecAccessControlCreateFlags (Swift)

**Framework:** Security  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Access control constants that dictate how a keychain item may be used.

## Declaration

```swift
struct SecAccessControlCreateFlags
```

## Mentioned In

- [Protecting keys with the Secure Enclave](protecting-keys-with-the-secure-enclave.md)
- [Restricting keychain item accessibility](restricting-keychain-item-accessibility.md)

<a id="overview"></a>

## Overview

Use these flags with the [SecAccessControlCreateWithFlags(\_:\_:\_:\_:)](secaccesscontrolcreatewithflags%28________%29.md) function, or as the value associated with the [kSecAttrAccessControl](ksecattraccesscontrol.md) key in a keychain item’s attribute dictionary, to control keychain item accessibility.

## Topics

### Constraints

- [devicePasscode](secaccesscontrolcreateflags/devicepasscode.md): Constraint to access an item with a passcode.
- [biometryAny](secaccesscontrolcreateflags/biometryany.md): Constraint to access an item with Touch ID for any enrolled fingers, or Face ID.
- [biometryCurrentSet](secaccesscontrolcreateflags/biometrycurrentset.md): Constraint to access an item with Touch ID for currently enrolled fingers, or from Face ID with the currently enrolled user.
- [userPresence](secaccesscontrolcreateflags/userpresence.md): Constraint to access an item with either biometry or passcode.
- [watch](secaccesscontrolcreateflags/watch.md): Deprecated. Constraint to access an item with a watch.

### Conjunctions

- [and](secaccesscontrolcreateflags/and.md): Indicates that all constraints must be satisfied.
- [or](secaccesscontrolcreateflags/or.md): Indicates that at least one constraint must be satisfied.

### Additional Options

- [applicationPassword](secaccesscontrolcreateflags/applicationpassword.md): Option to use an application-provided password for data encryption key generation.
- [privateKeyUsage](secaccesscontrolcreateflags/privatekeyusage.md): Enable a private key to be used in signing a block of data or verifying a signed block.

### Initializers

- [init(rawValue:)](secaccesscontrolcreateflags/init%28rawvalue_%29.md): Initialize an access control creation flags object.

### Legacy Constraints

- [touchIDAny](secaccesscontrolcreateflags/touchidany.md): Deprecated. Constraint to access an item with Touch ID for any enrolled fingers.
- [touchIDCurrentSet](secaccesscontrolcreateflags/touchidcurrentset.md): Deprecated. Constraint to access an item with Touch ID for currently enrolled fingers.

### Type Properties

- [companion](secaccesscontrolcreateflags/companion.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# SecAccessControlCreateFlags (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Access control constants that dictate how a keychain item may be used.

## Declaration

```objectivec
enum SecAccessControlCreateFlags : CFOptionFlags;
```

## Mentioned In

- [Protecting keys with the Secure Enclave](protecting-keys-with-the-secure-enclave.md)
- [Restricting keychain item accessibility](restricting-keychain-item-accessibility.md)

<a id="overview"></a>

## Overview

Use these flags with the [SecAccessControlCreateWithFlags](secaccesscontrolcreatewithflags%28________%29.md) function, or as the value associated with the [kSecAttrAccessControl](ksecattraccesscontrol.md) key in a keychain item’s attribute dictionary, to control keychain item accessibility.

## Topics

### Constraints

- [kSecAccessControlDevicePasscode](secaccesscontrolcreateflags/devicepasscode.md): Constraint to access an item with a passcode.
- [kSecAccessControlBiometryAny](secaccesscontrolcreateflags/biometryany.md): Constraint to access an item with Touch ID for any enrolled fingers, or Face ID.
- [kSecAccessControlBiometryCurrentSet](secaccesscontrolcreateflags/biometrycurrentset.md): Constraint to access an item with Touch ID for currently enrolled fingers, or from Face ID with the currently enrolled user.
- [kSecAccessControlUserPresence](secaccesscontrolcreateflags/userpresence.md): Constraint to access an item with either biometry or passcode.
- [kSecAccessControlWatch](secaccesscontrolcreateflags/watch.md): Deprecated. Constraint to access an item with a watch.

### Conjunctions

- [kSecAccessControlAnd](secaccesscontrolcreateflags/and.md): Indicates that all constraints must be satisfied.
- [kSecAccessControlOr](secaccesscontrolcreateflags/or.md): Indicates that at least one constraint must be satisfied.

### Additional Options

- [kSecAccessControlApplicationPassword](secaccesscontrolcreateflags/applicationpassword.md): Option to use an application-provided password for data encryption key generation.
- [kSecAccessControlPrivateKeyUsage](secaccesscontrolcreateflags/privatekeyusage.md): Enable a private key to be used in signing a block of data or verifying a signed block.

### Legacy Constraints

- [kSecAccessControlTouchIDAny](secaccesscontrolcreateflags/touchidany.md): Deprecated. Constraint to access an item with Touch ID for any enrolled fingers.
- [kSecAccessControlTouchIDCurrentSet](secaccesscontrolcreateflags/touchidcurrentset.md): Deprecated. Constraint to access an item with Touch ID for currently enrolled fingers.

### Type Properties

- [kSecAccessControlCompanion](secaccesscontrolcreateflags/companion.md)
