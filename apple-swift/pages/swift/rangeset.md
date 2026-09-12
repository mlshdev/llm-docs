> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rangeset](https://developer.apple.com/documentation/swift/rangeset)

# RangeSet

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A set of values of any comparable type, represented by ranges.

## Declaration

```swift
struct RangeSet<Bound> where Bound : Comparable
```

<a id="overview"></a>

## Overview

You can use a range set to efficiently represent a set of `Comparable` values that spans any number of discontiguous ranges. Range sets are commonly used to represent multiple subranges of a collection, by storing ranges of a collection’s index type.

In this example, `negativeSubranges` is a range set representing the locations of all the negative values in `numbers`:

```swift
var numbers = [10, 12, -5, 14, -3, -9, 15]
let negativeSubranges = numbers.indices(where: { $0 < 0 })
// numbers[negativeSubranges].count == 3

numbers.moveSubranges(negativeSubranges, to: 0)
// numbers == [-5, -3, -9, 10, 12, 14, 15]
```

## Topics

### Structures

- [RangeSet.Ranges](rangeset/ranges-swift.struct.md): Conforms when `Bound` conforms to `Comparable`. A collection of the ranges that make up a range set.

### Initializers

- [init()](rangeset/init%28%29.md): Creates an empty range set.
- [init(\_:)](rangeset/init%28__%29-230uy.md): Creates a range set containing the given range.
- [init(\_:)](rangeset/init%28__%29-42v9u.md): Conforms when `Bound` is `Int`.
- [init(\_:)](rangeset/init%28__%29-9x0yj.md): Creates a range set containing the values in the given ranges.
- [init(\_:within:)](rangeset/init%28__within_%29.md): Conforms when `Bound` conforms to `Comparable`. Creates a new range set containing ranges that contain only the specified indices in the given collection.

### Instance Properties

- [isEmpty](rangeset/isempty.md): A Boolean value indicating whether the range set is empty.
- [ranges](rangeset/ranges-swift.property.md): A collection of the ranges that make up the range set.

### Instance Methods

- [contains(\_:)](rangeset/contains%28__%29.md): Returns a Boolean value indicating whether the given value is contained by the ranges in the range set.
- [formIntersection(\_:)](rangeset/formintersection%28__%29.md): Conforms when `Bound` conforms to `Comparable`. Removes the contents of this range set that aren’t also in the given range set.
- [formSymmetricDifference(\_:)](rangeset/formsymmetricdifference%28__%29.md): Conforms when `Bound` conforms to `Comparable`. Removes the contents of this range set that are also in the given set and adds the contents of the given set that are not already in this range set.
- [formUnion(\_:)](rangeset/formunion%28__%29.md): Conforms when `Bound` conforms to `Comparable`. Adds the contents of the given range set to this range set.
- [insert(\_:within:)](rangeset/insert%28__within_%29.md): Conforms when `Bound` conforms to `Comparable`. Inserts a range that contains only the specified index into the range set.
- [insert(contentsOf:)](rangeset/insert%28contentsof_%29.md): Inserts the given range into the range set.
- [intersection(\_:)](rangeset/intersection%28__%29.md): Conforms when `Bound` conforms to `Comparable`. Returns a new range set containing the contents of both this set and the given set.
- [isDisjoint(\_:)](rangeset/isdisjoint%28__%29.md): Conforms when `Bound` conforms to `Comparable`. Returns a Boolean value that indicates whether this range set set has no members in common with the given set.
- [isStrictSubset(of:)](rangeset/isstrictsubset%28of_%29.md): Conforms when `Bound` conforms to `Comparable`. Returns a Boolean value that indicates whether this range set is a strict subset of the given set.
- [isStrictSuperset(of:)](rangeset/isstrictsuperset%28of_%29.md): Conforms when `Bound` conforms to `Comparable`. Returns a Boolean value that indicates whether this range set is a strict superset of the given set.
- [isSubset(of:)](rangeset/issubset%28of_%29.md): Conforms when `Bound` conforms to `Comparable`. Returns a Boolean value that indicates whether this range set is a subset of the given set.
- [isSuperset(of:)](rangeset/issuperset%28of_%29.md): Conforms when `Bound` conforms to `Comparable`. Returns a Boolean value that indicates whether this range set is a superset of the given set.
- [isValid(within:)](rangeset/isvalid%28within_%29-38qb9.md): Conforms when `Bound` is `AttributedString.Index`. Indicates whether the range set is valid for use with the provided discontiguous attributed string.
- [isValid(within:)](rangeset/isvalid%28within_%29-6u17e.md): Conforms when `Bound` is `AttributedString.Index`. Indicates whether the range set is valid for use with the provided attributed string.
- [remove(\_:within:)](rangeset/remove%28__within_%29.md): Conforms when `Bound` conforms to `Comparable`. Removes the range that contains only the specified index from the range set.
- [remove(contentsOf:)](rangeset/remove%28contentsof_%29.md): Removes the given range from the range set.
- [subtract(\_:)](rangeset/subtract%28__%29.md): Conforms when `Bound` conforms to `Comparable`. Removes the contents of the given range set from this range set.
- [subtracting(\_:)](rangeset/subtracting%28__%29.md): Conforms when `Bound` conforms to `Comparable`. Returns a new set containing the contents of this range set that are not also in the given range set.
- [symmetricDifference(\_:)](rangeset/symmetricdifference%28__%29.md): Conforms when `Bound` conforms to `Comparable`. Returns a new range set representing the values in this range set or the given range set, but not both.
- [union(\_:)](rangeset/union%28__%29.md): Conforms when `Bound` conforms to `Comparable`. Returns a new range set containing the contents of both this set and the given set.

### Default Implementations

- [CustomStringConvertible Implementations](rangeset/customstringconvertible-implementations.md)
- [Equatable Implementations](rangeset/equatable-implementations.md)
- [Hashable Implementations](rangeset/hashable-implementations.md)

## Relationships

### Conforms To

- [Copyable](copyable.md)
- [CustomStringConvertible](customstringconvertible.md)
- [Equatable](equatable.md)
- [Escapable](escapable.md)
- [Hashable](hashable.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Ranges

- [..\<(\_:\_:)](comparable/'.._%28____%29.md): Returns a half-open range that contains its lower bound but not its upper bound.
- [Range](range.md): A half-open interval from a lower bound up to, but not including, an upper bound.
- [...(\_:\_:)](comparable/'...%28____%29.md): Returns a closed range that contains both of its bounds.
- [ClosedRange](closedrange.md): An interval from a lower bound up to, and including, an upper bound.
