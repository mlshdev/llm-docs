> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/controller-initialization

# Controller initialization

**Interface languages:** Swift, Objective-C

**Framework:** Matter  
**Kind:** API Collection

Initialize the object that controls Matter accessories.

<a id="overview"></a>

## Overview

These methods enable the creation and initialization of a device controller ([MTRDeviceController](mtrdevicecontroller.md)) on a specific Matter *fabric*. A fabric is a set of accessories and device controllers that can communicate with each other. You use the device controller to commission and control accessories.

## Topics

### Initialization

- [MTRDeviceControllerFactory](mtrdevicecontrollerfactory.md)
- [MTRDeviceControllerFactoryParams](mtrdevicecontrollerfactoryparams.md)
- [MTRStorage](mtrstorage.md)
- [MTROTAProviderDelegate](mtrotaproviderdelegate.md)
- [MTRFabricInfo](mtrfabricinfo.md)
- [MTRDeviceController](mtrdevicecontroller.md)
- [MTRDeviceControllerStartupParams](mtrdevicecontrollerstartupparams.md)
- [MTRKeypair](mtrkeypair.md)
- [MTROperationalCertificateIssuer](mtroperationalcertificateissuer.md)
- [MTRControllerFactory](mtrcontrollerfactory.md): Deprecated.
- [MTRControllerFactoryParams](mtrcontrollerfactoryparams.md): Deprecated.
- [MTRPersistentStorageDelegate](mtrpersistentstoragedelegate.md): Deprecated.
- [MTRNOCChainIssuer](mtrnocchainissuer.md): Deprecated.
