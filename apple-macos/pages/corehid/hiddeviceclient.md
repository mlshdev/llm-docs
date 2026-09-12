> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hiddeviceclient](https://developer.apple.com/documentation/corehid/hiddeviceclient)

# HIDDeviceClient

**Framework:** Core HID  
**Kind:** Class  
**Availability:** macOS 15.0+

A client of a physical or virtual HID compatible peripheral.

## Declaration

```swift
actor HIDDeviceClient
```

## Mentioned In

- [Communicating with human interface devices](communicatingwithhiddevices.md)
- [Creating virtual devices](creatingvirtualdevices.md)

<a id="overview"></a>

## Overview

A human interface device (HID) is a computer peripheral intended to provide direction to the system from human input. The specification is a broad, industry-wide standard, maintained by the USB Implementers Forum. For more details, see [Human Interface Devices (HID) Specifications and Tools](https://www.usb.org/hid).

A [HIDDeviceClient](hiddeviceclient.md) is a connection to one HID device on the system. It’s created using a [HIDDeviceClient.DeviceReference](hiddeviceclient/devicereference-swift.struct.md), received from a [HIDDeviceManager](hiddevicemanager.md). A [HIDDeviceClient.DeviceReference](hiddeviceclient/devicereference-swift.struct.md) is a simple reference to a specific HID device. The HID peripheral can be a USB device like a wired mouse, a Bluetooth device like a wireless keyboard, an onboard sensor like an accelerometer, or even a software based, virtual peripheral created using [HIDVirtualDevice](hidvirtualdevice.md).

A [HIDDeviceClient](hiddeviceclient.md) receives device notifications, such as input HID reports that are dispatched from the device in response to human input (like a keyboard key press) in [monitorNotifications(reportIDsToMonitor:elementsToMonitor:)](hiddeviceclient/monitornotifications%28reportidstomonitor_elementstomonitor_%29.md). It sends get and set reports to the device to retrieve information or configure device functionality using [dispatchSetReportRequest(type:id:data:timeout:)](hiddeviceclient/dispatchsetreportrequest%28type_id_data_timeout_%29.md). [dispatchGetReportRequest(type:id:timeout:)](hiddeviceclient/dispatchgetreportrequest%28type_id_timeout_%29.md). It monitors or updates specific pieces of the HID report using [HIDElement](hidelement.md).

## Topics

### Create a device client

- [init(deviceReference:)](hiddeviceclient/init%28devicereference_%29.md): Creates a client for a HID device.
- [HIDDeviceClient.DeviceReference](hiddeviceclient/devicereference-swift.struct.md): A reference to a HID device on the system.
- [deviceReference](hiddeviceclient/devicereference-swift.property.md): The reference to the HID device used to create the HID client device.

### Get device information

- [descriptor](hiddeviceclient/descriptor.md): The HID specification compliant report descriptor for the associated HID device.
- [deviceUsages](hiddeviceclient/deviceusages.md): A convenient list of all the usages that the device supports.
- [isBuiltIn](hiddeviceclient/isbuiltin.md): A Boolean value that determines whether the device is built-in to the system or an external peripheral.
- [localizationCode](hiddeviceclient/localizationcode.md): A location code that specifies the HID compliant localization code, if there is one.
- [locationID](hiddeviceclient/locationid.md): The location ID for the device, if there is one.
- [manufacturer](hiddeviceclient/manufacturer.md): The manufacturer of the device, if known.
- [modelNumber](hiddeviceclient/modelnumber.md): The model number for the device, if known.
- [primaryUsage](hiddeviceclient/primaryusage.md): The HID specification compliant usage for the device.
- [product](hiddeviceclient/product.md): The product name for the device, if known.
- [productID](hiddeviceclient/productid.md): The product ID for the device.
- [serialNumber](hiddeviceclient/serialnumber.md): The serial number of the device, if known.
- [transport](hiddeviceclient/transport.md): The data transport for the device.
- [uniqueID](hiddeviceclient/uniqueid.md): A unique ID for the device, if there is one.
- [vendorID](hiddeviceclient/vendorid.md): The vendor ID for the device.
- [versionNumber](hiddeviceclient/versionnumber.md): The version of the device, if known.
- [elements](hiddeviceclient/elements.md): All HID elements associated with the device.

### Interact with the device

- [dispatchGetReportRequest(type:id:timeout:)](hiddeviceclient/dispatchgetreportrequest%28type_id_timeout_%29.md): Send a get report request to the device over the transport.
- [dispatchSetReportRequest(type:id:data:timeout:)](hiddeviceclient/dispatchsetreportrequest%28type_id_data_timeout_%29.md): Send a set report request to the device over the transport.
- [seizeDevice()](hiddeviceclient/seizedevice%28%29.md): Attempt to obtain the device so that this client is the only active client.

### Monitor device notifications

- [monitorNotifications(reportIDsToMonitor:elementsToMonitor:)](hiddeviceclient/monitornotifications%28reportidstomonitor_elementstomonitor_%29.md): Creates an asynchronous that receives notifications about the associated device.
- [HIDDeviceClient.Notification](hiddeviceclient/notification.md): Notifications for a HID device.

### Update element values

- [updateElements(\_:timeout:)](hiddeviceclient/updateelements%28__timeout_%29.md): Provide new update values for, or request current values from, lists of elements.
- [HIDDeviceClient.RequestElementUpdate](hiddeviceclient/requestelementupdate.md): A request to pull the current value from a list of HID elements
- [HIDDeviceClient.ProvideElementUpdate](hiddeviceclient/provideelementupdate.md): A structure that provides values for a list of HID elements.
- [HIDDeviceClient.HIDElementUpdateResult](hiddeviceclient/hidelementupdateresult.md): A class to hold the results of an element update.

### Structures

- [HIDDeviceClient.UnsafeProperty](hiddeviceclient/unsafeproperty.md): A wrapper around an object to facilitate working with subscripts.

### Subscripts

- [subscript(\_:)](hiddeviceclient/subscript%28__%29.md): Get or set a property from the device.

## Relationships

### Conforms To

- [Actor](https://developer.apple.com/documentation/swift/actor)
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
- [HIDElement](hidelement.md): A representation of an item from a report descriptor for a HID device.
- [HIDElementCollection](hidelementcollection.md): A collection of items from a report descriptor for a HID device.
- [HIDElement.Value](hidelement/value.md): Data associated with a HID element.
- [HIDElementUpdate](hidelementupdate.md): A base protocol for element update types.
- [HIDReportType](hidreporttype.md): Types for HID reports.
- [HIDReportID](hidreportid.md): A type to represent the report IDs of HID reports.
- [HIDUsage](hidusage.md): A type to represent HID usage pages.
- [HIDDeviceError](hiddeviceerror.md): Errors that the framework can throw.
- [HIDDeviceTransport](hiddevicetransport.md): Common transport types that transmit data to or from a HID device.
- [HIDDeviceLocalizationCode](hiddevicelocalizationcode.md): The localization codes that some HID devices declare to specify conformance to a certain format or language.
