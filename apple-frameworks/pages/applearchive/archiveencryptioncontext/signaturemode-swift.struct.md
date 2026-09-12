> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveencryptioncontext/signaturemode-swift.struct](https://developer.apple.com/documentation/applearchive/archiveencryptioncontext/signaturemode-swift.struct)

# ArchiveEncryptionContext.SignatureMode

**Framework:** Apple Archive  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Constants that describe the signature modes of an encryption context.

## Declaration

```swift
struct SignatureMode
```

## Topics

### Signature Mode Constants

- [none](signaturemode-swift.struct/none.md): A constant that represents no signature.
- [ecdsa_p256](signaturemode-swift.struct/ecdsa_p256.md): A constant that represents an ECDSA Nist P-256 signature.

### Raw Values

- [rawValue](signaturemode-swift.struct/rawvalue.md): The corresponding value of the raw type.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Signing an encryption context

- [sign(encryptedStream:encryptionContext:)](sign%28encryptedstream_encryptioncontext_%29.md): Signs an encrypted archive using the credentials stored in the specified encryption context.
- [signatureMode](signaturemode-swift.property.md): The signature mode, such as an ECDSA Nist P-256 signature.
