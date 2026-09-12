> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedset](https://developer.apple.com/documentation/foundation/nsorderedset)

# NSOrderedSet (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A static, ordered collection of unique objects.

## Declaration

```swift
class NSOrderedSet
```

<a id="overview"></a>

## Overview

[NSOrderedSet](nsorderedset.md) declares the programmatic interface for static sets of distinct objects. You establish a static set’s entries when it’s created, and thereafter the entries can’t be modified. [NSMutableOrderedSet](nsmutableorderedset.md), on the other hand, declares a programmatic interface for dynamic sets of distinct objects. A dynamic—or mutable—set allows the addition and deletion of entries at any time, automatically allocating memory as needed.

You can use ordered sets as an alternative to arrays when the order of elements is important and performance in testing whether an object is contained in the set is a consideration—testing for membership of an array is slower than testing for membership of a set.

## Topics

### Creating an Ordered Set

- [init(objects:count:)](nsorderedset/init%28objects_count_%29-3ny0m.md): Creates and returns a set containing a specified number of objects from a given C array of objects.

### Initializing an Ordered Set

- [init(array:)](nsorderedset/init%28array_%29.md): Initializes a newly allocated set with the objects that are contained in a given array.
- [init(array:copyItems:)](nsorderedset/init%28array_copyitems_%29.md): Initializes a newly allocated set with the objects that are contained in a given array, optionally copying the items.
- [init(array:range:copyItems:)](nsorderedset/init%28array_range_copyitems_%29.md): Initializes a newly allocated set with the objects that are contained in the specified range of an array, optionally copying the items.
- [init(object:)](nsorderedset/init%28object_%29.md): Initializes a new ordered set with the object.
- [init(objects:count:)](nsorderedset/init%28objects_count_%29-2ai32.md): Initializes a newly allocated set with a specified number of objects from a given C array of objects.
- [init(orderedSet:)](nsorderedset/init%28orderedset_%29.md): Initializes a new ordered set with the contents of a set.
- [init(orderedSet:copyItems:)](nsorderedset/init%28orderedset_copyitems_%29.md): Initializes a new ordered set with the contents of a set, optionally copying the items.
- [init(orderedSet:range:copyItems:)](nsorderedset/init%28orderedset_range_copyitems_%29.md): Initializes a new ordered set with the contents of an ordered set, optionally copying the items.
- [init(set:)](nsorderedset/init%28set_%29.md): Initializes a new ordered set with the contents of a set.
- [init(set:copyItems:)](nsorderedset/init%28set_copyitems_%29.md): Initializes a new ordered set with the contents of a set, optionally copying the objects in the set.
- [init()](nsorderedset/init%28%29.md): Initializes a newly allocated ordered set.

### Counting Entries

- [count](nsorderedset/count.md): The number of members in the set.

### Accessing Set Members

- [contains(\_:)](nsorderedset/contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the ordered set.
- [enumerateObjects(at:options:using:)](nsorderedset/enumerateobjects%28at_options_using_%29.md): Executes a given block using the objects in the ordered set at the specified indexes.
- [enumerateObjects(\_:)](nsorderedset/enumerateobjects%28__%29.md): Executes a given block using each object in the ordered set.
- [enumerateObjects(options:using:)](nsorderedset/enumerateobjects%28options_using_%29.md): Executes a given block using each object in the set, using the specified enumeration options.
- [firstObject](nsorderedset/firstobject.md): The first object in the ordered set.
- [lastObject](nsorderedset/lastobject.md): The last object in the ordered set.
- [object(at:)](nsorderedset/object%28at_%29.md): Returns the object at the specified index of the set.
- [subscript(\_:)](nsorderedset/subscript%28__%29.md): Returns the object at the specified index of the set.
- [objects(at:)](nsorderedset/objects%28at_%29.md): Returns the objects in the ordered set at the specified indexes.
- [index(of:)](nsorderedset/index%28of_%29.md): Returns the index of the specified object.
- [index(of:inSortedRange:options:usingComparator:)](nsorderedset/index%28of_insortedrange_options_usingcomparator_%29.md): Returns the index, within a specified range, of an object compared with elements in the ordered set using a given NSComparator block.
- [index(ofObjectAt:options:passingTest:)](nsorderedset/index%28ofobjectat_options_passingtest_%29.md): Returns the index, from a given set of indexes, of the object in the ordered set that passes a test in a given block for a given set of enumeration options.
- [index(ofObjectPassingTest:)](nsorderedset/index%28ofobjectpassingtest_%29.md): Returns the index of the object in the ordered set that passes a test in a given block.
- [index(\_:ofObjectPassingTest:)](nsorderedset/index%28__ofobjectpassingtest_%29.md): Returns the index of an object in the ordered set that passes a test in a given block for a given set of enumeration options.
- [indexes(ofObjectsAt:options:passingTest:)](nsorderedset/indexes%28ofobjectsat_options_passingtest_%29.md): Returns the index, from a given set of indexes, of the object in the ordered set that passes a test in a given block for a given set of enumeration options.
- [indexes(ofObjectsPassingTest:)](nsorderedset/indexes%28ofobjectspassingtest_%29.md): Returns the index of the object in the ordered set that passes a test in a given block.
- [indexes(options:ofObjectsPassingTest:)](nsorderedset/indexes%28options_ofobjectspassingtest_%29.md): Returns the index of an object in the ordered set that passes a test in a given block for a given set of enumeration options.
- [objectEnumerator()](nsorderedset/objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the ordered set.
- [reverseObjectEnumerator()](nsorderedset/reverseobjectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the ordered set.
- [reversed](nsorderedset/reversed.md): An ordered set in the reverse order.

### Key-Value Coding Support

- [setValue(\_:forKey:)](nsorderedset/setvalue%28__forkey_%29.md): Invokes `setValue:forKey:` on each of the receiver’s members using the specified value and key
- [value(forKey:)](nsorderedset/value%28forkey_%29.md): Returns an ordered set containing the results of invoking `valueForKey:` using key on each of the ordered set’s objects.

### Key-Value Observing Support

- [addObserver(\_:forKeyPath:options:context:)](nsorderedset/addobserver%28__forkeypath_options_context_%29.md): Raises an exception.
- [removeObserver(\_:forKeyPath:)](nsorderedset/removeobserver%28__forkeypath_%29.md): Raises an exception.
- [removeObserver(\_:forKeyPath:context:)](nsorderedset/removeobserver%28__forkeypath_context_%29.md): Raises an exception.

### Comparing Sets

- [isEqual(to:)](nsorderedset/isequal%28to_%29.md): Compares the receiving ordered set to another ordered set.
- [intersects(\_:)](nsorderedset/intersects%28__%29.md): Returns a Boolean value that indicates whether at least one object in the receiving ordered set is also present in another given ordered set.
- [intersectsSet(\_:)](nsorderedset/intersectsset%28__%29.md): Returns a Boolean value that indicates whether at least one object in the receiving ordered set is also present in another given set.
- [isSubset(of:)](nsorderedset/issubset%28of_%29-7brc.md): Returns a Boolean value that indicates whether every object in the receiving ordered set is also present in another given ordered set.
- [isSubset(of:)](nsorderedset/issubset%28of_%29-8zx9x.md): Returns a Boolean value that indicates whether every object in the receiving ordered set is also present in another given set.

### Creating a Sorted Array

- [sortedArray(using:)](nsorderedset/sortedarray%28using_%29.md): Returns an array of the ordered set’s elements sorted as specified by a given array of sort descriptors.
- [sortedArray(comparator:)](nsorderedset/sortedarray%28comparator_%29.md): Returns an array that lists the receiving ordered set’s elements in ascending order, as determined by the comparison method specified by a given `NSComparator` block
- [sortedArray(options:usingComparator:)](nsorderedset/sortedarray%28options_usingcomparator_%29.md): Returns an array that lists the receiving ordered set’s elements in ascending order, as determined by the comparison method specified by a given `NSComparator` block.

### Filtering Ordered Sets

- [filtered(using:)](nsorderedset/filtered%28using_%29.md): Evaluates a given predicate against each object in the receiving ordered set and returns a new ordered set containing the objects for which the predicate returns true.

### Describing a Set

- [description](nsorderedset/description.md): A string that represents the contents of the ordered set, formatted as a property list.
- [description(withLocale:)](nsorderedset/description%28withlocale_%29.md): Returns a string that represents the contents of the ordered set, formatted as a property list.
- [description(withLocale:indent:)](nsorderedset/description%28withlocale_indent_%29.md): Returns a string that represents the contents of the ordered set, formatted as a property list.

### Converting Other Collections

- [array](nsorderedset/array.md): A representation of the ordered set as an array.
- [set](nsorderedset/set.md): A representation of the set containing the contents of the ordered set.

### Comparing with Another Set

- [NSOrderedCollectionDifference](nsorderedcollectiondifference.md): An object representing the difference between two ordered collections.
- [NSOrderedCollectionDifferenceCalculationOptions](nsorderedcollectiondifferencecalculationoptions.md): Constants that specify the options to use when creating an ordered collection difference.

### Initializers

- [init(coder:)](nsorderedset/init%28coder_%29.md)
- [init(objects:)](nsorderedset/init%28objects_%29.md)

### Default Implementations

- [ExpressibleByArrayLiteral Implementations](nsorderedset/expressiblebyarrayliteral-implementations.md)
- [Sequence Implementations](nsorderedset/sequence-implementations.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSMutableOrderedSet](nsmutableorderedset.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
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

## See Also

### Specialized Sets

- [NSCountedSet](nscountedset.md): A mutable, unordered collection of distinct objects that may appear more than once in the collection.
- [NSMutableOrderedSet](nsmutableorderedset.md): A dynamic, ordered collection of unique objects.

# NSOrderedSet (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A static, ordered collection of unique objects.

## Declaration

```objectivec
@interface NSOrderedSet : NSObject
```

<a id="overview"></a>

## Overview

[NSOrderedSet](nsorderedset.md) declares the programmatic interface for static sets of distinct objects. You establish a static set’s entries when it’s created, and thereafter the entries can’t be modified. [NSMutableOrderedSet](nsmutableorderedset.md), on the other hand, declares a programmatic interface for dynamic sets of distinct objects. A dynamic—or mutable—set allows the addition and deletion of entries at any time, automatically allocating memory as needed.

You can use ordered sets as an alternative to arrays when the order of elements is important and performance in testing whether an object is contained in the set is a consideration—testing for membership of an array is slower than testing for membership of a set.

## Topics

### Creating an Ordered Set

- [orderedSet](nsorderedset/orderedset.md): Creates and returns an empty ordered set
- [orderedSetWithArray:](nsorderedset/orderedsetwitharray_.md): Creates and returns a set containing a uniqued collection of the objects contained in a given array.
- [orderedSetWithArray:range:copyItems:](nsorderedset/orderedsetwitharray_range_copyitems_.md): Creates and returns a new ordered set for a specified range of objects in an array.
- [orderedSetWithObject:](nsorderedset/orderedsetwithobject_.md): Creates and returns a ordered set that contains a single given object.
- [orderedSetWithObjects:](nsorderedset/orderedsetwithobjects_.md): Creates and returns a ordered set containing the objects in a given argument list.
- [orderedSetWithObjects:count:](nsorderedset/init%28objects_count_%29-3ny0m.md): Creates and returns a set containing a specified number of objects from a given C array of objects.
- [orderedSetWithOrderedSet:](nsorderedset/orderedsetwithorderedset_.md): Creates and returns an ordered set containing the objects from another ordered set.
- [orderedSetWithOrderedSet:range:copyItems:](nsorderedset/orderedsetwithorderedset_range_copyitems_.md): Creates and returns a new ordered set for a specified range of objects in an ordered set.
- [orderedSetWithSet:](nsorderedset/orderedsetwithset_.md): Creates and returns an ordered set with the contents of a set.
- [orderedSetWithSet:copyItems:](nsorderedset/orderedsetwithset_copyitems_.md): Creates and returns an ordered set with the contents of a set, optionally copying the items.

### Initializing an Ordered Set

- [initWithArray:](nsorderedset/init%28array_%29.md): Initializes a newly allocated set with the objects that are contained in a given array.
- [initWithArray:copyItems:](nsorderedset/init%28array_copyitems_%29.md): Initializes a newly allocated set with the objects that are contained in a given array, optionally copying the items.
- [initWithArray:range:copyItems:](nsorderedset/init%28array_range_copyitems_%29.md): Initializes a newly allocated set with the objects that are contained in the specified range of an array, optionally copying the items.
- [initWithObject:](nsorderedset/init%28object_%29.md): Initializes a new ordered set with the object.
- [initWithObjects:](nsorderedset/initwithobjects_.md): Initializes a newly allocated set with members taken from the specified list of objects.
- [initWithObjects:count:](nsorderedset/init%28objects_count_%29-2ai32.md): Initializes a newly allocated set with a specified number of objects from a given C array of objects.
- [initWithOrderedSet:](nsorderedset/init%28orderedset_%29.md): Initializes a new ordered set with the contents of a set.
- [initWithOrderedSet:copyItems:](nsorderedset/init%28orderedset_copyitems_%29.md): Initializes a new ordered set with the contents of a set, optionally copying the items.
- [initWithOrderedSet:range:copyItems:](nsorderedset/init%28orderedset_range_copyitems_%29.md): Initializes a new ordered set with the contents of an ordered set, optionally copying the items.
- [initWithSet:](nsorderedset/init%28set_%29.md): Initializes a new ordered set with the contents of a set.
- [initWithSet:copyItems:](nsorderedset/init%28set_copyitems_%29.md): Initializes a new ordered set with the contents of a set, optionally copying the objects in the set.
- [init](nsorderedset/init%28%29.md): Initializes a newly allocated ordered set.

### Counting Entries

- [count](nsorderedset/count.md): The number of members in the set.

### Accessing Set Members

- [containsObject:](nsorderedset/contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the ordered set.
- [enumerateObjectsAtIndexes:options:usingBlock:](nsorderedset/enumerateobjects%28at_options_using_%29.md): Executes a given block using the objects in the ordered set at the specified indexes.
- [enumerateObjectsUsingBlock:](nsorderedset/enumerateobjects%28__%29.md): Executes a given block using each object in the ordered set.
- [enumerateObjectsWithOptions:usingBlock:](nsorderedset/enumerateobjects%28options_using_%29.md): Executes a given block using each object in the set, using the specified enumeration options.
- [firstObject](nsorderedset/firstobject.md): The first object in the ordered set.
- [lastObject](nsorderedset/lastobject.md): The last object in the ordered set.
- [objectAtIndex:](nsorderedset/object%28at_%29.md): Returns the object at the specified index of the set.
- [objectAtIndexedSubscript:](nsorderedset/subscript%28__%29.md): Returns the object at the specified index of the set.
- [objectsAtIndexes:](nsorderedset/objects%28at_%29.md): Returns the objects in the ordered set at the specified indexes.
- [indexOfObject:](nsorderedset/index%28of_%29.md): Returns the index of the specified object.
- [indexOfObject:inSortedRange:options:usingComparator:](nsorderedset/index%28of_insortedrange_options_usingcomparator_%29.md): Returns the index, within a specified range, of an object compared with elements in the ordered set using a given NSComparator block.
- [indexOfObjectAtIndexes:options:passingTest:](nsorderedset/index%28ofobjectat_options_passingtest_%29.md): Returns the index, from a given set of indexes, of the object in the ordered set that passes a test in a given block for a given set of enumeration options.
- [indexOfObjectPassingTest:](nsorderedset/index%28ofobjectpassingtest_%29.md): Returns the index of the object in the ordered set that passes a test in a given block.
- [indexOfObjectWithOptions:passingTest:](nsorderedset/index%28__ofobjectpassingtest_%29.md): Returns the index of an object in the ordered set that passes a test in a given block for a given set of enumeration options.
- [indexesOfObjectsAtIndexes:options:passingTest:](nsorderedset/indexes%28ofobjectsat_options_passingtest_%29.md): Returns the index, from a given set of indexes, of the object in the ordered set that passes a test in a given block for a given set of enumeration options.
- [indexesOfObjectsPassingTest:](nsorderedset/indexes%28ofobjectspassingtest_%29.md): Returns the index of the object in the ordered set that passes a test in a given block.
- [indexesOfObjectsWithOptions:passingTest:](nsorderedset/indexes%28options_ofobjectspassingtest_%29.md): Returns the index of an object in the ordered set that passes a test in a given block for a given set of enumeration options.
- [objectEnumerator](nsorderedset/objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the ordered set.
- [reverseObjectEnumerator](nsorderedset/reverseobjectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the ordered set.
- [reversedOrderedSet](nsorderedset/reversed.md): An ordered set in the reverse order.
- [getObjects:range:](nsorderedset/getobjects_range_.md): Copies the objects contained in the ordered set that fall within the specified range to `objects`.

### Key-Value Coding Support

- [setValue:forKey:](nsorderedset/setvalue%28__forkey_%29.md): Invokes `setValue:forKey:` on each of the receiver’s members using the specified value and key
- [valueForKey:](nsorderedset/value%28forkey_%29.md): Returns an ordered set containing the results of invoking `valueForKey:` using key on each of the ordered set’s objects.

### Key-Value Observing Support

- [addObserver:forKeyPath:options:context:](nsorderedset/addobserver%28__forkeypath_options_context_%29.md): Raises an exception.
- [removeObserver:forKeyPath:](nsorderedset/removeobserver%28__forkeypath_%29.md): Raises an exception.
- [removeObserver:forKeyPath:context:](nsorderedset/removeobserver%28__forkeypath_context_%29.md): Raises an exception.

### Comparing Sets

- [isEqualToOrderedSet:](nsorderedset/isequal%28to_%29.md): Compares the receiving ordered set to another ordered set.
- [intersectsOrderedSet:](nsorderedset/intersects%28__%29.md): Returns a Boolean value that indicates whether at least one object in the receiving ordered set is also present in another given ordered set.
- [intersectsSet:](nsorderedset/intersectsset%28__%29.md): Returns a Boolean value that indicates whether at least one object in the receiving ordered set is also present in another given set.
- [isSubsetOfOrderedSet:](nsorderedset/issubset%28of_%29-7brc.md): Returns a Boolean value that indicates whether every object in the receiving ordered set is also present in another given ordered set.
- [isSubsetOfSet:](nsorderedset/issubset%28of_%29-8zx9x.md): Returns a Boolean value that indicates whether every object in the receiving ordered set is also present in another given set.

### Creating a Sorted Array

- [sortedArrayUsingDescriptors:](nsorderedset/sortedarray%28using_%29.md): Returns an array of the ordered set’s elements sorted as specified by a given array of sort descriptors.
- [sortedArrayUsingComparator:](nsorderedset/sortedarray%28comparator_%29.md): Returns an array that lists the receiving ordered set’s elements in ascending order, as determined by the comparison method specified by a given `NSComparator` block
- [sortedArrayWithOptions:usingComparator:](nsorderedset/sortedarray%28options_usingcomparator_%29.md): Returns an array that lists the receiving ordered set’s elements in ascending order, as determined by the comparison method specified by a given `NSComparator` block.

### Filtering Ordered Sets

- [filteredOrderedSetUsingPredicate:](nsorderedset/filtered%28using_%29.md): Evaluates a given predicate against each object in the receiving ordered set and returns a new ordered set containing the objects for which the predicate returns true.

### Describing a Set

- [description](nsorderedset/description.md): A string that represents the contents of the ordered set, formatted as a property list.
- [descriptionWithLocale:](nsorderedset/description%28withlocale_%29.md): Returns a string that represents the contents of the ordered set, formatted as a property list.
- [descriptionWithLocale:indent:](nsorderedset/description%28withlocale_indent_%29.md): Returns a string that represents the contents of the ordered set, formatted as a property list.

### Converting Other Collections

- [array](nsorderedset/array.md): A representation of the ordered set as an array.
- [set](nsorderedset/set.md): A representation of the set containing the contents of the ordered set.

### Comparing with Another Set

- [differenceFromOrderedSet:](nsorderedset/differencefromorderedset_.md): Compares two ordered sets to create a difference object that represents the changes between them.
- [differenceFromOrderedSet:withOptions:](nsorderedset/differencefromorderedset_withoptions_.md): Compares two ordered sets, with options, to create a difference object that represents the changes between them.
- [differenceFromOrderedSet:withOptions:usingEquivalenceTest:](nsorderedset/differencefromorderedset_withoptions_usingequivalencetest_.md): Compares two ordered sets, using the provided block and with options, to create a difference object that represents the changes between them.
- [NSOrderedCollectionDifference](nsorderedcollectiondifference.md): An object representing the difference between two ordered collections.
- [NSOrderedCollectionDifferenceCalculationOptions](nsorderedcollectiondifferencecalculationoptions.md): Constants that specify the options to use when creating an ordered collection difference.

### Instance Methods

- [initWithCoder:](nsorderedset/init%28coder_%29.md)
- [orderedSetByApplyingDifference:](nsorderedset/orderedsetbyapplyingdifference_.md): Creates a new ordered set by applying a difference object to an existing ordered set.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSMutableOrderedSet](nsmutableorderedset.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSFastEnumeration](nsfastenumeration.md)
- [NSMutableCopying](nsmutablecopying.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Specialized Sets

- [NSCountedSet](nscountedset.md): A mutable, unordered collection of distinct objects that may appear more than once in the collection.
- [NSMutableOrderedSet](nsmutableorderedset.md): A dynamic, ordered collection of unique objects.
