> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexset](https://developer.apple.com/documentation/foundation/nsindexset)

# NSIndexSet (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An immutable collection of unique integer values that represent indexes in another collection.

## Declaration

```swift
class NSIndexSet
```

<a id="overview"></a>

## Overview

In Swift, this type bridges to [IndexSet](indexset.md); use [NSIndexSet](nsindexset.md) when you need reference semantics or other Foundation-specific behavior.

The `NSIndexSet` class represents an immutable collection of unique unsigned integers, known as **indexes** because of the way they are used. This collection is referred to as an **index set**. Indexes must be in the range `0 .. NSNotFound - 1`.

You use index sets in your code to store indexes into some other data structure. For example, given an `NSArray` object, you could use an index set to identify a subset of objects in that array.

You should not use index sets to store an arbitrary collection of integer values because index sets store indexes as sorted ranges. This makes them more efficient than storing a collection of individual integers. It also means that each index value can only appear once in the index set.

The designated initializers of the `NSIndexSet` class are: [init(index:)](nsindexset/init%28index_%29.md), [init(indexesIn:)](nsindexset/init%28indexesin_%29.md), and [init(indexSet:)](nsindexset/init%28indexset_%29.md).

You must not subclass the `NSIndexSet` class.

The mutable subclass of `NSIndexSet` is [NSMutableIndexSet](nsmutableindexset.md).

> **Important**

>  The Swift overlay to the Foundation framework provides the [IndexSet](indexset.md) structure, which bridges to the [NSIndexSet](nsindexset.md) class and its mutable subclass, [NSMutableIndexSet](nsmutableindexset.md). For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

## Topics

### Creating Index Sets

- [init(index:)](nsindexset/init%28index_%29.md): Initializes an allocated [NSIndexSet](nsindexset.md) object with an index.
- [init(indexesIn:)](nsindexset/init%28indexesin_%29.md): Initializes an allocated [NSIndexSet](nsindexset.md) object with an index range.
- [init(indexSet:)](nsindexset/init%28indexset_%29.md): Initializes an allocated [NSIndexSet](nsindexset.md) object with an index set.

### Querying Index Sets

- [contains(\_:)](nsindexset/contains%28__%29-bb19.md): Indicates whether the index set contains a specific index.
- [contains(\_:)](nsindexset/contains%28__%29-5j2kh.md): Indicates whether the receiving index set contains a superset of the indexes in another index set.
- [contains(in:)](nsindexset/contains%28in_%29.md): Indicates whether the index set contains the indexes represented by an index range.
- [intersects(in:)](nsindexset/intersects%28in_%29.md): Indicates whether the index set contains any of the indexes in a range.
- [count](nsindexset/count.md): The number of indexes in the index set.
- [countOfIndexes(in:)](nsindexset/countofindexes%28in_%29.md): Returns the number of indexes in the index set that are members of a given range.
- [index(passingTest:)](nsindexset/index%28passingtest_%29.md): Returns the index of the first object that passes the predicate Block test.
- [indexes(passingTest:)](nsindexset/indexes%28passingtest_%29.md): Returns an `NSIndexSet` containing the receiving index set’s objects that pass the Block test.
- [index(options:passingTest:)](nsindexset/index%28options_passingtest_%29.md): Returns the index of the first object that passes the predicate Block test using the specified enumeration options.
- [indexes(options:passingTest:)](nsindexset/indexes%28options_passingtest_%29.md): Returns an `NSIndexSet` containing the receiving index set’s objects that pass the Block test using the specified enumeration options.
- [index(in:options:passingTest:)](nsindexset/index%28in_options_passingtest_%29.md): Returns the index of the first object in the specified range that passes the predicate Block test.
- [indexes(in:options:passingTest:)](nsindexset/indexes%28in_options_passingtest_%29.md): Returns an `NSIndexSet` containing the receiving index set’s objects in the specified range that pass the Block test.

### Enumerating Index Set Content

- [enumerateRanges(in:options:using:)](nsindexset/enumerateranges%28in_options_using_%29.md): Enumerates over the ranges in the range of objects using the block
- [enumerateRanges(\_:)](nsindexset/enumerateranges%28__%29.md): Executes a given block using each object in the index set, in the specified ranges.
- [enumerateRanges(options:using:)](nsindexset/enumerateranges%28options_using_%29.md): Executes a given block using each object in the index set, in the specified ranges.

### Comparing Index Sets

- [isEqual(to:)](nsindexset/isequal%28to_%29.md): Indicates whether the indexes in the receiving index set are the same indexes contained in another index set.

### Getting Indexes

- [firstIndex](nsindexset/firstindex.md): The first index in the index set.
- [lastIndex](nsindexset/lastindex.md): The last index in the index set.
- [indexLessThanIndex(\_:)](nsindexset/indexlessthanindex%28__%29.md): Returns either the closest index in the index set that is less than a specific index or the not-found indicator.
- [indexLessThanOrEqual(to:)](nsindexset/indexlessthanorequal%28to_%29.md): Returns either the closest index in the index set that is less than or equal to a specific index or the not-found indicator.
- [indexGreaterThanOrEqual(to:)](nsindexset/indexgreaterthanorequal%28to_%29.md): Returns either the closest index in the index set that is greater than or equal to a specific index or the not-found indicator.
- [indexGreaterThanIndex(\_:)](nsindexset/indexgreaterthanindex%28__%29.md): Returns either the closest index in the index set that is greater than a specific index or the not-found indicator.
- [getIndexes(\_:maxCount:inIndexRange:)](nsindexset/getindexes%28__maxcount_inindexrange_%29.md): The index set fills an index buffer with the indexes contained both in the index set and in an index range, returning the number of indexes copied.

### Enumerating Indexes

- [enumerate(\_:)](nsindexset/enumerate%28__%29.md): Executes a given Block using each object in the index set.
- [enumerate(options:using:)](nsindexset/enumerate%28options_using_%29.md): Executes a given Block over the index set’s indexes, using the specified enumeration options.
- [enumerate(in:options:using:)](nsindexset/enumerate%28in_options_using_%29.md): Executes a given Block using the indexes in the specified range, using the specified enumeration options.
- [makeIterator()](nsindexset/makeiterator%28%29.md): Returns an *iterator* over the elements of this *sequence*.
- [NSIndexSetIterator](nsindexsetiterator.md): An iterator suitable for enumerating the elements of an index set.

### Initializers

- [init(coder:)](nsindexset/init%28coder_%29.md)
- [init(indexesInRange:)](nsindexset/init%28indexesinrange_%29-67dvw.md)
- [init(indexesInRange:)](nsindexset/init%28indexesinrange_%29-n2eh.md)

### Default Implementations

- [Sequence Implementations](nsindexset/sequence-implementations.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSMutableIndexSet](nsmutableindexset.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSMutableCopying](nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

# NSIndexSet (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An immutable collection of unique integer values that represent indexes in another collection.

## Declaration

```objectivec
@interface NSIndexSet : NSObject
```

<a id="overview"></a>

## Overview

In Swift, this type bridges to [IndexSet](indexset.md); use [NSIndexSet](nsindexset.md) when you need reference semantics or other Foundation-specific behavior.

The `NSIndexSet` class represents an immutable collection of unique unsigned integers, known as **indexes** because of the way they are used. This collection is referred to as an **index set**. Indexes must be in the range `0 .. NSNotFound - 1`.

You use index sets in your code to store indexes into some other data structure. For example, given an `NSArray` object, you could use an index set to identify a subset of objects in that array.

You should not use index sets to store an arbitrary collection of integer values because index sets store indexes as sorted ranges. This makes them more efficient than storing a collection of individual integers. It also means that each index value can only appear once in the index set.

The designated initializers of the `NSIndexSet` class are: [initWithIndex:](nsindexset/init%28index_%29.md), [initWithIndexesInRange:](nsindexset/init%28indexesin_%29.md), and [initWithIndexSet:](nsindexset/init%28indexset_%29.md).

You must not subclass the `NSIndexSet` class.

The mutable subclass of `NSIndexSet` is [NSMutableIndexSet](nsmutableindexset.md).

> **Important**

>  The Swift overlay to the Foundation framework provides the [IndexSet](indexset.md) structure, which bridges to the [NSIndexSet](nsindexset.md) class and its mutable subclass, [NSMutableIndexSet](nsmutableindexset.md). For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

## Topics

### Creating Index Sets

- [indexSet](nsindexset/indexset.md): Creates an empty index set.
- [indexSetWithIndex:](nsindexset/indexsetwithindex_.md): Creates an index set with an index.
- [indexSetWithIndexesInRange:](nsindexset/indexsetwithindexesinrange_.md): Creates an index set with an index range.
- [initWithIndex:](nsindexset/init%28index_%29.md): Initializes an allocated [NSIndexSet](nsindexset.md) object with an index.
- [initWithIndexesInRange:](nsindexset/init%28indexesin_%29.md): Initializes an allocated [NSIndexSet](nsindexset.md) object with an index range.
- [initWithIndexSet:](nsindexset/init%28indexset_%29.md): Initializes an allocated [NSIndexSet](nsindexset.md) object with an index set.

### Querying Index Sets

- [containsIndex:](nsindexset/contains%28__%29-bb19.md): Indicates whether the index set contains a specific index.
- [containsIndexes:](nsindexset/contains%28__%29-5j2kh.md): Indicates whether the receiving index set contains a superset of the indexes in another index set.
- [containsIndexesInRange:](nsindexset/contains%28in_%29.md): Indicates whether the index set contains the indexes represented by an index range.
- [intersectsIndexesInRange:](nsindexset/intersects%28in_%29.md): Indicates whether the index set contains any of the indexes in a range.
- [count](nsindexset/count.md): The number of indexes in the index set.
- [countOfIndexesInRange:](nsindexset/countofindexes%28in_%29.md): Returns the number of indexes in the index set that are members of a given range.
- [indexPassingTest:](nsindexset/index%28passingtest_%29.md): Returns the index of the first object that passes the predicate Block test.
- [indexesPassingTest:](nsindexset/indexes%28passingtest_%29.md): Returns an `NSIndexSet` containing the receiving index set’s objects that pass the Block test.
- [indexWithOptions:passingTest:](nsindexset/index%28options_passingtest_%29.md): Returns the index of the first object that passes the predicate Block test using the specified enumeration options.
- [indexesWithOptions:passingTest:](nsindexset/indexes%28options_passingtest_%29.md): Returns an `NSIndexSet` containing the receiving index set’s objects that pass the Block test using the specified enumeration options.
- [indexInRange:options:passingTest:](nsindexset/index%28in_options_passingtest_%29.md): Returns the index of the first object in the specified range that passes the predicate Block test.
- [indexesInRange:options:passingTest:](nsindexset/indexes%28in_options_passingtest_%29.md): Returns an `NSIndexSet` containing the receiving index set’s objects in the specified range that pass the Block test.

### Enumerating Index Set Content

- [enumerateRangesInRange:options:usingBlock:](nsindexset/enumerateranges%28in_options_using_%29.md): Enumerates over the ranges in the range of objects using the block
- [enumerateRangesUsingBlock:](nsindexset/enumerateranges%28__%29.md): Executes a given block using each object in the index set, in the specified ranges.
- [enumerateRangesWithOptions:usingBlock:](nsindexset/enumerateranges%28options_using_%29.md): Executes a given block using each object in the index set, in the specified ranges.

### Comparing Index Sets

- [isEqualToIndexSet:](nsindexset/isequal%28to_%29.md): Indicates whether the indexes in the receiving index set are the same indexes contained in another index set.

### Getting Indexes

- [firstIndex](nsindexset/firstindex.md): The first index in the index set.
- [lastIndex](nsindexset/lastindex.md): The last index in the index set.
- [indexLessThanIndex:](nsindexset/indexlessthanindex%28__%29.md): Returns either the closest index in the index set that is less than a specific index or the not-found indicator.
- [indexLessThanOrEqualToIndex:](nsindexset/indexlessthanorequal%28to_%29.md): Returns either the closest index in the index set that is less than or equal to a specific index or the not-found indicator.
- [indexGreaterThanOrEqualToIndex:](nsindexset/indexgreaterthanorequal%28to_%29.md): Returns either the closest index in the index set that is greater than or equal to a specific index or the not-found indicator.
- [indexGreaterThanIndex:](nsindexset/indexgreaterthanindex%28__%29.md): Returns either the closest index in the index set that is greater than a specific index or the not-found indicator.
- [getIndexes:maxCount:inIndexRange:](nsindexset/getindexes%28__maxcount_inindexrange_%29.md): The index set fills an index buffer with the indexes contained both in the index set and in an index range, returning the number of indexes copied.

### Enumerating Indexes

- [enumerateIndexesUsingBlock:](nsindexset/enumerate%28__%29.md): Executes a given Block using each object in the index set.
- [enumerateIndexesWithOptions:usingBlock:](nsindexset/enumerate%28options_using_%29.md): Executes a given Block over the index set’s indexes, using the specified enumeration options.
- [enumerateIndexesInRange:options:usingBlock:](nsindexset/enumerate%28in_options_using_%29.md): Executes a given Block using the indexes in the specified range, using the specified enumeration options.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSMutableIndexSet](nsmutableindexset.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSMutableCopying](nsmutablecopying.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Indexes

- [NSIndexPath](nsindexpath.md): A list of indexes that together represent the path to a specific location in a tree of nested arrays.
- [NSMutableIndexSet](nsmutableindexset.md): A mutable collection of unique integer values that represent indexes in another collection.
