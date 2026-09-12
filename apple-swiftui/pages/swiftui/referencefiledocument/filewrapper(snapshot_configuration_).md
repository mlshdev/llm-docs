> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/referencefiledocument/filewrapper(snapshot:configuration:)](https://developer.apple.com/documentation/swiftui/referencefiledocument/filewrapper(snapshot:configuration:))

# fileWrapper(snapshot:configuration:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+

Serializes a document snapshot to a file wrapper.

> Use Document protocol instead.

## Declaration

```swift
func fileWrapper(snapshot: Self.Snapshot, configuration: Self.WriteConfiguration) throws -> FileWrapper
```

## Parameters

- `snapshot`: The document snapshot to save.
- `configuration`: Information about a file that already exists for the document, if any.

<a id="return-value"></a>

## Return Value

The destination to serialize the document contents to. The value can be a newly created [FileWrapper](https://developer.apple.com/documentation/foundation/filewrapper) or an update of the one provided in the `configuration` input.

<a id="discussion"></a>

## Discussion

To store a document — for example, in response to a Save command — SwiftUI begins by calling the [snapshot(contentType:)](snapshot%28contenttype_%29.md) method to get a copy of the document data in its current state. Then SwiftUI passes that snapshot to this method, where you serialize it and create or modify a file wrapper with the serialized data:

```swift
func fileWrapper(snapshot: Snapshot, configuration: WriteConfiguration) throws -> FileWrapper {
    let data = try JSONEncoder().encode(snapshot)
    return FileWrapper(regularFileWithContents: data)
}
```

SwiftUI disables document edits during the snapshot to ensure that the document’s data remains coherent, but reenables edits during the serialization operation.

> **Note**

> SwiftUI calls this method on a background thread. Don’t make user interface changes from that thread.

## See Also

### Writing a document

- [writableContentTypes](writablecontenttypes.md): Deprecated. The file types that the document supports saving or exporting to.
- [ReferenceFileDocument.WriteConfiguration](writeconfiguration.md): Deprecated. The configuration for writing document contents.
