> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignabledocumentconfiguration](https://developer.apple.com/documentation/assignables/assignabledocumentconfiguration)

# AssignableDocumentConfiguration

**Framework:** Assignables  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

A type that specifies the options for an assignable document.

## Declaration

```swift
protocol AssignableDocumentConfiguration : Hashable
```

## Topics

### Configuring a document

- [maxScore](assignabledocumentconfiguration/maxscore.md): An optional maximum score for this assessment. If `nil`, this value will be synthesized from the question data and associated annotations.
- [correctScoreMarkType](assignabledocumentconfiguration/correctscoremarktype.md): The glyph to use for a correct score mark in the assessment.
- [pointsPerBonusScoreMark](assignabledocumentconfiguration/pointsperbonusscoremark.md): The value of each bonus score mark in the assessment.
- [pointsPerCorrectScoreMark](assignabledocumentconfiguration/pointspercorrectscoremark.md): The value of each correct score mark in the assessment.
- [pointsPerIncorrectScoreMark](assignabledocumentconfiguration/pointsperincorrectscoremark.md): The value of each incorrect score mark in the assessment.

## Relationships

### Inherits From

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Configuration

- [AssignedWorkDocumentConfiguration](assignedworkdocumentconfiguration.md): A type that specifies the score of a document.
