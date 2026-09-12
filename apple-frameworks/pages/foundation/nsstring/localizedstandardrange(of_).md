> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/localizedstandardrange(of:)](https://developer.apple.com/documentation/foundation/nsstring/localizedstandardrange(of:))

# localizedStandardRange(of:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Finds and returns the range of the first occurrence of a given string within the string by performing a case and diacritic insensitive, locale-aware search.

## Declaration

```swift
func localizedStandardRange(of str: String) -> NSRange
```

## Parameters

- `str`: The string to search for. This value must not be `nil`.

<a id="return-value"></a>

## Return Value

The range of the first occurrence of `str` in the receiver. Returns ```{``NSNotFound``, 0}``` if `str` is not found.

## See Also

### Finding Characters and Substrings

- [contains(\_:)](contains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case-sensitive, locale-unaware search.
- [localizedCaseInsensitiveContains(\_:)](localizedcaseinsensitivecontains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case-insensitive, locale-aware search.
- [localizedStandardContains(\_:)](localizedstandardcontains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case and diacritic insensitive, locale-aware search.
- [rangeOfCharacter(from:)](rangeofcharacter%28from_%29.md): Finds and returns the range in the string of the first character from a given character set.
- [rangeOfCharacter(from:options:)](rangeofcharacter%28from_options_%29.md): Finds and returns the range in the string of the first character, using given options, from a given character set.
- [rangeOfCharacter(from:options:range:)](rangeofcharacter%28from_options_range_%29.md): Finds and returns the range in the string of the first character from a given character set found in a given range with given options.
- [range(of:)](range%28of_%29.md): Finds and returns the range of the first occurrence of a given string within the string.
- [range(of:options:)](range%28of_options_%29.md): Finds and returns the range of the first occurrence of a given string within the string, subject to given options.
- [range(of:options:range:)](range%28of_options_range_%29.md): Finds and returns the range of the first occurrence of a given string, within the given range of the string, subject to given options.
- [range(of:options:range:locale:)](range%28of_options_range_locale_%29.md): Finds and returns the range of the first occurrence of a given string within a given range of the string, subject to given options, using the specified locale, if any.
- [enumerateLines(\_:)](enumeratelines%28__%29.md): Enumerates all the lines in the string.
- [enumerateSubstrings(in:options:using:)](enumeratesubstrings%28in_options_using_%29.md): Enumerates the substrings of the specified type in the specified range of the string.

# localizedStandardRangeOfString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Finds and returns the range of the first occurrence of a given string within the string by performing a case and diacritic insensitive, locale-aware search.

## Declaration

```objectivec
- (NSRange) localizedStandardRangeOfString:(NSString *) str;
```

## Parameters

- `str`: The string to search for. This value must not be `nil`.

<a id="return-value"></a>

## Return Value

The range of the first occurrence of `str` in the receiver. Returns ```{``NSNotFound``, 0}``` if `str` is not found.

## See Also

### Finding Characters and Substrings

- [containsString:](contains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case-sensitive, locale-unaware search.
- [localizedCaseInsensitiveContainsString:](localizedcaseinsensitivecontains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case-insensitive, locale-aware search.
- [localizedStandardContainsString:](localizedstandardcontains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case and diacritic insensitive, locale-aware search.
- [rangeOfCharacterFromSet:](rangeofcharacter%28from_%29.md): Finds and returns the range in the string of the first character from a given character set.
- [rangeOfCharacterFromSet:options:](rangeofcharacter%28from_options_%29.md): Finds and returns the range in the string of the first character, using given options, from a given character set.
- [rangeOfCharacterFromSet:options:range:](rangeofcharacter%28from_options_range_%29.md): Finds and returns the range in the string of the first character from a given character set found in a given range with given options.
- [rangeOfString:](range%28of_%29.md): Finds and returns the range of the first occurrence of a given string within the string.
- [rangeOfString:options:](range%28of_options_%29.md): Finds and returns the range of the first occurrence of a given string within the string, subject to given options.
- [rangeOfString:options:range:](range%28of_options_range_%29.md): Finds and returns the range of the first occurrence of a given string, within the given range of the string, subject to given options.
- [rangeOfString:options:range:locale:](range%28of_options_range_locale_%29.md): Finds and returns the range of the first occurrence of a given string within a given range of the string, subject to given options, using the specified locale, if any.
- [enumerateLinesUsingBlock:](enumeratelines%28__%29.md): Enumerates all the lines in the string.
- [enumerateSubstringsInRange:options:usingBlock:](enumeratesubstrings%28in_options_using_%29.md): Enumerates the substrings of the specified type in the specified range of the string.
