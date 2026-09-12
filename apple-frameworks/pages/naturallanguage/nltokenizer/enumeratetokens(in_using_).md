> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltokenizer/enumeratetokens(in:using:)](https://developer.apple.com/documentation/naturallanguage/nltokenizer/enumeratetokens(in:using:))

# enumerateTokens(in:using:)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Enumerates over a given range of the string and calls the specified block for each token.

## Declaration

```swift
@nonobjc func enumerateTokens(in range: Range<String.Index>, using block: (Range<String.Index>, NLTokenizer.Attributes) -> Bool)
```

## Parameters

- `range`: The range of the string to tokenize.
- `block`: The closure to call after each token; return false if processing should stop.

## See Also

### Enumerating the tokens

- [tokens(for:)](tokens%28for_%29.md): Tokenizes the string within the provided range.
- [tokenRange(at:)](tokenrange%28at_%29.md): Finds the range of the token at the given index.
- [tokenRange(for:)](tokenrange%28for_%29.md): Finds the entire range of all tokens contained completely or partially within the specified range.
