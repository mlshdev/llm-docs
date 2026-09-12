> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assetslibrary/alassetslibraryassetforurlresultblock](https://developer.apple.com/documentation/assetslibrary/alassetslibraryassetforurlresultblock)

# ALAssetsLibraryAssetForURLResultBlock

**Interface language:** Objective-C

**Framework:** Assets Library  
**Kind:** Type Alias

Signature for the block executed if the user has granted access to the caller to access the data managed by the framework in `ALAssetsLibrary/asset(for:resultBlock:failureBlock:)`.

## Declaration

```objectivec
typedef void (^)(ALAsset *) ALAssetsLibraryAssetForURLResultBlock;
```

<a id="Discussion"></a>

## Discussion

The block parameter is defined as follows:

- **asset**: The asset identified by the URL parameter in `ALAssetsLibrary/asset(for:resultBlock:failureBlock:)`.

If the asset is not found, `asset` is `nil`.

## See Also

### Constants

- [ALAssetsGroupType](alassetsgrouptype.md): Deprecated. A bitfield to identify types of asset.
- [Types of Asset](types-of-asset.md): Constants to identify types of asset.
- [ALAssetOrientation](alassetorientation.md): Deprecated. Constants to indicate the orientation of an asset.
- [ALAssetsLibraryGroupsEnumerationResultsBlock](alassetslibrarygroupsenumerationresultsblock.md): Deprecated. Signature for the block executed when a match is found during enumeration using `ALAssetsLibrary/enumerateGroups(withTypes:using:failureBlock:)`.
- [ALAssetsLibraryWriteImageCompletionBlock](alassetslibrarywriteimagecompletionblock.md): Deprecated. Signature for the block executed when `ALAssetsLibrary/writeImage(toSavedPhotosAlbum:orientation:completionBlock:)` completes.
- [ALAssetsLibraryWriteVideoCompletionBlock](alassetslibrarywritevideocompletionblock.md): Deprecated. Signature for the block executed when `ALAssetsLibrary/writeVideoAtPath(toSavedPhotosAlbum:completionBlock:)` completes.
- [ALAssetsLibraryAccessFailureBlock](alassetslibraryaccessfailureblock.md): Deprecated. Signature for the block executed if the user does not grant access to the caller to access the data managed by the framework.
- [ALAssetsLibraryGroupResultBlock](alassetslibrarygroupresultblock.md): Deprecated. Signature for the block executed if the user grants access to the caller to access the data managed by the framework..
- [ALAuthorizationStatus](alauthorizationstatus.md): Deprecated. Constants to indicate authorization status.
- [Notification Keys](notification-keys.md): Keys used to get values from the user information dictionary of the [ALAssetsLibraryChangedNotification](alassetslibrarychangednotification.md) notification.
- [Error Domain](error-domain.md): Constant for the AssetsLibrary domain.
- [Error Codes](error-codes.md): AssetsLibrary-related error codes
