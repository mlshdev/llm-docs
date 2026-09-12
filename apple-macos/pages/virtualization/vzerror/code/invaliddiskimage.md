> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzerror/code/invaliddiskimage](https://developer.apple.com/documentation/virtualization/vzerror/code/invaliddiskimage)

# VZError.Code.invalidDiskImage (Swift)

**Framework:** Virtualization  
**Kind:** Case  
**Availability:** macOS 11.0+

An invalid disk-image error.

## Declaration

```swift
case invalidDiskImage
```

<a id="Discussion"></a>

## Discussion

This error occurs when you supply a disk image in an unrecognized format, when there’s damage to the disk image, or the disk image is invalid.

## See Also

### Error codes

- [VZError.Code.internalError](internalerror.md): An internal error, such as the VM unexpectedly stopping.
- [VZError.Code.invalidVirtualMachineConfiguration](invalidvirtualmachineconfiguration.md): An invalid configuration error.
- [VZError.Code.invalidVirtualMachineState](invalidvirtualmachinestate.md): An invalid state error.
- [VZError.Code.invalidVirtualMachineStateTransition](invalidvirtualmachinestatetransition.md): An invalid state transition error.
- [VZError.Code.virtualMachineLimitExceeded](virtualmachinelimitexceeded.md): Unable to create an additional VM.
- [VZError.Code.networkError](networkerror.md): A network error, such as a failed connection error, occurred.
- [VZError.Code.notSupported](notsupported.md): The host computer or operating system isn’t supported.
- [VZError.Code.outOfDiskSpace](outofdiskspace.md): The host is out of disk space.
- [VZError.Code.operationCancelled](operationcancelled.md): The code that indicates user canceled the installation of Rosetta or the app canceled the installation of a guest OS.
- [VZError.Code.installationFailed](installationfailed.md): An error occurred during installation.
- [VZError.Code.installationRequiresUpdate](installationrequiresupdate.md): The VM requires a software update in order to complete the installation.
- [VZError.Code.invalidRestoreImage](invalidrestoreimage.md): The restore image is invalid.
- [VZError.Code.invalidRestoreImageCatalog](invalidrestoreimagecatalog.md): The restore image catalog is invalid.
- [VZError.Code.noSupportedRestoreImagesInCatalog](nosupportedrestoreimagesincatalog.md): The restore image catalog has no supported restore images.
- [VZError.Code.restoreImageCatalogLoadFailed](restoreimagecatalogloadfailed.md): The restore image catalog failed to load.

# VZErrorInvalidDiskImage (Objective-C)

**Framework:** Virtualization  
**Kind:** Enumeration Case  
**Availability:** macOS 11.0+

An invalid disk-image error.

## Declaration

```objectivec
VZErrorInvalidDiskImage
```

<a id="Discussion"></a>

## Discussion

This error occurs when you supply a disk image in an unrecognized format, when there’s damage to the disk image, or the disk image is invalid.

## See Also

### Error codes

- [VZErrorInternal](internalerror.md): An internal error, such as the VM unexpectedly stopping.
- [VZErrorInvalidVirtualMachineConfiguration](invalidvirtualmachineconfiguration.md): An invalid configuration error.
- [VZErrorInvalidVirtualMachineState](invalidvirtualmachinestate.md): An invalid state error.
- [VZErrorInvalidVirtualMachineStateTransition](invalidvirtualmachinestatetransition.md): An invalid state transition error.
- [VZErrorVirtualMachineLimitExceeded](virtualmachinelimitexceeded.md): Unable to create an additional VM.
- [VZErrorNetworkError](networkerror.md): A network error, such as a failed connection error, occurred.
- [VZErrorNotSupported](notsupported.md): The host computer or operating system isn’t supported.
- [VZErrorOutOfDiskSpace](outofdiskspace.md): The host is out of disk space.
- [VZErrorOperationCancelled](operationcancelled.md): The code that indicates user canceled the installation of Rosetta or the app canceled the installation of a guest OS.
- [VZErrorInstallationFailed](installationfailed.md): An error occurred during installation.
- [VZErrorInstallationRequiresUpdate](installationrequiresupdate.md): The VM requires a software update in order to complete the installation.
- [VZErrorInvalidRestoreImage](invalidrestoreimage.md): The restore image is invalid.
- [VZErrorInvalidRestoreImageCatalog](invalidrestoreimagecatalog.md): The restore image catalog is invalid.
- [VZErrorNoSupportedRestoreImagesInCatalog](nosupportedrestoreimagesincatalog.md): The restore image catalog has no supported restore images.
- [VZErrorRestoreImageCatalogLoadFailed](restoreimagecatalogloadfailed.md): The restore image catalog failed to load.
