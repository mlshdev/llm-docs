> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeydecrypt(_:_:_:_:_:_:)](https://developer.apple.com/documentation/security/seckeydecrypt(_:_:_:_:_:_:))

# SecKeyDecrypt(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 15.0) · iPadOS 2.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · tvOS 4.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 8.0)

Decrypts a block of ciphertext.

> Use SecKeyCreateDecryptedData

## Declaration

```swift
func SecKeyDecrypt(_ key: SecKey, _ padding: SecPadding, _ cipherText: UnsafePointer<UInt8>, _ cipherTextLen: Int, _ plainText: UnsafeMutablePointer<UInt8>, _ plainTextLen: UnsafeMutablePointer<Int>) -> OSStatus
```

## Parameters

- `key`: Private key with which to decrypt the data.
- `padding`: The type of padding used. Possible values are listed in [SecPadding](secpadding.md). Typically, [PKCS1](secpadding/pkcs1.md) is used, which removes PKCS1 padding after decryption. If you specify [kSecPaddingNone](secpadding/ksecpaddingnone.md), the decrypted data is returned as-is.
- `cipherText`: The data to decrypt.
- `cipherTextLen`: Length in bytes of the data in the `cipherText` buffer. This must be less than or equal to the value returned by the [SecKeyGetBlockSize(\_:)](seckeygetblocksize%28__%29.md) function.
- `plainText`: On return, the decrypted text.
- `plainTextLen`: On entry, the size of the buffer provided in the `plainText` parameter. On return, the amount of data actually placed in the buffer.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

The input buffer (`cipherText`) can be the same as the output buffer (`plainText`) to reduce the amount of memory used by the function.

# SecKeyDecrypt (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 15.0) · iPadOS 2.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · tvOS 4.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 8.0)

Decrypts a block of ciphertext.

> Use SecKeyCreateDecryptedData

## Declaration

```objectivec
OSStatus SecKeyDecrypt(SecKeyRef key, SecPadding padding, const uint8_t *cipherText, size_t cipherTextLen, uint8_t *plainText, size_t *plainTextLen);
```

## Parameters

- `key`: Private key with which to decrypt the data.
- `padding`: The type of padding used. Possible values are listed in [SecPadding](secpadding.md). Typically, [kSecPaddingPKCS1](secpadding/pkcs1.md) is used, which removes PKCS1 padding after decryption. If you specify [kSecPaddingNone](secpadding/ksecpaddingnone.md), the decrypted data is returned as-is.
- `cipherText`: The data to decrypt.
- `cipherTextLen`: Length in bytes of the data in the `cipherText` buffer. This must be less than or equal to the value returned by the [SecKeyGetBlockSize](seckeygetblocksize%28__%29.md) function.
- `plainText`: On return, the decrypted text.
- `plainTextLen`: On entry, the size of the buffer provided in the `plainText` parameter. On return, the amount of data actually placed in the buffer.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

The input buffer (`cipherText`) can be the same as the output buffer (`plainText`) to reduce the amount of memory used by the function.
