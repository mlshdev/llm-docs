> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecclassidentity](https://developer.apple.com/documentation/security/ksecclassidentity)

# kSecClassIdentity (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value that indicates an identity item.

## Declaration

```swift
let kSecClassIdentity: CFString
```

## Mentioned In

- [Storing an Identity in the Keychain](storing-an-identity-in-the-keychain.md)

<a id="Discussion"></a>

## Discussion

An identity is a certificate paired with its associated private key. Keychain services stores the certificate and the private key separately; it represents the pair as an identity if the certificate’s [kSecAttrPublicKeyHash](ksecattrpublickeyhash.md) attribute matches the key’s [kSecAttrApplicationLabel](ksecattrapplicationlabel.md) attribute.

Because an identity is the combination of a private key and a certificate, this class shares attributes of both [kSecClassKey](ksecclasskey.md) and [kSecClassCertificate](ksecclasscertificate.md). Multiple certificates can all attest the identity of the same private key, so the attributes that form an identity’s composite primary key are the same as those for a certificate.

The set of identity items available to your app in the keychain can change without explicitly adding, updating, or deleting identity items. For example, if the keychain contains a cryptographic key item and certificate item that form an identity and you delete the key, the identity no longer exists.

# kSecClassIdentity (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value that indicates an identity item.

## Declaration

```objectivec
extern CFStringRef const kSecClassIdentity;
```

## Mentioned In

- [Storing an Identity in the Keychain](storing-an-identity-in-the-keychain.md)

<a id="Discussion"></a>

## Discussion

An identity is a certificate paired with its associated private key. Keychain services stores the certificate and the private key separately; it represents the pair as an identity if the certificate’s [kSecAttrPublicKeyHash](ksecattrpublickeyhash.md) attribute matches the key’s [kSecAttrApplicationLabel](ksecattrapplicationlabel.md) attribute.

Because an identity is the combination of a private key and a certificate, this class shares attributes of both [kSecClassKey](ksecclasskey.md) and [kSecClassCertificate](ksecclasscertificate.md). Multiple certificates can all attest the identity of the same private key, so the attributes that form an identity’s composite primary key are the same as those for a certificate.

The set of identity items available to your app in the keychain can change without explicitly adding, updating, or deleting identity items. For example, if the keychain contains a cryptographic key item and certificate item that form an identity and you delete the key, the identity no longer exists.
