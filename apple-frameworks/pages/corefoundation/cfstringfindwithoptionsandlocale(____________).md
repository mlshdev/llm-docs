> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringfindwithoptionsandlocale(_:_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringfindwithoptionsandlocale(_:_:_:_:_:_:))

# CFStringFindWithOptionsAndLocale(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether a given string was found in a given source string.

## Declaration

```swift
func CFStringFindWithOptionsAndLocale(_ theString: CFString!, _ stringToFind: CFString!, _ rangeToSearch: CFRange, _ searchOptions: CFStringCompareFlags, _ locale: CFLocale!, _ result: UnsafeMutablePointer<CFRange>!) -> Bool
```

## Parameters

- `theString`: The string in which to to search for `stringToFind`.
- `stringToFind`: The substring to search for in `theString`.
- `rangeToSearch`: A range of the characters to search in `theString`. The specified range must not exceed the length of the string.
- `searchOptions`: The option flags to control the search behavior. See [String Comparison Flags](string-comparison-flags.md) for possible values. The flags [compareNumerically](cfstringcompareflags/comparenumerically.md) and [compareForcedOrdering](cfstringcompareflags/compareforcedordering.md) are ignored.
- `locale`: The locale to use for the search comparison. `NULL` specifies the canonical locale (the return value from [CFLocaleGetSystem()](cflocalegetsystem%28%29.md)).

  The locale argument affects the equality checking algorithm. For example, for the Turkish locale, case-insensitive compare matches “I” to “ı” (Unicode code point U+0131, Latin Small Dotless I), not the normal “i” character.
- `result`: On return, if the function result is `true` contains the starting location and length of the found substring. You may pass `NULL` if you only want to know if the `theString` contains `stringToFind`.

<a id="return-value"></a>

## Return Value

`true` if the substring was found, `false` otherwise.

<a id="Discussion"></a>

## Discussion

If `stringToFind` is the empty string (zero length), nothing is found.

## See Also

### Searching Strings

- [CFStringCreateArrayWithFindResults(\_:\_:\_:\_:\_:)](cfstringcreatearraywithfindresults%28__________%29.md): Searches a string for multiple occurrences of a substring and creates an array of ranges identifying the locations of these substrings within the target string.
- [CFStringFind(\_:\_:\_:)](cfstringfind%28______%29.md): Searches for a substring within a string and, if it is found, yields the range of the substring within the object’s characters.
- [CFStringFindCharacterFromSet(\_:\_:\_:\_:\_:)](cfstringfindcharacterfromset%28__________%29.md): Query the range of the first character contained in the specified character set.
- [CFStringFindWithOptions(\_:\_:\_:\_:\_:)](cfstringfindwithoptions%28__________%29.md): Searches for a substring within a range of the characters represented by a string and, if the substring is found, returns its range within the object’s characters.
- [CFStringGetLineBounds(\_:\_:\_:\_:\_:)](cfstringgetlinebounds%28__________%29.md): Given a range of characters in a string, obtains the line bounds—that is, the indexes of the first character and the final characters of the lines containing the range.

# CFStringFindWithOptionsAndLocale (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether a given string was found in a given source string.

## Declaration

```objectivec
extern Boolean CFStringFindWithOptionsAndLocale(CFStringRef theString, CFStringRef stringToFind, CFRange rangeToSearch, CFStringCompareFlags searchOptions, CFLocaleRef locale, CFRange *result);
```

## Parameters

- `theString`: The string in which to to search for `stringToFind`.
- `stringToFind`: The substring to search for in `theString`.
- `rangeToSearch`: A range of the characters to search in `theString`. The specified range must not exceed the length of the string.
- `searchOptions`: The option flags to control the search behavior. See [String Comparison Flags](string-comparison-flags.md) for possible values. The flags [kCFCompareNumerically](cfstringcompareflags/comparenumerically.md) and [kCFCompareForcedOrdering](cfstringcompareflags/compareforcedordering.md) are ignored.
- `locale`: The locale to use for the search comparison. `NULL` specifies the canonical locale (the return value from [CFLocaleGetSystem](cflocalegetsystem%28%29.md)).

  The locale argument affects the equality checking algorithm. For example, for the Turkish locale, case-insensitive compare matches “I” to “ı” (Unicode code point U+0131, Latin Small Dotless I), not the normal “i” character.
- `result`: On return, if the function result is `true` contains the starting location and length of the found substring. You may pass `NULL` if you only want to know if the `theString` contains `stringToFind`.

<a id="return-value"></a>

## Return Value

`true` if the substring was found, `false` otherwise.

<a id="Discussion"></a>

## Discussion

If `stringToFind` is the empty string (zero length), nothing is found.

## See Also

### Searching Strings

- [CFStringCreateArrayWithFindResults](cfstringcreatearraywithfindresults%28__________%29.md): Searches a string for multiple occurrences of a substring and creates an array of ranges identifying the locations of these substrings within the target string.
- [CFStringFind](cfstringfind%28______%29.md): Searches for a substring within a string and, if it is found, yields the range of the substring within the object’s characters.
- [CFStringFindCharacterFromSet](cfstringfindcharacterfromset%28__________%29.md): Query the range of the first character contained in the specified character set.
- [CFStringFindWithOptions](cfstringfindwithoptions%28__________%29.md): Searches for a substring within a range of the characters represented by a string and, if the substring is found, returns its range within the object’s characters.
- [CFStringGetLineBounds](cfstringgetlinebounds%28__________%29.md): Given a range of characters in a string, obtains the line bounds—that is, the indexes of the first character and the final characters of the lines containing the range.
