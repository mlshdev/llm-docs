> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/concurrencytype-swift.property](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/concurrencytype-swift.property)

# concurrencyType (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The concurrency type for the context.

## Declaration

```swift
var concurrencyType: NSManagedObjectContextConcurrencyType { get }
```

<a id="Discussion"></a>

## Discussion

For more details on concurrency type, see [Concurrency](../nsmanagedobjectcontext.md#Concurrency).

## See Also

### Related Documentation

- [init(concurrencyType:)](init%28concurrencytype_%29.md): Deprecated. Creates a context that uses the specified concurrency type.

### Managing concurrency

- [NSManagedObjectContextQueryGenerationKey](../nsmanagedobjectcontextquerygenerationkey.md): Constant used to reference the query generation token.
- [mergeChanges(fromRemoteContextSave:into:)](mergechanges%28fromremotecontextsave_into_%29.md): Handles changes from other processes or from a serialized state.
- [automaticallyMergesChangesFromParent](automaticallymergeschangesfromparent.md): A Boolean value that indicates whether the context automatically merges changes saved to its persistent store coordinator or parent context.
- [mergePolicy](mergepolicy.md): The merge policy of the context.
- [queryGenerationToken](querygenerationtoken.md): Returns the token associated with the query generation currently in use by this context.
- [transactionAuthor](transactionauthor.md): The author for the context that is used as an identifier in persistent history transactions.
- [mergeChanges(fromContextDidSave:)](mergechanges%28fromcontextdidsave_%29.md): Merges the changes specified in a given notification.
- [setQueryGenerationFrom(\_:)](setquerygenerationfrom%28__%29.md): Sets the query generation this context should use.

# concurrencyType (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The concurrency type for the context.

## Declaration

```objectivec
@property (readonly) NSManagedObjectContextConcurrencyType concurrencyType;
```

<a id="Discussion"></a>

## Discussion

For more details on concurrency type, see [Concurrency](../nsmanagedobjectcontext.md#Concurrency).

## See Also

### Related Documentation

- [initWithConcurrencyType:](init%28concurrencytype_%29.md): Deprecated. Creates a context that uses the specified concurrency type.

### Managing concurrency

- [NSManagedObjectContextQueryGenerationKey](../nsmanagedobjectcontextquerygenerationkey.md): Constant used to reference the query generation token.
- [mergeChangesFromRemoteContextSave:intoContexts:](mergechanges%28fromremotecontextsave_into_%29.md): Handles changes from other processes or from a serialized state.
- [automaticallyMergesChangesFromParent](automaticallymergeschangesfromparent.md): A Boolean value that indicates whether the context automatically merges changes saved to its persistent store coordinator or parent context.
- [mergePolicy](mergepolicy.md): The merge policy of the context.
- [queryGenerationToken](querygenerationtoken.md): Returns the token associated with the query generation currently in use by this context.
- [transactionAuthor](transactionauthor.md): The author for the context that is used as an identifier in persistent history transactions.
- [mergeChangesFromContextDidSaveNotification:](mergechanges%28fromcontextdidsave_%29.md): Merges the changes specified in a given notification.
- [setQueryGenerationFromToken:error:](setquerygenerationfrom%28__%29.md): Sets the query generation this context should use.
