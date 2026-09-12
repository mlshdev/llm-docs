> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringcompareflags](https://developer.apple.com/documentation/corefoundation/cfstringcompareflags)

# CFStringCompareFlags (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A [CFOptionFlags](cfoptionflags.md) type for specifying options for string comparison .

## Declaration

```swift
struct CFStringCompareFlags
```

<a id="overview"></a>

## Overview

See [String Comparison Flags](string-comparison-flags.md) for values.

## Topics

### Initializers

- [init(rawValue:)](cfstringcompareflags/init%28rawvalue_%29.md)

### Type Properties

- [compareAnchored](cfstringcompareflags/compareanchored.md): Performs searching only on characters at the beginning or end of the range.
- [compareBackwards](cfstringcompareflags/comparebackwards.md): Specifies that the comparison should start at the last elements of the entities being compared (for example, strings or arrays).
- [compareCaseInsensitive](cfstringcompareflags/comparecaseinsensitive.md): Specifies that the comparison should ignore differences in case between alphabetical characters.
- [compareDiacriticInsensitive](cfstringcompareflags/comparediacriticinsensitive.md): Specifies that the comparison should ignore diacritic markers.
- [compareForcedOrdering](cfstringcompareflags/compareforcedordering.md): Specifies that the comparison is forced to return either `kCFCompareLessThan` or `kCFCompareGreaterThan` if the strings are equivalent but not strictly equal.
- [compareLocalized](cfstringcompareflags/comparelocalized.md): Specifies that the comparison should take into account differences related to locale, such as the thousands separator character.
- [compareNonliteral](cfstringcompareflags/comparenonliteral.md): Specifies that loose equivalence is acceptable, especially as pertains to diacritical marks.
- [compareNumerically](cfstringcompareflags/comparenumerically.md): Specifies that represented numeric values should be used as the basis for comparison and not the actual character values.
- [compareWidthInsensitive](cfstringcompareflags/comparewidthinsensitive.md): Specifies that the comparison should ignore width differences.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Data Types

- [CFStringEncoding](cfstringencoding.md): An integer type for constants used to specify supported string encodings in various CFString functions.
- [CFStringEncodings](cfstringencodings.md): Index type for constants used to specify external string encodings.
- [CFStringInlineBuffer](cfstringinlinebuffer.md): Defines the buffer and related fields used for in-line buffer access of characters in CFString objects.

# CFStringCompareFlags (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A [CFOptionFlags](cfoptionflags.md) type for specifying options for string comparison .

## Declaration

```objectivec
enum CFStringCompareFlags : CFOptionFlags;
```

<a id="overview"></a>

## Overview

See [String Comparison Flags](string-comparison-flags.md) for values.

## Topics

### Enumeration Cases

- [kCFCompareAnchored](cfstringcompareflags/compareanchored.md): Performs searching only on characters at the beginning or end of the range.
- [kCFCompareBackwards](cfstringcompareflags/comparebackwards.md): Specifies that the comparison should start at the last elements of the entities being compared (for example, strings or arrays).
- [kCFCompareCaseInsensitive](cfstringcompareflags/comparecaseinsensitive.md): Specifies that the comparison should ignore differences in case between alphabetical characters.
- [kCFCompareDiacriticInsensitive](cfstringcompareflags/comparediacriticinsensitive.md): Specifies that the comparison should ignore diacritic markers.
- [kCFCompareForcedOrdering](cfstringcompareflags/compareforcedordering.md): Specifies that the comparison is forced to return either `kCFCompareLessThan` or `kCFCompareGreaterThan` if the strings are equivalent but not strictly equal.
- [kCFCompareLocalized](cfstringcompareflags/comparelocalized.md): Specifies that the comparison should take into account differences related to locale, such as the thousands separator character.
- [kCFCompareNonliteral](cfstringcompareflags/comparenonliteral.md): Specifies that loose equivalence is acceptable, especially as pertains to diacritical marks.
- [kCFCompareNumerically](cfstringcompareflags/comparenumerically.md): Specifies that represented numeric values should be used as the basis for comparison and not the actual character values.
- [kCFCompareWidthInsensitive](cfstringcompareflags/comparewidthinsensitive.md): Specifies that the comparison should ignore width differences.

## See Also

### Data Types

- [CFStringEncoding](cfstringencoding.md): An integer type for constants used to specify supported string encodings in various CFString functions.
- [CFStringEncodings](cfstringencodings.md): Index type for constants used to specify external string encodings.
- [CFStringInlineBuffer](cfstringinlinebuffer.md): Defines the buffer and related fields used for in-line buffer access of characters in CFString objects.
