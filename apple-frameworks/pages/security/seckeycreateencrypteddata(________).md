> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeycreateencrypteddata(_:_:_:_:)](https://developer.apple.com/documentation/security/seckeycreateencrypteddata(_:_:_:_:))

# SecKeyCreateEncryptedData(\_:\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Encrypts a block of data using a public key and specified algorithm.

## Declaration

```swift
func SecKeyCreateEncryptedData(_ key: SecKey, _ algorithm: SecKeyAlgorithm, _ plaintext: CFData, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> CFData?
```

## Parameters

- `key`: The public key to use to perform the encryption.
- `algorithm`: The encryption algorithm to use. Use one of the encryption algorithms listed in [SecKeyAlgorithm](seckeyalgorithm.md). You can use the [SecKeyIsAlgorithmSupported(\_:\_:\_:)](seckeyisalgorithmsupported%28______%29.md) function to test that the key is suitable for the algorithm.
- `plaintext`: The data to be encrypted.
- `error`: The address of a [CFError](../corefoundation/cferror.md) object. If an error occurs, this is set to point at an error instance that describes the failure.

<a id="return-value"></a>

## Return Value

The encrypted data or `NULL` on failure. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free the data’s memory when you are done with it.

## Mentioned In

- [Using Keys for Encryption](using-keys-for-encryption.md)
- [Generating New Cryptographic Keys](generating-new-cryptographic-keys.md)

<a id="Discussion"></a>

## Discussion

You can decrypt this data with the corresponding private key and a call to [SecKeyCreateDecryptedData(\_:\_:\_:\_:)](seckeycreatedecrypteddata%28________%29.md).

# SecKeyCreateEncryptedData (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Encrypts a block of data using a public key and specified algorithm.

## Declaration

```objectivec
CFDataRefSecKeyCreateEncryptedData(SecKeyRef key, SecKeyAlgorithm algorithm, CFDataRef plaintext, CFErrorRef*error);
```

## Parameters

- `key`: The public key to use to perform the encryption.
- `algorithm`: The encryption algorithm to use. Use one of the encryption algorithms listed in [SecKeyAlgorithm](seckeyalgorithm.md). You can use the [SecKeyIsAlgorithmSupported](seckeyisalgorithmsupported%28______%29.md) function to test that the key is suitable for the algorithm.
- `plaintext`: The data to be encrypted.
- `error`: The address of a [CFErrorRef](../corefoundation/cferror.md) object. If an error occurs, this is set to point at an error instance that describes the failure.

<a id="return-value"></a>

## Return Value

The encrypted data or `NULL` on failure. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free the data’s memory when you are done with it.

## Mentioned In

- [Using Keys for Encryption](using-keys-for-encryption.md)
- [Generating New Cryptographic Keys](generating-new-cryptographic-keys.md)

<a id="Discussion"></a>

## Discussion

You can decrypt this data with the corresponding private key and a call to [SecKeyCreateDecryptedData](seckeycreatedecrypteddata%28________%29.md).
