> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/replacingcharacters(in:with:)](https://developer.apple.com/documentation/foundation/nsstring/replacingcharacters(in:with:))

# replacingCharacters(in:with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new string in which the characters in a specified range of the receiver are replaced by a given string.

## Declaration

```swift
func replacingCharacters(in range: NSRange, with replacement: String) -> String
```

## Parameters

- `range`: A range of characters in the receiver.
- `replacement`: The string with which to replace the characters in `range`.

<a id="return-value"></a>

## Return Value

A new string in which the characters in `range` of the receiver are replaced by `replacement`.

## See Also

### Related Documentation

- [replacingPercentEscapes(using:)](replacingpercentescapes%28using_%29.md): Deprecated. Returns a new string made by replacing in the receiver all percent escapes with the matching characters as determined by a given encoding.

### Replacing Substrings

- [replacingOccurrences(of:with:)](replacingoccurrences%28of_with_%29.md): Returns a new string in which all occurrences of a target string in the receiver are replaced by another given string.
- [replacingOccurrences(of:with:options:range:)](replacingoccurrences%28of_with_options_range_%29.md): Returns a new string in which all occurrences of a target string in a specified range of the receiver are replaced by another given string.

# stringByReplacingCharactersInRange:withString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new string in which the characters in a specified range of the receiver are replaced by a given string.

## Declaration

```objectivec
- (NSString *) stringByReplacingCharactersInRange:(NSRange) range withString:(NSString *) replacement;
```

## Parameters

- `range`: A range of characters in the receiver.
- `replacement`: The string with which to replace the characters in `range`.

<a id="return-value"></a>

## Return Value

A new string in which the characters in `range` of the receiver are replaced by `replacement`.

## See Also

### Related Documentation

- [stringByReplacingPercentEscapesUsingEncoding:](replacingpercentescapes%28using_%29.md): Deprecated. Returns a new string made by replacing in the receiver all percent escapes with the matching characters as determined by a given encoding.

### Replacing Substrings

- [stringByReplacingOccurrencesOfString:withString:](replacingoccurrences%28of_with_%29.md): Returns a new string in which all occurrences of a target string in the receiver are replaced by another given string.
- [stringByReplacingOccurrencesOfString:withString:options:range:](replacingoccurrences%28of_with_options_range_%29.md): Returns a new string in which all occurrences of a target string in a specified range of the receiver are replaced by another given string.
