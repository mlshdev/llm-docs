> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assetslibrary/alassetslibraryaccessuserdeniederror](https://developer.apple.com/documentation/assetslibrary/alassetslibraryaccessuserdeniederror)

# ALAssetsLibraryAccessUserDeniedError (Swift)

**Framework:** Assets Library  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+

The user denied access to the library.

## Declaration

```swift
var ALAssetsLibraryAccessUserDeniedError: Int { get }
```

<a id="Discussion"></a>

## Discussion

This error may be returned in the [ALAssetsLibraryAccessFailureBlock](alassetslibraryaccessfailureblock.md) block for `ALAssetsLibrary/enumerateGroups(withTypes:using:failureBlock:)` and `ALAssetsLibrary/asset(for:resultBlock:failureBlock:)`.

## See Also

### Constants

- [ALAssetsLibraryUnknownError](alassetslibraryunknownerror.md): Deprecated. The reason for the error is unknown.
- [ALAssetsLibraryWriteFailedError](alassetslibrarywritefailederror.md): Deprecated. The attempt to write data failed.
- [ALAssetsLibraryWriteBusyError](alassetslibrarywritebusyerror.md): Deprecated. Writing was already busy when the attempt to write was made.
- [ALAssetsLibraryWriteInvalidDataError](alassetslibrarywriteinvaliddataerror.md): Deprecated. The data was invalid.
- [ALAssetsLibraryWriteIncompatibleDataError](alassetslibrarywriteincompatibledataerror.md): Deprecated. The data contained incompatible data.
- [ALAssetsLibraryWriteDataEncodingError](alassetslibrarywritedataencodingerror.md): Deprecated. The data contained data with the wrong encoding.
- [ALAssetsLibraryWriteDiskSpaceError](alassetslibrarywritediskspaceerror.md): Deprecated. There was not enough space on the disk to write the data.
- [ALAssetsLibraryDataUnavailableError](alassetslibrarydataunavailableerror.md): Deprecated. The data was not available.
- [ALAssetsLibraryAccessGloballyDeniedError](alassetslibraryaccessgloballydeniederror.md): Deprecated. Access to the library was denied globally.

# ALAssetsLibraryAccessUserDeniedError (Objective-C)

**Framework:** Assets Library  
**Kind:** Enumeration Case

The user denied access to the library.

## Declaration

```objectivec
ALAssetsLibraryAccessUserDeniedError
```

<a id="Discussion"></a>

## Discussion

This error may be returned in the [ALAssetsLibraryAccessFailureBlock](alassetslibraryaccessfailureblock.md) block for `ALAssetsLibrary/enumerateGroups(withTypes:using:failureBlock:)` and `ALAssetsLibrary/asset(for:resultBlock:failureBlock:)`.

## See Also

### Constants

- [ALAssetsLibraryUnknownError](alassetslibraryunknownerror.md): Deprecated. The reason for the error is unknown.
- [ALAssetsLibraryWriteFailedError](alassetslibrarywritefailederror.md): Deprecated. The attempt to write data failed.
- [ALAssetsLibraryWriteBusyError](alassetslibrarywritebusyerror.md): Deprecated. Writing was already busy when the attempt to write was made.
- [ALAssetsLibraryWriteInvalidDataError](alassetslibrarywriteinvaliddataerror.md): Deprecated. The data was invalid.
- [ALAssetsLibraryWriteIncompatibleDataError](alassetslibrarywriteincompatibledataerror.md): Deprecated. The data contained incompatible data.
- [ALAssetsLibraryWriteDataEncodingError](alassetslibrarywritedataencodingerror.md): Deprecated. The data contained data with the wrong encoding.
- [ALAssetsLibraryWriteDiskSpaceError](alassetslibrarywritediskspaceerror.md): Deprecated. There was not enough space on the disk to write the data.
- [ALAssetsLibraryDataUnavailableError](alassetslibrarydataunavailableerror.md): Deprecated. The data was not available.
- [ALAssetsLibraryAccessGloballyDeniedError](alassetslibraryaccessgloballydeniederror.md): Deprecated. Access to the library was denied globally.
