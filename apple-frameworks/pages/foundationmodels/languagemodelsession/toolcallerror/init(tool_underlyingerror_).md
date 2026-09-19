> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelsession/toolcallerror/init(tool:underlyingerror:)

# init(tool:underlyingError:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates a tool call error.

## Declaration

```swift
init(tool: any Tool, underlyingError: any Error)
```

## Parameters

- `tool`: The tool that produced the error.
- `underlyingError`: The underlying error that was thrown during a tool call.
