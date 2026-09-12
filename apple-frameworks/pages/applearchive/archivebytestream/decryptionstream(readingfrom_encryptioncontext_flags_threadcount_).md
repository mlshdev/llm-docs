> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivebytestream/decryptionstream(readingfrom:encryptioncontext:flags:threadcount:)](https://developer.apple.com/documentation/applearchive/archivebytestream/decryptionstream(readingfrom:encryptioncontext:flags:threadcount:))

# decryptionStream(readingFrom:encryptionContext:flags:threadCount:)

**Framework:** Apple Archive  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Creates a decryption sequential input stream.

## Declaration

```swift
static func decryptionStream(readingFrom encryptedStream: ArchiveByteStream, encryptionContext context: ArchiveEncryptionContext, flags: ArchiveFlags = [], threadCount: Int = 0) -> ArchiveByteStream?
```

## Parameters

- `encryptedStream`: An input stream that provides encrypted and compressed data.
- `context`: The encryption context that provides options and credentials.
- `flags`: Flags that control the behavior of the operation.
- `threadCount`: The number of worker threads that the operation uses, set to `0` for default.

<a id="return-value"></a>

## Return Value

A new archive byte stream.

## See Also

### Decrypting Data

- [randomAccessDecryptionStream(readingFrom:encryptionContext:allocationLimit:flags:threadCount:)](randomaccessdecryptionstream%28readingfrom_encryptioncontext_allocationlimit_flags_threadcount_%29.md): Creates a decryption random access input stream.
