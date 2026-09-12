> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost](https://developer.apple.com/documentation/iousbhost)

# IOUSBHost (Swift)

**Framework:** IOUSBHost  
**Kind:** Framework  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Create host-mode user space drivers for USB devices.

<a id="overview"></a>

## Overview

With the [IOUSBHost](iousbhost.md) framework, you can access custom and non–class-compliant USB devices from within your apps. Use this framework to connect to cameras, audio devices, scanners, printers, keyboards, mouse devices, MIDI keyboards, and USB hubs.

This framework refers to the USB Implementers Forum (USB-IF) *Universal Serial Bus 3.2 Specification*, Revision 1.0, September 22, 2017. You can view this specification at [http://www.usb.org/](http://www.usb.org/).

## Topics

### Function Drivers

- [IOUSBHostInterface](iousbhost/iousbhostinterface.md): The class for accessing USB-related services.
- [IOUSBHostPipe](iousbhost/iousbhostpipe.md): The class that sends control, bulk, interrupt, and isochronous input/output requests for function drivers, and manages stream capabilities.
- [IOUSBHostStream](iousbhost/iousbhoststream.md): The class responsible for sending stream data for function drivers.

### Device Drivers

- [IOUSBHostDevice](iousbhost/iousbhostdevice.md): The class that claims and configures devices, retrieves descriptors, and sends device requests.

### Base Classes

- [IOUSBHostObject](iousbhost/iousbhostobject.md): This class provides basic functionality for sending device requests and retrieving descriptors.
- [IOUSBHostIOSource](iousbhost/iousbhostiosource.md): This class provides basic functionality for deriving pipe and stream classes.

### IOServicePlane Properties

Properties on the device and interface classes in the service plane.

- [IOUSBHostInterfacePropertyKey](iousbhost/iousbhostinterfacepropertykey.md): Properties of a USB interface that describe its state.
- [IOUSBHostDevicePropertyKey](iousbhost/iousbhostdevicepropertykey.md): Properties of a USB device that describe its state.
- [IOUSBHostMatchingPropertyKey](iousbhost/iousbhostmatchingpropertykey.md): Properties for implementing the matching service.
- [IOUSBHostPropertyKey](iousbhost/iousbhostpropertykey.md): Properties that the USB host device and interface classes share.

### Error Domain

- [IOUSBHostErrorDomain](iousbhost/iousbhosterrordomain.md): The error domain for the framework.

### Classes

- [IOUSBHostCIControllerStateMachine](iousbhost/iousbhostcicontrollerstatemachine.md)
- [IOUSBHostCIDeviceStateMachine](iousbhost/iousbhostcidevicestatemachine.md)
- [IOUSBHostCIEndpointStateMachine](iousbhost/iousbhostciendpointstatemachine.md)
- [IOUSBHostCIPortStateMachine](iousbhost/iousbhostciportstatemachine.md)
- [IOUSBHostControllerInterface](iousbhost/iousbhostcontrollerinterface.md)

### Reference

- [IOUSBHost Structures](iousbhost/iousbhost-structures.md)
- [IOUSBHost Enumerations](iousbhost/iousbhost-enumerations.md)
- [IOUSBHost Constants](iousbhost/iousbhost-constants.md)
- [IOUSBHost Functions](iousbhost/iousbhost-functions.md)
- [IOUSBHost Data Types](iousbhost/iousbhost-data-types.md)

### Structures

- [IOUSBHostObjectDataOptions](iousbhost/iousbhostobjectdataoptions.md)

### Variables

- [IOUSBHostCIDeviceSpeedOther](iousbhost/iousbhostcidevicespeedother.md)

# IOUSBHost (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Framework  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Create host-mode user space drivers for USB devices.

<a id="overview"></a>

## Overview

With the [IOUSBHost](iousbhost.md) framework, you can access custom and non–class-compliant USB devices from within your apps. Use this framework to connect to cameras, audio devices, scanners, printers, keyboards, mouse devices, MIDI keyboards, and USB hubs.

This framework refers to the USB Implementers Forum (USB-IF) *Universal Serial Bus 3.2 Specification*, Revision 1.0, September 22, 2017. You can view this specification at [http://www.usb.org/](http://www.usb.org/).

## Topics

### Function Drivers

- [IOUSBHostInterface](iousbhost/iousbhostinterface.md): The class for accessing USB-related services.
- [IOUSBHostPipe](iousbhost/iousbhostpipe.md): The class that sends control, bulk, interrupt, and isochronous input/output requests for function drivers, and manages stream capabilities.
- [IOUSBHostStream](iousbhost/iousbhoststream.md): The class responsible for sending stream data for function drivers.

### Device Drivers

- [IOUSBHostDevice](iousbhost/iousbhostdevice.md): The class that claims and configures devices, retrieves descriptors, and sends device requests.

### Base Classes

- [IOUSBHostObject](iousbhost/iousbhostobject.md): This class provides basic functionality for sending device requests and retrieving descriptors.
- [IOUSBHostIOSource](iousbhost/iousbhostiosource.md): This class provides basic functionality for deriving pipe and stream classes.

### IOServicePlane Properties

Properties on the device and interface classes in the service plane.

- [IOUSBHostInterfacePropertyKey](iousbhost/iousbhostinterfacepropertykey.md): Properties of a USB interface that describe its state.
- [IOUSBHostDevicePropertyKey](iousbhost/iousbhostdevicepropertykey.md): Properties of a USB device that describe its state.
- [IOUSBHostMatchingPropertyKey](iousbhost/iousbhostmatchingpropertykey.md): Properties for implementing the matching service.
- [IOUSBHostPropertyKey](iousbhost/iousbhostpropertykey.md): Properties that the USB host device and interface classes share.

### Version Number

- [IOUSBHostVersionNumber](iousbhost/iousbhostversionnumber.md): The version number of the framework.
- [IOUSBHostVersionString](iousbhost/iousbhostversionstring.md): A string representation of the framework’s version number.

### Error Domain

- [IOUSBHostErrorDomain](iousbhost/iousbhosterrordomain.md): The error domain for the framework.

### Classes

- [IOUSBHostCIControllerStateMachine](iousbhost/iousbhostcicontrollerstatemachine.md)
- [IOUSBHostCIDeviceStateMachine](iousbhost/iousbhostcidevicestatemachine.md)
- [IOUSBHostCIEndpointStateMachine](iousbhost/iousbhostciendpointstatemachine.md)
- [IOUSBHostCIPortStateMachine](iousbhost/iousbhostciportstatemachine.md)
- [IOUSBHostControllerInterface](iousbhost/iousbhostcontrollerinterface.md)

### Reference

- [IOUSBHost Structures](iousbhost/iousbhost-structures.md)
- [IOUSBHost Enumerations](iousbhost/iousbhost-enumerations.md)
- [IOUSBHost Constants](iousbhost/iousbhost-constants.md)
- [IOUSBHost Functions](iousbhost/iousbhost-functions.md)
- [IOUSBHost Data Types](iousbhost/iousbhost-data-types.md)

### Macros

- [IOUSBHostCIMessageStatusFromMessage](iousbhost/iousbhostcimessagestatusfrommessage.md)
- [IOUSBHostCIMessageTypeFromMessage](iousbhost/iousbhostcimessagetypefrommessage.md)

### Enumerations

- [IOUSBHostObjectDataOptions](iousbhost/iousbhostobjectdataoptions.md)
