> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignedworkdocument/scoreannotation/kind-swift.enum](https://developer.apple.com/documentation/assignables/assignedworkdocument/scoreannotation/kind-swift.enum)

# AssignedWorkDocument.ScoreAnnotation.Kind

**Framework:** Assignables  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

The kind of a score annotation.

## Declaration

```swift
enum Kind
```

## Topics

### Score annotations

- [AssignedWorkDocument.ScoreAnnotation.Kind.bonus](kind-swift.enum/bonus.md): A score mark indicating a bonus to an answer.
- [AssignedWorkDocument.ScoreAnnotation.Kind.correct](kind-swift.enum/correct.md): A score mark indicating an correct answer.
- [AssignedWorkDocument.ScoreAnnotation.Kind.incorrect](kind-swift.enum/incorrect.md): A score mark indicating an incorrect answer.
- [AssignedWorkDocument.ScoreAnnotation.Kind.unknown](kind-swift.enum/unknown.md): An unknown kind. This value may occur if an older version of this framework is deserializing a newer document version.

### Instance Properties

- [debugDescription](kind-swift.enum/debugdescription.md): A textual representation of this instance, suitable for debugging.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Inspecting a score annotation

- [AssignedWorkDocument.ScoreAnnotation.ID](id-swift.typealias.md): A type representing the stable identity of this score annotation.
- [id](id-swift.property.md): The stable identity of this score annotation.
- [kind](kind-swift.property.md): The kind of score annotation this is. e.g. Incorrect or correct mark.
- [location](location.md): The location of the score annotation on the associated page.
- [pageID](pageid.md): The ID of the page this score annotation is for.
- [AssignedWorkDocument.ScoreAnnotation.Document](document.md): The document type this element is for.
