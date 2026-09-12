> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidelement/logicalmaximum](https://developer.apple.com/documentation/corehid/hidelement/logicalmaximum)

# logicalMaximum

**Framework:** Core HID  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The logical maximum for this element’s data.

## Declaration

```swift
var logicalMaximum: Int64?
```

<a id="discussion"></a>

## Discussion

The logical maximum is specified in the report descriptor for an element. It determines the maximum raw value that should be considered valid, anything above this value is invalid.

See the HID specification for more details: [https://www.usb.org/hid](https://www.usb.org/hid).
