> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohidmanager_h](https://developer.apple.com/documentation/iokit/iohidmanager_h)

# IOHIDManager.h

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** API Collection

<a id="overview"></a>

## Overview

IOHIDManager defines an Human Interface Device (HID) management object. It provides global interaction with managed HID devices such as discovery/removal and receiving input events. IOHIDManager is also a CFType object and as such conforms to all the conventions expected such object.

This documentation assumes that you have a basic understanding of the material contained in [Introduction to Accessing Hardware From Applications](https://developer.apple.com/library/archive/documentation/DeviceDrivers/Conceptual/AccessingHardware/AH_Intro/AH_Intro.html#//apple_ref/doc/uid/TP40002714).

All of the information described in this document is contained in the header file `IOHIDManager.h` found at `/System/Library/Frameworks/IOKit.framework/Headers/hid/IOHIDManager.h`.

<a id="1818343"></a>

### Included Headers

- \<IOKit/IOTypes.h\>
- \<IOKit/IOReturn.h\>
- \<IOKit/hid/IOHIDLib.h\>
- \<CoreFoundation/CoreFoundation.h\>

## Topics

### Miscellaneous

- [IOHIDManagerClose](1438405-iohidmanagerclose.md): Closes the IOHIDManager.
- [IOHIDManagerCopyDevices](1438391-iohidmanagercopydevices.md): Obtains currently enumerated devices.
- [IOHIDManagerCreate](1438383-iohidmanagercreate.md): Creates an IOHIDManager object.
- [IOHIDManagerGetProperty](1438403-iohidmanagergetproperty.md): Obtains a property of an IOHIDManager.
- [IOHIDManagerGetTypeID](1438375-iohidmanagergettypeid.md): Returns the type identifier of all IOHIDManager instances.
- [IOHIDManagerOpen](1438369-iohidmanageropen.md): Opens the IOHIDManager.
- [IOHIDManagerRegisterDeviceMatchingCallback](1438399-iohidmanagerregisterdevicematchi.md): Registers a callback to be used a device is enumerated.
- [IOHIDManagerRegisterDeviceRemovalCallback](1438376-iohidmanagerregisterdeviceremova.md): Registers a callback to be used when any enumerated device is removed.
- [IOHIDManagerRegisterInputReportCallback](1438397-iohidmanagerregisterinputreportc.md): Registers a callback to be used when an input report is issued by any enumerated device.
- [IOHIDManagerRegisterInputValueCallback](1438367-iohidmanagerregisterinputvalueca.md): Registers a callback to be used when an input value is issued by any enumerated device.
- [IOHIDManagerSaveToPropertyDomain](1438395-iohidmanagersavetopropertydomain.md): Used to write out the current properties to a specific domain.
- [IOHIDManagerScheduleWithRunLoop](1438409-iohidmanagerschedulewithrunloop.md): Schedules HID manager with run loop.
- [IOHIDManagerSetDeviceMatching](1438371-iohidmanagersetdevicematching.md): Sets matching criteria for device enumeration.
- [IOHIDManagerSetDeviceMatchingMultiple](1438387-iohidmanagersetdevicematchingmul.md): Sets multiple matching criteria for device enumeration.
- [IOHIDManagerSetInputValueMatching](1438389-iohidmanagersetinputvaluematchin.md): Sets matching criteria for input values received via IOHIDManagerRegisterInputValueCallback.
- [IOHIDManagerSetInputValueMatchingMultiple](1438379-iohidmanagersetinputvaluematchin.md): Sets multiple matching criteria for input values received via IOHIDManagerRegisterInputValueCallback.
- [IOHIDManagerSetProperty](1438401-iohidmanagersetproperty.md): Sets a property for an IOHIDManager.
- [IOHIDManagerUnscheduleFromRunLoop](1438378-iohidmanagerunschedulefromrunloo.md): Unschedules HID manager with run loop.

### Data Types

- [IOHIDManagerOptions](iohidmanageroptions.md): Various options that can be supplied to IOHIDManager functions.
- [IOHIDManagerRef](iohidmanagerref.md): This is the type of a reference to the IOHIDManager.
