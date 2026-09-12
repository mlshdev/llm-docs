> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit](https://developer.apple.com/documentation/usbdriverkit)

# USBDriverKit

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Framework  
**Availability:** DriverKit 19.0+

Develop drivers for USB-based devices.

<a id="overview"></a>

## Overview

Use the [USBDriverKit](usbdriverkit.md) framework to develop drivers for custom or non-class-compliant USB devices for use with macOS. The objects in this framework serve as providers for your driver. Use them as is to access the device configurations, interfaces, and endpoints of the USB device. Each object provides methods for fetching any needed descriptors from the USB device, and for initiating requests to perform your driver’s custom behaviors.

Develop your driver by subclassing [IOService](driverkit/ioservice.md) in the [DriverKit](driverkit.md) framework. On macOS, use the [System Extensions](https://developer.apple.com/documentation/systemextensions) framework to install and upgrade your driver. On iPadOS, the system automatically discovers and upgrades drivers along with their host apps.

> **Note**

>  USBDriverKit is available on macOS for Intel and Apple Silicon devices, and on iPadOS for devices with an M-series chip.

## Topics

### Essentials

- [com.apple.developer.driverkit.transport.usb](bundleresources/entitlements/com.apple.developer.driverkit.transport.usb.md): An array of dictionaries that identify the USB devices the driver supports.

### Samples

- [DriverKit sample code](driverkit/driverkit-sample-code.md): Explore projects that demonstrate how to write macOS device drivers with the DriverKit family of frameworks.

### Providers

- [IOUSBHostInterface](usbdriverkit/iousbhostinterface.md): A provider object that manages interactions with an interface of the USB device.
- [IOUSBHostDevice](usbdriverkit/iousbhostdevice.md): A provider object that represents the USB device.

### Endpoint Communication

- [IOUSBHostPipe](usbdriverkit/iousbhostpipe.md): An object you use to transfer data to or from a USB endpoint.

### USB Specifications

- [USB Device Descriptors](usbdriverkit/usb-device-descriptors.md): Determine the capabilities and configuration of a device using descriptors from the USB specification.
- [Additional Specifications](usbdriverkit/additional-specifications.md): Request information from a device and get hardware and timing information.
- [Registry Property Names](usbdriverkit/registry-property-names.md): Search for specific keys in the device registry.
- [Utilities](usbdriverkit/utilities.md): Manipulate bit structures and convert integers between device- and platform-native formats.

### References

- [USBDriverKit Enumerations](usbdriverkit/usbdriverkit-enumerations.md)
- [USBDriverKit Functions](usbdriverkit/usbdriverkit-functions.md)
- [USBDriverKit Data Types](usbdriverkit/usbdriverkit-data-types.md)
- [USBDriverKit Macros](usbdriverkit/usbdriverkit-macros.md)

### Macros

- [IOUSBHOST_PROPERTY_DEPRECATED](usbdriverkit/iousbhost_property_deprecated.md)
- [kUSBHostBillboardDevicePropertyAltModeFailed](usbdriverkit/kusbhostbillboarddevicepropertyaltmodefailed.md)
- [kUSBHostBillboardDevicePropertyAltModePowerFailed](usbdriverkit/kusbhostbillboarddevicepropertyaltmodepowerfailed.md)
- [kUSBHostBillboardDevicePropertyCurrentMode](usbdriverkit/kusbhostbillboarddevicepropertycurrentmode.md)
- [kUSBHostBillboardDevicePropertyModeValueDisplayPort](usbdriverkit/kusbhostbillboarddevicepropertymodevaluedisplayport.md)
- [kUSBHostBillboardDevicePropertyModeValueThunderbolt](usbdriverkit/kusbhostbillboarddevicepropertymodevaluethunderbolt.md)
- [kUSBHostBillboardDevicePropertyModeValueUSB4](usbdriverkit/kusbhostbillboarddevicepropertymodevalueusb4.md)
- [kUSBHostBillboardDevicePropertyPreferredMode](usbdriverkit/kusbhostbillboarddevicepropertypreferredmode.md)
- [kUSBHostBillboardDevicePropertySupportedModes](usbdriverkit/kusbhostbillboarddevicepropertysupportedmodes.md)
- [kUSBHostBillboardDevicePropertyVersion](usbdriverkit/kusbhostbillboarddevicepropertyversion.md)
- [kUSBHostControllerPropertyProtocolRevision](usbdriverkit/kusbhostcontrollerpropertyprotocolrevision.md)
- [kUSBHostDevicePropertyFunction](usbdriverkit/kusbhostdevicepropertyfunction.md)
- [kUSBHostDevicePropertyIdlePolicy](usbdriverkit/kusbhostdevicepropertyidlepolicy.md)
- [kUSBHostDevicePropertyPowerSinkAllocation](usbdriverkit/kusbhostdevicepropertypowersinkallocation.md)
- [kUSBHostDevicePropertyUSB3Preferred](usbdriverkit/kusbhostdevicepropertyusb3preferred.md)
- [kUSBHostDevicePropertyUSB3Required](usbdriverkit/kusbhostdevicepropertyusb3required.md)
- [kUSBHostPortPropertyIOPortServicePath](usbdriverkit/kusbhostportpropertyioportservicepath.md)
- [kUSBHostPortPropertyProtocolCompanionRevision1](usbdriverkit/kusbhostportpropertyprotocolcompanionrevision1.md)
- [kUSBHostPortPropertyProtocolCompanionRevision2](usbdriverkit/kusbhostportpropertyprotocolcompanionrevision2.md)
- [kUSBHostPortPropertyProtocolCompanionRevision3](usbdriverkit/kusbhostportpropertyprotocolcompanionrevision3.md)
- [kUSBHostPortPropertyProtocolRevision1](usbdriverkit/kusbhostportpropertyprotocolrevision1.md)
- [kUSBHostPortPropertyProtocolRevision2](usbdriverkit/kusbhostportpropertyprotocolrevision2.md)
- [kUSBHostPortPropertyProtocolRevision3](usbdriverkit/kusbhostportpropertyprotocolrevision3.md)
- [kUSBHostPortPropertyProtocolRevision4](usbdriverkit/kusbhostportpropertyprotocolrevision4.md)
- [kUSBHostPortPropertyTransportState](usbdriverkit/kusbhostportpropertytransportstate.md)
- [kUSBHostPortPropertyUSB2ExternalRemoteWake](usbdriverkit/kusbhostportpropertyusb2externalremotewake.md)
- [kUSBHostPortPropertyUSB2Repeater](usbdriverkit/kusbhostportpropertyusb2repeater.md)
- [kUSBHostPropertyLinkSpeed](usbdriverkit/kusbhostpropertylinkspeed.md)

### Enumeration Cases

- [kIOUSBLinkSpeed10Gbps](usbdriverkit/kiousblinkspeed10gbps.md)
- [kIOUSBLinkSpeed20Gbps](usbdriverkit/kiousblinkspeed20gbps.md)
- [kIOUSBLinkSpeed40Gbps](usbdriverkit/kiousblinkspeed40gbps.md)
- [kIOUSBLinkSpeed5Gbps](usbdriverkit/kiousblinkspeed5gbps.md)
- [kIOUSBLinkSpeed80Gbps](usbdriverkit/kiousblinkspeed80gbps.md)
- [kIOUSBLinkSpeedFull](usbdriverkit/kiousblinkspeedfull.md)
- [kIOUSBLinkSpeedHigh](usbdriverkit/kiousblinkspeedhigh.md)
- [kIOUSBLinkSpeedLow](usbdriverkit/kiousblinkspeedlow.md)

### Enumerations

- [tIOUSB40LinkStateTimeout](usbdriverkit/tiousb40linkstatetimeout.md)
