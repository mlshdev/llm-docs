> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmergepolicy/resolve(mergeconflicts:)](https://developer.apple.com/documentation/coredata/nsmergepolicy/resolve(mergeconflicts:))

# resolve(mergeConflicts:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Resolves the conflicts in a given list.

## Declaration

```swift
func resolve(mergeConflicts list: [Any]) throws
```

## Parameters

- `list`: An array of merge conflicts (instances of [NSMergeConflict](../nsmergeconflict.md)).

<a id="Discussion"></a>

## Discussion

If you override this method in a subclass, you should typically invoke the superclass’s implementation in addition to performing your own operations.

## See Also

### Resolving a Conflict

- [resolve(constraintConflicts:)](resolve%28constraintconflicts_%29.md): Resolves the conflicts in a given list.
- [resolve(optimisticLockingConflicts:)](resolve%28optimisticlockingconflicts_%29.md): Resolves the conflicts in a given list.

# resolveConflicts:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Resolves the conflicts in a given list.

## Declaration

```objectivec
- (BOOL) resolveConflicts:(NSArray *) list error:(NSError **) error;
```

## Parameters

- `list`: An array of merge conflicts (instances of [NSMergeConflict](../nsmergeconflict.md)).
- `error`: If an error occurs, upon return contains an `NSError` object that describes the problem.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the conflicts were resolved successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If you override this method in a subclass, you should typically invoke the superclass’s implementation in addition to performing your own operations.

## See Also

### Resolving a Conflict

- [resolveConstraintConflicts:error:](resolve%28constraintconflicts_%29.md): Resolves the conflicts in a given list.
- [resolveOptimisticLockingVersionConflicts:error:](resolve%28optimisticlockingconflicts_%29.md): Resolves the conflicts in a given list.
