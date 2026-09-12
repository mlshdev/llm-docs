> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringcompareflags/comparelocalized](https://developer.apple.com/documentation/corefoundation/cfstringcompareflags/comparelocalized)

# compareLocalized (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies that the comparison should take into account differences related to locale, such as the thousands separator character.

## Declaration

```swift
static var compareLocalized: CFStringCompareFlags { get }
```

## See Also

### Constants

- [compareCaseInsensitive](comparecaseinsensitive.md): Specifies that the comparison should ignore differences in case between alphabetical characters.
- [compareBackwards](comparebackwards.md): Specifies that the comparison should start at the last elements of the entities being compared (for example, strings or arrays).
- [compareAnchored](compareanchored.md): Performs searching only on characters at the beginning or end of the range.
- [compareNonliteral](comparenonliteral.md): Specifies that loose equivalence is acceptable, especially as pertains to diacritical marks.
- [compareNumerically](comparenumerically.md): Specifies that represented numeric values should be used as the basis for comparison and not the actual character values.
- [compareDiacriticInsensitive](comparediacriticinsensitive.md): Specifies that the comparison should ignore diacritic markers.
- [compareWidthInsensitive](comparewidthinsensitive.md): Specifies that the comparison should ignore width differences.
- [compareForcedOrdering](compareforcedordering.md): Specifies that the comparison is forced to return either `kCFCompareLessThan` or `kCFCompareGreaterThan` if the strings are equivalent but not strictly equal.

# kCFCompareLocalized (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies that the comparison should take into account differences related to locale, such as the thousands separator character.

## Declaration

```objectivec
kCFCompareLocalized
```

## See Also

### Constants

- [kCFCompareCaseInsensitive](comparecaseinsensitive.md): Specifies that the comparison should ignore differences in case between alphabetical characters.
- [kCFCompareBackwards](comparebackwards.md): Specifies that the comparison should start at the last elements of the entities being compared (for example, strings or arrays).
- [kCFCompareAnchored](compareanchored.md): Performs searching only on characters at the beginning or end of the range.
- [kCFCompareNonliteral](comparenonliteral.md): Specifies that loose equivalence is acceptable, especially as pertains to diacritical marks.
- [kCFCompareNumerically](comparenumerically.md): Specifies that represented numeric values should be used as the basis for comparison and not the actual character values.
- [kCFCompareDiacriticInsensitive](comparediacriticinsensitive.md): Specifies that the comparison should ignore diacritic markers.
- [kCFCompareWidthInsensitive](comparewidthinsensitive.md): Specifies that the comparison should ignore width differences.
- [kCFCompareForcedOrdering](compareforcedordering.md): Specifies that the comparison is forced to return either `kCFCompareLessThan` or `kCFCompareGreaterThan` if the strings are equivalent but not strictly equal.
