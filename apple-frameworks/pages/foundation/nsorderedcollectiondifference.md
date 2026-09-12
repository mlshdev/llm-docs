> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedcollectiondifference](https://developer.apple.com/documentation/foundation/nsorderedcollectiondifference)

# NSOrderedCollectionDifference (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An object representing the difference between two ordered collections.

## Declaration

```swift
class NSOrderedCollectionDifference
```

<a id="overview"></a>

## Overview

Use [differenceFromArray:](nsarray/differencefromarray_.md) or one of its variations to get an instance of [NSOrderedCollectionDifference](nsorderedcollectiondifference.md), which represents the difference between two ordered collections.

For example, the following sample compares two arrays of strings to create a difference that represents the changes:

```objc
NSArray *original = @[@"Red", @"Green", @"Blue"];
NSArray *modified = @[@"Red", @"Blue", @"Green"];

NSOrderedCollectionDifference *diff = [original differenceFromArray:modified];

// diff.hasChanges == TRUE
// diff.insertions.count == 1
// diff.removals.count == 1

```

## Topics

### Accessing Changes

- [hasChanges](nsorderedcollectiondifference/haschanges.md): A Boolean value that indicates if the difference has changes.
- [insertions](nsorderedcollectiondifference/insertions.md): A collection of insertion change objects.
- [removals](nsorderedcollectiondifference/removals.md): A collection of removal change objects.
- [NSOrderedCollectionChange](nsorderedcollectionchange.md): An object that represents an indexed change within an ordered collection.
- [NSCollectionChangeType](nscollectionchangetype.md): The type of change represented in computing the difference of an ordered collection.

### Inverting a Difference Object

- [inverse()](nsorderedcollectiondifference/inverse%28%29.md): Calculate the difference between two objects in the reverse direction of comparison.

### Creating a Collection Difference Object

- [init(changes:)](nsorderedcollectiondifference/init%28changes_%29.md): Creates an ordered collection difference using an array of ordered collection changes.
- [init(insert:insertedObjects:remove:removedObjects:)](nsorderedcollectiondifference/init%28insert_insertedobjects_remove_removedobjects_%29.md): Creates an ordered collection difference from arrays of inserted and removed objects with corresponding sets of indices.
- [init(insert:insertedObjects:remove:removedObjects:additionalChanges:)](nsorderedcollectiondifference/init%28insert_insertedobjects_remove_removedobjects_additionalchanges_%29.md): Creates an ordered collection difference from arrays of inserted and removed objects with corresponding sets of indices, in addition to an array of ordered collection changes.

### Updating Changes from a Difference Object

- [transformingChanges(\_:)](nsorderedcollectiondifference/transformingchanges%28__%29.md): Create a new ordered collection difference by mapping over this difference’s members, processing the change objects with the block provided.

### Initializers

- [init(insertIndexes:insertedObjects:removeIndexes:removedObjects:)](nsorderedcollectiondifference/init%28insertindexes_insertedobjects_removeindexes_removedobjects_%29.md)
- [init(insertIndexes:insertedObjects:removeIndexes:removedObjects:additionalChanges:)](nsorderedcollectiondifference/init%28insertindexes_insertedobjects_removeindexes_removedobjects_additionalchanges_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSFastEnumeration](nsfastenumeration.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Comparing with Another Array

- [NSOrderedCollectionDifferenceCalculationOptions](nsorderedcollectiondifferencecalculationoptions.md): Constants that specify the options to use when creating an ordered collection difference.

# NSOrderedCollectionDifference (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An object representing the difference between two ordered collections.

## Declaration

```objectivec
@interface NSOrderedCollectionDifference : NSObject
```

<a id="overview"></a>

## Overview

Use [differenceFromArray:](nsarray/differencefromarray_.md) or one of its variations to get an instance of [NSOrderedCollectionDifference](nsorderedcollectiondifference.md), which represents the difference between two ordered collections.

For example, the following sample compares two arrays of strings to create a difference that represents the changes:

```objc
NSArray *original = @[@"Red", @"Green", @"Blue"];
NSArray *modified = @[@"Red", @"Blue", @"Green"];

NSOrderedCollectionDifference *diff = [original differenceFromArray:modified];

// diff.hasChanges == TRUE
// diff.insertions.count == 1
// diff.removals.count == 1

```

## Topics

### Accessing Changes

- [hasChanges](nsorderedcollectiondifference/haschanges.md): A Boolean value that indicates if the difference has changes.
- [insertions](nsorderedcollectiondifference/insertions.md): A collection of insertion change objects.
- [removals](nsorderedcollectiondifference/removals.md): A collection of removal change objects.
- [NSOrderedCollectionChange](nsorderedcollectionchange.md): An object that represents an indexed change within an ordered collection.
- [NSCollectionChangeType](nscollectionchangetype.md): The type of change represented in computing the difference of an ordered collection.

### Inverting a Difference Object

- [inverseDifference](nsorderedcollectiondifference/inverse%28%29.md): Calculate the difference between two objects in the reverse direction of comparison.

### Creating a Collection Difference Object

- [initWithChanges:](nsorderedcollectiondifference/init%28changes_%29.md): Creates an ordered collection difference using an array of ordered collection changes.
- [initWithInsertIndexes:insertedObjects:removeIndexes:removedObjects:](nsorderedcollectiondifference/init%28insert_insertedobjects_remove_removedobjects_%29.md): Creates an ordered collection difference from arrays of inserted and removed objects with corresponding sets of indices.
- [initWithInsertIndexes:insertedObjects:removeIndexes:removedObjects:additionalChanges:](nsorderedcollectiondifference/init%28insert_insertedobjects_remove_removedobjects_additionalchanges_%29.md): Creates an ordered collection difference from arrays of inserted and removed objects with corresponding sets of indices, in addition to an array of ordered collection changes.

### Updating Changes from a Difference Object

- [differenceByTransformingChangesWithBlock:](nsorderedcollectiondifference/transformingchanges%28__%29.md): Create a new ordered collection difference by mapping over this difference’s members, processing the change objects with the block provided.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSFastEnumeration](nsfastenumeration.md)

## See Also

### Comparing with Another Array

- [differenceFromArray:](nsarray/differencefromarray_.md): Compares two arrays to create a difference object that represents the changes between them.
- [differenceFromArray:withOptions:](nsarray/differencefromarray_withoptions_.md): Compares two arrays, with options, to create a difference object that represents the changes between them.
- [differenceFromArray:withOptions:usingEquivalenceTest:](nsarray/differencefromarray_withoptions_usingequivalencetest_.md): Compares two arrays, using the provided block and with options, to create a difference object that represents the changes between them.
- [NSOrderedCollectionDifferenceCalculationOptions](nsorderedcollectiondifferencecalculationoptions.md): Constants that specify the options to use when creating an ordered collection difference.
