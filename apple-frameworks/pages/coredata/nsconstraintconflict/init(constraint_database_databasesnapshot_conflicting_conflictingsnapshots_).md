> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsconstraintconflict/init(constraint:database:databasesnapshot:conflicting:conflictingsnapshots:)](https://developer.apple.com/documentation/coredata/nsconstraintconflict/init(constraint:database:databasesnapshot:conflicting:conflictingsnapshots:))

# init(constraint:database:databaseSnapshot:conflicting:conflictingSnapshots:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a constraint conflict.

## Declaration

```swift
init(constraint contraint: [String], database databaseObject: NSManagedObject?, databaseSnapshot: [AnyHashable : Any]?, conflicting conflictingObjects: [NSManagedObject], conflictingSnapshots: [Any])
```

# initWithConstraint:databaseObject:databaseSnapshot:conflictingObjects:conflictingSnapshots: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a constraint conflict.

## Declaration

```objectivec
- (instancetype) initWithConstraint:(NSArray<NSString *> *) contraint databaseObject:(NSManagedObject *) databaseObject databaseSnapshot:(NSDictionary *) databaseSnapshot conflictingObjects:(NSArray<NSManagedObject *> *) conflictingObjects conflictingSnapshots:(NSArray *) conflictingSnapshots;
```
