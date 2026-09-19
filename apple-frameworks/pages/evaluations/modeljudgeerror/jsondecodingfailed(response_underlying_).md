> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/evaluations/modeljudgeerror/jsondecodingfailed(response:underlying:)

# ModelJudgeError.jsonDecodingFailed(response:underlying:)

**Framework:** Evaluations  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The evaluator fails to decode the JSON from the model judge’s response.

## Declaration

```swift
case jsonDecodingFailed(response: String, underlying: any Error)
```

## Parameters

- `response`: The raw response text from the model judge.
- `underlying`: The decoding error.
