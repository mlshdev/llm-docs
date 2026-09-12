> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringfindcharacterfromset(_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringfindcharacterfromset(_:_:_:_:_:))

# CFStringFindCharacterFromSet(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Query the range of the first character contained in the specified character set.

## Declaration

```swift
func CFStringFindCharacterFromSet(_ theString: CFString!, _ theSet: CFCharacterSet!, _ rangeToSearch: CFRange, _ searchOptions: CFStringCompareFlags, _ result: UnsafeMutablePointer<CFRange>!) -> Bool
```

## Parameters

- `theString`: The string to search.
- `theSet`: The character set against which the membership of characters is checked.
- `rangeToSearch`: The range of characters within `theString` to search. If the range location or end point (defined by the location plus length minus `1`) are outside the index space of the string (`0` to `N-1` inclusive, where `N` is the length of the string), the behavior is undefined. The specified range must not exceed the length of the string. If the range length is negative, the behavior is undefined. The range may be empty (length `0`), in which case no search is performed.
- `searchOptions`: The option flags to control the search behavior. The supported options are [compareBackwards](cfstringcompareflags/comparebackwards.md) and [compareAnchored](cfstringcompareflags/compareanchored.md). If other option flags are specified, the behavior is undefined.
- `result`: On return, a pointer to a CFRange structure (supplied by the caller) in which the search result is stored. Note that the length of this range could be more than `1` (if the character in question is a multi-byte character).

  You may pass `NULL` if you don’t need this result.

<a id="return-value"></a>

## Return Value

`true` if a character in the character set is found and `result` is filled, `false` otherwise.

## See Also

### Searching Strings

- [CFStringCreateArrayWithFindResults(\_:\_:\_:\_:\_:)](cfstringcreatearraywithfindresults%28__________%29.md): Searches a string for multiple occurrences of a substring and creates an array of ranges identifying the locations of these substrings within the target string.
- [CFStringFind(\_:\_:\_:)](cfstringfind%28______%29.md): Searches for a substring within a string and, if it is found, yields the range of the substring within the object’s characters.
- [CFStringFindWithOptions(\_:\_:\_:\_:\_:)](cfstringfindwithoptions%28__________%29.md): Searches for a substring within a range of the characters represented by a string and, if the substring is found, returns its range within the object’s characters.
- [CFStringFindWithOptionsAndLocale(\_:\_:\_:\_:\_:\_:)](cfstringfindwithoptionsandlocale%28____________%29.md): Returns a Boolean value that indicates whether a given string was found in a given source string.
- [CFStringGetLineBounds(\_:\_:\_:\_:\_:)](cfstringgetlinebounds%28__________%29.md): Given a range of characters in a string, obtains the line bounds—that is, the indexes of the first character and the final characters of the lines containing the range.

# CFStringFindCharacterFromSet (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Query the range of the first character contained in the specified character set.

## Declaration

```objectivec
extern Boolean CFStringFindCharacterFromSet(CFStringRef theString, CFCharacterSetRef theSet, CFRange rangeToSearch, CFStringCompareFlags searchOptions, CFRange *result);
```

## Parameters

- `theString`: The string to search.
- `theSet`: The character set against which the membership of characters is checked.
- `rangeToSearch`: The range of characters within `theString` to search. If the range location or end point (defined by the location plus length minus `1`) are outside the index space of the string (`0` to `N-1` inclusive, where `N` is the length of the string), the behavior is undefined. The specified range must not exceed the length of the string. If the range length is negative, the behavior is undefined. The range may be empty (length `0`), in which case no search is performed.
- `searchOptions`: The option flags to control the search behavior. The supported options are [kCFCompareBackwards](cfstringcompareflags/comparebackwards.md) and [kCFCompareAnchored](cfstringcompareflags/compareanchored.md). If other option flags are specified, the behavior is undefined.
- `result`: On return, a pointer to a CFRange structure (supplied by the caller) in which the search result is stored. Note that the length of this range could be more than `1` (if the character in question is a multi-byte character).

  You may pass `NULL` if you don’t need this result.

<a id="return-value"></a>

## Return Value

`true` if a character in the character set is found and `result` is filled, `false` otherwise.

## See Also

### Searching Strings

- [CFStringCreateArrayWithFindResults](cfstringcreatearraywithfindresults%28__________%29.md): Searches a string for multiple occurrences of a substring and creates an array of ranges identifying the locations of these substrings within the target string.
- [CFStringFind](cfstringfind%28______%29.md): Searches for a substring within a string and, if it is found, yields the range of the substring within the object’s characters.
- [CFStringFindWithOptions](cfstringfindwithoptions%28__________%29.md): Searches for a substring within a range of the characters represented by a string and, if the substring is found, returns its range within the object’s characters.
- [CFStringFindWithOptionsAndLocale](cfstringfindwithoptionsandlocale%28____________%29.md): Returns a Boolean value that indicates whether a given string was found in a given source string.
- [CFStringGetLineBounds](cfstringgetlinebounds%28__________%29.md): Given a range of characters in a string, obtains the line bounds—that is, the indexes of the first character and the final characters of the lines containing the range.
