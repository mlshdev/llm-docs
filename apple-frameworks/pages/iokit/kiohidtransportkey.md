> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiohidtransportkey](https://developer.apple.com/documentation/iokit/kiohidtransportkey)

# kIOHIDTransportKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key for specifying the transport mechanism of the device.

## Declaration

```objectivec
#define kIOHIDTransportKey
```

<a id="discussion"></a>

## Discussion

Keys that represent properties of a particular device. Can be added to your matching dictionary when refining searches for HID devices.

## See Also

### Manufacturer Keys

- [kIOHIDVendorIDKey](kiohidvendoridkey.md): A key for specifying the vendor ID of the device.
- [kIOHIDProductIDKey](kiohidproductidkey.md): A key for specifying the product identifier of the device.
- [kIOHIDVersionNumberKey](kiohidversionnumberkey.md): A key for specifying the version number of the device.
- [kIOHIDManufacturerKey](kiohidmanufacturerkey.md): A key that specifies the manufacturer of the device.
- [kIOHIDProductKey](kiohidproductkey.md): A key that describes the product.
- [kIOHIDSerialNumberKey](kiohidserialnumberkey.md): A key that specifies the device's serial number.
