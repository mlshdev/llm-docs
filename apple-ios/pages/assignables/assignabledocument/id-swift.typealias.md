> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignabledocument/id-swift.typealias](https://developer.apple.com/documentation/assignables/assignabledocument/id-swift.typealias)

# AssignableDocument.ID

**Framework:** Assignables  
**Kind:** Type Alias  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

A type representing the stable identity of this document.

## Declaration

```swift
typealias ID = String
```

## See Also

### Inspecting an assignable document

- [id](id-swift.property.md): The stable identity of this document.
- [isMultiPageDocument](ismultipagedocument.md): `true`, if this document has more than one page; `false`, otherwise.
- [isPartial](ispartial.md): Denotes whether or not this document is a partial one.
- [AssignableDocument.PartIDs](partids-swift.enum.md): An enumeration containing the identities of parts managed by this view.
- [partIDs](partids-swift.property.md): Returns a collection of identifiers reflecting the manifest of parts available in the document.
- [AssignableDocument.Question](question.md): A question in the assignable document.
- [AssignableDocument.QuestionBox](questionbox.md): A box on a page for a question.
- [questions](questions.md): A collection of questions defined for this assignable.
- [AssignableDocument.Element](element.md): The type for elements of this document. An element is a component of the document such as a page or question.
- [pagesDebugDescription](pagesdebugdescription.md)
- [AssignableDocument.Error](error.md): Errors for this document type.
