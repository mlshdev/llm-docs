> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/documentwriter/destination](https://developer.apple.com/documentation/swiftui/documentwriter/destination)

# Destination

**Framework:** SwiftUI  
**Kind:** Associated Type  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The type of the destination location to write to.

## Declaration

```swift
associatedtype Destination = URL
```

<a id="discussion"></a>

## Discussion

SwiftUI provides the document’s file URL as the destination.

## See Also

### Writing a document

- [write(snapshot:to:previous:progress:)](write%28snapshot_to_previous_progress_%29.md): Writes the document content to disk.
- [Snapshot](snapshot.md): The type representing the document’s content to write.
