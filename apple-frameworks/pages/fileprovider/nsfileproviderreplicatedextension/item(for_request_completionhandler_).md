> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderreplicatedextension/item(for:request:completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderreplicatedextension/item(for:request:completionhandler:))

# item(for:request:completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Asks the file provider for the metadata of the provided item.

## Declaration

```swift
func item(for identifier: NSFileProviderItemIdentifier, request: NSFileProviderRequest, completionHandler: @escaping (NSFileProviderItem?, (any Error)?) -> Void) -> Progress
```

## Parameters

- `identifier`: The item’s identifier.
- `request`: An object that identifies the context of that request, such as the requesting app.
- `completionHandler`: A block that you call after downloading the item’s metadata. The block takes the following parameters:

  - **`item`**: A new file provider item, containing all the item’s metadata.
  - **`error`**: If an error occurs, this object contains information about the error; otherwise, it’s `nil`.

<a id="return-value"></a>

## Return Value

An item that tracks your extension’s progress. The system automatically calls [cancel()](../../foundation/progress/cancel%28%29.md)  on the progress object when an error occurs.

<a id="Discussion"></a>

## Discussion

If your extension doesn’t recognize the item, pass [NSFileProviderError.Code.noSuchItem](../nsfileprovidererror/code/nosuchitem.md) to the handler. The system assumes the item is no longer in the domain, and attempts to delete the local copy. If the delete attempt fails because the item has local changes, the system reimports the item by calling [createItem(basedOn:fields:contents:options:request:completionHandler:)](createitem%28basedon_fields_contents_options_request_completionhandler_%29.md).

If you pass [NSFileProviderError.Code.notAuthenticated](../nsfileprovidererror/code/notauthenticated.md) or [NSFileProviderError.Code.serverUnreachable](../nsfileprovidererror/code/serverunreachable.md) to the handler, the system presents an appropriate alert to the user, but doesn’t try to access the metadata until triggered again by the user.

The system considers any other errors to be transient, and automatically retries the method call.

## See Also

### Accessing Remote Content

- [fetchContents(for:version:request:completionHandler:)](fetchcontents%28for_version_request_completionhandler_%29.md): Tells the file provider to download the requested item from remote storage.

# itemForIdentifier:request:completionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

Asks the file provider for the metadata of the provided item.

## Declaration

```objectivec
- (NSProgress *) itemForIdentifier:(NSFileProviderItemIdentifier) identifier request:(NSFileProviderRequest *) request completionHandler:(void (^)(NSFileProviderItem , NSError *)) completionHandler;
```

## Parameters

- `identifier`: The item’s identifier.
- `request`: An object that identifies the context of that request, such as the requesting app.
- `completionHandler`: A block that you call after downloading the item’s metadata. The block takes the following parameters:

  - **`item`**: A new file provider item, containing all the item’s metadata.
  - **`error`**: If an error occurs, this object contains information about the error; otherwise, it’s `nil`.

<a id="return-value"></a>

## Return Value

An item that tracks your extension’s progress. The system automatically calls [cancel](../../foundation/progress/cancel%28%29.md)  on the progress object when an error occurs.

<a id="Discussion"></a>

## Discussion

If your extension doesn’t recognize the item, pass [NSFileProviderErrorNoSuchItem](../nsfileprovidererror/code/nosuchitem.md) to the handler. The system assumes the item is no longer in the domain, and attempts to delete the local copy. If the delete attempt fails because the item has local changes, the system reimports the item by calling [createItemBasedOnTemplate:fields:contents:options:request:completionHandler:](createitem%28basedon_fields_contents_options_request_completionhandler_%29.md).

If you pass [NSFileProviderErrorNotAuthenticated](../nsfileprovidererror/code/notauthenticated.md) or [NSFileProviderErrorServerUnreachable](../nsfileprovidererror/code/serverunreachable.md) to the handler, the system presents an appropriate alert to the user, but doesn’t try to access the metadata until triggered again by the user.

The system considers any other errors to be transient, and automatically retries the method call.

## See Also

### Accessing Remote Content

- [fetchContentsForItemWithIdentifier:version:request:completionHandler:](fetchcontents%28for_version_request_completionhandler_%29.md): Tells the file provider to download the requested item from remote storage.
