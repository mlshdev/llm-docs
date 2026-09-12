> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeycopypublickey(_:)](https://developer.apple.com/documentation/security/seckeycopypublickey(_:))

# SecKeyCopyPublicKey(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Gets the public key associated with the given private key.

## Declaration

```swift
func SecKeyCopyPublicKey(_ key: SecKey) -> SecKey?
```

## Parameters

- `key`: The private key for which you want the corresponding public key.

<a id="return-value"></a>

## Return Value

The public key corresponding to the given private key. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free this key’s memory when you are done with it.

## Mentioned In

- [Generating New Cryptographic Keys](generating-new-cryptographic-keys.md)
- [Getting an Existing Key](getting-an-existing-key.md)
- [Protecting keys with the Secure Enclave](protecting-keys-with-the-secure-enclave.md)

<a id="Discussion"></a>

## Discussion

The returned public key may be `nil` if the app that created the private key didn’t also store the corresponding public key in the keychain, or if the system can’t reconstruct the corresponding public key.

# SecKeyCopyPublicKey (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Gets the public key associated with the given private key.

## Declaration

```objectivec
SecKeyRefSecKeyCopyPublicKey(SecKeyRef key);
```

## Parameters

- `key`: The private key for which you want the corresponding public key.

<a id="return-value"></a>

## Return Value

The public key corresponding to the given private key. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free this key’s memory when you are done with it.

## Mentioned In

- [Generating New Cryptographic Keys](generating-new-cryptographic-keys.md)
- [Getting an Existing Key](getting-an-existing-key.md)
- [Protecting keys with the Secure Enclave](protecting-keys-with-the-secure-enclave.md)

<a id="Discussion"></a>

## Discussion

The returned public key may be `nil` if the app that created the private key didn’t also store the corresponding public key in the keychain, or if the system can’t reconstruct the corresponding public key.
