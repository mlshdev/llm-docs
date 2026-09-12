> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidercreateitemoptions/mayalreadyexist](https://developer.apple.com/documentation/fileprovider/nsfileprovidercreateitemoptions/mayalreadyexist)

# mayAlreadyExist (Swift)

**Framework:** File Provider  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

An option indicating that the item may already exist in your remote storage.

## Declaration

```swift
static var mayAlreadyExist: NSFileProviderCreateItemOptions { get }
```

<a id="Discussion"></a>

## Discussion

Your extension should examine the item and determine whether it exists in your remote storage. Because the system may try to reimport a large number of items at once, avoid performing any computationally expensive tasks while trying to match items.

The system attempts to create an item using this flag in the following situations:

- The system reimports its items after an action that might cause it to lose synchronization with your remote storage, such as when restoring a backup or migrating to a new device.
- When merging two directories, the system attempts to create each child object passing the [mayAlreadyExist](mayalreadyexist.md) flag. Your extension can then recursively merge the child items.

After processing all the imported items, the system calls the [importDidFinish(completionHandler:)](../nsfileproviderreplicatedextension/importdidfinish%28completionhandler_%29.md) method.

## See Also

### Choosing Create Item Options

- [deletionConflicted](deletionconflicted.md): A value indicating a conflict for a deleted item.

# NSFileProviderCreateItemMayAlreadyExist (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

An option indicating that the item may already exist in your remote storage.

## Declaration

```objectivec
NSFileProviderCreateItemMayAlreadyExist
```

<a id="Discussion"></a>

## Discussion

Your extension should examine the item and determine whether it exists in your remote storage. Because the system may try to reimport a large number of items at once, avoid performing any computationally expensive tasks while trying to match items.

The system attempts to create an item using this flag in the following situations:

- The system reimports its items after an action that might cause it to lose synchronization with your remote storage, such as when restoring a backup or migrating to a new device.
- When merging two directories, the system attempts to create each child object passing the [NSFileProviderCreateItemMayAlreadyExist](mayalreadyexist.md) flag. Your extension can then recursively merge the child items.

After processing all the imported items, the system calls the [importDidFinishWithCompletionHandler:](../nsfileproviderreplicatedextension/importdidfinish%28completionhandler_%29.md) method.

## See Also

### Choosing Create Item Options

- [NSFileProviderCreateItemDeletionConflicted](deletionconflicted.md): A value indicating a conflict for a deleted item.
