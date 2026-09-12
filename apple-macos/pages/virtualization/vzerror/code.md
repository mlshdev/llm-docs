> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzerror/code](https://developer.apple.com/documentation/virtualization/vzerror/code)

# VZError.Code (Swift)

**Framework:** Virtualization  
**Kind:** Enumeration  
**Availability:** macOS 11.0+

Errors you might encounter when configuring or using a virtual machine.

## Declaration

```swift
enum Code
```

<a id="overview"></a>

## Overview

The domain for these errors is [VZErrorDomain](../vzerrordomain.md). When an error originates in a different component, the [NSError](https://developer.apple.com/documentation/foundation/nserror) object contains the domain of that component.

## Topics

### Error codes

- [VZError.Code.internalError](code/internalerror.md): An internal error, such as the VM unexpectedly stopping.
- [VZError.Code.invalidVirtualMachineConfiguration](code/invalidvirtualmachineconfiguration.md): An invalid configuration error.
- [VZError.Code.invalidVirtualMachineState](code/invalidvirtualmachinestate.md): An invalid state error.
- [VZError.Code.invalidVirtualMachineStateTransition](code/invalidvirtualmachinestatetransition.md): An invalid state transition error.
- [VZError.Code.invalidDiskImage](code/invaliddiskimage.md): An invalid disk-image error.
- [VZError.Code.virtualMachineLimitExceeded](code/virtualmachinelimitexceeded.md): Unable to create an additional VM.
- [VZError.Code.networkError](code/networkerror.md): A network error, such as a failed connection error, occurred.
- [VZError.Code.notSupported](code/notsupported.md): The host computer or operating system isn’t supported.
- [VZError.Code.outOfDiskSpace](code/outofdiskspace.md): The host is out of disk space.
- [VZError.Code.operationCancelled](code/operationcancelled.md): The code that indicates user canceled the installation of Rosetta or the app canceled the installation of a guest OS.
- [VZError.Code.installationFailed](code/installationfailed.md): An error occurred during installation.
- [VZError.Code.installationRequiresUpdate](code/installationrequiresupdate.md): The VM requires a software update in order to complete the installation.
- [VZError.Code.invalidRestoreImage](code/invalidrestoreimage.md): The restore image is invalid.
- [VZError.Code.invalidRestoreImageCatalog](code/invalidrestoreimagecatalog.md): The restore image catalog is invalid.
- [VZError.Code.noSupportedRestoreImagesInCatalog](code/nosupportedrestoreimagesincatalog.md): The restore image catalog has no supported restore images.
- [VZError.Code.restoreImageCatalogLoadFailed](code/restoreimagecatalogloadfailed.md): The restore image catalog failed to load.
- [VZError.Code.restoreImageLoadFailed](code/restoreimageloadfailed.md): The restore image failed to load.
- [VZError.Code.networkBlockDeviceNegotiationFailed](code/networkblockdevicenegotiationfailed.md): The connection or the negotiation with the network block device server failed.
- [VZError.Code.networkBlockDeviceDisconnected](code/networkblockdevicedisconnected.md): The network block device client disconnected from the server.
- [VZError.Code.restore](code/restore.md): The VM failed to restore from save file.
- [VZError.Code.save](code/save.md): The VM failed to save to the save file.
- [VZError.Code.deviceAlreadyAttached](code/devicealreadyattached.md): The device already has an attachment to the VM.
- [VZError.Code.deviceInitializationFailure](code/deviceinitializationfailure.md): A device initialization failure.
- [VZError.Code.deviceNotFound](code/devicenotfound.md): The framework can’t find the device.
- [VZError.Code.usbControllerNotFound](code/usbcontrollernotfound.md): The framework can’t find the controller.
- [VZError.Code.internalError](code/internalerror.md): An internal error, such as the VM unexpectedly stopping.
- [VZError.Code.invalidVirtualMachineConfiguration](code/invalidvirtualmachineconfiguration.md): An invalid configuration error.
- [VZError.Code.invalidVirtualMachineState](code/invalidvirtualmachinestate.md): An invalid state error.
- [VZError.Code.invalidVirtualMachineStateTransition](code/invalidvirtualmachinestatetransition.md): An invalid state transition error.
- [VZError.Code.invalidDiskImage](code/invaliddiskimage.md): An invalid disk-image error.
- [VZError.Code.virtualMachineLimitExceeded](code/virtualmachinelimitexceeded.md): Unable to create an additional VM.
- [VZError.Code.networkError](code/networkerror.md): A network error, such as a failed connection error, occurred.
- [VZError.Code.notSupported](code/notsupported.md): The host computer or operating system isn’t supported.
- [VZError.Code.outOfDiskSpace](code/outofdiskspace.md): The host is out of disk space.
- [VZError.Code.operationCancelled](code/operationcancelled.md): The code that indicates user canceled the installation of Rosetta or the app canceled the installation of a guest OS.
- [VZError.Code.installationFailed](code/installationfailed.md): An error occurred during installation.
- [VZError.Code.installationRequiresUpdate](code/installationrequiresupdate.md): The VM requires a software update in order to complete the installation.
- [VZError.Code.invalidRestoreImage](code/invalidrestoreimage.md): The restore image is invalid.
- [VZError.Code.invalidRestoreImageCatalog](code/invalidrestoreimagecatalog.md): The restore image catalog is invalid.
- [VZError.Code.noSupportedRestoreImagesInCatalog](code/nosupportedrestoreimagesincatalog.md): The restore image catalog has no supported restore images.
- [VZError.Code.restoreImageCatalogLoadFailed](code/restoreimagecatalogloadfailed.md): The restore image catalog failed to load.
- [VZError.Code.restoreImageLoadFailed](code/restoreimageloadfailed.md): The restore image failed to load.
- [VZError.Code.networkBlockDeviceNegotiationFailed](code/networkblockdevicenegotiationfailed.md): The connection or the negotiation with the network block device server failed.
- [VZError.Code.networkBlockDeviceDisconnected](code/networkblockdevicedisconnected.md): The network block device client disconnected from the server.
- [VZError.Code.restore](code/restore.md): The VM failed to restore from save file.
- [VZError.Code.save](code/save.md): The VM failed to save to the save file.
- [VZError.Code.deviceAlreadyAttached](code/devicealreadyattached.md): The device already has an attachment to the VM.
- [VZError.Code.deviceInitializationFailure](code/deviceinitializationfailure.md): A device initialization failure.
- [VZError.Code.deviceNotFound](code/devicenotfound.md): The framework can’t find the device.
- [VZError.Code.usbControllerNotFound](code/usbcontrollernotfound.md): The framework can’t find the controller.

### Enumeration Cases

- [VZError.Code.efiSecureBootEnrollmentFailed](code/efisecurebootenrollmentfailed.md): An error that indicates the Secure Boot signatures failed to enroll.
- [VZError.Code.efiVariableInaccessible](code/efivariableinaccessible.md): An error that indicates the framework can’t access the EFI variable store.
- [VZError.Code.guestProvisioningInvalidFullName](code/guestprovisioninginvalidfullname.md): An error that indicates the full name for guest provisioning is invalid.
- [VZError.Code.guestProvisioningInvalidPassword](code/guestprovisioninginvalidpassword.md): An error that indicates the password for guest provisioning is invalid.
- [VZError.Code.guestProvisioningInvalidUsername](code/guestprovisioninginvalidusername.md): An error that indicates the username for guest provisioning is invalid.

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

### Getting the error codes

- [internalError](internalerror.md): An internal error occurred.
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

# VZErrorCode (Objective-C)

**Framework:** Virtualization  
**Kind:** Enumeration  
**Availability:** macOS 11.0+

Errors you might encounter when configuring or using a virtual machine.

## Declaration

```objectivec
enum VZErrorCode : NSInteger;
```

<a id="overview"></a>

## Overview

The domain for these errors is [VZErrorDomain](../vzerrordomain.md). When an error originates in a different component, the [NSError](https://developer.apple.com/documentation/foundation/nserror) object contains the domain of that component.

## Topics

### Error codes

- [VZErrorInternal](code/internalerror.md): An internal error, such as the VM unexpectedly stopping.
- [VZErrorInvalidVirtualMachineConfiguration](code/invalidvirtualmachineconfiguration.md): An invalid configuration error.
- [VZErrorInvalidVirtualMachineState](code/invalidvirtualmachinestate.md): An invalid state error.
- [VZErrorInvalidVirtualMachineStateTransition](code/invalidvirtualmachinestatetransition.md): An invalid state transition error.
- [VZErrorInvalidDiskImage](code/invaliddiskimage.md): An invalid disk-image error.
- [VZErrorVirtualMachineLimitExceeded](code/virtualmachinelimitexceeded.md): Unable to create an additional VM.
- [VZErrorNetworkError](code/networkerror.md): A network error, such as a failed connection error, occurred.
- [VZErrorNotSupported](code/notsupported.md): The host computer or operating system isn’t supported.
- [VZErrorOutOfDiskSpace](code/outofdiskspace.md): The host is out of disk space.
- [VZErrorOperationCancelled](code/operationcancelled.md): The code that indicates user canceled the installation of Rosetta or the app canceled the installation of a guest OS.
- [VZErrorInstallationFailed](code/installationfailed.md): An error occurred during installation.
- [VZErrorInstallationRequiresUpdate](code/installationrequiresupdate.md): The VM requires a software update in order to complete the installation.
- [VZErrorInvalidRestoreImage](code/invalidrestoreimage.md): The restore image is invalid.
- [VZErrorInvalidRestoreImageCatalog](code/invalidrestoreimagecatalog.md): The restore image catalog is invalid.
- [VZErrorNoSupportedRestoreImagesInCatalog](code/nosupportedrestoreimagesincatalog.md): The restore image catalog has no supported restore images.
- [VZErrorRestoreImageCatalogLoadFailed](code/restoreimagecatalogloadfailed.md): The restore image catalog failed to load.
- [VZErrorRestoreImageLoadFailed](code/restoreimageloadfailed.md): The restore image failed to load.
- [VZErrorNetworkBlockDeviceNegotiationFailed](code/networkblockdevicenegotiationfailed.md): The connection or the negotiation with the network block device server failed.
- [VZErrorNetworkBlockDeviceDisconnected](code/networkblockdevicedisconnected.md): The network block device client disconnected from the server.
- [VZErrorRestore](code/restore.md): The VM failed to restore from save file.
- [VZErrorSave](code/save.md): The VM failed to save to the save file.
- [VZErrorDeviceAlreadyAttached](code/devicealreadyattached.md): The device already has an attachment to the VM.
- [VZErrorDeviceInitializationFailure](code/deviceinitializationfailure.md): A device initialization failure.
- [VZErrorDeviceNotFound](code/devicenotfound.md): The framework can’t find the device.
- [VZErrorUSBControllerNotFound](code/usbcontrollernotfound.md): The framework can’t find the controller.
- [VZErrorInternal](code/internalerror.md): An internal error, such as the VM unexpectedly stopping.
- [VZErrorInvalidVirtualMachineConfiguration](code/invalidvirtualmachineconfiguration.md): An invalid configuration error.
- [VZErrorInvalidVirtualMachineState](code/invalidvirtualmachinestate.md): An invalid state error.
- [VZErrorInvalidVirtualMachineStateTransition](code/invalidvirtualmachinestatetransition.md): An invalid state transition error.
- [VZErrorInvalidDiskImage](code/invaliddiskimage.md): An invalid disk-image error.
- [VZErrorVirtualMachineLimitExceeded](code/virtualmachinelimitexceeded.md): Unable to create an additional VM.
- [VZErrorNetworkError](code/networkerror.md): A network error, such as a failed connection error, occurred.
- [VZErrorNotSupported](code/notsupported.md): The host computer or operating system isn’t supported.
- [VZErrorOutOfDiskSpace](code/outofdiskspace.md): The host is out of disk space.
- [VZErrorOperationCancelled](code/operationcancelled.md): The code that indicates user canceled the installation of Rosetta or the app canceled the installation of a guest OS.
- [VZErrorInstallationFailed](code/installationfailed.md): An error occurred during installation.
- [VZErrorInstallationRequiresUpdate](code/installationrequiresupdate.md): The VM requires a software update in order to complete the installation.
- [VZErrorInvalidRestoreImage](code/invalidrestoreimage.md): The restore image is invalid.
- [VZErrorInvalidRestoreImageCatalog](code/invalidrestoreimagecatalog.md): The restore image catalog is invalid.
- [VZErrorNoSupportedRestoreImagesInCatalog](code/nosupportedrestoreimagesincatalog.md): The restore image catalog has no supported restore images.
- [VZErrorRestoreImageCatalogLoadFailed](code/restoreimagecatalogloadfailed.md): The restore image catalog failed to load.
- [VZErrorRestoreImageLoadFailed](code/restoreimageloadfailed.md): The restore image failed to load.
- [VZErrorNetworkBlockDeviceNegotiationFailed](code/networkblockdevicenegotiationfailed.md): The connection or the negotiation with the network block device server failed.
- [VZErrorNetworkBlockDeviceDisconnected](code/networkblockdevicedisconnected.md): The network block device client disconnected from the server.
- [VZErrorRestore](code/restore.md): The VM failed to restore from save file.
- [VZErrorSave](code/save.md): The VM failed to save to the save file.
- [VZErrorDeviceAlreadyAttached](code/devicealreadyattached.md): The device already has an attachment to the VM.
- [VZErrorDeviceInitializationFailure](code/deviceinitializationfailure.md): A device initialization failure.
- [VZErrorDeviceNotFound](code/devicenotfound.md): The framework can’t find the device.
- [VZErrorUSBControllerNotFound](code/usbcontrollernotfound.md): The framework can’t find the controller.

### Enumeration Cases

- [VZErrorEFISecureBootEnrollmentFailed](code/efisecurebootenrollmentfailed.md): An error that indicates the Secure Boot signatures failed to enroll.
- [VZErrorEFIVariableInaccessible](code/efivariableinaccessible.md): An error that indicates the framework can’t access the EFI variable store.
- [VZErrorGuestProvisioningInvalidFullName](code/guestprovisioninginvalidfullname.md): An error that indicates the full name for guest provisioning is invalid.
- [VZErrorGuestProvisioningInvalidPassword](code/guestprovisioninginvalidpassword.md): An error that indicates the password for guest provisioning is invalid.
- [VZErrorGuestProvisioningInvalidUsername](code/guestprovisioninginvalidusername.md): An error that indicates the username for guest provisioning is invalid.
