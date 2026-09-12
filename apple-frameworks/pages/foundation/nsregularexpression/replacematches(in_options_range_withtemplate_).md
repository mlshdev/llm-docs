> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsregularexpression/replacematches(in:options:range:withtemplate:)](https://developer.apple.com/documentation/foundation/nsregularexpression/replacematches(in:options:range:withtemplate:))

# replaceMatches(in:options:range:withTemplate:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces regular expression matches within the mutable string using the template string.

## Declaration

```swift
func replaceMatches(in string: NSMutableString, options: NSRegularExpression.MatchingOptions = [], range: NSRange, withTemplate templ: String) -> Int
```

## Parameters

- `string`: The mutable string to search and replace values within.
- `options`: The matching options to use. See [NSRegularExpression.MatchingOptions](matchingoptions.md) for possible values.
- `range`: The range of the string to search.
- `templ`: The substitution template used when replacing matching instances.

<a id="return-value"></a>

## Return Value

The number of matches.

<a id="Discussion"></a>

## Discussion

See [Flag Options](../nsregularexpression.md#Flag-Options) for the format of `templ`.

## See Also

### Replacing Strings Using Regular Expressions

- [stringByReplacingMatches(in:options:range:withTemplate:)](stringbyreplacingmatches%28in_options_range_withtemplate_%29.md): Returns a new string containing matching regular expressions replaced with the template string.

# replaceMatchesInString:options:range:withTemplate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces regular expression matches within the mutable string using the template string.

## Declaration

```objectivec
- (NSUInteger) replaceMatchesInString:(NSMutableString *) string options:(NSMatchingOptions) options range:(NSRange) range withTemplate:(NSString *) templ;
```

## Parameters

- `string`: The mutable string to search and replace values within.
- `options`: The matching options to use. See [NSMatchingOptions](matchingoptions.md) for possible values.
- `range`: The range of the string to search.
- `templ`: The substitution template used when replacing matching instances.

<a id="return-value"></a>

## Return Value

The number of matches.

<a id="Discussion"></a>

## Discussion

See [Flag Options](../nsregularexpression.md#Flag-Options) for the format of `templ`.

## See Also

### Replacing Strings Using Regular Expressions

- [stringByReplacingMatchesInString:options:range:withTemplate:](stringbyreplacingmatches%28in_options_range_withtemplate_%29.md): Returns a new string containing matching regular expressions replaced with the template string.
