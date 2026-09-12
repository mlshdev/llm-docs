> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltokenizer/tokenrangeatindex:](https://developer.apple.com/documentation/naturallanguage/nltokenizer/tokenrangeatindex:)

# tokenRangeAtIndex:

**Interface language:** Objective-C

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Finds the range of the token at the given index.

## Declaration

```objectivec
- (NSRange) tokenRangeAtIndex:(NSUInteger) characterIndex;
```

<a id="return-value"></a>

## Return Value

The range of the token at the given location.

## See Also

### Enumerating the tokens

- [enumerateTokensInRange:usingBlock:](enumeratetokensinrange_usingblock_.md): Enumerates over a given range of the string and calls the specified block for each token.
- [tokensForRange:](tokensforrange_.md): Tokenizes the string within the provided range.
- [tokenRangeForRange:](tokenrangeforrange_.md): Finds the entire range of all tokens contained completely or partially within the specified range.
