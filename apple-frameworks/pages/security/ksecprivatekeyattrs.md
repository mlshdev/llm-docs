> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecprivatekeyattrs](https://developer.apple.com/documentation/security/ksecprivatekeyattrs)

# kSecPrivateKeyAttrs (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 4.0+ · visionOS 1.0+ · watchOS 1.0+

A key whose value is a dictionary of cryptographic key attributes specific to a private key.

## Declaration

```swift
let kSecPrivateKeyAttrs: CFString
```

## Mentioned In

- [Generating New Cryptographic Keys](generating-new-cryptographic-keys.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is a [CFDictionary](../corefoundation/cfdictionary.md) containing key-value pairs for attributes specific to the private key to be generated.

# kSecPrivateKeyAttrs (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 4.0+ · visionOS 1.0+ · watchOS 1.0+

A key whose value is a dictionary of cryptographic key attributes specific to a private key.

## Declaration

```objectivec
extern CFStringRef const kSecPrivateKeyAttrs;
```

## Mentioned In

- [Generating New Cryptographic Keys](generating-new-cryptographic-keys.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is a [CFDictionaryRef](../corefoundation/cfdictionary.md) containing key-value pairs for attributes specific to the private key to be generated.
