> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeycreaterandomkey(_:_:)](https://developer.apple.com/documentation/security/seckeycreaterandomkey(_:_:))

# SecKeyCreateRandomKey(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Generates a new public-private key pair.

## Declaration

```swift
func SecKeyCreateRandomKey(_ parameters: CFDictionary, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> SecKey?
```

## Parameters

- `parameters`: A dictionary you use to specify the attributes of the generated keys. See [Key Generation Attributes](key-generation-attributes.md) for details.
- `error`: An error reference pointer that [SecKeyCreateRandomKey(\_:\_:)](seckeycreaterandomkey%28____%29.md) populates with a suitable error instance on failure.

<a id="return-value"></a>

## Return Value

The newly generated private key, or `NULL` on failure. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free the key when you are done with it.

## Mentioned In

- [Generating New Cryptographic Keys](generating-new-cryptographic-keys.md)
- [Protecting keys with the Secure Enclave](protecting-keys-with-the-secure-enclave.md)

<a id="Discussion"></a>

## Discussion

To get the associated public key, use [SecKeyCopyPublicKey(\_:)](seckeycopypublickey%28__%29.md). [SecKeyCreateRandomKey(\_:\_:)](seckeycreaterandomkey%28____%29.md) fails and returns [errSecInteractionNotAllowed](errsecinteractionnotallowed.md) if you call it in the background on iPhone or iPad while the device is locked.

# SecKeyCreateRandomKey (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Generates a new public-private key pair.

## Declaration

```objectivec
SecKeyRefSecKeyCreateRandomKey(CFDictionaryRef parameters, CFErrorRef*error);
```

## Parameters

- `parameters`: A dictionary you use to specify the attributes of the generated keys. See [Key Generation Attributes](key-generation-attributes.md) for details.
- `error`: An error reference pointer that [SecKeyCreateRandomKey](seckeycreaterandomkey%28____%29.md) populates with a suitable error instance on failure.

<a id="return-value"></a>

## Return Value

The newly generated private key, or `NULL` on failure. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free the key when you are done with it.

## Mentioned In

- [Generating New Cryptographic Keys](generating-new-cryptographic-keys.md)
- [Protecting keys with the Secure Enclave](protecting-keys-with-the-secure-enclave.md)

<a id="Discussion"></a>

## Discussion

To get the associated public key, use [SecKeyCopyPublicKey](seckeycopypublickey%28__%29.md). [SecKeyCreateRandomKey](seckeycreaterandomkey%28____%29.md) fails and returns [errSecInteractionNotAllowed](errsecinteractionnotallowed.md) if you call it in the background on iPhone or iPad while the device is locked.
