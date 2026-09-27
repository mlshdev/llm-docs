> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/assignables/assignabledocumentconfiguration/pointsperbonusscoremark

# pointsPerBonusScoreMark

**Framework:** Assignables  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

The value of each bonus score mark in the assessment.

## Declaration

```swift
var pointsPerBonusScoreMark: Double { get set }
```

## See Also

### Configuring a document

- [maxScore](maxscore.md): An optional maximum score for this assessment. If `nil`, this value will be synthesized from the question data and associated annotations.
- [correctScoreMarkType](correctscoremarktype.md): The glyph to use for a correct score mark in the assessment.
- [pointsPerCorrectScoreMark](pointspercorrectscoremark.md): The value of each correct score mark in the assessment.
- [pointsPerIncorrectScoreMark](pointsperincorrectscoremark.md): The value of each incorrect score mark in the assessment.
