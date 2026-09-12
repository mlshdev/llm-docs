> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/readabledocument/apply(snapshot:previous:)](https://developer.apple.com/documentation/swiftui/readabledocument/apply(snapshot:previous:))

# apply(snapshot:previous:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Applies a loaded snapshot to the document model.

## Declaration

```swift
@MainActor func apply(snapshot: sending Self.Reader.Snapshot, previous: sending Self.Reader.Snapshot?) async throws
```

## Parameters

- `snapshot`: The content loaded from disk.
- `previous`: The previously loaded snapshot, or `nil` on the first read. Use it to apply incremental updates.

<a id="discussion"></a>

## Discussion

SwiftUI calls this on the main actor after the reader’s [read(from:progress:)](../documentreader/read%28from_progress_%29.md) completes. Update your model properties here. Keep this method lightweight — all deserialization should happen in the reader.

## See Also

### Reading a document

- [readableContentTypes](readablecontenttypes.md): The content types this document can open.
- [ReadableDocument.ReadConfiguration](readconfiguration.md): The configuration for reading document contents.
- [Reader](reader.md): A type that implements reading from disk.
- [reader(configuration:)](reader%28configuration_%29.md): Creates a reader to load this document from disk.
- [writableContentTypes](writablecontenttypes.md): Conforms when `Self` conforms to `WritableDocument`. By default, a document that supports reading also supports writing the same content types.
