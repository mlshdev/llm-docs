> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/modeljudgeprompt/instructions](https://developer.apple.com/documentation/evaluations/modeljudgeprompt/instructions)

# instructions

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The system instructions for the model judge.

## Declaration

```swift
let instructions: String
```

## Mentioned In

- [Designing effective model-judge evaluators](../designing-effective-model-judges.md)

## See Also

### Customizing judge input

- [evaluationTarget](evaluationtarget.md): An optional closure that converts the model’s response to a string for the model prompt.
- [reference](reference.md): An optional closure that provides labeled reference data to include in the model prompt.
