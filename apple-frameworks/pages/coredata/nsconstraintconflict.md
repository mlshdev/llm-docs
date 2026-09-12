> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsconstraintconflict](https://developer.apple.com/documentation/coredata/nsconstraintconflict)

# NSConstraintConflict (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An encapsulation of conflicts that occur during an attempt to save a managed object.

## Declaration

```swift
class NSConstraintConflict
```

<a id="overview"></a>

## Overview

A constraint conflict occurs when your data model is using unique constraints and one or more managed objects are violating that constraint.

When this error occurs, the error instance can be interrogated to determine which instance of [NSManagedObject](nsmanagedobject.md) is violating the constraint and which property on the [NSManagedObject](nsmanagedobject.md) instance is in violation.

## Topics

### Initializing a Conflict

- [init(constraint:database:databaseSnapshot:conflicting:conflictingSnapshots:)](nsconstraintconflict/init%28constraint_database_databasesnapshot_conflicting_conflictingsnapshots_%29.md): Initializes a constraint conflict.

### Inspecting a Conflict

- [conflictingObjects](nsconstraintconflict/conflictingobjects.md): The managed objects that are in conflict.
- [conflictingSnapshots](nsconstraintconflict/conflictingsnapshots.md): The original property values of objects in violation of the constraint.
- [constraint](nsconstraintconflict/constraint.md): The constraint that has been violated.
- [constraintValues](nsconstraintconflict/constraintvalues.md): The values that the conflicting objects had when the conflict was created.
- [databaseObject](nsconstraintconflict/databaseobject.md): The object whose database row is using constraint values.
- [databaseSnapshot](nsconstraintconflict/databasesnapshot.md): The values currently stored in the database.

### Initializers

- [init(constraint:databaseObject:databaseSnapshot:conflictingObjects:conflictingSnapshots:)](nsconstraintconflict/init%28constraint_databaseobject_databasesnapshot_conflictingobjects_conflictingsnapshots_%29.md)

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

- [NSMergeConflict](nsmergeconflict.md): An encapsulation of conflicts that occur during an attempt to save changes in a managed object context.
- [NSMergePolicy](nsmergepolicy.md): A policy object that you use to resolve conflicts between the persistent store and in-memory versions of managed objects.
- [NSQueryGenerationToken](nsquerygenerationtoken.md): A token that indicates which generation of the persistent store is being accessed.

# NSConstraintConflict (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An encapsulation of conflicts that occur during an attempt to save a managed object.

## Declaration

```objectivec
@interface NSConstraintConflict : NSObject
```

<a id="overview"></a>

## Overview

A constraint conflict occurs when your data model is using unique constraints and one or more managed objects are violating that constraint.

When this error occurs, the error instance can be interrogated to determine which instance of [NSManagedObject](nsmanagedobject.md) is violating the constraint and which property on the [NSManagedObject](nsmanagedobject.md) instance is in violation.

## Topics

### Initializing a Conflict

- [initWithConstraint:databaseObject:databaseSnapshot:conflictingObjects:conflictingSnapshots:](nsconstraintconflict/init%28constraint_database_databasesnapshot_conflicting_conflictingsnapshots_%29.md): Initializes a constraint conflict.

### Inspecting a Conflict

- [conflictingObjects](nsconstraintconflict/conflictingobjects.md): The managed objects that are in conflict.
- [conflictingSnapshots](nsconstraintconflict/conflictingsnapshots.md): The original property values of objects in violation of the constraint.
- [constraint](nsconstraintconflict/constraint.md): The constraint that has been violated.
- [constraintValues](nsconstraintconflict/constraintvalues.md): The values that the conflicting objects had when the conflict was created.
- [databaseObject](nsconstraintconflict/databaseobject.md): The object whose database row is using constraint values.
- [databaseSnapshot](nsconstraintconflict/databasesnapshot.md): The values currently stored in the database.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Conflict Management

- [NSMergeConflict](nsmergeconflict.md): An encapsulation of conflicts that occur during an attempt to save changes in a managed object context.
- [NSMergePolicy](nsmergepolicy.md): A policy object that you use to resolve conflicts between the persistent store and in-memory versions of managed objects.
- [NSQueryGenerationToken](nsquerygenerationtoken.md): A token that indicates which generation of the persistent store is being accessed.
