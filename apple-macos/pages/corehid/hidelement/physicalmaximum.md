> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidelement/physicalmaximum](https://developer.apple.com/documentation/corehid/hidelement/physicalmaximum)

# physicalMaximum

**Framework:** Core HID  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The physical maximum for this element’s data.

## Declaration

```swift
var physicalMaximum: Int64?
```

<a id="discussion"></a>

## Discussion

The physical maximum combines with the physical minimum to determine the shifting and scaling required to transform the raw report data into the actual value that has meaning for the device.

See the HID specification for more details: [https://www.usb.org/hid](https://www.usb.org/hid).
