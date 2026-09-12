> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbdevicedescriptor/imanufacturer](https://developer.apple.com/documentation/usbdriverkit/iousbdevicedescriptor/imanufacturer)

# iManufacturer

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit 19.0+

The index of the string descriptor that describes the manufacturer.

## Declaration

```objectivec
uint8_t iManufacturer;
```

## See Also

### Getting the Device Properties

- [bLength](blength.md): The length of the descriptor in bytes.
- [bDescriptorType](bdescriptortype.md): The type of the descriptor.
- [bcdUSB](bcdusb.md): The USB specification release number with which the device complies.
- [bDeviceClass](bdeviceclass.md): The class code indicating the behavior of this device.
- [bDeviceSubClass](bdevicesubclass.md): The subclass code that further defines the behavior of this device.
- [bDeviceProtocol](bdeviceprotocol.md): The protocol that the device supports.
- [bMaxPacketSize0](bmaxpacketsize0.md): The maximum packet size for endpoint `0`, specified as an exponent value.
- [idVendor](idvendor.md): The ID of the device’s manufacturer.
- [idProduct](idproduct.md): The product ID assigned by the manufacturer.
- [bcdDevice](bcddevice.md): The release number of the device, specified as a binary-coded decimal number.
- [iProduct](iproduct.md): The index of the string descriptor that describes the product.
- [iSerialNumber](iserialnumber.md): The index of the string descriptor that describes the device’s serial number.
- [bNumConfigurations](bnumconfigurations.md): The number of configurations that the device supports.
