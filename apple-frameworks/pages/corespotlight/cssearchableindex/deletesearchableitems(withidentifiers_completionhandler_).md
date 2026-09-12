> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableindex/deletesearchableitems(withidentifiers:completionhandler:)](https://developer.apple.com/documentation/corespotlight/cssearchableindex/deletesearchableitems(withidentifiers:completionhandler:))

# deleteSearchableItems(withIdentifiers:completionHandler:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Removes from the index all items with the specified identifiers.

## Declaration

```swift
func deleteSearchableItems(withIdentifiers identifiers: [String], completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func deleteSearchableItems(withIdentifiers identifiers: [String]) async throws
```

## Parameters

- `identifiers`: An array of identifiers that specify the items to delete.
- `completionHandler`: The block that’s called when the data has been journaled by the index, which means that the index makes a note that it has to perform this operation. If the completion handler returns an error, it means that the data wasn’t journaled correctly and the client should retry the request.

  The block receives the following parameter:

  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func deleteSearchableItems(withIdentifiers identifiers: [String]) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

The [searchableIndex(\_:reindexSearchableItemsWithIdentifiers:acknowledgementHandler:)](../cssearchableindexdelegate/searchableindex%28__reindexsearchableitemswithidentifiers_acknowledgementhandler_%29.md) protocol method is called in the case that the journaling completed successfully, but the data was not able to be indexed for some reason.

## See Also

### Managing items in an index

- [indexSearchableItems(\_:completionHandler:)](indexsearchableitems%28__completionhandler_%29.md): Adds or updates items in the index.
- [deleteAllSearchableItems(completionHandler:)](deleteallsearchableitems%28completionhandler_%29.md): Deletes all searchable items from the index.
- [deleteSearchableItems(withDomainIdentifiers:completionHandler:)](deletesearchableitems%28withdomainidentifiers_completionhandler_%29.md): Removes from the index all searchable items associated with the specified domain.

# deleteSearchableItemsWithIdentifiers:completionHandler: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Removes from the index all items with the specified identifiers.

## Declaration

```objectivec
- (void) deleteSearchableItemsWithIdentifiers:(NSArray<NSString *> *) identifiers completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `identifiers`: An array of identifiers that specify the items to delete.
- `completionHandler`: The block that’s called when the data has been journaled by the index, which means that the index makes a note that it has to perform this operation. If the completion handler returns an error, it means that the data wasn’t journaled correctly and the client should retry the request.

  The block receives the following parameter:

  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func deleteSearchableItems(withIdentifiers identifiers: [String]) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

The [searchableIndex:reindexSearchableItemsWithIdentifiers:acknowledgementHandler:](../cssearchableindexdelegate/searchableindex%28__reindexsearchableitemswithidentifiers_acknowledgementhandler_%29.md) protocol method is called in the case that the journaling completed successfully, but the data was not able to be indexed for some reason.

## See Also

### Managing items in an index

- [indexSearchableItems:completionHandler:](indexsearchableitems%28__completionhandler_%29.md): Adds or updates items in the index.
- [deleteAllSearchableItemsWithCompletionHandler:](deleteallsearchableitems%28completionhandler_%29.md): Deletes all searchable items from the index.
- [deleteSearchableItemsWithDomainIdentifiers:completionHandler:](deletesearchableitems%28withdomainidentifiers_completionhandler_%29.md): Removes from the index all searchable items associated with the specified domain.
