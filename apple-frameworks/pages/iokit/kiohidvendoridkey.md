> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiohidvendoridkey](https://developer.apple.com/documentation/iokit/kiohidvendoridkey)

# kIOHIDVendorIDKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key for specifying the vendor ID of the device.

## Declaration

```objectivec
#define kIOHIDVendorIDKey
```

<a id="discussion"></a>

## Discussion

The value of this key is the numerical ID that the USB-IF assigned to the manufacturer.

## See Also

### Manufacturer Keys

- [kIOHIDTransportKey](kiohidtransportkey.md): A key for specifying the transport mechanism of the device.
- [kIOHIDProductIDKey](kiohidproductidkey.md): A key for specifying the product identifier of the device.
- [kIOHIDVersionNumberKey](kiohidversionnumberkey.md): A key for specifying the version number of the device.
- [kIOHIDManufacturerKey](kiohidmanufacturerkey.md): A key that specifies the manufacturer of the device.
- [kIOHIDProductKey](kiohidproductkey.md): A key that describes the product.
- [kIOHIDSerialNumberKey](kiohidserialnumberkey.md): A key that specifies the device's serial number.
