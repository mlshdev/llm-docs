> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltokenizer/tokenrange(at:)](https://developer.apple.com/documentation/naturallanguage/nltokenizer/tokenrange(at:))

# tokenRange(at:)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Finds the range of the token at the given index.

## Declaration

```swift
@nonobjc func tokenRange(at index: String.Index) -> Range<String.Index>
```

## Parameters

- `index`: The location in the string that is of interest.

<a id="return-value"></a>

## Return Value

The range of the token at the given location.

## See Also

### Enumerating the tokens

- [enumerateTokens(in:using:)](enumeratetokens%28in_using_%29.md): Enumerates over a given range of the string and calls the specified block for each token.
- [tokens(for:)](tokens%28for_%29.md): Tokenizes the string within the provided range.
- [tokenRange(for:)](tokenrange%28for_%29.md): Finds the entire range of all tokens contained completely or partially within the specified range.
