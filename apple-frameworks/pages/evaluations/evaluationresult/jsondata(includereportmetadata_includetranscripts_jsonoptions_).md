> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluationresult/jsondata(includereportmetadata:includetranscripts:jsonoptions:)](https://developer.apple.com/documentation/evaluations/evaluationresult/jsondata(includereportmetadata:includetranscripts:jsonoptions:))

# jsonData(includeReportMetadata:includeTranscripts:jsonOptions:)

**Framework:** Evaluations  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Returns the evaluation results as JSON data.

## Declaration

```swift
func jsonData(includeReportMetadata: Bool = false, includeTranscripts: Bool = false, jsonOptions: JSONSerialization.WritingOptions = [.prettyPrinted, .sortedKeys]) throws -> Data
```

## Parameters

- `includeReportMetadata`: Whether to include report metadata. Defaults to `false`.
- `includeTranscripts`: Whether to encode each row’s transcript into the `Transcript` column as JSON. Defaults to `false` to keep file size small for runs that don’t need transcripts in the artifact.
- `jsonOptions`: The writing options for the final JSON serialization. Defaults to `[.prettyPrinted, .sortedKeys]`.

<a id="return-value"></a>

## Return Value

The JSON representation of the evaluation results as `Data`.

<a id="discussion"></a>

## Discussion

The data contains sections for summary, results, metadata, and optionally report metadata.

## See Also

### Saving and loading results

- [saveJSON(to:includeReportMetadata:includeTranscripts:)](savejson%28to_includereportmetadata_includetranscripts_%29.md): Saves evaluation results to a single JSON file.
- [loadJSON(from:)](loadjson%28from_%29.md): Loads an evaluation result from a JSON file on disk.
- [loadJSONLines(from:)](loadjsonlines%28from_%29.md): Loads an array of evaluation results from a JSONL file on disk.
- [init(jsonData:)](init%28jsondata_%29.md): Creates an evaluation result by parsing JSON data.
