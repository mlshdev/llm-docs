> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbdevicecapabilitybillboard](https://developer.apple.com/documentation/usbdriverkit/iousbdevicecapabilitybillboard)

# IOUSBDeviceCapabilityBillboard

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Structure  
**Availability:** DriverKit 19.0+

The structure for the billboard device capability.

## Declaration

```objectivec
struct IOUSBDeviceCapabilityBillboard;
```

<a id="overview"></a>

## Overview

For more information about this descriptor type, see section 6.2 of the USB 3.1 specification at [http://www.usb.org](http://www.usb.org).

## Topics

### Accessing the Descriptor Properties

- [bLength](iousbdevicecapabilitybillboard/blength.md)
- [bDescriptorType](iousbdevicecapabilitybillboard/bdescriptortype.md)
- [bDevCapabilityType](iousbdevicecapabilitybillboard/bdevcapabilitytype.md)
- [iAdditionalInfoURL](iousbdevicecapabilitybillboard/iadditionalinfourl.md)
- [bNumberOfAlternateModes](iousbdevicecapabilitybillboard/bnumberofalternatemodes.md)
- [bPreferredAlternateMode](iousbdevicecapabilitybillboard/bpreferredalternatemode.md)
- [vCONNPower](iousbdevicecapabilitybillboard/vconnpower.md)
- [bmConfigured](iousbdevicecapabilitybillboard/bmconfigured.md)
- [bcdVersion](iousbdevicecapabilitybillboard/bcdversion.md)
- [bAdditionalFailureInfo](iousbdevicecapabilitybillboard/badditionalfailureinfo.md)
- [bReserved](iousbdevicecapabilitybillboard/breserved.md)
- [pAltConfigurations](iousbdevicecapabilitybillboard/paltconfigurations.md)

## See Also

### Capability Descriptors

- [IOUSBBOSDescriptor](iousbbosdescriptor.md): The structure for storing a binary object store (BOS) descriptor.
- [IOUSBDeviceCapabilityDescriptorHeader](iousbdevicecapabilitydescriptorheader.md): The device capability descriptor header.
- [IOUSBDeviceCapabilityBillboardAltConfig](iousbdevicecapabilitybillboardaltconfig.md): The structure for the billboard alternative configuration device capability.
- [IOUSBDeviceCapabilityBillboardAltConfigCompatibility](iousbdevicecapabilitybillboardaltconfigcompatibility.md): The structure for the billboard alternative configuration compatibility device capability.
- [IOUSBDeviceCapabilityBillboardAltMode](iousbdevicecapabilitybillboardaltmode.md): The structure for the billboard alternative mode device capability.
- [IOUSBDeviceCapabilityContainerID](iousbdevicecapabilitycontainerid.md): The structure for the container ID device capability.
- [IOUSBDeviceCapabilitySuperSpeedUSB](iousbdevicecapabilitysuperspeedusb.md): The structure for the super-speed USB device capability.
- [IOUSBDeviceCapabilitySuperSpeedPlusUSB](iousbdevicecapabilitysuperspeedplususb.md): The structure for the super-speed plus USB device capability.
- [IOUSBDeviceCapabilityUSB2Extension](iousbdevicecapabilityusb2extension.md): The structure for the USB 2 extension device capability.
- [IOUSBPlatformCapabilityDescriptor](iousbplatformcapabilitydescriptor.md): The structure for the platform capability descriptor.
- [tIOUSBDeviceCapabilityType](tiousbdevicecapabilitytype.md): Constants for the device capability types.
- [SuperSpeed Device Capabilities](superspeed_device_capabilities-enum.md): Constants for configuring super-speed device capabilities.
- [SuperSpeedPlus Device Capabilities](superspeedplus_device_capabiliti-enum.md): Constants for configuring super-speed plus device capabilities.
