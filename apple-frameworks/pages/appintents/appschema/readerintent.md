> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/readerintent](https://developer.apple.com/documentation/appintents/appschema/readerintent)

# AppSchema.ReaderIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Identifies intent schemas in the reader domain.

## Declaration

```swift
protocol ReaderIntent : AppSchema.Kind
```

## Topics

### Instance Properties

- [deletePages](readerintent/deletepages.md): An intent schema that deletes the specified pages.
- [enhanceDocuments](readerintent/enhancedocuments.md): An intent schema that enhances the documents.
- [insertPages](readerintent/insertpages.md): An intent schema that inserts pages from the specified files.
- [openDocument](readerintent/opendocument.md): An intent schema that opens the specified files in the reader.
- [openPage](readerintent/openpage.md): An intent schema that opens the app to the specified document page.
- [resizeDocuments](readerintent/resizedocuments.md): An intent schema that resizes the documents to a particular width and height.
- [rotateDocuments](readerintent/rotatedocuments.md): An intent schema that rotates the documents in the specified direction.
- [rotatePages](readerintent/rotatepages.md): An intent schema that rotates the pages in the specified direction.
- [searchDocuments](readerintent/searchdocuments.md): An intent schema that searches for text in the documents.

## Relationships

### Inherits From

- [AppSchema.Kind](kind.md)

### Conforming Types

- [AppSchema.Intent](intent.md)

## See Also

### Actions

- [deletePages](readerintent/deletepages.md): An intent schema that deletes the specified pages.
- [enhanceDocuments](readerintent/enhancedocuments.md): An intent schema that enhances the documents.
- [insertPages](readerintent/insertpages.md): An intent schema that inserts pages from the specified files.
- [openDocument](readerintent/opendocument.md): An intent schema that opens the specified files in the reader.
- [openPage](readerintent/openpage.md): An intent schema that opens the app to the specified document page.
- [resizeDocuments](readerintent/resizedocuments.md): An intent schema that resizes the documents to a particular width and height.
- [rotateDocuments](readerintent/rotatedocuments.md): An intent schema that rotates the documents in the specified direction.
- [rotatePages](readerintent/rotatepages.md): An intent schema that rotates the pages in the specified direction.
- [searchDocuments](readerintent/searchdocuments.md): An intent schema that searches for text in the documents.
