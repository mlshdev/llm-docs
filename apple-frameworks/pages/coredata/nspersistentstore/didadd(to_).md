> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstore/didadd(to:)](https://developer.apple.com/documentation/coredata/nspersistentstore/didadd(to:))

# didAdd(to:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Invoked after the persistent store has been added to the persistent store coordinator.

## Declaration

```swift
func didAdd(to coordinator: NSPersistentStoreCoordinator)
```

## Parameters

- `coordinator`: The persistent store coordinator to which the receiver was added.

<a id="Discussion"></a>

## Discussion

The default implementation does nothing. You can override this method in a subclass in order to perform any kind of setup necessary before the load method is invoked.

## See Also

### Responding to the Store Life Cycle

- [willRemove(from:)](willremove%28from_%29.md): Invoked before the persistent store is removed from the persistent store coordinator.

# didAddToPersistentStoreCoordinator: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Invoked after the persistent store has been added to the persistent store coordinator.

## Declaration

```objectivec
- (void) didAddToPersistentStoreCoordinator:(NSPersistentStoreCoordinator *) coordinator;
```

## Parameters

- `coordinator`: The persistent store coordinator to which the receiver was added.

<a id="Discussion"></a>

## Discussion

The default implementation does nothing. You can override this method in a subclass in order to perform any kind of setup necessary before the load method is invoked.

## See Also

### Responding to the Store Life Cycle

- [willRemoveFromPersistentStoreCoordinator:](willremove%28from_%29.md): Invoked before the persistent store is removed from the persistent store coordinator.
