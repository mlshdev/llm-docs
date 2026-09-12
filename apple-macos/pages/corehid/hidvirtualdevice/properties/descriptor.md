> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidvirtualdevice/properties/descriptor](https://developer.apple.com/documentation/corehid/hidvirtualdevice/properties/descriptor)

# descriptor

**Framework:** Core HID  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The HID specification compliant report descriptor for the virtual device.

## Declaration

```swift
let descriptor: Data
```

## Mentioned In

- [Creating virtual devices](../../creatingvirtualdevices.md)

<a id="discussion"></a>

## Discussion

A report descriptor defines details about the device and the type of interactions that it can have, such as the type of input it can generate, and the queries it responds to. This is the raw descriptor in byte form.

For more details, see [Human Interface Devices (HID) Specifications and Tools](https://www.usb.org/hid).
