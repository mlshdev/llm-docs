> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hiddeviceerror](https://developer.apple.com/documentation/corehid/hiddeviceerror)

# HIDDeviceError

**Framework:** Core HID  
**Kind:** Enumeration  
**Availability:** macOS 15.0+

Errors that the framework can throw.

## Declaration

```swift
enum HIDDeviceError
```

## Topics

### Enumeration Cases

- [HIDDeviceError.aborted](hiddeviceerror/aborted.md): The request was aborted.
- [HIDDeviceError.badArgument](hiddeviceerror/badargument.md): The request contains an inappropriate argument.
- [HIDDeviceError.busy](hiddeviceerror/busy.md): The device is busy.
- [HIDDeviceError.deviceError](hiddeviceerror/deviceerror.md): There was an error with the device that couldn’t be further determined.
- [HIDDeviceError.exclusiveAccess](hiddeviceerror/exclusiveaccess.md): Another client posesses exclusive access to this device.
- [HIDDeviceError.ioError](hiddeviceerror/ioerror.md): An input/output error occurred between the host and the device.
- [HIDDeviceError.messageTooLarge](hiddeviceerror/messagetoolarge.md): The data provided to a function was too large for the device to handle.
- [HIDDeviceError.noPower](hiddeviceerror/nopower.md): The device isn’t powered.
- [HIDDeviceError.noResources](hiddeviceerror/noresources.md): The device doesn’t have the resources required to handle this request.
- [HIDDeviceError.notPermitted](hiddeviceerror/notpermitted.md): The client isn’t permitted to make this request with the provided arguments.
- [HIDDeviceError.notPrivileged](hiddeviceerror/notprivileged.md): The client doesn’t have the privileges required to make this request.
- [HIDDeviceError.notReady](hiddeviceerror/notready.md): The device isn’t ready for this request.
- [HIDDeviceError.notResponding](hiddeviceerror/notresponding.md): The device isn’t responding.
- [HIDDeviceError.timeout](hiddeviceerror/timeout.md): The request timed out.
- [HIDDeviceError.unknown(\_:)](hiddeviceerror/unknown%28__%29.md): A catch-all for uncommon errors.
- [HIDDeviceError.unsupported](hiddeviceerror/unsupported.md): The request with the provided arguments isn’t supported.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](https://developer.apple.com/documentation/foundation/localizederror)
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
- [HIDDeviceTransport](hiddevicetransport.md): Common transport types that transmit data to or from a HID device.
- [HIDDeviceLocalizationCode](hiddevicelocalizationcode.md): The localization codes that some HID devices declare to specify conformance to a certain format or language.
