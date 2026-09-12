> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/compareoptions/caseinsensitive](https://developer.apple.com/documentation/foundation/nsstring/compareoptions/caseinsensitive)

# caseInsensitive (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A case-insensitive search.

## Declaration

```swift
static var caseInsensitive: NSString.CompareOptions { get }
```

## See Also

### Constants

- [literal](literal.md): Exact character-by-character equivalence.
- [backwards](backwards.md): Search from end of source string.
- [anchored](anchored.md): Search is limited to start (or end, if `NSBackwardsSearch`) of source string.
- [numeric](numeric.md): Numbers within strings are compared using numeric value, that is, `Name2.txt` \< `Name7.txt` \< `Name25.txt`.
- [diacriticInsensitive](diacriticinsensitive.md): Search ignores diacritic marks.
- [widthInsensitive](widthinsensitive.md): Search ignores width differences in characters that have full-width and half-width forms, as occurs in East Asian character sets.
- [forcedOrdering](forcedordering.md): Comparisons are forced to return either `NSOrderedAscending` or `NSOrderedDescending` if the strings are equivalent but not strictly equal.
- [regularExpression](regularexpression.md): The search string is treated as an ICU-compatible regular expression. If set, no other options can apply except [caseInsensitive](caseinsensitive.md) and [anchored](anchored.md). You can use this option only with the `rangeOfString:`… methods and [replacingOccurrences(of:with:options:range:)](../replacingoccurrences%28of_with_options_range_%29.md).

# NSCaseInsensitiveSearch (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A case-insensitive search.

## Declaration

```objectivec
NSCaseInsensitiveSearch
```

## See Also

### Constants

- [NSLiteralSearch](literal.md): Exact character-by-character equivalence.
- [NSBackwardsSearch](backwards.md): Search from end of source string.
- [NSAnchoredSearch](anchored.md): Search is limited to start (or end, if `NSBackwardsSearch`) of source string.
- [NSNumericSearch](numeric.md): Numbers within strings are compared using numeric value, that is, `Name2.txt` \< `Name7.txt` \< `Name25.txt`.
- [NSDiacriticInsensitiveSearch](diacriticinsensitive.md): Search ignores diacritic marks.
- [NSWidthInsensitiveSearch](widthinsensitive.md): Search ignores width differences in characters that have full-width and half-width forms, as occurs in East Asian character sets.
- [NSForcedOrderingSearch](forcedordering.md): Comparisons are forced to return either `NSOrderedAscending` or `NSOrderedDescending` if the strings are equivalent but not strictly equal.
- [NSRegularExpressionSearch](regularexpression.md): The search string is treated as an ICU-compatible regular expression. If set, no other options can apply except [NSCaseInsensitiveSearch](caseinsensitive.md) and [NSAnchoredSearch](anchored.md). You can use this option only with the `rangeOfString:`… methods and [stringByReplacingOccurrencesOfString:withString:options:range:](../replacingoccurrences%28of_with_options_range_%29.md).
