> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluationresult/savejson(to:includereportmetadata:includetranscripts:)](https://developer.apple.com/documentation/evaluations/evaluationresult/savejson(to:includereportmetadata:includetranscripts:))

# saveJSON(to:includeReportMetadata:includeTranscripts:)

**Framework:** Evaluations  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Saves evaluation results to a single JSON file.

## Declaration

```swift
@discardableResult func saveJSON(to directory: URL, includeReportMetadata: Bool = false, includeTranscripts: Bool = false) throws -> URL
```

## Parameters

- `directory`: The directory to save the file in.
- `includeReportMetadata`: Whether to include report metadata. Defaults to `false`.
- `includeTranscripts`: Whether to encode each row’s transcript into the `Transcript` column as JSON. Defaults to `false`. Enable when you want a saved file that carries transcripts.

<a id="return-value"></a>

## Return Value

The URL of the saved file

<a id="discussion"></a>

## Discussion

The file contains sections for summary, results, metadata, and optionally report metadata.

## See Also

### Saving and loading results

- [jsonData(includeReportMetadata:includeTranscripts:jsonOptions:)](jsondata%28includereportmetadata_includetranscripts_jsonoptions_%29.md): Returns the evaluation results as JSON data.
- [loadJSON(from:)](loadjson%28from_%29.md): Loads an evaluation result from a JSON file on disk.
- [loadJSONLines(from:)](loadjsonlines%28from_%29.md): Loads an array of evaluation results from a JSONL file on disk.
- [init(jsonData:)](init%28jsondata_%29.md): Creates an evaluation result by parsing JSON data.
