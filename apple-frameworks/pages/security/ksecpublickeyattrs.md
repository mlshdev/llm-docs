> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/ksecpublickeyattrs

# kSecPublicKeyAttrs (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 4.0+ · visionOS 1.0+ · watchOS 1.0+

A key whose value is a dictionary of cryptographic key attributes specific to a public key.

## Declaration

```swift
let kSecPublicKeyAttrs: CFString
```

## Mentioned In

- [Generating New Cryptographic Keys](generating-new-cryptographic-keys.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is a [CFDictionary](../corefoundation/cfdictionary.md) containing key-value pairs for attributes specific to the public key to be generated.

# kSecPublicKeyAttrs (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 4.0+ · visionOS 1.0+ · watchOS 1.0+

A key whose value is a dictionary of cryptographic key attributes specific to a public key.

## Declaration

```objectivec
extern CFStringRef const kSecPublicKeyAttrs;
```

## Mentioned In

- [Generating New Cryptographic Keys](generating-new-cryptographic-keys.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is a [CFDictionaryRef](../corefoundation/cfdictionary.md) containing key-value pairs for attributes specific to the public key to be generated.
