> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/documentelementid](https://developer.apple.com/documentation/assignables/documentelementid)

# DocumentElementID

**Framework:** Assignables  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

An identifier for an element in a document.

## Declaration

```swift
protocol DocumentElementID : Decodable, Encodable, Hashable
```

## Topics

### Implementing an element identifier

- [Element](documentelementid/element.md): The document element type that this reference is for.

## Relationships

### Inherits From

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

### Conforming Types

- [AssignableDocument.Page.ID](assignabledocument/page/id-swift.struct.md)
- [AssignedWorkDocument.Page.ID](assignedworkdocument/page/id-swift.struct.md)
- [BasicDocumentElementID](basicdocumentelementid.md)

## See Also

### Document elements

- [DocumentElement](documentelement.md): Represents an element that is contained within a document. Such elements can have identifiers that uniquely identify them within a document.
- [BasicDocumentElementID](basicdocumentelementid.md): A default implementation for a document element identifier.
- [AssignableDocumentElement](assignabledocumentelement.md): An element of an [AssignableDocument](assignabledocument.md).
- [AssignedWorkDocumentElement](assignedworkdocumentelement.md): An element of an [AssignedWorkDocument](assignedworkdocument.md).
