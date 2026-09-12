> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/waitforchanges(below:completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/waitforchanges(below:completionhandler:))

# waitForChanges(below:completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Requests a notification after the system completes all the specified changes.

## Declaration

```swift
func waitForChanges(below itemIdentifier: NSFileProviderItemIdentifier, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func waitForChanges(below itemIdentifier: NSFileProviderItemIdentifier) async throws
```

## Parameters

- `itemIdentifier`: The item’s identifier.
- `completionHandler`: A block that the system calls after all the changes are complete. The block takes the following parameters:

  - **`error`**: If an error occurs, this object contains information about the error; otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func waitForChanges(below itemIdentifier: NSFileProviderItemIdentifier) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method waits for all the changes to the item’s descendants to complete before calling the completion handler. If an error occurs during this process, the system immediately passes the error to the completion handler, and you can’t assume all the changes have completed.

> **Note**

>  The system doesn’t wait for changes to the item specified by the `itemIdentifier` parameter. It only waits for changes to the item’s children. As a result, you can use this method inside a call to [modifyItem(\_:baseVersion:changedFields:contents:options:request:completionHandler:)](../nsfileproviderreplicatedextension/modifyitem%28__baseversion_changedfields_contents_options_request_completionhandler_%29.md).

If the `itemIdentifier` property doesn’t refer to a directory, this method immediately calls the completion handler.

## See Also

### Performing actions

- [placeholderURL(for:)](placeholderurl%28for_%29.md): Returns a placeholder URL for a given document URL.
- [writePlaceholder(at:withMetadata:)](writeplaceholder%28at_withmetadata_%29.md): Writes a document placeholder with the provided metadata.
- [register(\_:forItemWithIdentifier:completionHandler:)](register%28__foritemwithidentifier_completionhandler_%29.md): Registers the URL session task responsible for the specified item.
- [signalEnumerator(for:completionHandler:)](signalenumerator%28for_completionhandler_%29.md): Alerts the system to changes in the specified folder’s content.
- [globalProgress(for:)](globalprogress%28for_%29.md): Returns a progress object that tracks either the uploading or downloading of items from the File Provider extension’s remote storage.

# waitForChangesOnItemsBelowItemWithIdentifier:completionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

Requests a notification after the system completes all the specified changes.

## Declaration

```objectivec
- (void) waitForChangesOnItemsBelowItemWithIdentifier:(NSFileProviderItemIdentifier) itemIdentifier completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `itemIdentifier`: The item’s identifier.
- `completionHandler`: A block that the system calls after all the changes are complete. The block takes the following parameters:

  - **`error`**: If an error occurs, this object contains information about the error; otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func waitForChanges(below itemIdentifier: NSFileProviderItemIdentifier) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method waits for all the changes to the item’s descendants to complete before calling the completion handler. If an error occurs during this process, the system immediately passes the error to the completion handler, and you can’t assume all the changes have completed.

> **Note**

>  The system doesn’t wait for changes to the item specified by the `itemIdentifier` parameter. It only waits for changes to the item’s children. As a result, you can use this method inside a call to [modifyItem:baseVersion:changedFields:contents:options:request:completionHandler:](../nsfileproviderreplicatedextension/modifyitem%28__baseversion_changedfields_contents_options_request_completionhandler_%29.md).

If the `itemIdentifier` property doesn’t refer to a directory, this method immediately calls the completion handler.

## See Also

### Performing actions

- [placeholderURLForURL:](placeholderurl%28for_%29.md): Returns a placeholder URL for a given document URL.
- [writePlaceholderAtURL:withMetadata:error:](writeplaceholder%28at_withmetadata_%29.md): Writes a document placeholder with the provided metadata.
- [registerURLSessionTask:forItemWithIdentifier:completionHandler:](register%28__foritemwithidentifier_completionhandler_%29.md): Registers the URL session task responsible for the specified item.
- [signalEnumeratorForContainerItemIdentifier:completionHandler:](signalenumerator%28for_completionhandler_%29.md): Alerts the system to changes in the specified folder’s content.
- [globalProgressForKind:](globalprogress%28for_%29.md): Returns a progress object that tracks either the uploading or downloading of items from the File Provider extension’s remote storage.
