> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidelement/value/init(element:fromphysicalvalue:timestamp:)](https://developer.apple.com/documentation/corehid/hidelement/value/init(element:fromphysicalvalue:timestamp:))

# init(element:fromPhysicalValue:timestamp:)

**Framework:** Core HID  
**Kind:** Initializer  
**Availability:** macOS 15.0+

Creates a HID element value from a physical value.

## Declaration

```swift
init?<FloatingPointType>(element: HIDElement, fromPhysicalValue: FloatingPointType, timestamp: SuspendingClock.Instant) where FloatingPointType : BinaryFloatingPoint
```

## Parameters

- `element`: The element associated with this value.
- `timestamp`: The time that the value was created.

<a id="discussion"></a>

## Discussion

The raw value and physical value are calculated; both must be valid.

## See Also

### Create a HID element from a value

- [init(element:fromBytes:timestamp:)](init%28element_frombytes_timestamp_%29.md): Creates a value for an HID element.
- [init(element:fromLogicalValueTruncatingIfNeeded:timestamp:)](init%28element_fromlogicalvaluetruncatingifneeded_timestamp_%29.md): Creates a HID element value from a logical value.
- [init(element:fromIntegerTruncatingIfNeeded:timestamp:)](init%28element_fromintegertruncatingifneeded_timestamp_%29.md): Creates an HID element value from an integer.
- [element](element.md): The [HIDElement](../../hidelement.md) associated with this value.
