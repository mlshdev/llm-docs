> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidelementupdate](https://developer.apple.com/documentation/corehid/hidelementupdate)

# HIDElementUpdate

**Framework:** Core HID  
**Kind:** Protocol  
**Availability:** macOS 15.0+

A base protocol for element update types.

## Declaration

```swift
protocol HIDElementUpdate : Hashable, Sendable
```

<a id="overview"></a>

## Overview

Not intended to be used directly, see [HIDDeviceClient.ProvideElementUpdate](hiddeviceclient/provideelementupdate.md) and [HIDDeviceClient.RequestElementUpdate](hiddeviceclient/requestelementupdate.md).

## Relationships

### Inherits From

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [HIDDeviceClient.ProvideElementUpdate](hiddeviceclient/provideelementupdate.md)
- [HIDDeviceClient.RequestElementUpdate](hiddeviceclient/requestelementupdate.md)

## See Also

### Interaction

- [Communicating with human interface devices](communicatingwithhiddevices.md): Interact with and obtain data from devices such as keyboards and mice.
- [HIDDeviceClient](hiddeviceclient.md): A client of a physical or virtual HID compatible peripheral.
- [HIDElement](hidelement.md): A representation of an item from a report descriptor for a HID device.
- [HIDElementCollection](hidelementcollection.md): A collection of items from a report descriptor for a HID device.
- [HIDElement.Value](hidelement/value.md): Data associated with a HID element.
- [HIDReportType](hidreporttype.md): Types for HID reports.
- [HIDReportID](hidreportid.md): A type to represent the report IDs of HID reports.
- [HIDUsage](hidusage.md): A type to represent HID usage pages.
- [HIDDeviceError](hiddeviceerror.md): Errors that the framework can throw.
- [HIDDeviceTransport](hiddevicetransport.md): Common transport types that transmit data to or from a HID device.
- [HIDDeviceLocalizationCode](hiddevicelocalizationcode.md): The localization codes that some HID devices declare to specify conformance to a certain format or language.
