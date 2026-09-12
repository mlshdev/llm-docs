> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringgetlinebounds(_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringgetlinebounds(_:_:_:_:_:))

# CFStringGetLineBounds(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Given a range of characters in a string, obtains the line bounds—that is, the indexes of the first character and the final characters of the lines containing the range.

## Declaration

```swift
func CFStringGetLineBounds(_ theString: CFString!, _ range: CFRange, _ lineBeginIndex: UnsafeMutablePointer<CFIndex>!, _ lineEndIndex: UnsafeMutablePointer<CFIndex>!, _ contentsEndIndex: UnsafeMutablePointer<CFIndex>!)
```

## Parameters

- `theString`: The string containing the specified range of characters.
- `range`: The range of characters to consider. The specified range must not exceed the length of the string.
- `lineBeginIndex`: On return, the index of the first character of the containing line. Pass `NULL` if you do not want this result.
- `lineEndIndex`: On return, the index of the first character of the line after the specified range. Pass `NULL` if you do not want this result.
- `contentsEndIndex`: On return, the index of the last character of the containing line, excluding any line-separator characters. Pass `NULL` if you are not interested in this result.

<a id="Discussion"></a>

## Discussion

This function is a convenience function for determining the beginning and ending indexes of one or more lines in the given range of a string. It is useful, for example, when each line represents a “record” of some sort; you might search for some substring, but want to extract the record of which the substring is a part.

To determine line separation, the function looks for the standard line-separator characters: carriage returns (CR and CRLF), linefeeds (LF), and Unicode line and paragraph separators. The three final parameters of the function indirectly return, in order, the index of the first character that starts the line, the index of the first character of the next line (including end-of-line characters), and the index of the last character of the line (excluding end-of-line characters). Pass `NULL` for any of these parameters if you aren’t interested in the result.

To determine the number of characters in the line:

- Subtract `lineBeginIndex` from `lineEndIndex` to find the number of characters in the line, including the line separators.
- Subtract `lineBeginIndex` from `contentsEndIndex` to find the number of characters in the line, excluding the line separators.

## See Also

### Searching Strings

- [CFStringCreateArrayWithFindResults(\_:\_:\_:\_:\_:)](cfstringcreatearraywithfindresults%28__________%29.md): Searches a string for multiple occurrences of a substring and creates an array of ranges identifying the locations of these substrings within the target string.
- [CFStringFind(\_:\_:\_:)](cfstringfind%28______%29.md): Searches for a substring within a string and, if it is found, yields the range of the substring within the object’s characters.
- [CFStringFindCharacterFromSet(\_:\_:\_:\_:\_:)](cfstringfindcharacterfromset%28__________%29.md): Query the range of the first character contained in the specified character set.
- [CFStringFindWithOptions(\_:\_:\_:\_:\_:)](cfstringfindwithoptions%28__________%29.md): Searches for a substring within a range of the characters represented by a string and, if the substring is found, returns its range within the object’s characters.
- [CFStringFindWithOptionsAndLocale(\_:\_:\_:\_:\_:\_:)](cfstringfindwithoptionsandlocale%28____________%29.md): Returns a Boolean value that indicates whether a given string was found in a given source string.

# CFStringGetLineBounds (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Given a range of characters in a string, obtains the line bounds—that is, the indexes of the first character and the final characters of the lines containing the range.

## Declaration

```objectivec
extern void CFStringGetLineBounds(CFStringRef theString, CFRange range, CFIndex *lineBeginIndex, CFIndex *lineEndIndex, CFIndex *contentsEndIndex);
```

## Parameters

- `theString`: The string containing the specified range of characters.
- `range`: The range of characters to consider. The specified range must not exceed the length of the string.
- `lineBeginIndex`: On return, the index of the first character of the containing line. Pass `NULL` if you do not want this result.
- `lineEndIndex`: On return, the index of the first character of the line after the specified range. Pass `NULL` if you do not want this result.
- `contentsEndIndex`: On return, the index of the last character of the containing line, excluding any line-separator characters. Pass `NULL` if you are not interested in this result.

<a id="Discussion"></a>

## Discussion

This function is a convenience function for determining the beginning and ending indexes of one or more lines in the given range of a string. It is useful, for example, when each line represents a “record” of some sort; you might search for some substring, but want to extract the record of which the substring is a part.

To determine line separation, the function looks for the standard line-separator characters: carriage returns (CR and CRLF), linefeeds (LF), and Unicode line and paragraph separators. The three final parameters of the function indirectly return, in order, the index of the first character that starts the line, the index of the first character of the next line (including end-of-line characters), and the index of the last character of the line (excluding end-of-line characters). Pass `NULL` for any of these parameters if you aren’t interested in the result.

To determine the number of characters in the line:

- Subtract `lineBeginIndex` from `lineEndIndex` to find the number of characters in the line, including the line separators.
- Subtract `lineBeginIndex` from `contentsEndIndex` to find the number of characters in the line, excluding the line separators.

## See Also

### Searching Strings

- [CFStringCreateArrayWithFindResults](cfstringcreatearraywithfindresults%28__________%29.md): Searches a string for multiple occurrences of a substring and creates an array of ranges identifying the locations of these substrings within the target string.
- [CFStringFind](cfstringfind%28______%29.md): Searches for a substring within a string and, if it is found, yields the range of the substring within the object’s characters.
- [CFStringFindCharacterFromSet](cfstringfindcharacterfromset%28__________%29.md): Query the range of the first character contained in the specified character set.
- [CFStringFindWithOptions](cfstringfindwithoptions%28__________%29.md): Searches for a substring within a range of the characters represented by a string and, if the substring is found, returns its range within the object’s characters.
- [CFStringFindWithOptionsAndLocale](cfstringfindwithoptionsandlocale%28____________%29.md): Returns a Boolean value that indicates whether a given string was found in a given source string.
