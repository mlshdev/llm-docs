> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivebytestreamprotocol/cancel()](https://developer.apple.com/documentation/applearchive/archivebytestreamprotocol/cancel())

# cancel()

**Framework:** Apple Archive  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Cancels stream operations.

## Declaration

```swift
func cancel()
```

<a id="Discussion"></a>

## Discussion

Note that after you’ve called [cancel()](cancel%28%29.md), you must close the stream to release resources.

## See Also

### Using Archive Byte Streams

- [seek(toOffset:relativeTo:)](seek%28tooffset_relativeto_%29.md): Updates the internal stream position to the specified offset relative to the specified origin.
- [close()](close%28%29.md): Closes the stream and releases associated resources.
