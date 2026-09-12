> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignabledocument/error](https://developer.apple.com/documentation/assignables/assignabledocument/error)

# AssignableDocument.Error

**Framework:** Assignables  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Errors for this document type.

## Declaration

```swift
enum Error
```

## Topics

### Document errors

- [AssignableDocument.Error.invalidURL](error/invalidurl.md): The URL provided cannot be converted into a new document.
- [AssignableDocument.Error.otherDocumentIsNotAVariant](error/otherdocumentisnotavariant.md): The other document to be merged into the current document is not a variant of the current document, so merge isn’t possible.

### Enumeration Cases

- [AssignableDocument.Error.exportFailed(partIDs:)](error/exportfailed%28partids_%29.md): Export of data from the document failed.

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting an assignable document

- [AssignableDocument.ID](id-swift.typealias.md): A type representing the stable identity of this document.
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
