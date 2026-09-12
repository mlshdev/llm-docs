> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseckeylabel](https://developer.apple.com/documentation/security/kseckeylabel)

# kSecKeyLabel (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

## Declaration

```swift
var kSecKeyLabel: Int32 { get }
```

<a id="Discussion"></a>

## Discussion

Type blob; for private and public keys this contains the hash of the public key.  This is used to associate certificates and keys.  Its value matches the value of the `kSecPublicKeyHashItemAttr` attribute of a certificate and it’s used to construct an identity from a certificate and a key. For symmetric keys this is whatever the creator of the key passed in when they generated the key.

# kSecKeyLabel (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** macOS 10.3+ (deprecated in 12.0)

## Declaration

```objectivec
kSecKeyLabel
```

<a id="Discussion"></a>

## Discussion

Type blob; for private and public keys this contains the hash of the public key.  This is used to associate certificates and keys.  Its value matches the value of the `kSecPublicKeyHashItemAttr` attribute of a certificate and it’s used to construct an identity from a certificate and a key. For symmetric keys this is whatever the creator of the key passed in when they generated the key.
