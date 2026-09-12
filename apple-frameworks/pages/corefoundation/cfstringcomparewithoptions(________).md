> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringcomparewithoptions(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringcomparewithoptions(_:_:_:_:))

# CFStringCompareWithOptions(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Compares a range of the characters in one string with that of another string.

## Declaration

```swift
func CFStringCompareWithOptions(_ theString1: CFString!, _ theString2: CFString!, _ rangeToCompare: CFRange, _ compareOptions: CFStringCompareFlags) -> CFComparisonResult
```

## Parameters

- `theString1`: The first string to use in the comparison.
- `theString2`: The second string to use in the comparison.
- `rangeToCompare`: The range of characters in `theString1` to be used in the comparison to `theString2`. To use the whole string, pass the range `CFRangeMake(0, CFStringGetLength(theString1))` or use [CFStringCompare(\_:\_:\_:)](cfstringcompare%28______%29.md). The specified range must not exceed the length of the string.
- `compareOptions`: Flags that select different types of comparisons, such as localized comparison, case-insensitive comparison, and non-literal comparison. If you want the default comparison behavior, pass `0`. See [String Comparison Flags](string-comparison-flags.md) for the available flags.

<a id="return-value"></a>

## Return Value

A [CFComparisonResult](cfcomparisonresult.md) value that indicates whether `theString1` is equal to, less than, or greater than `theString2`.

<a id="Discussion"></a>

## Discussion

You can affect how the comparison proceeds by specifying one or more option flags in `compareOptions`.

If you want to compare one entire string with another string, use the [CFStringCompare(\_:\_:\_:)](cfstringcompare%28______%29.md) function.

## See Also

### Comparing Strings

- [CFStringCompare(\_:\_:\_:)](cfstringcompare%28______%29.md): Compares one string with another string.
- [CFStringCompareWithOptionsAndLocale(\_:\_:\_:\_:\_:)](cfstringcomparewithoptionsandlocale%28__________%29.md): Compares a range of the characters in one string with another string using a given locale.
- [CFStringHasPrefix(\_:\_:)](cfstringhasprefix%28____%29.md): Determines if the character data of a string begin with a specified sequence of characters.
- [CFStringHasSuffix(\_:\_:)](cfstringhassuffix%28____%29.md): Determines if a string ends with a specified sequence of characters.

# CFStringCompareWithOptions (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Compares a range of the characters in one string with that of another string.

## Declaration

```objectivec
extern CFComparisonResult CFStringCompareWithOptions(CFStringRef theString1, CFStringRef theString2, CFRange rangeToCompare, CFStringCompareFlags compareOptions);
```

## Parameters

- `theString1`: The first string to use in the comparison.
- `theString2`: The second string to use in the comparison.
- `rangeToCompare`: The range of characters in `theString1` to be used in the comparison to `theString2`. To use the whole string, pass the range `CFRangeMake(0, CFStringGetLength(theString1))` or use [CFStringCompare](cfstringcompare%28______%29.md). The specified range must not exceed the length of the string.
- `compareOptions`: Flags that select different types of comparisons, such as localized comparison, case-insensitive comparison, and non-literal comparison. If you want the default comparison behavior, pass `0`. See [String Comparison Flags](string-comparison-flags.md) for the available flags.

<a id="return-value"></a>

## Return Value

A [CFComparisonResult](cfcomparisonresult.md) value that indicates whether `theString1` is equal to, less than, or greater than `theString2`.

<a id="Discussion"></a>

## Discussion

You can affect how the comparison proceeds by specifying one or more option flags in `compareOptions`.

If you want to compare one entire string with another string, use the [CFStringCompare](cfstringcompare%28______%29.md) function.

## See Also

### Comparing Strings

- [CFStringCompare](cfstringcompare%28______%29.md): Compares one string with another string.
- [CFStringCompareWithOptionsAndLocale](cfstringcomparewithoptionsandlocale%28__________%29.md): Compares a range of the characters in one string with another string using a given locale.
- [CFStringHasPrefix](cfstringhasprefix%28____%29.md): Determines if the character data of a string begin with a specified sequence of characters.
- [CFStringHasSuffix](cfstringhassuffix%28____%29.md): Determines if a string ends with a specified sequence of characters.
