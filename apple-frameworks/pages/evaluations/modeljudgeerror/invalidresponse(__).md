> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/evaluations/modeljudgeerror/invalidresponse(_:)

# ModelJudgeError.invalidResponse(\_:)

**Framework:** Evaluations  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The evaluator can’t interpret the model judge’s response as a valid score.

## Declaration

```swift
case invalidResponse(String)
```

<a id="discussion"></a>

## Discussion

The associated value is the raw response text.
