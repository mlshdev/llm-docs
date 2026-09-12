> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbserialdriverkit](https://developer.apple.com/documentation/usbserialdriverkit)

# USBSerialDriverKit

**Interface language:** Objective-C

**Framework:** USBSerialDriverKit  
**Kind:** Framework  
**Availability:** DriverKit 19.0+

Develop drivers for serial USB devices connected to your Mac.

<a id="overview"></a>

## Overview

Use the USBSerialDriverKit framework to develop drivers that communicate with USB devices using serial protocols. This framework augments the behavior of the [SerialDriverKit](serialdriverkit.md) framework by configuring the buffers and endpoints needed to transfer data to and from the device. You handle the initial configuration of your device, and the framework manages the transfer of data to and from that device.

Package your driver in an app that uses the [System Extensions](https://developer.apple.com/documentation/systemextensions) framework to install and upgrade the driver on the user’s Mac.

> **Note**

>  USBSerialDriverKit is available on macOS.

## Topics

### Samples

- [DriverKit sample code](driverkit/driverkit-sample-code.md): Explore projects that demonstrate how to write macOS device drivers with the DriverKit family of frameworks.

### Serial USB Interface

- [com.apple.developer.driverkit.family.serial](bundleresources/entitlements/com.apple.developer.driverkit.family.serial.md): A Boolean value that indicates whether to match the driver against devices with serial communication interfaces.
- [IOUserUSBSerial](usbserialdriverkit/iouserusbserial.md): A service that manages a serial connection to a USB device.
