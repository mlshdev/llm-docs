> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidelement/value/physicalvalue(fromtypetruncatingifneeded:as:)](https://developer.apple.com/documentation/corehid/hidelement/value/physicalvalue(fromtypetruncatingifneeded:as:))

# physicalValue(fromTypeTruncatingIfNeeded:as:)

**Framework:** Core HID  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

The logical value of the data, shifted and scaled by the [HIDElement](../../hidelement.md)’s physical minimum, physical maximum and exponent.

## Declaration

```swift
func physicalValue<IntegerType, FloatingType>(fromTypeTruncatingIfNeeded: IntegerType.Type, as: FloatingType.Type) -> FloatingType? where IntegerType : FixedWidthInteger, FloatingType : BinaryFloatingPoint
```

## Parameters

- `fromTypeTruncatingIfNeeded`: The type to cast the underlying bytes to before bounding, shifting and scaling; truncating or extending the bytes as necessary.
- `as`: The type to cast the calculated floating point result to before returning.

<a id="return-value"></a>

## Return Value

The calculated value cast as the requested type, or nil if out of bounds.

<a id="discussion"></a>

## Discussion

The [logicalValue(asTypeTruncatingIfNeeded:)](logicalvalue%28astypetruncatingifneeded_%29.md) is first retrieved with the specified type. If the logical value is undefined, such as when the raw value is out of bounds, the physical value is also undefined.

More information and example calculations for physical values can be found in the HID specification: See the HID specification for more details: [https://www.usb.org/hid](https://www.usb.org/hid).

## See Also

### Get element data and values

- [bytes](bytes.md): The data as an array of bytes.
- [integerValue(asTypeTruncatingIfNeeded:)](integervalue%28astypetruncatingifneeded_%29.md): The raw value of the data cast as an integer type, with no transformations applied.
- [logicalValue(asTypeTruncatingIfNeeded:)](logicalvalue%28astypetruncatingifneeded_%29.md): The raw value of the data cast as an integer type and bound by the [HIDElement](../../hidelement.md)’s logical minimum and logical maximum values.
- [timestamp](timestamp.md): The time that this data was received by the system.
