> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iouserusbhosthiddevice/newdevicedescription](https://developer.apple.com/documentation/hiddriverkit/iouserusbhosthiddevice/newdevicedescription)

# newDeviceDescription

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Creates and returns a new dictionary that describes the HID device.

## Declaration

```objectivec
virtual OSDictionary * newDeviceDescription();
```

<a id="return-value"></a>

## Return Value

An `OSDictionary` that describes the device.

<a id="Discussion"></a>

## Discussion

This method uses the information from the USB device to create and return the dictionary of attributes. The dictionary always includes the following keys:

- [kIOHIDReportIntervalKey](../../iokit/kiohidreportintervalkey.md)
- [kIOHIDVendorIDKey](../../iokit/kiohidvendoridkey.md)
- [kIOHIDProductIDKey](../../iokit/kiohidproductidkey.md)
- [kIOHIDTransportKey](../../iokit/kiohidtransportkey.md)
- [kIOHIDVersionNumberKey](../../iokit/kiohidversionnumberkey.md)
- [kIOHIDCountryCodeKey](../../iokit/kiohidcountrycodekey.md)
- `kIOHIDRequestTimeoutKey`

The dictionary may also contain some or all of the following keys:

- [kIOHIDLocationIDKey](../../iokit/kiohidlocationidkey.md)
- [kIOHIDManufacturerKey](../../iokit/kiohidmanufacturerkey.md)
- [kIOHIDProductKey](../../iokit/kiohidproductkey.md)
- [kIOHIDSerialNumberKey](../../iokit/kiohidserialnumberkey.md)
