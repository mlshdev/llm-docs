> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/referencefiledocument/snapshot

# Snapshot

**Framework:** SwiftUI  
**Kind:** Associated Type  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.2) · macOS 11.0+ (deprecated in 27.2) · visionOS 1.0+

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
