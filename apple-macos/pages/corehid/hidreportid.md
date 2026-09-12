> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidreportid](https://developer.apple.com/documentation/corehid/hidreportid)

# HIDReportID

**Framework:** Core HID  
**Kind:** Structure  
**Availability:** macOS 15.0+

A type to represent the report IDs of HID reports.

## Declaration

```swift
struct HIDReportID
```

## Mentioned In

- [Communicating with human interface devices](communicatingwithhiddevices.md)

<a id="overview"></a>

## Overview

Report IDs are defined to be 1 byte in the HID specification, and can help identify the reports received from or sent to a device. Report IDs are optional. If a descriptor only has one report, a report ID is unnecessary. A report ID of 0 is invalid.

For more details, see [Human Interface Devices (HID) Specifications and Tools](https://www.usb.org/hid).

## Topics

### Initializers

- [init(rawValue:)](hidreportid/init%28rawvalue_%29.md): Creates a HID report ID.

### Instance Properties

- [rawValue](hidreportid/rawvalue.md): The raw value of the report ID.

### Type Properties

- [allReports](hidreportid/allreports.md): A convenient definition that represents every possible report ID.

## Relationships

### Conforms To

- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
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
- [HIDReportType](hidreporttype.md): Types for HID reports.
- [HIDUsage](hidusage.md): A type to represent HID usage pages.
- [HIDDeviceError](hiddeviceerror.md): Errors that the framework can throw.
- [HIDDeviceTransport](hiddevicetransport.md): Common transport types that transmit data to or from a HID device.
- [HIDDeviceLocalizationCode](hiddevicelocalizationcode.md): The localization codes that some HID devices declare to specify conformance to a certain format or language.
