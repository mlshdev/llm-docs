> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/seckeycopykeyexchangeresult(_:_:_:_:_:)

# SecKeyCopyKeyExchangeResult(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Performs the Diffie-Hellman style of key exchange with optional key-derivation steps.

## Declaration

```swift
func SecKeyCopyKeyExchangeResult(_ privateKey: SecKey, _ algorithm: SecKeyAlgorithm, _ publicKey: SecKey, _ parameters: CFDictionary, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> CFData?
```

<a id="return-value"></a>

## Return Value

A data object representing the result of the key exchange operation or `NULL` on failure. In Objective-C, call [CFRelease](../corefoundation/cfrelease.md) to free the data object’s memory when you are done with it.

# SecKeyCopyKeyExchangeResult (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Performs the Diffie-Hellman style of key exchange with optional key-derivation steps.

## Declaration

```objectivec
CFDataRefSecKeyCopyKeyExchangeResult(SecKeyRef privateKey, SecKeyAlgorithm algorithm, SecKeyRef publicKey, CFDictionaryRef parameters, CFErrorRef*error);
```

<a id="return-value"></a>

## Return Value

A data object representing the result of the key exchange operation or `NULL` on failure. In Objective-C, call [CFRelease](../corefoundation/cfrelease.md) to free the data object’s memory when you are done with it.
