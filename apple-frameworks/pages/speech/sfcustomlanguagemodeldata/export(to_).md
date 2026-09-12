> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfcustomlanguagemodeldata/export(to:)](https://developer.apple.com/documentation/speech/sfcustomlanguagemodeldata/export(to:))

# export(to:)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.1+

Export the accumulated data to a file.

## Declaration

```swift
func export(to path: URL) async throws
```

## Parameters

- `path`: A URL where the exported data will be saved.

<a id="discussion"></a>

## Discussion

The file produced by this method can be provided to `SFSpeechLanguageModel.prepareCustomLanguageModel` to produce language model and vocabulary files that are then ready to be used in conjunction with the `SFSpeechRecognizer`.

> **Throws**

> Errors related to creating directories and files, and deleting files
