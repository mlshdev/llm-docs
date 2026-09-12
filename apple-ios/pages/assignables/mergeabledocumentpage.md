> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/mergeabledocumentpage](https://developer.apple.com/documentation/assignables/mergeabledocumentpage)

# MergeableDocumentPage

**Framework:** Assignables  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Types conforming to this protocol indicate that they are a page in a [MergeableDocument](mergeabledocument.md) conforming object.

## Declaration

```swift
protocol MergeableDocumentPage : Identifiable
```

## Topics

### Implementing a mergeable page

- [Document](mergeabledocumentpage/document.md): The document type this page is for.
- [MergeableDocumentPage.Thumbnail](mergeabledocumentpage/thumbnail.md): The thumbnail type for this page.

## Relationships

### Inherits From

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

### Conforming Types

- [AssignableDocument.Page](assignabledocument/page.md)
- [AssignedWorkDocument.Page](assignedworkdocument/page.md)

## See Also

### Mergeable document

- [MergeableDocument](mergeabledocument.md): Documents conforming to this protocol can merge several copies of the document into a single document.
- [MergeablePartsContainerPartID](mergeablepartscontainerpartid.md): The ID of a part in a `MergeablePartsContainer`.
- [MergeablePartsContainer](mergeablepartscontainer.md): Objects conforming to this protocol allow merging in other replicas of themselves or merging in individual parts of themselves.
- [DocumentThumbnail](documentthumbnail.md): A structure that contains an image of an entire page or a portion of a page and the ID of the page the image is from.
