> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidelement/physicalminimum](https://developer.apple.com/documentation/corehid/hidelement/physicalminimum)

# physicalMinimum

**Framework:** Core HID  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The physical minimum for this element’s data.

## Declaration

```swift
var physicalMinimum: Int64?
```

<a id="discussion"></a>

## Discussion

The physical minimum combines with the physical maximum to determine the shifting and scaling required to transform the raw report data into the actual value that has meaning for the device.

See the HID specification for more details: [https://www.usb.org/hid](https://www.usb.org/hid).
