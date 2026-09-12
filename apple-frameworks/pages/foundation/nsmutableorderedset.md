> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableorderedset](https://developer.apple.com/documentation/foundation/nsmutableorderedset)

# NSMutableOrderedSet (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dynamic, ordered collection of unique objects.

## Declaration

```swift
class NSMutableOrderedSet
```

<a id="overview"></a>

## Overview

[NSMutableOrderedSet](nsmutableorderedset.md) objects are not like C arrays. That is, even though you may specify a size when you create a mutable ordered set, the specified size is regarded as a “hint”; the actual size of the set is still 0. This means that you cannot insert an object at an index greater than the current count of an set. For example, if a set contains two objects, its size is 2, so you can add objects at indices 0, 1, or 2. Index 3 is illegal and out of bounds; if you try to add an object at index 3 (when the size of the array is 2), `NSMutableOrderedSet` raises an exception.

## Topics

### Creating a Mutable Ordered Set

- [init(capacity:)](nsmutableorderedset/init%28capacity_%29.md): Returns an initialized mutable ordered set with a given initial capacity.
- [init()](nsmutableorderedset/init%28%29.md): Initializes a newly allocated mutable ordered set.

### Adding, Removing, and Reordering Entries

- [add(\_:)](nsmutableorderedset/add%28__%29.md): Appends a given object to the end of the mutable ordered set, if it is not already a member.
- [add(\_:count:)](nsmutableorderedset/add%28__count_%29.md): Appends the given number of objects from a given C array to the end of the mutable ordered set.
- [addObjects(from:)](nsmutableorderedset/addobjects%28from_%29.md): Appends to the end of the mutable ordered set each object contained in a given array that is not already a member.
- [insert(\_:at:)](nsmutableorderedset/insert%28__at_%29-7qg51.md): Inserts the given object at the specified index of the mutable ordered set, if it is not already a member.
- [insert(\_:at:)](nsmutableorderedset/insert%28__at_%29-3ncnm.md): Inserts the objects in the array at the specified indexes.
- [remove(\_:)](nsmutableorderedset/remove%28__%29.md): Removes a given object from the mutable ordered set.
- [removeObject(at:)](nsmutableorderedset/removeobject%28at_%29.md): Removes a the object at the specified index from the mutable ordered set.
- [removeObjects(at:)](nsmutableorderedset/removeobjects%28at_%29.md): Removes the objects at the specified indexes from the mutable ordered set.
- [removeObjects(in:)](nsmutableorderedset/removeobjects%28in_%29-8h2kh.md): Removes the objects in the array from the mutable ordered set.
- [removeObjects(in:)](nsmutableorderedset/removeobjects%28in_%29-9jkis.md): Removes from the mutable ordered set each of the objects within a given range.
- [removeAllObjects()](nsmutableorderedset/removeallobjects%28%29.md): Removes all the objects from the mutable ordered set.
- [replaceObject(at:with:)](nsmutableorderedset/replaceobject%28at_with_%29.md): Replaces the object at the specified index with the new object.
- [replaceObjects(at:with:)](nsmutableorderedset/replaceobjects%28at_with_%29.md): Replaces the objects at the specified indexes with the new objects.
- [replaceObjects(in:with:count:)](nsmutableorderedset/replaceobjects%28in_with_count_%29.md): Replaces the objects in the receiving mutable ordered set at the range with the specified number of objects from a given C array.
- [setObject(\_:at:)](nsmutableorderedset/setobject%28__at_%29.md): Appends or replaces the object at the specified index.
- [moveObjects(at:to:)](nsmutableorderedset/moveobjects%28at_to_%29.md): Moves the objects at the specified indexes to the new location.
- [exchangeObject(at:withObjectAt:)](nsmutableorderedset/exchangeobject%28at_withobjectat_%29.md): Exchanges the object at the specified index with the object at the other index.
- [filter(using:)](nsmutableorderedset/filter%28using_%29.md): Evaluates a given predicate against the mutable ordered set’s content and leaves only objects that match.

### Sorting Entries

- [sort(using:)](nsmutableorderedset/sort%28using_%29.md): Sorts the receiving ordered set using a given array of sort descriptors.
- [sort(comparator:)](nsmutableorderedset/sort%28comparator_%29.md): Sorts the mutable ordered set using the comparison method specified by the comparator block.
- [sort(options:usingComparator:)](nsmutableorderedset/sort%28options_usingcomparator_%29.md): Sorts the mutable ordered set using the specified options and the comparison method specified by a given comparator block.
- [sortRange(\_:options:usingComparator:)](nsmutableorderedset/sortrange%28__options_usingcomparator_%29.md): Sorts the specified range of the mutable ordered set using the specified options and the comparison method specified by a given comparator block.

### Combining and Recombining Entries

- [intersect(\_:)](nsmutableorderedset/intersect%28__%29.md): Removes from the receiving ordered set each object that isn’t a member of another ordered set.
- [intersectSet(\_:)](nsmutableorderedset/intersectset%28__%29.md): Removes from the receiving ordered set each object that isn’t a member of another set.
- [minus(\_:)](nsmutableorderedset/minus%28__%29.md): Removes each object in another given ordered set from the receiving mutable ordered set, if present.
- [minusSet(\_:)](nsmutableorderedset/minusset%28__%29.md): Removes each object in another given set from the receiving mutable ordered set, if present.
- [union(\_:)](nsmutableorderedset/union%28__%29.md): Adds each object in another given ordered set to the receiving mutable ordered set, if not present.
- [unionSet(\_:)](nsmutableorderedset/unionset%28__%29.md): Adds each object in another given set to the receiving mutable ordered set, if not present.

### Initializers

- [init(coder:)](nsmutableorderedset/init%28coder_%29.md)
- [init(objects:count:)](nsmutableorderedset/init%28objects_count_%29.md)

## Relationships

### Inherits From

- [NSOrderedSet](nsorderedset.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSFastEnumeration](nsfastenumeration.md)
- [NSMutableCopying](nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Specialized Sets

- [NSCountedSet](nscountedset.md): A mutable, unordered collection of distinct objects that may appear more than once in the collection.
- [NSOrderedSet](nsorderedset.md): A static, ordered collection of unique objects.

# NSMutableOrderedSet (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dynamic, ordered collection of unique objects.

## Declaration

```objectivec
@interface NSMutableOrderedSet : NSOrderedSet
```

<a id="overview"></a>

## Overview

[NSMutableOrderedSet](nsmutableorderedset.md) objects are not like C arrays. That is, even though you may specify a size when you create a mutable ordered set, the specified size is regarded as a “hint”; the actual size of the set is still 0. This means that you cannot insert an object at an index greater than the current count of an set. For example, if a set contains two objects, its size is 2, so you can add objects at indices 0, 1, or 2. Index 3 is illegal and out of bounds; if you try to add an object at index 3 (when the size of the array is 2), `NSMutableOrderedSet` raises an exception.

## Topics

### Creating a Mutable Ordered Set

- [orderedSetWithCapacity:](nsmutableorderedset/orderedsetwithcapacity_.md): Creates and returns an mutable ordered set with a given initial capacity.
- [initWithCapacity:](nsmutableorderedset/init%28capacity_%29.md): Returns an initialized mutable ordered set with a given initial capacity.
- [init](nsmutableorderedset/init%28%29.md): Initializes a newly allocated mutable ordered set.

### Adding, Removing, and Reordering Entries

- [addObject:](nsmutableorderedset/add%28__%29.md): Appends a given object to the end of the mutable ordered set, if it is not already a member.
- [addObjects:count:](nsmutableorderedset/add%28__count_%29.md): Appends the given number of objects from a given C array to the end of the mutable ordered set.
- [addObjectsFromArray:](nsmutableorderedset/addobjects%28from_%29.md): Appends to the end of the mutable ordered set each object contained in a given array that is not already a member.
- [insertObject:atIndex:](nsmutableorderedset/insert%28__at_%29-7qg51.md): Inserts the given object at the specified index of the mutable ordered set, if it is not already a member.
- [setObject:atIndexedSubscript:](nsmutableorderedset/setobject_atindexedsubscript_.md): Replaces the given object at the specified index of the mutable ordered set.
- [insertObjects:atIndexes:](nsmutableorderedset/insert%28__at_%29-3ncnm.md): Inserts the objects in the array at the specified indexes.
- [removeObject:](nsmutableorderedset/remove%28__%29.md): Removes a given object from the mutable ordered set.
- [removeObjectAtIndex:](nsmutableorderedset/removeobject%28at_%29.md): Removes a the object at the specified index from the mutable ordered set.
- [removeObjectsAtIndexes:](nsmutableorderedset/removeobjects%28at_%29.md): Removes the objects at the specified indexes from the mutable ordered set.
- [removeObjectsInArray:](nsmutableorderedset/removeobjects%28in_%29-8h2kh.md): Removes the objects in the array from the mutable ordered set.
- [removeObjectsInRange:](nsmutableorderedset/removeobjects%28in_%29-9jkis.md): Removes from the mutable ordered set each of the objects within a given range.
- [removeAllObjects](nsmutableorderedset/removeallobjects%28%29.md): Removes all the objects from the mutable ordered set.
- [replaceObjectAtIndex:withObject:](nsmutableorderedset/replaceobject%28at_with_%29.md): Replaces the object at the specified index with the new object.
- [replaceObjectsAtIndexes:withObjects:](nsmutableorderedset/replaceobjects%28at_with_%29.md): Replaces the objects at the specified indexes with the new objects.
- [replaceObjectsInRange:withObjects:count:](nsmutableorderedset/replaceobjects%28in_with_count_%29.md): Replaces the objects in the receiving mutable ordered set at the range with the specified number of objects from a given C array.
- [setObject:atIndex:](nsmutableorderedset/setobject%28__at_%29.md): Appends or replaces the object at the specified index.
- [moveObjectsAtIndexes:toIndex:](nsmutableorderedset/moveobjects%28at_to_%29.md): Moves the objects at the specified indexes to the new location.
- [exchangeObjectAtIndex:withObjectAtIndex:](nsmutableorderedset/exchangeobject%28at_withobjectat_%29.md): Exchanges the object at the specified index with the object at the other index.
- [filterUsingPredicate:](nsmutableorderedset/filter%28using_%29.md): Evaluates a given predicate against the mutable ordered set’s content and leaves only objects that match.

### Sorting Entries

- [sortUsingDescriptors:](nsmutableorderedset/sort%28using_%29.md): Sorts the receiving ordered set using a given array of sort descriptors.
- [sortUsingComparator:](nsmutableorderedset/sort%28comparator_%29.md): Sorts the mutable ordered set using the comparison method specified by the comparator block.
- [sortWithOptions:usingComparator:](nsmutableorderedset/sort%28options_usingcomparator_%29.md): Sorts the mutable ordered set using the specified options and the comparison method specified by a given comparator block.
- [sortRange:options:usingComparator:](nsmutableorderedset/sortrange%28__options_usingcomparator_%29.md): Sorts the specified range of the mutable ordered set using the specified options and the comparison method specified by a given comparator block.

### Combining and Recombining Entries

- [intersectOrderedSet:](nsmutableorderedset/intersect%28__%29.md): Removes from the receiving ordered set each object that isn’t a member of another ordered set.
- [intersectSet:](nsmutableorderedset/intersectset%28__%29.md): Removes from the receiving ordered set each object that isn’t a member of another set.
- [minusOrderedSet:](nsmutableorderedset/minus%28__%29.md): Removes each object in another given ordered set from the receiving mutable ordered set, if present.
- [minusSet:](nsmutableorderedset/minusset%28__%29.md): Removes each object in another given set from the receiving mutable ordered set, if present.
- [unionOrderedSet:](nsmutableorderedset/union%28__%29.md): Adds each object in another given ordered set to the receiving mutable ordered set, if not present.
- [unionSet:](nsmutableorderedset/unionset%28__%29.md): Adds each object in another given set to the receiving mutable ordered set, if not present.

### Instance Methods

- [applyDifference:](nsmutableorderedset/applydifference_.md)
- [initWithCoder:](nsmutableorderedset/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSOrderedSet](nsorderedset.md)

## See Also

### Specialized Sets

- [NSCountedSet](nscountedset.md): A mutable, unordered collection of distinct objects that may appear more than once in the collection.
- [NSOrderedSet](nsorderedset.md): A static, ordered collection of unique objects.
