> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzerror/invaliddiskimage](https://developer.apple.com/documentation/virtualization/vzerror/invaliddiskimage)

# invalidDiskImage

**Framework:** Virtualization  
**Kind:** Type Property  
**Availability:** macOS 11.0+

An invalid disk-image error.

## Declaration

```swift
static var invalidDiskImage: VZError.Code { get }
```

<a id="Discussion"></a>

## Discussion

This error occurs when you supply a disk image in an unrecognized format, or when there’s damage to the disk image, or the image is invalid.

## See Also

### Getting the error codes

- [internalError](internalerror.md): An internal error occurred.
- [invalidVirtualMachineConfiguration](invalidvirtualmachineconfiguration.md): An invalid configuration error.
- [invalidVirtualMachineState](invalidvirtualmachinestate.md): An invalid state error.
- [invalidVirtualMachineStateTransition](invalidvirtualmachinestatetransition.md): An invalid state transition error.
- [networkError](networkerror.md): A network error, such as a failed connection.
- [notSupported](notsupported.md): The operation isn’t supported.
- [outOfDiskSpace](outofdiskspace.md): The host is out of disk space.
- [operationCancelled](operationcancelled.md): The user canceled the installation of Rosetta or the app canceled the installation of a guest OS.
- [installationFailed](installationfailed.md): An error occurred during installation.
- [installationRequiresUpdate](installationrequiresupdate.md): The framework canceled the installation because the host requires a software update in order to complete the installation.
- [invalidRestoreImage](invalidrestoreimage.md): The restore image is invalid.
- [invalidRestoreImageCatalog](invalidrestoreimagecatalog.md): The restore image catalog is invalid.
- [noSupportedRestoreImagesInCatalog](nosupportedrestoreimagesincatalog.md): The restore image catalog has no supported restore images.
- [restoreImageCatalogLoadFailed](restoreimagecatalogloadfailed.md): The restore image catalog failed to load.
- [restoreImageLoadFailed](restoreimageloadfailed.md): The restore image failed to load.
