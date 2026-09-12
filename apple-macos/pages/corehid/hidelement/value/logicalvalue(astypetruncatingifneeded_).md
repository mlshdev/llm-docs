> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidelement/value/logicalvalue(astypetruncatingifneeded:)](https://developer.apple.com/documentation/corehid/hidelement/value/logicalvalue(astypetruncatingifneeded:))

# logicalValue(asTypeTruncatingIfNeeded:)

**Framework:** Core HID  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

The raw value of the data cast as an integer type and bound by the [HIDElement](../../hidelement.md)’s logical minimum and logical maximum values.

## Declaration

```swift
func logicalValue<IntegerType>(asTypeTruncatingIfNeeded: IntegerType.Type) -> IntegerType? where IntegerType : FixedWidthInteger
```

## Parameters

- `asTypeTruncatingIfNeeded`: The type to which to cast the underlying bytes before applying bounds, truncating or extending the bytes as necessary.

<a id="return-value"></a>

## Return Value

The data cast as the requested type, or nil if out of bounds.

<a id="discussion"></a>

## Discussion

If the raw value is out of bounds, this returns `nil`. For example, if the logical minimum and logical maximum are specified as `1` and `127` respectively, and the raw value is `0`, the logical value is undefined.

## See Also

### Get element data and values

- [bytes](bytes.md): The data as an array of bytes.
- [integerValue(asTypeTruncatingIfNeeded:)](integervalue%28astypetruncatingifneeded_%29.md): The raw value of the data cast as an integer type, with no transformations applied.
- [physicalValue(fromTypeTruncatingIfNeeded:as:)](physicalvalue%28fromtypetruncatingifneeded_as_%29.md): The logical value of the data, shifted and scaled by the [HIDElement](../../hidelement.md)’s physical minimum, physical maximum and exponent.
- [timestamp](timestamp.md): The time that this data was received by the system.
