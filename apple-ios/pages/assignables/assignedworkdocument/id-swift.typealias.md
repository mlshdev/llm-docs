> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignedworkdocument/id-swift.typealias](https://developer.apple.com/documentation/assignables/assignedworkdocument/id-swift.typealias)

# AssignedWorkDocument.ID

**Framework:** Assignables  
**Kind:** Type Alias  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

A type representing the stable identity of this document.

## Declaration

```swift
typealias ID = String
```

## See Also

### Inspecting a work document

- [id](id-swift.property.md): The stable identity of this document.
- [isMultiPageDocument](ismultipagedocument.md): `true`, if this document has more than one page; `false`, otherwise.
- [isPartial](ispartial.md): Denotes whether or not this document is a partial one.
- [AssignedWorkDocument.PartIDs](partids-swift.enum.md): An enumeration containing the identities of parts managed by this view.
- [partIDs](partids-swift.property.md): Returns a collection of identifiers reflecting the manifest of parts available in the document.
- [scoreAnnotations](scoreannotations.md): The collection of score annotations for this work document. Treated as a multiset. i.e. The order of the elements doesn’t matter and duplicate values are allowed.
- [scorers](scorers.md): The identities of users scoring this assigned work. Treated as a set.
- [pagesDebugDescription](pagesdebugdescription.md)
- [AssignedWorkDocument.Error](error.md): Errors for this document type.
