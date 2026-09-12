> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrcansign](https://developer.apple.com/documentation/security/ksecattrcansign)

# kSecAttrCanSign (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a Boolean that indicates whether the cryptographic key can be used for digital signing.

## Declaration

```swift
let kSecAttrCanSign: CFString
```

## Mentioned In

- [Signing and Verifying](signing-and-verifying.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBoolean](../corefoundation/cfboolean.md) and indicates whether this cryptographic key can be used to create a digital signature.

On key creation, if not explicitly specified, this attribute defaults to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) for private keys and [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) for public keys.

# kSecAttrCanSign (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a Boolean that indicates whether the cryptographic key can be used for digital signing.

## Declaration

```objectivec
extern CFStringRef const kSecAttrCanSign;
```

## Mentioned In

- [Signing and Verifying](signing-and-verifying.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBooleanRef](../corefoundation/cfboolean.md) and indicates whether this cryptographic key can be used to create a digital signature.

On key creation, if not explicitly specified, this attribute defaults to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) for private keys and [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) for public keys.
