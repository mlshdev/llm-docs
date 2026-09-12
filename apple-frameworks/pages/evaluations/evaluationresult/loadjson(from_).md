> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluationresult/loadjson(from:)](https://developer.apple.com/documentation/evaluations/evaluationresult/loadjson(from:))

# loadJSON(from:)

**Framework:** Evaluations  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Loads an evaluation result from a JSON file on disk.

## Declaration

```swift
static func loadJSON(from url: URL) throws -> EvaluationResult
```

## Parameters

- `url`: The file URL from which to read the JSON data.

<a id="return-value"></a>

## Return Value

The deserialized [EvaluationResult](../evaluationresult.md).

## See Also

### Saving and loading results

- [saveJSON(to:includeReportMetadata:includeTranscripts:)](savejson%28to_includereportmetadata_includetranscripts_%29.md): Saves evaluation results to a single JSON file.
- [jsonData(includeReportMetadata:includeTranscripts:jsonOptions:)](jsondata%28includereportmetadata_includetranscripts_jsonoptions_%29.md): Returns the evaluation results as JSON data.
- [loadJSONLines(from:)](loadjsonlines%28from_%29.md): Loads an array of evaluation results from a JSONL file on disk.
- [init(jsonData:)](init%28jsondata_%29.md): Creates an evaluation result by parsing JSON data.
