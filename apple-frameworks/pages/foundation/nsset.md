> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsset](https://developer.apple.com/documentation/foundation/nsset)

# NSSet (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A static, unordered collection of unique objects.

## Declaration

```swift
class NSSet
```

## Mentioned In

- [Implementing Handoff in Your App](implementing-handoff-in-your-app.md)

<a id="overview"></a>

## Overview

The [NSSet](nsset.md), [NSMutableSet](nsmutableset.md), and [NSCountedSet](nscountedset.md) classes declare the programmatic interface to an unordered collection of objects.

[NSSet](nsset.md) declares the programmatic interface for static sets of distinct objects. You establish a static set’s entries when it’s created, and can’t modify the entries after that. [NSMutableSet](nsmutableset.md), on the other hand, declares a programmatic interface for dynamic sets of distinct objects. A dynamic — or mutable — set allows the addition and deletion of entries at any time, automatically allocating memory as needed.

Use sets as an alternative to arrays when the order of elements isn’t important and you need to consider performance in testing whether the set contains an object. With an array, testing for membership is slower than with sets.

[NSSet](nsset.md) is “toll-free bridged” with its Core Foundation counterpart, [CFSet](../corefoundation/cfset.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information on toll-free bridging.

In Swift, use this class instead of a [Set](https://developer.apple.com/documentation/swift/set) constant in cases where you require reference semantics.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

There should be little need of subclassing. If you need to customize behavior, it’s often better to consider composition instead of subclassing.

<a id="Methods-to-Override"></a>

#### Methods to Override

In a subclass, you must override all of its primitive methods:

- [count](nsset/count.md)
- [member(\_:)](nsset/member%28__%29.md)
- [objectEnumerator()](nsset/objectenumerator%28%29.md)

<a id="Alternatives-to-Subclassing"></a>

#### Alternatives to Subclassing

Before making a custom class of [NSSet](nsset.md), investigate [NSHashTable](nshashtable.md) and the corresponding Core Foundation type, [CFSet](../corefoundation/cfset.md). Because [NSSet](nsset.md) and [CFSet](../corefoundation/cfset.md) are “toll-free bridged,” you can substitute a [CFSet](../corefoundation/cfset.md) object for a [NSSet](nsset.md) object in your code (with appropriate casting). Although they’re corresponding types, [CFSet](../corefoundation/cfset.md) and [NSSet](nsset.md) don’t have identical interfaces or implementations, and you can sometimes do things with [CFSet](../corefoundation/cfset.md) that you can’t easily do with [NSSet](nsset.md).

If the behavior you want to add supplements that of the existing class, you could write a category on [NSSet](nsset.md). Keep in mind, however, that this category affects all instances of [NSSet](nsset.md) that you use, and this might have unintended consequences. Alternatively, you could use composition to achieve the desired behavior.

## Topics

### Creating a Set

- [init(object:)](nsset/init%28object_%29.md): Creates and returns a set that contains a single given object.
- [init(objects:count:)](nsset/init%28objects_count_%29-65ni4.md): Creates and returns a set containing a specified number of objects from a given C array of objects.
- [adding(\_:)](nsset/adding%28__%29.md): Returns a new set formed by adding a given object to the receiving set.
- [addingObjects(from:)](nsset/addingobjects%28from_%29-2i31h.md): Returns a new set formed by adding the objects in a given set to the receiving set.
- [addingObjects(from:)](nsset/addingobjects%28from_%29-544m9.md): Returns a new set formed by adding the objects in a given array to the receiving set.

### Initializing a Set

- [init(array:)](nsset/init%28array_%29.md): Initializes a newly allocated set with the objects that are contained in a given array.
- [init(objects:count:)](nsset/init%28objects_count_%29-7kift.md): Initializes a newly allocated set with a specified number of objects from a given C array of objects.
- [init(set:)](nsset/init%28set_%29-1xovx.md): Initializes a newly allocated set and adds to it objects from another given set.
- [init(set:copyItems:)](nsset/init%28set_copyitems_%29.md): Initializes a newly allocated set and adds to it members of another given set.
- [init()](nsset/init%28%29.md): Initializes a newly allocated set.

### Counting Entries

- [count](nsset/count.md): The number of members in the set.

### Accessing Set Members

- [allObjects](nsset/allobjects.md): An array containing the set’s members, or an empty array if the set has no members.
- [anyObject()](nsset/anyobject%28%29.md): Returns one of the objects in the set, or `nil` if the set contains no objects.
- [contains(\_:)](nsset/contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the set.
- [filtered(using:)](nsset/filtered%28using_%29.md): Evaluates a given predicate against each object in the receiving set and returns a new set containing the objects for which the predicate returns true.
- [member(\_:)](nsset/member%28__%29.md): Determines whether a given object is present in the set, and returns that object if it is.
- [objectEnumerator()](nsset/objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the set.
- [enumerateObjects(\_:)](nsset/enumerateobjects%28__%29.md): Executes a given block using each object in the set.
- [enumerateObjects(options:using:)](nsset/enumerateobjects%28options_using_%29.md): Executes a given block using each object in the set, using the specified enumeration options.
- [objects(passingTest:)](nsset/objects%28passingtest_%29.md): Returns a set of objects that pass a test in a given block.
- [objects(options:passingTest:)](nsset/objects%28options_passingtest_%29.md): Returns a set of objects that pass a test in a given block, using the specified enumeration options.

### Comparing Sets

- [isSubset(of:)](nsset/issubset%28of_%29.md): Returns a Boolean value that indicates whether every object in the receiving set is also present in another given set.
- [intersects(\_:)](nsset/intersects%28__%29.md): Returns a Boolean value that indicates whether at least one object in the receiving set is also present in another given set.
- [isEqual(to:)](nsset/isequal%28to_%29.md): Compares the receiving set to another set.
- [value(forKey:)](nsset/value%28forkey_%29.md): Return a set containing the results of invoking `valueForKey:` on each of the receiving set’s members.
- [setValue(\_:forKey:)](nsset/setvalue%28__forkey_%29.md): Invokes `setValue:forKey:` on each of the set’s members.

### Creating a Sorted Array

- [sortedArray(using:)](nsset/sortedarray%28using_%29.md): Returns an array of the set’s content sorted as specified by a given array of sort descriptors.

### Key-Value Observing

- [addObserver(\_:forKeyPath:options:context:)](nsset/addobserver%28__forkeypath_options_context_%29.md): Raises an exception.
- [removeObserver(\_:forKeyPath:context:)](nsset/removeobserver%28__forkeypath_context_%29.md): Raises an exception.
- [removeObserver(\_:forKeyPath:)](nsset/removeobserver%28__forkeypath_%29.md): Raises an exception.

### Describing a Set

- [description](nsset/description.md): A string that represents the contents of the set, formatted as a property list.
- [description(withLocale:)](nsset/description%28withlocale_%29.md): Returns a string that represents the contents of the set, formatted as a property list.

### Initializers

- [init(coder:)](nsset/init%28coder_%29.md)
- [init(collectionViewIndexPath:)](nsset/init%28collectionviewindexpath_%29.md)
- [init(collectionViewIndexPaths:)](nsset/init%28collectionviewindexpaths_%29.md)
- [init(objects:)](nsset/init%28objects_%29.md)
- [init(set:)](nsset/init%28set_%29-7a7ws.md): Initializes a newly allocated set and adds to it objects from another given set.

### Instance Methods

- [enumerateIndexPaths(options:using:)](nsset/enumerateindexpaths%28options_using_%29.md)

### Default Implementations

- [Sequence Implementations](nsset/sequence-implementations.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSMutableSet](nsmutableset.md)

### Conforms To

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

# NSSet (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A static, unordered collection of unique objects.

## Declaration

```objectivec
@interface NSSet : NSObject
```

## Mentioned In

- [Implementing Handoff in Your App](implementing-handoff-in-your-app.md)

<a id="overview"></a>

## Overview

The [NSSet](nsset.md), [NSMutableSet](nsmutableset.md), and [NSCountedSet](nscountedset.md) classes declare the programmatic interface to an unordered collection of objects.

[NSSet](nsset.md) declares the programmatic interface for static sets of distinct objects. You establish a static set’s entries when it’s created, and can’t modify the entries after that. [NSMutableSet](nsmutableset.md), on the other hand, declares a programmatic interface for dynamic sets of distinct objects. A dynamic — or mutable — set allows the addition and deletion of entries at any time, automatically allocating memory as needed.

Use sets as an alternative to arrays when the order of elements isn’t important and you need to consider performance in testing whether the set contains an object. With an array, testing for membership is slower than with sets.

[NSSet](nsset.md) is “toll-free bridged” with its Core Foundation counterpart, [CFSetRef](../corefoundation/cfset.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information on toll-free bridging.

In Swift, use this class instead of a [Set](https://developer.apple.com/documentation/swift/set) constant in cases where you require reference semantics.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

There should be little need of subclassing. If you need to customize behavior, it’s often better to consider composition instead of subclassing.

<a id="Methods-to-Override"></a>

#### Methods to Override

In a subclass, you must override all of its primitive methods:

- [count](nsset/count.md)
- [member:](nsset/member%28__%29.md)
- [objectEnumerator](nsset/objectenumerator%28%29.md)

<a id="Alternatives-to-Subclassing"></a>

#### Alternatives to Subclassing

Before making a custom class of [NSSet](nsset.md), investigate [NSHashTable](nshashtable.md) and the corresponding Core Foundation type, [CFSetRef](../corefoundation/cfset.md). Because [NSSet](nsset.md) and [CFSetRef](../corefoundation/cfset.md) are “toll-free bridged,” you can substitute a [CFSetRef](../corefoundation/cfset.md) object for a [NSSet](nsset.md) object in your code (with appropriate casting). Although they’re corresponding types, [CFSetRef](../corefoundation/cfset.md) and [NSSet](nsset.md) don’t have identical interfaces or implementations, and you can sometimes do things with [CFSetRef](../corefoundation/cfset.md) that you can’t easily do with [NSSet](nsset.md).

If the behavior you want to add supplements that of the existing class, you could write a category on [NSSet](nsset.md). Keep in mind, however, that this category affects all instances of [NSSet](nsset.md) that you use, and this might have unintended consequences. Alternatively, you could use composition to achieve the desired behavior.

## Topics

### Creating a Set

- [set](nsset/set.md): Creates and returns an empty set.
- [setWithArray:](nsset/setwitharray_.md): Creates and returns a set containing a uniqued collection of the objects contained in a given array.
- [setWithObject:](nsset/init%28object_%29.md): Creates and returns a set that contains a single given object.
- [setWithObjects:](nsset/setwithobjects_.md): Creates and returns a set containing the objects in a given argument list.
- [setWithObjects:count:](nsset/init%28objects_count_%29-65ni4.md): Creates and returns a set containing a specified number of objects from a given C array of objects.
- [setWithSet:](nsset/setwithset_.md): Creates and returns a set containing the objects from another set.
- [setByAddingObject:](nsset/adding%28__%29.md): Returns a new set formed by adding a given object to the receiving set.
- [setByAddingObjectsFromSet:](nsset/addingobjects%28from_%29-2i31h.md): Returns a new set formed by adding the objects in a given set to the receiving set.
- [setByAddingObjectsFromArray:](nsset/addingobjects%28from_%29-544m9.md): Returns a new set formed by adding the objects in a given array to the receiving set.

### Initializing a Set

- [initWithArray:](nsset/init%28array_%29.md): Initializes a newly allocated set with the objects that are contained in a given array.
- [initWithObjects:](nsset/initwithobjects_.md): Initializes a newly allocated set with members taken from the specified list of objects.
- [initWithObjects:count:](nsset/init%28objects_count_%29-7kift.md): Initializes a newly allocated set with a specified number of objects from a given C array of objects.
- [initWithSet:](nsset/init%28set_%29-1xovx.md): Initializes a newly allocated set and adds to it objects from another given set.
- [initWithSet:copyItems:](nsset/init%28set_copyitems_%29.md): Initializes a newly allocated set and adds to it members of another given set.
- [init](nsset/init%28%29.md): Initializes a newly allocated set.

### Counting Entries

- [count](nsset/count.md): The number of members in the set.

### Accessing Set Members

- [allObjects](nsset/allobjects.md): An array containing the set’s members, or an empty array if the set has no members.
- [anyObject](nsset/anyobject%28%29.md): Returns one of the objects in the set, or `nil` if the set contains no objects.
- [containsObject:](nsset/contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the set.
- [filteredSetUsingPredicate:](nsset/filtered%28using_%29.md): Evaluates a given predicate against each object in the receiving set and returns a new set containing the objects for which the predicate returns true.
- [makeObjectsPerformSelector:](nsset/makeobjectsperformselector_.md): Sends a message specified by a given selector to each object in the set.
- [makeObjectsPerformSelector:withObject:](nsset/makeobjectsperformselector_withobject_.md): Sends a message specified by a given selector to each object in the set.
- [member:](nsset/member%28__%29.md): Determines whether a given object is present in the set, and returns that object if it is.
- [objectEnumerator](nsset/objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the set.
- [enumerateObjectsUsingBlock:](nsset/enumerateobjects%28__%29.md): Executes a given block using each object in the set.
- [enumerateObjectsWithOptions:usingBlock:](nsset/enumerateobjects%28options_using_%29.md): Executes a given block using each object in the set, using the specified enumeration options.
- [objectsPassingTest:](nsset/objects%28passingtest_%29.md): Returns a set of objects that pass a test in a given block.
- [objectsWithOptions:passingTest:](nsset/objects%28options_passingtest_%29.md): Returns a set of objects that pass a test in a given block, using the specified enumeration options.

### Comparing Sets

- [isSubsetOfSet:](nsset/issubset%28of_%29.md): Returns a Boolean value that indicates whether every object in the receiving set is also present in another given set.
- [intersectsSet:](nsset/intersects%28__%29.md): Returns a Boolean value that indicates whether at least one object in the receiving set is also present in another given set.
- [isEqualToSet:](nsset/isequal%28to_%29.md): Compares the receiving set to another set.
- [valueForKey:](nsset/value%28forkey_%29.md): Return a set containing the results of invoking `valueForKey:` on each of the receiving set’s members.
- [setValue:forKey:](nsset/setvalue%28__forkey_%29.md): Invokes `setValue:forKey:` on each of the set’s members.

### Creating a Sorted Array

- [sortedArrayUsingDescriptors:](nsset/sortedarray%28using_%29.md): Returns an array of the set’s content sorted as specified by a given array of sort descriptors.

### Key-Value Observing

- [addObserver:forKeyPath:options:context:](nsset/addobserver%28__forkeypath_options_context_%29.md): Raises an exception.
- [removeObserver:forKeyPath:context:](nsset/removeobserver%28__forkeypath_context_%29.md): Raises an exception.
- [removeObserver:forKeyPath:](nsset/removeobserver%28__forkeypath_%29.md): Raises an exception.

### Describing a Set

- [description](nsset/description.md): A string that represents the contents of the set, formatted as a property list.
- [descriptionWithLocale:](nsset/description%28withlocale_%29.md): Returns a string that represents the contents of the set, formatted as a property list.

### Instance Methods

- [enumerateIndexPathsWithOptions:usingBlock:](nsset/enumerateindexpaths%28options_using_%29.md)
- [initWithCoder:](nsset/init%28coder_%29.md)

### Type Methods

- [setWithCollectionViewIndexPath:](nsset/init%28collectionviewindexpath_%29.md)
- [setWithCollectionViewIndexPaths:](nsset/init%28collectionviewindexpaths_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSMutableSet](nsmutableset.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSFastEnumeration](nsfastenumeration.md)
- [NSMutableCopying](nsmutablecopying.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Basic Collections

- [NSArray](nsarray.md): A static ordered collection of objects.
- [NSMutableArray](nsmutablearray.md): A dynamic ordered collection of objects.
- [NSDictionary](nsdictionary.md): A static collection of objects associated with unique keys.
- [NSMutableDictionary](nsmutabledictionary.md): A dynamic collection of objects associated with unique keys.
- [NSMutableSet](nsmutableset.md): A dynamic unordered collection of unique objects.
