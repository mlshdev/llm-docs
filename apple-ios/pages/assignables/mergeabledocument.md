> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/mergeabledocument](https://developer.apple.com/documentation/assignables/mergeabledocument)

# MergeableDocument

**Framework:** Assignables  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Documents conforming to this protocol can merge several copies of the document into a single document.

## Declaration

```swift
protocol MergeableDocument : MergeablePartsContainer, Identifiable
```

## Topics

### Getting the pages

- [pages](mergeabledocument/pages.md): The collection of pages in this document.
- [Page](mergeabledocument/page.md): The page type this document contains.

### Exporting the layers

- [exportToPDF(visibleParts:)](mergeabledocument/exporttopdf%28visibleparts_%29.md): Exports the indicated layers of this document into a single `PDFDocument`.

### Exporting the thumbnails

- [pageThumbnails(visibleParts:)](mergeabledocument/pagethumbnails%28visibleparts_%29.md): Exports thumbnails of each page such that the thumbnails contain the indicated layers.

### Getting the error type

- [Error](mergeabledocument/error.md): The error type for this type.

## Relationships

### Inherits From

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [MergeablePartsContainer](mergeablepartscontainer.md)

### Conforming Types

- [AssignableDocument](assignabledocument.md)
- [AssignedWorkDocument](assignedworkdocument.md)

## See Also

### Mergeable document

- [MergeablePartsContainerPartID](mergeablepartscontainerpartid.md): The ID of a part in a `MergeablePartsContainer`.
- [MergeableDocumentPage](mergeabledocumentpage.md): Types conforming to this protocol indicate that they are a page in a [MergeableDocument](mergeabledocument.md) conforming object.
- [MergeablePartsContainer](mergeablepartscontainer.md): Objects conforming to this protocol allow merging in other replicas of themselves or merging in individual parts of themselves.
- [DocumentThumbnail](documentthumbnail.md): A structure that contains an image of an entire page or a portion of a page and the ID of the page the image is from.
