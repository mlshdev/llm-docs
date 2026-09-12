> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivebytestream/encryptionstream(writingto:encryptioncontext:flags:threadcount:)](https://developer.apple.com/documentation/applearchive/archivebytestream/encryptionstream(writingto:encryptioncontext:flags:threadcount:))

# encryptionStream(writingTo:encryptionContext:flags:threadCount:)

**Framework:** Apple Archive  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Creates a encryption sequential input stream.

## Declaration

```swift
static func encryptionStream(writingTo encryptedStream: ArchiveByteStream, encryptionContext context: ArchiveEncryptionContext, flags: ArchiveFlags = [], threadCount: Int = 0) -> ArchiveByteStream?
```

## Parameters

- `encryptedStream`: An input stream that provides encrypted and compressed data. The stream must implement [read(into:)](../archivebytestreamprotocol/read%28into_%29.md) and [read(into:atOffset:)](../archivebytestreamprotocol/read%28into_atoffset_%29.md).
- `context`: The encryption context that provides options and credentials.
- `flags`: Flags that control the behavior of the operation.
- `threadCount`: The number of worker threads that the operation uses, set to `0` for default.

<a id="return-value"></a>

## Return Value

A new archive byte stream.

<a id="Discussion"></a>

## Discussion

The operation reads decompressed and decrypted data from the supplied archive byte stream, `encryptedStream`.

Create the encryption context from `encryptedStream`, and add the credentials to unlock the stream before calling this function.

The stream that the function returns only implements [read(into:)](../archivebytestreamprotocol/read%28into_%29.md) and [read(into:atOffset:)](../archivebytestreamprotocol/read%28into_atoffset_%29.md).

## See Also

### Encrypting Data

- [encryptionStream(appendingTo:encryptionContext:flags:threadCount:)](encryptionstream%28appendingto_encryptioncontext_flags_threadcount_%29.md): Reopens an existing encryption sequential output stream.
