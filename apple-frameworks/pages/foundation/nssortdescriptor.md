> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssortdescriptor](https://developer.apple.com/documentation/foundation/nssortdescriptor)

# NSSortDescriptor (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An immutable description of how to order a collection of objects according to a property common to all the objects.

## Declaration

```swift
class NSSortDescriptor
```

<a id="overview"></a>

## Overview

You construct instances of [NSSortDescriptor](nssortdescriptor.md) by specifying the key path of the property to compare and the order of the sort (ascending or descending). Optionally, you can also specify a selector to use to perform the comparison, which allows you to specify other comparison selectors, such as [localizedStandardCompare(\_:)](nsstring/localizedstandardcompare%28__%29.md) and [localizedCaseInsensitiveCompare(\_:)](nsstring/localizedcaseinsensitivecompare%28__%29.md). Sorting raises an exception if the objects don’t respond to the sort descriptor’s comparison selector.

You can use sort descriptors for the following:

- Sorting an array (an instance of [NSArray](nsarray.md) or [NSMutableArray](nsmutablearray.md) — see [sortedArray(using:)](nsarray/sortedarray%28using_%29-82wi1.md) and [sort(using:)](nsmutablearray/sort%28using_%29-4eh07.md))
- Comparing two objects directly (see [compare(\_:to:)](nssortdescriptor/compare%28__to_%29.md))
- Specifying the order of objects that return from a Core Data fetch request (see [sortDescriptors](../coredata/nsfetchrequest/sortdescriptors.md))

## Topics

### Creating a Sort Descriptor

- [init(key:ascending:)](nssortdescriptor/init%28key_ascending_%29.md): Creates a sort descriptor with a specified string key path and sort order.
- [init(key:ascending:selector:)](nssortdescriptor/init%28key_ascending_selector_%29.md): Creates a sort descriptor with a specified string key path, ordering, and comparison selector.
- [init(keyPath:ascending:)](nssortdescriptor/init%28keypath_ascending_%29.md): Creates a sort descriptor with a specified key path and ordering.
- [init(key:ascending:comparator:)](nssortdescriptor/init%28key_ascending_comparator_%29.md): Creates a sort descriptor with a specified string key path and ordering, and a comparator block.
- [init(keyPath:ascending:comparator:)](nssortdescriptor/init%28keypath_ascending_comparator_%29.md): Creates a sort descriptor with a specified key path and ordering, and a comparator block.
- [init(coder:)](nssortdescriptor/init%28coder_%29.md): Creates a sort descriptor by decoding from the coder you specify.
- [init(\_:)](nssortdescriptor/init%28__%29-7qf91.md): Deprecated. Creates a sort descriptor using a sort descriptor you specify.

### Getting Information About a Sort Descriptor

- [ascending](nssortdescriptor/ascending.md): A Boolean value that indicates whether the receiver specifies sorting in ascending order.
- [key](nssortdescriptor/key.md): The key that specifies the property to compare during sorting.
- [keyPath](nssortdescriptor/keypath.md): The key path that specifies the property to compare during sorting.
- [selector](nssortdescriptor/selector.md): The selector for comparing objects.
- [comparator](nssortdescriptor/comparator.md): The comparator for the sort descriptor.

### Using Sort Descriptors

- [compare(\_:to:)](nssortdescriptor/compare%28__to_%29.md): Returns a comparison result value that indicates the sort order of two objects.
- [reversedSortDescriptor](nssortdescriptor/reversedsortdescriptor.md): Returns a sort descriptor that reverses the sort order.
- [allowEvaluation()](nssortdescriptor/allowevaluation%28%29.md): Forces a securely decoded sort descriptor to allow evaluation.

### Initializers

- [init(\_:)](nssortdescriptor/init%28__%29-527yl.md): Creates an `NSSortDescriptor` representing the same sort as the given `SortDescriptor`.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Sorting

- [ComparisonResult](comparisonresult.md): Constants that indicate sort order.
- [SortDescriptor](sortdescriptor.md): A serializable description of how to sort numerics and strings.
- [SortComparator](sortcomparator.md): A comparison algorithm for a specified type.
- [ComparableComparator](comparablecomparator.md): A comparator that compares types according to their conformance to the comparable protocol.
- [KeyPathComparator](keypathcomparator.md): A comparator that uses another sort comparator to provide the comparison of values at a key path.
- [SortOrder](sortorder.md): The orderings that you can perform sorts with.

# NSSortDescriptor (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An immutable description of how to order a collection of objects according to a property common to all the objects.

## Declaration

```objectivec
@interface NSSortDescriptor : NSObject
```

<a id="overview"></a>

## Overview

You construct instances of [NSSortDescriptor](nssortdescriptor.md) by specifying the key path of the property to compare and the order of the sort (ascending or descending). Optionally, you can also specify a selector to use to perform the comparison, which allows you to specify other comparison selectors, such as [localizedStandardCompare:](nsstring/localizedstandardcompare%28__%29.md) and [localizedCaseInsensitiveCompare:](nsstring/localizedcaseinsensitivecompare%28__%29.md). Sorting raises an exception if the objects don’t respond to the sort descriptor’s comparison selector.

You can use sort descriptors for the following:

- Sorting an array (an instance of [NSArray](nsarray.md) or [NSMutableArray](nsmutablearray.md) — see [sortedArrayUsingDescriptors:](nsarray/sortedarray%28using_%29-82wi1.md) and [sortUsingDescriptors:](nsmutablearray/sort%28using_%29-4eh07.md))
- Comparing two objects directly (see [compareObject:toObject:](nssortdescriptor/compare%28__to_%29.md))
- Specifying the order of objects that return from a Core Data fetch request (see [sortDescriptors](../coredata/nsfetchrequest/sortdescriptors.md))

## Topics

### Creating a Sort Descriptor

- [sortDescriptorWithKey:ascending:](nssortdescriptor/sortdescriptorwithkey_ascending_.md): Creates and returns a sort descriptor with the specified key path and ordering.
- [initWithKey:ascending:](nssortdescriptor/init%28key_ascending_%29.md): Creates a sort descriptor with a specified string key path and sort order.
- [sortDescriptorWithKey:ascending:selector:](nssortdescriptor/sortdescriptorwithkey_ascending_selector_.md): Creates a sort descriptor with the specified key path, ordering, and comparison selector.
- [initWithKey:ascending:selector:](nssortdescriptor/init%28key_ascending_selector_%29.md): Creates a sort descriptor with a specified string key path, ordering, and comparison selector.
- [sortDescriptorWithKey:ascending:comparator:](nssortdescriptor/sortdescriptorwithkey_ascending_comparator_.md): Creates and returns a sort descriptor initialized with the specified key path and ordering, and a comparator block.
- [initWithKey:ascending:comparator:](nssortdescriptor/init%28key_ascending_comparator_%29.md): Creates a sort descriptor with a specified string key path and ordering, and a comparator block.
- [initWithCoder:](nssortdescriptor/init%28coder_%29.md): Creates a sort descriptor by decoding from the coder you specify.

### Getting Information About a Sort Descriptor

- [ascending](nssortdescriptor/ascending.md): A Boolean value that indicates whether the receiver specifies sorting in ascending order.
- [key](nssortdescriptor/key.md): The key that specifies the property to compare during sorting.
- [selector](nssortdescriptor/selector.md): The selector for comparing objects.
- [comparator](nssortdescriptor/comparator.md): The comparator for the sort descriptor.

### Using Sort Descriptors

- [compareObject:toObject:](nssortdescriptor/compare%28__to_%29.md): Returns a comparison result value that indicates the sort order of two objects.
- [reversedSortDescriptor](nssortdescriptor/reversedsortdescriptor.md): Returns a sort descriptor that reverses the sort order.
- [allowEvaluation](nssortdescriptor/allowevaluation%28%29.md): Forces a securely decoded sort descriptor to allow evaluation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Sorting

- [NSComparisonResult](comparisonresult.md): Constants that indicate sort order.
