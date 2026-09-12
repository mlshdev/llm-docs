> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/mergeablepartscontainer](https://developer.apple.com/documentation/assignables/mergeablepartscontainer)

# MergeablePartsContainer

**Framework:** Assignables  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Objects conforming to this protocol allow merging in other replicas of themselves or merging in individual parts of themselves.

## Declaration

```swift
protocol MergeablePartsContainer : Hashable
```

## Topics

### Merging the parts

- [merge(other:)](mergeablepartscontainer/merge%28other_%29.md): Deprecated. Merge another object of this type into this object.
- [merge(partID:partDataURL:)](mergeablepartscontainer/merge%28partid_partdataurl_%29.md): Deprecated. Merges an individual part into the specified part of this object.

### Exporting the parts

- [export(partIDs:)](mergeablepartscontainer/export%28partids_%29.md): Deprecated. Given a set of part identifiers, return a dictionary of part ID to URL to the part data file for the requested parts.

### Getting the part identifiers

- [partIDs](mergeablepartscontainer/partids.md): Returns a collection of part IDs reflecting the manifest of parts available in the document.
- [MergeablePartsContainer.PartID](mergeablepartscontainer/partid.md): The type for document layer IDs.

### Inspecting the parts

- [isPartial](mergeablepartscontainer/ispartial.md): Documents are considered partial when they are reconstituted missing one or more of their associated document part IDs. When a document is considered partial it is expected that we shouldn’t be able to both read or write to the parts that the document has neither been reconstituted or merged with.

### Instance Methods

- [exportParts(identifiedBy:)](mergeablepartscontainer/exportparts%28identifiedby_%29.md): Given a set of part identifiers, return a dictionary of part ID to part data.
- [makePart(for:)](mergeablepartscontainer/makepart%28for_%29.md): Creates data for the part with the given identifier.
- [merge(\_:)](mergeablepartscontainer/merge%28__%29.md): Merge another object of this type into this object.
- [merge(partData:into:)](mergeablepartscontainer/merge%28partdata_into_%29.md): Merges an individual part into the specified part of this object.

## Relationships

### Inherits From

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

### Inherited By

- [MergeableDocument](mergeabledocument.md)

### Conforming Types

- [AssignableDocument](assignabledocument.md)
- [AssignedWorkDocument](assignedworkdocument.md)

## See Also

### Mergeable document

- [MergeableDocument](mergeabledocument.md): Documents conforming to this protocol can merge several copies of the document into a single document.
- [MergeablePartsContainerPartID](mergeablepartscontainerpartid.md): The ID of a part in a `MergeablePartsContainer`.
- [MergeableDocumentPage](mergeabledocumentpage.md): Types conforming to this protocol indicate that they are a page in a [MergeableDocument](mergeabledocument.md) conforming object.
- [DocumentThumbnail](documentthumbnail.md): A structure that contains an image of an entire page or a portion of a page and the ID of the page the image is from.
