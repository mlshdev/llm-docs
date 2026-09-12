> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsregularexpression/firstmatch(in:options:range:)](https://developer.apple.com/documentation/foundation/nsregularexpression/firstmatch(in:options:range:))

# firstMatch(in:options:range:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the first match of the regular expression within the specified range of the string.

## Declaration

```swift
func firstMatch(in string: String, options: NSRegularExpression.MatchingOptions = [], range: NSRange) -> NSTextCheckingResult?
```

## Parameters

- `string`: The string to search.
- `options`: The matching options to use. See [NSRegularExpression.MatchingOptions](matchingoptions.md) for possible values.
- `range`: The range of the string to search.

<a id="return-value"></a>

## Return Value

An [NSTextCheckingResult](../nstextcheckingresult.md) object. This result gives the overall matched range via its [range](../nstextcheckingresult/range.md) property, and the range of each individual capture group via its [range(at:)](../nstextcheckingresult/range%28at_%29.md) method. The range {`NSNotFound`, 0} is returned if one of the capture groups did not participate in this particular match.

<a id="Discussion"></a>

## Discussion

This is a convenience method that calls [enumerateMatches(in:options:range:using:)](enumeratematches%28in_options_range_using_%29.md).

## See Also

### Searching Strings Using Regular Expressions

- [numberOfMatches(in:options:range:)](numberofmatches%28in_options_range_%29.md): Returns the number of matches of the regular expression within the specified range of the string.
- [enumerateMatches(in:options:range:using:)](enumeratematches%28in_options_range_using_%29.md): Enumerates the string allowing the Block to handle each regular expression match.
- [matches(in:options:range:)](matches%28in_options_range_%29.md): Returns an array containing all the matches of the regular expression in the string.
- [rangeOfFirstMatch(in:options:range:)](rangeoffirstmatch%28in_options_range_%29.md): Returns the range of the first match of the regular expression within the specified range of the string.

# firstMatchInString:options:range: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the first match of the regular expression within the specified range of the string.

## Declaration

```objectivec
- (NSTextCheckingResult *) firstMatchInString:(NSString *) string options:(NSMatchingOptions) options range:(NSRange) range;
```

## Parameters

- `string`: The string to search.
- `options`: The matching options to use. See [NSMatchingOptions](matchingoptions.md) for possible values.
- `range`: The range of the string to search.

<a id="return-value"></a>

## Return Value

An [NSTextCheckingResult](../nstextcheckingresult.md) object. This result gives the overall matched range via its [range](../nstextcheckingresult/range.md) property, and the range of each individual capture group via its [rangeAtIndex:](../nstextcheckingresult/range%28at_%29.md) method. The range {`NSNotFound`, 0} is returned if one of the capture groups did not participate in this particular match.

<a id="Discussion"></a>

## Discussion

This is a convenience method that calls [enumerateMatchesInString:options:range:usingBlock:](enumeratematches%28in_options_range_using_%29.md).

## See Also

### Searching Strings Using Regular Expressions

- [numberOfMatchesInString:options:range:](numberofmatches%28in_options_range_%29.md): Returns the number of matches of the regular expression within the specified range of the string.
- [enumerateMatchesInString:options:range:usingBlock:](enumeratematches%28in_options_range_using_%29.md): Enumerates the string allowing the Block to handle each regular expression match.
- [matchesInString:options:range:](matches%28in_options_range_%29.md): Returns an array containing all the matches of the regular expression in the string.
- [rangeOfFirstMatchInString:options:range:](rangeoffirstmatch%28in_options_range_%29.md): Returns the range of the first match of the regular expression within the specified range of the string.
