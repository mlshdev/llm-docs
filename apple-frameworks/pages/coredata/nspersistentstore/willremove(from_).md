> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstore/willremove(from:)](https://developer.apple.com/documentation/coredata/nspersistentstore/willremove(from:))

# willRemove(from:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Invoked before the persistent store is removed from the persistent store coordinator.

## Declaration

```swift
func willRemove(from coordinator: NSPersistentStoreCoordinator?)
```

## Parameters

- `coordinator`: The persistent store coordinator from which the receiver was removed.

<a id="Discussion"></a>

## Discussion

The default implementation does nothing. You can override this method in a subclass in order to perform any clean-up before the store is removed from the coordinator (and deallocated).

## See Also

### Responding to the Store Life Cycle

- [didAdd(to:)](didadd%28to_%29.md): Invoked after the persistent store has been added to the persistent store coordinator.

# willRemoveFromPersistentStoreCoordinator: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Invoked before the persistent store is removed from the persistent store coordinator.

## Declaration

```objectivec
- (void) willRemoveFromPersistentStoreCoordinator:(NSPersistentStoreCoordinator *) coordinator;
```

## Parameters

- `coordinator`: The persistent store coordinator from which the receiver was removed.

<a id="Discussion"></a>

## Discussion

The default implementation does nothing. You can override this method in a subclass in order to perform any clean-up before the store is removed from the coordinator (and deallocated).

## See Also

### Responding to the Store Life Cycle

- [didAddToPersistentStoreCoordinator:](didadd%28to_%29.md): Invoked after the persistent store has been added to the persistent store coordinator.
