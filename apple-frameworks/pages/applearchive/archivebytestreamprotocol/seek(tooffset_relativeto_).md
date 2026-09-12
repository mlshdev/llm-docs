> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivebytestreamprotocol/seek(tooffset:relativeto:)](https://developer.apple.com/documentation/applearchive/archivebytestreamprotocol/seek(tooffset:relativeto:))

# seek(toOffset:relativeTo:)

**Framework:** Apple Archive  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Updates the internal stream position to the specified offset relative to the specified origin.

## Declaration

```swift
func seek(toOffset offset: Int64, relativeTo origin: FileDescriptor.SeekOrigin) throws -> Int64
```

## Parameters

- `offset`: The offset relative to the reference position from which to seek.
- `origin`: The reference position from which to seek.

<a id="return-value"></a>

## Return Value

The new internal stream position that is relative to the beginning of the stream.

## See Also

### Using Archive Byte Streams

- [cancel()](cancel%28%29.md): Cancels stream operations.
- [close()](close%28%29.md): Closes the stream and releases associated resources.
