> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/sortcomparator](https://developer.apple.com/documentation/foundation/sortcomparator)

# SortComparator

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A comparison algorithm for a specified type.

## Declaration

```swift
@preconcurrency protocol SortComparator<Compared> : Hashable, Sendable
```

<a id="overview"></a>

## Overview

Objects that conform to [SortComparator](sortcomparator.md) provide a comparison algorithm and storage for the sort order to use when comparing.

## Topics

### Inspecting a Comparator

- [order](sortcomparator/order.md): The sort order that the comparator uses to compare.
- [localized](sortcomparator/localized.md): Conforms when `Self` is `String.Comparator`. A comparator that compares a string using a localized comparison in the current locale.
- [localizedStandard](sortcomparator/localizedstandard.md): Conforms when `Self` is `String.Comparator`. A comparator that compares a string using a localized, numeric comparison in the current locale.

### Using a Comparator

- [compare(\_:\_:)](sortcomparator/compare%28____%29.md): Provides the relative ordering of two elements based on the sort order of the comparator.
- [Compared](sortcomparator/compared.md): A type that the sort comparator can compare.

## Relationships

### Inherits From

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [ComparableComparator](comparablecomparator.md)
- [KeyPathComparator](keypathcomparator.md)
- [SortDescriptor](sortdescriptor.md)

## See Also

### Sorting

- [NSSortDescriptor](nssortdescriptor.md): An immutable description of how to order a collection of objects according to a property common to all the objects.
- [ComparisonResult](comparisonresult.md): Constants that indicate sort order.
- [SortDescriptor](sortdescriptor.md): A serializable description of how to sort numerics and strings.
- [ComparableComparator](comparablecomparator.md): A comparator that compares types according to their conformance to the comparable protocol.
- [KeyPathComparator](keypathcomparator.md): A comparator that uses another sort comparator to provide the comparison of values at a key path.
- [SortOrder](sortorder.md): The orderings that you can perform sorts with.
