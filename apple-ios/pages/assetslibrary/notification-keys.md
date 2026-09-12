> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assetslibrary/notification-keys](https://developer.apple.com/documentation/assetslibrary/notification-keys)

# Notification Keys (Swift)

**Framework:** Assets Library  
**Kind:** API Collection

Keys used to get values from the user information dictionary of the [ALAssetsLibraryChangedNotification](alassetslibrarychangednotification.md) notification.

<a id="overview"></a>

## Overview

Assets that are modified use the [ALAssetLibraryUpdatedAssetsKey](alassetlibraryupdatedassetskey.md) key. Assets that are inserted or deleted use the [ALAssetLibraryUpdatedAssetGroupsKey](alassetlibraryupdatedassetgroupskey.md) key for the asset group that contains the asset.

Assets and asset groups that have no strong references are omitted from the notification’s user information dictionary.

## See Also

### Constants

- [Types of Asset](types-of-asset.md): Constants to identify types of asset.
- [Error Domain](error-domain.md): Constant for the AssetsLibrary domain.
- [Error Codes](error-codes.md): AssetsLibrary-related error codes

# Notification Keys (Objective-C)

**Framework:** Assets Library  
**Kind:** API Collection

Keys used to get values from the user information dictionary of the [ALAssetsLibraryChangedNotification](alassetslibrarychangednotification.md) notification.

<a id="overview"></a>

## Overview

Assets that are modified use the [ALAssetLibraryUpdatedAssetsKey](alassetlibraryupdatedassetskey.md) key. Assets that are inserted or deleted use the [ALAssetLibraryUpdatedAssetGroupsKey](alassetlibraryupdatedassetgroupskey.md) key for the asset group that contains the asset.

Assets and asset groups that have no strong references are omitted from the notification’s user information dictionary.

## Topics

### Constants

- [ALAssetLibraryUpdatedAssetsKey](alassetlibraryupdatedassetskey.md): Deprecated. Value is a set of [NSURL](https://developer.apple.com/documentation/foundation/nsurl) objects identifying the assets that were updated.
- [ALAssetLibraryInsertedAssetGroupsKey](alassetlibraryinsertedassetgroupskey.md): Deprecated. Value is a set of [NSURL](https://developer.apple.com/documentation/foundation/nsurl) objects identifying the assets that were inserted.
- [ALAssetLibraryUpdatedAssetGroupsKey](alassetlibraryupdatedassetgroupskey.md): Deprecated. Value is a set of [NSURL](https://developer.apple.com/documentation/foundation/nsurl) objects identifying the asset groups that were updated.
- [ALAssetLibraryDeletedAssetGroupsKey](alassetlibrarydeletedassetgroupskey.md): Deprecated. Value is a set of [NSURL](https://developer.apple.com/documentation/foundation/nsurl) objects identifying the asset groups that were deleted.

## See Also

### Constants

- [ALAssetsGroupType](alassetsgrouptype.md): Deprecated. A bitfield to identify types of asset.
- [Types of Asset](types-of-asset.md): Constants to identify types of asset.
- [ALAssetOrientation](alassetorientation.md): Deprecated. Constants to indicate the orientation of an asset.
- [ALAssetsLibraryGroupsEnumerationResultsBlock](alassetslibrarygroupsenumerationresultsblock.md): Deprecated. Signature for the block executed when a match is found during enumeration using `ALAssetsLibrary/enumerateGroups(withTypes:using:failureBlock:)`.
- [ALAssetsLibraryAssetForURLResultBlock](alassetslibraryassetforurlresultblock.md): Deprecated. Signature for the block executed if the user has granted access to the caller to access the data managed by the framework in `ALAssetsLibrary/asset(for:resultBlock:failureBlock:)`.
- [ALAssetsLibraryWriteImageCompletionBlock](alassetslibrarywriteimagecompletionblock.md): Deprecated. Signature for the block executed when `ALAssetsLibrary/writeImage(toSavedPhotosAlbum:orientation:completionBlock:)` completes.
- [ALAssetsLibraryWriteVideoCompletionBlock](alassetslibrarywritevideocompletionblock.md): Deprecated. Signature for the block executed when `ALAssetsLibrary/writeVideoAtPath(toSavedPhotosAlbum:completionBlock:)` completes.
- [ALAssetsLibraryAccessFailureBlock](alassetslibraryaccessfailureblock.md): Deprecated. Signature for the block executed if the user does not grant access to the caller to access the data managed by the framework.
- [ALAssetsLibraryGroupResultBlock](alassetslibrarygroupresultblock.md): Deprecated. Signature for the block executed if the user grants access to the caller to access the data managed by the framework..
- [ALAuthorizationStatus](alauthorizationstatus.md): Deprecated. Constants to indicate authorization status.
- [Error Domain](error-domain.md): Constant for the AssetsLibrary domain.
- [Error Codes](error-codes.md): AssetsLibrary-related error codes
