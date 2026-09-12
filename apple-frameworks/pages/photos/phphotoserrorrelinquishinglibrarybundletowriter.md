> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phphotoserrorrelinquishinglibrarybundletowriter](https://developer.apple.com/documentation/photos/phphotoserrorrelinquishinglibrarybundletowriter)

# PHPhotosErrorRelinquishingLibraryBundleToWriter

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · Mac Catalyst 13.0+ (deprecated in 14.0) · macOS 10.15+ (deprecated in 11.0) · tvOS 13.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The photo library is unavailable because the user moved, renamed, or deleted the system photo library.

> Use [PHPhotosError.Code.relinquishingLibraryBundleToWriter](phphotoserror-swift.struct/code/relinquishinglibrarybundletowriter.md) instead.

## Declaration

```swift
var PHPhotosErrorRelinquishingLibraryBundleToWriter: Int { get }
```

## See Also

### Error Codes

- [invalid](phphotoserror-swift.struct/invalid.md): Deprecated. The requested operation is invalid.
- [PHPhotosErrorInvalid](phphotoserrorinvalid.md): Deprecated. The requested operation is invalid.
- [PHPhotosErrorLibraryVolumeOffline](phphotoserrorlibraryvolumeoffline.md): Deprecated. The photo library is unavailable because the file system volume that stores it isn’t mounted.
- [PHPhotosErrorSwitchingSystemPhotoLibrary](phphotoserrorswitchingsystemphotolibrary.md): Deprecated. The photo library is unavailable because the user switched the system photo library.
- [PHPhotosErrorUserCancelled](phphotoserrorusercancelled.md): Deprecated. The user canceled the asset retrieval or editing request.
