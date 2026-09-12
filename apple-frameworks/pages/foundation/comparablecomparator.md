> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/comparablecomparator](https://developer.apple.com/documentation/foundation/comparablecomparator)

# ComparableComparator

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A comparator that compares types according to their conformance to the comparable protocol.

## Declaration

```swift
struct ComparableComparator<Compared> where Compared : Comparable
```

<a id="overview"></a>

## Overview

The comparator uses the relevant type’s [Comparable](https://developer.apple.com/documentation/swift/comparable) implementation to compare instances.

## Topics

### Using a Comparator

- [compare(\_:\_:)](comparablecomparator/compare%28____%29.md): Provides the relative ordering of two elements.

### Inspecting a Comparator

- [order](comparablecomparator/order.md): The sort order that the comparator uses to compare.

### Initializers

- [init(order:)](comparablecomparator/init%28order_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SortComparator](sortcomparator.md)

## See Also

### Sorting

- [NSSortDescriptor](nssortdescriptor.md): An immutable description of how to order a collection of objects according to a property common to all the objects.
- [ComparisonResult](comparisonresult.md): Constants that indicate sort order.
- [SortDescriptor](sortdescriptor.md): A serializable description of how to sort numerics and strings.
- [SortComparator](sortcomparator.md): A comparison algorithm for a specified type.
- [KeyPathComparator](keypathcomparator.md): A comparator that uses another sort comparator to provide the comparison of values at a key path.
- [SortOrder](sortorder.md): The orderings that you can perform sorts with.
