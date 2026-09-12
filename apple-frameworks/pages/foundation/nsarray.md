> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray](https://developer.apple.com/documentation/foundation/nsarray)

# NSArray (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A static ordered collection of objects.

## Declaration

```swift
class NSArray
```

## Mentioned In

- [Implementing Handoff in Your App](implementing-handoff-in-your-app.md)

<a id="overview"></a>

## Overview

You can use this type in Swift instead of an [Array](https://developer.apple.com/documentation/swift/array) constant in cases that require reference semantics.

`NSArray` and its subclass [NSMutableArray](nsmutablearray.md) manage ordered collections of objects called **arrays**. `NSArray` creates static arrays, and `NSMutableArray` creates dynamic arrays. You can use arrays when you need an ordered collection of objects.

`NSArray` is “toll-free bridged” with its Core Foundation counterpart, [CFArray](../corefoundation/cfarray.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information on toll-free bridging.

<a id="Creating-NSArray-Objects-Using-Array-Literals"></a>

### Creating NSArray Objects Using Array Literals

In addition to the provided initializers, such as [initWithObjects:](nsarray/initwithobjects_.md), you can create an `NSArray` object using an *array literal*.

**Swift**

```swift
let array: NSArray = [someObject, "Hello, World!", 42]
```

**Objective-C**

```objc
NSArray *array = @[someObject, @"Hello, World!", @42];
```

In Objective-C, the compiler generates code that makes an underlying call to the [init(objects:count:)](nsarray/init%28objects_count_%29-7dct1.md) method.

```objc
id objects[] = { someObject, @"Hello, World!", @42 };
NSUInteger count = sizeof(objects) / sizeof(id);
NSArray *array = [NSArray arrayWithObjects:objects
                                     count:count];
```

You should not terminate the list of objects with `nil` when using this literal syntax, and in fact `nil` is an invalid value. For more information about object literals in Objective-C, see [Working with Objects](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/WorkingwithObjects/WorkingwithObjects.html#//apple_ref/doc/uid/TP40011210-CH4) in [Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html#//apple_ref/doc/uid/TP40011210).

In Swift, the `NSArray` class conforms to the `ArrayLiteralConvertible` protocol, which allows it to be initialized with array literals. For more information about object literals in Swift, see [Literal Expression](https://developer.apple.com/library/archive/documentation/Swift/Conceptual/Swift_Programming_Language/Expressions.html#//apple_ref/doc/uid/TP40014097-CH32-ID390) in [The Swift Programming Language (Swift 4.1)](https://developer.apple.com/library/archive/documentation/Swift/Conceptual/Swift_Programming_Language/index.html#//apple_ref/doc/uid/TP40014097).

<a id="Accessing-Values-Using-Subscripting"></a>

### Accessing Values Using Subscripting

In addition to the provided instance methods, such as [object(at:)](nsarray/object%28at_%29.md), you can access `NSArray` values by their indexes using *subscripting*.

**Swift**

```swift
let value = array[3]
```

**Objective-C**

```objc
id value = array[3];
```

<a id="Subclassing-Notes"></a>

### Subclassing Notes

There is typically little reason to subclass `NSArray`. The class does well what it is designed to do—maintain an ordered collection of objects. But there are situations where a custom `NSArray` object might come in handy. Here are a few possibilities:

- Changing how `NSArray` stores the elements of its collection. You might do this for performance reasons or for better compatibility with legacy code.
- Acquiring more information about what is happening to the collection (for example, statistics gathering).

<a id="Methods-to-Override"></a>

#### Methods to Override

Any subclass of `NSArray`    *must* override the primitive instance methods [count](nsarray/count.md) and [object(at:)](nsarray/object%28at_%29.md). These methods must operate on the backing store that you provide for the elements of the collection. For this backing store you can use a static array, a standard `NSArray` object, or some other data type or mechanism. You may also choose to override, partially or fully, any other `NSArray` method for which you want to provide an alternative implementation.

You might want to implement an initializer for your subclass that is suited to the backing store that the subclass is managing. If you do, your initializer must invoke one of the designated initializers of the `NSArray` class, either [init()](nsarray/init%28%29.md) or [init(objects:count:)](nsarray/init%28objects_count_%29-5odxv.md). The `NSArray` class adopts the [NSCopying](nscopying.md), [NSMutableCopying](nsmutablecopying.md), and [NSCoding](nscoding.md) protocols; custom subclasses of `NSArray` should override the methods in these protocols as necessary.

Remember that `NSArray` is the public interface for a class cluster and what this entails for your subclass. You must provide the storage for your subclass and implement the primitive methods that directly act on that storage.

<a id="Alternatives-to-Subclassing"></a>

#### Alternatives to Subclassing

Before making a custom subclass of `NSArray`, investigate [NSPointerArray](nspointerarray.md) and the corresponding Core Foundation type, [CFArray](../corefoundation/cfarray.md). Because `NSArray` and `CFArray` are “toll-free bridged,” you can substitute a `CFArray` object for a `NSArray` object in your code (with appropriate casting). Although they are corresponding types, `CFArray` and `NSArray` do not have identical interfaces or implementations, and you can sometimes do things with `CFArray` that you cannot easily do with `NSArray`. For example, `CFArray` provides a set of callbacks, some of which are for implementing custom retain-release behavior. If you specify `NULL` implementations for these callbacks, you can easily get a non-retaining array.

If the behavior you want to add supplements that of the existing class, you could write a category on `NSArray`. Keep in mind, however, that this category will be in effect for all instances of `NSArray` that you use, and this might have unintended consequences. Alternatively, you could use composition to achieve the desired behavior.

## Topics

### Creating an Array

- [init(object:)](nsarray/init%28object_%29.md): Creates and returns an array containing a given object.
- [init(objects:count:)](nsarray/init%28objects_count_%29-7dct1.md): Creates and returns an array that includes a given number of objects from a given C array.

### Initializing an Array

- [init()](nsarray/init%28%29.md): Initializes a newly allocated array.
- [init(array:)](nsarray/init%28array_%29-o72h.md): Initializes a newly allocated array by placing in it the objects contained in a given array.
- [init(array:copyItems:)](nsarray/init%28array_copyitems_%29.md): Initializes a newly allocated array using `anArray` as the source of data objects for the array.
- [init(contentsOfFile:)](nsarray/init%28contentsoffile_%29.md): Deprecated. Initializes a newly allocated array with the contents of the file specified by a given path.
- [init(objects:count:)](nsarray/init%28objects_count_%29-5odxv.md): Initializes a newly allocated array to include a given number of objects from a given C array.

### Querying an Array

- [contains(\_:)](nsarray/contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the array.
- [count](nsarray/count.md): The number of objects in the array.
- [firstObject](nsarray/firstobject.md): The first object in the array.
- [lastObject](nsarray/lastobject.md): The last object in the array.
- [object(at:)](nsarray/object%28at_%29.md): Returns the object located at the specified index.
- [subscript(\_:)](nsarray/subscript%28__%29.md): Returns the object at the specified index.
- [objects(at:)](nsarray/objects%28at_%29.md): Returns an array containing the objects in the array at the indexes specified by a given index set.
- [objectEnumerator()](nsarray/objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the array.
- [reverseObjectEnumerator()](nsarray/reverseobjectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the array, in reverse order.

### Finding Objects in an Array

- [index(of:)](nsarray/index%28of_%29.md): Returns the lowest index whose corresponding array value is equal to a given object.
- [index(of:in:)](nsarray/index%28of_in_%29.md): Returns the lowest index within a specified range whose corresponding array value is equal to a given object .
- [indexOfObjectIdentical(to:)](nsarray/indexofobjectidentical%28to_%29.md): Returns the lowest index whose corresponding array value is identical to a given object.
- [indexOfObjectIdentical(to:in:)](nsarray/indexofobjectidentical%28to_in_%29.md): Returns the lowest index within a specified range whose corresponding array value is equal to a given object .
- [indexOfObject(passingTest:)](nsarray/indexofobject%28passingtest_%29.md): Returns the index of the first object in the array that passes a test in a given block.
- [indexOfObject(options:passingTest:)](nsarray/indexofobject%28options_passingtest_%29.md): Returns the index of an object in the array that passes a test in a given block for a given set of enumeration options.
- [indexOfObject(at:options:passingTest:)](nsarray/indexofobject%28at_options_passingtest_%29.md): Returns the index, from a given set of indexes, of the first object in the array that passes a test in a given block for a given set of enumeration options.
- [indexesOfObjects(passingTest:)](nsarray/indexesofobjects%28passingtest_%29.md): Returns the indexes of objects in the array that pass a test in a given block.
- [indexesOfObjects(options:passingTest:)](nsarray/indexesofobjects%28options_passingtest_%29.md): Returns the indexes of objects in the array that pass a test in a given block for a given set of enumeration options.
- [indexesOfObjects(at:options:passingTest:)](nsarray/indexesofobjects%28at_options_passingtest_%29.md): Returns the indexes, from a given set of indexes, of objects in the array that pass a test in a given block for a given set of enumeration options.
- [index(of:inSortedRange:options:usingComparator:)](nsarray/index%28of_insortedrange_options_usingcomparator_%29.md): Returns the index, within a specified range, of an object compared with elements in the array using a given `NSComparator` block.

### Sending Messages to Elements

- [enumerateObjects(\_:)](nsarray/enumerateobjects%28__%29.md): Executes a given closure or block using each object in the array, starting with the first object and continuing through the array to the last object.
- [enumerateObjects(options:using:)](nsarray/enumerateobjects%28options_using_%29.md): Executes a given closure or block using each object in the array with the specified options.
- [enumerateObjects(at:options:using:)](nsarray/enumerateobjects%28at_options_using_%29.md): Executes a given block using the objects in the array at the specified indexes.

### Comparing Arrays

- [firstObjectCommon(with:)](nsarray/firstobjectcommon%28with_%29.md): Returns the first object contained in the receiving array that’s equal to an object in another given array.
- [isEqual(to:)](nsarray/isequal%28to_%29.md): Compares the receiving array to another array.

### Deriving New Arrays

- [adding(\_:)](nsarray/adding%28__%29.md): Returns a new array that is a copy of the receiving array with a given object added to the end.
- [addingObjects(from:)](nsarray/addingobjects%28from_%29.md): Returns a new array that is a copy of the receiving array with the objects contained in another array added to the end.
- [filtered(using:)](nsarray/filtered%28using_%29.md): Evaluates a given predicate against each object in the receiving array and returns a new array containing the objects for which the predicate returns true.
- [subarray(with:)](nsarray/subarray%28with_%29.md): Returns a new array containing the receiving array’s elements that fall within the limits specified by a given range.

### Sorting

- [sortedArrayHint](nsarray/sortedarrayhint.md): Analyzes the array and returns a “hint” that speeds the sorting of the array when the hint is supplied to [sortedArray(\_:context:hint:)](nsarray/sortedarray%28__context_hint_%29.md).
- [sortedArray(\_:context:)](nsarray/sortedarray%28__context_%29.md): Returns a new array that lists the receiving array’s elements in ascending order as defined by the comparison function `comparator`.
- [sortedArray(\_:context:hint:)](nsarray/sortedarray%28__context_hint_%29.md): Returns a new array that lists the receiving array’s elements in ascending order as defined by the comparison function `comparator`.
- [sortedArray(using:)](nsarray/sortedarray%28using_%29-82wi1.md): Returns a copy of the receiving array sorted as specified by a given array of sort descriptors.
- [sortedArray(using:)](nsarray/sortedarray%28using_%29-9nhh9.md): Returns an array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by a given selector.
- [sortedArray(comparator:)](nsarray/sortedarray%28comparator_%29.md): Returns an array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by a given `NSComparator` block.
- [sortedArray(options:usingComparator:)](nsarray/sortedarray%28options_usingcomparator_%29.md): Returns an array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by a given `NSComparator` block.
- [Comparator](comparator.md): Defines the signature for a block object used for comparison operations.

### Working with String Elements

- [componentsJoined(by:)](nsarray/componentsjoined%28by_%29.md): Constructs and returns an `NSString` object that is the result of interposing a given separator between the elements of the array.

### Creating a Description

- [description](nsarray/description.md): A string that represents the contents of the array, formatted as a property list.
- [description(withLocale:)](nsarray/description%28withlocale_%29.md): Returns a string that represents the contents of the array, formatted as a property list.
- [description(withLocale:indent:)](nsarray/description%28withlocale_indent_%29.md): Returns a string that represents the contents of the array, formatted as a property list.

### Storing Arrays

- [write(toFile:atomically:)](nsarray/write%28tofile_atomically_%29.md): Deprecated. Writes the contents of the array to a file at a given path.
- [write(to:atomically:)](nsarray/write%28to_atomically_%29.md): Deprecated. Writes the contents of the array to the location specified by a given URL.

### Collecting Paths

- [pathsMatchingExtensions(\_:)](nsarray/pathsmatchingextensions%28__%29.md): Returns an array containing all the pathname elements in the receiving array that have filename extensions from a given array.

### Key-Value Observing

- [addObserver(\_:forKeyPath:options:context:)](nsarray/addobserver%28__forkeypath_options_context_%29.md): Raises an exception.
- [removeObserver(\_:forKeyPath:)](nsarray/removeobserver%28__forkeypath_%29.md): Raises an exception.
- [removeObserver(\_:forKeyPath:context:)](nsarray/removeobserver%28__forkeypath_context_%29.md): Raises an exception.
- [removeObserver(\_:fromObjectsAt:forKeyPath:context:)](nsarray/removeobserver%28__fromobjectsat_forkeypath_context_%29.md): Raises an exception.
- [addObserver(\_:toObjectsAt:forKeyPath:options:context:)](nsarray/addobserver%28__toobjectsat_forkeypath_options_context_%29.md): Registers an observer to receive key value observer notifications for the specified key-path relative to the objects at the indexes.
- [removeObserver(\_:fromObjectsAt:forKeyPath:)](nsarray/removeobserver%28__fromobjectsat_forkeypath_%29.md): Removes `anObserver` from all key value observer notifications associated with the specified `keyPath` relative to the array’s objects at `indexes`.

### Key-Value Coding

- [setValue(\_:forKey:)](nsarray/setvalue%28__forkey_%29.md): Invokes [setValue(\_:forKey:)](nsarray/setvalue%28__forkey_%29.md) on each of the array’s items using the specified `value` and `key`.
- [value(forKey:)](nsarray/value%28forkey_%29.md): Returns an array containing the results of invoking [value(forKey:)](nsarray/value%28forkey_%29.md) using `key` on each of the array’s objects.

### Randomly Shuffling an Array

- [shuffled()](nsarray/shuffled%28%29.md): Returns a new array that lists this array’s elements in a random order.
- [shuffled(using:)](nsarray/shuffled%28using_%29.md): Returns a new array that lists this array’s elements in a random order, using the specified random source.

### Comparing with Another Array

- [NSOrderedCollectionDifference](nsorderedcollectiondifference.md): An object representing the difference between two ordered collections.
- [NSOrderedCollectionDifferenceCalculationOptions](nsorderedcollectiondifferencecalculationoptions.md): Constants that specify the options to use when creating an ordered collection difference.

### New Methods

- [init(coder:)](nsarray/init%28coder_%29.md)

### Constants

- [NSBinarySearchingOptions](nsbinarysearchingoptions.md): Options for searches and insertions using [index(of:inSortedRange:options:usingComparator:)](nsarray/index%28of_insortedrange_options_usingcomparator_%29.md).

### Initializers

- [init(array:)](nsarray/init%28array_%29-9rh7.md): Initializes a newly allocated array by placing in it the objects contained in a given array.
- [init(contentsOf:)](nsarray/init%28contentsof_%29.md): Deprecated. Initializes a newly allocated array with the contents of the location specified by a given URL.
- [init(contentsOf:error:)](nsarray/init%28contentsof_error_%29.md)
- [init(objects:)](nsarray/init%28objects_%29.md)

### Instance Methods

- [write(to:)](nsarray/write%28to_%29.md)

### Default Implementations

- [ExpressibleByArrayLiteral Implementations](nsarray/expressiblebyarrayliteral-implementations.md)
- [NSArray Implementations](nsarray/nsarray-implementations.md)
- [Sequence Implementations](nsarray/sequence-implementations.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSMutableArray](nsmutablearray.md)

### Conforms To

- [CKRecordValue](../cloudkit/ckrecordvalue-c.protocol.md)
- [CKRecordValueProtocol](../cloudkit/ckrecordvalueprotocol.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSFastEnumeration](nsfastenumeration.md)
- [NSMutableCopying](nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

# NSArray (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A static ordered collection of objects.

## Declaration

```objectivec
@interface NSArray : NSObject
```

## Mentioned In

- [Implementing Handoff in Your App](implementing-handoff-in-your-app.md)

<a id="overview"></a>

## Overview

You can use this type in Swift instead of an [Array](https://developer.apple.com/documentation/swift/array) constant in cases that require reference semantics.

`NSArray` and its subclass [NSMutableArray](nsmutablearray.md) manage ordered collections of objects called **arrays**. `NSArray` creates static arrays, and `NSMutableArray` creates dynamic arrays. You can use arrays when you need an ordered collection of objects.

`NSArray` is “toll-free bridged” with its Core Foundation counterpart, [CFArrayRef](../corefoundation/cfarray.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information on toll-free bridging.

<a id="Creating-NSArray-Objects-Using-Array-Literals"></a>

### Creating NSArray Objects Using Array Literals

In addition to the provided initializers, such as [initWithObjects:](nsarray/initwithobjects_.md), you can create an `NSArray` object using an *array literal*.

**Swift**

```swift
let array: NSArray = [someObject, "Hello, World!", 42]
```

**Objective-C**

```objc
NSArray *array = @[someObject, @"Hello, World!", @42];
```

In Objective-C, the compiler generates code that makes an underlying call to the [arrayWithObjects:count:](nsarray/init%28objects_count_%29-7dct1.md) method.

```objc
id objects[] = { someObject, @"Hello, World!", @42 };
NSUInteger count = sizeof(objects) / sizeof(id);
NSArray *array = [NSArray arrayWithObjects:objects
                                     count:count];
```

You should not terminate the list of objects with `nil` when using this literal syntax, and in fact `nil` is an invalid value. For more information about object literals in Objective-C, see [Working with Objects](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/WorkingwithObjects/WorkingwithObjects.html#//apple_ref/doc/uid/TP40011210-CH4) in [Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html#//apple_ref/doc/uid/TP40011210).

In Swift, the `NSArray` class conforms to the `ArrayLiteralConvertible` protocol, which allows it to be initialized with array literals. For more information about object literals in Swift, see [Literal Expression](https://developer.apple.com/library/archive/documentation/Swift/Conceptual/Swift_Programming_Language/Expressions.html#//apple_ref/doc/uid/TP40014097-CH32-ID390) in [The Swift Programming Language (Swift 4.1)](https://developer.apple.com/library/archive/documentation/Swift/Conceptual/Swift_Programming_Language/index.html#//apple_ref/doc/uid/TP40014097).

<a id="Accessing-Values-Using-Subscripting"></a>

### Accessing Values Using Subscripting

In addition to the provided instance methods, such as [objectAtIndex:](nsarray/object%28at_%29.md), you can access `NSArray` values by their indexes using *subscripting*.

**Swift**

```swift
let value = array[3]
```

**Objective-C**

```objc
id value = array[3];
```

<a id="Subclassing-Notes"></a>

### Subclassing Notes

There is typically little reason to subclass `NSArray`. The class does well what it is designed to do—maintain an ordered collection of objects. But there are situations where a custom `NSArray` object might come in handy. Here are a few possibilities:

- Changing how `NSArray` stores the elements of its collection. You might do this for performance reasons or for better compatibility with legacy code.
- Acquiring more information about what is happening to the collection (for example, statistics gathering).

<a id="Methods-to-Override"></a>

#### Methods to Override

Any subclass of `NSArray`    *must* override the primitive instance methods [count](nsarray/count.md) and [objectAtIndex:](nsarray/object%28at_%29.md). These methods must operate on the backing store that you provide for the elements of the collection. For this backing store you can use a static array, a standard `NSArray` object, or some other data type or mechanism. You may also choose to override, partially or fully, any other `NSArray` method for which you want to provide an alternative implementation.

You might want to implement an initializer for your subclass that is suited to the backing store that the subclass is managing. If you do, your initializer must invoke one of the designated initializers of the `NSArray` class, either [init](nsarray/init%28%29.md) or [initWithObjects:count:](nsarray/init%28objects_count_%29-5odxv.md). The `NSArray` class adopts the [NSCopying](nscopying.md), [NSMutableCopying](nsmutablecopying.md), and [NSCoding](nscoding.md) protocols; custom subclasses of `NSArray` should override the methods in these protocols as necessary.

Remember that `NSArray` is the public interface for a class cluster and what this entails for your subclass. You must provide the storage for your subclass and implement the primitive methods that directly act on that storage.

<a id="Alternatives-to-Subclassing"></a>

#### Alternatives to Subclassing

Before making a custom subclass of `NSArray`, investigate [NSPointerArray](nspointerarray.md) and the corresponding Core Foundation type, [CFArrayRef](../corefoundation/cfarray.md). Because `NSArray` and `CFArray` are “toll-free bridged,” you can substitute a `CFArray` object for a `NSArray` object in your code (with appropriate casting). Although they are corresponding types, `CFArray` and `NSArray` do not have identical interfaces or implementations, and you can sometimes do things with `CFArray` that you cannot easily do with `NSArray`. For example, `CFArray` provides a set of callbacks, some of which are for implementing custom retain-release behavior. If you specify `NULL` implementations for these callbacks, you can easily get a non-retaining array.

If the behavior you want to add supplements that of the existing class, you could write a category on `NSArray`. Keep in mind, however, that this category will be in effect for all instances of `NSArray` that you use, and this might have unintended consequences. Alternatively, you could use composition to achieve the desired behavior.

## Topics

### Creating an Array

- [array](nsarray/array.md): Creates and returns an empty array.
- [arrayWithArray:](nsarray/arraywitharray_.md): Creates and returns an array containing the objects in another given array.
- [arrayWithContentsOfFile:](nsarray/arraywithcontentsoffile_.md): Deprecated. Creates and returns an array containing the contents of the file specified by a given path.
- [arrayWithObject:](nsarray/init%28object_%29.md): Creates and returns an array containing a given object.
- [arrayWithObjects:](nsarray/arraywithobjects_.md): Creates and returns an array containing the objects in the argument list.
- [arrayWithObjects:count:](nsarray/init%28objects_count_%29-7dct1.md): Creates and returns an array that includes a given number of objects from a given C array.

### Initializing an Array

- [init](nsarray/init%28%29.md): Initializes a newly allocated array.
- [initWithArray:](nsarray/init%28array_%29-o72h.md): Initializes a newly allocated array by placing in it the objects contained in a given array.
- [initWithArray:copyItems:](nsarray/init%28array_copyitems_%29.md): Initializes a newly allocated array using `anArray` as the source of data objects for the array.
- [initWithContentsOfFile:](nsarray/init%28contentsoffile_%29.md): Deprecated. Initializes a newly allocated array with the contents of the file specified by a given path.
- [initWithObjects:](nsarray/initwithobjects_.md): Initializes a newly allocated array by placing in it the objects in the argument list.
- [initWithObjects:count:](nsarray/init%28objects_count_%29-5odxv.md): Initializes a newly allocated array to include a given number of objects from a given C array.

### Querying an Array

- [containsObject:](nsarray/contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the array.
- [count](nsarray/count.md): The number of objects in the array.
- [getObjects:](nsarray/getobjects_.md): Deprecated. Copies all the objects contained in the array to `aBuffer`.
- [getObjects:range:](nsarray/getobjects_range_.md): Copies references to objects contained in the array that fall within the specified range to `aBuffer`.
- [firstObject](nsarray/firstobject.md): The first object in the array.
- [lastObject](nsarray/lastobject.md): The last object in the array.
- [objectAtIndex:](nsarray/object%28at_%29.md): Returns the object located at the specified index.
- [objectAtIndexedSubscript:](nsarray/subscript%28__%29.md): Returns the object at the specified index.
- [objectsAtIndexes:](nsarray/objects%28at_%29.md): Returns an array containing the objects in the array at the indexes specified by a given index set.
- [objectEnumerator](nsarray/objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the array.
- [reverseObjectEnumerator](nsarray/reverseobjectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the array, in reverse order.

### Finding Objects in an Array

- [indexOfObject:](nsarray/index%28of_%29.md): Returns the lowest index whose corresponding array value is equal to a given object.
- [indexOfObject:inRange:](nsarray/index%28of_in_%29.md): Returns the lowest index within a specified range whose corresponding array value is equal to a given object .
- [indexOfObjectIdenticalTo:](nsarray/indexofobjectidentical%28to_%29.md): Returns the lowest index whose corresponding array value is identical to a given object.
- [indexOfObjectIdenticalTo:inRange:](nsarray/indexofobjectidentical%28to_in_%29.md): Returns the lowest index within a specified range whose corresponding array value is equal to a given object .
- [indexOfObjectPassingTest:](nsarray/indexofobject%28passingtest_%29.md): Returns the index of the first object in the array that passes a test in a given block.
- [indexOfObjectWithOptions:passingTest:](nsarray/indexofobject%28options_passingtest_%29.md): Returns the index of an object in the array that passes a test in a given block for a given set of enumeration options.
- [indexOfObjectAtIndexes:options:passingTest:](nsarray/indexofobject%28at_options_passingtest_%29.md): Returns the index, from a given set of indexes, of the first object in the array that passes a test in a given block for a given set of enumeration options.
- [indexesOfObjectsPassingTest:](nsarray/indexesofobjects%28passingtest_%29.md): Returns the indexes of objects in the array that pass a test in a given block.
- [indexesOfObjectsWithOptions:passingTest:](nsarray/indexesofobjects%28options_passingtest_%29.md): Returns the indexes of objects in the array that pass a test in a given block for a given set of enumeration options.
- [indexesOfObjectsAtIndexes:options:passingTest:](nsarray/indexesofobjects%28at_options_passingtest_%29.md): Returns the indexes, from a given set of indexes, of objects in the array that pass a test in a given block for a given set of enumeration options.
- [indexOfObject:inSortedRange:options:usingComparator:](nsarray/index%28of_insortedrange_options_usingcomparator_%29.md): Returns the index, within a specified range, of an object compared with elements in the array using a given `NSComparator` block.

### Sending Messages to Elements

- [makeObjectsPerformSelector:](nsarray/makeobjectsperformselector_.md): Sends to each object in the array the message identified by a given selector, starting with the first object and continuing through the array to the last object.
- [makeObjectsPerformSelector:withObject:](nsarray/makeobjectsperformselector_withobject_.md): Sends the `aSelector` message to each object in the array, starting with the first object and continuing through the array to the last object.
- [enumerateObjectsUsingBlock:](nsarray/enumerateobjects%28__%29.md): Executes a given closure or block using each object in the array, starting with the first object and continuing through the array to the last object.
- [enumerateObjectsWithOptions:usingBlock:](nsarray/enumerateobjects%28options_using_%29.md): Executes a given closure or block using each object in the array with the specified options.
- [enumerateObjectsAtIndexes:options:usingBlock:](nsarray/enumerateobjects%28at_options_using_%29.md): Executes a given block using the objects in the array at the specified indexes.

### Comparing Arrays

- [firstObjectCommonWithArray:](nsarray/firstobjectcommon%28with_%29.md): Returns the first object contained in the receiving array that’s equal to an object in another given array.
- [isEqualToArray:](nsarray/isequal%28to_%29.md): Compares the receiving array to another array.

### Deriving New Arrays

- [arrayByAddingObject:](nsarray/adding%28__%29.md): Returns a new array that is a copy of the receiving array with a given object added to the end.
- [arrayByAddingObjectsFromArray:](nsarray/addingobjects%28from_%29.md): Returns a new array that is a copy of the receiving array with the objects contained in another array added to the end.
- [filteredArrayUsingPredicate:](nsarray/filtered%28using_%29.md): Evaluates a given predicate against each object in the receiving array and returns a new array containing the objects for which the predicate returns true.
- [subarrayWithRange:](nsarray/subarray%28with_%29.md): Returns a new array containing the receiving array’s elements that fall within the limits specified by a given range.

### Sorting

- [sortedArrayHint](nsarray/sortedarrayhint.md): Analyzes the array and returns a “hint” that speeds the sorting of the array when the hint is supplied to [sortedArrayUsingFunction:context:hint:](nsarray/sortedarray%28__context_hint_%29.md).
- [sortedArrayUsingFunction:context:](nsarray/sortedarray%28__context_%29.md): Returns a new array that lists the receiving array’s elements in ascending order as defined by the comparison function `comparator`.
- [sortedArrayUsingFunction:context:hint:](nsarray/sortedarray%28__context_hint_%29.md): Returns a new array that lists the receiving array’s elements in ascending order as defined by the comparison function `comparator`.
- [sortedArrayUsingDescriptors:](nsarray/sortedarray%28using_%29-82wi1.md): Returns a copy of the receiving array sorted as specified by a given array of sort descriptors.
- [sortedArrayUsingSelector:](nsarray/sortedarray%28using_%29-9nhh9.md): Returns an array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by a given selector.
- [sortedArrayUsingComparator:](nsarray/sortedarray%28comparator_%29.md): Returns an array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by a given `NSComparator` block.
- [sortedArrayWithOptions:usingComparator:](nsarray/sortedarray%28options_usingcomparator_%29.md): Returns an array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by a given `NSComparator` block.
- [NSComparator](comparator.md): Defines the signature for a block object used for comparison operations.

### Working with String Elements

- [componentsJoinedByString:](nsarray/componentsjoined%28by_%29.md): Constructs and returns an `NSString` object that is the result of interposing a given separator between the elements of the array.

### Creating a Description

- [description](nsarray/description.md): A string that represents the contents of the array, formatted as a property list.
- [descriptionWithLocale:](nsarray/description%28withlocale_%29.md): Returns a string that represents the contents of the array, formatted as a property list.
- [descriptionWithLocale:indent:](nsarray/description%28withlocale_indent_%29.md): Returns a string that represents the contents of the array, formatted as a property list.

### Storing Arrays

- [writeToFile:atomically:](nsarray/write%28tofile_atomically_%29.md): Deprecated. Writes the contents of the array to a file at a given path.
- [writeToURL:atomically:](nsarray/write%28to_atomically_%29.md): Deprecated. Writes the contents of the array to the location specified by a given URL.

### Collecting Paths

- [pathsMatchingExtensions:](nsarray/pathsmatchingextensions%28__%29.md): Returns an array containing all the pathname elements in the receiving array that have filename extensions from a given array.

### Key-Value Observing

- [addObserver:forKeyPath:options:context:](nsarray/addobserver%28__forkeypath_options_context_%29.md): Raises an exception.
- [removeObserver:forKeyPath:](nsarray/removeobserver%28__forkeypath_%29.md): Raises an exception.
- [removeObserver:forKeyPath:context:](nsarray/removeobserver%28__forkeypath_context_%29.md): Raises an exception.
- [removeObserver:fromObjectsAtIndexes:forKeyPath:context:](nsarray/removeobserver%28__fromobjectsat_forkeypath_context_%29.md): Raises an exception.
- [addObserver:toObjectsAtIndexes:forKeyPath:options:context:](nsarray/addobserver%28__toobjectsat_forkeypath_options_context_%29.md): Registers an observer to receive key value observer notifications for the specified key-path relative to the objects at the indexes.
- [removeObserver:fromObjectsAtIndexes:forKeyPath:](nsarray/removeobserver%28__fromobjectsat_forkeypath_%29.md): Removes `anObserver` from all key value observer notifications associated with the specified `keyPath` relative to the array’s objects at `indexes`.

### Key-Value Coding

- [setValue:forKey:](nsarray/setvalue%28__forkey_%29.md): Invokes [setValue:forKey:](nsarray/setvalue%28__forkey_%29.md) on each of the array’s items using the specified `value` and `key`.
- [valueForKey:](nsarray/value%28forkey_%29.md): Returns an array containing the results of invoking [valueForKey:](nsarray/value%28forkey_%29.md) using `key` on each of the array’s objects.

### Randomly Shuffling an Array

- [shuffledArray](nsarray/shuffled%28%29.md): Returns a new array that lists this array’s elements in a random order.
- [shuffledArrayWithRandomSource:](nsarray/shuffled%28using_%29.md): Returns a new array that lists this array’s elements in a random order, using the specified random source.

### Comparing with Another Array

- [differenceFromArray:](nsarray/differencefromarray_.md): Compares two arrays to create a difference object that represents the changes between them.
- [differenceFromArray:withOptions:](nsarray/differencefromarray_withoptions_.md): Compares two arrays, with options, to create a difference object that represents the changes between them.
- [differenceFromArray:withOptions:usingEquivalenceTest:](nsarray/differencefromarray_withoptions_usingequivalencetest_.md): Compares two arrays, using the provided block and with options, to create a difference object that represents the changes between them.
- [NSOrderedCollectionDifference](nsorderedcollectiondifference.md): An object representing the difference between two ordered collections.
- [NSOrderedCollectionDifferenceCalculationOptions](nsorderedcollectiondifferencecalculationoptions.md): Constants that specify the options to use when creating an ordered collection difference.

### New Methods

- [initWithCoder:](nsarray/init%28coder_%29.md)

### Constants

- [NSBinarySearchingOptions](nsbinarysearchingoptions.md): Options for searches and insertions using [indexOfObject:inSortedRange:options:usingComparator:](nsarray/index%28of_insortedrange_options_usingcomparator_%29.md).

### Instance Methods

- [arrayByApplyingDifference:](nsarray/arraybyapplyingdifference_.md): Creates a new array by applying a difference object to an existing array.
- [initWithContentsOfURL:](nsarray/init%28contentsof_%29.md): Deprecated. Initializes a newly allocated array with the contents of the location specified by a given URL.
- [initWithContentsOfURL:error:](nsarray/init%28contentsof_error_%29.md)
- [writeToURL:error:](nsarray/write%28to_%29.md)

### Type Methods

- [arrayWithContentsOfURL:](nsarray/arraywithcontentsofurl_.md): Deprecated. Creates and returns an array containing the contents specified by a given URL.
- [arrayWithContentsOfURL:error:](nsarray/arraywithcontentsofurl_error_.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSMutableArray](nsmutablearray.md)

### Conforms To

- [CKRecordValue](../cloudkit/ckrecordvalue-c.protocol.md)
- [CKRecordValueProtocol](../cloudkit/ckrecordvalueprotocol.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [NSCopying](nscopying.md)
- [NSFastEnumeration](nsfastenumeration.md)
- [NSMutableCopying](nsmutablecopying.md)
- [NSObject](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Basic Collections

- [NSMutableArray](nsmutablearray.md): A dynamic ordered collection of objects.
- [NSDictionary](nsdictionary.md): A static collection of objects associated with unique keys.
- [NSMutableDictionary](nsmutabledictionary.md): A dynamic collection of objects associated with unique keys.
- [NSSet](nsset.md): A static, unordered collection of unique objects.
- [NSMutableSet](nsmutableset.md): A dynamic unordered collection of unique objects.
