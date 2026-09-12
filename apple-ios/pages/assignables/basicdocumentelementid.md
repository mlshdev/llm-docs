> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/basicdocumentelementid](https://developer.apple.com/documentation/assignables/basicdocumentelementid)

# BasicDocumentElementID

**Framework:** Assignables  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

A default implementation for a document element identifier.

## Declaration

```swift
struct BasicDocumentElementID<Element> where Element : DocumentElement
```

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [DocumentElementID](documentelementid.md)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Document elements

- [DocumentElement](documentelement.md): Represents an element that is contained within a document. Such elements can have identifiers that uniquely identify them within a document.
- [DocumentElementID](documentelementid.md): An identifier for an element in a document.
- [AssignableDocumentElement](assignabledocumentelement.md): An element of an [AssignableDocument](assignabledocument.md).
- [AssignedWorkDocumentElement](assignedworkdocumentelement.md): An element of an [AssignedWorkDocument](assignedworkdocument.md).
