> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableindexset](https://developer.apple.com/documentation/foundation/nsmutableindexset)

# NSMutableIndexSet (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A mutable collection of unique integer values that represent indexes in another collection.

## Declaration

```swift
class NSMutableIndexSet
```

<a id="overview"></a>

## Overview

In Swift, this type bridges to [IndexSet](indexset.md); use [NSMutableIndexSet](nsmutableindexset.md) when you need reference semantics or other Foundation-specific behavior.

The [NSMutableIndexSet](nsmutableindexset.md) class represents a mutable collection of unique unsigned integers, known as *indexes* because of the way they are used. This collection is referred to as a *mutable index set*. The inclusive range of valid indexes is `0...(NSNotFound - 1)`; trying to use indexes outside this range is invalid.

The values in a mutable index set are always sorted, so the order in which values are added is irrelevant.

Do not subclass the [NSMutableIndexSet](nsmutableindexset.md) class.

> **Important**

>  The Swift overlay to the Foundation framework provides the [IndexSet](indexset.md) structure, which bridges to the [NSMutableIndexSet](nsmutableindexset.md) class and its immutable superclass, [NSIndexSet](nsindexset.md). For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

## Topics

### Adding Indexes

- [add(\_:)](nsmutableindexset/add%28__%29-6dtkj.md): Adds an index to the receiver.
- [add(\_:)](nsmutableindexset/add%28__%29-6zmti.md): Adds the indexes in an index set to the receiver.
- [add(in:)](nsmutableindexset/add%28in_%29.md): Adds the indexes in an index range to the receiver.

### Removing Indexes

- [remove(\_:)](nsmutableindexset/remove%28__%29-5li0r.md): Removes an index from the receiver.
- [remove(\_:)](nsmutableindexset/remove%28__%29-196u2.md): Removes the indexes in an index set from the receiver.
- [removeAllIndexes()](nsmutableindexset/removeallindexes%28%29.md): Removes the receiver’s indexes.
- [remove(in:)](nsmutableindexset/remove%28in_%29.md): Removes the indexes in an index range from the receiver.

### Shifting Index Groups

- [shiftIndexesStarting(at:by:)](nsmutableindexset/shiftindexesstarting%28at_by_%29.md): Shifts a group of indexes to the left or the right within the receiver.

## Relationships

### Inherits From

- [NSIndexSet](nsindexset.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSMutableCopying](nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

# NSMutableIndexSet (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A mutable collection of unique integer values that represent indexes in another collection.

## Declaration

```objectivec
@interface NSMutableIndexSet : NSIndexSet
```

<a id="overview"></a>

## Overview

In Swift, this type bridges to [IndexSet](indexset.md); use [NSMutableIndexSet](nsmutableindexset.md) when you need reference semantics or other Foundation-specific behavior.

The [NSMutableIndexSet](nsmutableindexset.md) class represents a mutable collection of unique unsigned integers, known as *indexes* because of the way they are used. This collection is referred to as a *mutable index set*. The inclusive range of valid indexes is `0...(NSNotFound - 1)`; trying to use indexes outside this range is invalid.

The values in a mutable index set are always sorted, so the order in which values are added is irrelevant.

Do not subclass the [NSMutableIndexSet](nsmutableindexset.md) class.

> **Important**

>  The Swift overlay to the Foundation framework provides the [IndexSet](indexset.md) structure, which bridges to the [NSMutableIndexSet](nsmutableindexset.md) class and its immutable superclass, [NSIndexSet](nsindexset.md). For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

## Topics

### Adding Indexes

- [addIndex:](nsmutableindexset/add%28__%29-6dtkj.md): Adds an index to the receiver.
- [addIndexes:](nsmutableindexset/add%28__%29-6zmti.md): Adds the indexes in an index set to the receiver.
- [addIndexesInRange:](nsmutableindexset/add%28in_%29.md): Adds the indexes in an index range to the receiver.

### Removing Indexes

- [removeIndex:](nsmutableindexset/remove%28__%29-5li0r.md): Removes an index from the receiver.
- [removeIndexes:](nsmutableindexset/remove%28__%29-196u2.md): Removes the indexes in an index set from the receiver.
- [removeAllIndexes](nsmutableindexset/removeallindexes%28%29.md): Removes the receiver’s indexes.
- [removeIndexesInRange:](nsmutableindexset/remove%28in_%29.md): Removes the indexes in an index range from the receiver.

### Shifting Index Groups

- [shiftIndexesStartingAtIndex:by:](nsmutableindexset/shiftindexesstarting%28at_by_%29.md): Shifts a group of indexes to the left or the right within the receiver.

## Relationships

### Inherits From

- [NSIndexSet](nsindexset.md)

## See Also

### Indexes

- [NSIndexPath](nsindexpath.md): A list of indexes that together represent the path to a specific location in a tree of nested arrays.
- [NSIndexSet](nsindexset.md): An immutable collection of unique integer values that represent indexes in another collection.
