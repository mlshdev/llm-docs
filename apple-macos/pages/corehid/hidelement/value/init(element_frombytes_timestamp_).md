> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidelement/value/init(element:frombytes:timestamp:)](https://developer.apple.com/documentation/corehid/hidelement/value/init(element:frombytes:timestamp:))

# init(element:fromBytes:timestamp:)

**Framework:** Core HID  
**Kind:** Initializer  
**Availability:** macOS 15.0+

Creates a value for an HID element.

## Declaration

```swift
init(element: HIDElement, fromBytes: Data, timestamp: SuspendingClock.Instant)
```

## Parameters

- `element`: The element associated with this data.
- `fromBytes`: The data as an array of bytes.
- `timestamp`: The time that the value was created.

<a id="discussion"></a>

## Discussion

The created value can be used to send a request to the associated device to update it’s current value for the element using [HIDDeviceClient.ProvideElementUpdate](../../hiddeviceclient/provideelementupdate.md).

## See Also

### Create a HID element from a value

- [init(element:fromPhysicalValue:timestamp:)](init%28element_fromphysicalvalue_timestamp_%29.md): Creates a HID element value from a physical value.
- [init(element:fromLogicalValueTruncatingIfNeeded:timestamp:)](init%28element_fromlogicalvaluetruncatingifneeded_timestamp_%29.md): Creates a HID element value from a logical value.
- [init(element:fromIntegerTruncatingIfNeeded:timestamp:)](init%28element_fromintegertruncatingifneeded_timestamp_%29.md): Creates an HID element value from an integer.
- [element](element.md): The [HIDElement](../../hidelement.md) associated with this value.
