> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveencryptioncontext/profile-swift.struct/hkdf_sha256_aesctr_hmac__ecdhe_p256__ecdsa_p256](https://developer.apple.com/documentation/applearchive/archiveencryptioncontext/profile-swift.struct/hkdf_sha256_aesctr_hmac__ecdhe_p256__ecdsa_p256)

# hkdf_sha256_aesctr_hmac\__ecdhe_p256\__ecdsa_p256

**Framework:** Apple Archive  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

A constant that represents signed ECDHE public key encryption, where only the recipient with the corresponding private key can unlock the container.

## Declaration

```swift
static let hkdf_sha256_aesctr_hmac__ecdhe_p256__ecdsa_p256: ArchiveEncryptionContext.Profile
```

<a id="Discussion"></a>

## Discussion

The signature is encrypted.

## See Also

### Profile Constants

- [hkdf_sha256_hmac\__none\__ecdsa_p256](hkdf_sha256_hmac__none__ecdsa_p256.md): A constant that represents no encryption, authenticated container, signature is mandatory.
- [hkdf_sha256_aesctr_hmac\__symmetric\__none](hkdf_sha256_aesctr_hmac__symmetric__none.md): A constant that represents unsigned, symmetric key encryption.
- [hkdf_sha256_aesctr_hmac\__symmetric\__ecdsa_p256](hkdf_sha256_aesctr_hmac__symmetric__ecdsa_p256.md): A constant that represents signed symmetric key encryption, signed with encrypted signature.
- [hkdf_sha256_aesctr_hmac\__ecdhe_p256\__none](hkdf_sha256_aesctr_hmac__ecdhe_p256__none.md): A constant that represents unsigned ECDHE public key encryption, where only the recipient with the corresponding private key can unlock the container.
- [hkdf_sha256_aesctr_hmac\__scrypt\__none](hkdf_sha256_aesctr_hmac__scrypt__none.md): A constant that represents unsigned password encryption using scrypt.
