> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableindex/deleteallsearchableitems(completionhandler:)](https://developer.apple.com/documentation/corespotlight/cssearchableindex/deleteallsearchableitems(completionhandler:))

# deleteAllSearchableItems(completionHandler:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Deletes all searchable items from the index.

## Declaration

```swift
func deleteAllSearchableItems(completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func deleteAllSearchableItems() async throws
```

## Parameters

- `completionHandler`: The block that’s called when the request has been journaled by the index (“journaled” means that the index makes a note that it has to perform this operation). Note that the request may not have completed.

  The block receives the following parameter:

  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func deleteAllSearchableItems() async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Managing items in an index

- [indexSearchableItems(\_:completionHandler:)](indexsearchableitems%28__completionhandler_%29.md): Adds or updates items in the index.
- [deleteSearchableItems(withDomainIdentifiers:completionHandler:)](deletesearchableitems%28withdomainidentifiers_completionhandler_%29.md): Removes from the index all searchable items associated with the specified domain.
- [deleteSearchableItems(withIdentifiers:completionHandler:)](deletesearchableitems%28withidentifiers_completionhandler_%29.md): Removes from the index all items with the specified identifiers.

# deleteAllSearchableItemsWithCompletionHandler: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Deletes all searchable items from the index.

## Declaration

```objectivec
- (void) deleteAllSearchableItemsWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The block that’s called when the request has been journaled by the index (“journaled” means that the index makes a note that it has to perform this operation). Note that the request may not have completed.

  The block receives the following parameter:

  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func deleteAllSearchableItems() async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Managing items in an index

- [indexSearchableItems:completionHandler:](indexsearchableitems%28__completionhandler_%29.md): Adds or updates items in the index.
- [deleteSearchableItemsWithDomainIdentifiers:completionHandler:](deletesearchableitems%28withdomainidentifiers_completionhandler_%29.md): Removes from the index all searchable items associated with the specified domain.
- [deleteSearchableItemsWithIdentifiers:completionHandler:](deletesearchableitems%28withidentifiers_completionhandler_%29.md): Removes from the index all items with the specified identifiers.
