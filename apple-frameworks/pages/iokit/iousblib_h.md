> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousblib_h](https://developer.apple.com/documentation/iokit/iousblib_h)

# IOUSBLib.h

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** API Collection

<a id="overview"></a>

## Overview

This documentation describes the details of the programming interface for accessing USB devices and USB interfaces from code running in user space. This documentation assumes that you have a basic understanding of the material contained in [Introduction to Accessing Hardware From Applications](https://developer.apple.com/library/archive/documentation/DeviceDrivers/Conceptual/AccessingHardware/AH_Intro/AH_Intro.html#//apple_ref/doc/uid/TP40002714).

This documentation also assumes you have read [Working With USB Device Interfaces](https://developer.apple.com/library/archive/documentation/DeviceDrivers/Conceptual/USBBook/USBDeviceInterfaces/USBDevInterfaces.html#//apple_ref/doc/uid/TP40002645). Please review that document before using this reference.

All of the information described in this document is contained in the header file `IOUSBLib.h` found at `/System/Library/Frameworks/IOKit.framework/Headers/usb/IOUSBLib.h`.

<a id="1818593"></a>

### Included Headers

- \<IOKit/usb/USB.h\>
- \<IOKit/IOKitLib.h\>
- \<CoreFoundation/CFRunLoop.h\>
- \<CoreFoundation/CFPlugIn.h\>
- \<CoreFoundation/CFPlugInCOM.h\>
- \<sys/cdefs.h\>

## Topics

### Miscellaneous

- [FindNextAltInterface](iousblib_h/1809466-findnextaltinterface.md)
- [FindNextAssociatedDescriptor](iousblib_h/1809475-findnextassociateddescriptor.md): Find the next descriptor of the requested type associated with the interface.
- [GetBusFrameNumberWithTime](iousblib_h/1809485-getbusframenumberwithtime.md): Gets a recent frame number of the bus to which the device is attached, along with a system time corresponding to the start of that frame
- [GetPipePropertiesV2](iousblib_h/1809494-getpipepropertiesv2.md): Gets the properties for a pipe, including the USB SuperSpeed endpoint companion properties.

### Constants

- [Defines](iousblib_h/defines.md)
