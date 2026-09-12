> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderreplicatedextension/deleteitem(identifier:baseversion:options:request:completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderreplicatedextension/deleteitem(identifier:baseversion:options:request:completionhandler:))

# deleteItem(identifier:baseVersion:options:request:completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Tells the file provider to delete an item forever.

## Declaration

```swift
func deleteItem(identifier: NSFileProviderItemIdentifier, baseVersion version: NSFileProviderItemVersion, options: NSFileProviderDeleteItemOptions = [], request: NSFileProviderRequest, completionHandler: @escaping ((any Error)?) -> Void) -> Progress
```

## Parameters

- `identifier`: The identifier of the object to delete.
- `version`: The version of the item to delete.
- `options`: The options for deleting the item.
- `request`: An object that identifies the context of that request, such as the requesting app.
- `completionHandler`: A block that you call after deleting the item from your remote storage. You pass the following parameter:

  - **`error`**: If an error occurs, this object contains information about the error; otherwise, it’s `nil`.

<a id="return-value"></a>

## Return Value

An item that tracks your extension’s progress.

<a id="Discussion"></a>

## Discussion

The system calls this method when the user deletes an item that was already in the trash. Users can only delete items that have the [allowsDeleting](../nsfileprovideritemcapabilities/allowsdeleting.md) capability.

Remove the item from the trash and delete it from your remote storage. If the item is in the working set, notify the system about the change by calling [signalEnumerator(for:completionHandler:)](../nsfileprovidermanager/signalenumerator%28for_completionhandler_%29.md) and passing [workingSet](../nsfileprovideritemidentifier/workingset.md) for the `containerItemIdentifier` parameter. If the deletion is recursive, be sure to check all the deleted items, and notify the system to any changes in the working set.

If your extension doesn’t recognize the item, you can just report success. The system then removes the local copy of the item.

## See Also

### Managing Items

- [createItem(basedOn:fields:contents:options:request:completionHandler:)](createitem%28basedon_fields_contents_options_request_completionhandler_%29.md): Tells the file provider to create or import an item based on a template.
- [NSFileProviderCreateItemOptions](../nsfileprovidercreateitemoptions.md): Options for creating items.
- [modifyItem(\_:baseVersion:changedFields:contents:options:request:completionHandler:)](modifyitem%28__baseversion_changedfields_contents_options_request_completionhandler_%29.md): Tells the file provider that an item’s content or metadata changed.
- [NSFileProviderModifyItemOptions](../nsfileprovidermodifyitemoptions.md): Options for modifying items.
- [NSFileProviderDeleteItemOptions](../nsfileproviderdeleteitemoptions.md): Options for deleting items.

# deleteItemWithIdentifier:baseVersion:options:request:completionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

Tells the file provider to delete an item forever.

## Declaration

```objectivec
- (NSProgress *) deleteItemWithIdentifier:(NSFileProviderItemIdentifier) identifier baseVersion:(NSFileProviderItemVersion *) version options:(NSFileProviderDeleteItemOptions) options request:(NSFileProviderRequest *) request completionHandler:(void (^)(NSError *)) completionHandler;
```

## Parameters

- `identifier`: The identifier of the object to delete.
- `version`: The version of the item to delete.
- `options`: The options for deleting the item.
- `request`: An object that identifies the context of that request, such as the requesting app.
- `completionHandler`: A block that you call after deleting the item from your remote storage. You pass the following parameter:

  - **`error`**: If an error occurs, this object contains information about the error; otherwise, it’s `nil`.

<a id="return-value"></a>

## Return Value

An item that tracks your extension’s progress.

<a id="Discussion"></a>

## Discussion

The system calls this method when the user deletes an item that was already in the trash. Users can only delete items that have the [NSFileProviderItemCapabilitiesAllowsDeleting](../nsfileprovideritemcapabilities/allowsdeleting.md) capability.

Remove the item from the trash and delete it from your remote storage. If the item is in the working set, notify the system about the change by calling [signalEnumeratorForContainerItemIdentifier:completionHandler:](../nsfileprovidermanager/signalenumerator%28for_completionhandler_%29.md) and passing [NSFileProviderWorkingSetContainerItemIdentifier](../nsfileprovideritemidentifier/workingset.md) for the `containerItemIdentifier` parameter. If the deletion is recursive, be sure to check all the deleted items, and notify the system to any changes in the working set.

If your extension doesn’t recognize the item, you can just report success. The system then removes the local copy of the item.

## See Also

### Managing Items

- [createItemBasedOnTemplate:fields:contents:options:request:completionHandler:](createitem%28basedon_fields_contents_options_request_completionhandler_%29.md): Tells the file provider to create or import an item based on a template.
- [NSFileProviderCreateItemOptions](../nsfileprovidercreateitemoptions.md): Options for creating items.
- [modifyItem:baseVersion:changedFields:contents:options:request:completionHandler:](modifyitem%28__baseversion_changedfields_contents_options_request_completionhandler_%29.md): Tells the file provider that an item’s content or metadata changed.
- [NSFileProviderModifyItemOptions](../nsfileprovidermodifyitemoptions.md): Options for modifying items.
- [NSFileProviderDeleteItemOptions](../nsfileproviderdeleteitemoptions.md): Options for deleting items.
