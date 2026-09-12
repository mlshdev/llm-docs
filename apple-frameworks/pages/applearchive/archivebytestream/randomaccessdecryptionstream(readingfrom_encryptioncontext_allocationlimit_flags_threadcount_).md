> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivebytestream/randomaccessdecryptionstream(readingfrom:encryptioncontext:allocationlimit:flags:threadcount:)](https://developer.apple.com/documentation/applearchive/archivebytestream/randomaccessdecryptionstream(readingfrom:encryptioncontext:allocationlimit:flags:threadcount:))

# randomAccessDecryptionStream(readingFrom:encryptionContext:allocationLimit:flags:threadCount:)

**Framework:** Apple Archive  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Creates a decryption random access input stream.

## Declaration

```swift
static func randomAccessDecryptionStream(readingFrom encryptedStream: ArchiveByteStream, encryptionContext context: ArchiveEncryptionContext, allocationLimit: Int = Int.max, flags: ArchiveFlags = [], threadCount: Int = 0) -> ArchiveByteStream?
```

## Parameters

- `encryptedStream`: An input stream that provides encrypted and compressed data.
- `context`: Encryption context that provides options and credentials.
- `allocationLimit`: The requested memory allocation size in bytes. Set to `0` for lowest memory footprint or [max](https://developer.apple.com/documentation/swift/int/max) for best performance.
- `flags`: Flags that control the behavior of the operation.
- `threadCount`: The number of worker threads that the operation uses, set to `0` for default.

<a id="return-value"></a>

## Return Value

A new archive byte stream.

## See Also

### Decrypting Data

- [decryptionStream(readingFrom:encryptionContext:flags:threadCount:)](decryptionstream%28readingfrom_encryptioncontext_flags_threadcount_%29.md): Creates a decryption sequential input stream.
