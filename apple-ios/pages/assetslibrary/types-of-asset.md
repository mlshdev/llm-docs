> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assetslibrary/types-of-asset](https://developer.apple.com/documentation/assetslibrary/types-of-asset)

# Types of Asset (Swift)

**Framework:** Assets Library  
**Kind:** API Collection

Constants to identify types of asset.

## See Also

### Constants

- [Notification Keys](notification-keys.md): Keys used to get values from the user information dictionary of the [ALAssetsLibraryChangedNotification](alassetslibrarychangednotification.md) notification.
- [Error Domain](error-domain.md): Constant for the AssetsLibrary domain.
- [Error Codes](error-codes.md): AssetsLibrary-related error codes

# Types of Asset (Objective-C)

**Framework:** Assets Library  
**Kind:** API Collection

Constants to identify types of asset.

## Topics

### Constants

- [ALAssetsGroupLibrary](alassetsgrouplibrary.md): Deprecated. The Library group that includes all assets that are synced from iTunes.
- [ALAssetsGroupAlbum](alassetsgroupalbum.md): Deprecated. All the albums created on the device or synced from iTunes, not including Photo Stream or Shared Streams
- [ALAssetsGroupEvent](alassetsgroupevent.md): Deprecated. All events, including those created during Camera Connection Kit import.
- [ALAssetsGroupFaces](alassetsgroupfaces.md): Deprecated. All the faces albums synced from iTunes.
- [ALAssetsGroupSavedPhotos](alassetsgroupsavedphotos.md): Deprecated. All the photos in the Camera Roll.
- [ALAssetsGroupPhotoStream](alassetsgroupphotostream.md): Deprecated. The PhotoStream album.
- [ALAssetsGroupAll](alassetsgroupall.md): Deprecated. The same as ORing together all the group types except for [ALAssetsGroupLibrary](alassetsgrouplibrary.md).

## See Also

### Constants

- [ALAssetsGroupType](alassetsgrouptype.md): Deprecated. A bitfield to identify types of asset.
- [ALAssetOrientation](alassetorientation.md): Deprecated. Constants to indicate the orientation of an asset.
- [ALAssetsLibraryGroupsEnumerationResultsBlock](alassetslibrarygroupsenumerationresultsblock.md): Deprecated. Signature for the block executed when a match is found during enumeration using `ALAssetsLibrary/enumerateGroups(withTypes:using:failureBlock:)`.
- [ALAssetsLibraryAssetForURLResultBlock](alassetslibraryassetforurlresultblock.md): Deprecated. Signature for the block executed if the user has granted access to the caller to access the data managed by the framework in `ALAssetsLibrary/asset(for:resultBlock:failureBlock:)`.
- [ALAssetsLibraryWriteImageCompletionBlock](alassetslibrarywriteimagecompletionblock.md): Deprecated. Signature for the block executed when `ALAssetsLibrary/writeImage(toSavedPhotosAlbum:orientation:completionBlock:)` completes.
- [ALAssetsLibraryWriteVideoCompletionBlock](alassetslibrarywritevideocompletionblock.md): Deprecated. Signature for the block executed when `ALAssetsLibrary/writeVideoAtPath(toSavedPhotosAlbum:completionBlock:)` completes.
- [ALAssetsLibraryAccessFailureBlock](alassetslibraryaccessfailureblock.md): Deprecated. Signature for the block executed if the user does not grant access to the caller to access the data managed by the framework.
- [ALAssetsLibraryGroupResultBlock](alassetslibrarygroupresultblock.md): Deprecated. Signature for the block executed if the user grants access to the caller to access the data managed by the framework..
- [ALAuthorizationStatus](alauthorizationstatus.md): Deprecated. Constants to indicate authorization status.
- [Notification Keys](notification-keys.md): Keys used to get values from the user information dictionary of the [ALAssetsLibraryChangedNotification](alassetslibrarychangednotification.md) notification.
- [Error Domain](error-domain.md): Constant for the AssetsLibrary domain.
- [Error Codes](error-codes.md): AssetsLibrary-related error codes
