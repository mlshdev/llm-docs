> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderreplicatedextension](https://developer.apple.com/documentation/fileprovider/nsfileproviderreplicatedextension)

# NSFileProviderReplicatedExtension (Swift)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

A File Provider extension in which the system replicates the contents on disk.

## Declaration

```swift
protocol NSFileProviderReplicatedExtension : NSFileProviderEnumerating
```

## Mentioned In

- [Using push notifications to signal changes](using-push-notifications-to-signal-changes.md)

## Topics

### Creating and Removing File Providers

- [init(domain:)](nsfileproviderreplicatedextension/init%28domain_%29.md): Creates an instance of the file provider for the specified domain.
- [invalidate()](nsfileproviderreplicatedextension/invalidate%28%29.md): Tells the file provider to perform any necessary cleanup so that the system can deallocate it.

### Accessing Remote Content

- [item(for:request:completionHandler:)](nsfileproviderreplicatedextension/item%28for_request_completionhandler_%29.md): Asks the file provider for the metadata of the provided item.
- [fetchContents(for:version:request:completionHandler:)](nsfileproviderreplicatedextension/fetchcontents%28for_version_request_completionhandler_%29.md): Tells the file provider to download the requested item from remote storage.

### Managing Items

- [createItem(basedOn:fields:contents:options:request:completionHandler:)](nsfileproviderreplicatedextension/createitem%28basedon_fields_contents_options_request_completionhandler_%29.md): Tells the file provider to create or import an item based on a template.
- [NSFileProviderCreateItemOptions](nsfileprovidercreateitemoptions.md): Options for creating items.
- [modifyItem(\_:baseVersion:changedFields:contents:options:request:completionHandler:)](nsfileproviderreplicatedextension/modifyitem%28__baseversion_changedfields_contents_options_request_completionhandler_%29.md): Tells the file provider that an item’s content or metadata changed.
- [NSFileProviderModifyItemOptions](nsfileprovidermodifyitemoptions.md): Options for modifying items.
- [deleteItem(identifier:baseVersion:options:request:completionHandler:)](nsfileproviderreplicatedextension/deleteitem%28identifier_baseversion_options_request_completionhandler_%29.md): Tells the file provider to delete an item forever.
- [NSFileProviderDeleteItemOptions](nsfileproviderdeleteitemoptions.md): Options for deleting items.

### Tracking Materialized Items

- [materializedItemsDidChange(completionHandler:)](nsfileproviderreplicatedextension/materializeditemsdidchange%28completionhandler_%29.md): Tells the file provider that the set of materialized items changed.

### Tracking Pending Items

- [pendingItemsDidChange(completionHandler:)](nsfileproviderreplicatedextension/pendingitemsdidchange%28completionhandler_%29.md): Tells the file provider extension that the set of pending items has changed.

### Importing Domains

- [importDidFinish(completionHandler:)](nsfileproviderreplicatedextension/importdidfinish%28completionhandler_%29.md): Tells the File Provider extension that the system finished importing items.

## Relationships

### Inherits From

- [NSFileProviderEnumerating](nsfileproviderenumerating.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### File Provider protocols

- [NSFileProviderEnumerating](nsfileproviderenumerating.md): Support for enumerating the file provider’s contents.
- [NSFileProviderIncrementalContentFetching](nsfileproviderincrementalcontentfetching.md): Support for fetching changes to the item’s content.
- [NSFileProviderPartialContentFetching](nsfileproviderpartialcontentfetching.md): Support for fetching part of a file’s content.
- [NSFileProviderServicing](nsfileproviderservicing.md): Support for providing a custom service source.
- [NSFileProviderCustomAction](nsfileprovidercustomaction.md): Support for custom actions.
- [NSFileProviderExtensionActionIdentifier](nsfileproviderextensionactionidentifier.md): An identifier for custom actions.
- [NSFileProviderThumbnailing](nsfileproviderthumbnailing.md): Support for item thumbnails.
- [NSFileProviderPendingSetEnumerator](nsfileproviderpendingsetenumerator.md): A protocol for enumerating pending items.

# NSFileProviderReplicatedExtension (Objective-C)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

A File Provider extension in which the system replicates the contents on disk.

## Declaration

```objectivec
@protocol NSFileProviderReplicatedExtension <NSObject, NSFileProviderEnumerating>
```

## Mentioned In

- [Using push notifications to signal changes](using-push-notifications-to-signal-changes.md)

## Topics

### Creating and Removing File Providers

- [initWithDomain:](nsfileproviderreplicatedextension/init%28domain_%29.md): Creates an instance of the file provider for the specified domain.
- [invalidate](nsfileproviderreplicatedextension/invalidate%28%29.md): Tells the file provider to perform any necessary cleanup so that the system can deallocate it.

### Accessing Remote Content

- [itemForIdentifier:request:completionHandler:](nsfileproviderreplicatedextension/item%28for_request_completionhandler_%29.md): Asks the file provider for the metadata of the provided item.
- [fetchContentsForItemWithIdentifier:version:request:completionHandler:](nsfileproviderreplicatedextension/fetchcontents%28for_version_request_completionhandler_%29.md): Tells the file provider to download the requested item from remote storage.

### Managing Items

- [createItemBasedOnTemplate:fields:contents:options:request:completionHandler:](nsfileproviderreplicatedextension/createitem%28basedon_fields_contents_options_request_completionhandler_%29.md): Tells the file provider to create or import an item based on a template.
- [NSFileProviderCreateItemOptions](nsfileprovidercreateitemoptions.md): Options for creating items.
- [modifyItem:baseVersion:changedFields:contents:options:request:completionHandler:](nsfileproviderreplicatedextension/modifyitem%28__baseversion_changedfields_contents_options_request_completionhandler_%29.md): Tells the file provider that an item’s content or metadata changed.
- [NSFileProviderModifyItemOptions](nsfileprovidermodifyitemoptions.md): Options for modifying items.
- [deleteItemWithIdentifier:baseVersion:options:request:completionHandler:](nsfileproviderreplicatedextension/deleteitem%28identifier_baseversion_options_request_completionhandler_%29.md): Tells the file provider to delete an item forever.
- [NSFileProviderDeleteItemOptions](nsfileproviderdeleteitemoptions.md): Options for deleting items.

### Tracking Materialized Items

- [materializedItemsDidChangeWithCompletionHandler:](nsfileproviderreplicatedextension/materializeditemsdidchange%28completionhandler_%29.md): Tells the file provider that the set of materialized items changed.

### Tracking Pending Items

- [pendingItemsDidChangeWithCompletionHandler:](nsfileproviderreplicatedextension/pendingitemsdidchange%28completionhandler_%29.md): Tells the file provider extension that the set of pending items has changed.

### Importing Domains

- [importDidFinishWithCompletionHandler:](nsfileproviderreplicatedextension/importdidfinish%28completionhandler_%29.md): Tells the File Provider extension that the system finished importing items.

## Relationships

### Inherits From

- [NSFileProviderEnumerating](nsfileproviderenumerating.md)
- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### File Provider protocols

- [NSFileProviderEnumerating](nsfileproviderenumerating.md): Support for enumerating the file provider’s contents.
- [NSFileProviderIncrementalContentFetching](nsfileproviderincrementalcontentfetching.md): Support for fetching changes to the item’s content.
- [NSFileProviderPartialContentFetching](nsfileproviderpartialcontentfetching.md): Support for fetching part of a file’s content.
- [NSFileProviderServicing](nsfileproviderservicing.md): Support for providing a custom service source.
- [NSFileProviderCustomAction](nsfileprovidercustomaction.md): Support for custom actions.
- [NSFileProviderExtensionActionIdentifier](nsfileproviderextensionactionidentifier.md): An identifier for custom actions.
- [NSFileProviderThumbnailing](nsfileproviderthumbnailing.md): Support for item thumbnails.
- [NSFileProviderPendingSetEnumerator](nsfileproviderpendingsetenumerator.md): A protocol for enumerating pending items.
