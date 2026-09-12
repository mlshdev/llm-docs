> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/string-comparison-flags](https://developer.apple.com/documentation/corefoundation/string-comparison-flags)

# String Comparison Flags (Swift)

**Framework:** Core Foundation  
**Kind:** API Collection

Flags that specify how string comparisons are performed.

<a id="overview"></a>

## Overview

These constants are flags intended for use in the comparison-option parameters in comparison functions such as [CFStringCompare(\_:\_:\_:)](cfstringcompare%28______%29.md). If you want to request multiple options, combine them with a bitwise-OR operation.

## Topics

### Constants

- [compareCaseInsensitive](cfstringcompareflags/comparecaseinsensitive.md): Specifies that the comparison should ignore differences in case between alphabetical characters.
- [compareBackwards](cfstringcompareflags/comparebackwards.md): Specifies that the comparison should start at the last elements of the entities being compared (for example, strings or arrays).
- [compareAnchored](cfstringcompareflags/compareanchored.md): Performs searching only on characters at the beginning or end of the range.
- [compareNonliteral](cfstringcompareflags/comparenonliteral.md): Specifies that loose equivalence is acceptable, especially as pertains to diacritical marks.
- [compareLocalized](cfstringcompareflags/comparelocalized.md): Specifies that the comparison should take into account differences related to locale, such as the thousands separator character.
- [compareNumerically](cfstringcompareflags/comparenumerically.md): Specifies that represented numeric values should be used as the basis for comparison and not the actual character values.
- [compareDiacriticInsensitive](cfstringcompareflags/comparediacriticinsensitive.md): Specifies that the comparison should ignore diacritic markers.
- [compareWidthInsensitive](cfstringcompareflags/comparewidthinsensitive.md): Specifies that the comparison should ignore width differences.
- [compareForcedOrdering](cfstringcompareflags/compareforcedordering.md): Specifies that the comparison is forced to return either `kCFCompareLessThan` or `kCFCompareGreaterThan` if the strings are equivalent but not strictly equal.

## See Also

### Constants

- [CFStringBuiltInEncodings](cfstringbuiltinencodings.md): Encodings that are built-in on all platforms on which macOS runs.
- [Invalid String Encoding Flag](invalid-string-encoding-flag.md): Special value returned from functions to indicate a string encoding that is not supported or recognized by CFString.
- [External String Encodings](external-string-encodings.md): `CFStringEncoding` constants for encodings that may be supported by CFString.

# String Comparison Flags (Objective-C)

**Framework:** Core Foundation  
**Kind:** API Collection

Flags that specify how string comparisons are performed.

<a id="overview"></a>

## Overview

These constants are flags intended for use in the comparison-option parameters in comparison functions such as [CFStringCompare](cfstringcompare%28______%29.md). If you want to request multiple options, combine them with a bitwise-OR operation.

## Topics

### Constants

- [kCFCompareCaseInsensitive](cfstringcompareflags/comparecaseinsensitive.md): Specifies that the comparison should ignore differences in case between alphabetical characters.
- [kCFCompareBackwards](cfstringcompareflags/comparebackwards.md): Specifies that the comparison should start at the last elements of the entities being compared (for example, strings or arrays).
- [kCFCompareAnchored](cfstringcompareflags/compareanchored.md): Performs searching only on characters at the beginning or end of the range.
- [kCFCompareNonliteral](cfstringcompareflags/comparenonliteral.md): Specifies that loose equivalence is acceptable, especially as pertains to diacritical marks.
- [kCFCompareLocalized](cfstringcompareflags/comparelocalized.md): Specifies that the comparison should take into account differences related to locale, such as the thousands separator character.
- [kCFCompareNumerically](cfstringcompareflags/comparenumerically.md): Specifies that represented numeric values should be used as the basis for comparison and not the actual character values.
- [kCFCompareDiacriticInsensitive](cfstringcompareflags/comparediacriticinsensitive.md): Specifies that the comparison should ignore diacritic markers.
- [kCFCompareWidthInsensitive](cfstringcompareflags/comparewidthinsensitive.md): Specifies that the comparison should ignore width differences.
- [kCFCompareForcedOrdering](cfstringcompareflags/compareforcedordering.md): Specifies that the comparison is forced to return either `kCFCompareLessThan` or `kCFCompareGreaterThan` if the strings are equivalent but not strictly equal.

## See Also

### Constants

- [CFStringBuiltInEncodings](cfstringbuiltinencodings.md): Encodings that are built-in on all platforms on which macOS runs.
- [Invalid String Encoding Flag](invalid-string-encoding-flag.md): Special value returned from functions to indicate a string encoding that is not supported or recognized by CFString.
- [External String Encodings](external-string-encodings.md): `CFStringEncoding` constants for encodings that may be supported by CFString.
