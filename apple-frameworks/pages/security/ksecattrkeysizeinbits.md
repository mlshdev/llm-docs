> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/ksecattrkeysizeinbits

# kSecAttrKeySizeInBits (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the number of bits in a cryptographic key.

## Declaration

```swift
let kSecAttrKeySizeInBits: CFString
```

## Mentioned In

- [Generating New Cryptographic Keys](generating-new-cryptographic-keys.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFNumber](../corefoundation/cfnumber.md) and indicates the total number of bits in this cryptographic key.

# kSecAttrKeySizeInBits (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the number of bits in a cryptographic key.

## Declaration

```objectivec
extern CFStringRef const kSecAttrKeySizeInBits;
```

## Mentioned In

- [Generating New Cryptographic Keys](generating-new-cryptographic-keys.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFNumberRef](../corefoundation/cfnumber.md) and indicates the total number of bits in this cryptographic key.
