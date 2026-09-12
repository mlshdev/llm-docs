> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluationresult/jsonrepresentabledataframe(of:)](https://developer.apple.com/documentation/evaluations/evaluationresult/jsonrepresentabledataframe(of:))

# jsonRepresentableDataFrame(of:)

**Framework:** Evaluations  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Transforms a DataFrame into one with column types compatible with JSON representation.

## Declaration

```swift
func jsonRepresentableDataFrame(of kind: EvaluationResult.DataFrameKind) throws -> DataFrame
```

## Parameters

- `kind`: Whether to convert the summary or detailed DataFrame.

<a id="return-value"></a>

## Return Value

A new DataFrame with JSON-serializable column types.

<a id="discussion"></a>

## Discussion

The detailed branch always excludes the `Transcript` column from this public helper; transcript serialization is opted into through [jsonData(includeReportMetadata:includeTranscripts:jsonOptions:)](jsondata%28includereportmetadata_includetranscripts_jsonoptions_%29.md).

## See Also

### Formatting results

- [groupedSummary](groupedsummary.md): A formatted description of summary metrics organized by groups.
