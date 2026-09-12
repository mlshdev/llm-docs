> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assetslibrary/alauthorizationstatus](https://developer.apple.com/documentation/assetslibrary/alauthorizationstatus)

# ALAuthorizationStatus

**Interface language:** Objective-C

**Framework:** Assets Library  
**Kind:** Enumeration

Constants to indicate authorization status.

## Declaration

```objectivec
enum ALAuthorizationStatus : NSInteger;
```

## Topics

### Enumeration Cases

- [ALAuthorizationStatusAuthorized](alauthorizationstatus/alauthorizationstatusauthorized.md): Deprecated.
- [ALAuthorizationStatusDenied](alauthorizationstatus/alauthorizationstatusdenied.md): Deprecated.
- [ALAuthorizationStatusNotDetermined](alauthorizationstatus/alauthorizationstatusnotdetermined.md): Deprecated.
- [ALAuthorizationStatusRestricted](alauthorizationstatus/alauthorizationstatusrestricted.md): Deprecated.

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
- [Notification Keys](notification-keys.md): Keys used to get values from the user information dictionary of the [ALAssetsLibraryChangedNotification](alassetslibrarychangednotification.md) notification.
- [Error Domain](error-domain.md): Constant for the AssetsLibrary domain.
- [Error Codes](error-codes.md): AssetsLibrary-related error codes
