> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/naturallanguage/nlcontextualembeddingresult/tokenvector(at:)

# tokenVector(at:)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Gets a token vector at the index you specify.

## Declaration

```swift
@nonobjc func tokenVector(at index: String.Index) -> ([Double], Range<String.Index>)?
```

## Parameters

- `index`: The index to get the token vector at.

## See Also

### Enumerating the vectors

- [enumerateTokenVectors(in:using:)](enumeratetokenvectors%28in_using_%29.md): Iterates over the embedding vectors corresponding to the subword tokens within the specified range of the input string.
