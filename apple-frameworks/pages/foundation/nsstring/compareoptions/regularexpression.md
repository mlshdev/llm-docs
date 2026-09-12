> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/compareoptions/regularexpression](https://developer.apple.com/documentation/foundation/nsstring/compareoptions/regularexpression)

# regularExpression (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The search string is treated as an ICU-compatible regular expression. If set, no other options can apply except [caseInsensitive](caseinsensitive.md) and [anchored](anchored.md). You can use this option only with the `rangeOfString:`… methods and [replacingOccurrences(of:with:options:range:)](../replacingoccurrences%28of_with_options_range_%29.md).

## Declaration

```swift
static var regularExpression: NSString.CompareOptions { get }
```

## See Also

### Constants

- [caseInsensitive](caseinsensitive.md): A case-insensitive search.
- [literal](literal.md): Exact character-by-character equivalence.
- [backwards](backwards.md): Search from end of source string.
- [anchored](anchored.md): Search is limited to start (or end, if `NSBackwardsSearch`) of source string.
- [numeric](numeric.md): Numbers within strings are compared using numeric value, that is, `Name2.txt` \< `Name7.txt` \< `Name25.txt`.
- [diacriticInsensitive](diacriticinsensitive.md): Search ignores diacritic marks.
- [widthInsensitive](widthinsensitive.md): Search ignores width differences in characters that have full-width and half-width forms, as occurs in East Asian character sets.
- [forcedOrdering](forcedordering.md): Comparisons are forced to return either `NSOrderedAscending` or `NSOrderedDescending` if the strings are equivalent but not strictly equal.

# NSRegularExpressionSearch (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The search string is treated as an ICU-compatible regular expression. If set, no other options can apply except [NSCaseInsensitiveSearch](caseinsensitive.md) and [NSAnchoredSearch](anchored.md). You can use this option only with the `rangeOfString:`… methods and [stringByReplacingOccurrencesOfString:withString:options:range:](../replacingoccurrences%28of_with_options_range_%29.md).

## Declaration

```objectivec
NSRegularExpressionSearch
```

## See Also

### Constants

- [NSCaseInsensitiveSearch](caseinsensitive.md): A case-insensitive search.
- [NSLiteralSearch](literal.md): Exact character-by-character equivalence.
- [NSBackwardsSearch](backwards.md): Search from end of source string.
- [NSAnchoredSearch](anchored.md): Search is limited to start (or end, if `NSBackwardsSearch`) of source string.
- [NSNumericSearch](numeric.md): Numbers within strings are compared using numeric value, that is, `Name2.txt` \< `Name7.txt` \< `Name25.txt`.
- [NSDiacriticInsensitiveSearch](diacriticinsensitive.md): Search ignores diacritic marks.
- [NSWidthInsensitiveSearch](widthinsensitive.md): Search ignores width differences in characters that have full-width and half-width forms, as occurs in East Asian character sets.
- [NSForcedOrderingSearch](forcedordering.md): Comparisons are forced to return either `NSOrderedAscending` or `NSOrderedDescending` if the strings are equivalent but not strictly equal.
