> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsconstraintconflict/databaseobject](https://developer.apple.com/documentation/coredata/nsconstraintconflict/databaseobject)

# databaseObject (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The object whose database row is using constraint values.

## Declaration

```swift
var databaseObject: NSManagedObject? { get }
```

## See Also

### Inspecting a Conflict

- [conflictingObjects](conflictingobjects.md): The managed objects that are in conflict.
- [conflictingSnapshots](conflictingsnapshots.md): The original property values of objects in violation of the constraint.
- [constraint](constraint.md): The constraint that has been violated.
- [constraintValues](constraintvalues.md): The values that the conflicting objects had when the conflict was created.
- [databaseSnapshot](databasesnapshot.md): The values currently stored in the database.

# databaseObject (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The object whose database row is using constraint values.

## Declaration

```objectivec
@property (retain, readonly, nullable) NSManagedObject * databaseObject;
```

## See Also

### Inspecting a Conflict

- [conflictingObjects](conflictingobjects.md): The managed objects that are in conflict.
- [conflictingSnapshots](conflictingsnapshots.md): The original property values of objects in violation of the constraint.
- [constraint](constraint.md): The constraint that has been violated.
- [constraintValues](constraintvalues.md): The values that the conflicting objects had when the conflict was created.
- [databaseSnapshot](databasesnapshot.md): The values currently stored in the database.
