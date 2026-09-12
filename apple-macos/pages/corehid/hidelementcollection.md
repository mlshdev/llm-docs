> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidelementcollection](https://developer.apple.com/documentation/corehid/hidelementcollection)

# HIDElementCollection

**Framework:** Core HID  
**Kind:** Structure  
**Availability:** macOS 15.0+

A collection of items from a report descriptor for a HID device.

## Declaration

```swift
struct HIDElementCollection
```

<a id="overview"></a>

## Overview

Collections are a defined part of the HID specification to specify how groupings of data relate to each other, and provide an overall structure for the organization of device functionality.

See the HID specification for more details: [https://www.usb.org/hid](https://www.usb.org/hid).

## Topics

### Instance Properties

- [childCollections](hidelementcollection/childcollections.md): The collections contained by this collection, if there are any.
- [childElements](hidelementcollection/childelements.md): The elements contained by this collection, if there are any.
- [client](hidelementcollection/client.md): The client for the device with which this collection is associated.
- [parentCollection](hidelementcollection/parentcollection.md): The collection that contains this collection, if there is one.
- [type](hidelementcollection/type.md): The type of this collection.
- [usage](hidelementcollection/usage.md): The HID specification compliant usage for this collection.

### Enumerations

- [HIDElementCollection.CollectionType](hidelementcollection/collectiontype.md): Types of [HIDElementCollection](hidelementcollection.md)s.

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
- [HIDElement](hidelement.md): A representation of an item from a report descriptor for a HID device.
- [HIDElement.Value](hidelement/value.md): Data associated with a HID element.
- [HIDElementUpdate](hidelementupdate.md): A base protocol for element update types.
- [HIDReportType](hidreporttype.md): Types for HID reports.
- [HIDReportID](hidreportid.md): A type to represent the report IDs of HID reports.
- [HIDUsage](hidusage.md): A type to represent HID usage pages.
- [HIDDeviceError](hiddeviceerror.md): Errors that the framework can throw.
- [HIDDeviceTransport](hiddevicetransport.md): Common transport types that transmit data to or from a HID device.
- [HIDDeviceLocalizationCode](hiddevicelocalizationcode.md): The localization codes that some HID devices declare to specify conformance to a certain format or language.
