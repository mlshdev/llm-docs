> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hiddevicemanager/devicematchingcriteria/vendorid](https://developer.apple.com/documentation/corehid/hiddevicemanager/devicematchingcriteria/vendorid)

# vendorID

**Framework:** Core HID  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The vendor ID for the device.

## Declaration

```swift
var vendorID: UInt32?
```

<a id="discussion"></a>

## Discussion

The vendor ID designates the vendor that produced the device. Combine the vendor ID with the [productID](productid.md) to determine the exact device.

More information about vendor IDs can be found online. The vendor ID associated with a HID device is typically a USB vendor ID (see [Information for Developers](https://www.usb.org/developers)), but can be something else, such as a Bluetooth vendor ID (see [Assigned Numbers](https://www.bluetooth.com/specifications/assigned-numbers/) in the Bluetooth specification).
