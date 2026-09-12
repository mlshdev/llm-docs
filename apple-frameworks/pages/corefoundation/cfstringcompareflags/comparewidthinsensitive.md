> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringcompareflags/comparewidthinsensitive](https://developer.apple.com/documentation/corefoundation/cfstringcompareflags/comparewidthinsensitive)

# compareWidthInsensitive (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies that the comparison should ignore width differences.

## Declaration

```swift
static var compareWidthInsensitive: CFStringCompareFlags { get }
```

<a id="Discussion"></a>

## Discussion

For example, “a”  is equivalent to `UFF41`.

## See Also

### Constants

- [compareCaseInsensitive](comparecaseinsensitive.md): Specifies that the comparison should ignore differences in case between alphabetical characters.
- [compareBackwards](comparebackwards.md): Specifies that the comparison should start at the last elements of the entities being compared (for example, strings or arrays).
- [compareAnchored](compareanchored.md): Performs searching only on characters at the beginning or end of the range.
- [compareNonliteral](comparenonliteral.md): Specifies that loose equivalence is acceptable, especially as pertains to diacritical marks.
- [compareLocalized](comparelocalized.md): Specifies that the comparison should take into account differences related to locale, such as the thousands separator character.
- [compareNumerically](comparenumerically.md): Specifies that represented numeric values should be used as the basis for comparison and not the actual character values.
- [compareDiacriticInsensitive](comparediacriticinsensitive.md): Specifies that the comparison should ignore diacritic markers.
- [compareForcedOrdering](compareforcedordering.md): Specifies that the comparison is forced to return either `kCFCompareLessThan` or `kCFCompareGreaterThan` if the strings are equivalent but not strictly equal.

# kCFCompareWidthInsensitive (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies that the comparison should ignore width differences.

## Declaration

```objectivec
kCFCompareWidthInsensitive
```

<a id="Discussion"></a>

## Discussion

For example, “a”  is equivalent to `UFF41`.

## See Also

### Constants

- [kCFCompareCaseInsensitive](comparecaseinsensitive.md): Specifies that the comparison should ignore differences in case between alphabetical characters.
- [kCFCompareBackwards](comparebackwards.md): Specifies that the comparison should start at the last elements of the entities being compared (for example, strings or arrays).
- [kCFCompareAnchored](compareanchored.md): Performs searching only on characters at the beginning or end of the range.
- [kCFCompareNonliteral](comparenonliteral.md): Specifies that loose equivalence is acceptable, especially as pertains to diacritical marks.
- [kCFCompareLocalized](comparelocalized.md): Specifies that the comparison should take into account differences related to locale, such as the thousands separator character.
- [kCFCompareNumerically](comparenumerically.md): Specifies that represented numeric values should be used as the basis for comparison and not the actual character values.
- [kCFCompareDiacriticInsensitive](comparediacriticinsensitive.md): Specifies that the comparison should ignore diacritic markers.
- [kCFCompareForcedOrdering](compareforcedordering.md): Specifies that the comparison is forced to return either `kCFCompareLessThan` or `kCFCompareGreaterThan` if the strings are equivalent but not strictly equal.
