> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assetslibrary/alassetslibrarywriteinvaliddataerror](https://developer.apple.com/documentation/assetslibrary/alassetslibrarywriteinvaliddataerror)

# ALAssetsLibraryWriteInvalidDataError (Swift)

**Framework:** Assets Library  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+

The data was invalid.

## Declaration

```swift
var ALAssetsLibraryWriteInvalidDataError: Int { get }
```

<a id="Discussion"></a>

## Discussion

This error may be returned in the completion block for `ALAssetsLibrary/writeVideoAtPath(toSavedPhotosAlbum:completionBlock:)` and `ALAssetsLibrary/writeImage(toSavedPhotosAlbum:orientation:completionBlock:)` as well as the completion selector for [UIImageWriteToSavedPhotosAlbum(\_:\_:\_:\_:)](https://developer.apple.com/documentation/uikit/uiimagewritetosavedphotosalbum%28_:_:_:_:%29) and [UISaveVideoAtPathToSavedPhotosAlbum(\_:\_:\_:\_:)](https://developer.apple.com/documentation/uikit/uisavevideoatpathtosavedphotosalbum%28_:_:_:_:%29).

## See Also

### Constants

- [ALAssetsLibraryUnknownError](alassetslibraryunknownerror.md): Deprecated. The reason for the error is unknown.
- [ALAssetsLibraryWriteFailedError](alassetslibrarywritefailederror.md): Deprecated. The attempt to write data failed.
- [ALAssetsLibraryWriteBusyError](alassetslibrarywritebusyerror.md): Deprecated. Writing was already busy when the attempt to write was made.
- [ALAssetsLibraryWriteIncompatibleDataError](alassetslibrarywriteincompatibledataerror.md): Deprecated. The data contained incompatible data.
- [ALAssetsLibraryWriteDataEncodingError](alassetslibrarywritedataencodingerror.md): Deprecated. The data contained data with the wrong encoding.
- [ALAssetsLibraryWriteDiskSpaceError](alassetslibrarywritediskspaceerror.md): Deprecated. There was not enough space on the disk to write the data.
- [ALAssetsLibraryDataUnavailableError](alassetslibrarydataunavailableerror.md): Deprecated. The data was not available.
- [ALAssetsLibraryAccessUserDeniedError](alassetslibraryaccessuserdeniederror.md): Deprecated. The user denied access to the library.
- [ALAssetsLibraryAccessGloballyDeniedError](alassetslibraryaccessgloballydeniederror.md): Deprecated. Access to the library was denied globally.

# ALAssetsLibraryWriteInvalidDataError (Objective-C)

**Framework:** Assets Library  
**Kind:** Enumeration Case

The data was invalid.

## Declaration

```objectivec
ALAssetsLibraryWriteInvalidDataError
```

<a id="Discussion"></a>

## Discussion

This error may be returned in the completion block for `ALAssetsLibrary/writeVideoAtPath(toSavedPhotosAlbum:completionBlock:)` and `ALAssetsLibrary/writeImage(toSavedPhotosAlbum:orientation:completionBlock:)` as well as the completion selector for [UIImageWriteToSavedPhotosAlbum](https://developer.apple.com/documentation/uikit/uiimagewritetosavedphotosalbum%28_:_:_:_:%29) and [UISaveVideoAtPathToSavedPhotosAlbum](https://developer.apple.com/documentation/uikit/uisavevideoatpathtosavedphotosalbum%28_:_:_:_:%29).

## See Also

### Constants

- [ALAssetsLibraryUnknownError](alassetslibraryunknownerror.md): Deprecated. The reason for the error is unknown.
- [ALAssetsLibraryWriteFailedError](alassetslibrarywritefailederror.md): Deprecated. The attempt to write data failed.
- [ALAssetsLibraryWriteBusyError](alassetslibrarywritebusyerror.md): Deprecated. Writing was already busy when the attempt to write was made.
- [ALAssetsLibraryWriteIncompatibleDataError](alassetslibrarywriteincompatibledataerror.md): Deprecated. The data contained incompatible data.
- [ALAssetsLibraryWriteDataEncodingError](alassetslibrarywritedataencodingerror.md): Deprecated. The data contained data with the wrong encoding.
- [ALAssetsLibraryWriteDiskSpaceError](alassetslibrarywritediskspaceerror.md): Deprecated. There was not enough space on the disk to write the data.
- [ALAssetsLibraryDataUnavailableError](alassetslibrarydataunavailableerror.md): Deprecated. The data was not available.
- [ALAssetsLibraryAccessUserDeniedError](alassetslibraryaccessuserdeniederror.md): Deprecated. The user denied access to the library.
- [ALAssetsLibraryAccessGloballyDeniedError](alassetslibraryaccessgloballydeniederror.md): Deprecated. Access to the library was denied globally.
