> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluationresult/init(jsondata:)](https://developer.apple.com/documentation/evaluations/evaluationresult/init(jsondata:))

# init(jsonData:)

**Framework:** Evaluations  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates an evaluation result by parsing JSON data.

## Declaration

```swift
init(jsonData data: Data) throws
```

## Parameters

- `data`: The JSON data to parse.

## See Also

### Saving and loading results

- [saveJSON(to:includeReportMetadata:includeTranscripts:)](savejson%28to_includereportmetadata_includetranscripts_%29.md): Saves evaluation results to a single JSON file.
- [jsonData(includeReportMetadata:includeTranscripts:jsonOptions:)](jsondata%28includereportmetadata_includetranscripts_jsonoptions_%29.md): Returns the evaluation results as JSON data.
- [loadJSON(from:)](loadjson%28from_%29.md): Loads an evaluation result from a JSON file on disk.
- [loadJSONLines(from:)](loadjsonlines%28from_%29.md): Loads an array of evaluation results from a JSONL file on disk.
