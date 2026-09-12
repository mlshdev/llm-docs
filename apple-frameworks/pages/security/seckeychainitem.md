> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainitem](https://developer.apple.com/documentation/security/seckeychainitem)

# SecKeychainItem (Swift)

**Framework:** Security  
**Kind:** Class  
**Availability:** macOS 10.0+

An opaque type that represents a keychain item.

## Declaration

```swift
class SecKeychainItem
```

<a id="overview"></a>

## Overview

A [SecKeychainItem](seckeychainitem.md) object for a certificate that is stored in a keychain can be safely cast to a [SecCertificate](seccertificate.md) for use with [Certificate, Key, and Trust Services](certificate-key-and-trust-services.md).

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

# SecKeychainItemRef (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

An opaque type that represents a keychain item.

## Declaration

```objectivec
typedef struct __SecKeychainItem * SecKeychainItemRef;
```

<a id="overview"></a>

## Overview

A [SecKeychainItemRef](seckeychainitem.md) object for a certificate that is stored in a keychain can be safely cast to a [SecCertificateRef](seccertificate.md) for use with [Certificate, Key, and Trust Services](certificate-key-and-trust-services.md).
