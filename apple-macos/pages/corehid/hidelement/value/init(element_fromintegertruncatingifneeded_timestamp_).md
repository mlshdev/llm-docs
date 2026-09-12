> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidelement/value/init(element:fromintegertruncatingifneeded:timestamp:)](https://developer.apple.com/documentation/corehid/hidelement/value/init(element:fromintegertruncatingifneeded:timestamp:))

# init(element:fromIntegerTruncatingIfNeeded:timestamp:)

**Framework:** Core HID  
**Kind:** Initializer  
**Availability:** macOS 15.0+

Creates an HID element value from an integer.

## Declaration

```swift
init<IntegerType>(element: HIDElement, fromIntegerTruncatingIfNeeded: IntegerType, timestamp: SuspendingClock.Instant) where IntegerType : FixedWidthInteger
```

## Parameters

- `element`: The element associated with this value.
- `fromIntegerTruncatingIfNeeded`: An integer to use for the value’s [bytes](bytes.md), truncating or extending the bytes as necessary.
- `timestamp`: The time that the value was created.

<a id="discussion"></a>

## Discussion

The logical and physical values are calculated, but don’t need to be valid.

## See Also

### Create a HID element from a value

- [init(element:fromBytes:timestamp:)](init%28element_frombytes_timestamp_%29.md): Creates a value for an HID element.
- [init(element:fromPhysicalValue:timestamp:)](init%28element_fromphysicalvalue_timestamp_%29.md): Creates a HID element value from a physical value.
- [init(element:fromLogicalValueTruncatingIfNeeded:timestamp:)](init%28element_fromlogicalvaluetruncatingifneeded_timestamp_%29.md): Creates a HID element value from a logical value.
- [element](element.md): The [HIDElement](../../hidelement.md) associated with this value.
