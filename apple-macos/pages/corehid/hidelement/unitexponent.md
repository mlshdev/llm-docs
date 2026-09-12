> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidelement/unitexponent](https://developer.apple.com/documentation/corehid/hidelement/unitexponent)

# unitExponent

**Framework:** Core HID  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The calculated exponent for this element.

## Declaration

```swift
var unitExponent: Int8?
```

<a id="discussion"></a>

## Discussion

Some items in the report descriptor have exponent codes associated with them. The code specifies the exponent that should be applied to the scaled and shifted logical value to calculate the physical value. The value here represents the actual exponent value, calculated from the code specified in the report descriptor.
