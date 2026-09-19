> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/ksecattrtokenidsecureenclave

# kSecAttrTokenIDSecureEnclave (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies an item should be protected by the device’s Secure Enclave.

## Declaration

```swift
let kSecAttrTokenIDSecureEnclave: CFString
```

## Mentioned In

- [Protecting keys with the Secure Enclave](protecting-keys-with-the-secure-enclave.md)

<a id="Discussion"></a>

## Discussion

To generate a new key that’s protected by the Secure Enclave, call [SecKeyGeneratePair(\_:\_:\_:)](seckeygeneratepair%28______%29.md), setting the [kSecAttrTokenID](ksecattrtokenid.md) key in the parameters dictionary to [kSecAttrTokenIDSecureEnclave](ksecattrtokenidsecureenclave.md). For an example, see [Protecting keys with the Secure Enclave](protecting-keys-with-the-secure-enclave.md).

# kSecAttrTokenIDSecureEnclave (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies an item should be protected by the device’s Secure Enclave.

## Declaration

```objectivec
extern CFStringRef const kSecAttrTokenIDSecureEnclave;
```

## Mentioned In

- [Protecting keys with the Secure Enclave](protecting-keys-with-the-secure-enclave.md)

<a id="Discussion"></a>

## Discussion

To generate a new key that’s protected by the Secure Enclave, call [SecKeyGeneratePair](seckeygeneratepair%28______%29.md), setting the [kSecAttrTokenID](ksecattrtokenid.md) key in the parameters dictionary to [kSecAttrTokenIDSecureEnclave](ksecattrtokenidsecureenclave.md). For an example, see [Protecting keys with the Secure Enclave](protecting-keys-with-the-secure-enclave.md).
