> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeycreatedecrypteddata(_:_:_:_:)](https://developer.apple.com/documentation/security/seckeycreatedecrypteddata(_:_:_:_:))

# SecKeyCreateDecryptedData(\_:\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Decrypts a block of data using a private key and specified algorithm.

## Declaration

```swift
func SecKeyCreateDecryptedData(_ key: SecKey, _ algorithm: SecKeyAlgorithm, _ ciphertext: CFData, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> CFData?
```

## Parameters

- `key`: The private key to use to perform the decryption.
- `algorithm`: The algorithm that was used to encrypt the data in the first place. Use one of the encryption algorithms listed in [SecKeyAlgorithm](seckeyalgorithm.md). You can use the [SecKeyIsAlgorithmSupported(\_:\_:\_:)](seckeyisalgorithmsupported%28______%29.md) function to test that the key is suitable for the algorithm.
- `ciphertext`: The data, produced with the corresponding public key and a call to the [SecKeyCreateEncryptedData(\_:\_:\_:\_:)](seckeycreateencrypteddata%28________%29.md) function, that you want to decrypt.
- `error`: The address of a [CFError](../corefoundation/cferror.md) object. If an error occurs, this is set to point at an error instance that describes the failure.

<a id="return-value"></a>

## Return Value

The decrypted data or `NULL` on failure. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free the data’s memory when you are done with it.

## Mentioned In

- [Generating New Cryptographic Keys](generating-new-cryptographic-keys.md)
- [Using Keys for Encryption](using-keys-for-encryption.md)

# SecKeyCreateDecryptedData (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Decrypts a block of data using a private key and specified algorithm.

## Declaration

```objectivec
CFDataRefSecKeyCreateDecryptedData(SecKeyRef key, SecKeyAlgorithm algorithm, CFDataRef ciphertext, CFErrorRef*error);
```

## Parameters

- `key`: The private key to use to perform the decryption.
- `algorithm`: The algorithm that was used to encrypt the data in the first place. Use one of the encryption algorithms listed in [SecKeyAlgorithm](seckeyalgorithm.md). You can use the [SecKeyIsAlgorithmSupported](seckeyisalgorithmsupported%28______%29.md) function to test that the key is suitable for the algorithm.
- `ciphertext`: The data, produced with the corresponding public key and a call to the [SecKeyCreateEncryptedData](seckeycreateencrypteddata%28________%29.md) function, that you want to decrypt.
- `error`: The address of a [CFErrorRef](../corefoundation/cferror.md) object. If an error occurs, this is set to point at an error instance that describes the failure.

<a id="return-value"></a>

## Return Value

The decrypted data or `NULL` on failure. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free the data’s memory when you are done with it.

## Mentioned In

- [Generating New Cryptographic Keys](generating-new-cryptographic-keys.md)
- [Using Keys for Encryption](using-keys-for-encryption.md)
