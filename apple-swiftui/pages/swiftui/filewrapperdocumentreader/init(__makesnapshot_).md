> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/filewrapperdocumentreader/init(_:makesnapshot:)](https://developer.apple.com/documentation/swiftui/filewrapperdocumentreader/init(_:makesnapshot:))

# init(\_:makeSnapshot:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Creates a reader that converts a `FileWrapper` into a snapshot.

## Declaration

```swift
init(_ configuration: sending FileWrapperDocumentReader<Snapshot>.ReadConfiguration, makeSnapshot: @escaping (FileWrapper) async throws -> sending Snapshot)
```

## Parameters

- `configuration`: The read configuration passed to [reader(configuration:)](../readabledocument/reader%28configuration_%29.md).
- `makeSnapshot`: A closure that deserializes the `FileWrapper` into a snapshot. For flat files, read `regularFileContents`. For packages, navigate `fileWrappers` to find children. Throw an error if the data is malformed.

## See Also

### Creating a reader

- [FileWrapperDocumentReader.ReadConfiguration](readconfiguration.md)
