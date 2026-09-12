> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secidentity](https://developer.apple.com/documentation/security/secidentity)

# SecIdentity (Swift)

**Framework:** Security  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An abstract Core Foundation-type object representing an identity.

## Declaration

```swift
class SecIdentity
```

## Mentioned In

- [Storing an Identity in the Keychain](storing-an-identity-in-the-keychain.md)

<a id="overview"></a>

## Overview

A [SecIdentity](secidentity.md) object contains a [SecKey](seckey.md) object and an associated [SecCertificate](seccertificate.md) object.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

# SecIdentityRef (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An abstract Core Foundation-type object representing an identity.

## Declaration

```objectivec
typedef struct __SecIdentity * SecIdentityRef;
```

## Mentioned In

- [Storing an Identity in the Keychain](storing-an-identity-in-the-keychain.md)

<a id="overview"></a>

## Overview

A [SecIdentityRef](secidentity.md) object contains a [SecKeyRef](seckey.md) object and an associated [SecCertificateRef](seccertificate.md) object.
