> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/rangeofcharacter(from:options:range:)](https://developer.apple.com/documentation/foundation/nsstring/rangeofcharacter(from:options:range:))

# rangeOfCharacter(from:options:range:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Finds and returns the range in the string of the first character from a given character set found in a given range with given options.

## Declaration

```swift
func rangeOfCharacter(from searchSet: CharacterSet, options mask: NSString.CompareOptions = [], range rangeOfReceiverToSearch: NSRange) -> NSRange
```

## Parameters

- `searchSet`: A character set. This value must not be `nil`.

  Raises an `NSInvalidArgumentException` if `aSet` is `nil`.
- `mask`: A mask specifying search options. The following options may be specified by combining them with the C bitwise `OR` operator: [anchored](compareoptions/anchored.md), [backwards](compareoptions/backwards.md).
- `rangeOfReceiverToSearch`: The range in which to search. `aRange` must not exceed the bounds of the receiver.

  Raises an [rangeException](../nsexceptionname/rangeexception.md) if `aRange` is invalid.

<a id="return-value"></a>

## Return Value

The range in the receiver of the first character found from `aSet` within `aRange`. Returns a range of ```{``NSNotFound``, 0}``` if none of the characters in `aSet` are found.

<a id="Discussion"></a>

## Discussion

This method does not perform any Unicode normalization on the receiver, so canonically equivalent forms will not be matched. For example, searching the string “strüdel”—containing the decomposed characters “`u`” (`U+0075 LATIN SMALL LETTER U`) and “`¨`” (`U+0308 COMBINING DIAERESIS`)—with a character set containing the precomposed character “`ü`” (`U+00FC LATIN SMALL LETTER U WITH DIAERESIS`) would return the range ```{``NSNotFound``, 0}```, because none of the characters in the set are found.

## See Also

### Finding Characters and Substrings

- [contains(\_:)](contains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case-sensitive, locale-unaware search.
- [localizedCaseInsensitiveContains(\_:)](localizedcaseinsensitivecontains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case-insensitive, locale-aware search.
- [localizedStandardContains(\_:)](localizedstandardcontains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case and diacritic insensitive, locale-aware search.
- [rangeOfCharacter(from:)](rangeofcharacter%28from_%29.md): Finds and returns the range in the string of the first character from a given character set.
- [rangeOfCharacter(from:options:)](rangeofcharacter%28from_options_%29.md): Finds and returns the range in the string of the first character, using given options, from a given character set.
- [range(of:)](range%28of_%29.md): Finds and returns the range of the first occurrence of a given string within the string.
- [range(of:options:)](range%28of_options_%29.md): Finds and returns the range of the first occurrence of a given string within the string, subject to given options.
- [range(of:options:range:)](range%28of_options_range_%29.md): Finds and returns the range of the first occurrence of a given string, within the given range of the string, subject to given options.
- [range(of:options:range:locale:)](range%28of_options_range_locale_%29.md): Finds and returns the range of the first occurrence of a given string within a given range of the string, subject to given options, using the specified locale, if any.
- [localizedStandardRange(of:)](localizedstandardrange%28of_%29.md): Finds and returns the range of the first occurrence of a given string within the string by performing a case and diacritic insensitive, locale-aware search.
- [enumerateLines(\_:)](enumeratelines%28__%29.md): Enumerates all the lines in the string.
- [enumerateSubstrings(in:options:using:)](enumeratesubstrings%28in_options_using_%29.md): Enumerates the substrings of the specified type in the specified range of the string.

# rangeOfCharacterFromSet:options:range: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Finds and returns the range in the string of the first character from a given character set found in a given range with given options.

## Declaration

```objectivec
- (NSRange) rangeOfCharacterFromSet:(NSCharacterSet *) searchSet options:(NSStringCompareOptions) mask range:(NSRange) rangeOfReceiverToSearch;
```

## Parameters

- `searchSet`: A character set. This value must not be `nil`.

  Raises an `NSInvalidArgumentException` if `aSet` is `nil`.
- `mask`: A mask specifying search options. The following options may be specified by combining them with the C bitwise `OR` operator: [NSAnchoredSearch](compareoptions/anchored.md), [NSBackwardsSearch](compareoptions/backwards.md).
- `rangeOfReceiverToSearch`: The range in which to search. `aRange` must not exceed the bounds of the receiver.

  Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if `aRange` is invalid.

<a id="return-value"></a>

## Return Value

The range in the receiver of the first character found from `aSet` within `aRange`. Returns a range of ```{``NSNotFound``, 0}``` if none of the characters in `aSet` are found.

<a id="Discussion"></a>

## Discussion

This method does not perform any Unicode normalization on the receiver, so canonically equivalent forms will not be matched. For example, searching the string “strüdel”—containing the decomposed characters “`u`” (`U+0075 LATIN SMALL LETTER U`) and “`¨`” (`U+0308 COMBINING DIAERESIS`)—with a character set containing the precomposed character “`ü`” (`U+00FC LATIN SMALL LETTER U WITH DIAERESIS`) would return the range ```{``NSNotFound``, 0}```, because none of the characters in the set are found.

## See Also

### Finding Characters and Substrings

- [containsString:](contains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case-sensitive, locale-unaware search.
- [localizedCaseInsensitiveContainsString:](localizedcaseinsensitivecontains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case-insensitive, locale-aware search.
- [localizedStandardContainsString:](localizedstandardcontains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case and diacritic insensitive, locale-aware search.
- [rangeOfCharacterFromSet:](rangeofcharacter%28from_%29.md): Finds and returns the range in the string of the first character from a given character set.
- [rangeOfCharacterFromSet:options:](rangeofcharacter%28from_options_%29.md): Finds and returns the range in the string of the first character, using given options, from a given character set.
- [rangeOfString:](range%28of_%29.md): Finds and returns the range of the first occurrence of a given string within the string.
- [rangeOfString:options:](range%28of_options_%29.md): Finds and returns the range of the first occurrence of a given string within the string, subject to given options.
- [rangeOfString:options:range:](range%28of_options_range_%29.md): Finds and returns the range of the first occurrence of a given string, within the given range of the string, subject to given options.
- [rangeOfString:options:range:locale:](range%28of_options_range_locale_%29.md): Finds and returns the range of the first occurrence of a given string within a given range of the string, subject to given options, using the specified locale, if any.
- [localizedStandardRangeOfString:](localizedstandardrange%28of_%29.md): Finds and returns the range of the first occurrence of a given string within the string by performing a case and diacritic insensitive, locale-aware search.
- [enumerateLinesUsingBlock:](enumeratelines%28__%29.md): Enumerates all the lines in the string.
- [enumerateSubstringsInRange:options:usingBlock:](enumeratesubstrings%28in_options_using_%29.md): Enumerates the substrings of the specified type in the specified range of the string.
