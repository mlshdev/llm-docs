> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/mergechanges(fromremotecontextsave:into:)](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/mergechanges(fromremotecontextsave:into:))

# mergeChanges(fromRemoteContextSave:into:) (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Handles changes from other processes or from a serialized state.

## Declaration

```swift
class func mergeChanges(fromRemoteContextSave changeNotificationData: [AnyHashable : Any], into contexts: [NSManagedObjectContext])
```

## Mentioned In

- [Accessing data when the store changes](../accessing-data-when-the-store-changes.md)

<a id="Discussion"></a>

## Discussion

This method more efficiently merges changes into multiple contexts as well as nested contexts. The dictionary keys should be one or more from an [NSManagedObjectContextObjectsDidChange](../../foundation/nsnotification/name-swift.struct/nsmanagedobjectcontextobjectsdidchange.md):  [NSInsertedObjectsKey](../nsinsertedobjectskey.md), [NSUpdatedObjectsKey](../nsupdatedobjectskey.md), [NSDeletedObjectsKey](../nsdeletedobjectskey.md). The values should be an [NSArray](../../foundation/nsarray.md) of either [NSManagedObjectID](../nsmanagedobjectid.md) or [NSURL](../../foundation/nsurl.md) objects conforming to valid results from [uriRepresentation()](../nsmanagedobjectid/urirepresentation%28%29.md).

## See Also

### Managing concurrency

- [NSManagedObjectContextQueryGenerationKey](../nsmanagedobjectcontextquerygenerationkey.md): Constant used to reference the query generation token.
- [automaticallyMergesChangesFromParent](automaticallymergeschangesfromparent.md): A Boolean value that indicates whether the context automatically merges changes saved to its persistent store coordinator or parent context.
- [concurrencyType](concurrencytype-swift.property.md): The concurrency type for the context.
- [mergePolicy](mergepolicy.md): The merge policy of the context.
- [queryGenerationToken](querygenerationtoken.md): Returns the token associated with the query generation currently in use by this context.
- [transactionAuthor](transactionauthor.md): The author for the context that is used as an identifier in persistent history transactions.
- [mergeChanges(fromContextDidSave:)](mergechanges%28fromcontextdidsave_%29.md): Merges the changes specified in a given notification.
- [setQueryGenerationFrom(\_:)](setquerygenerationfrom%28__%29.md): Sets the query generation this context should use.

# mergeChangesFromRemoteContextSave:intoContexts: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Handles changes from other processes or from a serialized state.

## Declaration

```objectivec
+ (void) mergeChangesFromRemoteContextSave:(NSDictionary *) changeNotificationData intoContexts:(NSArray<NSManagedObjectContext *> *) contexts;
```

## Mentioned In

- [Accessing data when the store changes](../accessing-data-when-the-store-changes.md)

<a id="Discussion"></a>

## Discussion

This method more efficiently merges changes into multiple contexts as well as nested contexts. The dictionary keys should be one or more from an [NSManagedObjectContextObjectsDidChange](../../foundation/nsnotification/name-swift.struct/nsmanagedobjectcontextobjectsdidchange.md):  [NSInsertedObjectsKey](../nsinsertedobjectskey.md), [NSUpdatedObjectsKey](../nsupdatedobjectskey.md), [NSDeletedObjectsKey](../nsdeletedobjectskey.md). The values should be an [NSArray](../../foundation/nsarray.md) of either [NSManagedObjectID](../nsmanagedobjectid.md) or [NSURL](../../foundation/nsurl.md) objects conforming to valid results from [URIRepresentation](../nsmanagedobjectid/urirepresentation%28%29.md).

## See Also

### Managing concurrency

- [NSManagedObjectContextQueryGenerationKey](../nsmanagedobjectcontextquerygenerationkey.md): Constant used to reference the query generation token.
- [automaticallyMergesChangesFromParent](automaticallymergeschangesfromparent.md): A Boolean value that indicates whether the context automatically merges changes saved to its persistent store coordinator or parent context.
- [concurrencyType](concurrencytype-swift.property.md): The concurrency type for the context.
- [mergePolicy](mergepolicy.md): The merge policy of the context.
- [queryGenerationToken](querygenerationtoken.md): Returns the token associated with the query generation currently in use by this context.
- [transactionAuthor](transactionauthor.md): The author for the context that is used as an identifier in persistent history transactions.
- [mergeChangesFromContextDidSaveNotification:](mergechanges%28fromcontextdidsave_%29.md): Merges the changes specified in a given notification.
- [setQueryGenerationFromToken:error:](setquerygenerationfrom%28__%29.md): Sets the query generation this context should use.
