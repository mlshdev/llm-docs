> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/serialdriverkit](https://developer.apple.com/documentation/serialdriverkit)

# SerialDriverKit

**Interface language:** Objective-C

**Framework:** SerialDriverKit  
**Kind:** Framework  
**Availability:** DriverKit 19.0+

Develop drivers for serial I/O devices connected to your Mac.

<a id="overview"></a>

## Overview

The SerialDriverKit framework supports the development of drivers for devices that communicate using a serial interface. The framework lets you build drivers to support modem hardware or a universal asynchronous receiver/transmitter (UART). To create a driver that communicates serially with a USB device, use the [USBSerialDriverKit](usbserialdriverkit.md) framework instead.

Package your driver in an app that uses the [System Extensions](https://developer.apple.com/documentation/systemextensions) framework to install and upgrade the driver on the user’s Mac.

> **Note**

>  SerialDriverKit is available on macOS.

## Topics

### Samples

- [DriverKit sample code](driverkit/driverkit-sample-code.md): Explore projects that demonstrate how to write macOS device drivers with the DriverKit family of frameworks.

### Serial Interface

- [com.apple.developer.driverkit.family.serial](bundleresources/entitlements/com.apple.developer.driverkit.family.serial.md): A Boolean value that indicates whether to match the driver against devices with serial communication interfaces.
- [IOUserSerial](serialdriverkit/iouserserial.md): The class for building a service that communicates using a serial connection.

### Reference

- [SerialDriverKit Enumerations](serialdriverkit/serialdriverkit-enumerations.md)
- [SerialDriverKit Data Types](serialdriverkit/serialdriverkit-data-types.md)

### Namespaces

- [driverkit](serialdriverkit/driverkit.md)

### Macros

- [PD_RS232_S_LE](serialdriverkit/pd_rs232_s_le.md)
- [PD_RS232_S_RNG](serialdriverkit/pd_rs232_s_rng.md)
- [kIOTTYBaseNameKey](serialdriverkit/kiottybasenamekey.md)
- [kIOTTYSuffixKey](serialdriverkit/kiottysuffixkey.md)

### Enumeration Cases

- [kIOSerialMemoryArena](serialdriverkit/kioserialmemoryarena.md)
- [kIOSerialMemoryRxBuf](serialdriverkit/kioserialmemoryrxbuf.md)
- [kIOSerialMemoryTxBuf](serialdriverkit/kioserialmemorytxbuf.md)
- [kIOSerialPTYMaster](serialdriverkit/kioserialptymaster.md)
- [kIOSerialUserClient](serialdriverkit/kioserialuserclient.md)
- [kIOSerialUserClientIoctl](serialdriverkit/kioserialuserclientioctl.md)
- [kIOSerialUserClientOpen](serialdriverkit/kioserialuserclientopen.md)
- [kIOSerialUserClientPoll](serialdriverkit/kioserialuserclientpoll.md)
