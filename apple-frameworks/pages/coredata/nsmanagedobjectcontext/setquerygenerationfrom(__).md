> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/setquerygenerationfrom(_:)](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/setquerygenerationfrom(_:))

# setQueryGenerationFrom(\_:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Sets the query generation this context should use.

## Declaration

```swift
func setQueryGenerationFrom(_ generation: NSQueryGenerationToken?) throws
```

## Mentioned In

- [Accessing data when the store changes](../accessing-data-when-the-store-changes.md)

## See Also

### Managing concurrency

- [NSManagedObjectContextQueryGenerationKey](../nsmanagedobjectcontextquerygenerationkey.md): Constant used to reference the query generation token.
- [mergeChanges(fromRemoteContextSave:into:)](mergechanges%28fromremotecontextsave_into_%29.md): Handles changes from other processes or from a serialized state.
- [automaticallyMergesChangesFromParent](automaticallymergeschangesfromparent.md): A Boolean value that indicates whether the context automatically merges changes saved to its persistent store coordinator or parent context.
- [concurrencyType](concurrencytype-swift.property.md): The concurrency type for the context.
- [mergePolicy](mergepolicy.md): The merge policy of the context.
- [queryGenerationToken](querygenerationtoken.md): Returns the token associated with the query generation currently in use by this context.
- [transactionAuthor](transactionauthor.md): The author for the context that is used as an identifier in persistent history transactions.
- [mergeChanges(fromContextDidSave:)](mergechanges%28fromcontextdidsave_%29.md): Merges the changes specified in a given notification.

# setQueryGenerationFromToken:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Sets the query generation this context should use.

## Declaration

```objectivec
- (BOOL) setQueryGenerationFromToken:(NSQueryGenerationToken *) generation error:(NSError **) error;
```

## Mentioned In

- [Accessing data when the store changes](../accessing-data-when-the-store-changes.md)

## See Also

### Managing concurrency

- [NSManagedObjectContextQueryGenerationKey](../nsmanagedobjectcontextquerygenerationkey.md): Constant used to reference the query generation token.
- [mergeChangesFromRemoteContextSave:intoContexts:](mergechanges%28fromremotecontextsave_into_%29.md): Handles changes from other processes or from a serialized state.
- [automaticallyMergesChangesFromParent](automaticallymergeschangesfromparent.md): A Boolean value that indicates whether the context automatically merges changes saved to its persistent store coordinator or parent context.
- [concurrencyType](concurrencytype-swift.property.md): The concurrency type for the context.
- [mergePolicy](mergepolicy.md): The merge policy of the context.
- [queryGenerationToken](querygenerationtoken.md): Returns the token associated with the query generation currently in use by this context.
- [transactionAuthor](transactionauthor.md): The author for the context that is used as an identifier in persistent history transactions.
- [mergeChangesFromContextDidSaveNotification:](mergechanges%28fromcontextdidsave_%29.md): Merges the changes specified in a given notification.
