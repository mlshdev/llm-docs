> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/replacingoccurrences(of:with:)](https://developer.apple.com/documentation/foundation/nsstring/replacingoccurrences(of:with:))

# replacingOccurrences(of:with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new string in which all occurrences of a target string in the receiver are replaced by another given string.

## Declaration

```swift
func replacingOccurrences(of target: String, with replacement: String) -> String
```

## Parameters

- `target`: The string to replace.
- `replacement`: The string with which to replace `target`.

<a id="return-value"></a>

## Return Value

A new string in which all occurrences of `target` in the receiver are replaced by `replacement`.

<a id="Discussion"></a>

## Discussion

Invokes [replacingOccurrences(of:with:options:range:)](replacingoccurrences%28of_with_options_range_%29.md)with `0` options and range of the whole string.

## See Also

### Related Documentation

- [replacingPercentEscapes(using:)](replacingpercentescapes%28using_%29.md): Deprecated. Returns a new string made by replacing in the receiver all percent escapes with the matching characters as determined by a given encoding.

### Replacing Substrings

- [replacingOccurrences(of:with:options:range:)](replacingoccurrences%28of_with_options_range_%29.md): Returns a new string in which all occurrences of a target string in a specified range of the receiver are replaced by another given string.
- [replacingCharacters(in:with:)](replacingcharacters%28in_with_%29.md): Returns a new string in which the characters in a specified range of the receiver are replaced by a given string.

# stringByReplacingOccurrencesOfString:withString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new string in which all occurrences of a target string in the receiver are replaced by another given string.

## Declaration

```objectivec
- (NSString *) stringByReplacingOccurrencesOfString:(NSString *) target withString:(NSString *) replacement;
```

## Parameters

- `target`: The string to replace.
- `replacement`: The string with which to replace `target`.

<a id="return-value"></a>

## Return Value

A new string in which all occurrences of `target` in the receiver are replaced by `replacement`.

<a id="Discussion"></a>

## Discussion

Invokes [stringByReplacingOccurrencesOfString:withString:options:range:](replacingoccurrences%28of_with_options_range_%29.md)with `0` options and range of the whole string.

## See Also

### Related Documentation

- [stringByReplacingPercentEscapesUsingEncoding:](replacingpercentescapes%28using_%29.md): Deprecated. Returns a new string made by replacing in the receiver all percent escapes with the matching characters as determined by a given encoding.

### Replacing Substrings

- [stringByReplacingOccurrencesOfString:withString:options:range:](replacingoccurrences%28of_with_options_range_%29.md): Returns a new string in which all occurrences of a target string in a specified range of the receiver are replaced by another given string.
- [stringByReplacingCharactersInRange:withString:](replacingcharacters%28in_with_%29.md): Returns a new string in which the characters in a specified range of the receiver are replaced by a given string.
