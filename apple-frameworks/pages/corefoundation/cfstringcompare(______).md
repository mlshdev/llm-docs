> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringcompare(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringcompare(_:_:_:))

# CFStringCompare(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Compares one string with another string.

## Declaration

```swift
func CFStringCompare(_ theString1: CFString!, _ theString2: CFString!, _ compareOptions: CFStringCompareFlags) -> CFComparisonResult
```

## Parameters

- `theString1`: The first string to use in the comparison.
- `theString2`: The second string to use in the comparison.
- `compareOptions`: Flags that select different types of comparisons, such as localized comparison, case-insensitive comparison, and non-literal comparison. If you want the default comparison behavior, pass `0`. See [String Comparison Flags](string-comparison-flags.md) for the available flags.

<a id="return-value"></a>

## Return Value

A [CFComparisonResult](cfcomparisonresult.md) value that indicates whether `theString1` is equal to, less than, or greater than `theString2`.

<a id="Discussion"></a>

## Discussion

You can affect how the comparison proceeds by specifying one or more option flags in `compareOptions`. Not all comparison options are currently implemented.

## See Also

### Comparing Strings

- [CFStringCompareWithOptions(\_:\_:\_:\_:)](cfstringcomparewithoptions%28________%29.md): Compares a range of the characters in one string with that of another string.
- [CFStringCompareWithOptionsAndLocale(\_:\_:\_:\_:\_:)](cfstringcomparewithoptionsandlocale%28__________%29.md): Compares a range of the characters in one string with another string using a given locale.
- [CFStringHasPrefix(\_:\_:)](cfstringhasprefix%28____%29.md): Determines if the character data of a string begin with a specified sequence of characters.
- [CFStringHasSuffix(\_:\_:)](cfstringhassuffix%28____%29.md): Determines if a string ends with a specified sequence of characters.

# CFStringCompare (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Compares one string with another string.

## Declaration

```objectivec
extern CFComparisonResult CFStringCompare(CFStringRef theString1, CFStringRef theString2, CFStringCompareFlags compareOptions);
```

## Parameters

- `theString1`: The first string to use in the comparison.
- `theString2`: The second string to use in the comparison.
- `compareOptions`: Flags that select different types of comparisons, such as localized comparison, case-insensitive comparison, and non-literal comparison. If you want the default comparison behavior, pass `0`. See [String Comparison Flags](string-comparison-flags.md) for the available flags.

<a id="return-value"></a>

## Return Value

A [CFComparisonResult](cfcomparisonresult.md) value that indicates whether `theString1` is equal to, less than, or greater than `theString2`.

<a id="Discussion"></a>

## Discussion

You can affect how the comparison proceeds by specifying one or more option flags in `compareOptions`. Not all comparison options are currently implemented.

## See Also

### Comparing Strings

- [CFStringCompareWithOptions](cfstringcomparewithoptions%28________%29.md): Compares a range of the characters in one string with that of another string.
- [CFStringCompareWithOptionsAndLocale](cfstringcomparewithoptionsandlocale%28__________%29.md): Compares a range of the characters in one string with another string using a given locale.
- [CFStringHasPrefix](cfstringhasprefix%28____%29.md): Determines if the character data of a string begin with a specified sequence of characters.
- [CFStringHasSuffix](cfstringhassuffix%28____%29.md): Determines if a string ends with a specified sequence of characters.
