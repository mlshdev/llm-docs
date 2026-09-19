> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/secpublickeyhash

# SecPublicKeyHash (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A container for a 20-byte public key hash.

## Declaration

```swift
typealias SecPublicKeyHash = (UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8)
```

<a id="Discussion"></a>

## Discussion

The `SecPublicKeyHash` type represents a hash of a public key. You can use the constant `kSecPublicKeyHashItemAttr` as input to functions in the Keychain Services API to set or retrieve a certificate attribute value of this type. See [Keychain services](keychain-services.md) for information about getting and setting attribute values.

# SecPublicKeyHash (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A container for a 20-byte public key hash.

## Declaration

```objectivec
typedef UInt8[20] SecPublicKeyHash;
```

<a id="Discussion"></a>

## Discussion

The `SecPublicKeyHash` type represents a hash of a public key. You can use the constant `kSecPublicKeyHashItemAttr` as input to functions in the Keychain Services API to set or retrieve a certificate attribute value of this type. See [Keychain services](keychain-services.md) for information about getting and setting attribute values.
