> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkphq9assessment/assessmentwithdate:answers:](https://developer.apple.com/documentation/healthkit/hkphq9assessment/assessmentwithdate:answers:)

# assessmentWithDate:answers:

**Interface language:** Objective-C

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
+ (instancetype) assessmentWithDate:(NSDate *) date answers:(NSArray<NSNumber *> *) answers;
```

<a id="Discussion"></a>

## Discussion

Creates a new PHQ-9 sample. There must be exactly 9 elements in answers, each answer must be of type `HKPHQ9AssessmentAnswer`. Question #9 is considered optional. If the user does not answer #9, use `HKPHQ9AssessmentAnswerPreferNotToAnswer`
