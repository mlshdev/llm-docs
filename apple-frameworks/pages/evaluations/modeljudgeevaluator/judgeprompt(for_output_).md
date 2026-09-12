> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/modeljudgeevaluator/judgeprompt(for:output:)](https://developer.apple.com/documentation/evaluations/modeljudgeevaluator/judgeprompt(for:output:))

# judgePrompt(for:output:)

**Framework:** Evaluations  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Builds and returns the full judge prompt for inspection, debugging, or logging.

## Declaration

```swift
nonisolated(nonsending) func judgePrompt(for sample: Input, output: Input.ExpectedValue) async throws -> Prompt
```

## Parameters

- `sample`: The evaluation sample.
- `output`: The model’s response content.

<a id="return-value"></a>

## Return Value

The fully assembled `Prompt` to send to the model judge.

<a id="discussion"></a>

## Discussion

Use this to inspect exactly what the model judge receives for a given input and response pair.

## See Also

### Configuring the judge prompt

- [defaultInstructions](defaultinstructions.md): The default system instructions the model uses when no custom instructions are provided.
