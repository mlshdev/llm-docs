> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/setalgebra](https://developer.apple.com/documentation/swift/setalgebra)

# SetAlgebra

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that provides mathematical set operations.

## Declaration

```swift
protocol SetAlgebra<Element> : Equatable, ExpressibleByArrayLiteral
```

<a id="overview"></a>

## Overview

You use types that conform to the `SetAlgebra` protocol when you need efficient membership tests or mathematical set operations such as intersection, union, and subtraction. In the standard library, you can use the `Set` type with elements of any hashable type, or you can easily create bit masks with `SetAlgebra` conformance using the `OptionSet` protocol. See those types for more information.

> **Note**

> Unlike ordinary set types, the `Element` type of an `OptionSet` is identical to the `OptionSet` type itself. The `SetAlgebra` protocol is specifically designed to accommodate both kinds of set.

<a id="Conforming-to-the-SetAlgebra-Protocol"></a>

## Conforming to the SetAlgebra Protocol

When implementing a custom type that conforms to the `SetAlgebra` protocol, you must implement the required initializers and methods. For the inherited methods to work properly, conforming types must meet the following axioms. Assume that `S` is a custom type that conforms to the `SetAlgebra` protocol, `x` and `y` are instances of `S`, and `e` is of type `S.Element`—the type that the set holds.

- `S() == []`
- `x.intersection(x) == x`
- `x.intersection([]) == []`
- `x.union(x) == x`
- `x.union([]) == x`
- `x.contains(e)` implies `x.union(y).contains(e)`
- `x.union(y).contains(e)` implies `x.contains(e) || y.contains(e)`
- `x.contains(e) && y.contains(e)` if and only if `x.intersection(y).contains(e)`
- `x.isSubset(of: y)` implies `x.union(y) == y`
- `x.isSuperset(of: y)` implies `x.union(y) == x`
- `x.isSubset(of: y)` if and only if `y.isSuperset(of: x)`
- `x.isStrictSuperset(of: y)` if and only if `x.isSuperset(of: y) && x != y`
- `x.isStrictSubset(of: y)` if and only if `x.isSubset(of: y) && x != y`

## Topics

### Creating a Set

- [init()](setalgebra/init%28%29.md): Creates an empty set.

### Testing for Membership

- [contains(\_:)](setalgebra/contains%28__%29.md): Returns a Boolean value that indicates whether the given element exists in the set.
- [Element](setalgebra/element.md): A type for which the conforming type provides a containment test.

### Adding and Removing Elements

- [insert(\_:)](setalgebra/insert%28__%29.md): Inserts the given element in the set if it is not already present.
- [update(with:)](setalgebra/update%28with_%29.md): Inserts the given element into the set unconditionally.
- [remove(\_:)](setalgebra/remove%28__%29.md): Removes the given element and any elements subsumed by the given element.

### Combining Sets

- [union(\_:)](setalgebra/union%28__%29.md): Returns a new set with the elements of both this and the given set.
- [formUnion(\_:)](setalgebra/formunion%28__%29.md): Adds the elements of the given set to the set.
- [intersection(\_:)](setalgebra/intersection%28__%29.md): Returns a new set with the elements that are common to both this set and the given set.
- [formIntersection(\_:)](setalgebra/formintersection%28__%29.md): Removes the elements of this set that aren’t also in the given set.
- [symmetricDifference(\_:)](setalgebra/symmetricdifference%28__%29.md): Returns a new set with the elements that are either in this set or in the given set, but not in both.
- [formSymmetricDifference(\_:)](setalgebra/formsymmetricdifference%28__%29.md): Removes the elements of the set that are also in the given set and adds the members of the given set that are not already in the set.

### Comparing Sets

- [isStrictSubset(of:)](setalgebra/isstrictsubset%28of_%29.md): Returns a Boolean value that indicates whether this set is a strict subset of the given set.
- [isStrictSuperset(of:)](setalgebra/isstrictsuperset%28of_%29.md): Returns a Boolean value that indicates whether this set is a strict superset of the given set.

### Initializers

- [init(\_:)](setalgebra/init%28__%29.md): Creates a new set from a finite sequence of items.

### Instance Properties

- [isEmpty](setalgebra/isempty.md): A Boolean value that indicates whether the set has no elements.

### Instance Methods

- [isDisjoint(with:)](setalgebra/isdisjoint%28with_%29.md): Returns a Boolean value that indicates whether the set has no members in common with the given set.
- [isSubset(of:)](setalgebra/issubset%28of_%29.md): Returns a Boolean value that indicates whether the set is a subset of another set.
- [isSuperset(of:)](setalgebra/issuperset%28of_%29.md): Returns a Boolean value that indicates whether the set is a superset of the given set.
- [subtract(\_:)](setalgebra/subtract%28__%29.md): Removes the elements of the given set from this set.
- [subtracting(\_:)](setalgebra/subtracting%28__%29.md): Returns a new set containing the elements of this set that do not occur in the given set.

## Relationships

### Inherits From

- [Equatable](equatable.md)
- [ExpressibleByArrayLiteral](expressiblebyarrayliteral.md)

### Inherited By

- [OptionSet](optionset.md)

### Conforming Types

- [ObservationTracking.Options](../observation/observationtracking/options.md)
- [Set](set.md)
