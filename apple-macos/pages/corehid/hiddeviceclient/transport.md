> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hiddeviceclient/transport](https://developer.apple.com/documentation/corehid/hiddeviceclient/transport)

# transport

**Framework:** Core HID  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The data transport for the device.

## Declaration

```swift
var transport: HIDDeviceTransport? { get }
```

## Mentioned In

- [Communicating with human interface devices](../communicatingwithhiddevices.md)

<a id="discussion"></a>

## Discussion

A [HIDDeviceTransport](../hiddevicetransport.md) that specifies the type of transport the data sent to and from the device uses, if known.

## See Also

### Get device information

- [descriptor](descriptor.md): The HID specification compliant report descriptor for the associated HID device.
- [deviceUsages](deviceusages.md): A convenient list of all the usages that the device supports.
- [isBuiltIn](isbuiltin.md): A Boolean value that determines whether the device is built-in to the system or an external peripheral.
- [localizationCode](localizationcode.md): A location code that specifies the HID compliant localization code, if there is one.
- [locationID](locationid.md): The location ID for the device, if there is one.
- [manufacturer](manufacturer.md): The manufacturer of the device, if known.
- [modelNumber](modelnumber.md): The model number for the device, if known.
- [primaryUsage](primaryusage.md): The HID specification compliant usage for the device.
- [product](product.md): The product name for the device, if known.
- [productID](productid.md): The product ID for the device.
- [serialNumber](serialnumber.md): The serial number of the device, if known.
- [uniqueID](uniqueid.md): A unique ID for the device, if there is one.
- [vendorID](vendorid.md): The vendor ID for the device.
- [versionNumber](versionnumber.md): The version of the device, if known.
- [elements](elements.md): All HID elements associated with the device.
