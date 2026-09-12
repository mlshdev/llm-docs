> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmergepolicy](https://developer.apple.com/documentation/coredata/nsmergepolicy)

# NSMergePolicy (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A policy object that you use to resolve conflicts between the persistent store and in-memory versions of managed objects.

## Declaration

```swift
class NSMergePolicy
```

<a id="overview"></a>

## Overview

A conflict is a mismatch between state held at two different layers in the Core Data stack. A conflict can arise when you save a managed object context and you have stale data at another layer. There are two places in which a conflict may occur:

- Between the managed object context layer and its in-memory cached state at the persistent store coordinator layer.
- Between the cached state at the persistent store coordinator and the external store (file, database, and so forth).

Conflicts are represented by instances of [NSMergeConflict](nsmergeconflict.md).

## Topics

### Getting a Merge Policy

- [init(merge:)](nsmergepolicy/init%28merge_%29.md): Returns a merge policy initialized with a given policy type.
- [mergeType](nsmergepolicy/mergetype.md): The merge type.

### Resolving a Conflict

- [resolve(mergeConflicts:)](nsmergepolicy/resolve%28mergeconflicts_%29.md): Resolves the conflicts in a given list.
- [resolve(constraintConflicts:)](nsmergepolicy/resolve%28constraintconflicts_%29.md): Resolves the conflicts in a given list.
- [resolve(optimisticLockingConflicts:)](nsmergepolicy/resolve%28optimisticlockingconflicts_%29.md): Resolves the conflicts in a given list.

### Defining Merge Policies

- [error](nsmergepolicy/error.md): The default merge policy for all managed object contexts.
- [mergeByPropertyStoreTrump](nsmergepolicy/mergebypropertystoretrump.md): A property-based merge policy that applies external changes.
- [mergeByPropertyObjectTrump](nsmergepolicy/mergebypropertyobjecttrump.md): A property-based merge policy that applies in-memory changes.
- [overwrite](nsmergepolicy/overwrite.md): A merge policy that overwrites the entire stored object.
- [rollback](nsmergepolicy/rollback.md): A merge policy that discards unsaved changes.
- [Merge Policies](merge-policies.md): Define standard ways to handle conflicts during a save operation.

### Initializers

- [init(mergeType:)](nsmergepolicy/init%28mergetype_%29.md)

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
- [NSMergeConflict](nsmergeconflict.md): An encapsulation of conflicts that occur during an attempt to save changes in a managed object context.
- [NSQueryGenerationToken](nsquerygenerationtoken.md): A token that indicates which generation of the persistent store is being accessed.

# NSMergePolicy (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A policy object that you use to resolve conflicts between the persistent store and in-memory versions of managed objects.

## Declaration

```objectivec
@interface NSMergePolicy : NSObject
```

<a id="overview"></a>

## Overview

A conflict is a mismatch between state held at two different layers in the Core Data stack. A conflict can arise when you save a managed object context and you have stale data at another layer. There are two places in which a conflict may occur:

- Between the managed object context layer and its in-memory cached state at the persistent store coordinator layer.
- Between the cached state at the persistent store coordinator and the external store (file, database, and so forth).

Conflicts are represented by instances of [NSMergeConflict](nsmergeconflict.md).

## Topics

### Getting a Merge Policy

- [initWithMergeType:](nsmergepolicy/init%28merge_%29.md): Returns a merge policy initialized with a given policy type.
- [mergeType](nsmergepolicy/mergetype.md): The merge type.

### Resolving a Conflict

- [resolveConflicts:error:](nsmergepolicy/resolve%28mergeconflicts_%29.md): Resolves the conflicts in a given list.
- [resolveConstraintConflicts:error:](nsmergepolicy/resolve%28constraintconflicts_%29.md): Resolves the conflicts in a given list.
- [resolveOptimisticLockingVersionConflicts:error:](nsmergepolicy/resolve%28optimisticlockingconflicts_%29.md): Resolves the conflicts in a given list.

### Defining Merge Policies

- [errorMergePolicy](nsmergepolicy/error.md): The default merge policy for all managed object contexts.
- [mergeByPropertyStoreTrumpMergePolicy](nsmergepolicy/mergebypropertystoretrump.md): A property-based merge policy that applies external changes.
- [mergeByPropertyObjectTrumpMergePolicy](nsmergepolicy/mergebypropertyobjecttrump.md): A property-based merge policy that applies in-memory changes.
- [overwriteMergePolicy](nsmergepolicy/overwrite.md): A merge policy that overwrites the entire stored object.
- [rollbackMergePolicy](nsmergepolicy/rollback.md): A merge policy that discards unsaved changes.
- [Merge Policies](merge-policies.md): Define standard ways to handle conflicts during a save operation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Conflict Management

- [NSConstraintConflict](nsconstraintconflict.md): An encapsulation of conflicts that occur during an attempt to save a managed object.
- [NSMergeConflict](nsmergeconflict.md): An encapsulation of conflicts that occur during an attempt to save changes in a managed object context.
- [NSQueryGenerationToken](nsquerygenerationtoken.md): A token that indicates which generation of the persistent store is being accessed.
