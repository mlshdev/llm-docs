> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivestreamprotocol/readheader()](https://developer.apple.com/documentation/applearchive/archivestreamprotocol/readheader())

# readHeader()

**Framework:** Apple Archive  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Reads the next entry header.

## Declaration

```swift
func readHeader() throws -> ArchiveHeader?
```

<a id="return-value"></a>

## Return Value

A new header instance, or `nil` if the operation reaches the end of the archive stream.

## See Also

### Reading and Writing Headers

- [writeHeader(\_:)](writeheader%28__%29.md): Writes an entry header.
