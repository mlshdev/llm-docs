> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidelement/logicalminimum](https://developer.apple.com/documentation/corehid/hidelement/logicalminimum)

# logicalMinimum

**Framework:** Core HID  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The logical minimum for this element’s data.

## Declaration

```swift
var logicalMinimum: Int64?
```

<a id="discussion"></a>

## Discussion

The logical minimum is specified in the report descriptor for an element. It determines the minimum raw value that should be considered valid, anything below this value is invalid.

See the HID specification for more details: [https://www.usb.org/hid](https://www.usb.org/hid).
