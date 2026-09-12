> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivebytestream/close(updatingcontext:)](https://developer.apple.com/documentation/applearchive/archivebytestream/close(updatingcontext:))

# close(updatingContext:)

**Framework:** Apple Archive  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Closes the stream, releases associated resources, and writes the sealed container attributes to the specified encryption context.

## Declaration

```swift
func close(updatingContext context: ArchiveEncryptionContext) throws
```

## Parameters

- `context`: The encryption context that receives the sealed container attributes.
