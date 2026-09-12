> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzerror](https://developer.apple.com/documentation/virtualization/vzerror)

# VZError

**Framework:** Virtualization  
**Kind:** Structure  
**Availability:** macOS 11.0+

Errors that you might encounter when configuring or using a VM.

## Declaration

```swift
struct VZError
```

<a id="overview"></a>

## Overview

The domain for these errors is [VZErrorDomain](vzerrordomain.md). When an error originates in a different component, the [NSError](https://developer.apple.com/documentation/foundation/nserror) object contains the domain of that component.

## Topics

### Getting the error codes

- [internalError](vzerror/internalerror.md): An internal error occurred.
- [invalidVirtualMachineConfiguration](vzerror/invalidvirtualmachineconfiguration.md): An invalid configuration error.
- [invalidVirtualMachineState](vzerror/invalidvirtualmachinestate.md): An invalid state error.
- [invalidVirtualMachineStateTransition](vzerror/invalidvirtualmachinestatetransition.md): An invalid state transition error.
- [invalidDiskImage](vzerror/invaliddiskimage.md): An invalid disk-image error.
- [networkError](vzerror/networkerror.md): A network error, such as a failed connection.
- [notSupported](vzerror/notsupported.md): The operation isn’t supported.
- [outOfDiskSpace](vzerror/outofdiskspace.md): The host is out of disk space.
- [operationCancelled](vzerror/operationcancelled.md): The user canceled the installation of Rosetta or the app canceled the installation of a guest OS.
- [installationFailed](vzerror/installationfailed.md): An error occurred during installation.
- [installationRequiresUpdate](vzerror/installationrequiresupdate.md): The framework canceled the installation because the host requires a software update in order to complete the installation.
- [invalidRestoreImage](vzerror/invalidrestoreimage.md): The restore image is invalid.
- [invalidRestoreImageCatalog](vzerror/invalidrestoreimagecatalog.md): The restore image catalog is invalid.
- [noSupportedRestoreImagesInCatalog](vzerror/nosupportedrestoreimagesincatalog.md): The restore image catalog has no supported restore images.
- [restoreImageCatalogLoadFailed](vzerror/restoreimagecatalogloadfailed.md): The restore image catalog failed to load.
- [restoreImageLoadFailed](vzerror/restoreimageloadfailed.md): The restore image failed to load.
- [restore](vzerror/restore.md): The VM failed to restore from the save file.
- [save](vzerror/save.md): The VM failed to save to the save file.
- [deviceAlreadyAttached](vzerror/devicealreadyattached.md): The device already has an attachment to the VM.
- [deviceInitializationFailure](vzerror/deviceinitializationfailure.md): A device initialization failure.
- [deviceNotFound](vzerror/devicenotfound.md): The framework can’t find the device.
- [usbControllerNotFound](vzerror/usbcontrollernotfound.md): The framework can’t find the controller.
- [efiSecureBootEnrollmentFailed](vzerror/efisecurebootenrollmentfailed.md)
- [efiVariableInaccessible](vzerror/efivariableinaccessible.md)
- [guestProvisioningInvalidFullName](vzerror/guestprovisioninginvalidfullname.md)
- [guestProvisioningInvalidPassword](vzerror/guestprovisioninginvalidpassword.md)
- [guestProvisioningInvalidUsername](vzerror/guestprovisioninginvalidusername.md)
- [VZError.Code](vzerror/code.md): Errors you might encounter when configuring or using a virtual machine.
- [errorDomain](vzerror/errordomain.md)

### Accessing the error information

- [virtualMachineLimitExceeded](vzerror/virtualmachinelimitexceeded.md): Returns an error code that indicates whether the system exceeded the limit on the number of running virtual machines.

### Type properties

- [networkBlockDeviceDisconnected](vzerror/networkblockdevicedisconnected.md): Returns a value that indicates the connection state of the network block device.
- [networkBlockDeviceNegotiationFailed](vzerror/networkblockdevicenegotiationfailed.md): Returns a value that indicates whether the network block device negotiation failed.

## Relationships

### Conforms To

- [CustomNSError](https://developer.apple.com/documentation/foundation/customnserror)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [VZErrorDomain](vzerrordomain.md): The error domain for the Virtualization framework.
