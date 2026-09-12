> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveencryptioncontext/signaturemode-swift.property](https://developer.apple.com/documentation/applearchive/archiveencryptioncontext/signaturemode-swift.property)

# signatureMode

**Framework:** Apple Archive  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

The signature mode, such as an ECDSA Nist P-256 signature.

## Declaration

```swift
var signatureMode: ArchiveEncryptionContext.SignatureMode { get }
```

## See Also

### Signing an encryption context

- [sign(encryptedStream:encryptionContext:)](sign%28encryptedstream_encryptioncontext_%29.md): Signs an encrypted archive using the credentials stored in the specified encryption context.
- [ArchiveEncryptionContext.SignatureMode](signaturemode-swift.struct.md): Constants that describe the signature modes of an encryption context.
