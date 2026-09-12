> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phphotoserror-swift.struct/limitexceeded](https://developer.apple.com/documentation/photos/phphotoserror-swift.struct/limitexceeded)

# limitExceeded

**Framework:** Photos  
**Kind:** Type Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 26.1+ · macOS 26.1+ · tvOS 26.1+ · visionOS 26.0+

An error that indicates the request exceeds a limit.

## Declaration

```swift
static var limitExceeded: PHPhotosError.Code { get }
```

## Mentioned In

- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

## See Also

### Constants

- [accessRestricted](accessrestricted.md): An error that indicates the system configuration restricts access to the asset.
- [accessUserDenied](accessuserdenied.md): An error that indicates the user denied access.
- [changeNotSupported](changenotsupported.md): An error that indicates the system doesn’t support the change request configuration.
- [identifierNotFound](identifiernotfound.md): An error that indicates an identifier doesn’t exist.
- [internalError](internalerror.md): An error that indicates an internal error occurs.
- [invalidResource](invalidresource.md): An error that indicates the asset resource validation failed.
- [libraryVolumeOffline](libraryvolumeoffline.md): An error that indicates the photo library isn’t available because the file system volume that stores it isn’t mounted.
- [libraryInFileProviderSyncRoot](libraryinfileprovidersyncroot.md): An error that indicates the Photos library bundle is in a file provider sync directory, and the framework doesn’t support it.
- [missingResource](missingresource.md): An error that indicates a missing asset resource.
- [multipleIdentifiersFound](multipleidentifiersfound.md): An error that indicates that more than one identifier exists.
- [networkAccessRequired](networkaccessrequired.md): An error that indicates the request for an asset resource failed because it requires network access.
- [networkError](networkerror.md): An error that indicates the request for an asset resource fails because of a network connection error.
- [notEnoughSpace](notenoughspace.md): An error that indicates insufficient space to perform the change.
- [operationInterrupted](operationinterrupted.md): An error that indicates an interruption occurs and the operation can’t complete.
- [persistentChangeDetailsUnavailable](persistentchangedetailsunavailable.md): An error that indicates the change details aren’t available for the persistent change.
