> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedcollectionchange](https://developer.apple.com/documentation/foundation/nsorderedcollectionchange)

# NSOrderedCollectionChange (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An object that represents an indexed change within an ordered collection.

## Declaration

```swift
class NSOrderedCollectionChange
```

<a id="overview"></a>

## Overview

An ordered collection change represents changes by adding, removing, or moving objects within an ordered collection. Changes with an associated index indicate a move within the collection.

## Topics

### Creating a Change

- [init(object:type:index:)](nsorderedcollectionchange/init%28object_type_index_%29.md): Creates a change object that represents inserting or removing an object from an ordered collection at a specific index.
- [init(object:type:index:associatedIndex:)](nsorderedcollectionchange/init%28object_type_index_associatedindex_%29.md): Creates a change object that represents inserting, removing, or moving an object from an ordered collection at a specific index.

### Accessing the Change

- [changeType](nsorderedcollectionchange/changetype.md): The type of change.
- [index](nsorderedcollectionchange/index.md): The index location of the change.
- [object](nsorderedcollectionchange/object.md): An object the change inserts or removes.
- [associatedIndex](nsorderedcollectionchange/associatedindex.md): When this property is set to a value other than [NSNotFound](nsnotfound-9t5v2.md), the receiver is one half of a move, and this value is the index of the change’s counterpart of the opposite type in the diff.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Accessing Changes

- [hasChanges](nsorderedcollectiondifference/haschanges.md): A Boolean value that indicates if the difference has changes.
- [insertions](nsorderedcollectiondifference/insertions.md): A collection of insertion change objects.
- [removals](nsorderedcollectiondifference/removals.md): A collection of removal change objects.
- [NSCollectionChangeType](nscollectionchangetype.md): The type of change represented in computing the difference of an ordered collection.

# NSOrderedCollectionChange (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An object that represents an indexed change within an ordered collection.

## Declaration

```objectivec
@interface NSOrderedCollectionChange : NSObject
```

<a id="overview"></a>

## Overview

An ordered collection change represents changes by adding, removing, or moving objects within an ordered collection. Changes with an associated index indicate a move within the collection.

## Topics

### Creating a Change

- [initWithObject:type:index:](nsorderedcollectionchange/init%28object_type_index_%29.md): Creates a change object that represents inserting or removing an object from an ordered collection at a specific index.
- [initWithObject:type:index:associatedIndex:](nsorderedcollectionchange/init%28object_type_index_associatedindex_%29.md): Creates a change object that represents inserting, removing, or moving an object from an ordered collection at a specific index.
- [changeWithObject:type:index:](nsorderedcollectionchange/changewithobject_type_index_.md): Creates an change object that represents inserting or removing an object from an ordered collection at a specific index.
- [changeWithObject:type:index:associatedIndex:](nsorderedcollectionchange/changewithobject_type_index_associatedindex_.md): Creates an change object that represents inserting or removing an object from an ordered collection at a specific index, matched with an associated location that infers a move within the collection.

### Accessing the Change

- [changeType](nsorderedcollectionchange/changetype.md): The type of change.
- [index](nsorderedcollectionchange/index.md): The index location of the change.
- [object](nsorderedcollectionchange/object.md): An object the change inserts or removes.
- [associatedIndex](nsorderedcollectionchange/associatedindex.md): When this property is set to a value other than [NSNotFound](nsnotfound-9t5v2.md), the receiver is one half of a move, and this value is the index of the change’s counterpart of the opposite type in the diff.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Accessing Changes

- [hasChanges](nsorderedcollectiondifference/haschanges.md): A Boolean value that indicates if the difference has changes.
- [insertions](nsorderedcollectiondifference/insertions.md): A collection of insertion change objects.
- [removals](nsorderedcollectiondifference/removals.md): A collection of removal change objects.
- [NSCollectionChangeType](nscollectionchangetype.md): The type of change represented in computing the difference of an ordered collection.
