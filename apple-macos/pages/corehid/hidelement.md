> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidelement](https://developer.apple.com/documentation/corehid/hidelement)

# HIDElement

**Framework:** Core HID  
**Kind:** Structure  
**Availability:** macOS 15.0+

A representation of an item from a report descriptor for a HID device.

## Declaration

```swift
struct HIDElement
```

## Mentioned In

- [Communicating with human interface devices](communicatingwithhiddevices.md)

<a id="overview"></a>

## Overview

A [HIDElement](hidelement.md) is an abstraction for the data in a HID report, and represents one item of data that could be sent or received in a report for a specific device. For example, for a mouse with a report descriptor that declares a report with 1 byte of data for each an X and a Y coordinate, there would be an element for the data associated with the X coordinate. If this element was monitored by a [HIDDeviceClient](hiddeviceclient.md), when an input report was received with an update to the X coordinate, a notification with the updated data would be sent to [HIDDeviceClient.Notification.elementUpdates(values:)](hiddeviceclient/notification/elementupdates%28values_%29.md).

Elements are only received by requesting the elements for a specific device through a client’s [elements](hiddeviceclient/elements.md) property.

See the HID specification for more details: [https://www.usb.org/hid](https://www.usb.org/hid).

## Topics

### Structures

- [HIDElement.Value](hidelement/value.md): Data associated with a HID element.

### Instance Properties

- [client](hidelement/client.md): The client for the device with which this element is associated.
- [logicalMaximum](hidelement/logicalmaximum.md): The logical maximum for this element’s data.
- [logicalMinimum](hidelement/logicalminimum.md): The logical minimum for this element’s data.
- [parentCollection](hidelement/parentcollection.md): The [HIDElementCollection](hidelementcollection.md) that contains this element.
- [physicalMaximum](hidelement/physicalmaximum.md): The physical maximum for this element’s data.
- [physicalMinimum](hidelement/physicalminimum.md): The physical minimum for this element’s data.
- [reportID](hidelement/reportid.md): The report ID for the report that contains this element.
- [reportSize](hidelement/reportsize.md): The size in bits of the data for this element.
- [type](hidelement/type.md): The type of this element.
- [unit](hidelement/unit.md): The HID specification compliant unit code for this element.
- [unitExponent](hidelement/unitexponent.md): The calculated exponent for this element.
- [usage](hidelement/usage.md): The HID specification compliant usage for this element.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Interaction

- [Communicating with human interface devices](communicatingwithhiddevices.md): Interact with and obtain data from devices such as keyboards and mice.
- [HIDDeviceClient](hiddeviceclient.md): A client of a physical or virtual HID compatible peripheral.
- [HIDElementCollection](hidelementcollection.md): A collection of items from a report descriptor for a HID device.
- [HIDElement.Value](hidelement/value.md): Data associated with a HID element.
- [HIDElementUpdate](hidelementupdate.md): A base protocol for element update types.
- [HIDReportType](hidreporttype.md): Types for HID reports.
- [HIDReportID](hidreportid.md): A type to represent the report IDs of HID reports.
- [HIDUsage](hidusage.md): A type to represent HID usage pages.
- [HIDDeviceError](hiddeviceerror.md): Errors that the framework can throw.
- [HIDDeviceTransport](hiddevicetransport.md): Common transport types that transmit data to or from a HID device.
- [HIDDeviceLocalizationCode](hiddevicelocalizationcode.md): The localization codes that some HID devices declare to specify conformance to a certain format or language.
