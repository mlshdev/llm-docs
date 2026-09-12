> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidelement/value/init(element:fromlogicalvaluetruncatingifneeded:timestamp:)](https://developer.apple.com/documentation/corehid/hidelement/value/init(element:fromlogicalvaluetruncatingifneeded:timestamp:))

# init(element:fromLogicalValueTruncatingIfNeeded:timestamp:)

**Framework:** Core HID  
**Kind:** Initializer  
**Availability:** macOS 15.0+

Creates a HID element value from a logical value.

## Declaration

```swift
init?<IntegerType>(element: HIDElement, fromLogicalValueTruncatingIfNeeded: IntegerType, timestamp: SuspendingClock.Instant) where IntegerType : FixedWidthInteger
```

## Parameters

- `element`: The element associated with this value.
- `fromLogicalValueTruncatingIfNeeded`: An integer to use for the value’s [bytes](bytes.md), truncating or extending the bytes as necessary.
- `timestamp`: The time that the value was created.

<a id="discussion"></a>

## Discussion

The raw value and physical value are calculated; both must be valid.

## See Also

### Create a HID element from a value

- [init(element:fromBytes:timestamp:)](init%28element_frombytes_timestamp_%29.md): Creates a value for an HID element.
- [init(element:fromPhysicalValue:timestamp:)](init%28element_fromphysicalvalue_timestamp_%29.md): Creates a HID element value from a physical value.
- [init(element:fromIntegerTruncatingIfNeeded:timestamp:)](init%28element_fromintegertruncatingifneeded_timestamp_%29.md): Creates an HID element value from an integer.
- [element](element.md): The [HIDElement](../../hidelement.md) associated with this value.
