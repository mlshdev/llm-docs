> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidelement/value](https://developer.apple.com/documentation/corehid/hidelement/value)

# HIDElement.Value

**Framework:** Core HID  
**Kind:** Structure  
**Availability:** macOS 15.0+

Data associated with a HID element.

## Declaration

```swift
struct Value
```

## Mentioned In

- [Communicating with human interface devices](../communicatingwithhiddevices.md)

<a id="overview"></a>

## Overview

Elements can have data associated with them. This data could be received as an update from the device to indicate user interaction, or could be provided to the device to alter functionality, such as turning on an LED. As the data for an element could be constantly changing, values should be seen as a snapshot of the element’s data at a specific time, and not valid at any other times.

Element values can be received by a [HIDDeviceClient](../hiddeviceclient.md) using [HIDDeviceClient.Notification.elementUpdates(values:)](../hiddeviceclient/notification/elementupdates%28values_%29.md) after the device issues an input report, or requested from the device by providing a [HIDDeviceClient.RequestElementUpdate](../hiddeviceclient/requestelementupdate.md) to [updateElements(\_:timeout:)](../hiddeviceclient/updateelements%28__timeout_%29.md). Element values can be sent to a device by providing a [HIDDeviceClient.ProvideElementUpdate](../hiddeviceclient/provideelementupdate.md) to [updateElements(\_:timeout:)](../hiddeviceclient/updateelements%28__timeout_%29.md).

## Topics

### Create a HID element from a value

- [init(element:fromBytes:timestamp:)](value/init%28element_frombytes_timestamp_%29.md): Creates a value for an HID element.
- [init(element:fromPhysicalValue:timestamp:)](value/init%28element_fromphysicalvalue_timestamp_%29.md): Creates a HID element value from a physical value.
- [init(element:fromLogicalValueTruncatingIfNeeded:timestamp:)](value/init%28element_fromlogicalvaluetruncatingifneeded_timestamp_%29.md): Creates a HID element value from a logical value.
- [init(element:fromIntegerTruncatingIfNeeded:timestamp:)](value/init%28element_fromintegertruncatingifneeded_timestamp_%29.md): Creates an HID element value from an integer.
- [element](value/element.md): The [HIDElement](../hidelement.md) associated with this value.

### Get element data and values

- [bytes](value/bytes.md): The data as an array of bytes.
- [integerValue(asTypeTruncatingIfNeeded:)](value/integervalue%28astypetruncatingifneeded_%29.md): The raw value of the data cast as an integer type, with no transformations applied.
- [logicalValue(asTypeTruncatingIfNeeded:)](value/logicalvalue%28astypetruncatingifneeded_%29.md): The raw value of the data cast as an integer type and bound by the [HIDElement](../hidelement.md)’s logical minimum and logical maximum values.
- [physicalValue(fromTypeTruncatingIfNeeded:as:)](value/physicalvalue%28fromtypetruncatingifneeded_as_%29.md): The logical value of the data, shifted and scaled by the [HIDElement](../hidelement.md)’s physical minimum, physical maximum and exponent.
- [timestamp](value/timestamp.md): The time that this data was received by the system.

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

- [Communicating with human interface devices](../communicatingwithhiddevices.md): Interact with and obtain data from devices such as keyboards and mice.
- [HIDDeviceClient](../hiddeviceclient.md): A client of a physical or virtual HID compatible peripheral.
- [HIDElement](../hidelement.md): A representation of an item from a report descriptor for a HID device.
- [HIDElementCollection](../hidelementcollection.md): A collection of items from a report descriptor for a HID device.
- [HIDElementUpdate](../hidelementupdate.md): A base protocol for element update types.
- [HIDReportType](../hidreporttype.md): Types for HID reports.
- [HIDReportID](../hidreportid.md): A type to represent the report IDs of HID reports.
- [HIDUsage](../hidusage.md): A type to represent HID usage pages.
- [HIDDeviceError](../hiddeviceerror.md): Errors that the framework can throw.
- [HIDDeviceTransport](../hiddevicetransport.md): Common transport types that transmit data to or from a HID device.
- [HIDDeviceLocalizationCode](../hiddevicelocalizationcode.md): The localization codes that some HID devices declare to specify conformance to a certain format or language.
