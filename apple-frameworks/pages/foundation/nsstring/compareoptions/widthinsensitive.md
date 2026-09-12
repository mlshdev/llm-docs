> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/compareoptions/widthinsensitive](https://developer.apple.com/documentation/foundation/nsstring/compareoptions/widthinsensitive)

# widthInsensitive (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Search ignores width differences in characters that have full-width and half-width forms, as occurs in East Asian character sets.

## Declaration

```swift
static var widthInsensitive: NSString.CompareOptions { get }
```

<a id="Discussion"></a>

## Discussion

For example, with this option, the full-width Latin small letter ‘ａ’ (`U+FF41`) is equal to the basic Latin small letter ‘a’ (`U+0061`).

## See Also

### Constants

- [caseInsensitive](caseinsensitive.md): A case-insensitive search.
- [literal](literal.md): Exact character-by-character equivalence.
- [backwards](backwards.md): Search from end of source string.
- [anchored](anchored.md): Search is limited to start (or end, if `NSBackwardsSearch`) of source string.
- [numeric](numeric.md): Numbers within strings are compared using numeric value, that is, `Name2.txt` \< `Name7.txt` \< `Name25.txt`.
- [diacriticInsensitive](diacriticinsensitive.md): Search ignores diacritic marks.
- [forcedOrdering](forcedordering.md): Comparisons are forced to return either `NSOrderedAscending` or `NSOrderedDescending` if the strings are equivalent but not strictly equal.
- [regularExpression](regularexpression.md): The search string is treated as an ICU-compatible regular expression. If set, no other options can apply except [caseInsensitive](caseinsensitive.md) and [anchored](anchored.md). You can use this option only with the `rangeOfString:`… methods and [replacingOccurrences(of:with:options:range:)](../replacingoccurrences%28of_with_options_range_%29.md).

# NSWidthInsensitiveSearch (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Search ignores width differences in characters that have full-width and half-width forms, as occurs in East Asian character sets.

## Declaration

```objectivec
NSWidthInsensitiveSearch
```

<a id="Discussion"></a>

## Discussion

For example, with this option, the full-width Latin small letter ‘ａ’ (`U+FF41`) is equal to the basic Latin small letter ‘a’ (`U+0061`).

## See Also

### Constants

- [NSCaseInsensitiveSearch](caseinsensitive.md): A case-insensitive search.
- [NSLiteralSearch](literal.md): Exact character-by-character equivalence.
- [NSBackwardsSearch](backwards.md): Search from end of source string.
- [NSAnchoredSearch](anchored.md): Search is limited to start (or end, if `NSBackwardsSearch`) of source string.
- [NSNumericSearch](numeric.md): Numbers within strings are compared using numeric value, that is, `Name2.txt` \< `Name7.txt` \< `Name25.txt`.
- [NSDiacriticInsensitiveSearch](diacriticinsensitive.md): Search ignores diacritic marks.
- [NSForcedOrderingSearch](forcedordering.md): Comparisons are forced to return either `NSOrderedAscending` or `NSOrderedDescending` if the strings are equivalent but not strictly equal.
- [NSRegularExpressionSearch](regularexpression.md): The search string is treated as an ICU-compatible regular expression. If set, no other options can apply except [NSCaseInsensitiveSearch](caseinsensitive.md) and [NSAnchoredSearch](anchored.md). You can use this option only with the `rangeOfString:`… methods and [stringByReplacingOccurrencesOfString:withString:options:range:](../replacingoccurrences%28of_with_options_range_%29.md).
