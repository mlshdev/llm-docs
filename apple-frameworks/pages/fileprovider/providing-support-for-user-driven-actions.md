> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/providing-support-for-user-driven-actions](https://developer.apple.com/documentation/fileprovider/providing-support-for-user-driven-actions)

# Providing support for user-driven actions (Swift)

**Framework:** File Provider

Override methods to handle user-initiated actions.

<a id="overview"></a>

## Overview

When the user performs an action in the document browser (for example, moving, renaming, or deleting an item) the system calls the corresponding method on your [NSFileProviderExtension](nsfileproviderextension.md) subclass.

The following table shows the action method for each action type:

| User action | Action method |
| --- | --- |
| Creates a new folder | [createDirectory(withName:inParentItemIdentifier:completionHandler:)](nsfileproviderextension/createdirectory%28withname_inparentitemidentifier_completionhandler_%29.md) |
| Deletes a document or folder | [deleteItem(withIdentifier:completionHandler:)](nsfileproviderextension/deleteitem%28withidentifier_completionhandler_%29.md) |
| Imports a document | [importDocument(at:toParentItemIdentifier:completionHandler:)](nsfileproviderextension/importdocument%28at_toparentitemidentifier_completionhandler_%29.md) |
| Renames a document or folder | [renameItem(withIdentifier:toName:completionHandler:)](nsfileproviderextension/renameitem%28withidentifier_toname_completionhandler_%29.md) |
| Moves a document or folder | [reparentItem(withIdentifier:toParentItemWithIdentifier:newName:completionHandler:)](nsfileproviderextension/reparentitem%28withidentifier_toparentitemwithidentifier_newname_completionhandler_%29.md) |
| Sets or changes a folder’s favorite rank | [setFavoriteRank(\_:forItemIdentifier:completionHandler:)](nsfileproviderextension/setfavoriterank%28__foritemidentifier_completionhandler_%29.md) |
| Uses a document | [setLastUsedDate(\_:forItemIdentifier:completionHandler:)](nsfileproviderextension/setlastuseddate%28__foritemidentifier_completionhandler_%29.md) |
| Tags or untags a document or folder | [setTagData(\_:forItemIdentifier:completionHandler:)](nsfileproviderextension/settagdata%28__foritemidentifier_completionhandler_%29.md) |
| Moves a document or folder to the trash | [trashItem(withIdentifier:completionHandler:)](nsfileproviderextension/trashitem%28withidentifier_completionhandler_%29.md) |
| Removes a document or folder from the trash | [untrashItem(withIdentifier:toParentItemIdentifier:completionHandler:)](nsfileproviderextension/untrashitem%28withidentifier_toparentitemidentifier_completionhandler_%29.md) |

When the action method is called, ensure that your implementation:

1. Makes any necessary local changes, including updates to the working set
2. Schedules a background update for your server
3. Signals that the changes have occurred
4. Calls the completion handler with the results

All the action methods are expected to work offline, and should return immediately. Call the completion handler before performing any network activity or other long-running tasks. Defer these tasks to the background.

## Topics

### Signaling Changes

- [Signaling Changes for User-Driven Actions](signaling-changes-for-user-driven-actions.md): Signal the system about any changes created by an action.

### Handling Errors

- [Handling Errors with User-Driven Actions](handling-errors-with-user-driven-actions.md): Handle any errors that occur while processing the action.

## See Also

### Handling actions

- [createDirectory(withName:inParentItemIdentifier:completionHandler:)](nsfileproviderextension/createdirectory%28withname_inparentitemidentifier_completionhandler_%29.md): Creates a directory with the given name inside the given parent directory.
- [deleteItem(withIdentifier:completionHandler:)](nsfileproviderextension/deleteitem%28withidentifier_completionhandler_%29.md): Permanently deletes an item from the trash.
- [importDocument(at:toParentItemIdentifier:completionHandler:)](nsfileproviderextension/importdocument%28at_toparentitemidentifier_completionhandler_%29.md): Imports a file or package into the given parent directory.
- [renameItem(withIdentifier:toName:completionHandler:)](nsfileproviderextension/renameitem%28withidentifier_toname_completionhandler_%29.md): Renames a document or directory.
- [reparentItem(withIdentifier:toParentItemWithIdentifier:newName:completionHandler:)](nsfileproviderextension/reparentitem%28withidentifier_toparentitemwithidentifier_newname_completionhandler_%29.md): Moves the specified item into the given parent directory.
- [setFavoriteRank(\_:forItemIdentifier:completionHandler:)](nsfileproviderextension/setfavoriterank%28__foritemidentifier_completionhandler_%29.md): Marks a directory as a favorite and sets its relative order in the Favorites list.
- [setLastUsedDate(\_:forItemIdentifier:completionHandler:)](nsfileproviderextension/setlastuseddate%28__foritemidentifier_completionhandler_%29.md): Marks an item as recently used and sets its relative order in the Recents list.
- [setTagData(\_:forItemIdentifier:completionHandler:)](nsfileproviderextension/settagdata%28__foritemidentifier_completionhandler_%29.md): Tags an item.
- [trashItem(withIdentifier:completionHandler:)](nsfileproviderextension/trashitem%28withidentifier_completionhandler_%29.md): Moves an item into the trash.
- [untrashItem(withIdentifier:toParentItemIdentifier:completionHandler:)](nsfileproviderextension/untrashitem%28withidentifier_toparentitemidentifier_completionhandler_%29.md): Moves an item out of the trash.

# Providing support for user-driven actions (Objective-C)

**Framework:** File Provider

Override methods to handle user-initiated actions.

<a id="overview"></a>

## Overview

When the user performs an action in the document browser (for example, moving, renaming, or deleting an item) the system calls the corresponding method on your [NSFileProviderExtension](nsfileproviderextension.md) subclass.

The following table shows the action method for each action type:

| User action | Action method |
| --- | --- |
| Creates a new folder | [createDirectoryWithName:inParentItemIdentifier:completionHandler:](nsfileproviderextension/createdirectory%28withname_inparentitemidentifier_completionhandler_%29.md) |
| Deletes a document or folder | [deleteItemWithIdentifier:completionHandler:](nsfileproviderextension/deleteitem%28withidentifier_completionhandler_%29.md) |
| Imports a document | [importDocumentAtURL:toParentItemIdentifier:completionHandler:](nsfileproviderextension/importdocument%28at_toparentitemidentifier_completionhandler_%29.md) |
| Renames a document or folder | [renameItemWithIdentifier:toName:completionHandler:](nsfileproviderextension/renameitem%28withidentifier_toname_completionhandler_%29.md) |
| Moves a document or folder | [reparentItemWithIdentifier:toParentItemWithIdentifier:newName:completionHandler:](nsfileproviderextension/reparentitem%28withidentifier_toparentitemwithidentifier_newname_completionhandler_%29.md) |
| Sets or changes a folder’s favorite rank | [setFavoriteRank:forItemIdentifier:completionHandler:](nsfileproviderextension/setfavoriterank%28__foritemidentifier_completionhandler_%29.md) |
| Uses a document | [setLastUsedDate:forItemIdentifier:completionHandler:](nsfileproviderextension/setlastuseddate%28__foritemidentifier_completionhandler_%29.md) |
| Tags or untags a document or folder | [setTagData:forItemIdentifier:completionHandler:](nsfileproviderextension/settagdata%28__foritemidentifier_completionhandler_%29.md) |
| Moves a document or folder to the trash | [trashItemWithIdentifier:completionHandler:](nsfileproviderextension/trashitem%28withidentifier_completionhandler_%29.md) |
| Removes a document or folder from the trash | [untrashItemWithIdentifier:toParentItemIdentifier:completionHandler:](nsfileproviderextension/untrashitem%28withidentifier_toparentitemidentifier_completionhandler_%29.md) |

When the action method is called, ensure that your implementation:

1. Makes any necessary local changes, including updates to the working set
2. Schedules a background update for your server
3. Signals that the changes have occurred
4. Calls the completion handler with the results

All the action methods are expected to work offline, and should return immediately. Call the completion handler before performing any network activity or other long-running tasks. Defer these tasks to the background.

## Topics

### Signaling Changes

- [Signaling Changes for User-Driven Actions](signaling-changes-for-user-driven-actions.md): Signal the system about any changes created by an action.

### Handling Errors

- [Handling Errors with User-Driven Actions](handling-errors-with-user-driven-actions.md): Handle any errors that occur while processing the action.

## See Also

### Handling actions

- [createDirectoryWithName:inParentItemIdentifier:completionHandler:](nsfileproviderextension/createdirectory%28withname_inparentitemidentifier_completionhandler_%29.md): Creates a directory with the given name inside the given parent directory.
- [deleteItemWithIdentifier:completionHandler:](nsfileproviderextension/deleteitem%28withidentifier_completionhandler_%29.md): Permanently deletes an item from the trash.
- [importDocumentAtURL:toParentItemIdentifier:completionHandler:](nsfileproviderextension/importdocument%28at_toparentitemidentifier_completionhandler_%29.md): Imports a file or package into the given parent directory.
- [renameItemWithIdentifier:toName:completionHandler:](nsfileproviderextension/renameitem%28withidentifier_toname_completionhandler_%29.md): Renames a document or directory.
- [reparentItemWithIdentifier:toParentItemWithIdentifier:newName:completionHandler:](nsfileproviderextension/reparentitem%28withidentifier_toparentitemwithidentifier_newname_completionhandler_%29.md): Moves the specified item into the given parent directory.
- [setFavoriteRank:forItemIdentifier:completionHandler:](nsfileproviderextension/setfavoriterank%28__foritemidentifier_completionhandler_%29.md): Marks a directory as a favorite and sets its relative order in the Favorites list.
- [setLastUsedDate:forItemIdentifier:completionHandler:](nsfileproviderextension/setlastuseddate%28__foritemidentifier_completionhandler_%29.md): Marks an item as recently used and sets its relative order in the Recents list.
- [setTagData:forItemIdentifier:completionHandler:](nsfileproviderextension/settagdata%28__foritemidentifier_completionhandler_%29.md): Tags an item.
- [trashItemWithIdentifier:completionHandler:](nsfileproviderextension/trashitem%28withidentifier_completionhandler_%29.md): Moves an item into the trash.
- [untrashItemWithIdentifier:toParentItemIdentifier:completionHandler:](nsfileproviderextension/untrashitem%28withidentifier_toparentitemidentifier_completionhandler_%29.md): Moves an item out of the trash.
