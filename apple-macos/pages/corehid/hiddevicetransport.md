> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hiddevicetransport](https://developer.apple.com/documentation/corehid/hiddevicetransport)

# HIDDeviceTransport

**Framework:** Core HID  
**Kind:** Enumeration  
**Availability:** macOS 15.0+

Common transport types that transmit data to or from a HID device.

## Declaration

```swift
enum HIDDeviceTransport
```

<a id="overview"></a>

## Overview

If a device declares an uncommon transport, the [HIDDeviceTransport.unknown(\_:)](hiddevicetransport/unknown%28__%29.md) case is used with the associated raw string value.

## Topics

### Enumeration Cases

- [HIDDeviceTransport.aid](hiddevicetransport/aid.md)
- [HIDDeviceTransport.airPlay](hiddevicetransport/airplay.md)
- [HIDDeviceTransport.bluetooth](hiddevicetransport/bluetooth.md)
- [HIDDeviceTransport.bluetoothAACP](hiddevicetransport/bluetoothaacp.md)
- [HIDDeviceTransport.bluetoothLowEnergy](hiddevicetransport/bluetoothlowenergy.md)
- [HIDDeviceTransport.fifo](hiddevicetransport/fifo.md)
- [HIDDeviceTransport.i2c](hiddevicetransport/i2c.md)
- [HIDDeviceTransport.iap](hiddevicetransport/iap.md)
- [HIDDeviceTransport.inductiveInBand](hiddevicetransport/inductiveinband.md)
- [HIDDeviceTransport.serial](hiddevicetransport/serial.md)
- [HIDDeviceTransport.spi](hiddevicetransport/spi.md)
- [HIDDeviceTransport.spu](hiddevicetransport/spu.md)
- [HIDDeviceTransport.unknown(\_:)](hiddevicetransport/unknown%28__%29.md)
- [HIDDeviceTransport.usb](hiddevicetransport/usb.md)
- [HIDDeviceTransport.virtual](hiddevicetransport/virtual.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
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
- [HIDReportID](hidreportid.md): A type to represent the report IDs of HID reports.
- [HIDUsage](hidusage.md): A type to represent HID usage pages.
- [HIDDeviceError](hiddeviceerror.md): Errors that the framework can throw.
- [HIDDeviceLocalizationCode](hiddevicelocalizationcode.md): The localization codes that some HID devices declare to specify conformance to a certain format or language.
