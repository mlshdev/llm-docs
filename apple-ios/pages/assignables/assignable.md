> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignable](https://developer.apple.com/documentation/assignables/assignable)

# Assignable

**Framework:** Assignables  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Documents conforming to this protocol can be assigned to a user.

## Declaration

```swift
protocol Assignable
```

## Topics

### Assigning a document

- [assign(to:)](assignable/assign%28to_%29-4jnsl.md): Deprecated. Assign this document to a user.
- [assign(to:)](assignable/assign%28to_%29-4mit8.md): Deprecated. Assign this document to a user.

### Instance Methods

- [makeAssignedWorkDocument()](assignable/makeassignedworkdocument%28%29.md): Create a new instance of an [AssignedWorkDocument](assignedworkdocument.md).
- [makeAssignedWorkDocument(id:)](assignable/makeassignedworkdocument%28id_%29.md): Create a new instance of an [AssignedWorkDocument](assignedworkdocument.md).

## Relationships

### Conforming Types

- [AssignableDocument](assignabledocument.md)

## See Also

### Assignable document

- [AssignableDocument](assignabledocument.md): An assignable document is an augmented PDF that allows teachers to mark up the PDF with the intention of students taking the assessment.
- [AssignedWorkDocument](assignedworkdocument.md): An assigned work document is a document that contains taker and scorer markup specific to a taker. It also contains a copy of the assignable document upon which it is based.
