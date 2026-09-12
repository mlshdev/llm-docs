> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsconstraintconflict/constraint](https://developer.apple.com/documentation/coredata/nsconstraintconflict/constraint)

# constraint (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The constraint that has been violated.

## Declaration

```swift
var constraint: [String] { get }
```

## See Also

### Inspecting a Conflict

- [conflictingObjects](conflictingobjects.md): The managed objects that are in conflict.
- [conflictingSnapshots](conflictingsnapshots.md): The original property values of objects in violation of the constraint.
- [constraintValues](constraintvalues.md): The values that the conflicting objects had when the conflict was created.
- [databaseObject](databaseobject.md): The object whose database row is using constraint values.
- [databaseSnapshot](databasesnapshot.md): The values currently stored in the database.

# constraint (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The constraint that has been violated.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * constraint;
```

## See Also

### Inspecting a Conflict

- [conflictingObjects](conflictingobjects.md): The managed objects that are in conflict.
- [conflictingSnapshots](conflictingsnapshots.md): The original property values of objects in violation of the constraint.
- [constraintValues](constraintvalues.md): The values that the conflicting objects had when the conflict was created.
- [databaseObject](databaseobject.md): The object whose database row is using constraint values.
- [databaseSnapshot](databasesnapshot.md): The values currently stored in the database.
