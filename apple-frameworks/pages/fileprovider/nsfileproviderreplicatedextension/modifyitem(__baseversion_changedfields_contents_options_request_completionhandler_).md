> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderreplicatedextension/modifyitem(_:baseversion:changedfields:contents:options:request:completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderreplicatedextension/modifyitem(_:baseversion:changedfields:contents:options:request:completionhandler:))

# modifyItem(\_:baseVersion:changedFields:contents:options:request:completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Tells the file provider that an item’s content or metadata changed.

## Declaration

```swift
func modifyItem(_ item: NSFileProviderItem, baseVersion version: NSFileProviderItemVersion, changedFields: NSFileProviderItemFields, contents newContents: URL?, options: NSFileProviderModifyItemOptions = [], request: NSFileProviderRequest, completionHandler: @escaping (NSFileProviderItem?, NSFileProviderItemFields, Bool, (any Error)?) -> Void) -> Progress
```

## Parameters

- `item`: The item to modify.
- `version`: The item’s version.
- `changedFields`: The fields that have changed.
- `newContents`: A URL for the local copy of the item’s new contents.
- `options`: The modification options.
- `request`: An object that identifies the context of that request, such as the requesting app.
- `completionHandler`: A block that you call after uploading the changes to your remote storage. You pass the following parameters:

  - **`item`**: The newly modified item.
  - **`stillPendingFields`**: Any fields that you haven’t yet applied. If you can apply all the fields at once, pass an empty `NSFileProviderItemField` instance.
  - **`shouldFetchContent`**: A Boolean value that indicates whether the system should fetch the item’s content from your remote storage.
  - **`error`**: If an error occurs, this object contains information about the error; otherwise, it’s `nil`.

<a id="return-value"></a>

## Return Value

An item that tracks your extension’s progress.

<a id="Discussion"></a>

## Discussion

The system calls this method when the user modifies an item—for example, moving it, renaming it, or updating its content. The `changedFields` parameter may contain multiple items, indicating that multiple changes have occurred. Update the version of the item in your remote storage to match, and then call the callback handler.

## See Also

### Managing Items

- [createItem(basedOn:fields:contents:options:request:completionHandler:)](createitem%28basedon_fields_contents_options_request_completionhandler_%29.md): Tells the file provider to create or import an item based on a template.
- [NSFileProviderCreateItemOptions](../nsfileprovidercreateitemoptions.md): Options for creating items.
- [NSFileProviderModifyItemOptions](../nsfileprovidermodifyitemoptions.md): Options for modifying items.
- [deleteItem(identifier:baseVersion:options:request:completionHandler:)](deleteitem%28identifier_baseversion_options_request_completionhandler_%29.md): Tells the file provider to delete an item forever.
- [NSFileProviderDeleteItemOptions](../nsfileproviderdeleteitemoptions.md): Options for deleting items.

# modifyItem:baseVersion:changedFields:contents:options:request:completionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

Tells the file provider that an item’s content or metadata changed.

## Declaration

```objectivec
- (NSProgress *) modifyItem:(NSFileProviderItem) item baseVersion:(NSFileProviderItemVersion *) version changedFields:(NSFileProviderItemFields) changedFields contents:(NSURL *) newContents options:(NSFileProviderModifyItemOptions) options request:(NSFileProviderRequest *) request completionHandler:(void (^)(NSFileProviderItem item, NSFileProviderItemFields stillPendingFields, BOOL shouldFetchContent, NSError *error)) completionHandler;
```

## Parameters

- `item`: The item to modify.
- `version`: The item’s version.
- `changedFields`: The fields that have changed.
- `newContents`: A URL for the local copy of the item’s new contents.
- `options`: The modification options.
- `request`: An object that identifies the context of that request, such as the requesting app.
- `completionHandler`: A block that you call after uploading the changes to your remote storage. You pass the following parameters:

  - **`item`**: The newly modified item.
  - **`stillPendingFields`**: Any fields that you haven’t yet applied. If you can apply all the fields at once, pass an empty `NSFileProviderItemField` instance.
  - **`shouldFetchContent`**: A Boolean value that indicates whether the system should fetch the item’s content from your remote storage.
  - **`error`**: If an error occurs, this object contains information about the error; otherwise, it’s `nil`.

<a id="return-value"></a>

## Return Value

An item that tracks your extension’s progress.

<a id="Discussion"></a>

## Discussion

The system calls this method when the user modifies an item—for example, moving it, renaming it, or updating its content. The `changedFields` parameter may contain multiple items, indicating that multiple changes have occurred. Update the version of the item in your remote storage to match, and then call the callback handler.

## See Also

### Managing Items

- [createItemBasedOnTemplate:fields:contents:options:request:completionHandler:](createitem%28basedon_fields_contents_options_request_completionhandler_%29.md): Tells the file provider to create or import an item based on a template.
- [NSFileProviderCreateItemOptions](../nsfileprovidercreateitemoptions.md): Options for creating items.
- [NSFileProviderModifyItemOptions](../nsfileprovidermodifyitemoptions.md): Options for modifying items.
- [deleteItemWithIdentifier:baseVersion:options:request:completionHandler:](deleteitem%28identifier_baseversion_options_request_completionhandler_%29.md): Tells the file provider to delete an item forever.
- [NSFileProviderDeleteItemOptions](../nsfileproviderdeleteitemoptions.md): Options for deleting items.
