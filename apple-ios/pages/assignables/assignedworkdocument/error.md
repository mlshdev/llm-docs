> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignedworkdocument/error](https://developer.apple.com/documentation/assignables/assignedworkdocument/error)

# AssignedWorkDocument.Error

**Framework:** Assignables  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Errors for this document type.

## Declaration

```swift
enum Error
```

## Topics

### Variant error

- [AssignedWorkDocument.Error.otherDocumentIsNotAVariant](error/otherdocumentisnotavariant.md): The other document to be merged into the current document is not a variant of the current document, so merge isn’t possible.

### Enumeration Cases

- [AssignedWorkDocument.Error.exportFailed(partIDs:)](error/exportfailed%28partids_%29.md): Export of data from the document failed.

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting a work document

- [AssignedWorkDocument.ID](id-swift.typealias.md): A type representing the stable identity of this document.
- [id](id-swift.property.md): The stable identity of this document.
- [isMultiPageDocument](ismultipagedocument.md): `true`, if this document has more than one page; `false`, otherwise.
- [isPartial](ispartial.md): Denotes whether or not this document is a partial one.
- [AssignedWorkDocument.PartIDs](partids-swift.enum.md): An enumeration containing the identities of parts managed by this view.
- [partIDs](partids-swift.property.md): Returns a collection of identifiers reflecting the manifest of parts available in the document.
- [scoreAnnotations](scoreannotations.md): The collection of score annotations for this work document. Treated as a multiset. i.e. The order of the elements doesn’t matter and duplicate values are allowed.
- [scorers](scorers.md): The identities of users scoring this assigned work. Treated as a set.
- [pagesDebugDescription](pagesdebugdescription.md)
