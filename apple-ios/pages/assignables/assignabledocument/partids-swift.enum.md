> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignabledocument/partids-swift.enum](https://developer.apple.com/documentation/assignables/assignabledocument/partids-swift.enum)

# AssignableDocument.PartIDs

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
- [authors](partids-swift.enum/authors.md): The identifier for the part that stores authorship information.
- [base](partids-swift.enum/base.md): The identifier for the part that contains the base PDF upon which this document is built.
- [instructionMarkup](partids-swift.enum/instructionmarkup.md): The identifier for the part that stores markup intended to provide additional instructions to takers of the assignable.
- [questionBoxes](partids-swift.enum/questionboxes.md): The identifier for the part that stores question definitions.

### Getting the document type

- [AssignableDocument.PartIDs.Document](partids-swift.enum/document.md): The document type that this part ID is for.

## See Also

### Inspecting an assignable document

- [AssignableDocument.ID](id-swift.typealias.md): A type representing the stable identity of this document.
- [id](id-swift.property.md): The stable identity of this document.
- [isMultiPageDocument](ismultipagedocument.md): `true`, if this document has more than one page; `false`, otherwise.
- [isPartial](ispartial.md): Denotes whether or not this document is a partial one.
- [partIDs](partids-swift.property.md): Returns a collection of identifiers reflecting the manifest of parts available in the document.
- [AssignableDocument.Question](question.md): A question in the assignable document.
- [AssignableDocument.QuestionBox](questionbox.md): A box on a page for a question.
- [questions](questions.md): A collection of questions defined for this assignable.
- [AssignableDocument.Element](element.md): The type for elements of this document. An element is a component of the document such as a page or question.
- [pagesDebugDescription](pagesdebugdescription.md)
- [AssignableDocument.Error](error.md): Errors for this document type.
