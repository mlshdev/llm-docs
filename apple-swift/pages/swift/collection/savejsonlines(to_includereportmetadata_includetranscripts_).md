> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/collection/savejsonlines(to:includereportmetadata:includetranscripts:)](https://developer.apple.com/documentation/swift/collection/savejsonlines(to:includereportmetadata:includetranscripts:))

# saveJSONLines(to:includeReportMetadata:includeTranscripts:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Saves the array of evaluation results as a JSONL file

## Declaration

```swift
@discardableResult func saveJSONLines(to url: URL, includeReportMetadata: Bool = false, includeTranscripts: Bool = false) throws -> URL
```

## Parameters

- `url`: The file URL to write the JSONL output to.
- `includeReportMetadata`: Whether to include report metadata in each entry. Defaults to `false`.
- `includeTranscripts`: Whether to encode each row’s transcript into the `Transcript` column of each entry as JSON. Defaults to `false`.

<a id="return-value"></a>

## Return Value

The URL of the saved file.
