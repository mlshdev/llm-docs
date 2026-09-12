> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringcreatearraywithfindresults(_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringcreatearraywithfindresults(_:_:_:_:_:))

# CFStringCreateArrayWithFindResults(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Searches a string for multiple occurrences of a substring and creates an array of ranges identifying the locations of these substrings within the target string.

## Declaration

```swift
func CFStringCreateArrayWithFindResults(_ alloc: CFAllocator!, _ theString: CFString!, _ stringToFind: CFString!, _ rangeToSearch: CFRange, _ compareOptions: CFStringCompareFlags) -> CFArray!
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new CFArray object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `theString`: The string in which to search for `stringToFind`.
- `stringToFind`: The string to search for in `theString`.
- `rangeToSearch`: The range of characters within `theString` to be searched. The specified range must not exceed the length of the string.
- `compareOptions`: Flags that select different types of comparisons, such as localized comparison, case-insensitive comparison, and non-literal comparison. If you want the default comparison behavior, pass `0`. See [String Comparison Flags](string-comparison-flags.md) for the available flags.

<a id="return-value"></a>

## Return Value

An array that contains pointers to [CFRange](cfrange.md) structures identifying the character locations of `stringToFind` in `theString`. Returns `NULL`, if no matching substring is found in the source object, or if there was a problem creating the array. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Searching Strings

- [CFStringFind(\_:\_:\_:)](cfstringfind%28______%29.md): Searches for a substring within a string and, if it is found, yields the range of the substring within the object’s characters.
- [CFStringFindCharacterFromSet(\_:\_:\_:\_:\_:)](cfstringfindcharacterfromset%28__________%29.md): Query the range of the first character contained in the specified character set.
- [CFStringFindWithOptions(\_:\_:\_:\_:\_:)](cfstringfindwithoptions%28__________%29.md): Searches for a substring within a range of the characters represented by a string and, if the substring is found, returns its range within the object’s characters.
- [CFStringFindWithOptionsAndLocale(\_:\_:\_:\_:\_:\_:)](cfstringfindwithoptionsandlocale%28____________%29.md): Returns a Boolean value that indicates whether a given string was found in a given source string.
- [CFStringGetLineBounds(\_:\_:\_:\_:\_:)](cfstringgetlinebounds%28__________%29.md): Given a range of characters in a string, obtains the line bounds—that is, the indexes of the first character and the final characters of the lines containing the range.

# CFStringCreateArrayWithFindResults (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Searches a string for multiple occurrences of a substring and creates an array of ranges identifying the locations of these substrings within the target string.

## Declaration

```objectivec
extern CFArrayRefCFStringCreateArrayWithFindResults(CFAllocatorRef alloc, CFStringRef theString, CFStringRef stringToFind, CFRange rangeToSearch, CFStringCompareFlags compareOptions);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new CFArray object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `theString`: The string in which to search for `stringToFind`.
- `stringToFind`: The string to search for in `theString`.
- `rangeToSearch`: The range of characters within `theString` to be searched. The specified range must not exceed the length of the string.
- `compareOptions`: Flags that select different types of comparisons, such as localized comparison, case-insensitive comparison, and non-literal comparison. If you want the default comparison behavior, pass `0`. See [String Comparison Flags](string-comparison-flags.md) for the available flags.

<a id="return-value"></a>

## Return Value

An array that contains pointers to [CFRange](cfrange.md) structures identifying the character locations of `stringToFind` in `theString`. Returns `NULL`, if no matching substring is found in the source object, or if there was a problem creating the array. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Searching Strings

- [CFStringFind](cfstringfind%28______%29.md): Searches for a substring within a string and, if it is found, yields the range of the substring within the object’s characters.
- [CFStringFindCharacterFromSet](cfstringfindcharacterfromset%28__________%29.md): Query the range of the first character contained in the specified character set.
- [CFStringFindWithOptions](cfstringfindwithoptions%28__________%29.md): Searches for a substring within a range of the characters represented by a string and, if the substring is found, returns its range within the object’s characters.
- [CFStringFindWithOptionsAndLocale](cfstringfindwithoptionsandlocale%28____________%29.md): Returns a Boolean value that indicates whether a given string was found in a given source string.
- [CFStringGetLineBounds](cfstringgetlinebounds%28__________%29.md): Given a range of characters in a string, obtains the line bounds—that is, the indexes of the first character and the final characters of the lines containing the range.
