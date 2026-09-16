> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/referencefiledocumentconfiguration/document

# document

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.2) · macOS 11.0+ (deprecated in 27.2) · visionOS 1.0+

The current document model.

> Use Document protocol and URLDocumentConfiguration instead.

## Declaration

```swift
@ObservedObject<Document> @MainActor @preconcurrency var document: Document { get set }
```

<a id="discussion"></a>

## Discussion

Changes to the document dirty the document state, indicating that it needs to be saved. SwiftUI doesn’t automatically register undo actions.

## See Also

### Getting and setting the document

- [$document]($document.md): Deprecated.
