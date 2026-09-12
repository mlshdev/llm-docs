> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontextquerygenerationkey](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontextquerygenerationkey)

# NSManagedObjectContextQueryGenerationKey (Swift)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Constant used to reference the query generation token.

## Declaration

```swift
let NSManagedObjectContextQueryGenerationKey: String
```

## See Also

### Managing concurrency

- [mergeChanges(fromRemoteContextSave:into:)](nsmanagedobjectcontext/mergechanges%28fromremotecontextsave_into_%29.md): Handles changes from other processes or from a serialized state.
- [automaticallyMergesChangesFromParent](nsmanagedobjectcontext/automaticallymergeschangesfromparent.md): A Boolean value that indicates whether the context automatically merges changes saved to its persistent store coordinator or parent context.
- [concurrencyType](nsmanagedobjectcontext/concurrencytype-swift.property.md): The concurrency type for the context.
- [mergePolicy](nsmanagedobjectcontext/mergepolicy.md): The merge policy of the context.
- [queryGenerationToken](nsmanagedobjectcontext/querygenerationtoken.md): Returns the token associated with the query generation currently in use by this context.
- [transactionAuthor](nsmanagedobjectcontext/transactionauthor.md): The author for the context that is used as an identifier in persistent history transactions.
- [mergeChanges(fromContextDidSave:)](nsmanagedobjectcontext/mergechanges%28fromcontextdidsave_%29.md): Merges the changes specified in a given notification.
- [setQueryGenerationFrom(\_:)](nsmanagedobjectcontext/setquerygenerationfrom%28__%29.md): Sets the query generation this context should use.

# NSManagedObjectContextQueryGenerationKey (Objective-C)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Constant used to reference the query generation token.

## Declaration

```objectivec
extern NSString * const NSManagedObjectContextQueryGenerationKey;
```

## See Also

### Managing concurrency

- [mergeChangesFromRemoteContextSave:intoContexts:](nsmanagedobjectcontext/mergechanges%28fromremotecontextsave_into_%29.md): Handles changes from other processes or from a serialized state.
- [automaticallyMergesChangesFromParent](nsmanagedobjectcontext/automaticallymergeschangesfromparent.md): A Boolean value that indicates whether the context automatically merges changes saved to its persistent store coordinator or parent context.
- [concurrencyType](nsmanagedobjectcontext/concurrencytype-swift.property.md): The concurrency type for the context.
- [mergePolicy](nsmanagedobjectcontext/mergepolicy.md): The merge policy of the context.
- [queryGenerationToken](nsmanagedobjectcontext/querygenerationtoken.md): Returns the token associated with the query generation currently in use by this context.
- [transactionAuthor](nsmanagedobjectcontext/transactionauthor.md): The author for the context that is used as an identifier in persistent history transactions.
- [mergeChangesFromContextDidSaveNotification:](nsmanagedobjectcontext/mergechanges%28fromcontextdidsave_%29.md): Merges the changes specified in a given notification.
- [setQueryGenerationFromToken:error:](nsmanagedobjectcontext/setquerygenerationfrom%28__%29.md): Sets the query generation this context should use.
