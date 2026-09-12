> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluationresult/evaluationinfo](https://developer.apple.com/documentation/evaluations/evaluationresult/evaluationinfo)

# evaluationInfo

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

User-defined information about this evaluation, such as the model name, prompt version, or dataset.

## Declaration

```swift
let evaluationInfo: [String : String]
```

## See Also

### Accessing results

- [summary](summary.md): Aggregated statistics for each metric in the evaluation.
- [detailed](detailed.md): Individual results for each sample in the evaluation.
- [evaluationID](evaluationid.md): The identifier of the evaluation that produced these results.
- [resultID](resultid.md): A unique identifier for this particular result.
- [reportMetadata](reportmetadata.md): Framework-generated metadata used for report presentation.
- [aggregateValue(\_:)](aggregatevalue%28__%29.md): Returns the first aggregate value matching the given operation, or `-1` if not found.
- [EvaluationResult.DataFrameKind](dataframekind.md): The kind of DataFrame to convert for JSON serialization.
