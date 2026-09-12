> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivestream/withstream(wrapping:_:)](https://developer.apple.com/documentation/applearchive/archivestream/withstream(wrapping:_:))

# withStream(wrapping:\_:)

**Framework:** Apple Archive  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Calls the given closure with an archive stream instance mapped to an object that conforms to the archive stream protocol.

## Declaration

```swift
static func withStream<C, E>(wrapping instance: C, _ body: (ArchiveStream) throws -> E) throws -> E where C : AnyObject, C : ArchiveStreamProtocol
```

## Parameters

- `instance`: The object that the new archive stream wraps.
- `body`: A closure with the archive stream passed as a parameter.

<a id="return-value"></a>

## Return Value

The result of the closure.

## See Also

### Using Custom Streams

- [customStream(instance:)](customstream%28instance_%29.md): Returns a new archive stream instance mapped to an object that conforms to the archive stream protocol.
