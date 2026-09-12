> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrcanencrypt](https://developer.apple.com/documentation/security/ksecattrcanencrypt)

# kSecAttrCanEncrypt (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a Boolean that indicates whether the cryptographic key can be used for encryption.

## Declaration

```swift
let kSecAttrCanEncrypt: CFString
```

## Mentioned In

- [Using Keys for Encryption](using-keys-for-encryption.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBoolean](../corefoundation/cfboolean.md) and indicates whether this cryptographic key can be used to encrypt data.

On key creation, if not explicitly specified, this attribute defaults to [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) for private keys and [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) for public keys.

# kSecAttrCanEncrypt (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a Boolean that indicates whether the cryptographic key can be used for encryption.

## Declaration

```objectivec
extern CFStringRef const kSecAttrCanEncrypt;
```

## Mentioned In

- [Using Keys for Encryption](using-keys-for-encryption.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBooleanRef](../corefoundation/cfboolean.md) and indicates whether this cryptographic key can be used to encrypt data.

On key creation, if not explicitly specified, this attribute defaults to [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) for private keys and [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) for public keys.
