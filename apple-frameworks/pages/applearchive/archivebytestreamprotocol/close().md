> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivebytestreamprotocol/close()](https://developer.apple.com/documentation/applearchive/archivebytestreamprotocol/close())

# close()

**Framework:** Apple Archive  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Closes the stream and releases associated resources.

## Declaration

```swift
func close() throws
```

<a id="Discussion"></a>

## Discussion

After calling [close()](close%28%29.md), expect that subsequent function calls on the stream to trigger a runtime error.

You must close all opened streams, otherwise deinitialization causes a runtime error.

## See Also

### Using Archive Byte Streams

- [seek(toOffset:relativeTo:)](seek%28tooffset_relativeto_%29.md): Updates the internal stream position to the specified offset relative to the specified origin.
- [cancel()](cancel%28%29.md): Cancels stream operations.
