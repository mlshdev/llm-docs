> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/documentelement](https://developer.apple.com/documentation/assignables/documentelement)

# DocumentElement

**Framework:** Assignables  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Represents an element that is contained within a document. Such elements can have identifiers that uniquely identify them within a document.

## Declaration

```swift
protocol DocumentElement : Hashable
```

## Topics

### Implementing a document element

- [Document](documentelement/document.md): The document type this element is for.

## Relationships

### Inherits From

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

### Inherited By

- [AssignableDocumentElement](assignabledocumentelement.md)
- [AssignedWorkDocumentElement](assignedworkdocumentelement.md)

### Conforming Types

- [AssignableDocument.Page](assignabledocument/page.md)
- [AssignableDocument.Question](assignabledocument/question.md)
- [AssignableDocument.QuestionBox](assignabledocument/questionbox.md)
- [AssignedWorkDocument.Page](assignedworkdocument/page.md)
- [AssignedWorkDocument.ScoreAnnotation](assignedworkdocument/scoreannotation.md)

## See Also

### Document elements

- [BasicDocumentElementID](basicdocumentelementid.md): A default implementation for a document element identifier.
- [DocumentElementID](documentelementid.md): An identifier for an element in a document.
- [AssignableDocumentElement](assignabledocumentelement.md): An element of an [AssignableDocument](assignabledocument.md).
- [AssignedWorkDocumentElement](assignedworkdocumentelement.md): An element of an [AssignedWorkDocument](assignedworkdocument.md).
