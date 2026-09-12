> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivestreamprotocol/writeheader(_:)](https://developer.apple.com/documentation/applearchive/archivestreamprotocol/writeheader(_:))

# writeHeader(\_:)

**Framework:** Apple Archive  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Writes an entry header.

## Declaration

```swift
func writeHeader(_ header: ArchiveHeader) throws
```

## Parameters

- `header`: The entry header to which the operation writes.

## See Also

### Reading and Writing Headers

- [readHeader()](readheader%28%29.md): Reads the next entry header.
