> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/transactionauthor](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/transactionauthor)

# transactionAuthor (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The author for the context that is used as an identifier in persistent history transactions.

## Declaration

```swift
var transactionAuthor: String? { get set }
```

## Mentioned In

- [Consuming relevant store changes](../consuming-relevant-store-changes.md)

<a id="Discussion"></a>

## Discussion

Set a managed object context’s [transactionAuthor](transactionauthor.md) before saving it to differentiate among multiple call sites that modify the same context. Doing this records an [author](../nspersistenthistorytransaction/author.md) in subsequent transactions.

```swift
func addColor(_ name: String, in context: NSManagedObjectContext) {
    let color = Color(context: context)
    color.name = name
    color.creationDate = Date()

    // set the transaction author
    context.transactionAuthor = "addColor"
    persistentContainer.saveContext(context)
    context.transactionAuthor = nil
}
```

Reset the context’s [transactionAuthor](transactionauthor.md) to nil after the save to prevent misattribution of future transactions.

## See Also

### Managing concurrency

- [NSManagedObjectContextQueryGenerationKey](../nsmanagedobjectcontextquerygenerationkey.md): Constant used to reference the query generation token.
- [mergeChanges(fromRemoteContextSave:into:)](mergechanges%28fromremotecontextsave_into_%29.md): Handles changes from other processes or from a serialized state.
- [automaticallyMergesChangesFromParent](automaticallymergeschangesfromparent.md): A Boolean value that indicates whether the context automatically merges changes saved to its persistent store coordinator or parent context.
- [concurrencyType](concurrencytype-swift.property.md): The concurrency type for the context.
- [mergePolicy](mergepolicy.md): The merge policy of the context.
- [queryGenerationToken](querygenerationtoken.md): Returns the token associated with the query generation currently in use by this context.
- [mergeChanges(fromContextDidSave:)](mergechanges%28fromcontextdidsave_%29.md): Merges the changes specified in a given notification.
- [setQueryGenerationFrom(\_:)](setquerygenerationfrom%28__%29.md): Sets the query generation this context should use.

# transactionAuthor (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The author for the context that is used as an identifier in persistent history transactions.

## Declaration

```objectivec
@property (copy, nullable) NSString * transactionAuthor;
```

## Mentioned In

- [Consuming relevant store changes](../consuming-relevant-store-changes.md)

<a id="Discussion"></a>

## Discussion

Set a managed object context’s [transactionAuthor](transactionauthor.md) before saving it to differentiate among multiple call sites that modify the same context. Doing this records an [author](../nspersistenthistorytransaction/author.md) in subsequent transactions.

```swift
func addColor(_ name: String, in context: NSManagedObjectContext) {
    let color = Color(context: context)
    color.name = name
    color.creationDate = Date()

    // set the transaction author
    context.transactionAuthor = "addColor"
    persistentContainer.saveContext(context)
    context.transactionAuthor = nil
}
```

Reset the context’s [transactionAuthor](transactionauthor.md) to nil after the save to prevent misattribution of future transactions.

## See Also

### Managing concurrency

- [NSManagedObjectContextQueryGenerationKey](../nsmanagedobjectcontextquerygenerationkey.md): Constant used to reference the query generation token.
- [mergeChangesFromRemoteContextSave:intoContexts:](mergechanges%28fromremotecontextsave_into_%29.md): Handles changes from other processes or from a serialized state.
- [automaticallyMergesChangesFromParent](automaticallymergeschangesfromparent.md): A Boolean value that indicates whether the context automatically merges changes saved to its persistent store coordinator or parent context.
- [concurrencyType](concurrencytype-swift.property.md): The concurrency type for the context.
- [mergePolicy](mergepolicy.md): The merge policy of the context.
- [queryGenerationToken](querygenerationtoken.md): Returns the token associated with the query generation currently in use by this context.
- [mergeChangesFromContextDidSaveNotification:](mergechanges%28fromcontextdidsave_%29.md): Merges the changes specified in a given notification.
- [setQueryGenerationFromToken:error:](setquerygenerationfrom%28__%29.md): Sets the query generation this context should use.
