> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsconstraintconflict/conflictingobjects](https://developer.apple.com/documentation/coredata/nsconstraintconflict/conflictingobjects)

# conflictingObjects (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The managed objects that are in conflict.

## Declaration

```swift
var conflictingObjects: [NSManagedObject] { get }
```

## See Also

### Inspecting a Conflict

- [conflictingSnapshots](conflictingsnapshots.md): The original property values of objects in violation of the constraint.
- [constraint](constraint.md): The constraint that has been violated.
- [constraintValues](constraintvalues.md): The values that the conflicting objects had when the conflict was created.
- [databaseObject](databaseobject.md): The object whose database row is using constraint values.
- [databaseSnapshot](databasesnapshot.md): The values currently stored in the database.

# conflictingObjects (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The managed objects that are in conflict.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSManagedObject *> * conflictingObjects;
```

## See Also

### Inspecting a Conflict

- [conflictingSnapshots](conflictingsnapshots.md): The original property values of objects in violation of the constraint.
- [constraint](constraint.md): The constraint that has been violated.
- [constraintValues](constraintvalues.md): The values that the conflicting objects had when the conflict was created.
- [databaseObject](databaseobject.md): The object whose database row is using constraint values.
- [databaseSnapshot](databasesnapshot.md): The values currently stored in the database.
