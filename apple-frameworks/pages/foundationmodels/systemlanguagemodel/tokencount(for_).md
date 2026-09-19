> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/systemlanguagemodel/tokencount(for:)

# tokenCount(for:)

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

Returns the token count for the specified instructions.

## Declaration

```swift
nonisolated(nonsending) final func tokenCount(for instructions: Instructions) async throws -> Int
```

## Parameters

- `instructions`: The instructions to calculate the token count for.

<a id="return-value"></a>

## Return Value

The token count for the instructions.

## Mentioned In

- [Managing the context window](../managing-the-context-window.md)
