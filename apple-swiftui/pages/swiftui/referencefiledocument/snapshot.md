> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/referencefiledocument/snapshot](https://developer.apple.com/documentation/swiftui/referencefiledocument/snapshot)

# Snapshot

**Framework:** SwiftUI  
**Kind:** Associated Type  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+

A type that represents the document’s stored content.

> Use Document protocol instead.

## Declaration

```swift
associatedtype Snapshot
```

<a id="discussion"></a>

## Discussion

Define this type to represent all the data that your document stores. When someone issues a Save command, SwiftUI asks your document for a value of this type by calling the document’s [snapshot(contentType:)](snapshot%28contenttype_%29.md) method. SwiftUI sends the snapshot that you provide to the document’s [fileWrapper(snapshot:configuration:)](filewrapper%28snapshot_configuration_%29.md) method, where you serialize the contents of the snapshot into a file wrapper.

## See Also

### Getting a snapshot

- [snapshot(contentType:)](snapshot%28contenttype_%29.md): Deprecated. Creates a snapshot that represents the current state of the document.
