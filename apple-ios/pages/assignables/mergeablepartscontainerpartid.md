> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/mergeablepartscontainerpartid](https://developer.apple.com/documentation/assignables/mergeablepartscontainerpartid)

# MergeablePartsContainerPartID

**Framework:** Assignables  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

The ID of a part in a `MergeablePartsContainer`.

## Declaration

```swift
struct MergeablePartsContainerPartID
```

## Topics

### Initializers

- [init(\_:)](mergeablepartscontainerpartid/init%28__%29.md): Initiailizes an instance of a document part ID.

### Instance Properties

- [rawValue](mergeablepartscontainerpartid/rawvalue.md): The underlying value of the part ID.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Mergeable document

- [MergeableDocument](mergeabledocument.md): Documents conforming to this protocol can merge several copies of the document into a single document.
- [MergeableDocumentPage](mergeabledocumentpage.md): Types conforming to this protocol indicate that they are a page in a [MergeableDocument](mergeabledocument.md) conforming object.
- [MergeablePartsContainer](mergeablepartscontainer.md): Objects conforming to this protocol allow merging in other replicas of themselves or merging in individual parts of themselves.
- [DocumentThumbnail](documentthumbnail.md): A structure that contains an image of an entire page or a portion of a page and the ID of the page the image is from.
