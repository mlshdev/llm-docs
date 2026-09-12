> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/modeljudgeerror](https://developer.apple.com/documentation/evaluations/modeljudgeerror)

# ModelJudgeError

**Framework:** Evaluations  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

## Declaration

```swift
enum ModelJudgeError
```

## Topics

### Enumeration Cases

- [ModelJudgeError.invalidResponse(\_:)](modeljudgeerror/invalidresponse%28__%29.md): The evaluator can’t interpret the model judge’s response as a valid score.
- [ModelJudgeError.invalidScore(dimension:value:)](modeljudgeerror/invalidscore%28dimension_value_%29.md): A scoring dimension returns a value the evaluator can’t parse as a number.
- [ModelJudgeError.jsonDecodingFailed(response:underlying:)](modeljudgeerror/jsondecodingfailed%28response_underlying_%29.md): The evaluator fails to decode the JSON from the model judge’s response.
- [ModelJudgeError.missingDimension(\_:response:)](modeljudgeerror/missingdimension%28__response_%29.md): The model judge’s response is missing a required scoring dimension. The first associated value is the name of the missing dimension.
- [ModelJudgeError.noScaleValues(dimension:)](modeljudgeerror/noscalevalues%28dimension_%29.md): The scoring dimension has no scale values defined.

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
