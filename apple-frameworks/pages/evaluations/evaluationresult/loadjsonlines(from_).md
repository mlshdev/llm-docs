> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluationresult/loadjsonlines(from:)](https://developer.apple.com/documentation/evaluations/evaluationresult/loadjsonlines(from:))

# loadJSONLines(from:)

**Framework:** Evaluations  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Loads an array of evaluation results from a JSONL file on disk.

## Declaration

```swift
nonisolated(nonsending) static func loadJSONLines(from url: URL) async throws -> [EvaluationResult]
```

## Parameters

- `url`: The file URL to read the JSONL data from.

<a id="return-value"></a>

## Return Value

An array of [EvaluationResult](../evaluationresult.md).

<a id="discussion"></a>

## Discussion

Each line in the file is expected to be a valid JSON object representing an evaluation result.

## See Also

### Saving and loading results

- [saveJSON(to:includeReportMetadata:includeTranscripts:)](savejson%28to_includereportmetadata_includetranscripts_%29.md): Saves evaluation results to a single JSON file.
- [jsonData(includeReportMetadata:includeTranscripts:jsonOptions:)](jsondata%28includereportmetadata_includetranscripts_jsonoptions_%29.md): Returns the evaluation results as JSON data.
- [loadJSON(from:)](loadjson%28from_%29.md): Loads an evaluation result from a JSON file on disk.
- [init(jsonData:)](init%28jsondata_%29.md): Creates an evaluation result by parsing JSON data.
