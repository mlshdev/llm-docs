> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/naturallanguage/nltokenizer/tokensforrange:

# tokensForRange:

**Interface language:** Objective-C

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Tokenizes the string within the provided range.

## Declaration

```objectivec
- (NSArray<NSValue *> *) tokensForRange:(NSRange) range;
```

## Parameters

- `range`: The range within the string that should be tokenzied.

<a id="return-value"></a>

## Return Value

Returns the ranges corresponding to the tokens for the tokenizer’s unit that intersect the given range.

## See Also

### Enumerating the tokens

- [enumerateTokensInRange:usingBlock:](enumeratetokensinrange_usingblock_.md): Enumerates over a given range of the string and calls the specified block for each token.
- [tokenRangeAtIndex:](tokenrangeatindex_.md): Finds the range of the token at the given index.
- [tokenRangeForRange:](tokenrangeforrange_.md): Finds the entire range of all tokens contained completely or partially within the specified range.
