> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccertificate](https://developer.apple.com/documentation/security/seccertificate)

# SecCertificate (Swift)

**Framework:** Security  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An abstract Core Foundation-type object representing an X.509 certificate.

## Declaration

```swift
class SecCertificate
```

## Mentioned In

- [Getting a Certificate](getting-a-certificate.md)
- [Storing a DER-Encoded X.509 Certificate](storing-a-der-encoded-x-509-certificate.md)
- [Storing an Identity in the Keychain](storing-an-identity-in-the-keychain.md)

<a id="overview"></a>

## Overview

A [SecCertificate](seccertificate.md) object for a certificate that is stored in a keychain can be safely cast to a [SecKeychainItem](seckeychainitem.md) for manipulation as a keychain item. On the other hand, if the [SecCertificate](seccertificate.md) is not stored in a keychain, casting the object to a [SecKeychainItem](seckeychainitem.md) and passing it to Keychain Services functions returns errors.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SecCertificateRef (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An abstract Core Foundation-type object representing an X.509 certificate.

## Declaration

```objectivec
typedef struct __SecCertificate * SecCertificateRef;
```

## Mentioned In

- [Getting a Certificate](getting-a-certificate.md)
- [Storing a DER-Encoded X.509 Certificate](storing-a-der-encoded-x-509-certificate.md)
- [Storing an Identity in the Keychain](storing-an-identity-in-the-keychain.md)

<a id="overview"></a>

## Overview

A [SecCertificateRef](seccertificate.md) object for a certificate that is stored in a keychain can be safely cast to a [SecKeychainItemRef](seckeychainitem.md) for manipulation as a keychain item. On the other hand, if the [SecCertificateRef](seccertificate.md) is not stored in a keychain, casting the object to a [SecKeychainItemRef](seckeychainitem.md) and passing it to Keychain Services functions returns errors.
