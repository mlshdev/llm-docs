> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignedworkdocument/ispartial](https://developer.apple.com/documentation/assignables/assignedworkdocument/ispartial)

# isPartial

**Framework:** Assignables  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Denotes whether or not this document is a partial one.

## Declaration

```swift
var isPartial: Bool { get }
```

<a id="discussion"></a>

## Discussion

Documents are considered partial when they are reconstituted with some, not all, of their parts. When a document is considered partial, you cannot read or write to its missing parts.

## See Also

### Inspecting a work document

- [AssignedWorkDocument.ID](id-swift.typealias.md): A type representing the stable identity of this document.
- [id](id-swift.property.md): The stable identity of this document.
- [isMultiPageDocument](ismultipagedocument.md): `true`, if this document has more than one page; `false`, otherwise.
- [AssignedWorkDocument.PartIDs](partids-swift.enum.md): An enumeration containing the identities of parts managed by this view.
- [partIDs](partids-swift.property.md): Returns a collection of identifiers reflecting the manifest of parts available in the document.
- [scoreAnnotations](scoreannotations.md): The collection of score annotations for this work document. Treated as a multiset. i.e. The order of the elements doesn’t matter and duplicate values are allowed.
- [scorers](scorers.md): The identities of users scoring this assigned work. Treated as a set.
- [pagesDebugDescription](pagesdebugdescription.md)
- [AssignedWorkDocument.Error](error.md): Errors for this document type.
