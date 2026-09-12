> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzerror/code/invalidvirtualmachinestatetransition](https://developer.apple.com/documentation/virtualization/vzerror/code/invalidvirtualmachinestatetransition)

# VZError.Code.invalidVirtualMachineStateTransition (Swift)

**Framework:** Virtualization  
**Kind:** Case  
**Availability:** macOS 11.0+

An invalid state transition error.

## Declaration

```swift
case invalidVirtualMachineStateTransition
```

<a id="Discussion"></a>

## Discussion

This error occurs when you attempt to change the state of the virtual machine in an invalid way. For example, it occurs when you attempt to start a virtual machine when its [canStart](../../vzvirtualmachine/canstart.md) property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Error codes

- [VZError.Code.internalError](internalerror.md): An internal error, such as the VM unexpectedly stopping.
- [VZError.Code.invalidVirtualMachineConfiguration](invalidvirtualmachineconfiguration.md): An invalid configuration error.
- [VZError.Code.invalidVirtualMachineState](invalidvirtualmachinestate.md): An invalid state error.
- [VZError.Code.invalidDiskImage](invaliddiskimage.md): An invalid disk-image error.
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

# VZErrorInvalidVirtualMachineStateTransition (Objective-C)

**Framework:** Virtualization  
**Kind:** Enumeration Case  
**Availability:** macOS 11.0+

An invalid state transition error.

## Declaration

```objectivec
VZErrorInvalidVirtualMachineStateTransition
```

<a id="Discussion"></a>

## Discussion

This error occurs when you attempt to change the state of the virtual machine in an invalid way. For example, it occurs when you attempt to start a virtual machine when its [canStart](../../vzvirtualmachine/canstart.md) property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Error codes

- [VZErrorInternal](internalerror.md): An internal error, such as the VM unexpectedly stopping.
- [VZErrorInvalidVirtualMachineConfiguration](invalidvirtualmachineconfiguration.md): An invalid configuration error.
- [VZErrorInvalidVirtualMachineState](invalidvirtualmachinestate.md): An invalid state error.
- [VZErrorInvalidDiskImage](invaliddiskimage.md): An invalid disk-image error.
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
