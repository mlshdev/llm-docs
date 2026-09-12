> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidercreateitemoptions/deletionconflicted](https://developer.apple.com/documentation/fileprovider/nsfileprovidercreateitemoptions/deletionconflicted)

# deletionConflicted (Swift)

**Framework:** File Provider  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

A value indicating a conflict for a deleted item.

## Declaration

```swift
static var deletionConflicted: NSFileProviderCreateItemOptions { get }
```

<a id="Discussion"></a>

## Discussion

If the File Provider extension signals the deletion of an item but the deletion conflicts with local edits, the system attempts to create the modified item by calling the [createItem(basedOn:fields:contents:options:request:completionHandler:)](../nsfileproviderreplicatedextension/createitem%28basedon_fields_contents_options_request_completionhandler_%29.md) method, and passing this value as an option.

## See Also

### Choosing Create Item Options

- [mayAlreadyExist](mayalreadyexist.md): An option indicating that the item may already exist in your remote storage.

# NSFileProviderCreateItemDeletionConflicted (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

A value indicating a conflict for a deleted item.

## Declaration

```objectivec
NSFileProviderCreateItemDeletionConflicted
```

<a id="Discussion"></a>

## Discussion

If the File Provider extension signals the deletion of an item but the deletion conflicts with local edits, the system attempts to create the modified item by calling the [createItemBasedOnTemplate:fields:contents:options:request:completionHandler:](../nsfileproviderreplicatedextension/createitem%28basedon_fields_contents_options_request_completionhandler_%29.md) method, and passing this value as an option.

## See Also

### Choosing Create Item Options

- [NSFileProviderCreateItemMayAlreadyExist](mayalreadyexist.md): An option indicating that the item may already exist in your remote storage.
