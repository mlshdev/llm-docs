> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/urldocumentconfiguration/makefilecoordinator()](https://developer.apple.com/documentation/swiftui/urldocumentconfiguration/makefilecoordinator())

# makeFileCoordinator()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Creates a file coordinator for coordinated disk access outside the normal read/write flow.

## Declaration

```swift
@MainActor final func makeFileCoordinator() -> sending NSFileCoordinator
```

<a id="discussion"></a>

## Discussion

Call this every time to get a new coordinator for each separate read or write operation. SwiftUI coordinates file access for [read(from:progress:)](../documentreader/read%28from_progress_%29.md) and [write(snapshot:to:previous:progress:)](../documentwriter/write%28snapshot_to_previous_progress_%29.md) automatically. Use this method when you need to access the document’s file at other times — for example, to read a single sub-file of a package on demand.

Do not reuse coordinators across operations since `NSFileCoordinator` does not conform to `Sendable`.
