> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/filedocumentconfiguration/document](https://developer.apple.com/documentation/swiftui/filedocumentconfiguration/document)

# document

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The current document model.

> Conform your type to Document and use URLDocumentConfiguration instead.

## Declaration

```swift
@Binding var document: Document { get nonmutating set }
```

<a id="discussion"></a>

## Discussion

Setting a new value marks the document as having changes for later saving and registers an undo action to restore the model to its previous value.

If [isEditable](iseditable.md) is `false`, setting a new value has no effect because the document is in viewing mode.

## See Also

### Getting and setting the document

- [$document]($document.md): Deprecated.
