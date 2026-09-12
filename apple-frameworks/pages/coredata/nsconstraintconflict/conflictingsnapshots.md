> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsconstraintconflict/conflictingsnapshots](https://developer.apple.com/documentation/coredata/nsconstraintconflict/conflictingsnapshots)

# conflictingSnapshots (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The original property values of objects in violation of the constraint.

## Declaration

```swift
var conflictingSnapshots: [[AnyHashable : Any]] { get }
```

## See Also

### Inspecting a Conflict

- [conflictingObjects](conflictingobjects.md): The managed objects that are in conflict.
- [constraint](constraint.md): The constraint that has been violated.
- [constraintValues](constraintvalues.md): The values that the conflicting objects had when the conflict was created.
- [databaseObject](databaseobject.md): The object whose database row is using constraint values.
- [databaseSnapshot](databasesnapshot.md): The values currently stored in the database.

# conflictingSnapshots (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The original property values of objects in violation of the constraint.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSDictionary *> * conflictingSnapshots;
```

## See Also

### Inspecting a Conflict

- [conflictingObjects](conflictingobjects.md): The managed objects that are in conflict.
- [constraint](constraint.md): The constraint that has been violated.
- [constraintValues](constraintvalues.md): The values that the conflicting objects had when the conflict was created.
- [databaseObject](databaseobject.md): The object whose database row is using constraint values.
- [databaseSnapshot](databasesnapshot.md): The values currently stored in the database.
