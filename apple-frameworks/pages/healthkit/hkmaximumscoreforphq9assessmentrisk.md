> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkmaximumscoreforphq9assessmentrisk

# HKMaximumScoreForPHQ9AssessmentRisk

**Interface language:** Objective-C

**Framework:** HealthKit  
**Kind:** Function

Returns the upper bound of the score range for the given PHQ-9 risk classification.

## Declaration

```objectivec
extern NSInteger HKMaximumScoreForPHQ9AssessmentRisk(HKPHQ9AssessmentRisk risk);
```

## See Also

### Functions

- [HKStateOfMindValenceClassificationForValence](hkstateofmindvalenceclassificationforvalence.md)
- [HKMaximumScoreForGAD7AssessmentRisk](hkmaximumscoreforgad7assessmentrisk.md): Returns the upper bound of the score range for the given GAD-7 risk classification.
- [HKMinimumScoreForGAD7AssessmentRisk](hkminimumscoreforgad7assessmentrisk.md): Returns the lower bound of the score range for the given GAD-7 risk classification.
- [HKMinimumScoreForPHQ9AssessmentRisk](hkminimumscoreforphq9assessmentrisk.md): Returns the lower bound of the score range for the given PHQ-9 risk classification.
