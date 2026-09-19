> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/objecttrackingprovider/error/recoverysuggestion

# recoverySuggestion

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

A localized message that describes how to recover from the failure.

## Declaration

```swift
var recoverySuggestion: String? { get }
```

## See Also

### Inspecting an error

- [bundle](bundle.md): The bundle for the model that failed to load, if the source was a bundle.
- [name](name.md): The name of the model that failed to load, if the source was a bundle.
- [url](url.md): The URL for the model that failed to load, if the source was a URL.
