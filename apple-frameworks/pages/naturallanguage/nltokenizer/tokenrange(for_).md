> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltokenizer/tokenrange(for:)](https://developer.apple.com/documentation/naturallanguage/nltokenizer/tokenrange(for:))

# tokenRange(for:)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Finds the entire range of all tokens contained completely or partially within the specified range.

## Declaration

```swift
@nonobjc func tokenRange(for range: Range<String.Index>) -> Range<String.Index>
```

## Parameters

- `range`: The range within the string to search for tokens.

<a id="return-value"></a>

## Return Value

The smallest possible range that contains all of the tokens within the range specified in `range`. This result includes a token’s entire range if any part of that token is included within `range`. If the length of `range` is 0, this return value is equivalent to [tokenRange(at:)](tokenrange%28at_%29.md).

## See Also

### Enumerating the tokens

- [enumerateTokens(in:using:)](enumeratetokens%28in_using_%29.md): Enumerates over a given range of the string and calls the specified block for each token.
- [tokens(for:)](tokens%28for_%29.md): Tokenizes the string within the provided range.
- [tokenRange(at:)](tokenrange%28at_%29.md): Finds the range of the token at the given index.
