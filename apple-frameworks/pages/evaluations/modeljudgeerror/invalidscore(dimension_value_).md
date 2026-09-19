> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/evaluations/modeljudgeerror/invalidscore(dimension:value:)

# ModelJudgeError.invalidScore(dimension:value:)

**Framework:** Evaluations  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A scoring dimension returns a value the evaluator can’t parse as a number.

## Declaration

```swift
case invalidScore(dimension: String, value: String)
```

## Parameters

- `dimension`: The name of the scoring dimension.
- `value`: The unparsable value the model returned.
