> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableindex/deletesearchableitems(withdomainidentifiers:completionhandler:)](https://developer.apple.com/documentation/corespotlight/cssearchableindex/deletesearchableitems(withdomainidentifiers:completionhandler:))

# deleteSearchableItems(withDomainIdentifiers:completionHandler:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Removes from the index all searchable items associated with the specified domain.

## Declaration

```swift
func deleteSearchableItems(withDomainIdentifiers domainIdentifiers: [String], completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func deleteSearchableItems(withDomainIdentifiers domainIdentifiers: [String]) async throws
```

## Parameters

- `domainIdentifiers`: The domain identifier that describes the group of items to delete. To learn more about domain identifiers, see [domainIdentifier](../cssearchableitem/domainidentifier.md).
- `completionHandler`: The block that’s called when the request has been journaled by the index (“journaled” means that the index makes a note that it has to perform this operation). Note that the request may not have completed.

  The block receives the following parameter:

  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func deleteSearchableItems(withDomainIdentifiers domainIdentifiers: [String]) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Use this method to delete groups of items. Note that the delete operation is recursive. For example, if domain identifiers are of the form `<account-id>.<mailbox-id>`, calling this method and specifying `<account-id>` deletes items with the specified account and any mailbox.

## See Also

### Managing items in an index

- [indexSearchableItems(\_:completionHandler:)](indexsearchableitems%28__completionhandler_%29.md): Adds or updates items in the index.
- [deleteAllSearchableItems(completionHandler:)](deleteallsearchableitems%28completionhandler_%29.md): Deletes all searchable items from the index.
- [deleteSearchableItems(withIdentifiers:completionHandler:)](deletesearchableitems%28withidentifiers_completionhandler_%29.md): Removes from the index all items with the specified identifiers.

# deleteSearchableItemsWithDomainIdentifiers:completionHandler: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Removes from the index all searchable items associated with the specified domain.

## Declaration

```objectivec
- (void) deleteSearchableItemsWithDomainIdentifiers:(NSArray<NSString *> *) domainIdentifiers completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `domainIdentifiers`: The domain identifier that describes the group of items to delete. To learn more about domain identifiers, see [domainIdentifier](../cssearchableitem/domainidentifier.md).
- `completionHandler`: The block that’s called when the request has been journaled by the index (“journaled” means that the index makes a note that it has to perform this operation). Note that the request may not have completed.

  The block receives the following parameter:

  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func deleteSearchableItems(withDomainIdentifiers domainIdentifiers: [String]) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Use this method to delete groups of items. Note that the delete operation is recursive. For example, if domain identifiers are of the form `<account-id>.<mailbox-id>`, calling this method and specifying `<account-id>` deletes items with the specified account and any mailbox.

## See Also

### Managing items in an index

- [indexSearchableItems:completionHandler:](indexsearchableitems%28__completionhandler_%29.md): Adds or updates items in the index.
- [deleteAllSearchableItemsWithCompletionHandler:](deleteallsearchableitems%28completionhandler_%29.md): Deletes all searchable items from the index.
- [deleteSearchableItemsWithIdentifiers:completionHandler:](deletesearchableitems%28withidentifiers_completionhandler_%29.md): Removes from the index all items with the specified identifiers.
