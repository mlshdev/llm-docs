> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltokenizer/tokens(for:)](https://developer.apple.com/documentation/naturallanguage/nltokenizer/tokens(for:))

# tokens(for:)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Tokenizes the string within the provided range.

## Declaration

```swift
@nonobjc func tokens(for range: Range<String.Index>) -> [Range<String.Index>]
```

## Parameters

- `range`: The range within the string that should be tokenzied.

<a id="return-value"></a>

## Return Value

Returns the ranges corresponding to the tokens for the tokenizer’s unit that intersect the given range.

## See Also

### Enumerating the tokens

- [enumerateTokens(in:using:)](enumeratetokens%28in_using_%29.md): Enumerates over a given range of the string and calls the specified block for each token.
- [tokenRange(at:)](tokenrange%28at_%29.md): Finds the range of the token at the given index.
- [tokenRange(for:)](tokenrange%28for_%29.md): Finds the entire range of all tokens contained completely or partially within the specified range.
