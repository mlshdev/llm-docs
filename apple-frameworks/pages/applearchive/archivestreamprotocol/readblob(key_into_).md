> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivestreamprotocol/readblob(key:into:)](https://developer.apple.com/documentation/applearchive/archivestreamprotocol/readblob(key:into:))

# readBlob(key:into:)

**Framework:** Apple Archive  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Reads the current entry blob data.

## Declaration

```swift
func readBlob(key: ArchiveHeader.FieldKey, into buffer: UnsafeMutableRawBufferPointer) throws
```

## Parameters

- `key`: The blob field key.
- `buffer`: The data buffer that the operation fills with the entry blob data.

## See Also

### Reading and Writing Blobs

- [writeBlob(key:from:)](writeblob%28key_from_%29.md): Writes an entry blob data.
