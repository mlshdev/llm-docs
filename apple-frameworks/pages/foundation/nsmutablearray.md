> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablearray](https://developer.apple.com/documentation/foundation/nsmutablearray)

# NSMutableArray (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dynamic ordered collection of objects.

## Declaration

```swift
class NSMutableArray
```

<a id="overview"></a>

## Overview

You can use this type in Swift instead of an [Array](https://developer.apple.com/documentation/swift/array) variable in cases that require reference semantics.

The `NSMutableArray` class declares the programmatic interface to objects that manage a modifiable array of objects. This class adds insertion and deletion operations to the basic array-handling behavior inherited from [NSArray](nsarray.md).

NSMutableArray is “toll-free bridged” with its Core Foundation counterpart, [CFMutableArray](../corefoundation/cfmutablearray.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information.

<a id="Accessing-Values-Using-Subscripting"></a>

### Accessing Values Using Subscripting

In addition to the provided instance methods, such as [replaceObject(at:with:)](nsmutablearray/replaceobject%28at_with_%29.md), you can access `NSArray` values by their indexes using *subscripting*.

**Swift**

```swift
mutableArray[3] = "someValue"
```

**Objective-C**

```objc
mutableArray[3] = @"someValue";
```

<a id="Subclassing-Notes"></a>

### Subclassing Notes

There is typically little reason to subclass `NSMutableArray`. The class does well what it is designed to do—maintain a mutable, ordered collection of objects. But there are situations where a custom `NSArray` object might come in handy. Here are a few possibilities:

- Changing how `NSMutableArray` stores the elements of its collection. You might do this for performance reasons or for better compatibility with legacy code.
- Acquiring more information about what is happening to the collection (for example, statistics gathering).

<a id="Methods-to-Override"></a>

#### Methods to Override

`NSMutableArray` defines five primitive methods:

- [insert(\_:at:)](nsmutablearray/insert%28__at_%29-5dbx5.md)
- [removeObject(at:)](nsmutablearray/removeobject%28at_%29.md)
- [add(\_:)](nsmutablearray/add%28__%29.md)
- [removeLastObject()](nsmutablearray/removelastobject%28%29.md)
- [replaceObject(at:with:)](nsmutablearray/replaceobject%28at_with_%29.md)

In a subclass, you must override all these methods. You must also override the primitive methods of the [NSArray](nsarray.md) class.

## Topics

### Creating and Initializing a Mutable Array

- [init(contentsOfURL:)](nsmutablearray/init%28contentsofurl_%29.md): Creates and returns a mutable array containing the contents specified by a given URL.
- [init()](nsmutablearray/init%28%29.md): Initializes a newly allocated array.
- [init(capacity:)](nsmutablearray/init%28capacity_%29.md): Returns an array, initialized with enough memory to initially hold a given number of objects.

### Adding Objects

- [add(\_:)](nsmutablearray/add%28__%29.md): Inserts a given object at the end of the array.
- [addObjects(from:)](nsmutablearray/addobjects%28from_%29.md): Adds the objects contained in another given array to the end of the receiving array’s content.
- [insert(\_:at:)](nsmutablearray/insert%28__at_%29-5dbx5.md): Inserts a given object into the array’s contents at a given index.
- [insert(\_:at:)](nsmutablearray/insert%28__at_%29-73pln.md): Inserts the objects in the provided array into the receiving array at the specified indexes.

### Removing Objects

- [removeAllObjects()](nsmutablearray/removeallobjects%28%29.md): Empties the array of all its elements.
- [removeLastObject()](nsmutablearray/removelastobject%28%29.md): Removes the object with the highest-valued index in the array
- [remove(\_:)](nsmutablearray/remove%28__%29.md): Removes all occurrences in the array of a given object.
- [remove(\_:in:)](nsmutablearray/remove%28__in_%29.md): Removes all occurrences within a specified range in the array of a given object.
- [removeObject(at:)](nsmutablearray/removeobject%28at_%29.md): Removes the object at `index` .
- [removeObjects(at:)](nsmutablearray/removeobjects%28at_%29.md): Removes the objects at the specified indexes from the array.
- [removeObject(identicalTo:)](nsmutablearray/removeobject%28identicalto_%29.md): Removes all occurrences of a given object in the array.
- [removeObject(identicalTo:in:)](nsmutablearray/removeobject%28identicalto_in_%29.md): Removes all occurrences of `anObject` within the specified range in the array.
- [removeObjects(fromIndices:numIndices:)](nsmutablearray/removeobjects%28fromindices_numindices_%29.md): Deprecated. Removes the specified number of objects from the array, beginning at the specified index.
- [removeObjects(in:)](nsmutablearray/removeobjects%28in_%29-4yb26.md): Removes from the receiving array the objects in another given array.
- [removeObjects(in:)](nsmutablearray/removeobjects%28in_%29-1udmn.md): Removes from the array each of the objects within a given range.

### Replacing Objects

- [replaceObject(at:with:)](nsmutablearray/replaceobject%28at_with_%29.md): Replaces the object at `index` with `anObject`.
- [replaceObjects(at:with:)](nsmutablearray/replaceobjects%28at_with_%29.md): Replaces the objects in the receiving array at locations specified with the objects from a given array.
- [replaceObjects(in:withObjectsFrom:range:)](nsmutablearray/replaceobjects%28in_withobjectsfrom_range_%29.md): Replaces the objects in the receiving array specified by one given range with the objects in another array specified by another range.
- [replaceObjects(in:withObjectsFrom:)](nsmutablearray/replaceobjects%28in_withobjectsfrom_%29.md): Replaces the objects in the receiving array specified by a given range with all of the objects from a given array.
- [setArray(\_:)](nsmutablearray/setarray%28__%29.md): Sets the receiving array’s elements to those in another given array.

### Filtering Content

- [filter(using:)](nsmutablearray/filter%28using_%29.md): Evaluates a given predicate against the array’s content and leaves only objects that match.

### Rearranging Content

- [exchangeObject(at:withObjectAt:)](nsmutablearray/exchangeobject%28at_withobjectat_%29.md): Exchanges the objects in the array at given indexes.
- [sort(using:)](nsmutablearray/sort%28using_%29-4eh07.md): Sorts the receiver using a given array of sort descriptors.
- [sort(comparator:)](nsmutablearray/sort%28comparator_%29.md): Sorts the receiver in ascending order using the comparison method specified by a given [Comparator](comparator.md) block.
- [sort(options:usingComparator:)](nsmutablearray/sort%28options_usingcomparator_%29.md): Sorts the receiver in ascending order using the specified options and the comparison method specified by a given [Comparator](comparator.md) block.
- [sort(\_:context:)](nsmutablearray/sort%28__context_%29.md): Sorts the receiver in ascending order as defined by the comparison function `compare`.
- [sort(using:)](nsmutablearray/sort%28using_%29-537vs.md): Sorts the receiver in ascending order, as determined by the comparison method specified by a given selector.

### Initializers

- [init(coder:)](nsmutablearray/init%28coder_%29.md)
- [init(objects:count:)](nsmutablearray/init%28objects_count_%29.md)

### Default Implementations

- [NSMutableArray Implementations](nsmutablearray/nsmutablearray-implementations.md)

## Relationships

### Inherits From

- [NSArray](nsarray.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
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

# NSMutableArray (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dynamic ordered collection of objects.

## Declaration

```objectivec
@interface NSMutableArray : NSArray
```

<a id="overview"></a>

## Overview

You can use this type in Swift instead of an [Array](https://developer.apple.com/documentation/swift/array) variable in cases that require reference semantics.

The `NSMutableArray` class declares the programmatic interface to objects that manage a modifiable array of objects. This class adds insertion and deletion operations to the basic array-handling behavior inherited from [NSArray](nsarray.md).

NSMutableArray is “toll-free bridged” with its Core Foundation counterpart, [CFMutableArrayRef](../corefoundation/cfmutablearray.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information.

<a id="Accessing-Values-Using-Subscripting"></a>

### Accessing Values Using Subscripting

In addition to the provided instance methods, such as [replaceObjectAtIndex:withObject:](nsmutablearray/replaceobject%28at_with_%29.md), you can access `NSArray` values by their indexes using *subscripting*.

**Swift**

```swift
mutableArray[3] = "someValue"
```

**Objective-C**

```objc
mutableArray[3] = @"someValue";
```

<a id="Subclassing-Notes"></a>

### Subclassing Notes

There is typically little reason to subclass `NSMutableArray`. The class does well what it is designed to do—maintain a mutable, ordered collection of objects. But there are situations where a custom `NSArray` object might come in handy. Here are a few possibilities:

- Changing how `NSMutableArray` stores the elements of its collection. You might do this for performance reasons or for better compatibility with legacy code.
- Acquiring more information about what is happening to the collection (for example, statistics gathering).

<a id="Methods-to-Override"></a>

#### Methods to Override

`NSMutableArray` defines five primitive methods:

- [insertObject:atIndex:](nsmutablearray/insert%28__at_%29-5dbx5.md)
- [removeObjectAtIndex:](nsmutablearray/removeobject%28at_%29.md)
- [addObject:](nsmutablearray/add%28__%29.md)
- [removeLastObject](nsmutablearray/removelastobject%28%29.md)
- [replaceObjectAtIndex:withObject:](nsmutablearray/replaceobject%28at_with_%29.md)

In a subclass, you must override all these methods. You must also override the primitive methods of the [NSArray](nsarray.md) class.

## Topics

### Creating and Initializing a Mutable Array

- [arrayWithCapacity:](nsmutablearray/arraywithcapacity_.md): Creates and returns an `NSMutableArray` object with enough allocated memory to initially hold a given number of objects.
- [arrayWithContentsOfFile:](nsmutablearray/arraywithcontentsoffile_.md): Creates and returns a mutable array containing the contents of the file specified by the given path.
- [init](nsmutablearray/init%28%29.md): Initializes a newly allocated array.
- [initWithCapacity:](nsmutablearray/init%28capacity_%29.md): Returns an array, initialized with enough memory to initially hold a given number of objects.
- [initWithContentsOfFile:](nsmutablearray/initwithcontentsoffile_.md): Initializes a newly allocated mutable array with the contents of the file specified by a given path
- [initWithContentsOfURL:](nsmutablearray/initwithcontentsofurl_.md): Initialized a newly allocated mutable array with the contents of the location specified by a given URL.

### Adding Objects

- [addObject:](nsmutablearray/add%28__%29.md): Inserts a given object at the end of the array.
- [addObjectsFromArray:](nsmutablearray/addobjects%28from_%29.md): Adds the objects contained in another given array to the end of the receiving array’s content.
- [insertObject:atIndex:](nsmutablearray/insert%28__at_%29-5dbx5.md): Inserts a given object into the array’s contents at a given index.
- [insertObjects:atIndexes:](nsmutablearray/insert%28__at_%29-73pln.md): Inserts the objects in the provided array into the receiving array at the specified indexes.

### Removing Objects

- [removeAllObjects](nsmutablearray/removeallobjects%28%29.md): Empties the array of all its elements.
- [removeLastObject](nsmutablearray/removelastobject%28%29.md): Removes the object with the highest-valued index in the array
- [removeObject:](nsmutablearray/remove%28__%29.md): Removes all occurrences in the array of a given object.
- [removeObject:inRange:](nsmutablearray/remove%28__in_%29.md): Removes all occurrences within a specified range in the array of a given object.
- [removeObjectAtIndex:](nsmutablearray/removeobject%28at_%29.md): Removes the object at `index` .
- [removeObjectsAtIndexes:](nsmutablearray/removeobjects%28at_%29.md): Removes the objects at the specified indexes from the array.
- [removeObjectIdenticalTo:](nsmutablearray/removeobject%28identicalto_%29.md): Removes all occurrences of a given object in the array.
- [removeObjectIdenticalTo:inRange:](nsmutablearray/removeobject%28identicalto_in_%29.md): Removes all occurrences of `anObject` within the specified range in the array.
- [removeObjectsFromIndices:numIndices:](nsmutablearray/removeobjects%28fromindices_numindices_%29.md): Deprecated. Removes the specified number of objects from the array, beginning at the specified index.
- [removeObjectsInArray:](nsmutablearray/removeobjects%28in_%29-4yb26.md): Removes from the receiving array the objects in another given array.
- [removeObjectsInRange:](nsmutablearray/removeobjects%28in_%29-1udmn.md): Removes from the array each of the objects within a given range.

### Replacing Objects

- [replaceObjectAtIndex:withObject:](nsmutablearray/replaceobject%28at_with_%29.md): Replaces the object at `index` with `anObject`.
- [setObject:atIndexedSubscript:](nsmutablearray/setobject_atindexedsubscript_.md): Replaces the object at the index with the new object, possibly adding the object.
- [replaceObjectsAtIndexes:withObjects:](nsmutablearray/replaceobjects%28at_with_%29.md): Replaces the objects in the receiving array at locations specified with the objects from a given array.
- [replaceObjectsInRange:withObjectsFromArray:range:](nsmutablearray/replaceobjects%28in_withobjectsfrom_range_%29.md): Replaces the objects in the receiving array specified by one given range with the objects in another array specified by another range.
- [replaceObjectsInRange:withObjectsFromArray:](nsmutablearray/replaceobjects%28in_withobjectsfrom_%29.md): Replaces the objects in the receiving array specified by a given range with all of the objects from a given array.
- [setArray:](nsmutablearray/setarray%28__%29.md): Sets the receiving array’s elements to those in another given array.

### Filtering Content

- [filterUsingPredicate:](nsmutablearray/filter%28using_%29.md): Evaluates a given predicate against the array’s content and leaves only objects that match.

### Rearranging Content

- [exchangeObjectAtIndex:withObjectAtIndex:](nsmutablearray/exchangeobject%28at_withobjectat_%29.md): Exchanges the objects in the array at given indexes.
- [sortUsingDescriptors:](nsmutablearray/sort%28using_%29-4eh07.md): Sorts the receiver using a given array of sort descriptors.
- [sortUsingComparator:](nsmutablearray/sort%28comparator_%29.md): Sorts the receiver in ascending order using the comparison method specified by a given [NSComparator](comparator.md) block.
- [sortWithOptions:usingComparator:](nsmutablearray/sort%28options_usingcomparator_%29.md): Sorts the receiver in ascending order using the specified options and the comparison method specified by a given [NSComparator](comparator.md) block.
- [sortUsingFunction:context:](nsmutablearray/sort%28__context_%29.md): Sorts the receiver in ascending order as defined by the comparison function `compare`.
- [sortUsingSelector:](nsmutablearray/sort%28using_%29-537vs.md): Sorts the receiver in ascending order, as determined by the comparison method specified by a given selector.

### Instance Methods

- [applyDifference:](nsmutablearray/applydifference_.md)
- [initWithCoder:](nsmutablearray/init%28coder_%29.md)

### Type Methods

- [arrayWithContentsOfURL:](nsmutablearray/arraywithcontentsofurl_.md): Creates and returns a mutable array containing the contents specified by a given URL.

## Relationships

### Inherits From

- [NSArray](nsarray.md)

## See Also

### Basic Collections

- [NSArray](nsarray.md): A static ordered collection of objects.
- [NSDictionary](nsdictionary.md): A static collection of objects associated with unique keys.
- [NSMutableDictionary](nsmutabledictionary.md): A dynamic collection of objects associated with unique keys.
- [NSSet](nsset.md): A static, unordered collection of unique objects.
- [NSMutableSet](nsmutableset.md): A dynamic unordered collection of unique objects.
