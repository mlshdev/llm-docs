> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmergepolicy/resolve(optimisticlockingconflicts:)](https://developer.apple.com/documentation/coredata/nsmergepolicy/resolve(optimisticlockingconflicts:))

# resolve(optimisticLockingConflicts:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Resolves the conflicts in a given list.

## Declaration

```swift
func resolve(optimisticLockingConflicts list: [NSMergeConflict]) throws
```

## See Also

### Resolving a Conflict

- [resolve(mergeConflicts:)](resolve%28mergeconflicts_%29.md): Resolves the conflicts in a given list.
- [resolve(constraintConflicts:)](resolve%28constraintconflicts_%29.md): Resolves the conflicts in a given list.

# resolveOptimisticLockingVersionConflicts:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Resolves the conflicts in a given list.

## Declaration

```objectivec
- (BOOL) resolveOptimisticLockingVersionConflicts:(NSArray<NSMergeConflict *> *) list error:(NSError **) error;
```

## See Also

### Resolving a Conflict

- [resolveConflicts:error:](resolve%28mergeconflicts_%29.md): Resolves the conflicts in a given list.
- [resolveConstraintConflicts:error:](resolve%28constraintconflicts_%29.md): Resolves the conflicts in a given list.
