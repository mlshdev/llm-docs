> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivestream/customstream(instance:)](https://developer.apple.com/documentation/applearchive/archivestream/customstream(instance:))

# customStream(instance:)

**Framework:** Apple Archive  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Returns a new archive stream instance mapped to an object that conforms to the archive stream protocol.

## Declaration

```swift
static func customStream<C>(instance: C) -> ArchiveStream? where C : AnyObject, C : ArchiveStreamProtocol
```

## Parameters

- `instance`: The object that the new archive stream wraps.

<a id="return-value"></a>

## Return Value

A new archive stream.

## See Also

### Using Custom Streams

- [withStream(wrapping:\_:)](withstream%28wrapping___%29.md): Calls the given closure with an archive stream instance mapped to an object that conforms to the archive stream protocol.
