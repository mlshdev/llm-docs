> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/compareoptions/forcedordering](https://developer.apple.com/documentation/foundation/nsstring/compareoptions/forcedordering)

# forcedOrdering (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Comparisons are forced to return either `NSOrderedAscending` or `NSOrderedDescending` if the strings are equivalent but not strictly equal.

## Declaration

```swift
static var forcedOrdering: NSString.CompareOptions { get }
```

<a id="Discussion"></a>

## Discussion

This option ensures reliable, reproducible results when sorting. For example, “aaa” is greater than “AAA”  if [caseInsensitive](caseinsensitive.md) is specified.

## See Also

### Constants

- [caseInsensitive](caseinsensitive.md): A case-insensitive search.
- [literal](literal.md): Exact character-by-character equivalence.
- [backwards](backwards.md): Search from end of source string.
- [anchored](anchored.md): Search is limited to start (or end, if `NSBackwardsSearch`) of source string.
- [numeric](numeric.md): Numbers within strings are compared using numeric value, that is, `Name2.txt` \< `Name7.txt` \< `Name25.txt`.
- [diacriticInsensitive](diacriticinsensitive.md): Search ignores diacritic marks.
- [widthInsensitive](widthinsensitive.md): Search ignores width differences in characters that have full-width and half-width forms, as occurs in East Asian character sets.
- [regularExpression](regularexpression.md): The search string is treated as an ICU-compatible regular expression. If set, no other options can apply except [caseInsensitive](caseinsensitive.md) and [anchored](anchored.md). You can use this option only with the `rangeOfString:`… methods and [replacingOccurrences(of:with:options:range:)](../replacingoccurrences%28of_with_options_range_%29.md).

# NSForcedOrderingSearch (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Comparisons are forced to return either `NSOrderedAscending` or `NSOrderedDescending` if the strings are equivalent but not strictly equal.

## Declaration

```objectivec
NSForcedOrderingSearch
```

<a id="Discussion"></a>

## Discussion

This option ensures reliable, reproducible results when sorting. For example, “aaa” is greater than “AAA”  if [NSCaseInsensitiveSearch](caseinsensitive.md) is specified.

## See Also

### Constants

- [NSCaseInsensitiveSearch](caseinsensitive.md): A case-insensitive search.
- [NSLiteralSearch](literal.md): Exact character-by-character equivalence.
- [NSBackwardsSearch](backwards.md): Search from end of source string.
- [NSAnchoredSearch](anchored.md): Search is limited to start (or end, if `NSBackwardsSearch`) of source string.
- [NSNumericSearch](numeric.md): Numbers within strings are compared using numeric value, that is, `Name2.txt` \< `Name7.txt` \< `Name25.txt`.
- [NSDiacriticInsensitiveSearch](diacriticinsensitive.md): Search ignores diacritic marks.
- [NSWidthInsensitiveSearch](widthinsensitive.md): Search ignores width differences in characters that have full-width and half-width forms, as occurs in East Asian character sets.
- [NSRegularExpressionSearch](regularexpression.md): The search string is treated as an ICU-compatible regular expression. If set, no other options can apply except [NSCaseInsensitiveSearch](caseinsensitive.md) and [NSAnchoredSearch](anchored.md). You can use this option only with the `rangeOfString:`… methods and [stringByReplacingOccurrencesOfString:withString:options:range:](../replacingoccurrences%28of_with_options_range_%29.md).
