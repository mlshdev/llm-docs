> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrcandecrypt](https://developer.apple.com/documentation/security/ksecattrcandecrypt)

# kSecAttrCanDecrypt (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a Boolean that indicates whether the cryptographic key can be used for decryption.

## Declaration

```swift
let kSecAttrCanDecrypt: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBoolean](../corefoundation/cfboolean.md) and indicates whether this cryptographic key can be used to decrypt data.

On key creation, if not explicitly specified, this attribute defaults to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) for private keys and [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) for public keys.

# kSecAttrCanDecrypt (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a Boolean that indicates whether the cryptographic key can be used for decryption.

## Declaration

```objectivec
extern CFStringRef const kSecAttrCanDecrypt;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBooleanRef](../corefoundation/cfboolean.md) and indicates whether this cryptographic key can be used to decrypt data.

On key creation, if not explicitly specified, this attribute defaults to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) for private keys and [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) for public keys.
