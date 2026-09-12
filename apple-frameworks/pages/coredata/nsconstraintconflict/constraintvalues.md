> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsconstraintconflict/constraintvalues](https://developer.apple.com/documentation/coredata/nsconstraintconflict/constraintvalues)

# constraintValues (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The values that the conflicting objects had when the conflict was created.

## Declaration

```swift
var constraintValues: [String : Any] { get }
```

## See Also

### Inspecting a Conflict

- [conflictingObjects](conflictingobjects.md): The managed objects that are in conflict.
- [conflictingSnapshots](conflictingsnapshots.md): The original property values of objects in violation of the constraint.
- [constraint](constraint.md): The constraint that has been violated.
- [databaseObject](databaseobject.md): The object whose database row is using constraint values.
- [databaseSnapshot](databasesnapshot.md): The values currently stored in the database.

# constraintValues (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The values that the conflicting objects had when the conflict was created.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,id> * constraintValues;
```

## See Also

### Inspecting a Conflict

- [conflictingObjects](conflictingobjects.md): The managed objects that are in conflict.
- [conflictingSnapshots](conflictingsnapshots.md): The original property values of objects in violation of the constraint.
- [constraint](constraint.md): The constraint that has been violated.
- [databaseObject](databaseobject.md): The object whose database row is using constraint values.
- [databaseSnapshot](databasesnapshot.md): The values currently stored in the database.
