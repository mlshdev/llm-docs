> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkmaximumscoreforgad7assessmentrisk

# HKMaximumScoreForGAD7AssessmentRisk

**Interface language:** Objective-C

**Framework:** HealthKit  
**Kind:** Function

Returns the upper bound of the score range for the given GAD-7 risk classification.

## Declaration

```objectivec
extern NSInteger HKMaximumScoreForGAD7AssessmentRisk(HKGAD7AssessmentRisk risk);
```

## See Also

### Functions

- [HKStateOfMindValenceClassificationForValence](hkstateofmindvalenceclassificationforvalence.md)
- [HKMaximumScoreForPHQ9AssessmentRisk](hkmaximumscoreforphq9assessmentrisk.md): Returns the upper bound of the score range for the given PHQ-9 risk classification.
- [HKMinimumScoreForGAD7AssessmentRisk](hkminimumscoreforgad7assessmentrisk.md): Returns the lower bound of the score range for the given GAD-7 risk classification.
- [HKMinimumScoreForPHQ9AssessmentRisk](hkminimumscoreforphq9assessmentrisk.md): Returns the lower bound of the score range for the given PHQ-9 risk classification.
