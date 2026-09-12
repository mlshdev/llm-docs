> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmergeconflict](https://developer.apple.com/documentation/coredata/nsmergeconflict)

# NSMergeConflict (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An encapsulation of conflicts that occur during an attempt to save changes in a managed object context.

## Declaration

```swift
class NSMergeConflict
```

<a id="overview"></a>

## Overview

A conflict can occur in two situations:

- Between the managed object context and its in-memory cached state at the persistent store coordinator layer.
- Between the cached state at the persistent store coordinator layer and the external store (file, database, and so forth). In this case, the merge conflict has a cached snapshot and a persisted snapshot.  The source object is also provided as a convenience, but it is not directly involved in the conflict.

Snapshot dictionaries include values for all attributes and to-one relationships, but not to-many relationships. Relationship values are `NSManagedObjectID` references. To-many relationships must be pulled from the persistent store as needed.

## Topics

### Initializing a Merge Conflict

- [init(source:newVersion:oldVersion:cachedSnapshot:persistedSnapshot:)](nsmergeconflict/init%28source_newversion_oldversion_cachedsnapshot_persistedsnapshot_%29.md): Initializes a merge conflict.

### Accessing Merge Conflict Details

- [sourceObject](nsmergeconflict/sourceobject.md): The source object for the conflict.
- [objectSnapshot](nsmergeconflict/objectsnapshot.md): A dictionary containing the values of the source object.
- [cachedSnapshot](nsmergeconflict/cachedsnapshot.md): A dictionary containing the values of the source object held in the persistent store coordinator layer.
- [persistedSnapshot](nsmergeconflict/persistedsnapshot.md): A dictionary containing the values of the source object held in the persistent store.
- [newVersionNumber](nsmergeconflict/newversionnumber.md): The new version number for the change.
- [oldVersionNumber](nsmergeconflict/oldversionnumber.md): The old version number for the change.

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

### Conflict Management

- [NSConstraintConflict](nsconstraintconflict.md): An encapsulation of conflicts that occur during an attempt to save a managed object.
- [NSMergePolicy](nsmergepolicy.md): A policy object that you use to resolve conflicts between the persistent store and in-memory versions of managed objects.
- [NSQueryGenerationToken](nsquerygenerationtoken.md): A token that indicates which generation of the persistent store is being accessed.

# NSMergeConflict (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An encapsulation of conflicts that occur during an attempt to save changes in a managed object context.

## Declaration

```objectivec
@interface NSMergeConflict : NSObject
```

<a id="overview"></a>

## Overview

A conflict can occur in two situations:

- Between the managed object context and its in-memory cached state at the persistent store coordinator layer.
- Between the cached state at the persistent store coordinator layer and the external store (file, database, and so forth). In this case, the merge conflict has a cached snapshot and a persisted snapshot.  The source object is also provided as a convenience, but it is not directly involved in the conflict.

Snapshot dictionaries include values for all attributes and to-one relationships, but not to-many relationships. Relationship values are `NSManagedObjectID` references. To-many relationships must be pulled from the persistent store as needed.

## Topics

### Initializing a Merge Conflict

- [initWithSource:newVersion:oldVersion:cachedSnapshot:persistedSnapshot:](nsmergeconflict/init%28source_newversion_oldversion_cachedsnapshot_persistedsnapshot_%29.md): Initializes a merge conflict.

### Accessing Merge Conflict Details

- [sourceObject](nsmergeconflict/sourceobject.md): The source object for the conflict.
- [objectSnapshot](nsmergeconflict/objectsnapshot.md): A dictionary containing the values of the source object.
- [cachedSnapshot](nsmergeconflict/cachedsnapshot.md): A dictionary containing the values of the source object held in the persistent store coordinator layer.
- [persistedSnapshot](nsmergeconflict/persistedsnapshot.md): A dictionary containing the values of the source object held in the persistent store.
- [newVersionNumber](nsmergeconflict/newversionnumber.md): The new version number for the change.
- [oldVersionNumber](nsmergeconflict/oldversionnumber.md): The old version number for the change.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Conflict Management

- [NSConstraintConflict](nsconstraintconflict.md): An encapsulation of conflicts that occur during an attempt to save a managed object.
- [NSMergePolicy](nsmergepolicy.md): A policy object that you use to resolve conflicts between the persistent store and in-memory versions of managed objects.
- [NSQueryGenerationToken](nsquerygenerationtoken.md): A token that indicates which generation of the persistent store is being accessed.
