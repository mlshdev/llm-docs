> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignedworkdocumentconfiguration](https://developer.apple.com/documentation/assignables/assignedworkdocumentconfiguration)

# AssignedWorkDocumentConfiguration

**Framework:** Assignables  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

A type that specifies the score of a document.

## Declaration

```swift
protocol AssignedWorkDocumentConfiguration : Hashable
```

## Topics

### Configuring the score

- [manualScore](assignedworkdocumentconfiguration/manualscore.md): An optional manual score for this work. If `nil`, the work score can be synthesized from the question data and associated annotations.

## Relationships

### Inherits From

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Configuration

- [AssignableDocumentConfiguration](assignabledocumentconfiguration.md): A type that specifies the options for an assignable document.
