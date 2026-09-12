> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattreffectivekeysize](https://developer.apple.com/documentation/security/ksecattreffectivekeysize)

# kSecAttrEffectiveKeySize (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the effective number of bits in a cryptographic key.

## Declaration

```swift
let kSecAttrEffectiveKeySize: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFNumber](../corefoundation/cfnumber.md) and indicates the effective number of bits in this cryptographic key. For example, a DES key has a [kSecAttrKeySizeInBits](ksecattrkeysizeinbits.md) of 64, but a [kSecAttrEffectiveKeySize](ksecattreffectivekeysize.md) of 56 bits.

# kSecAttrEffectiveKeySize (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the effective number of bits in a cryptographic key.

## Declaration

```objectivec
extern CFStringRef const kSecAttrEffectiveKeySize;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFNumberRef](../corefoundation/cfnumber.md) and indicates the effective number of bits in this cryptographic key. For example, a DES key has a [kSecAttrKeySizeInBits](ksecattrkeysizeinbits.md) of 64, but a [kSecAttrEffectiveKeySize](ksecattreffectivekeysize.md) of 56 bits.
