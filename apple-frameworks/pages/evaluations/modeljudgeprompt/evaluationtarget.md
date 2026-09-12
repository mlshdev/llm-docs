> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/modeljudgeprompt/evaluationtarget](https://developer.apple.com/documentation/evaluations/modeljudgeprompt/evaluationtarget)

# evaluationTarget

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

An optional closure that converts the model’s response to a string for the model prompt.

## Declaration

```swift
let evaluationTarget: (@Sendable (Input.ExpectedValue) -> String)?
```

<a id="discussion"></a>

## Discussion

When `nil`, the evaluator JSON-serializes the response automatically.

## See Also

### Customizing judge input

- [instructions](instructions.md): The system instructions for the model judge.
- [reference](reference.md): An optional closure that provides labeled reference data to include in the model prompt.
