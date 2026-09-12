> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidvirtualdevice/properties/vendorid](https://developer.apple.com/documentation/corehid/hidvirtualdevice/properties/vendorid)

# vendorID

**Framework:** Core HID  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The vendor ID for the device.

## Declaration

```swift
let vendorID: UInt32
```

## Mentioned In

- [Creating virtual devices](../../creatingvirtualdevices.md)

<a id="discussion"></a>

## Discussion

The vendor ID designates the vendor that produced the device. It can be combined with [productID](productid.md) to determine the exact device.

More information about vendor IDs can be found online. The vendor ID associated with a HID device is typically a [USB vendor ID](https://www.usb.org/developers), but can be something else, such as a [Bluetooth vendor ID](https://www.bluetooth.com/specifications/assigned-numbers/).
