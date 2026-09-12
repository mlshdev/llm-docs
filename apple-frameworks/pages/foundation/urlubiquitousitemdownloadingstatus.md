> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlubiquitousitemdownloadingstatus](https://developer.apple.com/documentation/foundation/urlubiquitousitemdownloadingstatus)

# URLUbiquitousItemDownloadingStatus (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Values that describe the iCloud storage state of a file.

## Declaration

```swift
struct URLUbiquitousItemDownloadingStatus
```

<a id="Discussion"></a>

## Discussion

These constants are possible values for the [ubiquitousItemDownloadingStatusKey](urlresourcekey/ubiquitousitemdownloadingstatuskey.md) key.

## Topics

### Creating a Download Status Instance

- [init(rawValue:)](urlubiquitousitemdownloadingstatus/init%28rawvalue_%29.md): Creates a download status instance from the provided constant string.

### Constants

- [current](urlubiquitousitemdownloadingstatus/current.md): A local copy of this item exists and is the most up-to-date version known to the device.
- [downloaded](urlubiquitousitemdownloadingstatus/downloaded.md): A local copy of this item exists, but it is stale. The most recent version will be downloaded as soon as possible.
- [notDownloaded](urlubiquitousitemdownloadingstatus/notdownloaded.md): This item has not been downloaded yet. Use [startDownloadingUbiquitousItem(at:)](filemanager/startdownloadingubiquitousitem%28at_%29.md) to download it.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Ubiquitous keys

- [isUbiquitousItemKey](urlresourcekey/isubiquitousitemkey.md): The key for a Boolean value that indicates whether the item is in iCloud storage.
- [ubiquitousSharedItemMostRecentEditorNameComponentsKey](urlresourcekey/ubiquitousshareditemmostrecenteditornamecomponentskey.md): The key for the name components of the most recent editor.
- [ubiquitousItemDownloadRequestedKey](urlresourcekey/ubiquitousitemdownloadrequestedkey.md): The key for a Boolean value that indicates whether the system has already made a call [startDownloadingUbiquitousItem(at:)](filemanager/startdownloadingubiquitousitem%28at_%29.md) to download the item.
- [ubiquitousItemIsDownloadingKey](urlresourcekey/ubiquitousitemisdownloadingkey.md): The key for a Boolean value that indicates whether the system is downloading the item from iCloud.
- [ubiquitousItemDownloadingErrorKey](urlresourcekey/ubiquitousitemdownloadingerrorkey.md): The key for an error object that indicates why downloading the item from iCloud fails.
- [ubiquitousItemDownloadingStatusKey](urlresourcekey/ubiquitousitemdownloadingstatuskey.md): The key for the current download state for the item.
- [ubiquitousItemIsExcludedFromSyncKey](urlresourcekey/ubiquitousitemisexcludedfromsynckey.md): The key of a Boolean value that indicates whether the system excludes the item from syncing.
- [ubiquitousItemIsUploadedKey](urlresourcekey/ubiquitousitemisuploadedkey.md): The key for a Boolean value that indicates whether the system uploads the item’s data to iCloud storage.
- [ubiquitousItemIsUploadingKey](urlresourcekey/ubiquitousitemisuploadingkey.md): The key for a Boolean value that indicates whether the system is uploading the item to iCloud.
- [ubiquitousItemUploadingErrorKey](urlresourcekey/ubiquitousitemuploadingerrorkey.md): The key for an error object that indicates why uploading the item to iCloud fails.
- [ubiquitousItemHasUnresolvedConflictsKey](urlresourcekey/ubiquitousitemhasunresolvedconflictskey.md): The key for a Boolean value that indicates whether this item has outstanding conflicts.
- [ubiquitousItemContainerDisplayNameKey](urlresourcekey/ubiquitousitemcontainerdisplaynamekey.md): The key for a string that contains the name of the item’s container as it appears to the user.
- [ubiquitousSharedItemOwnerNameComponentsKey](urlresourcekey/ubiquitousshareditemownernamecomponentskey.md): The key for the name components of the item’s owner.
- [ubiquitousSharedItemCurrentUserPermissionsKey](urlresourcekey/ubiquitousshareditemcurrentuserpermissionskey.md): The key for the current user’s permissions.
- [ubiquitousSharedItemCurrentUserRoleKey](urlresourcekey/ubiquitousshareditemcurrentuserrolekey.md): The key for the role of the current user.

# NSURLUbiquitousItemDownloadingStatus (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Values that describe the iCloud storage state of a file.

## Declaration

```objectivec
typedef NSString * NSURLUbiquitousItemDownloadingStatus;
```

<a id="Discussion"></a>

## Discussion

These constants are possible values for the [NSURLUbiquitousItemDownloadingStatusKey](urlresourcekey/ubiquitousitemdownloadingstatuskey.md) key.

## Topics

### Constants

- [NSURLUbiquitousItemDownloadingStatusCurrent](urlubiquitousitemdownloadingstatus/current.md): A local copy of this item exists and is the most up-to-date version known to the device.
- [NSURLUbiquitousItemDownloadingStatusDownloaded](urlubiquitousitemdownloadingstatus/downloaded.md): A local copy of this item exists, but it is stale. The most recent version will be downloaded as soon as possible.
- [NSURLUbiquitousItemDownloadingStatusNotDownloaded](urlubiquitousitemdownloadingstatus/notdownloaded.md): This item has not been downloaded yet. Use [startDownloadingUbiquitousItemAtURL:error:](filemanager/startdownloadingubiquitousitem%28at_%29.md) to download it.

## See Also

### Ubiquitous keys

- [NSURLIsUbiquitousItemKey](urlresourcekey/isubiquitousitemkey.md): The key for a Boolean value that indicates whether the item is in iCloud storage.
- [NSURLUbiquitousSharedItemMostRecentEditorNameComponentsKey](urlresourcekey/ubiquitousshareditemmostrecenteditornamecomponentskey.md): The key for the name components of the most recent editor.
- [NSURLUbiquitousItemDownloadRequestedKey](urlresourcekey/ubiquitousitemdownloadrequestedkey.md): The key for a Boolean value that indicates whether the system has already made a call [startDownloadingUbiquitousItemAtURL:error:](filemanager/startdownloadingubiquitousitem%28at_%29.md) to download the item.
- [NSURLUbiquitousItemIsDownloadingKey](urlresourcekey/ubiquitousitemisdownloadingkey.md): The key for a Boolean value that indicates whether the system is downloading the item from iCloud.
- [NSURLUbiquitousItemDownloadingErrorKey](urlresourcekey/ubiquitousitemdownloadingerrorkey.md): The key for an error object that indicates why downloading the item from iCloud fails.
- [NSURLUbiquitousItemDownloadingStatusKey](urlresourcekey/ubiquitousitemdownloadingstatuskey.md): The key for the current download state for the item.
- [NSURLUbiquitousItemIsExcludedFromSyncKey](urlresourcekey/ubiquitousitemisexcludedfromsynckey.md): The key of a Boolean value that indicates whether the system excludes the item from syncing.
- [NSURLUbiquitousItemIsUploadedKey](urlresourcekey/ubiquitousitemisuploadedkey.md): The key for a Boolean value that indicates whether the system uploads the item’s data to iCloud storage.
- [NSURLUbiquitousItemIsUploadingKey](urlresourcekey/ubiquitousitemisuploadingkey.md): The key for a Boolean value that indicates whether the system is uploading the item to iCloud.
- [NSURLUbiquitousItemUploadingErrorKey](urlresourcekey/ubiquitousitemuploadingerrorkey.md): The key for an error object that indicates why uploading the item to iCloud fails.
- [NSURLUbiquitousItemHasUnresolvedConflictsKey](urlresourcekey/ubiquitousitemhasunresolvedconflictskey.md): The key for a Boolean value that indicates whether this item has outstanding conflicts.
- [NSURLUbiquitousItemContainerDisplayNameKey](urlresourcekey/ubiquitousitemcontainerdisplaynamekey.md): The key for a string that contains the name of the item’s container as it appears to the user.
- [NSURLUbiquitousSharedItemOwnerNameComponentsKey](urlresourcekey/ubiquitousshareditemownernamecomponentskey.md): The key for the name components of the item’s owner.
- [NSURLUbiquitousSharedItemCurrentUserPermissionsKey](urlresourcekey/ubiquitousshareditemcurrentuserpermissionskey.md): The key for the current user’s permissions.
- [NSURLUbiquitousSharedItemCurrentUserRoleKey](urlresourcekey/ubiquitousshareditemcurrentuserrolekey.md): The key for the role of the current user.
