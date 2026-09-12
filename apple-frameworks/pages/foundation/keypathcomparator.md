> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/keypathcomparator](https://developer.apple.com/documentation/foundation/keypathcomparator)

# KeyPathComparator

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A comparator that uses another sort comparator to provide the comparison of values at a key path.

## Declaration

```swift
struct KeyPathComparator<Compared>
```

## Topics

### Using Key Path Comparators

- [compare(\_:\_:)](keypathcomparator/compare%28____%29.md): Provides the relative ordering of two items according to the ordering of the properties that the comparator’s key path references.

### Inspecting Key Path Comparators

- [keyPath](keypathcomparator/keypath.md): The key path that the comparator uses to compare properties.
- [order](keypathcomparator/order.md): The sort order that the comparator uses to compare properties.

### Initializers

- [init(\_:comparator:)](keypathcomparator/init%28__comparator_%29-8b13q.md)
- [init(\_:comparator:)](keypathcomparator/init%28__comparator_%29-284rt.md)
- [init(\_:comparator:order:)](keypathcomparator/init%28__comparator_order_%29-749jk.md)
- [init(\_:comparator:order:)](keypathcomparator/init%28__comparator_order_%29-3gjxd.md)
- [init(\_:order:)](keypathcomparator/init%28__order_%29-6r8gw.md)
- [init(\_:order:)](keypathcomparator/init%28__order_%29-4hyoi.md)

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
- [ComparableComparator](comparablecomparator.md): A comparator that compares types according to their conformance to the comparable protocol.
- [SortOrder](sortorder.md): The orderings that you can perform sorts with.
