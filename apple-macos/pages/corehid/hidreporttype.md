> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidreporttype](https://developer.apple.com/documentation/corehid/hidreporttype)

# HIDReportType

**Framework:** Core HID  
**Kind:** Enumeration  
**Availability:** macOS 15.0+

Types for HID reports.

## Declaration

```swift
enum HIDReportType
```

<a id="overview"></a>

## Overview

For more details, see [Human Interface Devices (HID) Specifications and Tools](https://www.usb.org/hid).

## Topics

### Enumeration Cases

- [HIDReportType.feature](hidreporttype/feature.md): A feature report is bidirectional configuration data, typically used to alter device or software functionality.
- [HIDReportType.input](hidreporttype/input.md): An input report is data dispatched from the device to the system, typically sent in response to human interaction with one of the device controls.
- [HIDReportType.output](hidreporttype/output.md): An output report is data sent from the system to the device, typically used to set a device control.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Interaction

- [Communicating with human interface devices](communicatingwithhiddevices.md): Interact with and obtain data from devices such as keyboards and mice.
- [HIDDeviceClient](hiddeviceclient.md): A client of a physical or virtual HID compatible peripheral.
- [HIDElement](hidelement.md): A representation of an item from a report descriptor for a HID device.
- [HIDElementCollection](hidelementcollection.md): A collection of items from a report descriptor for a HID device.
- [HIDElement.Value](hidelement/value.md): Data associated with a HID element.
- [HIDElementUpdate](hidelementupdate.md): A base protocol for element update types.
- [HIDReportID](hidreportid.md): A type to represent the report IDs of HID reports.
- [HIDUsage](hidusage.md): A type to represent HID usage pages.
- [HIDDeviceError](hiddeviceerror.md): Errors that the framework can throw.
- [HIDDeviceTransport](hiddevicetransport.md): Common transport types that transmit data to or from a HID device.
- [HIDDeviceLocalizationCode](hiddevicelocalizationcode.md): The localization codes that some HID devices declare to specify conformance to a certain format or language.
