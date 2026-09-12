> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzerror/internalerror](https://developer.apple.com/documentation/virtualization/vzerror/internalerror)

# internalError

**Framework:** Virtualization  
**Kind:** Type Property  
**Availability:** macOS 11.0+

An internal error occurred.

## Declaration

```swift
static var internalError: VZError.Code { get }
```

<a id="Discussion"></a>

## Discussion

The system reports this error when the virtual machine unexpectedly stops.

## See Also

### Getting the error codes

- [invalidVirtualMachineConfiguration](invalidvirtualmachineconfiguration.md): An invalid configuration error.
- [invalidVirtualMachineState](invalidvirtualmachinestate.md): An invalid state error.
- [invalidVirtualMachineStateTransition](invalidvirtualmachinestatetransition.md): An invalid state transition error.
- [invalidDiskImage](invaliddiskimage.md): An invalid disk-image error.
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
