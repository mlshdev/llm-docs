> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringfind(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringfind(_:_:_:))

# CFStringFind(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Searches for a substring within a string and, if it is found, yields the range of the substring within the object’s characters.

## Declaration

```swift
func CFStringFind(_ theString: CFString!, _ stringToFind: CFString!, _ compareOptions: CFStringCompareFlags) -> CFRange
```

## Parameters

- `theString`: The string in which to search for `stringToFind`.
- `stringToFind`: The string to search for in `theString`.
- `compareOptions`: Flags that select different types of comparisons, such as localized comparison, case-insensitive comparison, and non-literal comparison. If you want the default comparison behavior, pass `0`. See [String Comparison Flags](string-comparison-flags.md) for the available flags.

<a id="return-value"></a>

## Return Value

The range of the located substring within `theString`. If a match is not located, the returned [CFRange](cfrange.md) structure will have a location of [kCFNotFound](kcfnotfound.md) and a length of `0` (either of which is enough to indicate failure).

<a id="Discussion"></a>

## Discussion

This function is a convenience when you want to know if the entire range of characters represented by a string contains a particular substring. If you want to search only part of the characters of a string, use the [CFStringFindWithOptions(\_:\_:\_:\_:\_:)](cfstringfindwithoptions%28__________%29.md) function. Both of these functions return upon finding the first occurrence of the substring, so if you want to find out about multiple occurrences, call the [CFStringCreateArrayWithFindResults(\_:\_:\_:\_:\_:)](cfstringcreatearraywithfindresults%28__________%29.md) function.

Depending on the comparison-option flags specified, the length of the resulting range might be different than the length of the search string.

## See Also

### Searching Strings

- [CFStringCreateArrayWithFindResults(\_:\_:\_:\_:\_:)](cfstringcreatearraywithfindresults%28__________%29.md): Searches a string for multiple occurrences of a substring and creates an array of ranges identifying the locations of these substrings within the target string.
- [CFStringFindCharacterFromSet(\_:\_:\_:\_:\_:)](cfstringfindcharacterfromset%28__________%29.md): Query the range of the first character contained in the specified character set.
- [CFStringFindWithOptions(\_:\_:\_:\_:\_:)](cfstringfindwithoptions%28__________%29.md): Searches for a substring within a range of the characters represented by a string and, if the substring is found, returns its range within the object’s characters.
- [CFStringFindWithOptionsAndLocale(\_:\_:\_:\_:\_:\_:)](cfstringfindwithoptionsandlocale%28____________%29.md): Returns a Boolean value that indicates whether a given string was found in a given source string.
- [CFStringGetLineBounds(\_:\_:\_:\_:\_:)](cfstringgetlinebounds%28__________%29.md): Given a range of characters in a string, obtains the line bounds—that is, the indexes of the first character and the final characters of the lines containing the range.

# CFStringFind (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Searches for a substring within a string and, if it is found, yields the range of the substring within the object’s characters.

## Declaration

```objectivec
extern CFRange CFStringFind(CFStringRef theString, CFStringRef stringToFind, CFStringCompareFlags compareOptions);
```

## Parameters

- `theString`: The string in which to search for `stringToFind`.
- `stringToFind`: The string to search for in `theString`.
- `compareOptions`: Flags that select different types of comparisons, such as localized comparison, case-insensitive comparison, and non-literal comparison. If you want the default comparison behavior, pass `0`. See [String Comparison Flags](string-comparison-flags.md) for the available flags.

<a id="return-value"></a>

## Return Value

The range of the located substring within `theString`. If a match is not located, the returned [CFRange](cfrange.md) structure will have a location of [kCFNotFound](kcfnotfound.md) and a length of `0` (either of which is enough to indicate failure).

<a id="Discussion"></a>

## Discussion

This function is a convenience when you want to know if the entire range of characters represented by a string contains a particular substring. If you want to search only part of the characters of a string, use the [CFStringFindWithOptions](cfstringfindwithoptions%28__________%29.md) function. Both of these functions return upon finding the first occurrence of the substring, so if you want to find out about multiple occurrences, call the [CFStringCreateArrayWithFindResults](cfstringcreatearraywithfindresults%28__________%29.md) function.

Depending on the comparison-option flags specified, the length of the resulting range might be different than the length of the search string.

## See Also

### Searching Strings

- [CFStringCreateArrayWithFindResults](cfstringcreatearraywithfindresults%28__________%29.md): Searches a string for multiple occurrences of a substring and creates an array of ranges identifying the locations of these substrings within the target string.
- [CFStringFindCharacterFromSet](cfstringfindcharacterfromset%28__________%29.md): Query the range of the first character contained in the specified character set.
- [CFStringFindWithOptions](cfstringfindwithoptions%28__________%29.md): Searches for a substring within a range of the characters represented by a string and, if the substring is found, returns its range within the object’s characters.
- [CFStringFindWithOptionsAndLocale](cfstringfindwithoptionsandlocale%28____________%29.md): Returns a Boolean value that indicates whether a given string was found in a given source string.
- [CFStringGetLineBounds](cfstringgetlinebounds%28__________%29.md): Given a range of characters in a string, obtains the line bounds—that is, the indexes of the first character and the final characters of the lines containing the range.
