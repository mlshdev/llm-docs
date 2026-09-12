> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignabledocument/questionbox](https://developer.apple.com/documentation/assignables/assignabledocument/questionbox)

# AssignableDocument.QuestionBox

**Framework:** Assignables  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

A box on a page for a question.

## Declaration

```swift
struct QuestionBox
```

<a id="Creating-a-question-box"></a>

### Creating a question box

- [init(id:pageID:bounds:)](questionbox/init%28id_pageid_bounds_%29.md)

<a id="Inspecting-the-question-box"></a>

### Inspecting the question box

- [bounds](questionbox/bounds.md)
- [AssignableDocument.QuestionBox.ID](questionbox/id-swift.typealias.md)
- [id](questionbox/id-swift.property.md)
- [pageID](questionbox/pageid.md)
- [AssignableDocument.QuestionBox.Document](questionbox/document.md)

<a id="Comparing-question-boxes"></a>

### Comparing question boxes

- \`\`==(*:*:)\`

<a id="Hashing-the-question-box"></a>

### Hashing the question box

- [hash(into:)](questionbox/hash%28into_%29.md)

## Topics

### Operators

- [==(\_:\_:)](questionbox/==%28____%29.md): Returns a Boolean value indicating whether two values are equal.

### Initializers

- [init(id:pageID:bounds:)](questionbox/init%28id_pageid_bounds_%29.md): Initialize a question box.

### Instance Properties

- [bounds](questionbox/bounds.md): The bounds of the question box on the page.
- [id](questionbox/id-swift.property.md): The stable identity of this box.
- [pageID](questionbox/pageid.md): A read-only property providing the identifier of the page that owns this question box. If the box is not yet assigned to a page, this value is `nil`.

### Instance Methods

- [hash(into:)](questionbox/hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.

### Type Aliases

- [AssignableDocument.QuestionBox.Document](questionbox/document.md): The document type this element is for.
- [AssignableDocument.QuestionBox.ID](questionbox/id-swift.typealias.md): A type representing the stable identity of this box.

## Relationships

### Conforms To

- [AssignableDocumentElement](../assignabledocumentelement.md)
- [DocumentElement](../documentelement.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
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
- [AssignableDocument.Question](question.md): A question in the assignable document.
- [questions](questions.md): A collection of questions defined for this assignable.
- [AssignableDocument.Element](element.md): The type for elements of this document. An element is a component of the document such as a page or question.
- [pagesDebugDescription](pagesdebugdescription.md)
- [AssignableDocument.Error](error.md): Errors for this document type.
