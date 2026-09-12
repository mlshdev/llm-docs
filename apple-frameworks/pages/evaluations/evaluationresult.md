> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluationresult](https://developer.apple.com/documentation/evaluations/evaluationresult)

# EvaluationResult

**Framework:** Evaluations  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The results of running a model evaluation.

## Declaration

```swift
struct EvaluationResult
```

## Mentioned In

- [Designing effective evaluations](designing-effective-evaluations.md)
- [Evaluating language model responses](evaluating-language-model-responses.md)

<a id="overview"></a>

## Overview

A structure that contains the summary and detailed results from an evaluation run.

Use the column descriptors from your [Evaluation](evaluation.md) to access typed columns from the [detailed](evaluationresult/detailed.md) DataFrame:

```swift
let result = try await evaluation.run(on: samples)
let inputs = result.detailed[evaluation.inputColumn]
let responses = result.detailed[evaluation.responseColumn]
let expected = result.detailed[evaluation.expectedColumn]
```

## Topics

### Accessing results

- [summary](evaluationresult/summary.md): Aggregated statistics for each metric in the evaluation.
- [detailed](evaluationresult/detailed.md): Individual results for each sample in the evaluation.
- [evaluationInfo](evaluationresult/evaluationinfo.md): User-defined information about this evaluation, such as the model name, prompt version, or dataset.
- [evaluationID](evaluationresult/evaluationid.md): The identifier of the evaluation that produced these results.
- [resultID](evaluationresult/resultid.md): A unique identifier for this particular result.
- [reportMetadata](evaluationresult/reportmetadata.md): Framework-generated metadata used for report presentation.
- [aggregateValue(\_:)](evaluationresult/aggregatevalue%28__%29.md): Returns the first aggregate value matching the given operation, or `-1` if not found.
- [EvaluationResult.DataFrameKind](evaluationresult/dataframekind.md): The kind of DataFrame to convert for JSON serialization.

### Inspecting timing

- [startTime](evaluationresult/starttime.md): The time when the evaluation run started.
- [endTime](evaluationresult/endtime.md): The time when the evaluation run finished.
- [duration](evaluationresult/duration.md): The total duration of the evaluation run.

### Formatting results

- [groupedSummary](evaluationresult/groupedsummary.md): A formatted description of summary metrics organized by groups.
- [jsonRepresentableDataFrame(of:)](evaluationresult/jsonrepresentabledataframe%28of_%29.md): Transforms a DataFrame into one with column types compatible with JSON representation.

### Saving and loading results

- [saveJSON(to:includeReportMetadata:includeTranscripts:)](evaluationresult/savejson%28to_includereportmetadata_includetranscripts_%29.md): Saves evaluation results to a single JSON file.
- [jsonData(includeReportMetadata:includeTranscripts:jsonOptions:)](evaluationresult/jsondata%28includereportmetadata_includetranscripts_jsonoptions_%29.md): Returns the evaluation results as JSON data.
- [loadJSON(from:)](evaluationresult/loadjson%28from_%29.md): Loads an evaluation result from a JSON file on disk.
- [loadJSONLines(from:)](evaluationresult/loadjsonlines%28from_%29.md): Loads an array of evaluation results from a JSONL file on disk.
- [init(jsonData:)](evaluationresult/init%28jsondata_%29.md): Creates an evaluation result by parsing JSON data.

### Instance Properties

- [errors](evaluationresult/errors.md): A summary of the failures encountered during the run.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Results

- [ResultColumn](resultcolumn.md): A typed descriptor for a column in an evaluation result DataFrame.
- [inputColumn](evaluation/inputcolumn.md): A typed column descriptor for the input samples in the detailed DataFrame.
- [responseColumn](evaluation/responsecolumn.md): A typed column descriptor for the model responses in the detailed DataFrame.
- [expectedColumn](evaluation/expectedcolumn.md): A typed column descriptor for the expected values in the detailed DataFrame.
