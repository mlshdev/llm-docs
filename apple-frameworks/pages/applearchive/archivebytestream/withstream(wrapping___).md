> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivebytestream/withstream(wrapping:_:)](https://developer.apple.com/documentation/applearchive/archivebytestream/withstream(wrapping:_:))

# withStream(wrapping:\_:)

**Framework:** Apple Archive  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Calls the given closure with an archive byte stream instance mapped to an object that conforms to the archive byte stream protocol.

## Declaration

```swift
static func withStream<C, E>(wrapping instance: C, _ body: (ArchiveByteStream) throws -> E) throws -> E where C : AnyObject, C : ArchiveByteStreamProtocol
```

## Parameters

- `instance`: The object that the new archive stream wraps.
- `body`: A closure with the archive byte stream passed as a parameter.

<a id="return-value"></a>

## Return Value

The result of the closure.

## See Also

### Streaming with Custom Streams

- [customStream(instance:)](customstream%28instance_%29.md): Returns a new archive byte stream instance mapped to an object that conforms to the archive byte stream protocol.
- [sharedBufferPipe(capacity:)](sharedbufferpipe%28capacity_%29.md): Creates a pair of streams and links them by a shared buffer.
