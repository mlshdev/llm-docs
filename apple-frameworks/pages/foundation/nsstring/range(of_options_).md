> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/range(of:options:)](https://developer.apple.com/documentation/foundation/nsstring/range(of:options:))

# range(of:options:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Finds and returns the range of the first occurrence of a given string within the string, subject to given options.

## Declaration

```swift
func range(of searchString: String, options mask: NSString.CompareOptions = []) -> NSRange
```

## Parameters

- `searchString`: The string to search for.
- `mask`: A mask specifying search options. For possible values, see [NSString.CompareOptions](compareoptions.md).

<a id="return-value"></a>

## Return Value

An `NSRange` structure giving the location and length in the receiver of the first occurrence of

<a id="discussion"></a>

## Discussion

`searchString`,

modulo the options in `mask`. Returns ```{``NSNotFound``, 0}``` if

`searchString`

is not found or is empty (`""`).

<a id="Discussion"></a>

## Discussion

Invokes [range(of:options:range:)](range%28of_options_range_%29.md) with the options specified by `mask` and the entire extent of the receiver as the range.

`NSString` objects are compared by checking the Unicode canonical equivalence of their code point sequences.  The length of the returned range and that of

`searchString`

may differ if equivalent composed character sequences are matched.

> **Important**

>  When working with text that’s presented to the user, use the [localizedStandardRange(of:)](localizedstandardrange%28of_%29.md) method instead.

## See Also

### Finding Characters and Substrings

- [contains(\_:)](contains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case-sensitive, locale-unaware search.
- [localizedCaseInsensitiveContains(\_:)](localizedcaseinsensitivecontains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case-insensitive, locale-aware search.
- [localizedStandardContains(\_:)](localizedstandardcontains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case and diacritic insensitive, locale-aware search.
- [rangeOfCharacter(from:)](rangeofcharacter%28from_%29.md): Finds and returns the range in the string of the first character from a given character set.
- [rangeOfCharacter(from:options:)](rangeofcharacter%28from_options_%29.md): Finds and returns the range in the string of the first character, using given options, from a given character set.
- [rangeOfCharacter(from:options:range:)](rangeofcharacter%28from_options_range_%29.md): Finds and returns the range in the string of the first character from a given character set found in a given range with given options.
- [range(of:)](range%28of_%29.md): Finds and returns the range of the first occurrence of a given string within the string.
- [range(of:options:range:)](range%28of_options_range_%29.md): Finds and returns the range of the first occurrence of a given string, within the given range of the string, subject to given options.
- [range(of:options:range:locale:)](range%28of_options_range_locale_%29.md): Finds and returns the range of the first occurrence of a given string within a given range of the string, subject to given options, using the specified locale, if any.
- [localizedStandardRange(of:)](localizedstandardrange%28of_%29.md): Finds and returns the range of the first occurrence of a given string within the string by performing a case and diacritic insensitive, locale-aware search.
- [enumerateLines(\_:)](enumeratelines%28__%29.md): Enumerates all the lines in the string.
- [enumerateSubstrings(in:options:using:)](enumeratesubstrings%28in_options_using_%29.md): Enumerates the substrings of the specified type in the specified range of the string.

# rangeOfString:options: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Finds and returns the range of the first occurrence of a given string within the string, subject to given options.

## Declaration

```objectivec
- (NSRange) rangeOfString:(NSString *) searchString options:(NSStringCompareOptions) mask;
```

## Parameters

- `searchString`: The string to search for.
- `mask`: A mask specifying search options. For possible values, see [NSStringCompareOptions](compareoptions.md).

<a id="return-value"></a>

## Return Value

An `NSRange` structure giving the location and length in the receiver of the first occurrence of

<a id="discussion"></a>

## Discussion

`searchString`,

modulo the options in `mask`. Returns ```{``NSNotFound``, 0}``` if

`searchString`

is not found or is empty (`""`).

<a id="Discussion"></a>

## Discussion

Invokes [rangeOfString:options:range:](range%28of_options_range_%29.md) with the options specified by `mask` and the entire extent of the receiver as the range.

`NSString` objects are compared by checking the Unicode canonical equivalence of their code point sequences.  The length of the returned range and that of

`searchString`

may differ if equivalent composed character sequences are matched.

> **Important**

>  When working with text that’s presented to the user, use the [localizedStandardRangeOfString:](localizedstandardrange%28of_%29.md) method instead.

## See Also

### Finding Characters and Substrings

- [containsString:](contains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case-sensitive, locale-unaware search.
- [localizedCaseInsensitiveContainsString:](localizedcaseinsensitivecontains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case-insensitive, locale-aware search.
- [localizedStandardContainsString:](localizedstandardcontains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case and diacritic insensitive, locale-aware search.
- [rangeOfCharacterFromSet:](rangeofcharacter%28from_%29.md): Finds and returns the range in the string of the first character from a given character set.
- [rangeOfCharacterFromSet:options:](rangeofcharacter%28from_options_%29.md): Finds and returns the range in the string of the first character, using given options, from a given character set.
- [rangeOfCharacterFromSet:options:range:](rangeofcharacter%28from_options_range_%29.md): Finds and returns the range in the string of the first character from a given character set found in a given range with given options.
- [rangeOfString:](range%28of_%29.md): Finds and returns the range of the first occurrence of a given string within the string.
- [rangeOfString:options:range:](range%28of_options_range_%29.md): Finds and returns the range of the first occurrence of a given string, within the given range of the string, subject to given options.
- [rangeOfString:options:range:locale:](range%28of_options_range_locale_%29.md): Finds and returns the range of the first occurrence of a given string within a given range of the string, subject to given options, using the specified locale, if any.
- [localizedStandardRangeOfString:](localizedstandardrange%28of_%29.md): Finds and returns the range of the first occurrence of a given string within the string by performing a case and diacritic insensitive, locale-aware search.
- [enumerateLinesUsingBlock:](enumeratelines%28__%29.md): Enumerates all the lines in the string.
- [enumerateSubstringsInRange:options:usingBlock:](enumeratesubstrings%28in_options_using_%29.md): Enumerates the substrings of the specified type in the specified range of the string.
