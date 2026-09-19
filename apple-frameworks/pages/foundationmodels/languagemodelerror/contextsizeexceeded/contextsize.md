> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelerror/contextsizeexceeded/contextsize

# contextSize

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The model’s maximum context size, in tokens.

## Declaration

```swift
var contextSize: Int
```

## See Also

### Inspecting context size errors

- [metadata](metadata.md): Additional information about the failure, keyed by name.
- [tokenCount](tokencount.md): The number of tokens in the transcript that exceeded the model’s context size.
- [debugDescription](debugdescription.md): A debug description to help developers diagnose issues during development.
