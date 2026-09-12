> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignabledocumentconfiguration/pointspercorrectscoremark](https://developer.apple.com/documentation/assignables/assignabledocumentconfiguration/pointspercorrectscoremark)

# pointsPerCorrectScoreMark

**Framework:** Assignables  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

The value of each correct score mark in the assessment.

## Declaration

```swift
var pointsPerCorrectScoreMark: Double { get set }
```

## See Also

### Configuring a document

- [maxScore](maxscore.md): An optional maximum score for this assessment. If `nil`, this value will be synthesized from the question data and associated annotations.
- [correctScoreMarkType](correctscoremarktype.md): The glyph to use for a correct score mark in the assessment.
- [pointsPerBonusScoreMark](pointsperbonusscoremark.md): The value of each bonus score mark in the assessment.
- [pointsPerIncorrectScoreMark](pointsperincorrectscoremark.md): The value of each incorrect score mark in the assessment.
