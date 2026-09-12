> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/contains(_:)](https://developer.apple.com/documentation/foundation/nsstring/contains(_:))

# contains(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the string contains a given string by performing a case-sensitive, locale-unaware search.

## Declaration

```swift
func contains(_ str: String) -> Bool
```

## Parameters

- `str`: The string to search for. This value must not be `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver contains `str`, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to calling [range(of:options:)](range%28of_options_%29.md) with no options.

> **Important**

>  When working with text that’s presented to the user, use [localizedStandardContains(\_:)](localizedstandardcontains%28__%29.md) or [localizedCaseInsensitiveContains(\_:)](localizedcaseinsensitivecontains%28__%29.md) instead.

## See Also

### Finding Characters and Substrings

- [localizedCaseInsensitiveContains(\_:)](localizedcaseinsensitivecontains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case-insensitive, locale-aware search.
- [localizedStandardContains(\_:)](localizedstandardcontains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case and diacritic insensitive, locale-aware search.
- [rangeOfCharacter(from:)](rangeofcharacter%28from_%29.md): Finds and returns the range in the string of the first character from a given character set.
- [rangeOfCharacter(from:options:)](rangeofcharacter%28from_options_%29.md): Finds and returns the range in the string of the first character, using given options, from a given character set.
- [rangeOfCharacter(from:options:range:)](rangeofcharacter%28from_options_range_%29.md): Finds and returns the range in the string of the first character from a given character set found in a given range with given options.
- [range(of:)](range%28of_%29.md): Finds and returns the range of the first occurrence of a given string within the string.
- [range(of:options:)](range%28of_options_%29.md): Finds and returns the range of the first occurrence of a given string within the string, subject to given options.
- [range(of:options:range:)](range%28of_options_range_%29.md): Finds and returns the range of the first occurrence of a given string, within the given range of the string, subject to given options.
- [range(of:options:range:locale:)](range%28of_options_range_locale_%29.md): Finds and returns the range of the first occurrence of a given string within a given range of the string, subject to given options, using the specified locale, if any.
- [localizedStandardRange(of:)](localizedstandardrange%28of_%29.md): Finds and returns the range of the first occurrence of a given string within the string by performing a case and diacritic insensitive, locale-aware search.
- [enumerateLines(\_:)](enumeratelines%28__%29.md): Enumerates all the lines in the string.
- [enumerateSubstrings(in:options:using:)](enumeratesubstrings%28in_options_using_%29.md): Enumerates the substrings of the specified type in the specified range of the string.

# containsString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the string contains a given string by performing a case-sensitive, locale-unaware search.

## Declaration

```objectivec
- (BOOL) containsString:(NSString *) str;
```

## Parameters

- `str`: The string to search for. This value must not be `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver contains `str`, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to calling [rangeOfString:options:](range%28of_options_%29.md) with no options.

> **Important**

>  When working with text that’s presented to the user, use [localizedStandardContainsString:](localizedstandardcontains%28__%29.md) or [localizedCaseInsensitiveContainsString:](localizedcaseinsensitivecontains%28__%29.md) instead.

## See Also

### Finding Characters and Substrings

- [localizedCaseInsensitiveContainsString:](localizedcaseinsensitivecontains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case-insensitive, locale-aware search.
- [localizedStandardContainsString:](localizedstandardcontains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case and diacritic insensitive, locale-aware search.
- [rangeOfCharacterFromSet:](rangeofcharacter%28from_%29.md): Finds and returns the range in the string of the first character from a given character set.
- [rangeOfCharacterFromSet:options:](rangeofcharacter%28from_options_%29.md): Finds and returns the range in the string of the first character, using given options, from a given character set.
- [rangeOfCharacterFromSet:options:range:](rangeofcharacter%28from_options_range_%29.md): Finds and returns the range in the string of the first character from a given character set found in a given range with given options.
- [rangeOfString:](range%28of_%29.md): Finds and returns the range of the first occurrence of a given string within the string.
- [rangeOfString:options:](range%28of_options_%29.md): Finds and returns the range of the first occurrence of a given string within the string, subject to given options.
- [rangeOfString:options:range:](range%28of_options_range_%29.md): Finds and returns the range of the first occurrence of a given string, within the given range of the string, subject to given options.
- [rangeOfString:options:range:locale:](range%28of_options_range_locale_%29.md): Finds and returns the range of the first occurrence of a given string within a given range of the string, subject to given options, using the specified locale, if any.
- [localizedStandardRangeOfString:](localizedstandardrange%28of_%29.md): Finds and returns the range of the first occurrence of a given string within the string by performing a case and diacritic insensitive, locale-aware search.
- [enumerateLinesUsingBlock:](enumeratelines%28__%29.md): Enumerates all the lines in the string.
- [enumerateSubstringsInRange:options:usingBlock:](enumeratesubstrings%28in_options_using_%29.md): Enumerates the substrings of the specified type in the specified range of the string.
