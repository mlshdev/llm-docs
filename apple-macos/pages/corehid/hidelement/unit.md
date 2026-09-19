> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corehid/hidelement/unit

# unit

**Framework:** Core HID  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The HID specification compliant unit code for this element.

## Declaration

```swift
var unit: UInt32?
```

<a id="discussion"></a>

## Discussion

The unit code specifies the physical units for the physical value, such as Seconds or Amperes.

See the HID specification for more details: [https://www.usb.org/hid](https://www.usb.org/hid).
