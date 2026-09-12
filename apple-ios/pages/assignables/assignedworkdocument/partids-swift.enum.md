> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignedworkdocument/partids-swift.enum](https://developer.apple.com/documentation/assignables/assignedworkdocument/partids-swift.enum)

# AssignedWorkDocument.PartIDs

**Framework:** Assignables  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

An enumeration containing the identities of parts managed by this view.

## Declaration

```swift
enum PartIDs
```

## Topics

### Layer types

- [all](partids-swift.enum/all.md): All part IDs containable by this document.
- [assignableDocumentAuthors](partids-swift.enum/assignabledocumentauthors.md): The identifier for the part that stores authorship information.
- [assignableDocumentBase](partids-swift.enum/assignabledocumentbase.md): The identifier for the part that contains the base PDF upon which this document is built.
- [assignableDocumentInstructionMarkup](partids-swift.enum/assignabledocumentinstructionmarkup.md): The identifier for the part that stores markup intended to provide additional instructions to takers of the assignable.
- [assignableDocumentQuestionBoxes](partids-swift.enum/assignabledocumentquestionboxes.md): The identifier for the part that stores question definitions.
- [assignees](partids-swift.enum/assignees.md): The identifier for the part that stores takers participating in this document.
- [scoreAnnotations](partids-swift.enum/scoreannotations.md): The identifier for the part that stores score annotations.
- [scorerMarkup](partids-swift.enum/scorermarkup.md): The identifier for the part that stores markup created by the scorer.
- [scorers](partids-swift.enum/scorers.md): The identifier for the part that stores scorers participating in grading this document.
- [takerMarkup](partids-swift.enum/takermarkup.md): The identifier for the part that stores markup created by the taker.

### Getting the document type

- [AssignedWorkDocument.PartIDs.Document](partids-swift.enum/document.md): The document type that this part ID is for.

## See Also

### Inspecting a work document

- [AssignedWorkDocument.ID](id-swift.typealias.md): A type representing the stable identity of this document.
- [id](id-swift.property.md): The stable identity of this document.
- [isMultiPageDocument](ismultipagedocument.md): `true`, if this document has more than one page; `false`, otherwise.
- [isPartial](ispartial.md): Denotes whether or not this document is a partial one.
- [partIDs](partids-swift.property.md): Returns a collection of identifiers reflecting the manifest of parts available in the document.
- [scoreAnnotations](scoreannotations.md): The collection of score annotations for this work document. Treated as a multiset. i.e. The order of the elements doesn’t matter and duplicate values are allowed.
- [scorers](scorers.md): The identities of users scoring this assigned work. Treated as a set.
- [pagesDebugDescription](pagesdebugdescription.md)
- [AssignedWorkDocument.Error](error.md): Errors for this document type.
