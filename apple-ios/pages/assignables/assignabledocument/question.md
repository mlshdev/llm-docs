> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignabledocument/question](https://developer.apple.com/documentation/assignables/assignabledocument/question)

# AssignableDocument.Question

**Framework:** Assignables  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

A question in the assignable document.

## Declaration

```swift
struct Question
```

## Topics

### Creating a question

- [init(pageID:boxes:maxScore:)](question/init%28pageid_boxes_maxscore_%29.md): Deprecated. Initializes an instance of this object with the given values.

### Inspecting a question

- [boxes](question/boxes.md): The question boxes on pages that denote question regions. Treated as as set.
- [AssignableDocument.Question.ID](question/id-swift.typealias.md): A type representing the stable identity of this question.
- [id](question/id-swift.property.md): The stable identity of this question.
- [maxScore](question/maxscore.md): An optional manual maximum point value for this question.
- [AssignableDocument.Question.Thumbnail](question/thumbnail.md): The thumbnail type for this question.
- [AssignableDocument.Question.Document](question/document.md): The document type this element is for.

### Comparing questions

- [==(\_:\_:)](question/==%28____%29.md): Returns a Boolean value indicating whether two values are equal.

### Hashing a question

- [hash(into:)](question/hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.

### Initializers

- [init(boxes:maxScore:)](question/init%28boxes_maxscore_%29.md): Initializes an instance of this object with the given values.

## Relationships

### Conforms To

- [AssignableDocumentElement](../assignabledocumentelement.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [DocumentElement](../documentelement.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

## See Also

### Inspecting an assignable document

- [AssignableDocument.ID](id-swift.typealias.md): A type representing the stable identity of this document.
- [id](id-swift.property.md): The stable identity of this document.
- [isMultiPageDocument](ismultipagedocument.md): `true`, if this document has more than one page; `false`, otherwise.
- [isPartial](ispartial.md): Denotes whether or not this document is a partial one.
- [AssignableDocument.PartIDs](partids-swift.enum.md): An enumeration containing the identities of parts managed by this view.
- [partIDs](partids-swift.property.md): Returns a collection of identifiers reflecting the manifest of parts available in the document.
- [AssignableDocument.QuestionBox](questionbox.md): A box on a page for a question.
- [questions](questions.md): A collection of questions defined for this assignable.
- [AssignableDocument.Element](element.md): The type for elements of this document. An element is a component of the document such as a page or question.
- [pagesDebugDescription](pagesdebugdescription.md)
- [AssignableDocument.Error](error.md): Errors for this document type.
