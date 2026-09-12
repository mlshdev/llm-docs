> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/mergechanges(fromcontextdidsave:)](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/mergechanges(fromcontextdidsave:))

# mergeChanges(fromContextDidSave:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Merges the changes specified in a given notification.

## Declaration

```swift
func mergeChanges(fromContextDidSave notification: Notification)
```

## Parameters

- `notification`: An instance of an [NSManagedObjectContextDidSave](../../foundation/nsnotification/name-swift.struct/nsmanagedobjectcontextdidsave.md) notification posted by another context.

## Mentioned In

- [Accessing data when the store changes](../accessing-data-when-the-store-changes.md)
- [Consuming relevant store changes](../consuming-relevant-store-changes.md)

<a id="Discussion"></a>

## Discussion

This method refreshes any objects which have been updated in the other context, faults in any newly-inserted objects, and invokes [delete(\_:)](delete%28__%29.md): on those which have been deleted.

You can pass a [NSManagedObjectContextDidSave](../../foundation/nsnotification/name-swift.struct/nsmanagedobjectcontextdidsave.md) notification posted by a managed object context on another thread, however you must not use the managed objects in the user info dictionary directly. For more details, see Concurrency with Core Data.

> **Note**

> Objective-C uses instances of [NSManagedObjectContextDidSaveNotification](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontextdidsavenotification) instead of [NSManagedObjectContextDidSave](../../foundation/nsnotification/name-swift.struct/nsmanagedobjectcontextdidsave.md).

## See Also

### Managing concurrency

- [NSManagedObjectContextQueryGenerationKey](../nsmanagedobjectcontextquerygenerationkey.md): Constant used to reference the query generation token.
- [mergeChanges(fromRemoteContextSave:into:)](mergechanges%28fromremotecontextsave_into_%29.md): Handles changes from other processes or from a serialized state.
- [automaticallyMergesChangesFromParent](automaticallymergeschangesfromparent.md): A Boolean value that indicates whether the context automatically merges changes saved to its persistent store coordinator or parent context.
- [concurrencyType](concurrencytype-swift.property.md): The concurrency type for the context.
- [mergePolicy](mergepolicy.md): The merge policy of the context.
- [queryGenerationToken](querygenerationtoken.md): Returns the token associated with the query generation currently in use by this context.
- [transactionAuthor](transactionauthor.md): The author for the context that is used as an identifier in persistent history transactions.
- [setQueryGenerationFrom(\_:)](setquerygenerationfrom%28__%29.md): Sets the query generation this context should use.

# mergeChangesFromContextDidSaveNotification: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Merges the changes specified in a given notification.

## Declaration

```objectivec
- (void) mergeChangesFromContextDidSaveNotification:(NSNotification *) notification;
```

## Parameters

- `notification`: An instance of an [NSManagedObjectContextDidSave](../../foundation/nsnotification/name-swift.struct/nsmanagedobjectcontextdidsave.md) notification posted by another context.

## Mentioned In

- [Accessing data when the store changes](../accessing-data-when-the-store-changes.md)
- [Consuming relevant store changes](../consuming-relevant-store-changes.md)

<a id="Discussion"></a>

## Discussion

This method refreshes any objects which have been updated in the other context, faults in any newly-inserted objects, and invokes [deleteObject:](delete%28__%29.md): on those which have been deleted.

You can pass a [NSManagedObjectContextDidSave](../../foundation/nsnotification/name-swift.struct/nsmanagedobjectcontextdidsave.md) notification posted by a managed object context on another thread, however you must not use the managed objects in the user info dictionary directly. For more details, see Concurrency with Core Data.

> **Note**

> Objective-C uses instances of [NSManagedObjectContextDidSaveNotification](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontextdidsavenotification) instead of [NSManagedObjectContextDidSave](../../foundation/nsnotification/name-swift.struct/nsmanagedobjectcontextdidsave.md).

## See Also

### Managing concurrency

- [NSManagedObjectContextQueryGenerationKey](../nsmanagedobjectcontextquerygenerationkey.md): Constant used to reference the query generation token.
- [mergeChangesFromRemoteContextSave:intoContexts:](mergechanges%28fromremotecontextsave_into_%29.md): Handles changes from other processes or from a serialized state.
- [automaticallyMergesChangesFromParent](automaticallymergeschangesfromparent.md): A Boolean value that indicates whether the context automatically merges changes saved to its persistent store coordinator or parent context.
- [concurrencyType](concurrencytype-swift.property.md): The concurrency type for the context.
- [mergePolicy](mergepolicy.md): The merge policy of the context.
- [queryGenerationToken](querygenerationtoken.md): Returns the token associated with the query generation currently in use by this context.
- [transactionAuthor](transactionauthor.md): The author for the context that is used as an identifier in persistent history transactions.
- [setQueryGenerationFromToken:error:](setquerygenerationfrom%28__%29.md): Sets the query generation this context should use.
