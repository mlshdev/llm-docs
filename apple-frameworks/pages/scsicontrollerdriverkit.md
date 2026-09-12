> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsicontrollerdriverkit](https://developer.apple.com/documentation/scsicontrollerdriverkit)

# SCSIControllerDriverKit

**Interface language:** Objective-C

**Framework:** SCSIControllerDriverKit  
**Kind:** Framework  
**Availability:** DriverKit 20.4+

Develop drivers for SCSI protocol-based devices.

<a id="overview"></a>

## Overview

The SCSIControllerDriverKit framework supports the development of DriverKit extension (dext) drivers for devices that communicate using SCSI protocols.

Develop your driver by subclassing [IOUserSCSIParallelInterfaceController](scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller.md), overriding all methods the framework declares as pure virtual. Then package your driver in an app that uses the [System Extensions](https://developer.apple.com/documentation/systemextensions) framework to install and upgrade the driver on the user’s Mac.

> **Note**

>  SCSIControllerDriverKit is available on macOS.

## Topics

### Essentials

- [com.apple.developer.driverkit.family.scsicontroller](bundleresources/entitlements/com.apple.developer.driverkit.family.scsicontroller.md): A Boolean value that indicates whether to match the driver against devices with SCSI controllers.

### Samples

- [DriverKit sample code](driverkit/driverkit-sample-code.md): Explore projects that demonstrate how to write macOS device drivers with the DriverKit family of frameworks.

### Driver Interfaces

- [IOUserSCSIParallelInterfaceController](scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller.md): A DriverKit provider object that manages communications with SCSI-based devices.

### Macros

- [Macros](scsicontrollerdriverkit/scsicontrollerdriverkit-macros.md)
- [kMaxBundledParallelTasks](scsicontrollerdriverkit/kmaxbundledparalleltasks.md)
