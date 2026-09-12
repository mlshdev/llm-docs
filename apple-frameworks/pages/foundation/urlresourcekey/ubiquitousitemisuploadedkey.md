> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresourcekey/ubiquitousitemisuploadedkey](https://developer.apple.com/documentation/foundation/urlresourcekey/ubiquitousitemisuploadedkey)

# ubiquitousItemIsUploadedKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The key for a Boolean value that indicates whether the system uploads the item’s data to iCloud storage.

## Declaration

```swift
static let ubiquitousItemIsUploadedKey: URLResourceKey
```

<a id="Discussion"></a>

## Discussion

The system returns the read-only value as a Boolean [NSNumber](../nsnumber.md). The value is `true` if the system uploads this item to iCloud; otherwise, `false`.

> **Note**

>  When waiting for an upload to complete, don’t poll this key from within a block that you pass to [coordinate(readingItemAt:options:error:byAccessor:)](../nsfilecoordinator/coordinate%28readingitemat_options_error_byaccessor_%29.md) because the system can’t perform, the coordinated read necessary to obtain this value until that block completes and returns. Instead, use [NSMetadataQuery](../nsmetadataquery.md) or an [NSFilePresenter](../nsfilepresenter.md) delegate to asynchronously notify your app when the status changes.

## See Also

### Ubiquitous keys

- [isUbiquitousItemKey](isubiquitousitemkey.md): The key for a Boolean value that indicates whether the item is in iCloud storage.
- [ubiquitousSharedItemMostRecentEditorNameComponentsKey](ubiquitousshareditemmostrecenteditornamecomponentskey.md): The key for the name components of the most recent editor.
- [ubiquitousItemDownloadRequestedKey](ubiquitousitemdownloadrequestedkey.md): The key for a Boolean value that indicates whether the system has already made a call [startDownloadingUbiquitousItem(at:)](../filemanager/startdownloadingubiquitousitem%28at_%29.md) to download the item.
- [ubiquitousItemIsDownloadingKey](ubiquitousitemisdownloadingkey.md): The key for a Boolean value that indicates whether the system is downloading the item from iCloud.
- [ubiquitousItemDownloadingErrorKey](ubiquitousitemdownloadingerrorkey.md): The key for an error object that indicates why downloading the item from iCloud fails.
- [ubiquitousItemDownloadingStatusKey](ubiquitousitemdownloadingstatuskey.md): The key for the current download state for the item.
- [URLUbiquitousItemDownloadingStatus](../urlubiquitousitemdownloadingstatus.md): Values that describe the iCloud storage state of a file.
- [ubiquitousItemIsExcludedFromSyncKey](ubiquitousitemisexcludedfromsynckey.md): The key of a Boolean value that indicates whether the system excludes the item from syncing.
- [ubiquitousItemIsUploadingKey](ubiquitousitemisuploadingkey.md): The key for a Boolean value that indicates whether the system is uploading the item to iCloud.
- [ubiquitousItemUploadingErrorKey](ubiquitousitemuploadingerrorkey.md): The key for an error object that indicates why uploading the item to iCloud fails.
- [ubiquitousItemHasUnresolvedConflictsKey](ubiquitousitemhasunresolvedconflictskey.md): The key for a Boolean value that indicates whether this item has outstanding conflicts.
- [ubiquitousItemContainerDisplayNameKey](ubiquitousitemcontainerdisplaynamekey.md): The key for a string that contains the name of the item’s container as it appears to the user.
- [ubiquitousSharedItemOwnerNameComponentsKey](ubiquitousshareditemownernamecomponentskey.md): The key for the name components of the item’s owner.
- [ubiquitousSharedItemCurrentUserPermissionsKey](ubiquitousshareditemcurrentuserpermissionskey.md): The key for the current user’s permissions.
- [ubiquitousSharedItemCurrentUserRoleKey](ubiquitousshareditemcurrentuserrolekey.md): The key for the role of the current user.

# NSURLUbiquitousItemIsUploadedKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The key for a Boolean value that indicates whether the system uploads the item’s data to iCloud storage.

## Declaration

```objectivec
extern NSURLResourceKey const NSURLUbiquitousItemIsUploadedKey;
```

<a id="Discussion"></a>

## Discussion

The system returns the read-only value as a Boolean [NSNumber](../nsnumber.md). The value is `true` if the system uploads this item to iCloud; otherwise, `false`.

> **Note**

>  When waiting for an upload to complete, don’t poll this key from within a block that you pass to [coordinateReadingItemAtURL:options:error:byAccessor:](../nsfilecoordinator/coordinate%28readingitemat_options_error_byaccessor_%29.md) because the system can’t perform, the coordinated read necessary to obtain this value until that block completes and returns. Instead, use [NSMetadataQuery](../nsmetadataquery.md) or an [NSFilePresenter](../nsfilepresenter.md) delegate to asynchronously notify your app when the status changes.

## See Also

### Ubiquitous keys

- [NSURLIsUbiquitousItemKey](isubiquitousitemkey.md): The key for a Boolean value that indicates whether the item is in iCloud storage.
- [NSURLUbiquitousSharedItemMostRecentEditorNameComponentsKey](ubiquitousshareditemmostrecenteditornamecomponentskey.md): The key for the name components of the most recent editor.
- [NSURLUbiquitousItemDownloadRequestedKey](ubiquitousitemdownloadrequestedkey.md): The key for a Boolean value that indicates whether the system has already made a call [startDownloadingUbiquitousItemAtURL:error:](../filemanager/startdownloadingubiquitousitem%28at_%29.md) to download the item.
- [NSURLUbiquitousItemIsDownloadingKey](ubiquitousitemisdownloadingkey.md): The key for a Boolean value that indicates whether the system is downloading the item from iCloud.
- [NSURLUbiquitousItemDownloadingErrorKey](ubiquitousitemdownloadingerrorkey.md): The key for an error object that indicates why downloading the item from iCloud fails.
- [NSURLUbiquitousItemDownloadingStatusKey](ubiquitousitemdownloadingstatuskey.md): The key for the current download state for the item.
- [NSURLUbiquitousItemDownloadingStatus](../urlubiquitousitemdownloadingstatus.md): Values that describe the iCloud storage state of a file.
- [NSURLUbiquitousItemIsExcludedFromSyncKey](ubiquitousitemisexcludedfromsynckey.md): The key of a Boolean value that indicates whether the system excludes the item from syncing.
- [NSURLUbiquitousItemIsUploadingKey](ubiquitousitemisuploadingkey.md): The key for a Boolean value that indicates whether the system is uploading the item to iCloud.
- [NSURLUbiquitousItemUploadingErrorKey](ubiquitousitemuploadingerrorkey.md): The key for an error object that indicates why uploading the item to iCloud fails.
- [NSURLUbiquitousItemHasUnresolvedConflictsKey](ubiquitousitemhasunresolvedconflictskey.md): The key for a Boolean value that indicates whether this item has outstanding conflicts.
- [NSURLUbiquitousItemContainerDisplayNameKey](ubiquitousitemcontainerdisplaynamekey.md): The key for a string that contains the name of the item’s container as it appears to the user.
- [NSURLUbiquitousSharedItemOwnerNameComponentsKey](ubiquitousshareditemownernamecomponentskey.md): The key for the name components of the item’s owner.
- [NSURLUbiquitousSharedItemCurrentUserPermissionsKey](ubiquitousshareditemcurrentuserpermissionskey.md): The key for the current user’s permissions.
- [NSURLUbiquitousSharedItemCurrentUserRoleKey](ubiquitousshareditemcurrentuserrolekey.md): The key for the role of the current user.
