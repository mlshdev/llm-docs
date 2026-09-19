> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/assignables/assignabledocumentelement

# AssignableDocumentElement

**Framework:** Assignables  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

An element of an [AssignableDocument](assignabledocument.md).

## Declaration

```swift
protocol AssignableDocumentElement : DocumentElement
```

## Relationships

### Inherits From

- [DocumentElement](documentelement.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

### Conforming Types

- [AssignableDocument.Page](assignabledocument/page.md)
- [AssignableDocument.Question](assignabledocument/question.md)
- [AssignableDocument.QuestionBox](assignabledocument/questionbox.md)

## See Also

### Document elements

- [DocumentElement](documentelement.md): Represents an element that is contained within a document. Such elements can have identifiers that uniquely identify them within a document.
- [BasicDocumentElementID](basicdocumentelementid.md): A default implementation for a document element identifier.
- [DocumentElementID](documentelementid.md): An identifier for an element in a document.
- [AssignedWorkDocumentElement](assignedworkdocumentelement.md): An element of an [AssignedWorkDocument](assignedworkdocument.md).
