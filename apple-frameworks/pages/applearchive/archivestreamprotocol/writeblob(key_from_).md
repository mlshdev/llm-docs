> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivestreamprotocol/writeblob(key:from:)](https://developer.apple.com/documentation/applearchive/archivestreamprotocol/writeblob(key:from:))

# writeBlob(key:from:)

**Framework:** Apple Archive  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Writes an entry blob data.

## Declaration

```swift
func writeBlob(key: ArchiveHeader.FieldKey, from buffer: UnsafeRawBufferPointer) throws
```

## Parameters

- `key`: The blob field key.
- `buffer`: The data buffer that the operation uses as a source for the entry blob data.

## See Also

### Reading and Writing Blobs

- [readBlob(key:into:)](readblob%28key_into_%29.md): Reads the current entry blob data.
