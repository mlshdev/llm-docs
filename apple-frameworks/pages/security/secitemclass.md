> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secitemclass](https://developer.apple.com/documentation/security/secitemclass)

# SecItemClass (Swift)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specifies a keychain item’s class code.

## Declaration

```swift
enum SecItemClass
```

<a id="overview"></a>

## Overview

These enumerations define constants your application can use to specify the type of the keychain item you wish to create, dispose, add, delete, update, copy, or locate. You can also use these constants with the tag constant [SecItemAttr](secitemattr.md).

## Topics

### Constants

- [SecItemClass.internetPasswordItemClass](secitemclass/internetpassworditemclass.md): Indicates that the item is an Internet password.
- [SecItemClass.genericPasswordItemClass](secitemclass/genericpassworditemclass.md): Indicates that the item is a generic password.
- [SecItemClass.certificateItemClass](secitemclass/certificateitemclass.md): Indicates that the item is an X509 certificate.
- [SecItemClass.publicKeyItemClass](secitemclass/publickeyitemclass.md): Indicates that the item is a public key of a public-private pair.
- [SecItemClass.privateKeyItemClass](secitemclass/privatekeyitemclass.md): Indicates that the item is a private key of a public-private pair.
- [SecItemClass.symmetricKeyItemClass](secitemclass/symmetrickeyitemclass.md): Indicates that the item is a private key used for symmetric-key encryption.

### Initializers

- [init(rawValue:)](secitemclass/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SecItemClass (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specifies a keychain item’s class code.

## Declaration

```objectivec
enum SecItemClass : FourCharCode;
```

<a id="overview"></a>

## Overview

These enumerations define constants your application can use to specify the type of the keychain item you wish to create, dispose, add, delete, update, copy, or locate. You can also use these constants with the tag constant [SecItemAttr](secitemattr.md).

## Topics

### Constants

- [kSecInternetPasswordItemClass](secitemclass/internetpassworditemclass.md): Indicates that the item is an Internet password.
- [kSecGenericPasswordItemClass](secitemclass/genericpassworditemclass.md): Indicates that the item is a generic password.
- [kSecAppleSharePasswordItemClass](secitemclass/ksecapplesharepassworditemclass.md): Deprecated. Indicates that the item is an AppleShare password.
- [kSecCertificateItemClass](secitemclass/certificateitemclass.md): Indicates that the item is an X509 certificate.
- [kSecPublicKeyItemClass](secitemclass/publickeyitemclass.md): Indicates that the item is a public key of a public-private pair.
- [kSecPrivateKeyItemClass](secitemclass/privatekeyitemclass.md): Indicates that the item is a private key of a public-private pair.
- [kSecSymmetricKeyItemClass](secitemclass/symmetrickeyitemclass.md): Indicates that the item is a private key used for symmetric-key encryption.
