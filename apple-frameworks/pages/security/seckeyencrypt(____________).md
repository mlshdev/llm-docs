> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeyencrypt(_:_:_:_:_:_:)](https://developer.apple.com/documentation/security/seckeyencrypt(_:_:_:_:_:_:))

# SecKeyEncrypt(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 15.0) · iPadOS 2.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · tvOS 4.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 8.0)

Encrypts a block of plaintext.

> Use SecKeyCreateEncryptedData

## Declaration

```swift
func SecKeyEncrypt(_ key: SecKey, _ padding: SecPadding, _ plainText: UnsafePointer<UInt8>, _ plainTextLen: Int, _ cipherText: UnsafeMutablePointer<UInt8>, _ cipherTextLen: UnsafeMutablePointer<Int>) -> OSStatus
```

## Parameters

- `key`: Public key with which to encrypt the data.
- `padding`: The type of padding to use. Possible values are listed in [SecPadding](secpadding.md). Typically, [PKCS1](secpadding/pkcs1.md) is used, which adds PKCS1 padding before encryption. If you specify [kSecPaddingNone](secpadding/ksecpaddingnone.md), the data is encrypted as-is.
- `plainText`: The data to encrypt.
- `plainTextLen`: Length in bytes of the data in the `plainText` buffer. This must be less than or equal to the value returned by the [SecKeyGetBlockSize(\_:)](seckeygetblocksize%28__%29.md) function. When PKCS1 padding is performed, the maximum length of data that can be encrypted is 11 bytes less than the value returned by the [SecKeyGetBlockSize(\_:)](seckeygetblocksize%28__%29.md) function (`secKeyGetBlockSize() - 11`).
- `cipherText`: On return, the encrypted text.
- `cipherTextLen`: On entry, the size of the buffer provided in the `cipherText` parameter. On return, the amount of data actually placed in the buffer.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

The input buffer (`plainText`) can be the same as the output buffer (`cipherText`) to reduce the amount of memory used by the function.

# SecKeyEncrypt (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 15.0) · iPadOS 2.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · tvOS 4.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 8.0)

Encrypts a block of plaintext.

> Use SecKeyCreateEncryptedData

## Declaration

```objectivec
OSStatus SecKeyEncrypt(SecKeyRef key, SecPadding padding, const uint8_t *plainText, size_t plainTextLen, uint8_t *cipherText, size_t *cipherTextLen);
```

## Parameters

- `key`: Public key with which to encrypt the data.
- `padding`: The type of padding to use. Possible values are listed in [SecPadding](secpadding.md). Typically, [kSecPaddingPKCS1](secpadding/pkcs1.md) is used, which adds PKCS1 padding before encryption. If you specify [kSecPaddingNone](secpadding/ksecpaddingnone.md), the data is encrypted as-is.
- `plainText`: The data to encrypt.
- `plainTextLen`: Length in bytes of the data in the `plainText` buffer. This must be less than or equal to the value returned by the [SecKeyGetBlockSize](seckeygetblocksize%28__%29.md) function. When PKCS1 padding is performed, the maximum length of data that can be encrypted is 11 bytes less than the value returned by the [SecKeyGetBlockSize](seckeygetblocksize%28__%29.md) function (`secKeyGetBlockSize() - 11`).
- `cipherText`: On return, the encrypted text.
- `cipherTextLen`: On entry, the size of the buffer provided in the `cipherText` parameter. On return, the amount of data actually placed in the buffer.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

The input buffer (`plainText`) can be the same as the output buffer (`cipherText`) to reduce the amount of memory used by the function.
