> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelerror/contextsizeexceeded/tokencount

# tokenCount

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The number of tokens in the transcript that exceeded the model’s context size.

## Declaration

```swift
var tokenCount: Int
```

## See Also

### Inspecting context size errors

- [metadata](metadata.md): Additional information about the failure, keyed by name.
- [contextSize](contextsize.md): The model’s maximum context size, in tokens.
- [debugDescription](debugdescription.md): A debug description to help developers diagnose issues during development.
