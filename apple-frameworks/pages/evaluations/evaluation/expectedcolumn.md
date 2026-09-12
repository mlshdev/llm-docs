> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluation/expectedcolumn](https://developer.apple.com/documentation/evaluations/evaluation/expectedcolumn)

# expectedColumn

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A typed column descriptor for the expected values in the detailed DataFrame.

## Declaration

```swift
var expectedColumn: ResultColumn<Self.Sample.ExpectedValue> { get }
```

## See Also

### Results

- [EvaluationResult](../evaluationresult.md): The results of running a model evaluation.
- [ResultColumn](../resultcolumn.md): A typed descriptor for a column in an evaluation result DataFrame.
- [inputColumn](inputcolumn.md): A typed column descriptor for the input samples in the detailed DataFrame.
- [responseColumn](responsecolumn.md): A typed column descriptor for the model responses in the detailed DataFrame.
