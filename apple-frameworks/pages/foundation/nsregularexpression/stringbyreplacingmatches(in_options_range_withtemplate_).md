> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsregularexpression/stringbyreplacingmatches(in:options:range:withtemplate:)](https://developer.apple.com/documentation/foundation/nsregularexpression/stringbyreplacingmatches(in:options:range:withtemplate:))

# stringByReplacingMatches(in:options:range:withTemplate:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new string containing matching regular expressions replaced with the template string.

## Declaration

```swift
func stringByReplacingMatches(in string: String, options: NSRegularExpression.MatchingOptions = [], range: NSRange, withTemplate templ: String) -> String
```

## Parameters

- `string`: The string to search for values within.
- `options`: The matching options to use. See [NSRegularExpression.MatchingOptions](matchingoptions.md) for possible values.
- `range`: The range of the string to search.
- `templ`: The substitution template used when replacing matching instances.

<a id="return-value"></a>

## Return Value

A string with matching regular expressions replaced by the template string.

<a id="Discussion"></a>

## Discussion

See [Flag Options](../nsregularexpression.md#Flag-Options) for the format of `templ`.

## See Also

### Replacing Strings Using Regular Expressions

- [replaceMatches(in:options:range:withTemplate:)](replacematches%28in_options_range_withtemplate_%29.md): Replaces regular expression matches within the mutable string using the template string.

# stringByReplacingMatchesInString:options:range:withTemplate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new string containing matching regular expressions replaced with the template string.

## Declaration

```objectivec
- (NSString *) stringByReplacingMatchesInString:(NSString *) string options:(NSMatchingOptions) options range:(NSRange) range withTemplate:(NSString *) templ;
```

## Parameters

- `string`: The string to search for values within.
- `options`: The matching options to use. See [NSMatchingOptions](matchingoptions.md) for possible values.
- `range`: The range of the string to search.
- `templ`: The substitution template used when replacing matching instances.

<a id="return-value"></a>

## Return Value

A string with matching regular expressions replaced by the template string.

<a id="Discussion"></a>

## Discussion

See [Flag Options](../nsregularexpression.md#Flag-Options) for the format of `templ`.

## See Also

### Replacing Strings Using Regular Expressions

- [replaceMatchesInString:options:range:withTemplate:](replacematches%28in_options_range_withtemplate_%29.md): Replaces regular expression matches within the mutable string using the template string.
