> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivebytestream/customstream(instance:)](https://developer.apple.com/documentation/applearchive/archivebytestream/customstream(instance:))

# customStream(instance:)

**Framework:** Apple Archive  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Returns a new archive byte stream instance mapped to an object that conforms to the archive byte stream protocol.

## Declaration

```swift
static func customStream<C>(instance: C) -> ArchiveByteStream? where C : AnyObject, C : ArchiveByteStreamProtocol
```

## Parameters

- `instance`: The object that the new archive stream wraps.

<a id="return-value"></a>

## Return Value

A new archive byte stream.

## See Also

### Streaming with Custom Streams

- [withStream(wrapping:\_:)](withstream%28wrapping___%29.md): Calls the given closure with an archive byte stream instance mapped to an object that conforms to the archive byte stream protocol.
- [sharedBufferPipe(capacity:)](sharedbufferpipe%28capacity_%29.md): Creates a pair of streams and links them by a shared buffer.
