> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/referencefiledocument/snapshot(contenttype:)](https://developer.apple.com/documentation/swiftui/referencefiledocument/snapshot(contenttype:))

# snapshot(contentType:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+

Creates a snapshot that represents the current state of the document.

> Use Document protocol instead.

## Declaration

```swift
func snapshot(contentType: UTType) throws -> Self.Snapshot
```

## Parameters

- `contentType`: The content type that you create the document snapshot for.

<a id="return-value"></a>

## Return Value

A snapshot of the document content that the system provides to the [fileWrapper(snapshot:configuration:)](filewrapper%28snapshot_configuration_%29.md) method for serialization.

<a id="discussion"></a>

## Discussion

To store a document — for example, in response to a Save command — SwiftUI begins by calling this method. Return a copy of the document’s content from your implementation of the method. For example, you might define an initializer for your document’s model object that copies the contents of the document’s instance, and return that:

```swift
func snapshot(contentType: UTType) throws -> Snapshot {
    Model(from: model) // Creates a copy.
}
```

SwiftUI prevents document edits during the snapshot operation to ensure that the model state remains coherent. After the call completes, SwiftUI reenables edits, and then calls the [fileWrapper(snapshot:configuration:)](filewrapper%28snapshot_configuration_%29.md) method, where you serialize the snapshot and store it to a file.

> **Note**

> SwiftUI calls this method on a background thread. Don’t make user interface changes from that thread.

## See Also

### Getting a snapshot

- [Snapshot](snapshot.md): Deprecated. A type that represents the document’s stored content.
