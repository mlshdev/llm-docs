> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phphotoserror-swift.struct/code](https://developer.apple.com/documentation/photos/phphotoserror-swift.struct/code)

# PHPhotosError.Code (Swift)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Error codes for framework operations.

## Declaration

```swift
enum Code
```

## Topics

### Error Codes

- [PHPhotosError.Code.accessRestricted](code/accessrestricted.md): An error that indicates the system configuration restricts access to the asset.
- [PHPhotosError.Code.accessUserDenied](code/accessuserdenied.md): An error that indicates the user denies access.
- [PHPhotosError.Code.changeNotSupported](code/changenotsupported.md): An error that indicates the system doesn’t support the change request configuration.
- [PHPhotosError.Code.identifierNotFound](code/identifiernotfound.md): An error that indicates an identifier doesn’t exist.
- [PHPhotosError.Code.internalError](code/internalerror.md): An error that indicates an internal error occurs.
- [invalid](code/invalid.md): Deprecated. An error that indicates the operation isn’t valid.
- [PHPhotosError.Code.invalidResource](code/invalidresource.md): An error that indicates the asset resource validation fails.
- [PHPhotosError.Code.libraryVolumeOffline](code/libraryvolumeoffline.md): An error that indicates the photo library isn’t available because the file system volume that stores it isn’t mounted.
- [PHPhotosError.Code.libraryInFileProviderSyncRoot](code/libraryinfileprovidersyncroot.md): An error that indicates the Photos library bundle is in a file provider sync directory, and the framework doesn’t support it.
- [PHPhotosError.Code.limitExceeded](code/limitexceeded.md): An error that indicates the request exceeds a limit.
- [PHPhotosError.Code.missingResource](code/missingresource.md): An error that indicates a missing asset resource.
- [PHPhotosError.Code.multipleIdentifiersFound](code/multipleidentifiersfound.md): An error that indicates that more than one identifier exists.
- [PHPhotosError.Code.networkAccessRequired](code/networkaccessrequired.md): An error that indicates the request for an asset resource fails because it requires network access.
- [PHPhotosError.Code.networkError](code/networkerror.md): An error that indicates the request for an asset resource fails because of a network connection error.
- [PHPhotosError.Code.notEnoughSpace](code/notenoughspace.md): An error that indicates there’s not enough space to perform the requested change.
- [PHPhotosError.Code.operationInterrupted](code/operationinterrupted.md): An error that indicates an interruption occurs and the operation can’t complete.
- [PHPhotosError.Code.persistentChangeDetailsUnavailable](code/persistentchangedetailsunavailable.md): An error that indicates the change details aren’t available for the persistent change.
- [PHPhotosError.Code.persistentChangeTokenExpired](code/persistentchangetokenexpired.md): An error that indicates the library state is older than the available history of persistent changes.
- [PHPhotosError.Code.relinquishingLibraryBundleToWriter](code/relinquishinglibrarybundletowriter.md): An error that indicates the photo library isn’t available because the user moves, renames, or deletes the system’s photo library.
- [PHPhotosError.Code.requestNotSupportedForAsset](code/requestnotsupportedforasset.md): An error that indicates the system doesn’t support the request for the specified asset.
- [PHPhotosError.Code.switchingSystemPhotoLibrary](code/switchingsystemphotolibrary.md): An error that indicates the photo library isn’t available because the user switches the system’s photo library.
- [PHPhotosError.Code.userCancelled](code/usercancelled.md): An error that indicates the user cancels the asset retrieval or editing request.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting an Error

- [errorDomain](errordomain.md)
- [Error Constants](../../photokit/error-constants.md): Error code constants for framework operations.
- [PHLocalIdentifiersErrorKey](../phlocalidentifierserrorkey.md): An error key that retrieves an array of string values representing local identifiers matched to a cloud identifier.

# PHPhotosError (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Error codes for framework operations.

## Declaration

```objectivec
enum PHPhotosError : NSInteger;
```

## Topics

### Error Codes

- [PHPhotosErrorAccessRestricted](code/accessrestricted.md): An error that indicates the system configuration restricts access to the asset.
- [PHPhotosErrorAccessUserDenied](code/accessuserdenied.md): An error that indicates the user denies access.
- [PHPhotosErrorChangeNotSupported](code/changenotsupported.md): An error that indicates the system doesn’t support the change request configuration.
- [PHPhotosErrorIdentifierNotFound](code/identifiernotfound.md): An error that indicates an identifier doesn’t exist.
- [PHPhotosErrorInternalError](code/internalerror.md): An error that indicates an internal error occurs.
- [PHPhotosErrorInvalidResource](code/invalidresource.md): An error that indicates the asset resource validation fails.
- [PHPhotosErrorLibraryVolumeOffline](code/libraryvolumeoffline.md): An error that indicates the photo library isn’t available because the file system volume that stores it isn’t mounted.
- [PHPhotosErrorLibraryInFileProviderSyncRoot](code/libraryinfileprovidersyncroot.md): An error that indicates the Photos library bundle is in a file provider sync directory, and the framework doesn’t support it.
- [PHPhotosErrorLimitExceeded](code/limitexceeded.md): An error that indicates the request exceeds a limit.
- [PHPhotosErrorMissingResource](code/missingresource.md): An error that indicates a missing asset resource.
- [PHPhotosErrorMultipleIdentifiersFound](code/multipleidentifiersfound.md): An error that indicates that more than one identifier exists.
- [PHPhotosErrorNetworkAccessRequired](code/networkaccessrequired.md): An error that indicates the request for an asset resource fails because it requires network access.
- [PHPhotosErrorNetworkError](code/networkerror.md): An error that indicates the request for an asset resource fails because of a network connection error.
- [PHPhotosErrorNotEnoughSpace](code/notenoughspace.md): An error that indicates there’s not enough space to perform the requested change.
- [PHPhotosErrorOperationInterrupted](code/operationinterrupted.md): An error that indicates an interruption occurs and the operation can’t complete.
- [PHPhotosErrorPersistentChangeDetailsUnavailable](code/persistentchangedetailsunavailable.md): An error that indicates the change details aren’t available for the persistent change.
- [PHPhotosErrorPersistentChangeTokenExpired](code/persistentchangetokenexpired.md): An error that indicates the library state is older than the available history of persistent changes.
- [PHPhotosErrorRelinquishingLibraryBundleToWriter](code/relinquishinglibrarybundletowriter.md): An error that indicates the photo library isn’t available because the user moves, renames, or deletes the system’s photo library.
- [PHPhotosErrorRequestNotSupportedForAsset](code/requestnotsupportedforasset.md): An error that indicates the system doesn’t support the request for the specified asset.
- [PHPhotosErrorSwitchingSystemPhotoLibrary](code/switchingsystemphotolibrary.md): An error that indicates the photo library isn’t available because the user switches the system’s photo library.
- [PHPhotosErrorUserCancelled](code/usercancelled.md): An error that indicates the user cancels the asset retrieval or editing request.
- [PHPhotosErrorInvalid](https://developer.apple.com/documentation/photos/phphotoserror-c.enum/phphotoserrorinvalid): Deprecated. An error that indicates the operation isn’t valid.

## See Also

### Inspecting an Error

- [PHLocalIdentifiersErrorKey](../phlocalidentifierserrorkey.md): An error key that retrieves an array of string values representing local identifiers matched to a cloud identifier.
