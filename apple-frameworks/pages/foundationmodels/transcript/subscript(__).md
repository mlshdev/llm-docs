> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/transcript/subscript(_:)

# subscript(\_:)

**Framework:** Foundation Models  
**Kind:** Instance Subscript  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Accesses the entry at the specified position.

## Declaration

```swift
subscript(index: Transcript.Index) -> Transcript.Entry { get set }
```

## Parameters

- `index`: The position of the entry to access, which must be a valid index of the transcript.
