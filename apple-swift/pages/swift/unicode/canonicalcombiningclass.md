> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/canonicalcombiningclass](https://developer.apple.com/documentation/swift/unicode/canonicalcombiningclass)

# Unicode.CanonicalCombiningClass

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The classification of a scalar used in the Canonical Ordering Algorithm defined by the Unicode Standard.

## Declaration

```swift
struct CanonicalCombiningClass
```

<a id="overview"></a>

## Overview

Canonical combining classes are used by the ordering algorithm to determine if two sequences of combining marks should be considered canonically equivalent (that is, identical in interpretation). Two sequences are canonically equivalent if they are equal when sorting the scalars in ascending order by their combining class.

For example, consider the sequence `"\u{0041}\u{0301}\u{0316}"` (LATIN CAPITAL LETTER A, COMBINING ACUTE ACCENT, COMBINING GRAVE ACCENT BELOW). The combining classes of these scalars have the numeric values 0, 230, and 220, respectively. Sorting these scalars by their combining classes yields `"\u{0041}\u{0316}\u{0301}"`, so two strings that differ only by the ordering of those scalars would compare as equal:

```swift
let aboveBeforeBelow = "\u{0041}\u{0301}\u{0316}"
let belowBeforeAbove = "\u{0041}\u{0316}\u{0301}"
print(aboveBeforeBelow == belowBeforeAbove)
// Prints "true"
```

<a id="Named-and-Unnamed-Combining-Classes"></a>

## Named and Unnamed Combining Classes

Canonical combining classes are defined in the Unicode Standard as integers in the range `0...254`. For convenience, the standard assigns symbolic names to a subset of these combining classes.

The `CanonicalCombiningClass` type conforms to `RawRepresentable` with a raw value of type `UInt8`. You can create instances of the type by using the static members named after the symbolic names, or by using the `init(rawValue:)` initializer.

```swift
let overlayClass = Unicode.CanonicalCombiningClass(rawValue: 1)
let overlayClassIsOverlay = overlayClass == .overlay
// overlayClassIsOverlay == true
```

## Topics

### Operators

- [==(\_:\_:)](canonicalcombiningclass/==%28____%29.md): Returns a Boolean value indicating whether two values are equal.
- [\<(\_:\_:)](canonicalcombiningclass/_%28____%29.md): Returns a Boolean value indicating whether the value of the first argument is less than that of the second argument.

### Initializers

- [init(rawValue:)](canonicalcombiningclass/init%28rawvalue_%29.md): Creates a new canonical combining class with the given raw integer value.

### Instance Properties

- [hashValue](canonicalcombiningclass/hashvalue.md): The hash value.
- [rawValue](canonicalcombiningclass/rawvalue-swift.property.md): The raw integer value of the canonical combining class.

### Instance Methods

- [hash(into:)](canonicalcombiningclass/hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.

### Type Aliases

- [Unicode.CanonicalCombiningClass.RawValue](canonicalcombiningclass/rawvalue-swift.typealias.md): The raw type that can be used to represent all values of the conforming type.

### Type Properties

- [above](canonicalcombiningclass/above.md): Distinct marks directly above.
- [aboveLeft](canonicalcombiningclass/aboveleft.md): Distinct marks at the top left.
- [aboveRight](canonicalcombiningclass/aboveright.md): Distinct marks at the top right.
- [attachedAbove](canonicalcombiningclass/attachedabove.md): Marks attached directly above.
- [attachedAboveRight](canonicalcombiningclass/attachedaboveright.md): Marks attached at the top right.
- [attachedBelow](canonicalcombiningclass/attachedbelow.md): Marks attached directly below.
- [attachedBelowLeft](canonicalcombiningclass/attachedbelowleft.md): Marks attached at the bottom left.
- [below](canonicalcombiningclass/below.md): Distinct marks directly below.
- [belowLeft](canonicalcombiningclass/belowleft.md): Distinct marks at the bottom left.
- [belowRight](canonicalcombiningclass/belowright.md): Distinct marks at the bottom right.
- [doubleAbove](canonicalcombiningclass/doubleabove.md): Distinct marks extending above two bases.
- [doubleBelow](canonicalcombiningclass/doublebelow.md): Distinct marks subtending two bases.
- [iotaSubscript](canonicalcombiningclass/iotasubscript.md): Greek iota subscript only (U+0345 COMBINING GREEK YPOGEGRAMMENI).
- [kanaVoicing](canonicalcombiningclass/kanavoicing.md): Combining marks that are attached to hiragana and katakana to indicate voicing changes.
- [left](canonicalcombiningclass/left.md): Distinct marks to the left.
- [notReordered](canonicalcombiningclass/notreordered.md): Base glyphs that occupy their own space and do not combine with others.
- [nukta](canonicalcombiningclass/nukta.md): Diacritic nukta marks in Brahmi-derived scripts.
- [overlay](canonicalcombiningclass/overlay.md): Marks that overlay a base letter or symbol.
- [right](canonicalcombiningclass/right.md): Distinct marks to the right.
- [virama](canonicalcombiningclass/virama.md): Diacritic virama marks in Brahmi-derived scripts.

### Default Implementations

- [Comparable Implementations](canonicalcombiningclass/comparable-implementations.md)
- [Equatable Implementations](canonicalcombiningclass/equatable-implementations.md)

## Relationships

### Conforms To

- [Comparable](../comparable.md)
- [Equatable](../equatable.md)
- [Hashable](../hashable.md)
- [RawRepresentable](../rawrepresentable.md)
- [Sendable](../sendable.md)
- [SendableMetatype](../sendablemetatype.md)

## See Also

### Unicode Scalar Classifications

- [Unicode.GeneralCategory](generalcategory.md): The most general classification of a Unicode scalar.
- [Unicode.NumericType](numerictype.md): The numeric type of a scalar.
