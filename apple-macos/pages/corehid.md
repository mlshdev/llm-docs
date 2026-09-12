> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid](https://developer.apple.com/documentation/corehid)

# Core HID

**Framework:** Core HID  
**Kind:** Framework  
**Availability:** macOS 15.0+

Interact with keyboards, mice, and other human interface devices.

<a id="Overview"></a>

## Overview

The CoreHID framework facilitates interaction with human interface devices (HID), like a keyboard, mouse, or other device. Interactions include receiving data that a device generates, such as a key press or mouse click. CoreHID also allows sending requests to a device, such as a request to turn on an LED. You can also emulate a device connected to the system, such as a virtual game controller, and send input to other apps without physical hardware.

![An image showing the Swift logo on the left. Three arrows emerge from it and point to the right. The first arrow points to a game controller. The second arrow points to a mouse. The third arrow points to a keyboard.](https://developer.apple.com/images/com.apple.CoreHID/core-hid-overview@2x.png)

To learn more about HID devices, see the [USB standards website](https://www.usb.org/hid).

## Topics

### Discovery

- [Discovering HID devices from Terminal](corehid/discoveringhiddevicesfromterminal.md): Identify devices connected to your Mac from the command line.
- [HIDDeviceManager](corehid/hiddevicemanager.md): A helper for discovering human interface devices (HID) connected to the system.
- [HIDDeviceManager.DeviceMatchingCriteria](corehid/hiddevicemanager/devicematchingcriteria.md): Matching criteria used to filter HID devices.

### Interaction

- [Communicating with human interface devices](corehid/communicatingwithhiddevices.md): Interact with and obtain data from devices such as keyboards and mice.
- [HIDDeviceClient](corehid/hiddeviceclient.md): A client of a physical or virtual HID compatible peripheral.
- [HIDElement](corehid/hidelement.md): A representation of an item from a report descriptor for a HID device.
- [HIDElementCollection](corehid/hidelementcollection.md): A collection of items from a report descriptor for a HID device.
- [HIDElement.Value](corehid/hidelement/value.md): Data associated with a HID element.
- [HIDElementUpdate](corehid/hidelementupdate.md): A base protocol for element update types.
- [HIDReportType](corehid/hidreporttype.md): Types for HID reports.
- [HIDReportID](corehid/hidreportid.md): A type to represent the report IDs of HID reports.
- [HIDUsage](corehid/hidusage.md): A type to represent HID usage pages.
- [HIDDeviceError](corehid/hiddeviceerror.md): Errors that the framework can throw.
- [HIDDeviceTransport](corehid/hiddevicetransport.md): Common transport types that transmit data to or from a HID device.
- [HIDDeviceLocalizationCode](corehid/hiddevicelocalizationcode.md): The localization codes that some HID devices declare to specify conformance to a certain format or language.

### Simulation

- [Creating virtual devices](corehid/creatingvirtualdevices.md): Use and interact with a virtual human interface device for testing and development.
- [HIDVirtualDevice](corehid/hidvirtualdevice.md): A virtual service to emulate a HID device connected to the system.
- [HIDVirtualDeviceDelegate](corehid/hidvirtualdevicedelegate.md): The delegate to receive notifications for a virtual HID device.
- [HIDVirtualDevice.Properties](corehid/hidvirtualdevice/properties.md): The properties for a virtual HID device.
