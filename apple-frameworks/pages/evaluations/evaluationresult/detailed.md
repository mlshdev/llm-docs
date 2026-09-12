> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluationresult/detailed](https://developer.apple.com/documentation/evaluations/evaluationresult/detailed)

# detailed

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Individual results for each sample in the evaluation.

## Declaration

```swift
var detailed: DataFrame { get }
```

## Mentioned In

- [Designing effective evaluations](../designing-effective-evaluations.md)
- [Evaluating language model responses](../evaluating-language-model-responses.md)

## See Also

### Accessing results

- [summary](summary.md): Aggregated statistics for each metric in the evaluation.
- [evaluationInfo](evaluationinfo.md): User-defined information about this evaluation, such as the model name, prompt version, or dataset.
- [evaluationID](evaluationid.md): The identifier of the evaluation that produced these results.
- [resultID](resultid.md): A unique identifier for this particular result.
- [reportMetadata](reportmetadata.md): Framework-generated metadata used for report presentation.
- [aggregateValue(\_:)](aggregatevalue%28__%29.md): Returns the first aggregate value matching the given operation, or `-1` if not found.
- [EvaluationResult.DataFrameKind](dataframekind.md): The kind of DataFrame to convert for JSON serialization.
