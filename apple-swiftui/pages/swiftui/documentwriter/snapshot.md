> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/documentwriter/snapshot](https://developer.apple.com/documentation/swiftui/documentwriter/snapshot)

# Snapshot

**Framework:** SwiftUI  
**Kind:** Associated Type  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The type representing the document’s content to write.

## Declaration

```swift
associatedtype Snapshot
```

<a id="discussion"></a>

## Discussion

This is the same type returned by [snapshot(contentType:)](../writabledocument/snapshot%28contenttype_%29.md). It crosses an actor boundary (from main actor to background), so use `sending` annotations or make it `Sendable`.

## See Also

### Writing a document

- [write(snapshot:to:previous:progress:)](write%28snapshot_to_previous_progress_%29.md): Writes the document content to disk.
- [Destination](destination.md): The type of the destination location to write to.
