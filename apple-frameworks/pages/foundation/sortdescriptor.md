> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/sortdescriptor](https://developer.apple.com/documentation/foundation/sortdescriptor)

# SortDescriptor

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A serializable description of how to sort numerics and strings.

## Declaration

```swift
struct SortDescriptor<Compared>
```

## Topics

### Creating Sort Descriptors

- [init(\_:comparing:)](sortdescriptor/init%28__comparing_%29.md): Creates a sort descriptor using a sort descriptor and a type that you specify.

### Using Sort Descriptors

- [compare(\_:\_:)](sortdescriptor/compare%28____%29.md): Provides the relative ordering of two elements.

### Inspecting Sort Descriptors

- [order](sortdescriptor/order.md): The sort order that the sort descriptor uses to compare.

### Initializers

- [init(\_:comparator:)](sortdescriptor/init%28__comparator_%29-16bsg.md)
- [init(\_:comparator:)](sortdescriptor/init%28__comparator_%29-1xorc.md)
- [init(\_:comparator:)](sortdescriptor/init%28__comparator_%29-7vg3x.md)
- [init(\_:comparator:)](sortdescriptor/init%28__comparator_%29-9m8l9.md)
- [init(\_:comparator:order:)](sortdescriptor/init%28__comparator_order_%29-2ouai.md)
- [init(\_:comparator:order:)](sortdescriptor/init%28__comparator_order_%29-4qaip.md)
- [init(\_:comparator:order:)](sortdescriptor/init%28__comparator_order_%29-76h8b.md)
- [init(\_:comparator:order:)](sortdescriptor/init%28__comparator_order_%29-pz7l.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-1t1a5.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-29e6k.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-29pto.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-2u61k.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-3fgjr.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-3iwfh.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-3wlt2.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-3wozy.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-49ozr.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-4b7jd.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-4doe9.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-4uo4r.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-4z0c9.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-51msp.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-52see.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-5lbot.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-5myfn.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-5s8d4.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-5y1wt.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-7rdjb.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-86gfd.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-8flg7.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-8jc9k.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-8tm2c.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-95o7r.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-9noh7.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-9xg3w.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-ks7r.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-kwgp.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-qlnj.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-rnot.md)
- [init(\_:order:)](sortdescriptor/init%28__order_%29-z7th.md)

### Instance Properties

- [keyPath](sortdescriptor/keypath.md): The key path to the field for comparison.
- [stringComparator](sortdescriptor/stringcomparator.md): A `String.StandardComparator` value.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SortComparator](sortcomparator.md)

## See Also

### Sorting

- [NSSortDescriptor](nssortdescriptor.md): An immutable description of how to order a collection of objects according to a property common to all the objects.
- [ComparisonResult](comparisonresult.md): Constants that indicate sort order.
- [SortComparator](sortcomparator.md): A comparison algorithm for a specified type.
- [ComparableComparator](comparablecomparator.md): A comparator that compares types according to their conformance to the comparable protocol.
- [KeyPathComparator](keypathcomparator.md): A comparator that uses another sort comparator to provide the comparison of values at a key path.
- [SortOrder](sortorder.md): The orderings that you can perform sorts with.
