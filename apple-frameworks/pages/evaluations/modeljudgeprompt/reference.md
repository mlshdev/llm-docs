> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/modeljudgeprompt/reference](https://developer.apple.com/documentation/evaluations/modeljudgeprompt/reference)

# reference

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

An optional closure that provides labeled reference data to include in the model prompt.

## Declaration

```swift
let reference: (nonisolated(nonsending) @Sendable (Input, Input.ExpectedValue) async throws -> [String : String])?
```

<a id="discussion"></a>

## Discussion

The closure receives both the input sample and the model’s response, allowing reference data from either, for example, running a grammar checker on the response, or passing the sample’s expected value for comparison.

## See Also

### Customizing judge input

- [instructions](instructions.md): The system instructions for the model judge.
- [evaluationTarget](evaluationtarget.md): An optional closure that converts the model’s response to a string for the model prompt.
