> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/documentthumbnail](https://developer.apple.com/documentation/assignables/documentthumbnail)

# DocumentThumbnail

**Framework:** Assignables  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

A structure that contains an image of an entire page or a portion of a page and the ID of the page the image is from.

## Declaration

```swift
struct DocumentThumbnail<Document> where Document : MergeableDocument
```

## Topics

### Getting the page identifier

- [pageID](documentthumbnail/pageid.md): The ID of the page this thumbnail is for.

## See Also

### Mergeable document

- [MergeableDocument](mergeabledocument.md): Documents conforming to this protocol can merge several copies of the document into a single document.
- [MergeablePartsContainerPartID](mergeablepartscontainerpartid.md): The ID of a part in a `MergeablePartsContainer`.
- [MergeableDocumentPage](mergeabledocumentpage.md): Types conforming to this protocol indicate that they are a page in a [MergeableDocument](mergeabledocument.md) conforming object.
- [MergeablePartsContainer](mergeablepartscontainer.md): Objects conforming to this protocol allow merging in other replicas of themselves or merging in individual parts of themselves.
